
import { useState, useEffect } from "react";

// define a custom hook
// accept the url to connect to
// number of times the hook should retry a connection
// the interval between retries
function useWebSocketLite({
  socketUrl,
  retry: defaultRetry = 3,
  retryInterval = 1500
}) {
  // message and timestamp
  const [data, setData] = useState();
  // send function
  const [send, setSend] = useState(() => () => undefined);
  // state of our connection
  const [retry, setRetry] = useState(defaultRetry);
  // retry counter
  const [readyState, setReadyState] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(socketUrl);
    ws.onopen = () => {
      console.log('Connected to socket');
      setReadyState(true);

      // function to send messages
      setSend(() => {
        console.log('Setting send function ')
        return (mex) => {
          console.log('Sending message: ', mex)
          const d = JSON.stringify(mex);
          console.log('Sending message: ', d)
          ws.send(d);
          return true;
        
        };
      });

      // receive messages
      ws.onmessage = (event) => {
        const msg = formatMessage(event.data);
        setData({ message: msg, timestamp: getTimestamp() });
      };
    };

    // on close we should update connection state
    // and retry connection
    ws.onclose = () => {
      setReadyState(false);
      // retry logic
      if (retry > 0) {
        setTimeout(() => {
          setRetry((retry) => retry - 1);
        }, retryInterval);
      }
    };
     // terminate connection on unmount
    return () => {
      ws.close();
    };
  // retry dependency here triggers the connection attempt
  }, [retry]); 

  return { send, data, readyState };
}

// small utilities that we need
// handle json messages
function formatMessage (data) {
  try {
    const parsed = JSON.parse(data);
    return parsed;
  } catch (err) {
    return data;
  }
};

// get epoch timestamp
function getTimestamp() {
  return new Date().getTime();
}

export default useWebSocketLite;
import React, { createContext, useState } from "react"

//create obj context
const ChartInfoContext = createContext({
    content:"",
    activeContent: (option) => {},
    activeBtn: (option) => {},
    setContent: (option) => {},
    handleToggle: (checked) => {},
    theme:"",
    defaultChecked:"",

});


//export function with props and logic
export function ChartInfoContextProvider(props) {
    const [infoContent, setInfoContent] = useState("token-tx");

    const isActiveContent = (option) => {
	    return infoContent == option ? "show" : "hide";
	};

    const isActiveBtn = (option) => {
        return infoContent == option ? 'active' : '';
    }

    const handleContent = (option) => {
        setInfoContent(option)
    }



    //this changes the content color of chart in coinDetail
	const [bodyClass, setBodyClass] = useState(document.body.className)

	const setDark = () => {
	  localStorage.setItem("theme", "dark");
	  document.querySelector('body').classList.add("dark");
	  document.querySelector('body').classList.remove("light");
	};
	
	const setLight = () => {
	  localStorage.setItem("theme", "light");
	  document.querySelector('body').classList.add("light");
	  document.querySelector('body').classList.remove("dark");
	};
	
	const storedTheme = localStorage.getItem("theme");
	
	// checks if the browser have a prefer setting for theme and it will fetch that from the localstorage
	const prefersDark =  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
	// if there is, it will set the theme before pages load
	const defaultDark = storedTheme === "dark" || (storedTheme === 'light' && prefersDark);
  
	console.log('DEFAULT DARK', defaultDark, storedTheme)
  
	if (defaultDark) setDark();
	else setLight();
  
	const toggleTheme = (checked) => {
        if (checked) {
            setLight();
            setBodyClass('light')
        } else {
            setDark();
            setBodyClass('dark')
        }
	};


    //assign logic to the obj keys
    const context = {
        content:infoContent,
        activeContent: isActiveContent,
        activeBtn: isActiveBtn,
        setContent: handleContent,
        handleToggle: toggleTheme,
        theme: bodyClass,
        defaultChecked: defaultDark,
    };


    //export store provider to use it like redux provider on app.js
    return <ChartInfoContext.Provider value={context}>
        {props.children}
    </ChartInfoContext.Provider>
}

export default ChartInfoContext;
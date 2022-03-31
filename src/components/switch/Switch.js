import React, {useState, useEffect, useContext} from "react"

//style
import "./switch.css";

//img
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import ChartInfoContext from "../../store/chartInfo-context";

const Switch = ({defaultChecked, toggleTheme}) => {

    const bodyContentInfo = useContext(ChartInfoContext)

    const [hideLight, setHideLight] = useState(!bodyContentInfo.defaultChecked);
    const [hideDark, setHideDark] = useState(bodyContentInfo.defaultChecked);
    const [checked, setChecked] = useState(bodyContentInfo.defaultChecked)

    const handleChange = () => {
        setHideLight(!hideLight)
        setHideDark(!hideDark)
        bodyContentInfo.handleToggle(checked)
        setChecked(!checked)
    }

    return (
        <div className="darkmode-container" onClick={() => handleChange()}>
            <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="cm-toggle"
            checked={checked ? false : true}
            defaultChecked={defaultChecked}
            />
            <span className={hideDark ? "dark-txt" : "dark-txt hide"} >Dark</span>
            <span className={hideLight ? "light-txt" : "light-txt hide"} >Light</span>
            <img className={hideLight ? "sun" : "sun hide"} src={sun} alt=""  />
            <img className={hideDark ? "moon" : "moon hide"} src={moon} alt=""  />
        </div>
    )
}

export default Switch;
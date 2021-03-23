import "./Menu.scss";
import React, {useState} from "react";
import img from './img-nav.jpeg';

function Menu () {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  

  const closeNav = () => setIsActive(false);
  
  return(
    <div className="menu">
      <div className={isActive ? "back active" : "back"} onClick={closeNav}>
        
      </div>
      <div className={isActive ? "nav active" : "nav"}>
        <img src={img} alt="img-nav"/>
        <div className={isActive ? "text-one open" : "text text-one"}>Jean</div>
        <div className={isActive ? "text-two open" : "text text-two"}>Bitch</div>
        <div className={isActive ? "text-three open" : "text text-three"}>Janine</div>
      </div>
      <button className="button" onClick={handleToggle}>x</button>
    </div>
  )
}

export default Menu;
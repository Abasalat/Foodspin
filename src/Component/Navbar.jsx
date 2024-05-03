import React from "react";
import style from "./navbar.module.css";
import { FaFireFlameSimple } from "react-icons/fa6";
import { PiLockSimpleThin } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className={style.navbarcontainer}>
      <div className={style.left}>
        <div className={style.innerleft}>
          <div className={style.shape}>
            <FaFireFlameSimple className={style.fire} />
          </div>
          <p style={{ fontSize: "18px", fontFamily: "popo" }}>FoodSpin</p>
        </div>
        <div className={style.links}>
          {" "}
          <p>Breakfast</p>
          <p>lunch</p>
          <p>Dinner</p>
        </div>
      </div>
      <div className={style.right}>
        <PiLockSimpleThin className={style.icon1} />
      </div>
    </div>
  );
};

export default Navbar;

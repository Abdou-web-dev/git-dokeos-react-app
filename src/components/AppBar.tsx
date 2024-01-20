import { FunctionComponent } from "react";
import alert from "../assets/img/alert.svg";
import arrow from "../assets/img/arrow.svg";
import avatar from "../assets/img/avatar.svg";
import dokLogo from "../assets/img/dokeosLogo.png";
import femAvatar from "../assets/img/femAvatar.svg";
import plus from "../assets/img/plus.svg";

// interface AppBarProps {}

const AppBar: FunctionComponent = () => {
  return (
    <div className="appbar-container">
      <button className="left-content">
        <img src={dokLogo} alt="" />
      </button>

      <button className="middle-content">
        <img className="av" width={`15px`} src={avatar} alt="" />
        <span className="adm">Administration</span>
        <img className="arr" src={arrow} width={`8px`} alt="" />
      </button>

      <div className="right-content">
        <button className="plus-btn">
          <img width={`25px`} src={plus} alt="" />
        </button>
        <button className="alert-btn">
          <img width={`25px`} src={alert} alt="" />
        </button>
        <button className="fem-avatar-btn">
          <img width={`25px`} src={femAvatar} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AppBar;

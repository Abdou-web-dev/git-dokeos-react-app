import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import alert from "../assets/img/alert.svg";
import arrow from "../assets/img/arrow.svg";
import avatar from "../assets/img/avatar.svg";
import dokLogo from "../assets/img/dokeosLogo.png";
import femAvatar from "../assets/img/femAvatar.svg";
import plus from "../assets/img/plus.svg";
import { SearchContext } from "../context/SearchContext";

// interface AppBarProps {}

const AppBar: FunctionComponent = () => {
  const { setHomeTabStyles, setHomeTabTextStyles } = useContext(SearchContext);
  const navigate = useNavigate();
  // This logic is useful to manage the visual feedback and appearance of the "Home" tab based on user interactions. It's a common pattern to reset styles to default before applying new styles,
  function handleLogoClick(event: any): void {
    // reset the state
    setHomeTabStyles({}); //set the styles to default
    setHomeTabTextStyles({}); //set the styles to default
    navigate("/home");
    let customStyles = {
      background: "#0084a8",
    };
    let textCustomStyles = {
      color: "white",
    };

    setHomeTabStyles(customStyles);
    setHomeTabTextStyles(textCustomStyles);
  }

  return (
    <div className="appbar-container">
      <button
        onClick={handleLogoClick}
        onBlur={() => {
          const customStylesBlur = {
            background: "none",
            color: "black",
          };
          setHomeTabStyles(customStylesBlur);

          let textCustomStylesBlur = {
            color: "#878787",
          };
          setHomeTabTextStyles(textCustomStylesBlur);
        }}
        className="left-content"
      >
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

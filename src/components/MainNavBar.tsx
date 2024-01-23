import { useContext } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import chart from "../assets/img/menu_icons/chart-svgrepo-com.svg";
import home from "../assets/img/menu_icons/home.svg";
import module from "../assets/img/menu_icons/module-svgrepo-com.svg";
import settings from "../assets/img/menu_icons/settings-svgrepo-com.svg";
import share from "../assets/img/menu_icons/share-svgrepo-com.svg";
import training from "../assets/img/menu_icons/training-mat-svgrepo-com.svg";
import users from "../assets/img/menu_icons/users-svgrepo-com.svg";
import calendars from "../assets/img/menu_icons/wall-calendars-flipping-pages-svgrepo-com.svg";
import { SearchContext } from "../context/SearchContext";

const MainNavBar = () => {
  const {
    homeTabStyles,
    homeTabTextStyles,
    setHomeTabStyles,
    setHomeTabTextStyles,
  } = useContext(SearchContext);
  // SideMenuType["sideMenu"]
  const menuItems = [
    { to: "/home", label: "Home", logo: home },
    { to: "/users", label: "Users", logo: users },
    { to: "/status", label: "Status", logo: chart },
    { to: "/training", label: "Training", logo: training },
    { to: "/module", label: "Module", logo: module },
    { to: "/catalogue", label: "Catalogue", logo: calendars },
    {
      logo: settings,
      submenuItems: [
        {
          to: "/params/custom",
          label: "Personnalisation du portail",
          // , logo: share
        },
        {
          to: "/params/recap",
          label: "Récapitulatif des certificats",
          // , logo: share
        },
      ],
    },
    {
      to: "/partner",
      label: "Portails du partenaire",
      logo: share,
    },
  ];

  // Overall, this code manages styles for the "Home" tab in response to various interactions, and it uses context to share and update these styles across components.

  function handleMenuItemClick(item: {
    to: string;
    label: string;
    logo: string;
    submenuItems?:
      | {
          to: string;
          label: string;
        }[]
      | undefined;
  }): void {
    if (item.label != "Home") {
      setHomeTabStyles({}); //set the styles to default
      setHomeTabTextStyles({}); //set the styles to default
    }
  }

  function handleSubMenuItemClick(subItemElem: { to: string; label: string }) {
    setHomeTabStyles({}); //set the styles to default
    setHomeTabTextStyles({}); //set the styles to default
  }

  return (
    <Sidebar className="sidebar-container">
      <Menu>
        {menuItems?.map((item, index) =>
          item.submenuItems ? (
            <SubMenu
              key={index}
              className="sub-menu-elem"
              label="Parametres"
              title={item.label}
              icon={<img width={`22px`} src={item.logo} alt="" />}
            >
              {item.submenuItems.map((subItem) => (
                <MenuItem
                  onClick={() => handleSubMenuItemClick(subItem)}
                  key={subItem.to}
                  component={<Link to={subItem.to} />}
                >
                  {/* <img width={`22px`} src={subItem?.logo || ""} alt="" /> */}
                  {subItem.label}
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem
              onClick={() => handleMenuItemClick(item)}
              style={item.label === "Home" ? homeTabStyles : {}}
              className={
                item.label === "Portails du partenaire"
                  ? "partner-menuitem"
                  : ""
              }
              key={item.to}
              component={<Link to={item.to} />}
              // this is rendered as li tag
            >
              <img width={`22px`} src={item.logo} alt="" />
              <span style={item.label === "Home" ? homeTabTextStyles : {}}>
                {item.label}
              </span>
            </MenuItem>
          )
        )}
      </Menu>
    </Sidebar>
  );
};

export default MainNavBar;

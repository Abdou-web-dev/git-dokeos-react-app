import { useState } from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import chart from "../assets/img/menu_icons/chart-svgrepo-com.svg";
import module from "../assets/img/menu_icons/module-svgrepo-com.svg";
import settings from "../assets/img/menu_icons/settings-svgrepo-com.svg";
import share from "../assets/img/menu_icons/share-svgrepo-com.svg";
import training from "../assets/img/menu_icons/training-mat-svgrepo-com.svg";
import users from "../assets/img/menu_icons/users-svgrepo-com.svg";
import calendars from "../assets/img/menu_icons/wall-calendars-flipping-pages-svgrepo-com.svg";

const MainNavBar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const [focusedSubMenu, setFocusedSubMenu] = useState<string | null>(null);

  const menuItems = [
    { to: "/users", label: "Users", logo: users },
    { to: "/status", label: "Status", logo: chart },
    { to: "/training", label: "Training", logo: training },
    { to: "/module", label: "Module", logo: module },
    { to: "/catalogue", label: "Catalogue", logo: calendars },
    { to: "/partner", label: "Partner", logo: share },
    {
      label: "Params",
      logo: settings,
      submenuItems: [
        { to: "/params/custom", label: "Personnalisation du portail" },
        { to: "/params/recap", label: "Récapitulatif des certificats" },
      ],
    },
  ];

  const handleSubMenuClick = (label: string) => {
    setFocusedSubMenu(label);
  };

  const handleMenuItemClick = (label: string, hasSubMenu?: boolean) => {
    if (!hasSubMenu) {
      setSelectedMenuItem(label);
      setFocusedSubMenu(null);
    } else {
      setSelectedMenuItem(selectedMenuItem === label ? null : label);
    }
  };

  // const handleMenuItemClick = (label: string) => {
  //   // setFocusedSubMenu(null); // Clear focusedSubMenu when MenuItem is clicked
  //   setSelectedMenuItem(label);
  // };

  return (
    <div>
      <Menu>
        {menuItems?.map((item, index) =>
          item.submenuItems ? (
            <SubMenu
              key={index}
              className={`sub-menu-elem ${
                focusedSubMenu === item.label ? "focused" : ""
              }`}
              label={item.label}
              icon={<img width={`22px`} src={item.logo} alt="" />}
              onClick={() => handleSubMenuClick(item.label)}
            >
              {item.submenuItems.map((subItem) => (
                <MenuItem
                  key={subItem.to}
                  component={<Link to={subItem.to} />}
                  onClick={() => handleMenuItemClick(subItem.label, true)}
                >
                  {subItem.label}
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem
              className={`${
                selectedMenuItem === item.label
                  ? "focused-menuitem"
                  : "not-focused"
              } ${
                item.label === "Portails du partenaire"
                  ? "partner-menuitem"
                  : ""
              }`}
              key={item.to}
              component={<Link to={item.to} />}
              onClick={() => handleMenuItemClick(item.label, false)}
            >
              <img width={`22px`} src={item.logo} alt="" />
              {item.label}
            </MenuItem>
          )
        )}
      </Menu>
    </div>
  );
};

export default MainNavBar;

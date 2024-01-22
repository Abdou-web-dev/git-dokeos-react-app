import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import chart from "../assets/img/menu_icons/chart-svgrepo-com.svg";
import module from "../assets/img/menu_icons/module-svgrepo-com.svg";
import settings from "../assets/img/menu_icons/settings-svgrepo-com.svg";
import share from "../assets/img/menu_icons/share-svgrepo-com.svg";
import training from "../assets/img/menu_icons/training-mat-svgrepo-com.svg";
import users from "../assets/img/menu_icons/users-svgrepo-com.svg";
import calendars from "../assets/img/menu_icons/wall-calendars-flipping-pages-svgrepo-com.svg";

const MainNavBar = () => {
  const menuItems = [
    { to: "/users", label: "Users", logo: users },
    { to: "/status", label: "Status", logo: chart },
    { to: "/training", label: "Training", logo: training },
    { to: "/module", label: "Module", logo: module },
    { to: "/catalogue", label: "Catalogue", logo: calendars },
    // { to: "/params", label: "Params", logo: settings },
    {
      // label: "Params",
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
                <MenuItem key={subItem.to} component={<Link to={subItem.to} />}>
                  {/* <img width={`22px`} src={subItem?.logo || ""} alt="" /> */}
                  {subItem.label}
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem
              className={
                item.label === "Portails du partenaire"
                  ? "partner-menuitem"
                  : ""
              }
              key={item.to}
              component={<Link to={item.to} />}
            >
              <img width={`22px`} src={item.logo} alt="" />
              {item.label}
            </MenuItem>
          )
        )}
      </Menu>
    </Sidebar>
  );
};

export default MainNavBar;

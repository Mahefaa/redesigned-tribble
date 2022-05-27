import { SidebarMenuHeading } from "./SidebarMenuHeading";
import { NavLink } from "./NavLink";

const sidebarItems = [
  { type: "heading", title: "Core" },
  { type: "navlink", title: "Dashboard", icon: "fas fa-tachometer-alt" },
  { type: "heading", title: "Interface" },
  {
    type: "navlink",
    title: "Dashboard",
    icon: "fas fa-columns",
    items: ["Static navigation", "Light sidenav"],
  },
  {
    type: "navlink",
    title: "Pages",
    icon: "fas fa-columns",
    items: [
      {
        type: "navlink",
        title: "Authentication",
        items: ["Login", "Register", "Forget password"],
      },
      {
        type: "navlink",
        title: "Error",
        items: ["400 error", "4O1 error", "500 error"],
      },
    ],
  },
  { type: "heading", title: "Addons" },
  {
    type: "navlink",
    title: "Charts",
    icon: "fas fa-chart-area",
  },
  {
    type: "navlink",
    title: "Tables",
    icon: "fas fa-table",
  },
];

export function Sidebar() {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          {sidebarItems.map((sideBarItem) =>
            sideBarItem.type === "heading" ? (
              <SidebarMenuHeading {...sideBarItem} />
            ) : (
              <NavLink {...sideBarItem} />
            )
          )}
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  );
}

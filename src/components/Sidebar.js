import { SidebarMenuHeading } from "./SidebarMenuHeading";
import { NavLink } from "./NavLink";

export function Sidebar() {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <SidebarMenuHeading title="Core" />
          <NavLink title="Dashboard" icon="fas fa-tachometer-alt" />
          <SidebarMenuHeading title="Interface" />
          <NavLink
            title="Layouts"
            icon="fas fa-columns"
            items={["Static Navigation", "Light Sidenav"]}
          />
          <NavLink
            title="Pages"
            icon="fas fa-columns"
            items={[
              {
                title: "Authentication",
                items: ["Login", "Register", "Forget Password"],
              },
              {
                title: "Error",
                items: ["401 Error", "404 Pages", "500 Pages"],
              },
            ]}
          />
          <SidebarMenuHeading title="Addons"></SidebarMenuHeading>
          <NavLink icon="fas fa-chart-area" title="Charts" />
          <NavLink icon="fas fa-table" title="Tables" />
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  );
}

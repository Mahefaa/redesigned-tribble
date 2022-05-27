import { useState } from "react";

export function SidebarMenuHeading(props) {
  const { title } = props;
  return <div className="sb-sidenav-menu-heading">{title}</div>;
}

export function NavLink(props) {
  const { icon, title, items } = props;
  const [navLinkClass, setNavLinkClass] = useState("nav-link collapsed");
  const [itemsClass, setItemsClass] = useState("collapse");

  function toggleNavLink() {
    setNavLinkClass(
      navLinkClass.includes("collapsed") ? "nav-link" : "nav-link collapsed"
    );
    setItemsClass(itemsClass.includes("show") ? "collapse" : "collapse show");
  }

  return (
    <>
      <a className={navLinkClass} onClick={toggleNavLink}>
        {icon && (
          <div className="sb-nav-link-icon">
            <i className={icon}></i>
          </div>
        )}
        {title}
        {items && items.length && (
          <div className="sb-sidenav-collapse-arrow">
            <i className="fas fa-angle-down"></i>
          </div>
        )}
      </a>
      {items && items.length && (
        <div className={itemsClass}>
          <nav className="sb-sidenav-menu-nested nav">
            {items.map((item) =>
              typeof item === "string" ? (
                <a className="nav-link">{item}</a>
              ) : (
                <NavLink
                  icon={item.icon}
                  title={item.title}
                  items={item.items}
                />
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
}

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

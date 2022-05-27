import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Breadcrumb } from "./components/Breadcrumb";
import { EmployeeList } from "./components/List";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { faker } from "@faker-js/faker";
import { useState } from "react";

function App() {
  const employees = new Array(15).fill(null).map((_) => ({
    name: faker.name.findName(),
    position: faker.company.bsNoun(),
    office: faker.address.cityName(),
    age: faker.random.numeric(2),
    startDate: new Date().toISOString().split("T")[0],
    salary: faker.random.numeric(6),
  }));

  const [sidebarClass, setSidebarClass] = useState("sb-nav-fixed");

  function toggleSidebarClass() {
    setSidebarClass(
      sidebarClass.includes("toggled")
        ? "sb-nav-fixed"
        : "sb-nav-fixed sb-sidenav-toggled"
    );
  }

  return (
    <div className={sidebarClass}>
      <Navbar toggleSidebarClass={toggleSidebarClass} />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Tables</h1>
              <Breadcrumb />
              <Card>
                DataTables is a third party plugin that is used to generate the
                demo table below. For more information about DataTables, please
                visit the
                <a target="_blank" href="https://datatables.net/">
                  official DataTables documentation
                </a>
                .
              </Card>
              <Card title="DataTable Example">
                <EmployeeList items={employees} />
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

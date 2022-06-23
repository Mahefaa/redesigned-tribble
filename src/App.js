import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Breadcrumb } from "./components/Breadcrumb";
import { EmployeeList } from "./components/List";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [employees,setEmployeesList] = useState([]);

  const [sidebarClass, setSidebarClass] = useState("sb-nav-fixed");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const {data} = response;
      setEmployeesList(data);
      console.log(data);
    }).catch((error) => console.error(error));
  },[])

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
                <a target="_blank" href="https://datatables.net/" rel="noreferrer">
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

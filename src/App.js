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
  const [showModal,setShowModal] = useState(false)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const {data} = response;
      setEmployeesList(data);
    }).catch((error) => console.error(error));
  },[])
  //setEmployeesList([{id:"1"}]);
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
          <Sidebar/>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Tables</h1>
              <Breadcrumb/>
              <Card>
                This table has been generated using Reactjs.
              </Card>
              <Card title="DataTable Example">
                <EmployeeList items={employees} showModal={showModal} setShowModal={setShowModal}/>
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

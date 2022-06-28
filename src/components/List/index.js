import "./style.css";
import {useState} from "react";
import Modal from "../Modal/Modal";

export function EmployeeList(props) {
  const { items,showModal,setShowModal } = props;
  const [data,setData]=useState({});
  const [method,setMethod] = useState("post");
  return (
      <>
      <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
        <div className="dataTable-top">
          <button type="button" className="btn btn-primary" onClick={()=> {
            setMethod("post")
            let toFill = {};
            for (let key in items[0]) {
              toFill[key] = key.toString();
            }
            setData(toFill);
            setShowModal(true);
          }}>Add</button>
        </div>
        <div className="dataTable-container" onClick={()=>showModal?setShowModal(false):null}>
          <table className="table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </tfoot>
            <tbody>
              {(items || []).map((item) => (
                <tr key={`${item.id}-${item.name}`} onClick={()=>{
                  setData(item);
                  setMethod("put");
                  setShowModal(true);

                }}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    {showModal?
        <Modal data={data} method={method} setShowModal={setShowModal}/>
        :
        null
    }
  </>
  );
}

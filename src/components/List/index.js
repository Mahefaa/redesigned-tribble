import "./style.css";

export function EmployeeList(props) {
  const { items } = props;
  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top position-relative">
        <button type="button" className="btn btn-primary position-absolute top-0 end-0 ">Add</button>
      </div>
      <div className="dataTable-container">
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
              <tr key={`${item.id}-${item.name}`}>
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
  );
}

import "./style.css";

export function EmployeeList(props) {
  const { items } = props;
  return (
    <table className="table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </tfoot>
      <tbody>
        {(items || []).map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.office}</td>
            <td>{item.age}</td>
            <td>{item.startDate}</td>
            <td>{item.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

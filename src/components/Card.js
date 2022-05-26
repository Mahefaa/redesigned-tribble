export function Card(props) {
  const { title, children } = props;
  return (
    <div className="card mb-4">
      {title ? (
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          {title}
        </div>
      ) : null}
      <div className="card-body">{children}</div>
    </div>
  );
}

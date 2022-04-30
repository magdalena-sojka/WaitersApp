import { ListGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux.js';
import { Link } from 'react-router-dom';

const Tables = () => {

  const tables = useSelector(getAllTables);

  return (
    <ListGroup variant="flush">
      <div className="p-3">
        <h3>All tables</h3>
      </div>
      {tables.map(table => (
        <ListGroup.Item key={table.id} className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h4 className="pe-3">Table {table.id}</h4>
            <p className="pt-3"><span className="fw-bold">Status: </span>{table.status}</p>
          </div>
          <Button as={Link} to={`/table/${table.id}`} variant="primary">Show more</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>

  )
}

export default Tables;
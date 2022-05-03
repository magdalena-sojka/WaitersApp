import { useSelector } from 'react-redux';
import { getTableById } from '../../redux/tablesRedux.js';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import TableDetails from '../TableDetails/TableDetails.js';

const TableWrapper = () => {

  const { id } = useParams();
  const table = useSelector(state => getTableById(state, parseInt(id)));
  
  if (!table) return <Navigate to="/" />
  return (
    <TableDetails />
  )
}

export default TableWrapper;
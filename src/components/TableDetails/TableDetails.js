import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getTableById, editTable } from '../../redux/tablesRedux.js';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const TableDetails = () => {

  const { id } = useParams();
  const table = useSelector(state => getTableById(state, parseInt(id)));
  console.log('id', id);
  const [status, setStatus] = useState(table.status);
  console.log(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  
  const availableStatus = ["Free", "Busy", "Reserved", "Cleaning"];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTable({ status, peopleAmount, maxPeopleAmount, bill }));
    navigate("/");
  }

  const settingsForm = status => {
    switch (status) {
      case "Busy":
        setBill(0);
        setStatus(status);
        break;
      case "Cleaning":
        setPeopleAmount(0);
        setBill(0);
        setStatus(status);
        break;
      case "Free":
        setPeopleAmount(0);
        setBill(0);
        setStatus(status);
        break;
      case "Reserved":
        setBill(0);
        setStatus(status);
        break;  
      default:
        setStatus(status);
        break;
    }
  }

  const settingsAmount = people => {
    if (people <= 0) {
      setPeopleAmount(0);
    } else if (people >= 10) {
      setMaxPeopleAmount(10);
    } else if (people > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    } else {
      setPeopleAmount(people);
    }  
  }

  if (!table.id) return <Navigate to="/" />
    return (  
      <>
        <h4 className="py-3">Table {table.id}</h4>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex justify-content-between align-items-center col-5">
            <Form.Label className="ms-2 me-3">Status</Form.Label>
            <Form.Control as="select" onChange={e =>settingsForm(e.target.value)} >
              {availableStatus.map((status) => (
                availableStatus !== status ? <option key={status}>{status}</option> : ''
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between align-items-center col-4">
            <Form.Label  className="ms-2 me-3">People </Form.Label>
            <Form.Control type="text" className="me-2" value={peopleAmount} onChange={e => settingsAmount(e.target.value)}/> / <Form.Control type="text" className="ms-2" value={maxPeopleAmount} onChange={e => settingsAmount(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between align-items-center col-2">
            <Form.Label  className="ms-2 me-3">Bill</Form.Label>
            $<Form.Control type="text" className="ms-2" value={bill} onChange={e => setBill(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">Update</Button>
        </Form>
      </>
    )  
}

export default TableDetails;
import { Form, Button } from 'react-bootstrap';

const TableDetails = () => {

  return (
    <>
      <h4 className="py-3">Table</h4>
      <Form>
        <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
          <Form.Label className="ms-2 me-3">Status</Form.Label>
          <Form.Control type="form-select" />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
          <Form.Label  className="ms-2 me-3">People</Form.Label>
          <Form.Control type="text" /> / <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
          <Form.Label  className="ms-2 me-3">Bill</Form.Label>
          $<Form.Control type="text" />
        </Form.Group>
        <Button variant="primary">Update</Button>
      </Form>
    </>
  )  
}

export default TableDetails;
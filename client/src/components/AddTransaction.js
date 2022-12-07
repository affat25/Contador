import React from "react";
import { Modal, Button, ModalBody, ModalTitle, ModalHeader, Form, ModalFooter, FormCheck, FormGroup, FormControl, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

function AddTransaction() {
  const [isShow, invokeModal] = React.useState(false);
  const initModal = () => {
    return invokeModal(!isShow);
  };
  return (
    <div>
      <Button variant="primary" onClick={initModal}>
        Add Transaction
      </Button>

      <Modal show={isShow}>
        <ModalHeader closeButton onClick={initModal}>
          <ModalTitle>Enter Transaction Details</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <Form>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
            <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Category" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Item name" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="formAmount">
              <FormControl type="number" placeholder="Cost" />
            </FormGroup>

            <Row>
              <FormGroup as={Col}>
                <FormCheck type="checkbox" label="Recurrent" />
              </FormGroup>
            </Row>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button variant="secondary" onClick={initModal}>
            Cancel
          </Button>
          <Button variant="success" type="submit" onClick={initModal}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddTransaction;

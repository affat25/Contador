import React, { useState } from "react";
import { Modal, Button, ModalBody, ModalTitle, ModalHeader, Form, ModalFooter, FormCheck, FormGroup, FormControl, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";

function AddTransaction() {
  const [isShow, invokeModal] = useState(false);
  const [data, collectData] = useState([]);
  let params = useParams();

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
            {/* This should be pre-filled with the category name and immutable*/}
            <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Category" />
            </FormGroup>

            {/* We need to somehow capture MicroPostId */}
            {/* params.id ?*/}

            {/* itemName */}
            <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Item name" />
            </FormGroup>
            {/* price */}
            <FormGroup className="mb-3" controlId="formAmount">
              <FormControl type="number" placeholder="Price" />
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

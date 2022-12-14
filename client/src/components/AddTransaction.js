import React, { useState}  from "react";
import { useParams } from "react-router-dom";
import {Modal, Button, ModalBody, ModalTitle, ModalHeader, Form, ModalFooter, FormCheck, FormGroup, FormControl, Row,Col} from "react-bootstrap";
import ErrorAlert from "../components/ErrorAlert";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons';

function AddTransaction(props) {
  const [isShow, invokeModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  let params = useParams();

  const initModal = () => {
    return invokeModal(!isShow);
  };

  const itemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const priceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("/api/transaction/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemName: itemName,
          price: price,
          MicroPostId: params.id,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        props.rerenderFN();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Server error while creating a new transaction post", error);
      setError(true);
    }
  };

  return (
    <div>
      <Button className="border-dark"variant="light" onClick={initModal}>Add Transaction</Button>
      <Modal show={isShow}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader closeButton onClick={initModal}>
            <ModalTitle>Enter Transaction Details</ModalTitle>
          </ModalHeader>

          <ModalBody>
            {/* This should be pre-filled with the category name and immutable. Maybe autocomplete="off"*/}
            {/* <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Category" />
            </FormGroup> */}

            {/* We need to somehow capture MicroPostId */}
            {/* params.id ?*/}

            {/* itemName */}
            <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Item name" value={itemName} onChange={itemNameChange} autocomplete="off" />
            </FormGroup>
            {/* price */}
            <FormGroup className="mb-3" controlId="formAmount">
              <FormControl type="number" placeholder="Price" value={price} onChange={priceChange} />
            </FormGroup>

            <Row>
              <FormGroup as={Col}>
                <FormCheck type="checkbox" label="Recurrent" />
              </FormGroup>
            </Row>
          </ModalBody>

          <ModalFooter>
            <Button variant="secondary" onClick={initModal}>
              Cancel
            </Button>
            <Button variant="success" type="submit" onClick={initModal}>
              Confirm
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

export default AddTransaction;
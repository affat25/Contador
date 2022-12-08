import React, { useState }  from "react";
import {Modal, Button, ModalBody, ModalTitle, ModalHeader, Form, ModalFooter, FormCheck, FormGroup, FormControl, Row} from "react-bootstrap";
import ErrorAlert from "../components/ErrorAlert";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons';

function AddTransaction() {
    const [itemName, setContent] = useState("");
    const[price,setPrice] = useState(0);
    const [error, setError] = useState(false);
    const [isShow,invokeModal]= useState(false);
    
    const handleContentChange = (event) => {
      setContent(event.target.value);
    };
    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    };

    const handleSubmit = async (event) => {
      try {
        let response = await fetch("/api/transaction", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemName: itemName,
            price: price,
          }),
        });
  
        if (response.ok) {
          invokeModal(false);
          window.location.reload(false);

        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Server error while creating a new micro post", error);
        setError(true);
      }

    };
  
  
    const initModal=()=>{
      return invokeModal(!isShow)
    }

    if(error) return <ErrorAlert details={"Failed to save the transaction, refresh browser"} />;

    return(
      <div>
      <FontAwesomeIcon
            icon={faMoneyBillTransfer}
            onClick={initModal}
            style={{"color":"green","size":"20px"}}
            type="button"
            size="2x"
            />
      <Modal show={isShow}>
        <ModalHeader closeButton onClick={initModal}>
          <ModalTitle>Enter Transaction Details</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Name" value={itemName} onChange={handleContentChange}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formAmount">
              <FormControl type="number" placeholder="Amount" value={price} onChange={handlePriceChange}/>
            </FormGroup>
            <Row>
            <FormGroup>
            <FormCheck
              type="checkbox"
              label="Recurrent"
            />
            </FormGroup>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={initModal}>
            Cancel
          </Button>
          <Button type="submit" variant="success" onClick={handleSubmit}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    );
}

export default AddTransaction;
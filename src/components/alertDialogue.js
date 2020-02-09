import React from "react";
import { Button,Modal } from 'react-bootstrap';
const AlertDialogue =({closeModal,showModal,header,body,show,deleteBlog})=>{
  
    return(
       <> 
        <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{body}</p></Modal.Body>
        <Modal.Footer>
         <Button  variant="secondary"  onClick={closeModal}>
            close
          </Button> 
          {deleteBlog?<Button variant="primary" onClick={showModal}>
            confirm
          </Button>:""}
        </Modal.Footer>
      </Modal>
     </> 
    )
}
export default AlertDialogue;
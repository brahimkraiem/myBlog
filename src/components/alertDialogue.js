import React from "react";
import { Button,Modal } from 'react-bootstrap';
const AlertDialogue =({closeModal,showModal,header,body,show,showDelete,closeMessage,confirmMessage,deleteBlog})=>{
  
    return(
       <> 
        <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{body}</p></Modal.Body>
        <Modal.Footer>
         {deleteBlog?<Button  variant="secondary" showDelete={showDelete}  onClick={closeModal}>
            {closeMessage}
          </Button>:""} 
          <Button variant="primary" onClick={showModal}>
            {confirmMessage}
          </Button>
        </Modal.Footer>
      </Modal>
     </> 
    )
}
export default AlertDialogue;
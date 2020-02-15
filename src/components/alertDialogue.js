import React from "react";
import {Dialog, Box, Text, Button } from '@primer/components';
const AlertDialogue =({isOpen,setIsOpen,title,content,openSubmit,openReset,handleDismiss,displaBtn})=>{
  
    return(
       <> 
       <Dialog title={title} isOpen={isOpen} onDismiss={handleDismiss}>
						<Box p={3}>
							<Text fontFamily="sans-serif">{content}</Text>
						</Box>
            {displaBtn?<Button onClick={openSubmit}>Ok</Button>:""}
            <Button  onClick={openReset}>close</Button>
				</Dialog>
        {/* <Modal show={show} onHide={closeModal}>
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
      </Modal> */}
     </> 
    )
}
export default AlertDialogue;
import React, { Component} from 'react';
import  { Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditPatientModal extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
  

   handleSubmit(event){
       event.preventDefault();
   

    fetch('https://localhost:44372/api/PatientView/editpatient',{
        method:'PUT', 
        headers:{
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                         Id: event.target.Id.value,
                         Name: event.target.Name.value,
                         
                         Gender: event.target.Gender.value,
                        
                         
                         Email: event.target.Email.value,
                         
                         Username: event.target.Username.value,
                         
                 
              
        })
    })
 .then(res => res.json())
 .then((result)=>
 {
     alert(result);
 },
 (error)=>{
     alert('Failed')
 }
 )

}

render(){

    return(

        <div onClick={e => e.stopPropagation()}>

                <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Edit Patient
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div >
           <Row>
            <Col  >
                <Form onSubmit={this.handleSubmit}>

                <Form.Group  as={Row} controlId="Id">
                    <Form.Label column sm={2}>Id</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                     type="text"
                     name="Id"
                     required
                     disabled
                     defautValue = {this.props.patientid}
                     placeholder="Id"
                     />
                     </Col>
                    </Form.Group>
                   


                    <Form.Group  as={Row} controlId="Name">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                     type="text"
                     name="Name"
                     required
                     defautValue = {this.props.patientname}
                     placeholder="Name"
                     />
                     </Col>
                    </Form.Group>

                    

                    <Form.Group  as={Row} controlId="Gender">
                    <Form.Label column sm={2}>Gender</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                     type="text"
                     name="Gender"
                     required
                     defautValue = {this.props.patientgender}
                     placeholder="Gender"
                     />
                     </Col>
                    </Form.Group>

                   

                    <Form.Group  as={Row} controlId="Email">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                     type="email"
                     name="Email"
                     required
                     defautValue = {this.props.patientemail}
                     placeholder="xyz@mail.com"
                     />
                     </Col>
                    </Form.Group>

                   

                    <Form.Group  as={Row} controlId="Username">
                    <Form.Label column sm={2}>User Name</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                     type="text"
                     name="Username"
                     required
                     defautValue = {this.props.patientusername}
                     placeholder="User Name"
                     />
                     </Col>
                    </Form.Group>

                 

                    <Form.Group>
                            <Button variant="primary" type="submit">
                                Update patient
                            </Button>
                        </Form.Group>



                    </Form>
                </Col>
               </Row> 

              
                   
              </div> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>

            </div>

        );
    }


}


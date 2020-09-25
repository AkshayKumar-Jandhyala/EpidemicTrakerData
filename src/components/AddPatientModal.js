import React, { Component} from 'react';
import  { Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddPatientModal extends Component{
    constructor(props){
        super();
    }
  

   handleSubmit(event){
       event.preventDefault();

       fetch('https://localhost:44372/api/PatientView/addpatientview',{
           method:'POST',
           headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
           },
           body: JSON.stringify({
            Name: event.target.Name.value,
            Age: event.target.Age.value,
            Gender: "Male",
            Phone: "1236548",
            UniqueId: "65465",
            Email: "Test@ghdg.com",
            OccupationId: 5,
            Username: "test",
            Password:"test@HH9",
            
            permanentAddress :
            {
                AddressLine : "test",
                Area: "test",
                City : "Banglore",
                Stat : "Karnataka",
                Country : "India",
                Pincode : 500035
             
            },
            
            
              currentAddress : 
              {
                AddressLine : "test",
                Area : "Htest",
                City: "Banglore",
                State : "Karnataka",
                Country : "India",
                Pincode : 500035
              },
            
              workAddress : 
              {
                AddressLine : "test",
                Area : "test",
                City : "Banglore",
                State : "Karnataka",
                Country : "India",
                Pincode : 500035
             
              }
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
                Add Patient
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="container">
               <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                         type="text"
                         name="Name"
                         required
                         placeholder="Name"
                         />
                        </Form.Group>

                        
                        <Form.Group controlId="Age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                         type="number"
                         name="Age"
                         required
                         placeholder="Age"
                         />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Add patient
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
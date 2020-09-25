import React, { Component} from 'react';
import  { Modal, Button, Row, Col, Form} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

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
                            "Age": 32,
                            Gender: event.target.Gender.value,
                            "Phone": "1236548",
                            "UniqueId": "65465",
                            Email: event.target.Email.value,
                            "OccupationId": 5,
                            Username: event.target.Username.value,
                            Password:event.target.Password.value,
                    
                    permanentAddress :
                    {
                       
                                AddressLine : event.target.PermanentAddressLine.value,
                                Area: event.target.PermanentArea.value,
                                City : event.target.PermanentCity.value,
                                State: event.target.PermanentState.value,
                                Country: event.target.PermanentCountry.value,
                                "Pincode" : 500035
 	
                    
                    },
                    
                    
                    currentAddress : 
                    {
                       
                        AddressLine : event.target.CurrentAddressLine.value,
                        Area: event.target.CurrentArea.value,
                        City : event.target.CurrentCity.value,
                        State: event.target.CurrentState.value,
                        Country: event.target.CurrentCountry.value,
                        "Pincode" : 500035
                    },
                    
                    workAddress : 
                    {
                        
                        AddressLine : event.target.WorkAddressLine.value,
                        Area: event.target.WorkArea.value,
                        City : event.target.WorkCity.value,
                        State: event.target.WorkState.value,
                        Country: event.target.PermanentCountry.value,
                        "Pincode" : 500035

                    
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
               <div >
               <Row>
                <Col  >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group  as={Row} controlId="Name">
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="Name"
                         required
                         placeholder="Name"
                         />
                         </Col>
                        </Form.Group>

                        
                        <Form.Group  as={Row} controlId="Age">
                        <Form.Label column sm={2}>Age</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         NumericInput
                         name="Age"
                         required
                         placeholder="Age"
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
                         placeholder="Gender"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="Phone">
                        <Form.Label column sm={2}>Phone</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="number"
                         name="Phone"
                         required
                         placeholder="Phone"
                         />
                         </Col>
                        </Form.Group>

                      

                        <Form.Group  as={Row} controlId="UniqueId">
                        <Form.Label column sm={2}>UniqueId</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="number"
                         name="UniqueId"
                         required
                         placeholder="UniqueId"
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
                         placeholder="xyz@mail.com"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="OccupationId">
                        <Form.Label column sm={2}>Occupation</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="number"
                         name="OccupationId"
                         required
                         placeholder="Occupation"
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
                         placeholder="User Name"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="Password">
                        <Form.Label column sm={2}>Password</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="password"
                         name="Password"
                         required
                         placeholder="Password"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group>
                            <hr></hr>
                        </Form.Group>

                        <Form.Group>
                            <h4>Permanent Address</h4>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="PermanentAddressLine">
                        <Form.Label column sm={2}>Address Line</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="PermanentAddressLine"
                         required
                         placeholder="Address Line"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="PermanentArea">
                        <Form.Label column sm={2}>Area</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="PermanentArea"
                         required
                         placeholder="Area"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="PermanentCity">
                        <Form.Label column sm={2}>City</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="PermanentCity"
                         required
                         placeholder="City"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="PermanentState">
                        <Form.Label column sm={2}>State</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="PermanentState"
                         required
                         placeholder="State"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="PermanentCountry">
                        <Form.Label column sm={2}>Country</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="PermanentCountry"
                         required
                         placeholder="Country"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="PermanentPincode">
                        <Form.Label column sm={2}>Pincode</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="number"
                         name="PermanentPincode"
                         required
                         placeholder="Pincode"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group>
                            <hr></hr>
                        </Form.Group>

                        <Form.Group>
                            <h4>Current Address</h4>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="CurrentAddressLine">
                        <Form.Label column sm={2}>Address Line</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="CurrentAddressLine"
                         required
                         placeholder="Address Line"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="CurrentArea">
                        <Form.Label column sm={2}>Area</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="CurrentArea"
                         required
                         placeholder="Area"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="CurrentCity">
                        <Form.Label column sm={2}>City</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="CurrentCity"
                         required
                         placeholder="City"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="CurrentState">
                        <Form.Label column sm={2}>State</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="CurrentState"
                         required
                         placeholder="State"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="CurrentCountry">
                        <Form.Label column sm={2}>Country</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="CurrentCountry"
                         required
                         placeholder="Country"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="CurrentPincode">
                        <Form.Label column sm={2}>Pincode</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="number"
                         name="CurrentPincode"
                         required
                         placeholder="Pincode"
                         />
                         </Col>
                        </Form.Group>

                         <Form.Group>
                            <hr></hr>
                        </Form.Group>

                        <Form.Group>
                            <h4>Work Address</h4>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="WorkAddressLine">
                        <Form.Label column sm={2}>Address Line</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="WorkAddressLine"
                         required
                         placeholder="Address Line"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="WorkArea">
                        <Form.Label column sm={2}>Area</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="WorkArea"
                         required
                         placeholder="Area"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="WorkCity">
                        <Form.Label column sm={2}>City</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="WorkCity"
                         required
                         placeholder="City"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="WorkState">
                        <Form.Label column sm={2}>State</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="WorkState"
                         required
                         placeholder="State"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="WorkCountry">
                        <Form.Label column sm={2}>Country</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="text"
                         name="WorkCountry"
                         required
                         placeholder="Country"
                         />
                         </Col>
                        </Form.Group>

                        <Form.Group  as={Row} controlId="WorkPincode">
                        <Form.Label column sm={2}>Pincode</Form.Label>
                        <Col sm={10}>
                        <Form.Control
                         type="number"
                         name="WorkPincode"
                         required
                         placeholder="Pincode"
                         />
                         </Col>
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
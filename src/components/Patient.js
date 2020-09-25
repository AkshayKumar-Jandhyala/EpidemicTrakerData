import React, { Component} from 'react';
import '../App.css';

import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddPatientModal} from './AddPatientModal';
import {EditPatientModal} from  './EditPatientModal';

export class Patient extends Component{

    constructor(props){
        super();
        this.state={patient:[], addModalShow :false, editModalShow : false}
    }

  
    
    refreshList(){
            fetch('https://localhost:44372/api/PatientView/getallpatients')
            .then(response => response.json())
            .then(data =>{

                this.setState({patient:data})
            }
        );
    
    }

    componentDidMount(){
        this.refreshList();
    }
  

    deletePatient(patientid)
    {
        if(window.confirm('Are you sure?'))
        {
            fetch('https://localhost:44372/api​/PatientView​/deletepatient/'+patientid,{
            method:'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             }

            })


        }
    }

      


    render(){
     
        const{patient, patientid, patientname, patientgender, patientemail, patientusername}= this.state;
        let addModalClose =() => this.setState({addModalShow: false });
        let editModalClose =() => this.setState({editModalShow: false });

        return(
        
        <div className="App">

             
             <Table className='mt-4' striped bordered hover variant="dark">
            <thead>
               <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>UniqueID</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Occupation</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Option</th>
              </tr> 
            </thead> 
            <tbody>
                           {patient.map(p =>
                    <tr key ={p.id}> 
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                    <td>{p.uniqueId}</td>
                    <td>{p.phone}</td>
                    <td>{p.email}</td>
                    <td>{p.occupationdetails}</td>
                    <td>{p.city}</td>
                    <td>{p.state}</td>
                    <td>

                        <ButtonToolbar>
                            <Button
                            className="mr-2" variant="info"
                            onClick={()=> this.setState({editModalShow:true, patientid:p.id, patientname:p.name, patientgender:p.gender,
                                                          
                                                          patientemail:p.email, patientusername:p.username,
                                                            })}
                            >
                                Edit
                            </Button>

                            <EditPatientModal
                            show = {this.state.editModalShow}
                            onHide={editModalClose}
                            patientid = {p.id}
                            patientname= {patientname}
                            patientgender= {patientgender}
                            patientemail = {patientemail}
                            patientusername = {patientusername}
                           
                            />

                            <Button className="mr-2"
                            onClick= {()=> this.deletePatient(p.id)}
                            variant="danger">
                                Delete

                            </Button>





                        </ButtonToolbar>
                    </td>
                    </tr>
                    )}
            </tbody>
           </Table>
        <ButtonToolbar>

        <Button
            variant='primary'
            onClick={()=> this.setState({addModalShow: true})}>

          Add Patient

          <AddPatientModal
              show={this.state.addModalShow}
              onHide={addModalClose}
              
              />
         

        </Button>



        </ButtonToolbar>
      
    </div>

           


        )


    }
}
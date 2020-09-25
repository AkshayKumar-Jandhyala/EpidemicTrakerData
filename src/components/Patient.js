import React, { Component} from 'react';
import '../App.css';

import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddPatientModal} from './AddPatientModal';

export class Patient extends Component{

    constructor(props){
        super();
        this.state={patient:[], addModalShow :false}
    }

    componentDidMount(){
        this.refreshList();
    }
    
    refreshList(){
            fetch('https://localhost:44372/api/PatientView/getallpatients')
            .then(response => response.json())
            .then(data =>{

                this.setState({patient:data})
            }
        );
    
    }


      


    render(){
     
        const{patient}= this.state;
        let addModalClose =() => this.setState({addModalShow: false });

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
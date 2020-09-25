import React, { useState, Component} from 'react';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Alert, Card, CardDeck, Nav, NavDropdown,Form, Navbar, FormControl} from 'react-bootstrap'

function Case() {

  const[totalCases, setTotalCases] = useState(null);
  const[curedCases, setCuredCases] = useState(null);
  const[fatalCases, setFatalCases] = useState(null);

  const totalCasesURL = 'https://localhost:44372/api/Cases/gettotalcovidcases';
  const curedCasesURL = 'https://localhost:44372/api/Cases/gettotalcured';
  const fatalCasesURL = 'https://localhost:44372/api/Cases/gettotalfatalities';

  
         fetch(totalCasesURL)  
        .then(resp => resp.json())
        .then(data => setTotalCases(data));

        fetch(curedCasesURL)  
        .then(resp => resp.json())
        .then(data => setCuredCases(data));

        fetch(fatalCasesURL)  
        .then(resp => resp.json())
        .then(data => setFatalCases(data));



  return (
    <div className="App">


      <header className="App-header">
      <CardDeck> 
       <Card  bg={'danger'} style={{ width: '18rem' }}>
         <Card.Header>Total</Card.Header>
           <Card.Body>
      
           <Card.Text>
               {totalCases}
            </Card.Text>
         </Card.Body>
     </Card>

     <Card  bg={'success'} style={{ width: '18rem' }}>
         <Card.Header>Cured</Card.Header>
           <Card.Body>
      
           <Card.Text>
               {curedCases}
            </Card.Text>
         </Card.Body>
     </Card>

     <Card  bg={'secondary'} style={{ width: '18rem' }}>
         <Card.Header>Fatality</Card.Header>
           <Card.Body>
      
           <Card.Text>
               {fatalCases}
            </Card.Text>
         </Card.Body>
     </Card>

    </CardDeck> 
      </header>
    </div>
  );
}

export default Case;

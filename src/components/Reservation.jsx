import React, {useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { Form, Button, Container} from 'react-bootstrap'


  function Reservations() {
    const initialState = {
      room: '',
      name: '',
      phone: '',
      mail: '',
      checkIn: '',
      checkOut: ''
    }
  
    const [reservation , setReservation] = useState(initialState)
  
    const handleChange = (event) =>{
      setReservation({
          ...reservation,
          [event.target.name] : event.target.value
      })
    }

    const createDoc = async (obj) => {
      await addDoc(collection(db, "reservaciones"), { obj });
      await setReservation({...initialState})
    };
    
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
        const found = Object.values(reservation).find(el => el == '')
        if(found != false){
          console.log("hola desde handle submit -if")
          createDoc(reservation)
          document.getElementById('form').reset()
          setValidated(false);              
        }            
    };

    return (
        <Container style={{marginBottom: '70px', marginTop: '70px'}}>
            <h1 style={{marginBottom: '50px', marginTop: '30px', fontSize:'250%', fontWeight: 'bold'}}>
              Llena los datos para hacer una reservación
              </h1>
            <Form noValidate validated={validated} id='form' >
                <Form.Group className="mb-3">
                    <Form.Label style={{fontSize:'150%', fontWeight: 'bold'}}>Habitación</Form.Label>
                    <Form.Select 
                    required 
                    name='room'
                    onChange={handleChange}
                    >
                        <option disabled hidden selected> </option>
                        <option>Deluxe Suite</option>
                        <option>Senior Suite</option>
                        <option>Junior Suite</option>
                        <option>Twins Suite</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label style={{fontSize:'150%', fontWeight: 'bold'}}>Nombre Completo</Form.Label>
                  <Form.Control
                    required
                    name='name'
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label style={{fontSize:'150%', fontWeight: 'bold'}}>Telefono</Form.Label>
                  <Form.Control
                    required
                    name='phone'
                    type="text"
                    placeholder="Solo digitos"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="4" controlId="validationCustom03">
                  <Form.Label style={{fontSize:'150%', fontWeight: 'bold'}}>Email</Form.Label>
                  <Form.Control
                    required
                    name='mail'
                    type="email"
                    placeholder="Dirección de correo valida"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom04">
                  <Form.Label style={{fontSize:'150%', fontWeight: 'bold'}}>Check In</Form.Label>
                  <Form.Control
                    required
                    name="checkIn"
                    type="date"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom05">
                  <Form.Label style={{fontSize:'150%', fontWeight: 'bold'}}>Check Out</Form.Label>
                  <Form.Control
                    required
                    name="checkOut"
                    type="date"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>
                <Button type="button" onClick={handleSubmit} variant="primary" style={{marginTop:'10px'}}>Reservar</Button>
            </Form>
        </Container>
    );      
  }

  export default Reservations
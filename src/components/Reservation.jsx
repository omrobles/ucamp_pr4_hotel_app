import React, {useState} from "react";
import { Form, Button, Container} from 'react-bootstrap'


function Reservations() {
    const [reservation , setReservation] = useState({
        room: '',
        name: '',
        phone: '',
        mail: '',
        checkIn: '',
        checkOut: ''
    })
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else{
                console.log("hola desde else")
            }
            setValidated(true);
    };

    const handleChange = (event) =>{
        setReservation({
            ...reservation,
            [event.target.name] : event.target.value
        })
    }

    return (
        <Container style={{marginBottom: '100px', marginTop: '100px'}}>
            <h1 style={{marginBottom: '50px', marginTop: '30px', fontSize:'350%', fontWeight: 'bold'}}>Llena los datos para hacer una reservación</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                <Form.Group className="mb-3">
                    <Form.Label style={{fontSize:'200%', fontWeight: 'bold'}}>Habitación</Form.Label>
                    <Form.Select 
                    required 
                    name='room'
                    onChange={handleChange}
                    >
                        <option>Selecciona tu habitación</option>
                        <option>Deluxe Suite</option>
                        <option>Senior Suite</option>
                        <option>Junior Suite</option>
                        <option>Twins Suite</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label style={{fontSize:'200%', fontWeight: 'bold'}}>Nombre Completo</Form.Label>
                  <Form.Control
                    required
                    name='name'
                    type="text"
                    placeholder="First name"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label style={{fontSize:'200%', fontWeight: 'bold'}}>Telefono</Form.Label>
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
                  <Form.Label style={{fontSize:'200%', fontWeight: 'bold'}}>Email</Form.Label>
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
                  <Form.Label style={{fontSize:'200%', fontWeight: 'bold'}}>Check In</Form.Label>
                  <Form.Control
                    required
                    name="checkIn"
                    type="date"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom05">
                  <Form.Label style={{fontSize:'200%', fontWeight: 'bold'}}>Check Out</Form.Label>
                  <Form.Control
                    required
                    name="checkOut"
                    type="date"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Campo correcto!</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary" style={{marginTop:'10px'}}>Reservar</Button>
            </Form>
        </Container>
    );      


  }

  export default Reservations
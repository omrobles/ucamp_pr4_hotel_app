import React from "react";
import {Link} from "react-router-dom"
import { Row, Col, Card, Button, Container} from "react-bootstrap"
import "./Rooms.css"

function Rooms(props) {
    return (
        <Container>
            <h1 className="Title">Conoce nuestras habitaciones.</h1>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4 rowContainer">
                {Array.from(props.info).map((el) => (
                    <Col>
                    <Card  style={{ width: '100%', minHeight:'450px'}}>
                        <Card.Img variant="top" src={el.image} />
                        <Card.Body>
                            <Card.Title>{ el.type }</Card.Title>
                            <Card.Text className="text">{el.description}</Card.Text>
                            <Link to={'/reservaciones'}>
                            <Button variant="success">Hacer reservación</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
  }

  export default Rooms
import React from "react";
import {Container, Card, Row, Col} from "react-bootstrap"
import "./Services.css"

function Services(props) {
    return (
        <Container style={{marginBottom: '30px'}}>
            <h1 className="Title">Nuestros Servicios</h1>
            <Row lg={1} className="g-4">
                {Array.from(props.info).map((element) => (
                    <Col>
                    <Card>
                    <Card.Body>
                        <Card.Title className="CardTitle">{element.title}</Card.Title>
                        <Card.Text className="CardText">{element.description}</Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={element.image} />
                        
                    </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
    )
  }

  export default Services
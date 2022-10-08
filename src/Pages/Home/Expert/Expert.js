import React from "react";
import { Card, Col } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Expert;

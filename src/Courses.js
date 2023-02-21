import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function Courses() {

  const cardData = [
    {class: "CS 146",}, 
    {class: "CMPE 195"}, 
    {class: "PHYS 50"}, 
    {class: "ENGR 100W"} 
  
  ];

  const renderCard = (cardData, index) => {
    return(
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{cardData.class}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      ))}
    </Row>

  )}
    return (
      <div className="Courses">
        {cardData.map(renderCard)}
      </div>
    );
  }
  
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from '../Product';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
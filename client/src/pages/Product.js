import Item from "./Component/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product() {
    return ( 
        <div>
              <Container>
      <Row>
        <Col><Item/></Col>
        <Col><Item/></Col>
        <Col><Item/></Col>
      </Row>
      <Row>
        <Col><Item/></Col>
        <Col><Item/></Col>
        <Col><Item/></Col>
      </Row>
    </Container>
            
        </div>
     );
}

export default Product;
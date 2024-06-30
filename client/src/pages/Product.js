import Item from "./Component/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from "react";

function Product() {
    const[data,setData]=useState()
    useEffect(() => {
        fetch("/api/getproducts")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
        
          });
      }, []);
      console.log(data)
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
import { Col, Container, Form, Row } from "react-bootstrap";

const Search = (props) => {
    return ( <Container>
        <Row className='pt-2'>
        <Col lg={8}>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='search here'
        value={props.SearchVal}
        onChange={props.onChange}
      />
      </Col>
      <Col lg={4}>
   
     </Col>
     </Row>
     </Container> );
}
 
export default Search;
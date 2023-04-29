import { Button, Col, Container, Row, Table } from "react-bootstrap";


const Transaction = (props) => {
  return ( <Container>
    <Row className='pt-2'>
            <Col lg={9}>
              
            
    
                <Table  striped bordered hover>
                  <thead>
                    <tr>
                     
                      <th> Name</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {  props.items.map((x)=> {
                   return <tbody>
                    <tr>
                      <td>{x.name}</td>
                      <td>{x.address}</td>
                      <td>{x.city}</td>
                      <td><Button onClick={(e)=>
                      {
                        e.preventDefault()
                        props.onDelete(x.id)
                      }}>Delete</Button>    <Button onClick={(e)=>
                        {
                          e.preventDefault()
                          props.onDelete(x.id)
                        }}>Edit</Button></td>
                   
                    </tr>
                   
                 
                   
                  </tbody>
                    })
        
                  }
                </Table>
    
              
        </Col>
         </Row>
        </Container> );
}
 
export default Transaction;


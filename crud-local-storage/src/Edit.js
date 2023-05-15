import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

const Edit=(props) =>{
    const [name, setName] = useState(props.person.name);
    const [address, setAddress] = useState(props.person.address);
    const [city, setCity] = useState(props.person.city);
   

    const handleEdit = (e) => {
        e.preventDefault();
        const updatedPerson = {
          ...props.person,
          name: name,
          address: address,
          city: city
        };
        const storedData = JSON.parse(localStorage.getItem('userdata'));
        const updatedData = storedData.map((person) => {
          if (person.id === updatedPerson.id) {
            return updatedPerson;
          } else {
            return person;
          }
        });
        console.log(updatedData)
        localStorage.setItem('userdata', JSON.stringify(updatedData));
        props.updateInfo(updatedData);
        props.setEditing(false);
      };
      

    return (
        <Container>
            <Row className="pt-2">
                <Col className="px-4" lg={4}>
                <Form onSubmit={handleEdit}>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            className="mt-3"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Form.Select
                            className="mt-3"
                            aria-label="Select City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option>Select City</option>
                            <option value="Faislabad">Faislabad</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="RawalPindi">RawalPindi</option>
                        </Form.Select>
                        <Button className="mt-3" type="submit">
                          Edit Records
                        </Button>
                    </Form>
                   
                </Col>
            </Row>
        </Container>
    );
};

export default Edit;

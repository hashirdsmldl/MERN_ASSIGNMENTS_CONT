import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

const Add = ({onAddCar}) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
   

    const handleAddCar = (e) => {
       
        const obj = {
            name: name,
            address: address,
            city: city
          };


        onAddCar(obj);
        setName("");
        setAddress("");
        setCity("");
      };

    return (
        <Container>
            <Row className="pt-2">
                <Col className="px-4" lg={4}>
                <Form onSubmit={(e) => {
    e.preventDefault();
    if (name && address && city) {
        handleAddCar();
    }
}}>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            className="mt-3"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                        <Form.Select
                            className="mt-3"
                            aria-label="Select City"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        >
                            <option>Select City</option>
                            <option value="Faislabad">Faislabad</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="RawalPindi">RawalPindi</option>
                        </Form.Select>
                        <Button className="mt-3" type="submit">
                            Add Records
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Add;

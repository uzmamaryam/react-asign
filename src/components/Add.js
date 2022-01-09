import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addSchools } from "../store/acttion";
import 'bootstrap/dist/css/bootstrap.min.css';
const Add = () => {
  const [title, settitle] = useState("");
  const [City, setCity] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sda");
    const result = { title, City };
    dispatch(addSchools(result));
   
  };
  console.log({ title });
  console.log({ City });
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Schools Title</Form.Label>
          <Form.Control
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Enter the Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="City"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>{" "}
    </div>
  );
};

export default Add;
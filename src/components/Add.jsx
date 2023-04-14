import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

const Add = (props) => {
  const [travel, setTravel] = useState({ ...props.travel });
  //  create functions
  const handleChange = (event) => {
    setTravel({
      ...travel,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(travel);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <Form.Label htmlFor="location" className="location">
          Location:{" "}
        </Form.Label>{" "}
        <br />
        <input
          type="text"
          name="location"
          value={travel.location}
          onChange={handleChange}
          className="formControl"
        />
        <br />
        <Form.Label htmlFor="type" className="type">
          Type:{" "}
        </Form.Label>{" "}
        <br />
        <input
          type="text"
          name="type"
          value={travel.type}
          onChange={handleChange}
          className="formControl"
          placeholder="hotel, atrraction, restraunt etc..."
        />
        <br />
        <Form.Label htmlFor="date" className="date">
          Date:{" "}
        </Form.Label>{" "}
        <br />
        <input
          type="text"
          name="date"
          value={travel.date}
          onChange={handleChange}
          className="formControl"
          placeholder="xx/xx/xxxx"
        />
        <br />
        <Form.Label htmlFor="address" className="address">
          Address:{" "}
        </Form.Label>{" "}
        <br />
        <input
          type="text"
          name="address"
          value={travel.address}
          onChange={handleChange}
          className="formControl"
        />
        <br />
        <Form.Label htmlFor="contact" className="contact">
          Contact:{" "}
        </Form.Label>{" "}
        <br />
        <input
          type="text"
          name="contact"
          value={travel.contact}
          onChange={handleChange}
          className="formControl"
          placeholder="name, number etc.."
        />
        <br />
        <Form.Label htmlFor="latitude" className="latitude">
          Latitude:{" "}
        </Form.Label>{" "}
        <br />
        <input
          type="text"
          name="latitude"
          value={travel.latitude}
          onChange={handleChange}
          className="formControl"
        />
        <br />
		<Form.Label htmlFor="longitude" className="longitude">
          Longitude:{" "}
        </Form.Label>{" "}
        <br />
        <input
          type="text"
          name="longitude"
          value={travel.longitude}
          onChange={handleChange}
          className="formControl"
        /><br/>
        <input type="submit" className="submitBtn" />
      </form>
    </>
  );
};

export default Add;

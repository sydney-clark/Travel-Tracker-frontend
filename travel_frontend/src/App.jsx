import React, { useState, useEffect } from "react";
import axios from "axios";
//import MapSection from './components/map/Map'
import OldMap from "./components/old_map";

//Components
import Add from "./components/Add";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const App = () => {
  let [travel, setTravel] = useState([]);

  const handleCreate = (newConstruction) => {
    axios
      .post("http://localhost:8000/api/travelApp", newConstruction)
      .then((res) => {
        console.log(res);
        getData();
      });
  };

  const getData = () => {
    axios
      .get("http://localhost:8000/api/travelApp") // backend render url will go here after launching live backend
      .then(
        (res) => setTravel(res.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };

  // delete function

  const handleDelete = (event) => {
    axios
      .delete(`http://localhost:8000/api/travelApp/${event.target.value}`)
      .then((res) => {
        getData();
      });
  };

  // edit function
  const handleUpdate = (editConstruction) => {
    console.log(editConstruction);
    axios
      .put(
        `http://localhost:8000/api/travelApp/${editConstruction.id}`,
        editConstruction
      )
      .then((res) => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="root">
        <h1 className="pageTitle">Travel Tracker</h1>
        <Add handleCreate={handleCreate} />
      </section>
      <OldMap/>
    </>
  );
};

export default App;

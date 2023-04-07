import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./components/Map";
import "./App.scss";

//Components
import Add from "./components/Add";
import Edit from "./components/Edit";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const App = () => {
  let [travel, setTravel] = useState([]);
  let [address, setAddress] = useState("");
  let [coordinates, setCoordinates] = useState({
    lat: null,
    long: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAddress(value);
    setCoordinates(ll);
  };

  const handleCreate = (newTravel) => {
    axios.post("http://localhost:8000/api/travelApp", newTravel).then((res) => {
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
      <section className="latAndLongSearch"> 
        <p>Lat: {coordinates.lat}</p>
        <p>Long: {coordinates.lng}</p>
        <p>Address: {address}</p>

        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div key={suggestions.description}>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "red", cursor: "pointer" }
                    : { backgroundColor: "yellow", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        </section> 
        <br />

        <Add handleCreate={handleCreate} />
        <Edit className="editBtn" handleUpdate={handleUpdate} travel={travel} />
        <br />
      </section>
      <Map />
    </>
  );
};

export default App;

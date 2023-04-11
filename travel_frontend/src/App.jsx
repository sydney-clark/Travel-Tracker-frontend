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
  let [markers, setMarkers] = useState([]);
  let [address, setAddress] = useState("");
  let [coordinates, setCoordinates] = useState({
    lat: "",
    long: "",
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAddress(value);
    setCoordinates(ll);
  };

  //getting my Travel model//
  const handleCreate = (newTravel) => {
    axios.post("http://localhost:8000/api/travelList", newTravel).then((res) => {
      console.log(res);
      getData();
    });
  };

  const getData = () => {
    axios
      .get("http://localhost:8000/api/travelList") // backend render url will go here after launching live backend
      .then(
        (res) => setTravel(res.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };

 // getting my marker model//
  const create = () => {
    console.log(coordinates.lat)
    // console.log(markers)
    // console.log(testObj)
    axios.post("http://localhost:8000/api/markerList", //posting new marker object to my database
     { lat: coordinates.lat, 
       lng: coordinates.lng}
      )
    .then((res) => { //shows new object just made
        console.log(res); // logging my newly created object to make sure it's correct
        axios.get("http://localhost:8000/api/markerList") // backend render url will go here after launching live backend, getting all my Marker objects
        .then((res)=> {
           console.log(res.data) // checking to make sure all objects look correct
           } ,
           (res) => setMarkers(res.data), // pushing to my Markers array
           (err) => console.error(err), 
           console.log(markers) // checking the content of my Markers array
      )
    });
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
                    ? { backgroundColor: "green", cursor: "pointer" }
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

        <div className="markerBtn"><button className='newMarkerBtn' onClick={create}> New Marker</button></div>
        <Add handleCreate={handleCreate} />
        <Edit className="editBtn" handleUpdate={handleUpdate} travel={travel} /><br/>
        <div>
        <button className='deleteBtn' onClick={handleDelete} value={travel.id}>Delete Travel Pin</button>
        </div>
        <br />
      </section>
      <Map searchCoord={coordinates}/>
    </>
  );
};

export default App;

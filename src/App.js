import React, { useEffect } from 'react';
import { database } from './config/firebase';
import './App.css';

export default function App() {
  useEffect(() => {
    database.collection("cities").doc("NY").set({
      name: "Schenectady",
      state: "NY",
      country: "USA"
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="title">can_release</h1>
        <div className="temp1">Search Bar SomeWhere Here</div>
        <div className="temp2">Other Buttons Here</div>
      </div>
      <div className="content">
        <div className="beerList">
          BeerTable Here
        </div>
        <div className="events">
          EventStream Here
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react';
import { database } from './config/firebase';

export default function App() {
  useEffect(() => {
    database.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
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
    <h1>can_release</h1>
  )
}

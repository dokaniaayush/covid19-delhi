import React, { useEffect } from "react";
import axios from "axios";

const Facilities = ({ facility }) => {
  useEffect(() => {
    axios
      .get("http://covid-19-delhi.herokuapp.com/facilities/")
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>Facilities</h1>
    </div>
  );
};

export default Facilities;

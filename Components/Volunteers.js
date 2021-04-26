import React, { useEffect } from "react";
import axios from "axios";

const Facilities = ({ facility }) => {
  useEffect(() => {
    axios
      .get("http://covid-19-delhi.herokuapp.com/volunteers/")
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>Volunteers</h1>
    </div>
  );
};

export default Facilities;

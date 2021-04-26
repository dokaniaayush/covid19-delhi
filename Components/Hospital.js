import React, { useEffect } from "react";
import axios from "axios";

const Facilities = () => {
  useEffect(() => {
    axios
      .get("http://covid-19-delhi.herokuapp.com/hospitals/")
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>Hospitals</h1>
    </div>
  );
};

export default Facilities;

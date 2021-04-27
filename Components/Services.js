import React, { useEffect, useState } from "react";
import axios from "axios";
import { SpinnerCircular } from 'spinners-react';

const Services = ({ facility }) => {
  const [loading, setLoading] = useState(true)
  const [all, setAll] = useState([])
  const [search, setSearch] = useState([])

  const getData = async () => {
    const data = await axios.get("https://covid-19-delhi.herokuapp.com/services")
    setAll(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
    {
      loading && <SpinnerCircular color="#ff0000" enabled={loading} />
    }
    { all.map && all?.map(data => (
      <div className="px-4 rounded-lg lg:px-16">
        {data.name}
      </div>
    )) || <h1 className="text-center text-red-500">No Services Found</h1> }
    </>
  );
};

export default Services;

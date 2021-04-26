import react, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
export default function Home() {
  const getData = async () => {
    const res = await axios.get("https://covid-19-delhi.herokuapp.com/cities");
    setLocationAll(res.data);
    const res2 = await axios.get("https://covid-19-delhi.herokuapp.com/facilities/");
    setServicesAll(res2.data);
  };
  const locationFilter = (e) => {
    e.preventDefault()
    const match = locationAll.filter(location => location.name.toLowerCase().indexOf(searchLocation.toLowerCase()) === 0)
    setLocationSearch(match)
  }
  const serviceFilter = (e) => {
    e.preventDefault()
    const match = servicesAll.filter(service => service.name.toLowerCase().indexOf(searchServices.toLowerCase()) === 0)
    setServicesSearch(match)
    console.log(match, servicesAll);
  }

  useEffect(() => {
    getData();
  });

  const [searchLocation, setSearchLocation] = useState("");
  const [locationAll, setLocationAll] = useState([]);
  const [locationSearch, setLocationSearch] = useState([]);
  const [searchServices, setSearchServices] = useState("");
  const [servicesAll, setServicesAll] = useState([]);
  const [servicesSearch, setServicesSearch] = useState([]);

  return (
    <div className="w-full flex jutisfy-center flex-col h-screen overflow-x-hidden">
      <Head>
        <title>Covid-19 Resources</title>
      </Head>
      <section className="bg-black flex w-full justify-center fixed top-0 left-0 items-center">
        <h1 className="text-white text-2xl font-body py-4">
          Covid-19 Resources
        </h1>
      </section>
      <section className="grid grid-cols-2 mt-5 gap-5">
        <section
          id="location"
          className="w-full mt-16 block rounded-xl shadow-lg px-12 bg-gray-100 py-4"
        >
          <input
            className="w-full bg-gray-100 focus:outline-none text-center"
            type="text"
            value={searchLocation}
            placeholder="Filter by location"
            onChange={(e) => {setSearchLocation(e.target.value); locationFilter(e);}}
          />
        </section>
        <section
          id="services"
          className="w-full mt-16 block rounded-xl shadow-lg px-12 bg-gray-100 py-4"
        >
          <input
            className="w-full bg-gray-100 focus:outline-none text-center"
            type="text"
            value={searchServices}
            placeholder="Filter by Services"
            onChange={(e) => {setSearchServices(e.target.value); serviceFilter(e);}}
          />
        </section>
      </section>
      <section className="grid grid-cols-2 gap-5">
      {
        searchLocation.length > 0 && (
      <section className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      State
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Verified
                    </th>
                  </tr>
                </thead>
                <tbody>{
                  locationSearch.slice(0, 5).map(location => (
                    <tr>
                    <a onClick={() => {setSearchLocation(location.name); setLocationSearch([])}}>
                      <td className="px-5 text-csenter cursor-pointer py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{location.name}</p>
                      </td>
                    </a>
                    <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{location?.state?.name}</p>
                    </td>
                    <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                      { location.verified ? (<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Verified</span>
                      </span>) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Not Verified</span>
                      </span>
                      )}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
        ) || <div></div>}
      {
        searchServices.length > 0 && (
      <section className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Deliverable
                    </th>
                  </tr>
                </thead>
                <tbody>{
                  servicesSearch.slice(0, 5).map(service => (
                    <tr>
                    <a onClick={() => {setSearchServices(service.name); setServicesSearch([]); }}>
                      <td className="px-5 text-csenter cursor-pointer py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{service.name}</p>
                      </td>
                    </a>
                    <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{service.description}</p>
                    </td>
                    <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                      { service.deliver ? (<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Deliverable</span>
                      </span>) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Non Deliverable</span>
                      </span>
                      )}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
        )}
        </section>
        <div className="w-full flex justify-center my-8">
          <div>
          <button onClick={() => { setSearchLocation(""); setSearchServices("") }} className="bg-gray-200 w-40 mx-2 hover:bg-gray-300 transition duration-200 text-base lg:text-lg text-black font-semibold rounded-lg px-8 py-4">
                          Clear
          </button>
          <button className="bg-red-600 w-40 mx-2 hover:bg-red-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-8 py-4">
                          Search
          </button>
          </div>
        </div>
    </div>
  );
}

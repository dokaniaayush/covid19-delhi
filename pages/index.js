import react, { useState } from "react";
import Head from "next/head";
import Facilities from "../Components/Facilities";
import Hospital from "../Components/Hospital";
import Services from "../Components/Services";
import Volunteers from "../Components/Volunteers";

export default function Home() {
  const [location, setLocation] = useState("");

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Head>
        <title>Covid-19 Resources</title>
      </Head>
      <section className="bg-black flex w-full justify-center fixed top-0 left-0 items-center">
        <h1 className="text-white text-2xl font-body py-4">
          Covid-19 Resources
        </h1>
      </section>
      <section
        id="location"
        className="w-full mt-16 block rounded-xl shadow-lg px-12 bg-gray-100 py-4"
      >
        <input
          className="w-full bg-gray-100 focus:outline-none"
          type="text"
          value={location}
          placeholder="Filter by location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </section>
      <div className="grid  grid-cols-2 gap-4">
        <Facilities />

        <Hospital />

        <Services />

        <Volunteers />
      </div>
    </div>
  );
}

import React from 'react'

const InputSection = ({ searchLocation, searchFacilities, setSearchLocation, setSearchFacilities, locationFilter, serviceFilter }) => {
    return (
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
          id="facilities"
          className="w-full mt-16 block rounded-xl shadow-lg px-12 bg-gray-100 py-4"
        >
          <input
            className="w-full bg-gray-100 focus:outline-none text-center"
            type="text"
            value={searchFacilities}
            placeholder="Filter by Facilities"
            onChange={(e) => {setSearchFacilities(e.target.value); serviceFilter(e);}}
          />
        </section>
      </section>
    )
}

export default InputSection

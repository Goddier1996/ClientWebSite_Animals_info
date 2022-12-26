import React from "react";
import { useState } from "react";
import Home from "../pages/home";


// here Search animals from data base
const SearchAnimals: React.FC = () => {


  //save input value when search
  const [query, setQuery] = useState<string>("");


  
// clear place input search
  const clearSearch = () => {
    setQuery("");
  };



  return (
    <>
      <div className="modelSearch">
        <form
          className="search-box"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Type to Search..."
            id="search-query"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <button type="reset" onClick={clearSearch}></button>
        </form>
      </div>

      {/* send props input value Search */}
      <Home query={query} />
    </>
  );
};


export default SearchAnimals;
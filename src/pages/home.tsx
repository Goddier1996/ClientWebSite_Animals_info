import React from "react";

//components
import AnimalsModals from "../components/showAnimals";


// home page
const Home: React.FC<{ query: string }> = ({ query }) => {

  
  return (

    <div>
      {/* show all cards animals */}
      <div>
        {/* here you active all card animals and sound with compoment showAnimals */}
        <AnimalsModals query={query} />
      </div>
    </div>

  );
};


export default Home;
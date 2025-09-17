import { propertyUrl } from "../services/api";
import { GlobalContext } from "./context";

import React, { useEffect, useState } from "react";

export const GlobalProvider=({children})=>{
    
    const [properties, setProperties] = useState([]);

  async function fetchPropertyList() {
    try {
      const response = await fetch(propertyUrl);
      const result = await response.json();
      setProperties(result);
      console.log("Fetched result:", result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  useEffect(() => {
    fetchPropertyList();
  }, []);
    return(
        <GlobalContext.Provider value={{properties}}>
            {children}
        </GlobalContext.Provider>
    )
}
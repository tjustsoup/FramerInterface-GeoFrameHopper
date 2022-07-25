import React from "react";
import LocationPanel from "../LocationPanel";

function FilterManagerFactory() {
  const FilterManager = () => {
    return <LocationPanel />;
  };

  return FilterManager;
}

export default FilterManagerFactory;

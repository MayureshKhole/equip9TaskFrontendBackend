import { createContext, useState } from "react";

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [imageSelected, setImageSelected] = useState(false);
  return (
    <ImageContext.Provider value={{ imageSelected, setImageSelected }}>
      {children}
    </ImageContext.Provider>
  );
};

const DistanceContext = createContext();
const DistanceProvider = ({ children }) => {
  const [distanceSelected, setDistanceSelected] = useState({
    longitudefrom: 0,
    latitudefrom: 0,
    longitudeto: 0,
    latitudeto: 0,
  });

  return (
    <DistanceContext.Provider value={{ distanceSelected, setDistanceSelected }}>
      {children}
    </DistanceContext.Provider>
  );
};

export { ImageContext, ImageProvider, DistanceContext, DistanceProvider };

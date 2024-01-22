import React, { useState } from "react";
import { RecapType } from "../interfaces/types";

export interface SearchContextType {
  searchQuery: string;
  filteredData: RecapType["recapData"];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setFilteredData: React.Dispatch<React.SetStateAction<RecapType["recapData"]>>;
}
export const SearchContext = React.createContext<SearchContextType>({
  searchQuery: "",
  filteredData: [],
  setSearchQuery: () => {},
  setFilteredData: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<RecapType["recapData"]>([]);
  // console.log(filteredData, "filteredData from context");

  // useEffect(() => {
  //   setFilteredData([]);
  // }, []);
  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, filteredData, setFilteredData }}
    >
      {children}
    </SearchContext.Provider>
  );
};

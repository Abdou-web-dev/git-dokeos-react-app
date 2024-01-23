import React, { useState } from "react";
import { RecapType } from "../interfaces/types";

export interface SearchContextType {
  searchQuery: string;
  filteredData: RecapType["recapData"];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setFilteredData: React.Dispatch<React.SetStateAction<RecapType["recapData"]>>;
  homeTabStyles: React.CSSProperties;
  setHomeTabStyles: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  homeTabTextStyles: React.CSSProperties;
  setHomeTabTextStyles: React.Dispatch<
    React.SetStateAction<React.CSSProperties>
  >;
}
export const SearchContext = React.createContext<SearchContextType>({
  searchQuery: "",
  filteredData: [],
  setSearchQuery: () => {},
  setFilteredData: () => {},
  homeTabStyles: {},
  setHomeTabStyles: () => {},
  homeTabTextStyles: {},
  setHomeTabTextStyles: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<RecapType["recapData"]>([]); //This part initializes state variables homeTabStyles and homeTabTextStyles using the useState hook in the context provider.
  const [homeTabStyles, setHomeTabStyles] = useState<React.CSSProperties>({});
  const [homeTabTextStyles, setHomeTabTextStyles] =
    useState<React.CSSProperties>({});

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filteredData,
        setFilteredData,
        homeTabStyles,
        setHomeTabStyles,
        homeTabTextStyles,
        setHomeTabTextStyles,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

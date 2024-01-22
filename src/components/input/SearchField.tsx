import _debounce from "lodash/debounce"; // Import lodash debounce
import { FunctionComponent, useContext } from "react";
import filter from "../../assets/img/filter.svg";
import magnifier from "../../assets/img/magnifier.svg";
import { SearchContext } from "../../context/SearchContext";
import { CertifRowType, RecapType } from "../../interfaces/types";

interface SearchInputProps {
  data: RecapType["recapData"];
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ data }) => {
  const { searchQuery, setSearchQuery, setFilteredData } =
    useContext(SearchContext);

  // Debounce the handleSearch function
  const debouncedHandleSearch = _debounce(
    (query: string) => {
      const normalizedQuery = query.toLowerCase();

      const newFilteredData: RecapType["recapData"] = data.filter(
        (item: CertifRowType) => {
          // Normalize the values for case-insensitive comparison
          const normalizedCertificate = item.certificate.toLowerCase();
          const normalizedLearner = item.learner.toLowerCase();
          const normalizedCourse = item.course.toLowerCase();

          // Check if any of the fields contains all words from the normalized query
          const containsAllWords = normalizedQuery
            .split(" ")
            .every((word) =>
              [normalizedCertificate, normalizedLearner, normalizedCourse].some(
                (field) => field.includes(word)
              )
            );

          return containsAllWords;
        }
      );
      setFilteredData(newFilteredData);
    },
    350
    //match the search query regardless of the order of words in the string and the query is case-insensitive,
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    debouncedHandleSearch(query);
  };

  // The SearchInput component is responsible for managing the search query state and handling the search, and it communicates the results back to the parent
  //  component through the onSearch prop. This approach follows a more modular and encapsulated design, where each component has its own responsibilities.
  return (
    <div className="search-input-container">
      <div className="search-prefix">
        <button>
          <img width={`24px`} src={magnifier} alt="" />
        </button>
        <div className="vertical-border" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Rechercher..."
        className="search-input"
      />
      <div className="search-suffix">
        {/* <div className="vertical-border" /> */}
        <button>
          <img width={`24px`} src={filter} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;

import { useState } from "react";
import filter from "../../assets/img/filter.svg";
import magnifier from "../../assets/img/magnifier.svg";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

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
        onChange={handleInputChange}
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

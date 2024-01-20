// ... (your imports)

import { BsFilter, BsSearch, BsUpload } from "react-icons/bs";

const RecapTable = ({
  data,
  columns,
}: {
  data: {
    // id: number;
    // name: string;
    // age: number;
    // country: string;
  }[];
  columns: any[];
}) => {
  return (
    <div>
      <div className="table-header">
        <div className="table-label">Utilisateurs</div>
        <div className="header-actions">
          <button className="upload-button">
            <BsUpload /> Export Excel
          </button>
          <div className="search-input">
            <BsFilter className="filter-icon" />
            <BsSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
      {/* <ReactTableLite /> */}
    </div>
  );
};

export default RecapTable;

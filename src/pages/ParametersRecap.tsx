import { useContext, useState } from "react";
import { certifData } from "../assets/data/certificateData";
import TableDivider from "../components/divider/TableDivider";
import CertifTableBody from "../components/tables/CertifTableBody";
import { CertifTableHead } from "../components/tables/CertifTableHead";
import CertifTableHeaderGroup from "../components/tables/CertifTableHeaderGroup";
import {
  ALL_ROWS_DISPLAYED_CLASS_NAME,
  FILTERED_DATA_CLASS_NAME,
  TABLE_CLASS_NAME,
} from "../constants/constants";
import { SearchContext } from "../context/SearchContext";
import {
  CertifRowType,
  RecapType,
  tableButtonHeaderType,
} from "../interfaces/types";
import { generateClassNames } from "../utils/classNames";

type SortDirection = "asc" | "desc";

const CertificateTable = () => {
  const { searchQuery, filteredData, setFilteredData } =
    useContext(SearchContext);

  const [data, setData] = useState<RecapType["recapData"]>(certifData);

  const totalRows = data?.length;
  const totalFilteredRows = filteredData?.length;

  const [sortDirections, setSortDirections] = useState<tableButtonHeaderType>({
    certificate: "asc", // Initial sorting direction for "Nom du Certificat", initial sorting direction for "Nom du Certificat" to be ascending ("asc")
    learner: "asc",
    course: "asc",
    generationDate: "asc",
    expirationDate: "asc",
    actions: "asc",
  });

  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortDirection>("asc");
  const [visibleRows, setVisibleRows] = useState<number>(5); // Initial number of rows to display
  // Define a new state to track the number of visible rows specifically for filtered data:
  const [visibleFilteredRows, setVisibleFilteredRows] = useState<number>(5);

  const handleSort = (label: string) => {
    // Toggle the sorting direction
    const newSortOrder =
      sortBy === label ? (sortOrder === "asc" ? "desc" : "asc") : "asc";

    // Update the state
    setSortBy(label);
    setSortOrder(newSortOrder);

    // Update the sort direction only for the clicked HeadButton
    setSortDirections((prevSortDirections: tableButtonHeaderType) => ({
      ...prevSortDirections,
      [label]: newSortOrder === "asc" ? "desc" : "asc",
    }));
    // Update the sort direction only for the clicked HeadButton
  };
  // ///////////////////////
  const sortedData: RecapType["recapData"] = [...data].sort((a, b) => {
    const compareValue = (valueA: string, valueB: string) => {
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    };

    switch (sortBy) {
      case "certificate":
        return compareValue(a.certificate, b.certificate);
      case "learner":
        return compareValue(a.learner, b.learner);
      case "course":
        return compareValue(a.course, b.course);
      case "generationDate":
        return compareValue(a.generationDate, b.generationDate);
      case "expirationDate":
        return compareValue(a.expirationDate, b.expirationDate);
      default:
        return 0;
    }
  });
  ////////////////////////////
  // Sorting logic for filtered data
  const sortedFilteredData: RecapType["recapData"] = [...filteredData].sort(
    (a, b) => {
      const compareValue = (valueA: string, valueB: string) => {
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      };

      switch (sortBy) {
        case "certificate":
          return compareValue(a.certificate, b.certificate);
        case "learner":
          return compareValue(a.learner, b.learner);
        case "course":
          return compareValue(a.course, b.course);
        case "generationDate":
          return compareValue(a.generationDate, b.generationDate);
        case "expirationDate":
          return compareValue(a.expirationDate, b.expirationDate);
        default:
          return 0;
      }
    }
  );

  const handleDelete = (id: number) => {
    // Determine the source data based on the search query
    const sourceData: RecapType["recapData"] =
      searchQuery?.length !== 0 && filteredData?.length !== 0
        ? filteredData
        : data;

    // Filter out the row with the specified id
    const newData: RecapType["recapData"] = sourceData?.filter(
      (item: CertifRowType) => item.id !== id
    );

    // Update both the filteredData and the original data state
    if (searchQuery?.length !== 0 && filteredData?.length !== 0) {
      setFilteredData(newData);
      setData((prevData) => prevData.filter((item) => item.id !== id)); //This should ensure that when I delete a row from filteredData and then clear the search field,
      // the deleted row is correctly removed from the original data array as well.
    } else {
      setData(newData);
    }
  };

  const handleVoirPlusClick = () => {
    if (searchQuery && filteredData?.length > 0) {
      setVisibleFilteredRows(
        (prevVisibleFilteredRows) => prevVisibleFilteredRows + 5
      );
    } else {
      setVisibleRows((prevVisibleRows) => prevVisibleRows + 5);
    }
  };
  // this function  encapsulates the logic for determining whether the button should be disabled or not based on the visibility of rows and the search query.
  function isBtnDisabled() {
    // if there is searchQuery and results indeed
    if (searchQuery?.length > 0 && filteredData?.length > 0) {
      if (visibleFilteredRows >= totalFilteredRows) {
        return true;
      }
    } else {
      if (visibleRows >= totalRows) return true;
    }
    return false;
  }
  //  meaningful variable name to improve code readability and maintainability
  let is_query_and_results_not_null =
    searchQuery?.length > 0 && filteredData?.length > 0;

  return (
    <div className="page-content-container params-recap-table-container">
      <p className="certif">Certificats générés</p>
      <div className="table-and-header">
        <CertifTableHeaderGroup data={data} />
        {/* Check if there are rows in the table */}
        {/* I integrated the search functionality and made the component dynamic based on whether there is a search query or not. */}
        {searchQuery ? (
          <>
            {filteredData?.length > 0 ? (
              <table
                className={generateClassNames(TABLE_CLASS_NAME, {
                  [FILTERED_DATA_CLASS_NAME]: is_query_and_results_not_null,
                })}
              >
                {searchQuery?.length != 0 && filteredData?.length != 0 && (
                  <>
                    <CertifTableHead
                      handleSort={handleSort}
                      sortDirections={sortDirections}
                    />

                    <CertifTableBody
                      {...{ handleDelete }}
                      tableData={sortedFilteredData.slice(
                        0,
                        visibleFilteredRows
                      )}
                      isMatchExist={
                        searchQuery?.length != 0 && filteredData?.length != 0 //The prop isMatchExist is a boolean flag indicating whether there are matching results after a search operation.
                      }
                      // this code checks whether both searchQuery and filteredData are not null or undefined and if their length properties are not equal to zero. If both conditions are met, it sets isMatchExist to true; otherwise, it sets it to false.
                    />
                  </>
                )}
              </table>
            ) : (
              <p className="flex">No results were found</p>
            )}
          </>
        ) : data?.length > 0 ? (
          <table className={TABLE_CLASS_NAME}>
            <CertifTableHead
              handleSort={handleSort}
              sortDirections={sortDirections}
              // tableHeaders={tableHeaders}
            />

            <CertifTableBody
              {...{ handleDelete }}
              {...{ handleDelete }}
              tableData={sortedData.slice(0, visibleRows)} //sortedData.slice(0, visibleRows) is using the slice method to extract a portion of the sortedData array.
            />
          </table>
        ) : null}

        <TableDivider />

        <button
          disabled={isBtnDisabled()} // Disable if all rows are displayed,the button is disabled (disabled={true}) if visibleRows is greater than or equal to the total number of rows (visibleRows >= totalRows).
          className={`voir-plus-btn ${
            isBtnDisabled() ? ALL_ROWS_DISPLAYED_CLASS_NAME : ""
          }`} //The expression searchQuery?.length != 0 is using optional chaining (?.) to safely access the length property of searchQuery. This helps avoid errors if searchQuery is null or undefined.
          onClick={handleVoirPlusClick}
        >
          <span>voir plus</span>
        </button>
      </div>
    </div>
  );
};

export default CertificateTable;

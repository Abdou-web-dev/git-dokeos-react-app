import { useState } from "react";
import { myData } from "../assets/data/certificateData";
import CertifTableHeader from "../components/tables/CertifTableHeader";
import HeadButton from "../components/tables/buttons/HeadButton";

const CertificateTable = () => {
  const [data, setData] = useState(myData);
  const [sortDirection, setSortDirection] = useState("asc"); // Initial sorting direction

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column: string) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
    // Toggle the sorting direction
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
  };

  const sortedData = [...data].sort((a, b) => {
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

  const tableHeaders: {
    label: string;
    title: string;
  }[] = [
    { label: "certificate", title: "Nom du Certificat" },
    { label: "learner", title: "Apprenant" },
    { label: "course", title: "Formation" },
    { label: "generationDate", title: "Date de génération" },
    { label: "expirationDate", title: "Date d'Expriration" },
    { label: "actions", title: "Actions" },
  ];

  return (
    <div className="page-content-container certif-table-container">
      <p>Mes Certificats</p>
      <div className="table-and-header">
        <CertifTableHeader />
        <table>
          <thead>
            <tr>
              <th>
                <HeadButton
                  {...{
                    label: "certificate",
                    handleSort,
                    sortDirection,
                    title: "Nom du Certificat",
                  }}
                  // this code snippet is creating a HeadButton component and passing the properties (label: "certificate"), handleSort, sortDirection, to it.
                  // using the spread operator ({...}) to pass the properties as an object,
                />
              </th>
              <th>
                <HeadButton
                  {...{
                    label: "learner",
                    handleSort,
                    sortDirection,
                    title: "Apprenant",
                  }}
                />
              </th>
              <th>
                <HeadButton
                  {...{
                    label: "course",
                    handleSort,
                    sortDirection,
                    title: "Formation",
                  }}
                />
              </th>
              <th>
                <HeadButton
                  {...{
                    label: "generationDate",
                    handleSort,
                    sortDirection,
                    title: "Date de génération",
                  }}
                />
              </th>
              <th>
                <HeadButton
                  {...{
                    label: "expirationDate",
                    handleSort,
                    sortDirection,
                    title: "Date d'Expriration",
                  }}
                />
              </th>
              <th>
                <HeadButton
                  {...{
                    label: "actions",
                    handleSort,
                    sortDirection,
                    title: "Actions",
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item) => (
              <tr key={item.id}>
                <td>{item.certificate}</td>
                <td>{item.learner}</td>
                <td>{item.course}</td>
                <td>{item.generationDate}</td>
                <td>{item.expirationDate}</td>
                <td> {/* Add action buttons here */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificateTable;

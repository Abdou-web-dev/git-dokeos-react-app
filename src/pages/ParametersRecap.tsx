import { useState } from "react";
import { myData } from "../assets/data/certificateData";
import CertifTableHeader from "../components/tables/CertifTableHeader";

const CertificateTable = () => {
  const [data, setData] = useState(myData);

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column: string) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
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

  return (
    <div className="page-content-container certif-table-container">
      <p>Mes Certificats</p>
      <div className="table-and-header">
        <CertifTableHeader />
        <table>
          <thead>
            <tr>
              <th>
                <button onClick={() => handleSort("certificate")}>
                  Nom du certificat
                </button>
              </th>
              <th>
                <button onClick={() => handleSort("learner")}>Apprenant</button>
              </th>
              <th>
                <button onClick={() => handleSort("course")}>Formation</button>
              </th>
              <th>
                <button onClick={() => handleSort("generationDate")}>
                  Date de génération
                </button>
              </th>
              <th>
                <button onClick={() => handleSort("expirationDate")}>
                  Date d'expiration
                </button>
              </th>
              <th>
                <button onClick={() => handleSort("actions")}>Actions</button>
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

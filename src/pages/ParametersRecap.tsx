import { useState } from "react";
import { myData } from "../assets/data/certificateData";
import CertifTableHeader from "../components/tables/CertifTableHeader";
import ActionsButtons from "../components/tables/buttons/ActionsButtons";
import HeadButton from "../components/tables/buttons/HeadButton";
import { RecapType, tableButtonHeaderType } from "../interfaces/types";

const CertificateTable = () => {
  type SortDirection = "asc" | "desc";

  const tableHeaders: {
    label: string;
    title: string;
  }[] = [
    { label: "certificate", title: "Nom du Certificat".slice(0, 13) },
    { label: "learner", title: "Apprenant" },
    { label: "course", title: "Formation" },
    { label: "generationDate", title: "Date de génération".slice(0, 13) },
    { label: "expirationDate", title: "Date d'Expriration".slice(0, 13) },
    { label: "actions", title: "Actions" },
  ];

  // const [data, setData] = useState<RecapType>(myData);
  const [data, setData] = useState<RecapType["recapData"]>(myData);

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
    // setSortDirections(
    //   (prevSortDirections) =>
    //     ({
    //       ...Object.fromEntries(
    //         Object.entries(prevSortDirections).map(([key, value]) => [
    //           key,
    //           key === label ? (newSortOrder === "asc" ? "desc" : "asc") : null,
    //         ])
    //       ),
    //     } as { [K in keyof typeof prevSortDirections]: SortDirection | null })
    // );
  };
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

  const handleDelete = (id: number) => {
    // Filter out the row with the specified id
    const newData: RecapType["recapData"] = data.filter(
      (item) => item.id !== id
    );
    setData(newData);
  };

  return (
    <div className="page-content-container params-recap-table-container">
      <p>Mes Certificats</p>
      <div className="table-and-header">
        <CertifTableHeader />
        <table className="certif-table">
          <thead className="t-header">
            <tr className="t-row">
              {tableHeaders?.map((buttonProps, index) => {
                return (
                  <th className="t-head" key={index}>
                    <HeadButton
                      {...{
                        ...buttonProps,
                        handleSort,
                      }}
                      sortDirection={
                        sortDirections[
                          buttonProps.label as keyof typeof sortDirections
                        ]
                      }
                    />
                    {/* as keyof typeof sortDirections : type assertion to let TypeScript know that the value is one of the known keys. */}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="t-body">
            {sortedData?.map((item) => (
              <tr className="t-body-row" key={item.id}>
                <td>{item.certificate}</td>
                <td>{item.learner}</td>
                <td>{item.course}</td>
                <td>{item.generationDate}</td>
                <td>{item.expirationDate}</td>
                <td>
                  <ActionsButtons onDelete={() => handleDelete(item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificateTable;

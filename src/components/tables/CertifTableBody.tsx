import { FunctionComponent, useState } from "react";
import { CertifRowType, RecapType } from "../../interfaces/types";
import ActionsButtons from "./buttons/ActionsButtons";

interface CertifTableBodyProps {
  handleDelete: (id: number) => void;
  tableData: RecapType["recapData"];
  isMatchExist?: boolean;
}

const CertifTableBody: FunctionComponent<CertifTableBodyProps> = ({
  tableData,
  handleDelete,
  isMatchExist,
}) => {
  const [selectedRowForDeletion, setSelectedRowForDeletion] = useState<
    number | null
  >(null);
  // This structure allows me to handle the application and cancellation of styles related to the pending deletion directly in the CertifTableBody component, keeping the logic clear and modular.

  // console.log(selectedRowForDeletion, "selectedRowForDeletion");
  return (
    <tbody
      className={`t-body ${isMatchExist ? "t-body__match_exist" : ""}`}
      style={{ border: "1px solid red" }}
    >
      {tableData?.map((row: CertifRowType) => (
        <tr
          className={`t-body-row
            ${
              row.id === selectedRowForDeletion
                ? "selected-for-deletion"
                : "not-selected-for-deletion"
            }
         `}
          key={row.id}
        >
          <td>{row.certificate}</td>
          <td>{row.learner}</td>
          <td>{row.course}</td>
          <td>{row.generationDate}</td>
          <td>{row.expirationDate}</td>
          <td>
            <ActionsButtons
              // The prop applyStylesPendingDeletion is a function that will be passed to the ActionsButtons component. This function is responsible for applying styles to the row that is pending deletion.
              // This allows to visually highlight the row that is about to be deleted.
              applyStylesPendingDeletion={() =>
                setSelectedRowForDeletion(row.id)
              }
              cancelStylesPendingDeletion={() =>
                setSelectedRowForDeletion(null)
              }
              onDelete={() => handleDelete(row.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CertifTableBody;

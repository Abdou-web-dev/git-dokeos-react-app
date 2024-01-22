import { FunctionComponent } from "react";
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
  return (
    <tbody
      className={`t-body ${isMatchExist ? "t-body__match_exist" : ""}`}
      style={{ border: "1px solid red" }}
    >
      {tableData?.map((item: CertifRowType) => (
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
  );
};

export default CertifTableBody;

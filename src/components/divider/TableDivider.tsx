import { FunctionComponent } from "react";

interface TableDividerProps {}

const TableDivider: FunctionComponent<TableDividerProps> = () => {
  return (
    <div
      style={{
        width: "90%",
        height: "1px",
        backgroundColor: "rgb(135, 135, 135,0.4)",
        margin: "20px auto",
      }}
    ></div>
  );
};

export default TableDivider;

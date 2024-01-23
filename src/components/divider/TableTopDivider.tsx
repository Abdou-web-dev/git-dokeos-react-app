export const TableTopDivider = ({
  tableHeaders,
}: {
  tableHeaders: {
    label: string;
    title: string;
  }[];
}) => {
  {
    /* additional <tr> element in the <thead> section of the table. This <tr> will contain a single <td> element spanning across all columns, and I can style it to act as a divider */
  }
  return (
    <tr>
      <td colSpan={tableHeaders?.length}>
        <div
          style={{
            width: "90%",
            height: "0.5px",
            backgroundColor: "rgb(135, 135, 135,0.4)",
            margin: "20px auto",
          }}
        ></div>
      </td>
    </tr>
  );
};

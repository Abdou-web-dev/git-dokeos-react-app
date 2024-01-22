import { FunctionComponent } from "react";
import cloud from "../../assets/img/cloud-arrow-down-alt-svgrepo-com.svg";
import { RecapType } from "../../interfaces/types";
import SearchInput from "../input/SearchField";

interface CertifTableHeaderGroupProps {
  data: RecapType["recapData"];
}
const CertifTableHeaderGroup: FunctionComponent<
  CertifTableHeaderGroupProps
> = ({ data }) => {
  return (
    <div className="table-header">
      <div className="table-label">Utilisateurs</div>
      <div className="header-actions">
        <button className="upload-button">
          <img width={`30px`} src={cloud} className="cloud-icon" alt="" />
          <span>Export Excel</span>
        </button>
        <SearchInput {...{ data }} />
      </div>
    </div>
  );
};

export default CertifTableHeaderGroup;

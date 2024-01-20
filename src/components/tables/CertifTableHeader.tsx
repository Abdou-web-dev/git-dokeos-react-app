import { FunctionComponent } from "react";
import cloud from "../../assets/img/cloud-arrow-down-alt-svgrepo-com.svg";
import SearchInput from "../input/SearchField";

interface CertifTableHeaderProps {}

const CertifTableHeader: FunctionComponent<CertifTableHeaderProps> = () => {
  return (
    <div className="table-header">
      <div className="table-label">Utilisateurs</div>
      <div className="header-actions">
        <button className="upload-button">
          <img width={`30px`} src={cloud} className="cloud-icon" alt="" />
          <span>Export Excel</span>
        </button>
        <SearchInput />
      </div>
    </div>
  );
};

export default CertifTableHeader;

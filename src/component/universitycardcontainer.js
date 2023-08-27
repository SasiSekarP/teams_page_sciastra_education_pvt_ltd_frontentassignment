import { LiaUniversitySolid } from "react-icons/lia";

const UniversityCard = (props) => {
  return (
    <div className="universitycard">
      <LiaUniversitySolid />
      <div className="universitynameheader">{props.data}</div>
    </div>
  );
};

export default UniversityCard;

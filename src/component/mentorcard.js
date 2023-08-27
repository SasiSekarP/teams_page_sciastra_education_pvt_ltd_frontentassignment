const Mentorcard = (props) => {
  const { image_url, name, university } = props.data;
  return (
    <div className="universitycard">
      <img src={image_url} alt="mentor_image" className="mentorimg" />
      <div className="mentorname">{name}</div>
      <div className="universitynameheader">{university}</div>
    </div>
  );
};

export default Mentorcard;

const Advisorcard = (props) => {
  const { image_url, name, university, position } = props.data;

  const alertmessage = () => {
    alert(`You clicked on ${name}'s message button`);
  };
  return (
    <div className="universitycard advisorcard">
      <img src={image_url} alt="mentor_image" className="mentorimg" />
      <div className="mentorname">{name}</div>
      <div className="mentorname">{position}</div>
      <div className="universitynameheader">{university}</div>
      <button className="advisorbutton" type="button" onClick={alertmessage}>
        Message him now
      </button>
    </div>
  );
};

export default Advisorcard;

import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbarhomecontainer">
      <div className="logocontainer">
        <img
          className="logoimage"
          src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg"
          alt="logo"
        />
      </div>
      <div className="linkcontainer">
        <ScrollLink to="university" duration={500} className="scrolllink">
          Universities
        </ScrollLink>
        <ScrollLink to="mentor" duration={500} className="scrolllink">
          Mentors
        </ScrollLink>
        <ScrollLink to="advisor" duration={500} className="scrolllink">
          Advisor
        </ScrollLink>
      </div>
    </div>
  );
}

import "./App.css";
import "./style/navbar.css";
import "./style/university.css";
import "./style/home.css";
import "./style/universitycardcontainer.css";
import "./style/mentorcard.css";

import Navbar from "./component/navbar.js";
import UniversityCard from "./component/universitycardcontainer";
import Mentorcard from "./component/mentorcard";
import Advisorcard from "./component/advisorcard";

function App() {
  const universityName = [
    { id: 1, name: "university 1" },
    { id: 2, name: "university 2" },
    { id: 3, name: "university 3" },
    { id: 4, name: "university 4" },
    { id: 5, name: "university 5" },
    { id: 6, name: "university 6" },
    { id: 7, name: "university 7" },
    { id: 8, name: "university 8" },
    { id: 9, name: "university 9" },
    { id: 10, name: "university 10" },
  ];

  const mentorList = [
    {
      id: 1,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 1",
      university: "University 1",
    },
    {
      id: 2,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 2",
      university: "University 2",
    },
    {
      id: 3,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 3",
      university: "University 3",
    },
    {
      id: 4,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 4",
      university: "University 4",
    },
    {
      id: 5,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 5",
      university: "University 5",
    },
    {
      id: 6,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 1",
      university: "University 1",
    },
    {
      id: 7,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 2",
      university: "University 2",
    },
    {
      id: 8,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 3",
      university: "University 3",
    },
    {
      id: 9,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 4",
      university: "University 4",
    },
    {
      id: 10,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 5",
      university: "University 5",
    },
    {
      id: 11,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 1",
      university: "University 1",
    },
    {
      id: 12,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 2",
      university: "University 2",
    },
    {
      id: 13,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 3",
      university: "University 3",
    },
    {
      id: 14,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 4",
      university: "University 4",
    },
    {
      id: 15,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 5",
      university: "University 5",
    },
    {
      id: 16,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 1",
      university: "University 1",
    },
    {
      id: 17,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 2",
      university: "University 2",
    },
    {
      id: 18,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 3",
      university: "University 3",
    },
    {
      id: 19,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 4",
      university: "University 4",
    },
    {
      id: 20,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 5",
      university: "University 5",
    },
    {
      id: 21,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 1",
      university: "University 1",
    },
    {
      id: 22,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 2",
      university: "University 2",
    },
    {
      id: 23,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 3",
      university: "University 3",
    },
    {
      id: 24,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 4",
      university: "University 4",
    },
    {
      id: 25,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 5",
      university: "University 5",
    },
    {
      id: 26,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 1",
      university: "University 1",
    },
    {
      id: 27,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 2",
      university: "University 2",
    },
    {
      id: 28,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 3",
      university: "University 3",
    },
    {
      id: 29,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 4",
      university: "University 4",
    },
    {
      id: 30,
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Mentor 5",
      university: "University 5",
    },
  ];

  const advisorList = [
    {
      name: "Advisor 1",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      position: "Principal Project Scientist",
      university: "University 1",
      id: 1,
    },
    {
      name: "Advisor 2",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      position: "Principal Project Scientist",
      university: "University 2",
      id: 2,
    },
    {
      name: "Advisor 3",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 3",
      id: 3,
    },
    {
      name: "Advisor 4",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 4",
      id: 4,
    },
    {
      name: "Advisor 5",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 5",
      id: 5,
    },
    {
      name: "Advisor 6",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 6",
      id: 6,
    },
    {
      name: "Advisor 7",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 7",
      id: 7,
    },
    {
      name: "Advisor 8",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 8",
      id: 8,
    },
    {
      name: "Advisor 9",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 9",
      id: 9,
    },
    {
      name: "Advisor 10",
      image_url:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",

      position: "Principal Project Scientist",
      university: "University 10",
      id: 10,
    },
  ];

  return (
    <div className="homecontainer">
      <Navbar />
      <div className="homeimage">
        <div className="Universityheader">Team Page</div>
      </div>
      <div className="datacontainer">
        <div className="universityheading" id="university">
          Universities
        </div>
        <div className="paraofheading">
          Learn from Scientists, research scholors from the top institutes in
          the world
        </div>
        <div className="universitycardcontainer">
          {universityName.map((data) => {
            return (
              <div key={data.id}>
                <UniversityCard data={data.name} />
              </div>
            );
          })}
        </div>
        <div id="mentor" className="universityheading">
          Meet your mentors
        </div>
        <div className="universitycardcontainer">
          {mentorList.map((data) => {
            return (
              <div key={data.id}>
                <Mentorcard data={data} />
              </div>
            );
          })}
        </div>
        <div id="advisor" className="universityheading">
          Mentor & Advisor
        </div>
        <div className="universitycardcontainer">
          {advisorList.map((data) => {
            return <Advisorcard data={data} />;
          })}
        </div>
      </div>
      <div className="footer">All copy rights reserved by Sasi Sekar</div>
    </div>
  );
}

export default App;

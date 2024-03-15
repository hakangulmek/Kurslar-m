import Course from "./course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Courses({ Courses, removeCourse }) {
  const [index, setİndex] = useState(0);
  const { content, title, price } = Courses[index];
  const checkIndex = (index) => {
    if (index < 0) {
      return Courses.length - 1;
    }
    return index;
  };
  const checkNextIndex = (index) => {
    if (index > Courses.length - 1) {
      return 0;
    }
    return index;
  };
  const prevCourse = () => {
    setİndex((index) => {
      let newİndex = index - 1;
      return checkIndex(newİndex);
    });
  };
  const nextCourse = () => {
    setİndex((index) => {
      let nextİndex = index + 1;
      return checkNextIndex(nextİndex);
    });
  };
  const randomCourse = () => {
    let randomNumber = Math.floor(Math.random() * Courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setİndex(checkIndex(randomNumber));
  };
  return (
    <div className="cours-mainDiv">
      <div className="title-div" onClick={randomCourse}>
        <h2>Kurslarım</h2>
        <button className="rst-btn">Rastgele Kurs Ata</button>
      </div>
      <div className="card">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card-div">
          <div className="card-titlePrice">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-price">{price}TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/*Courses.map((course, index) => {
          return (
            <Course key={index} {...course} removeOneCourse={removeCourse} />
          );
        })*/}
      </div>
    </div>
  );
}

export default Courses;

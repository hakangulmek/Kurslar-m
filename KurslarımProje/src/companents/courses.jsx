import Course from "./course";
function Courses({ Courses, removeCourse }) {
  return (
    <div className="cours-mainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="card">
        {Courses.map((course, index) => {
          return (
            <Course key={index} {...course} removeOneCourse={removeCourse} />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;

import Course from "./course";
function Courses({ Courses, removeCourse }) {
  return (
    <div>
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="">
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

function Course({ id, content, title, price, removeOneCourse }) {
  const handleClick = () => {
    removeOneCourse(id);
  };
  return (
    <div>
      <div className="card-titlePrice">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-price">{price}TL</h4>
      </div>
      <button className="card-deleteBtn" onClick={handleClick}>
        sil
      </button>
    </div>
  );
}

export default Course;

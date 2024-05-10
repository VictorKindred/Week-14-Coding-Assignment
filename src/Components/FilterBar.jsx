import React from "react";

function FilterBar({ setGenreFilter, setRatingFilter }) {
  return (
    <div className="filter-bar">
      {" "}
      {/*The entire div for the filter-bar is given this class name  */}
      <div>
        <label htmlFor="genre">Genre:</label>
        {/* htmlFor gives it a certain label that then links it to another element. In this case, the label is for genre. Anything after that with the id genre will refer tot his label.                   */}
        <select
          id="genre"
          onChange={(e) => setGenreFilter(e.target.value)}
        ></select>
        =
        {/* The select is a dropdown menu t hat listens for a change, this this case when users select, the onChange function is executed. 
                    - e.target is the element that triggered the event (select dropdown)
                    - e.target.value accesses the value of the selected element      */}
        <option value="ALL">ALL</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Supernatural">Supernatural</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Fantasy">Fantasy</option>
      </div>

      
      <div>
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          onChange={(e) => setRatingFilter(e.target.value)}
        ></select>
        <option value="ALL">ALL</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </div>
    </div>
  );
}


export default FilterBar
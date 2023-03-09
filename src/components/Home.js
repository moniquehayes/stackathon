import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCitiesAsync, selectCities } from "../store/citiesSlice";
import { Link } from "react-router-dom";
import { Carousel, Card } from "react-bootstrap";

const Cities = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
//for each city in the cities array, need to dispatch fetchCitiesAsync
//to get the data. have to call it separately each time bc


  useEffect(() => {
    dispatch(fetchCitiesAsync());
  }, [dispatch]);

  //loop in the thunk

  return (
    <>
    <p>Carousel: (remove this later)</p>
        <Carousel>
        <Carousel.Item>
            <img/>
        </Carousel.Item>
    </Carousel>
      <div>
        {/* <ul id="all-exercises">
          {exer.map((ex) => {
            return (
              <li className='exercise-card' key={exer.indexOf(ex)}>
                <h3>{ex.name}</h3>
                {/* <h5>Difficulty: {ex.difficulty}</h5>
                <p>Equipment Needed: {ex.equipment}</p>
                <p>{ex.type}</p>
                <p>{ex.muscle}</p> */}
              {/* </li> */}
            {/* );
          })} */}
        {/* </ul>
        <p>Working</p> */}
        <ul>
            <Card>
                <h3>Country Name</h3>
                <p>country pic</p>
            </Card>
            <Card>
                <h3>Country Name</h3>
                <p>country pic</p>
            </Card>
            <Card>
                <h3>Country Name</h3>
                <p>country pic</p>
            </Card>
            <Card>
                <h3>Country Name</h3>
                <p>country pic</p>
            </Card>
            <Card>
                <h3>Country Name</h3>
                <p>country pic</p>
            </Card>
            <Card>
                <h3>Country Name</h3>
                <p>country pic</p>
            </Card>
        </ul>
      </div>
    </>
  );
};

export default Cities;

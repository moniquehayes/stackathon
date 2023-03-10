import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCitiesAsync, selectCities } from "../store/citiesSlice";
import { Link } from "react-router-dom";
import { Carousel, Card, Container, Col, Row } from "react-bootstrap";

const Cities = () => {
  const dispatch = useDispatch();
  //for each city in the cities array, need to dispatch fetchCitiesAsync
  //to get the data. have to call it separately each time bc

  //prettier-ignore
  const citiesArray = ['barcelona-spain', 'newyork', 'dubai', 'mexicocity', 'sanfrancisco', 'nashville', 'prague', 'london', 'dublin', 'lisbon', 'lagos', 'kyiv', 'paris', 'tokyo', 'rome', 'madrid', 'singapore', 'amsterdam', 'chicago', 'berlin', 'hongkong', 'beijing', 'istanbul', 'milan', 'budapest', 'toronto', 'sydney', 'seoul', 'doha', 'abudhabi', 'osaka', 'bangkok', 'vienna', 'saopaulo', 'zurich', 'melbourne', 'warsaw', 'buenosaires', 'tegucigalpa', 'copenhagen', 'bruge', 'helsinki', 'frankfurt', 'atlanta', 'stockholm', 'athens', 'riodejaneiro', 'telaviv', 'oslo', 'taipei', 'calgary', 'portland', 'santiago', 'mumbai', 'shanghai', 'bilbao', 'neworleans', 'riyadh', 'jerusalem', 'nagoya', 'hanoi', 'goteborg'];

  const cities = useSelector(selectCities);

  useEffect(() => {
    async function fetchData() {
      for (const city of citiesArray.slice(0, 1)) {
        await dispatch(fetchCitiesAsync(city));
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Carousel id="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img1.jpg"
                />
                <Carousel.Caption>Madrid, Spain</Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img2.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img3.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img4.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img5.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img6.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img7.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img8.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img9.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img10.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  id="carousel"
                  src="carousel-pics/img11.jpg"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Card>
              <Card.Title>Ready to plan your next OOO?</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <div id="cards-section">
        {cities?.map((city) => {
          console.log(city);
          return (
            <Card id={city.id}>
              <Card.Img
                id="card-image"
                src={city.included[0].attributes.image.medium}
              ></Card.Img>
              <Card.Title>{city.data[0].attributes.name}</Card.Title>
              <Card.Subtitle>Type: {city.data[0].type}</Card.Subtitle>
              <Card.Text>
                Average Rating:{" "}
                {city.data[0].attributes.average_rating.toFixed(2)}
              </Card.Text>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Cities;

import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import { Row, Col, Card } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Sets() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);

  const getEvents = () => {
    const doFetch = async () => {
      const response = await fetch("http://46.48.59.66:2222/sets");
      const result = await response.json();
      result.length = 3;
      setTags(result);
    };
    doFetch();
  };

  useEffect(getEvents, []);

  return (
    <div className="my-3">
      <Row xs={1} md={3} className="g-2 my-3">
        {tags.map((e, i) => (
          <Col key={i}>
            <Card onClick={() => navigate(`/set/${e.id}`)}>
              <div className="card__wrap">
                <div className="card__body">
                  <div className="sets-title">
                    <h5>{e.name}</h5>
                  </div>
                  <div className="sets-subtitle">
                    <p>{e.event_count} мероприятий</p>
                  </div>
                </div>
                <img
                  className="card__img"
                  alt="card-img"
                  src={logo}
                  style={{ padding: "24px", width: "150px" }}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Sets;

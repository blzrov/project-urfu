import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function EventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    const doFetch = async () => {
      const response = await fetch("http://46.48.59.66:2222/events");
      const result = await response.json();
      setEvents(result);
      console.log(result);
    };
    doFetch();
  };

  useEffect(getEvents, []);

  return (
    <div>
      <h3>Афиша мероприятий</h3>
      <Row xs={1} md={3} className="g-2 my-3">
        {events.map((e, i) => (
          <Col key={i}>
            <Card>
              <div
                onClick={() => navigate(`/event/${e.id}`)}
                className="card__wrap"
              >
                <img
                  className="card__img"
                  alt="card-img"
                  src={logo}
                  style={{ padding: "24px", width: "100px" }}
                />
                <div className="card__body">
                  <div>
                    <h5>{e.title}</h5>
                  </div>
                  <div>Описание</div>
                  <div>Дата: {e.date + " " + e.start_time}</div>
                  <div>Место: {e.address}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Button className="me-2" disabled variant="secondary">
          ← Следующая страница
        </Button>{" "}
        <Button disabled variant="primary">
          Следующая страница →
        </Button>{" "}
      </div>
    </div>
  );
}

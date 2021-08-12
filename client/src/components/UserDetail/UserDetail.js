import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/userAction";
import { Phone, Calendar, Mail } from "react-feather";
import "./UserDetail.css";

const UserDetail = ({ match }) => {
  const { users, loading } = useSelector((state) => state);
  // console.log('users',users)
  // const user = users.find(elt => elt._id === match.params.id)
  // console.log('user',user)
  // console.log('match.params',match.params)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);
  // console.log({ match });
  console.log(users);
  const user = users.filter((elt) => elt._id === match.params.id);
  console.log("user", user);
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="detail">
      {user.map((el) => (
        <div>
          <Card
            style={{
              width: "22rem",
              borderRadius: "10px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <Card.Body>
              <Card.Title>
                <p className="name">
                  <strong>{el.fullName}</strong>
                </p>
              </Card.Title>
              <Card.Text>
                <p>
                  <Mail className="mail" />
                  <span className="email">
                    <strong>Email:</strong>
                  </span>
                  {el.email}
                </p>
                <p>
                  <Calendar className="calendar" />
                  <span className="age">
                    <strong>Age:</strong>
                  </span>
                  {el.age}
                </p>
                <p>
                  <Phone className="phone" />
                  <span className="phone-num">
                    <strong>Phone:</strong>
                  </span>
                  {el.phone}
                </p>
              </Card.Text>
              <Link to="/">
                <Button variant="primary" className="btn">
                  Go Back
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UserDetail;

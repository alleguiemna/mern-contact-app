import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/userAction";
import {Link} from "react-router-dom";
import './UserCard.css';
import {Phone, Calendar, Mail} from 'react-feather';
import EditUser from '../EditUser/EditUser'

const UserCard = ({user}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteUser(user._id))
    }
    
  return (
    <div ClassName="card">
      <Card style={{ width: "22rem" }}>
        <h1>{user.fullName[0].toUpperCase()}</h1>
        <Card.Body>
          <Card.Title><p className="name"><strong>{user.fullName}</strong></p></Card.Title>
          <Card.Text>
            <p ><Mail className="mail"/><span className="email"><strong>Email:</strong></span>{user.email}</p>
            <p ><Calendar className="calendar"/><span className="age"><strong>Age:</strong></span>{user.age}</p>
            <p ><Phone className="phone"/><span className="phone-num"><strong>Phone:</strong></span>{user.phone}</p>
          </Card.Text>
          <div className="d-flex justify-content-between">
          <EditUser user={user}/>
          <Button className="btn" onClick={handleDelete}>Delete</Button>
          <Link to={`/users/get/${user._id}`} ><Button className="btn1">See Details</Button></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;

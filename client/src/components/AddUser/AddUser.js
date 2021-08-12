import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser, getUser } from "../../redux/userAction";
import './AddUser.css'

const AddUser = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <div className="add">
      <Button variant="primary" onClick={handleShow} className="add-btn">
        Add
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault}>
            <label>FullName:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Age:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <label>Phone:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {dispatch(addUser(fullName, email, phone, age));
            dispatch(getUser())}}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUser;

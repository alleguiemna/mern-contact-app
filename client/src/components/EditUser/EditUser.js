import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser, getUser } from "../../redux/userAction";

const EditUser = ({ user }) => {
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [phone, setPhone] = useState(user.phone);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
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
              onChange={(e) => setPhone(e.target.value)}
              value={age}
            />
            <label>Phone:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
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
            onClick={() =>{
                dispatch(editUser(user._id, fullName, email, phone, age));
                dispatch(getUser())
            }
              
            }
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;

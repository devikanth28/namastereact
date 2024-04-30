import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../redux/UserSlice';

const LoginModal = (props) => {
    const [userObj, setUserObj] = useState(
        {
            name:null,
            password:null
        }
    )

    const dispatch = useDispatch();

    const handleFormData = (e) =>{
        const {name, value} = e.target;
        setUserObj({...userObj,[name]:value})
    }

    const handleUserInfo = () =>{
        dispatch(addUser(userObj))
        props.onHide();
    }

    const handleRemoveUser = () =>{
      dispatch(removeUser(userObj?.name))
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         LogIn
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
              <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="Name" name='name' onChange={(e)=>{handleFormData(e)}}/>
                  <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='passowrd' onChange={(e)=>{handleFormData(e)}}/>
                  <label for="floatingPassword">Password</label>
              </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>handleUserInfo()}>Close</Button>
        <Button onClick={()=>handleRemoveUser()}>Remove</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal
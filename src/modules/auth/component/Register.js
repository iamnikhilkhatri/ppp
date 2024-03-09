import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import API_URLS from '../../../api/apis';
// Import toastify css file
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Apple, Eye, Google, Logo } from '../../../assets/svg';
import './index.scss';

export default function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userDetails, setuserDetails] = useState({
    userEmail: '',
    userPass: '',
    userName: '',
  });
  const [show, setShow] = useState(false);
  const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const navigate = useHistory();
  const handleSubmit = (e) => {
    // e?.preventDfault();
    // alert(regex.test(userEmail));

    e?.preventDefault();
    const newErrors = {};
    for (const fieldName in validations) {
      if (!userDetails[fieldName]) {
        newErrors[fieldName] = validations[fieldName];
      }
    }

    if (Object.keys(newErrors).length) {
      // If there are errors, set them in state and prevent form submission
      setErrors(newErrors);
    } else {
      // toast.success('Coming soon', {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      // setuserDetails({
      //   userEmail: '',
      //   userPass: '',
      //   userName: '',
      // });
      // setShow(true);
      // setTimeout(() => {
      //   setShow(false);
      // }, 2000);
      axios
        .post(API_URLS.register, {
          name: userDetails['userName'],
          email: userDetails['userEmail'],
          password: userDetails['userPass'],
        })
        .then((res) => {
          // alert('done');
          setUserEmail('');
          setUserName('');
          setUserPass('');
          navigate.push('/');
          toast.success('Your Account Is Created !', {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // if (userName.length > 0 && regex.test(userEmail) && userPass.length > 0) {
    //   axios
    //     .post('https://api.getpoorti.com/api/v1/user/signup', {
    //       name: userName,
    //       email: userEmail,
    //       password: userPass,
    //     })
    //     .then((res) => {
    //       // alert('done');
    //       setUserEmail('');
    //       setUserName('');
    //       setUserPass('');
    //       navigate.push('/');
    //       toast.success('Your Account Is Created !', {
    //         position: toast.POSITION.TOP_CENTER,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   toast.error('Required Fields Are Missing', {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    // }
  };

  const [errors, setErrors] = useState({});
  const validations = {
    userEmail: 'Email is required Field',
    userName: 'Name is required Field',
    userPass: 'Password is required field',
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setuserDetails((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
    setErrors((prevErrorState) => ({
      ...prevErrorState,
      [name]: '',
    }));
  };
  return (
    <>
      <div className="container auth-wrapper">
        <Logo className="logo" />
        <h1 className="text-header">Open a new account</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="item-wrapper">
              <label for="name">
                Name <span className="required-field"> *</span>
              </label>
              <input
                name="userName"
                id="name"
                type="text"
                className="custom-input"
                placeholder="Input your full name"
                value={userDetails.userName}
                onChange={handleFieldChange}
              />
              <span className="required-field">{errors['userName']}</span>
            </div>
            <div className="item-wrapper">
              <label for="email">
                Work Email <span className="required-field"> *</span>
              </label>
              <input
                id="email"
                name="userEmail"
                value={userDetails.userEmail}
                onChange={handleFieldChange}
                type="email"
                className="custom-input"
                placeholder="example@company.com"
              />
              <span className="required-field">{errors['userEmail']}</span>
            </div>
            <div className="item-wrapper mb-3">
              <label for="password">
                Password <span className="required-field"> *</span>
              </label>
              <Eye className="floating-icon" />
              <input
                id="password"
                name="userPass"
                value={userDetails.userPass}
                onChange={handleFieldChange}
                type="password"
                className="custom-input"
                placeholder="Input your password account"
              />
              <span className="required-field">{errors['userPass']}</span>
            </div>
            <div className="item-wrapper">
              <button
                type="submit"
                className="button-primary"
                placeholder="Input your password"
              >
                Create Account
              </button>
            </div>
            <div className="login-with d-flex no-wrap justify-content-between gap-3 align-items-center">
              <hr className="w-100" />
              <span className="text-login">Or register with</span>
              <hr className="w-100" />
            </div>
            <div className="item-wrapper flex-row">
              <button className="button-secondary gap-2" type="button">
                <Google />
                <span>Google</span>
              </button>
              <button className="button-secondary gap-2" type="button">
                <Apple />
                <span>Apple</span>
              </button>
            </div>
            <div className="item-wrapper">
              <p>
                Already have an account <Link to="/">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>

      <Modal
        show={show}
        onHide={() => {
          setShow(!show);
        }}
      >
        <Modal.Body>
          <div className="modal-bg">
            <div className="logo-box">
              <Logo className="logo" />
            </div>

            <div className="message">
              <h2>Thank You</h2>
              <p>
                "Stay tuned for an exciting announcement - launching this
                feature very soon!"
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

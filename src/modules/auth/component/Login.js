import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import API_URLS from '../../../api/apis';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import { Apple, Eye, Google, Logo } from '../../../assets/svg';
import { ROUTES } from '../../../common/constants';
import './index.scss';

export default function Login() {
  const key = 'LOGIN_TOKEN';
  const key2 = 'TIME_STAMP';

  const navigate = useHistory();
  const [userDetails, setuserDetails] = useState({
    userEmail: '',
    userPass: '',
  });
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const validations = {
    userEmail: 'Email is required Field',
    userPass: 'Password is required field',
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setuserDetails((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
    setErrors((prevErrorState) => ({
      ...prevErrorState,
      [name]: '',
    }));
  };
  const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleSubmit = (e) => {
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
      // toast.success('coming soon', {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      // setuserDetails({
      //   userEmail: '',
      //   userPass: '',
      // });
      // setShow(true);
      // setTimeout(() => {
      //   setShow(false);
      // }, 2000);
      axios
        .post(API_URLS.login, {
          email: userDetails['userEmail'],
          password: userDetails['userPass'],
        })
        .then((res) => {
          // alert('done');
          const timestamp = new Date().getTime();
          const value = res.data.data.token;
          console.log(value);
          const userId = res.data.data.user.id;
          console.log(res);
          // localStorage.setItem('LOGIN_TOKEN', value);
          Cookies.set('LOGIN_TOKEN', value, { expires: 1 });
          Cookies.set('USER_ID', userId, { expires: 1 });
          setUserEmail('');
          setUserPass('');
          navigate.push('/dashboard');
          toast.success('Login Succesfull', {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("User Don't Exist", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }

    // if (regex.test(userEmail) && userPass.length > 0) {
    //   axios
    //     .post('https://api.getpoorti.com/api/v1/user/login', {
    //       email: userEmail,
    //       password: userPass,
    //     })
    //     .then((res) => {
    //       // alert('done');
    //       const timestamp = new Date().getTime();
    //       const value = res.data.data.data;

    //       console.log(res);
    //       localStorage.setItem('LOGIN_TOKEN', value);
    //       localStorage.setItem('TIME_STAMP', timestamp);
    //       setUserEmail('');
    //       setUserPass('');
    //       navigate.push('/dashboard');
    //       toast.success('Login Succesfull', {
    //         position: toast.POSITION.TOP_CENTER,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       toast.error("User Don't Exist", {
    //         position: toast.POSITION.TOP_CENTER,
    //       });
    //     });
    // } else {
    //   toast.error('Reqired Fields Are Empty', {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    // }
  };

  return (
    <>
      <div className="container auth-wrapper">
        <Logo className="logo" />
        <h1 className="text-header">Login first to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="item-wrapper">
              <label for="email">
                Email Address <span className="required-field"> *</span>
              </label>
              <input
                id="email"
                name="userEmail"
                value={userDetails.userEmail}
                onChange={handleFieldChange}
                type="email"
                className="custom-input"
                placeholder="Input your registered email"
              />
              <span className="required-field">{errors['userEmail']}</span>
            </div>
            <div className="item-wrapper">
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
                placeholder="Input your password"
              />
              <span className="required-field">{errors['userPass']}</span>
            </div>
            <div className="remember-wrapper d-flex justify-content-between">
              <div className="d-flex">
                <input type="checkbox" />
                <span className="ms-2 text-small">Remember Me</span>
              </div>
              <span
                style={{ cursor: 'pointer' }}
                className="text-small"
                onClick={() => navigate.push('/forget')}
              >
                Forgot Password
              </span>
            </div>
            <div className="item-wrapper">
              <button
                type="submit"
                className="button-primary"
                placeholder="Input your password"
              >
                Login
              </button>
            </div>
            <div className="login-with d-flex no-wrap justify-content-between gap-3 align-items-center">
              <hr className="w-100" />
              <span className="text-login">Or login with</span>
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
                You’re new in here?{' '}
                <Link to={ROUTES?.SIGNUP}>Create an account</Link>
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

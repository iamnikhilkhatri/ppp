import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import API_URLS from '../../../api/apis';
import Cookies from 'js-cookie';
import axios from 'axios';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Apple, Eye, Google, Logo } from '../../../assets/svg';
import './index.scss';
import { ROUTES } from '../../../common/constants';
import history from '../../../historyData';

export default function Forget() {
  const navigate = useHistory();
  const [userDetails, setuserDetails] = useState({
    userEmail: '',
  });
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const [errors, setErrors] = useState({});
  const validations = {
    userEmail: 'Email is required Field',
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
      axios
        .post(API_URLS.forget, {
          email: userDetails['userEmail'],
        })
        .then((res) => {
          // alert('done');
          Cookies.set('FORGET_EMAIL', userDetails['userEmail'], { expires: 1 });
          navigate.push('/verifyotp');
        })
        .catch((err) => {
          console.log(err);
          toast.error('No User Exist With This Email', {
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
    <div className="container auth-wrapper">
      <Logo className="logo" />
      {/* <h1 className="text-header">Login first to your account</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="item-wrapper">
            <label for="email">
              Enter Your Account Email{' '}
              <span className="required-field"> *</span>
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
            <button
              type="submit"
              className="button-primary"
              placeholder="Input your password"
            >
              SEND OTP
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
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import API_URLS from '../../../api/apis';
import axios from 'axios';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Apple, Eye, Google, Logo } from '../../../assets/svg';
import './index.scss';
import { ROUTES } from '../../../common/constants';
import history from '../../../historyData';

export default function Verify() {
  const navigate = useHistory();
  const [userDetails, setuserDetails] = useState({
    userOtp: '',
  });
  const [userOtp, setuserOtp] = useState('');
  const [userPass, setUserPass] = useState('');

  const [errors, setErrors] = useState({});
  const validations = {
    userOtp: 'Otp is required Field',
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
        .post(API_URLS.Verify, {
          email: Cookies.get('FORGET_EMAIL'),
          otp: userDetails['userOtp'],
        })
        .then((res) => {
          // alert('done');
          navigate.push('/resetpassowrd');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Otp Entered Is Wrong', {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }

    // if (regex.test(userOtp) && userPass.length > 0) {
    //   axios
    //     .post('https://api.getpoorti.com/api/v1/user/login', {
    //       email: userOtp,
    //       password: userPass,
    //     })
    //     .then((res) => {
    //       // alert('done');
    //       const timestamp = new Date().getTime();
    //       const value = res.data.data.data;

    //       console.log(res);
    //       localStorage.setItem('LOGIN_TOKEN', value);
    //       localStorage.setItem('TIME_STAMP', timestamp);
    //       setuserOtp('');
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
              Enter OTP <span className="required-field"> *</span>
            </label>
            <input
              id="email"
              name="userOtp"
              value={userDetails.userOtp}
              onChange={handleFieldChange}
              type="number"
              className="custom-input"
              placeholder="Enter OTP"
            />
            <span className="required-field">{errors['userOtp']}</span>
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
              Email is correct ? <Link to="/forget">Change email</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

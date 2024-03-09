import React, { useState, useEffect, useRef } from 'react';
import API_URLS from '../api/apis';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { Avatar, Frame1, Frame2, Frame3 } from '../assets/svg';
import { SearchHeader } from '../common/components/Utils';
// import API_URLS from '../common/api';
import { useHistory } from 'react-router';
import axios from 'axios';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import './index.scss';

export default function Settings() {
  useEffect(() => {
    if (!Cookies.get('LOGIN_TOKEN')) {
      navigate.push('/');
    }
  }, []);

  const [current, setCurrent] = useState(1);
  const myref = useRef(null);
  const myref2 = useRef(null);
  const states = [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh', name: 'NomState' },
    {
      label: 'Arunachal Pradesh',
      value: 'Arunachal Pradesh',
      name: 'NomState',
    },
    { label: 'Assam', value: 'Assam', name: 'NomState' },
    { label: 'Bihar', value: 'Bihar', name: 'NomState' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh', name: 'NomState' },
    { label: 'Goa', value: 'Goa', name: 'NomState' },
    { label: 'Gujarat', value: 'Gujarat', name: 'NomState' },
    { label: 'Haryana', value: 'Haryana', name: 'NomState' },
    {
      label: 'Himachal Pradesh',
      value: 'Himachal Pradesh',
      name: 'NomState',
    },
    { label: 'Jharkhand', value: 'Jharkhand', name: 'NomState' },
    { label: 'Karnataka', value: 'Karnataka', name: 'NomState' },
    { label: 'Kerala', value: 'Kerala', name: 'NomState' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh', name: 'NomState' },
    { label: 'Maharashtra', value: 'Maharashtra', name: 'NomState' },
    { label: 'Manipur', value: 'Manipur', name: 'NomState' },
    { label: 'Meghalaya', value: 'Meghalaya', name: 'NomState' },
    { label: 'Mizoram', value: 'Mizoram', name: 'NomState' },
    { label: 'Nagaland', value: 'Nagaland', name: 'NomState' },
    { label: 'Odisha', value: 'Odisha', name: 'NomState' },
    { label: 'Punjab', value: 'Punjab', name: 'NomState' },
    { label: 'Rajasthan', value: 'Rajasthan', name: 'NomState' },
    { label: 'Sikkim', value: 'Sikkim', name: 'NomState' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu', name: 'NomState' },
    { label: 'Telangana', value: 'Telangana', name: 'NomState' },
    { label: 'Tripura', value: 'Tripura', name: 'NomState' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh', name: 'NomState' },
    { label: 'Uttarakhand', value: 'Uttarakhand', name: 'NomState' },
    { label: 'West Bengal', value: 'West Bengal', name: 'NomState' },
    {
      label: 'Andaman and Nicobar Islands',
      value: 'Andaman and Nicobar Islands',
      name: 'NomState',
    },
    { label: 'Chandigarh', value: 'Chandigarh', name: 'NomState' },
    {
      label: 'Dadra and Nagar Haveli and Daman and Diu',
      value: 'Dadra and Nagar Haveli and Daman and Diu',
      name: 'NomState',
    },
    { label: 'Lakshadweep', value: 'Lakshadweep', name: 'NomState' },
    { label: 'Delhi', value: 'Delhi', name: 'NomState' },
    { label: 'Puducherry', value: 'Puducherry', name: 'NomState' },
  ];

  const handleFieldChangeSelect = (event) => {
    const { name, value } = event;
    console.log(name, value);
    setErrors((prevErrorState) => ({
      ...prevErrorState,
      [name]: '',
    }));

    setNomDetails((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };
  const [errors, setErrors] = useState({});
  const [nomDetails, setNomDetails] = useState({
    name: '',
    email: '',
    NomAddr1: '',
    NomAddr2: '',
    NomAddr3: '',
    NomCity: '',
    NomState: '',
    NomPost: '',
    NomDOB: '',
    Relation: '',
    Acctype: '',
  });
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setErrors((prevErrorState) => ({
      ...prevErrorState,
      [name]: '',
    }));

    setNomDetails((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };
  const navigate = useHistory();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [nomData, setNomData] = useState([]);
  console.log(API_URLS.user);

  const scrollBottom = (e) => {
    e.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const scrollBottom2 = (e) => {
    e.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const fetchdata = () => {
    axios
      .get(API_URLS.user, {
        headers: {
          Authorization: Cookies.get('LOGIN_TOKEN'),
        },
      })
      .then((res) => {
        console.log(res.data.data.user);
        console.log(res.data.data.user.Nominee.length);
        setNomData(res.data.data.user.Nominee);
        setData(res.data.data.user);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const action = (name) => {
    switch (name) {
      case 'Add Nominee':
        return scrollBottom(myref);
      case 'Your Nominees':
        return scrollBottom(myref2);
      default:
        return '';
    }
  };

  const relation = [
    { label: 'FATHER', value: 'FATHER', name: 'Relation' },
    { label: 'MOTHER', value: 'MOTHER', name: 'Relation' },
    { label: 'BROTHER', value: 'BROTHER', name: 'Relation' },
    { label: 'SISTER', value: 'SISTER', name: 'Relation' },
  ];

  const account = [{ label: 'JOINTLY', value: 'JOINTLY', name: 'Acctype' }];
  const validations = {
    name: 'Nominee Name is required',
    email: 'Nominee Email is required',
    NomAddr1: 'Nominee Address 1 is required',
    NomAddr2: 'Nominee Address 2 is required',
    NomAddr3: 'Nominee Address 3 is required',
    NomCity: 'Nominee City is required',
    NomState: 'Nominee State is required',
    NomPost: 'Nominee Post is required',
    NomDOB: 'Nominee DOB is required',
    Relation: 'Relation With Nominee is required',
    Acctype: 'Account Type Type Desc is required',
  };
  const nomSubData = {
    Nominee: [
      {
        name: nomDetails.name,
        email: nomDetails.email,
        NomAdd1: nomDetails.NomAddr1,
        NomAdd2: nomDetails.NomAddr2,
        NomAdd3: nomDetails.NomAddr3,
        NomCity: nomDetails.NomCity,
        NomState: nomDetails.NomState,
        NomPost: nomDetails.NomPost,
        NomDOB: nomDetails.NomDOB,
        Relation: nomDetails.Relation,
        Acctype: nomDetails.Acctype,
      },
    ],
  };

  const addNominne = (e) => {
    e?.preventDefault();
    const newErrors = {};
    for (const fieldName in validations) {
      if (!nomDetails[fieldName]) {
        newErrors[fieldName] = validations[fieldName];
      }
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set them in state and prevent form submission
      setErrors(newErrors);
    } else {
      // If no errors, you can submit the form data or perform other actions
      console.log('Form submitted:', nomDetails);
      axios
        .post(
          API_URLS.addNominee,

          nomSubData,
          {
            headers: {
              Authorization: Cookies.get('LOGIN_TOKEN'),
            },
          },
        )
        .then((res) => {
          console.log(res);
          toast.success('Nominee Added Succesfuly', {
            position: toast.POSITION.TOP_CENTER,
          });
          setNomDetails({
            name: '',
            email: '',
            NomAddr1: '',
            NomAddr2: '',
            NomAddr3: '',
            NomCity: '',
            NomState: '',
            NomPost: '',
            NomDOB: '',
            Relation: '',
            Acctype: '',
          });
          fetchdata();
        })
        .catch(() => {
          toast.error('There Must Be Some Technical Error', {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };
  return (
    <div className="dashboard-wrapper row gy-4">
      <div className="col-12 mb-4">
        <SearchHeader enableTitle={false} />
      </div>
      <div className="col-12">
        <div className="account-setting">
          <h3 className="mb-5 text-account">Account Settings</h3>
          <div className="button-wrapper mb-5">
            {[
              { name: 'Password', id: 1 },
              { name: 'Email', id: 2 },
              { name: 'Notification', id: 3 },
              { name: 'Settings', id: 4 },
              { name: 'Add Nominee', id: 5 },
              { name: 'Your Nominees', id: 6 },
            ].map((each) => {
              return (
                <button
                  className={
                    current === each.id ? 'button-primary' : 'button-secondary'
                  }
                  type="button"
                  onClick={() => {
                    setCurrent(each.id);
                    action(each.name);
                  }}
                >
                  {each.name}
                </button>
              );
            })}
            {/* <button className="button-primary" type="button">
              Password
            </button> */}
            {/* <button className="button-secondary" type="button">
              Email
            </button> */}
            {/* <button className="button-secondary" type="button">
              Notification
            </button>
            <button className="button-secondary" type="button">
              Settings
            </button> */}
            {/* <Link to="/dashboard#d"> */}
            {/* <button
              className="button-secondary"
              type="button"
              onClick={() => scrollBottom(myref)}
            >
              Add Nominee
            </button> */}
            {/* </Link> */}
          </div>
          <p className="text-avatar mb-4">Your Avatar</p>
          <div className="profile-wrapper mb-4">
            <Avatar width="64" height="64" />
            <div className="d-flex column-gap-5 row-gap-3 flex-column flex-md-row">
              <button type="button" className="button-primary">
                Upload New
              </button>
              <button type="button" className="button-normal">
                Delete Avatar
              </button>
            </div>
          </div>
          <hr className="mb-4" />

          <form className="mb-4">
            <div className="form-wrapper">
              <div className="item-wrapper">
                <label>Your Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={data.name}
                  style={{ textTransform: 'capitalize' }}
                />
              </div>
              <div className="item-wrapper">
                <label>Update PAN</label>
                <input type="text" placeholder="Enter Your PAN" />
              </div>
              <div className="item-wrapper">
                <label>Customer ID</label>
                <input
                  type="text"
                  placeholder="Enter Your Customer ID"
                  value={data.customerId}
                  style={{ textTransform: 'capitalize' }}
                />
              </div>
              <div className="item-wrapper">
                <label>Location</label>
                <input type="text" placeholder="Enter Your Location" />
              </div>
              <div className="item-wrapper">
                <button type="button" className="button-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
          <hr className="mb-4" />
          <h1 className="h1" ref={myref}>
            Add Nominee
          </h1>
          <form className="mb-4" onSubmit={addNominne}>
            {/* <h2>Add Nominee Details</h2> */}
            <div className="form-wrapper">
              <div className="item-wrapper">
                <label for="name">
                  Nominee Name <span className="required-field"> *</span>
                </label>
                {/* <Eye className="floating-icon" /> */}
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={nomDetails.name}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee Name"
                />
                <span className="required-field">{errors['name']}</span>
              </div>

              {/* 9 */}
              <div className="item-wrapper">
                <label for="email">
                  Nominee Email<span className="required-field"> *</span>
                </label>
                {/* <Eye className="floating-icon" /> */}
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={nomDetails.email}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee Email"
                />
                <span className="required-field">{errors['email']}</span>
              </div>

              {/* 10 */}
              <div className="item-wrapper">
                <label for="NomAddr1">
                  Nominee Address 1<span className="required-field">*</span>
                </label>
                <input
                  id="NomAddr1"
                  name="NomAddr1"
                  type="text"
                  value={nomDetails.NomAddr1}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee Address 1"
                />
                <span className="required-field">{errors['NomAddr1']}</span>
              </div>

              {/* 11 */}
              <div className="item-wrapper">
                <label for="NomAddr2">
                  Nominee Address 2<span className="required-field">*</span>
                </label>
                <input
                  id="NomAddr2"
                  name="NomAddr2"
                  type="text"
                  value={nomDetails.NomAddr2}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee Address 2"
                />
                <span className="required-field">{errors['NomAddr2']}</span>
              </div>

              {/* 12 */}
              <div className="item-wrapper">
                <label for="NomAddr3">
                  Nominee Address 3<span className="required-field">*</span>
                </label>
                <input
                  id="NomAddr3"
                  name="NomAddr3"
                  type="text"
                  value={nomDetails.NomAddr3}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee Address 3"
                />
                <span className="required-field">{errors['NomAddr3']}</span>
              </div>

              {/* 13 */}
              <div className="item-wrapper">
                <label for="NomCity">
                  Nominee City<span className="required-field">*</span>
                </label>
                <input
                  id="NomCity"
                  name="NomCity"
                  type="text"
                  value={nomDetails.NomCity}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee City"
                />
                <span className="required-field">{errors['NomCity']}</span>
              </div>

              {/* 14 */}

              <div className="item-wrapper">
                <label for="NomPost">
                  Nominee Post <span className="required-field">*</span>
                </label>
                <input
                  id="NomPost"
                  name="NomPost"
                  type="text"
                  value={nomDetails.NomPost}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee Post"
                />
                <span className="required-field">{errors['NomPost']}</span>
              </div>

              {/* 16 */}
              <div className="item-wrapper">
                <label for="NomDOB">
                  Nominee DOB <span className="required-field">*</span>
                </label>
                <input
                  id="NomDOB"
                  name="NomDOB"
                  type="Date"
                  value={nomDetails.NomDOB}
                  onChange={handleFieldChange}
                  className="custom-input"
                  placeholder="Enter Nominee DOB"
                />
                <span className="required-field">{errors['NomDOB']}</span>
              </div>
              <div className="item-wrapper">
                <label for="NomState">
                  Nominee State <span className="required-field">*</span>
                </label>
                {/* <input
              id="NomState"
              name="NomState"
              type="text"
              value={nomDetails.NomState}
              onChange={handleFieldChange}
              className="custom-input"
              placeholder="Enter Nominee State"
            /> */}
                <Select
                  options={states}
                  // value={selectedOption}
                  onChange={handleFieldChangeSelect}
                  placeholder="Choose Your State"
                />
                <span className="required-field">{errors['NomState']}</span>
              </div>
              <div className="item-wrapper">
                <label for="Acctype">
                  Nominee Account Type<span className="required-field">*</span>
                </label>
                {/* <input
              id="Relation"
              name="Relation"
              type="text"
              value={rdDetails.Relation}
              onChange={handleFieldChange}
              className="custom-input"
              placeholder="Input Rel Party Code Desc"
            /> */}
                <Select
                  options={account}
                  // value={selectedOption}
                  onChange={handleFieldChangeSelect}
                  placeholder="Choose Type Of Account"
                />
                <span className="required-field">{errors['Acctype']}</span>
              </div>

              <div className="item-wrapper">
                <label for="Relation">
                  Relation<span className="required-field">*</span>
                </label>
                {/* <input
              id="Relation"
              name="Relation"
              type="text"
              value={rdDetails.Relation}
              onChange={handleFieldChange}
              className="custom-input"
              placeholder="Input Rel Party Code Desc"
            /> */}
                <Select
                  options={relation}
                  // value={selectedOption}
                  onChange={handleFieldChangeSelect}
                  placeholder="Choose Relation With Nominee"
                />
                <span className="required-field">{errors['Relation']}</span>
              </div>
            </div>
            <div className="item-wrapper d-flex justify-content-start mt-5">
              <input
                type="submit"
                value="Add Nominee"
                className="button-primary"
              ></input>
            </div>
          </form>
          <hr className="mb-4" />
          <h1 className="h1" ref={myref2}>
            Your Nominees
          </h1>
          <div>
            {/* {nomData.length} */}
            {nomData.length > 0 ? (
              <table class="content-table">
                <thead>
                  <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>Relation</th>
                    <th>Mail</th>
                  </tr>
                </thead>
                <tbody>
                  {data.Nominee.map((each) => {
                    return (
                      <tr>
                        {/* <td>{each.id}</td> */}
                        <td>{each.name}</td>
                        <td>{each.Relation}</td>
                        <td>{each.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p className="p">You Didn't Added Nominees</p>
            )}
          </div>
        </div>
        {/* <div className="account-setting mt-4">
          <form className="mt-4">
            <div className="form-wrapper">
              <div className="item-wrapper">
                <label>Your Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" />
              </div>
              <div className="item-wrapper">
                <label>Update PAN</label>
                <input type="text" placeholder="Enter Your PAN" />
              </div>
              <div className="item-wrapper">
                <label>Customer ID</label>
                <input type="text" placeholder="Enter Your Customer ID" />
              </div>
              <div className="item-wrapper">
                <label>Location</label>
                <input type="text" placeholder="Enter Your Location" />
              </div>
              <div className="item-wrapper">
                <button type="button" className="button-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div> */}

        <div className="footer-section">
          <div className="card-item">
            <div className="d-flex flex-column">
              <h3>Withdraw</h3>
              <p>GOLD/FULL SIP</p>
            </div>
            <Frame1 />
          </div>
          <div className="card-item">
            <div className="d-flex flex-column">
              <h3>FAQ</h3>
              <p>Find your questions or ask questions</p>
            </div>
            <Frame2 />
          </div>
          <div className="card-item">
            <div className="d-flex flex-column">
              <h3>Wallet</h3>
              <p>Find your questions or ask questions</p>
            </div>
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './index.scss';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useHistory } from 'react-router';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API_URLS from '../../api/apis';

const Shivalik = ({ InitialamountValue, show, setShow, nomData }) => {
  const [selectedNom, setSelectedNom] = useState();
  const [rdDetails, setRdDetails] = useState({
    CustId: '',
    InitialamountValue: InitialamountValue,
    DepositTermMonths: '',
    RepayAcctId: '',
    DebitAcctId: '',
    tenureAmountValue: InitialamountValue,
    RegNum: '',
    nomId: '',
  });

  const navigate = useHistory();
  const states = [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh', name: 'NomineeState' },
    {
      label: 'Arunachal Pradesh',
      value: 'Arunachal Pradesh',
      name: 'NomineeState',
    },
    { label: 'Assam', value: 'Assam', name: 'NomineeState' },
    { label: 'Bihar', value: 'Bihar', name: 'NomineeState' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh', name: 'NomineeState' },
    { label: 'Goa', value: 'Goa', name: 'NomineeState' },
    { label: 'Gujarat', value: 'Gujarat', name: 'NomineeState' },
    { label: 'Haryana', value: 'Haryana', name: 'NomineeState' },
    {
      label: 'Himachal Pradesh',
      value: 'Himachal Pradesh',
      name: 'NomineeState',
    },
    { label: 'Jharkhand', value: 'Jharkhand', name: 'NomineeState' },
    { label: 'Karnataka', value: 'Karnataka', name: 'NomineeState' },
    { label: 'Kerala', value: 'Kerala', name: 'NomineeState' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh', name: 'NomineeState' },
    { label: 'Maharashtra', value: 'Maharashtra', name: 'NomineeState' },
    { label: 'Manipur', value: 'Manipur', name: 'NomineeState' },
    { label: 'Meghalaya', value: 'Meghalaya', name: 'NomineeState' },
    { label: 'Mizoram', value: 'Mizoram', name: 'NomineeState' },
    { label: 'Nagaland', value: 'Nagaland', name: 'NomineeState' },
    { label: 'Odisha', value: 'Odisha', name: 'NomineeState' },
    { label: 'Punjab', value: 'Punjab', name: 'NomineeState' },
    { label: 'Rajasthan', value: 'Rajasthan', name: 'NomineeState' },
    { label: 'Sikkim', value: 'Sikkim', name: 'NomineeState' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu', name: 'NomineeState' },
    { label: 'Telangana', value: 'Telangana', name: 'NomineeState' },
    { label: 'Tripura', value: 'Tripura', name: 'NomineeState' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh', name: 'NomineeState' },
    { label: 'Uttarakhand', value: 'Uttarakhand', name: 'NomineeState' },
    { label: 'West Bengal', value: 'West Bengal', name: 'NomineeState' },
    {
      label: 'Andaman and Nicobar Islands',
      value: 'Andaman and Nicobar Islands',
      name: 'NomineeState',
    },
    { label: 'Chandigarh', value: 'Chandigarh', name: 'NomineeState' },
    {
      label: 'Dadra and Nagar Haveli and Daman and Diu',
      value: 'Dadra and Nagar Haveli and Daman and Diu',
      name: 'NomineeState',
    },
    { label: 'Lakshadweep', value: 'Lakshadweep', name: 'NomineeState' },
    { label: 'Delhi', value: 'Delhi', name: 'NomineeState' },
    { label: 'Puducherry', value: 'Puducherry', name: 'NomineeState' },
  ];
  console.log(nomData);
  const nominees = nomData.map((each) => ({
    lable: 'nikhil',
    value: each.id,
    name: 'nomId',
  }));
  console.log(nominees);
  const relation = [
    { label: 'FATHER', value: 'FATHER', name: 'RelPartyCodeDesc' },
    { label: 'MOTHER', value: 'MOTHER', name: 'RelPartyCodeDesc' },
    { label: 'BROTHER', value: 'BROTHER', name: 'RelPartyCodeDesc' },
    { label: 'SISTER', value: 'SISTER', name: 'RelPartyCodeDesc' },
  ];

  const [allow, setAloow] = useState(false);
  const [errors, setErrors] = useState({});
  const validations = {
    CustId: 'Customer ID is required',
    InitialamountValue: 'Initialamount Value is required',
    DepositTermMonths: 'Deposit Term Months is required',
    RepayAcctId: 'RePay Account Id is required',
    DebitAcctId: 'Debit Account Id is required',
    tenureAmountValue: 'Tenure Amount Value is required',
    RegNum: 'Registeration Num is required',
    nomId: 'Nominees is required',
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    // const isFormValid = validations.every(
    //   (fieldName) => rdDetails[fieldName].trim() !== '',
    // );

    // setAloow(isFormValid);

    // console.log(allow);
    // if (allow) {
    //   axios
    //     .post('https://api.getpoorti.com/shivalik/RD', {})
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

    const newErrors = {};
    for (const fieldName in validations) {
      if (!rdDetails[fieldName]) {
        newErrors[fieldName] = validations[fieldName];
      }
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set them in state and prevent form submission
      setErrors(newErrors);
    } else {
      // If no errors, you can submit the form data or perform other actions
      console.log('Form submitted:', rdDetails);
      console.log(rdDetails.CustId);
      console.log(
        `${API_URLS.createRd}/${Cookies.get('USER_ID')}/${rdDetails.nomId}`,
      );
      axios
        .post(
          'https://api.getpoorti.com/shivalik/RD/65781915a5849e3d5c49276f/658310c90e818af84c4150d6',

          {
            CustId: rdDetails['CustId'],
            InitialamountValue: rdDetails['InitialamountValue'].toString(),
            DepositTermMonths: rdDetails['DepositTermMonths'],
            RepayAcctId: rdDetails['RepayAcctId'],
            DebitAcctId: rdDetails.DebitAcctId,
            tenureAmountValue: rdDetails.tenureAmountValue.toString(),
            RegNum: rdDetails.RegNum,
          },
          {
            headers: {
              token: Cookies.get('BANK_TOKEN'),
            },
          },
        )
        .then((res) => {
          // alert('done');
          console.log(res);
          setRdDetails({
            CustId: '',
            InitialamountValue: InitialamountValue,
            DepositTermMonths: '',
            RepayAcctId: '',
            DebitAcctId: '',
            tenureAmountValue: '',
            RegNum: '',
          });
          setShow(!show);
          toast.success('Rd Created Succesfull', {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error('Information are not valid', {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  // const handleSubmit = (e) => {
  //   e?.preventDefault();
  //   // for (const fieldName in validations) {
  //   //   if (rdDetails[fieldName] === ' ') {
  //   //     setAloow(false);
  //   //   } else {
  //   //     setAloow(true);
  //   //   }
  //   //   console.log(allow, fieldName);
  //   // }

  // };
  const handleFieldChangeSelect = (event) => {
    const { name, value } = event;
    console.log(name, value);
    setErrors((prevErrorState) => ({
      ...prevErrorState,
      [name]: '',
    }));

    setRdDetails((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setErrors((prevErrorState) => ({
      ...prevErrorState,
      [name]: '',
    }));

    setRdDetails((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="bank-form" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          {/* 1 */}
          <div className="item-wrapper">
            <label for="CustId">
              Coustomer Id <span className="required-field">*</span>
            </label>
            <input
              id="CustId"
              name="CustId"
              value={rdDetails.CustId}
              onChange={handleFieldChange}
              type="text"
              className="custom-input"
              placeholder="Input Coustomer Id "
            />
            <span className="required-field">{errors['CustId']}</span>
          </div>
          {/* 2 */}
          <div className="item-wrapper">
            <label for="InitialamountValue">
              Initialamount Value <span className="required-field">*</span>
            </label>
            {/* <Eye className="floating-icon" /> */}
            <input
              id="InitialamountValue"
              name="InitialamountValue"
              type="text"
              className="custom-input"
              placeholder="Input Initialamount Value"
              value={rdDetails.InitialamountValue}
              // onChange={handleFieldChange}
            />
          </div>
          {/* 3 */}
          <div className="item-wrapper">
            <label for="DepositTermMonths">
              Deposit Term Months <span className="required-field"> *</span>
            </label>
            {/* <Eye className="floating-icon" /> */}
            <input
              id="DepositTermMonths"
              name="DepositTermMonths"
              // value={userPass}
              // onChange={(e) => {
              //   setUserPass(e.target.value);
              // }}
              type="text"
              className="custom-input"
              placeholder="Input Deposit Term Months "
              value={rdDetails.DepositTermMonths}
              onChange={handleFieldChange}
            />
            <span className="required-field">
              {errors['DepositTermMonths']}
            </span>
          </div>
          {/* 4 */}
          <div className="item-wrapper">
            <label for="RepayAcctId">
              RePay Account Id <span className="required-field">*</span>
            </label>
            <input
              id="CustId"
              name="RepayAcctId"
              value={rdDetails.RepayAcctId}
              onChange={handleFieldChange}
              type="text"
              className="custom-input"
              placeholder="Input RePay Account Id  "
            />
            <span className="required-field">{errors['RepayAcctId']}</span>
          </div>
          {/* 5 */}
          <div className="item-wrapper">
            <label for="DebitAcctId">
              Debit Account Id <span className="required-field"> *</span>
            </label>
            {/* <Eye className="floating-icon" /> */}
            <input
              id="DebitAcctId"
              name="DebitAcctId"
              type="text"
              value={rdDetails.DebitAcctId}
              onChange={handleFieldChange}
              className="custom-input"
              placeholder="Input  Debit Account Id"
            />
            <span className="required-field">{errors['DebitAcctId']}</span>
          </div>
          {/* 6 */}
          <div className="item-wrapper">
            <label for="tenureAmountValue">
              Tenure Amount Value<span className="required-field"> *</span>
            </label>
            {/* <Eye className="floating-icon" /> */}
            <input
              id="tenureAmountValue"
              name="tenureAmountValue"
              type="text"
              value={rdDetails.tenureAmountValue}
              // onChange={handleFieldChange}
              className="custom-input"
              placeholder="Input Tenure Amount Value"
            />
            <span className="required-field">
              {errors['tenureAmountValue']}
            </span>
          </div>
          {/* 7 */}
          <div className="item-wrapper">
            <label for="RegNum">
              Registeration Num <span className="required-field">*</span>
            </label>
            <input
              id="RegNum"
              name="RegNum"
              value={rdDetails.RegNum}
              onChange={handleFieldChange}
              type="text"
              className="custom-input"
              placeholder="Input Registeration Num"
            />
            <span className="required-field">{errors['RegNum']}</span>
          </div>
          <div className="item-wrapper">
            <label for="NomState">
              Nominee <span className="required-field">*</span>
              <span style={{ fontSize: '10px' }}>
                (Make Sure You Have Added The Nominee in your Profile Settings)
              </span>
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
              options={nomData}
              // value={selectedOption}
              onChange={handleFieldChangeSelect}
              placeholder="Choose Your Nominee"
            />
            <span className="required-field">{errors['nomId']}</span>
          </div>

          {/* 8 */}
          {/* 10 */}
          {/* 11 */}
          {/* 12 */}
          {/* 14 */}
          {/* 15 */}
          {/* 16 */}
          {/* 18 */}
          {/* 20 */}
          {/* 3 */}
          {/* <div className="remember-wrapper d-flex justify-content-between">
            <div className="d-flex">
              <input type="checkbox" />
              <span className="ms-2 text-small">Remember Me</span>
            </div>
            <span className="text-small">Forgot Password</span>
          </div> */}
          <div className="item-wrapper" id="submitbtn">
            <button
              type="submit"
              className="button-primary"
              placeholder="Input your password"
            >
              CREATE RD
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Shivalik;

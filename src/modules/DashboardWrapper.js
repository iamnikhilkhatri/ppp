import React, { useState, useEffect } from 'react';
// import { useState } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import API_URLS from '../api/apis';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import shiv from '../assets/img/shivalik.png';
import ImageSelect from './ImageSelect';
import Shivalik from './banks/Shivalik';
import axios from 'axios';
import {
  EmptyWallet,
  EmptyWalletWhite,
  Facebook,
  Gold,
  Instagram,
  TrendingDown,
  TrendingUp,
} from '../assets/svg';
import { CustomCard, SearchHeader } from '../common/components/Utils';
import './index.scss';

export default function DashboardWrapper() {
  const [tmi, setTmi] = useState('');
  const [tmint, setTmint] = useState('');
  const [goldR, setGoldR] = useState('');
  const navigate = useHistory();
  useEffect(() => {
    if (!Cookies.get('LOGIN_TOKEN')) {
      navigate.push('/');
    }
  }, []);

  useEffect(() => {
    fetchdata();
  }, []);

  const totalInvested = () => {
    axios
      .get(API_URLS.invested, {
        headers: {
          Authorization: Cookies.get('LOGIN_TOKEN'),
        },
      })
      .then((res) => {
        console.log(res.data);
        setTmi(res.data.data);
      });
  };
  const totalIntrested = () => {
    axios
      .get(API_URLS.intrest, {
        headers: {
          Authorization: Cookies.get('LOGIN_TOKEN'),
        },
      })
      .then((res) => {
        console.log(res.data);
        setTmint(res.data.data);
      });
  };
  const goldRec = () => {
    axios
      .get(API_URLS.goldRecived, {
        headers: {
          Authorization: Cookies.get('LOGIN_TOKEN'),
        },
      })
      .then((res) => {
        console.log(res.data);
        setGoldR(res.data.data);
      });
  };

  useEffect(() => {
    totalInvested();
  }, []);
  useEffect(() => {
    totalIntrested();
  }, []);
  useEffect(() => {
    goldRec();
  }, []);
  const [nomData, setNomData] = useState([]);
  const [show, setShow] = useState(false);
  const [sip, setSip] = useState(500);
  const [selectedOption, setSelectedOption] = useState();
  const handleBank = (option) => {
    setSelectedOption(option.value);
    setShow(true);

    axios.post('https://api.getpoorti.com/shivalik/user').then((res) => {
      console.log(res.data.data.res.token);
      Cookies.set('BANK_TOKEN', res.data.data.res.token, { expires: 1 });
    });
  };
  const options = [
    { value: 'Shivalik Bank', label: 'Shivalik Bank' },
    { value: 'Icici Bank', label: 'Icici Bank' },
  ];
  function renderSwitch(param) {
    switch (param) {
      case 'Shivalik Bank':
        return (
          <Shivalik
            InitialamountValue={sip}
            show={show}
            setShow={setShow}
            nomData={nomData}
          />
        );
      case 'Icici Bank':
        return 'hero';
      default:
        return '';
    }
  }

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
        const a = res.data.data.user.Nominee;
        setNomData(
          a.map((each) => ({
            label: each.name,
            value: each.id,
            name: 'nomId',
          })),
        );
        // setData(res.data.data.user);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <>
      <div className="dashboard-wrapper row gy-4">
        <div className="col-12 mb-4">
          <SearchHeader enableTitle />
        </div>
        <div className="col-12 col-lg-4">
          <div className="card-wrapper">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="card-wrapper">
                  <div className="custom-card flex-column">
                    <h2 className="text-center sip-text">Create SIP</h2>
                    <p style={{ textAlign: 'center' }} className="p">
                      SIP Amount
                    </p>
                    <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                      <p
                        style={{
                          margin: '0',
                          color: '#94a3b8',
                          fontSize: '14px',
                        }}
                      >
                        500
                      </p>
                      <input
                        type="range"
                        value={sip}
                        onChange={(e) => {
                          setSip(e.target.value);
                        }}
                        min="500"
                        max="50000"
                        step="1000"
                      />
                      <p
                        style={{
                          margin: '0',
                          color: '#94a3b8',
                          fontSize: '14px',
                        }}
                      >
                        50,000
                      </p>
                    </div>

                    <div className="d-flex justify-content-start gap-2++ align-items-center">
                      <div className="rounded-bg">
                        <EmptyWallet />
                      </div>
                      <div className="description">
                        {/* <h2>{sip}</h2> */}
                        {/* <p style={{ textAlign: 'center' }}>SIP Amount</p> */}
                        <input
                          className="custom-input"
                          value={sip}
                          onChange={(e) => {
                            setSip(e.target.value);
                          }}
                        />
                        {/* <p className="danger">Due date 10 Oct 2023</p> */}
                      </div>
                      {/* <div className="rounded-bg">
                        <TrendingDown />
                      </div> */}
                    </div>

                    <div className="button-wrapper d-flex flex-wrap gap-2 justify-content-center">
                      <button
                        type="button"
                        className="button-secondary py-1 px-2 w-auto"
                        onClick={() => {
                          setSip(500);
                        }}
                      >
                        5,00
                      </button>
                      <button
                        type="button"
                        className="button-secondary py-1 px-2 w-auto"
                        onClick={() => {
                          setSip(1000);
                        }}
                      >
                        1,000
                      </button>
                      <button
                        type="button"
                        className="button-secondary py-1 px-2 w-auto"
                        onClick={() => {
                          setSip(2000);
                        }}
                      >
                        2,000
                      </button>
                      <button
                        type="button"
                        className="button-secondary py-1 px-2 w-auto"
                        onClick={() => {
                          setSip(3000);
                        }}
                      >
                        3,000
                      </button>
                    </div>

                    <Select
                      options={options}
                      // value={selectedOption}
                      onChange={(e) => {
                        handleBank(e);
                      }}
                      placeholder="Choose Your Bank"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-lg-6">
                <div className="gy-4">
                  <div className="collection-card col-12 mb-4">
                    <h3>Poorti Postpaid</h3>
                    <button type="button" className="button-primary p-2 px-3">
                      Check your Eligibility here
                    </button>
                  </div>
                  <div className="collection-card col-12">
                    <h3>Follow us on</h3>
                    <div className="d-flex gap-2 flex-column w-100">
                      <button
                        type="button"
                        className="button-primary p-2 px-3 w-max gap-2"
                      >
                        <Facebook />
                        Facebook
                      </button>
                      <button
                        type="button"
                        className="button-primary p-2 px-3 w-max gap-2"
                      >
                        <Instagram />
                        Instagram
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <CustomCard
              heading="Total Amount Invested"
              icon1={<EmptyWallet />}
              icon2={<TrendingDown />}
              text="-5% More than last month"
              type="danger"
              value={tmi}
            />
            <CustomCard
              heading="Gold Recived"
              icon1={<EmptyWallet />}
              icon2={<TrendingUp />}
              text="+7% More than last month"
              type="success"
              value={goldR}
            />
            {/* <CustomCard
              heading="Total Wallet Balance"
              icon1={<EmptyWallet />}
              icon2={<TrendingUp />}
              text="-5% More than last month"
              type="danger"
              value="1,222"
            /> */}
            <div className="wallet">
              <div className="d-flex gap-3">
                <div className="rounded-bg">
                  <EmptyWalletWhite />
                </div>
                <div id="d" className="d-flex flex-column">
                  <h2>1,222</h2>
                  <p>(Available Balance)</p>
                </div>
              </div>
              <div className="button-wrapper">
                <div className="list">
                  <input type="radio" />
                  <h3>Withdraw in Bank Account</h3>
                </div>
                <div className="list">
                  <input type="radio" />
                  <h3>Poorti Wallet</h3>
                </div>
                <button type="button" className="button-primary p-2">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="graph-wrapper p-5 mb-4">
            <h3>Customer’s Daily Gold Performance</h3>
            <div className="entity-wrapper">
              <div className="rounded-bg">
                <Gold />
              </div>
              <div className="d-flex flex-column">
                <h3>Gold Spot</h3>
                <p>Per INR Rupee</p>
              </div>
            </div>
            <div className="point-wrapper">
              <h2>1,540</h2>
              <div className="point">
                <TrendingUp />
                <span className="success ms-1">0.05%</span>
              </div>
            </div>
            <div className="chart-wrapper" />
          </div>
          {/* <div className="row" sty>
            <div className="col-12 col-lg-6">
              <div className="card-wrapper">
                <div className="custom-card flex-column">
                  <div className="d-flex justify-content-between">
                    <div className="rounded-bg">
                      <EmptyWallet />
                    </div>
                    <div className="description">
                      <p>SIP Amount</p>
                      <h2>{sip}</h2>
                      <input
                        className="custom-input"
                        value={sip}
                        onChange={(e) => {
                          setSip(e.target.value);
                        }}
                      />
                      <p className="danger">Due date 10 Oct 2023</p>
                    </div>
                    <div className="rounded-bg">
                      <TrendingDown />
                    </div>
                  </div>
                  <h2 className="text-center sip-text">Increase SIP Amount</h2>
                  <input
                    type="range"
                    value={sip}
                    onChange={(e) => {
                      setSip(e.target.value);
                    }}
                    min="500"
                    max="1000000"
                    step="500"
                  />
            
                  <Select
                    options={options}
                    // value={selectedOption}
                    onChange={(e) => {
                      handleBank(e);
                    }}
                    placeholder="Choose Your Bank"
                  />
               
                  <div className="button-wrapper d-flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                      onClick={() => {
                        setSip(Number(sip) + 1000);
                      }}
                    >
                      1,000
                    </button>
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                      onClick={() => {
                        setSip(Number(sip) + 2000);
                      }}
                    >
                      2,000
                    </button>
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                      onClick={() => {
                        setSip(Number(sip) + 3000);
                      }}
                    >
                      3,000
                    </button>
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                      onClick={() => {
                        setSip(Number(sip) + 4000);
                      }}
                    >
                      4,000
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="gy-4">
                <div className="collection-card col-12 mb-4">
                  <h3>Poorti Postpaid</h3>
                  <button type="button" className="button-primary p-2 px-3">
                    Check your Eligibility here
                  </button>
                </div>
                <div className="collection-card col-12">
                  <h3>Follow us on</h3>
                  <div className="d-flex gap-2 flex-column w-100">
                    <button
                      type="button"
                      className="button-primary p-2 px-3 w-max gap-2"
                    >
                      <Facebook />
                      Facebook
                    </button>
                    <button
                      type="button"
                      className="button-primary p-2 px-3 w-max gap-2"
                    >
                      <Instagram />
                      Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(!show);
          setSelectedOption('');
        }}
      >
        <Modal.Header closeButton>
          <p className="modeal-heading">Enter Your {selectedOption} details</p>
        </Modal.Header>
        <Modal.Body>
          {/* <Shivalik /> */}
          {renderSwitch(selectedOption)}
        </Modal.Body>
      </Modal>
    </>
  );
}

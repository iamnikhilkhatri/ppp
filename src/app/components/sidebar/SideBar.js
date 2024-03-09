import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AppContext } from '../../../AppContext';
import {
  Dashboard,
  DashboardGray,
  Frame,
  Logo,
  LogoutSidebar,
  Menu,
  Setting,
  SettingWhite,
  Support,
  SupportWhite,
  Transaction,
  TransactionWhite,
} from '../../../assets/svg';
import './index.scss';
import { ROUTES } from '../../../common/constants';

export default function SideBar() {
  const { state, dispatch } = useContext(AppContext);
  const { isOpen } = state;
  const { pathname } = useLocation();
  return (
    <div
      className={`sidebar-wrapper flex-column d-none d-lg-flex justify-content-between ${
        isOpen ? 'mobile' : ''
      }`}
    >
      <div>
        <div className="header justify-content-between align-items-center">
          <Link to={ROUTES?.MAIN}>
            <div className="d-flex align-items-center gap-3">
              <Logo />
              <span className="text-poorti">Poorti</span>
            </div>
          </Link>
          <div className="menu d-block d-lg-none">
            <Menu onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
          </div>
          <Link
            to="/"
            className="decoration-none"
            onClick={() => {
              Cookies.remove('LOGIN_TOKEN');
            }}
          >
            <div className="list-wrapper ">
              <div className="item-wrapper">
                <LogoutSidebar />
                {/* <span>Logout</span> */}
              </div>
            </div>
          </Link>
        </div>
        <div className="list-wrapper">
          <Link to={ROUTES?.MAIN}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.MAIN ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.MAIN ? <Dashboard /> : <DashboardGray />}
              <span>Dashboard</span>
            </div>
          </Link>
          <Link to={ROUTES?.TRANSACTION}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.TRANSACTION ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.TRANSACTION ? (
                <TransactionWhite />
              ) : (
                <Transaction />
              )}
              <span>Transactions</span>
            </div>
          </Link>
          <Link to={ROUTES?.SUPPORT}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.SUPPORT ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.SUPPORT ? <SupportWhite /> : <Support />}
              <span>Customer Support</span>
            </div>
          </Link>
          <Link to={ROUTES?.SETTINGS}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.SETTINGS ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.SETTINGS ? <SettingWhite /> : <Setting />}
              <span>Settings</span>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="help-center-wrapper">
          <h3>Help Center</h3>
          <p>
            Having trouble in Poorti? Please contact us if you have any
            questions.
          </p>
          <button type="button" className="button-help">
            Go To Help Center
          </button>
          <Frame className="floating-frame" />
        </div>
        {/* <div class="collection-card col-12 mb-4">
          <h3>Poorti Postpaid</h3>
          <button type="button" class="button-primary p-2 px-3">
            Check your Eligibility here
          </button>
        </div> */}
        <div class="collection-card col-12">
          <h3>Follow us on</h3>
          <div class="d-flex gap-2 flex-column w-100">
            <button type="button" class="button-primary p-2 px-3 w-max gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ic:baseline-facebook">
                  <path
                    id="Vector"
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
              Facebook
            </button>
            <button type="button" class="button-primary p-2 px-3 w-max gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="basil:instagram-solid">
                  <path
                    id="Vector"
                    d="M12 8.75C11.138 8.75 10.3114 9.09241 9.7019 9.7019C9.09241 10.3114 8.75 11.138 8.75 12C8.75 12.862 9.09241 13.6886 9.7019 14.2981C10.3114 14.9076 11.138 15.25 12 15.25C12.862 15.25 13.6886 14.9076 14.2981 14.2981C14.9076 13.6886 15.25 12.862 15.25 12C15.25 11.138 14.9076 10.3114 14.2981 9.7019C13.6886 9.09241 12.862 8.75 12 8.75Z"
                    fill="white"
                  ></path>
                  <path
                    id="Vector_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.7708 3.08194C10.2468 2.69664 13.7548 2.69664 17.2308 3.08194C19.1298 3.29394 20.6608 4.78894 20.8838 6.69494C21.296 10.2196 21.296 13.7803 20.8838 17.3049C20.6608 19.2109 19.1298 20.7059 17.2318 20.9189C13.7554 21.3043 10.2471 21.3043 6.7708 20.9189C4.8718 20.7059 3.3408 19.2109 3.1178 17.3059C2.70553 13.781 2.70553 10.2199 3.1178 6.69494C3.3408 4.78894 4.8718 3.29394 6.7708 3.08194ZM17.0008 5.99994C16.7356 5.99994 16.4812 6.1053 16.2937 6.29284C16.1062 6.48037 16.0008 6.73473 16.0008 6.99994C16.0008 7.26516 16.1062 7.51951 16.2937 7.70705C16.4812 7.89459 16.7356 7.99994 17.0008 7.99994C17.266 7.99994 17.5204 7.89459 17.7079 7.70705C17.8954 7.51951 18.0008 7.26516 18.0008 6.99994C18.0008 6.73473 17.8954 6.48037 17.7079 6.29284C17.5204 6.1053 17.266 5.99994 17.0008 5.99994ZM7.2508 11.9999C7.2508 10.7402 7.75124 9.53198 8.64204 8.64119C9.53284 7.75039 10.741 7.24994 12.0008 7.24994C13.2606 7.24994 14.4688 7.75039 15.3596 8.64119C16.2504 9.53198 16.7508 10.7402 16.7508 11.9999C16.7508 13.2597 16.2504 14.4679 15.3596 15.3587C14.4688 16.2495 13.2606 16.7499 12.0008 16.7499C10.741 16.7499 9.53284 16.2495 8.64204 15.3587C7.75124 14.4679 7.2508 13.2597 7.2508 11.9999Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
              Instagram
            </button>
          </div>
        </div>
        {/* <Link
          to="/"
          className="decoration-none"
          onClick={() => {
            localStorage.removeItem('LOGIN_TOKEN');
          }}
        >
          <div className="list-wrapper mt-5">
            <div className="item-wrapper">
              <LogoutSidebar />
              <span>Logout</span>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

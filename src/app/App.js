import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../AppContext';
import '../assets/fonts/stylesheet.css';
import './App.scss';
import ContentRoutes from './ContentRoutes';
import SideBar from './components/sidebar/SideBar';

const App = () => {
  const { state } = useContext(AppContext);
  const { isOpen } = state;
  return (
    <div className="row">
      <div className="col-12 col-lg-3 pe-0">
        <SideBar />
      </div>
      <div
        className={`col-12 p-0 col-lg-9 content-route-wrapper ${
          isOpen ? 'overlay' : ''
        }`}
      >
        <ContentRoutes />
      </div>
    </div>
  );
};

export default App;

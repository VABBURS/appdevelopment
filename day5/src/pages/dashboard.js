import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../app/actions";
import img1 from "../assets/images/img1.jpg"
import img2 from"../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import '../assets/css/dashboard.css';

const Dashboard = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => navigate('/profile')}>Profile</button>
          </li>
          <li>
            <button onClick={() => navigate('/aboutus')}>About Us</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className='nnn'>Welcome <span className="user_name">{username}</span></h1>
        <p className="welcome-text">Let's begin your journey with us!</p>
        <p className="sub-text">Are you searching for event planning? We provide.</p>

        {/* Image Rows */}
        <div className="image-row">
          <img src={img1}alt="Image 1" className="dashboard-image" />
          <img src={img2} alt="Image 2" className="dashboard-image" />
        </div>
        <div className="image-row">
          <img src={img3} alt="Image 3" className="dashboard-image" />
          <img src={img4}alt="Image 4" className="dashboard-image" />
        </div>
        
        {/* You can display other user-related information here */}
      </main>
    </div>
  );
}

export default Dashboard;

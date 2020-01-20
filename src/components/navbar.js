import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const options = [
  { value: 'FL', label: 'Florida' },
  { value: 'two', label: 'New York' }
];

const defaultOption = options[1];

const Navbar = () => (
  <div className="nav">
    <h2 className="logo"><NavLink className="logo-link" exact to="/">Find CE</NavLink></h2>
    <Dropdown options={options} onChange={city => options.value} value={defaultOption} placeholder="Select a state." />
    <br></br>
    <input className="filter-courses"  type="text" placeholder="Search courses by name" id="course-filter" />
    <ul className="nav-menu">
        <li><NavLink className="nav-menu__link" to="/courses">courses</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/providers">providers</NavLink></li>   
    </ul>
  </div>
);

export default Navbar;
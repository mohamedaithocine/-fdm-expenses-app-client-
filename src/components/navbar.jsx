import React from "react";
import '../css/navbar.css';
import { ProfileIcon, ViewExpensesIcon, CreateExpenseIcon } from "../assets/Icons";
import FDMLogo from "../assets/FDMLogo.png";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from "react-router-dom";
import { ClaimantExpenses } from "./ClaimantExpenses";
import { CreateClaim } from "./CreateClaim";
import { Profile } from "./Profile";

function navbar () {
    return(
        <Router>
          <Routes>
            <Route path="/" element={<ClaimantExpenses />} />
            <Route path="/CreateClaim" element={<CreateClaim />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
        </style>

        <nav>
            <img src={FDMLogo} />

            <NavLink to="/">
                <div>
                    <ViewExpensesIcon/>
                    <p className="MobileIdentifiers">View</p>
                    <p className="DesktopIdentifiers" >View Expenses</p>
                </div>
            </NavLink>

            <NavLink to="/CreateClaim">
                <div>
                    <CreateExpenseIcon />
                    <p className="DesktopIdentifiers" >Create Claim</p>
                </div>
            </NavLink>

            <NavLink to="/Profile">
                <div>
                    <ProfileIcon />
                    <p>Profile</p>
                </div>
            </NavLink>

        </nav>
        </Router>
    )
}

export default navbar;
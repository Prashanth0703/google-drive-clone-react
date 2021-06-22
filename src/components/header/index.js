import React from "react";
import GDriveLogo from "../../media/Google_Drive_icon.png";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../../styles/Header.css";
function Header({ userPhoto }) {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={GDriveLogo} alt="" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search in Drive" />
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={userPhoto} alt="user photo" />
            </div>
        </div>
    );
}

export default Header;

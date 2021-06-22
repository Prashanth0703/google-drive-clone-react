import React from "react";
import NewFile from "./NewFile";
import "../../styles/SideBar.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StorageIcon from "@material-ui/icons/Storage";
import SideBarItem from "./SideBarItem";

function SideBar() {
    return (
        <div className="sideBar">
            <NewFile />
            <div className="sidebar__itemsContainer">
                <SideBarItem
                    arrow
                    icon={<InsertDriveFileIcon />}
                    label={"My Drive"}
                />
                <SideBarItem
                    arrow
                    icon={<ImportantDevicesIcon />}
                    label={"Computers"}
                />
                <SideBarItem
                    icon={<PeopleAltIcon />}
                    label={"Shared with me"}
                />
                <SideBarItem icon={<QueryBuilderIcon />} label={"Recent"} />
                <SideBarItem icon={<StarBorderIcon />} label={"Starred"} />
                <SideBarItem icon={<DeleteOutlineIcon />} label={"Bin"} />
                <hr />
                <SideBarItem icon={<StorageIcon />} label={"Storage"} />
            </div>
        </div>
    );
}

export default SideBar;

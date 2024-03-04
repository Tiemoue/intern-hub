import { MdOutlineWork } from "react-icons/md";
import { FaClover } from "react-icons/fa6";
import { GoIssueTrackedBy } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6"
import Sidebar from "../components/sidebar/Sidebar";

export default function LayoutWithSidebar() {
    // State and functions for handling sidebar logic can go here


    return (
        <div className="flex h-screen">
            <Sidebar />
           
        </div>


    );
}

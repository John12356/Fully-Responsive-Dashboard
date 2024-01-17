import "./sidebar.css";
import { Link } from "react-router-dom";
import TimelineIcon from "@mui/icons-material/Timeline";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="list-item active">
                <LineStyleIcon className="icon" />
                Home
              </li>
            </Link>
            <li className="list-item">
              <TimelineIcon className="icon" />
              Analytics
            </li>
            <li className="list-item">
              <TrendingUpIcon className="icon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <li className="list-item">
              <PermIdentityIcon className="icon" />
              Users
            </li>
            <li className="list-item">
              <StorefrontIcon className="icon" />
              Products
            </li>
            <li className="list-item">
              <AttachMoneyIcon className="icon" />
              Transactions
            </li>
            <li className="list-item">
              <BarChartIcon className="icon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="list-item">
              <MailOutlineIcon className="icon" />
              Mail
            </li>
            <li className="list-item">
              <DynamicFeedIcon className="icon" />
              Feedback
            </li>
            <li className="list-item">
              <ChatBubbleOutlineIcon className="icon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="list-item">
              <WorkOutlineIcon className="icon" />
              Manage
            </li>
            <li className="list-item">
              <TimelineIcon className="icon" />
              Analytics
            </li>
            <li className="list-item">
              <ReportIcon className="icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

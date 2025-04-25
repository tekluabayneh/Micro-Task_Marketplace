import { User, Settings, Briefcase, FilePlus, LogOut } from "lucide-react";
import Separator from "../Separator";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const profileImageUrl = "https://i.pravatar.cc/150?img=32";

const FR_ProfilePop = ({ isProfileMenu, setProfileMenu }) => {
  if (!isProfileMenu) return null;
  const userimg = localStorage.getItem("userImg");
  const userType = localStorage.getItem("userType");
  const username = localStorage.getItem("username");

  return (
    <div className="profile-pop">
      <div className="profile-header">
        <div className="flex items-center gap-3">
          <div className="profile-avatar rounded-full">
            <img className="rounded-full" src={userimg} alt={username} />
          </div>

          <div className="flex flex-col">
            <h4 className="profile-name">{username}</h4>
            <span className="profile-role">{userType}</span>
          </div>
        </div>
      </div>

      <div className="profile-menu">
        <nav>
          <ul className="space-y-2">
            <li>
              <button className="menu-item">
                <span className="menu-icon">
                  <User size={18} />
                </span>
                <Link
                  onClick={() => setProfileMenu(!setProfileMenu)}
                  to={"Freelancer/FreelancerProfile"}
                  className="menu-text"
                >
                  Profile
                </Link>
              </button>
            </li>
            <li>
              <button className="menu-item">
                <span className="menu-icon">
                  <FilePlus size={18} />
                </span>
                <Link
                  onClick={() => setProfileMenu(!setProfileMenu)}
                  to={"/Freelancer/Earnings"}
                  className="menu-text"
                >
                  Earnings
                </Link>
              </button>
            </li>
            <li>
              <button className="menu-item">
                <span className="menu-icon">
                  <Briefcase size={18} />
                </span>
                <Link
                  to={"/Freelancer/MyJobs"}
                  onClick={() => setProfileMenu(!setProfileMenu)}
                  className="menu-text"
                >
                  MYJob
                </Link>
              </button>
            </li>
          </ul>
        </nav>

        <Separator className="my-3" />

        <button className="logout-button cursor-pointer">
          <LogOut size={16} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default FR_ProfilePop;

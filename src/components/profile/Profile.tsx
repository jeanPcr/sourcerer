import React from "react";
import { useUser } from "../../contexts/user.context";
import "./profile.css";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  const { currentUser } = useUser();
  console.log(currentUser);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <p className="profile-id">
          <h2 className="profile-name">{currentUser.name}</h2>
          {currentUser.login}
        </p>
        <p className="profile-bio">
          <span>
            {currentUser.bio} at {currentUser.company}
          </span>
          <br />
          <span>{currentUser.organization.location}</span>
        </p>
      </div>

      <div className="profile-infos">
        <div className="">
          <img
            src={currentUser.avatarUrl}
            alt="profile image"
            className="profile-image"
          />
        </div>

        <div className="analytics">
          <div className="analytic-item">
            <p>Commits</p>
            {currentUser.followers.totalCount}
          </div>
          <div className="analytic-item">
            <p>Repos</p>
            {currentUser.repositories.totalCount}
          </div>
          <div className="analytic-item">
            <p>Lines of Code</p>
            {currentUser.followers.totalCount}
          </div>
          <div className="analytic-item follow">
            <p>Followers</p>
            {currentUser.followers.totalCount}
          </div>
          <div className="analytic-item follow">
            <p>Following</p>
            {currentUser.following.totalCount}
          </div>
          <div className="analytic-item refresh">
            <p>Refresh</p>
            <div className="down-chevron"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

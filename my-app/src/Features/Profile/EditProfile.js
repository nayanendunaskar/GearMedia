import React from "react";
import "./EditProfile.css";
import profile from "../../Assets/profile.png";
import { useState } from "react";
import { useData } from "../../Context/DataContext";
import { editUserHandler } from "../../Services/DataServices";
import { toast } from "react-toastify";
import { AiFillCamera } from "react-icons/ai";

import { RxCross2 } from "react-icons/rx";

export const EditProfile = ({ setEditBtn, editBtn }) => {
  const {
    dataState: { users },
    darkMode,
    dataDispatch,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken");
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const [updatedProfile, setUpdatedProfile] = useState({
    profilePic: loggedInUser.profilePic,
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    link: loggedInUser.link,
    bio: loggedInUser.bio,
  });

  const handleClose = () => {
    setEditBtn(!editBtn);
  };

  

  const avatars = [
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1688316888~exp=1688317488~hmac=df3021231870bc416503cf6dccd573cbcaff8eeb1491de5898f58678ae75df45",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1688316902~exp=1688317502~hmac=8cca0d3eef3709eb0d7e0ea2eb0b723ce2552b5c03d1ea92814ece65047149a4",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1688316913~exp=1688317513~hmac=94ea24c4cbee0b2bdc8ee4bbc67978c84c8e67305a1aed9b22a7c1c863e32cd0",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=740&t=st=1688316928~exp=1688317528~hmac=02da34a33bb81da6d8ccfbf2c51a87c38a153cda4161cabf369678b6c1bd6366",
    "https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1688316941~exp=1688317541~hmac=f674703d093ef62f269bbfd42c6d6654517c5f0a4882854062229a58fa087a03",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=740&t=st=1688316978~exp=1688317578~hmac=fd42087bbe565c2ea9bc43ab0698a4e0be917c22f70f7e022bf57ed0117ab1f9",
    "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?w=740&t=st=1688316989~exp=1688317589~hmac=3b369f32621b210928f504ee727d60c0a21efa947352fdf68b15b6fca55ce6b8",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=740&t=st=1688317001~exp=1688317601~hmac=c82544b97644d2c6246b9ffb7861ffbd885f9365bfd3230952a17395290b60c3",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=740&t=st=1688317021~exp=1688317621~hmac=a62856b75da1a570da15ac2cd87048a1122fe84a6ce3c5cd392d12e62be08eef",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=740&t=st=1688317032~exp=1688317632~hmac=399fd7afbc4d4c08e0eee0c8e027916d1e6b1074705896a3f7980b8654145691",
    "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?w=740&t=st=1688317044~exp=1688317644~hmac=b6ea0b300b7c1fec1e5a79141721dbea449ddba636d48a3055bb3261db34b59a",
  ];

  const handleImageUpload = (e) => {
    
    const selectedImg = e.target.files[0];
    setUpdatedProfile((prev) => ({
      ...prev,
      profilePic: URL.createObjectURL(selectedImg),
    }));
  };

  const handleAvatar = (data) => {
    setUpdatedProfile((prev) => ({ ...prev, profilePic: data }));
  };

  const handleUpdate = () => {
    editUserHandler(updatedProfile, socialToken, dataDispatch);
    setEditBtn(!editBtn);
    toast.success("Post Updated!");
  };

  const updateDetails = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
   
  };

  const { firstName, lastName, link, bio } = updatedProfile;
  return (
    <div className={`editMainContainer ${darkMode && "bgDarkmode"}`}>
      <div className={`editInnerConatainer  ${darkMode && "bgDarkmode"}`}>
        <div className={`updateConatiner  ${darkMode && "bgDarkmode"}`}>
          <RxCross2
            onClick={handleClose}
            className={`cross-icon  ${darkMode && "bgDarkmode"} pointer`}
          />
          <div>
            <p className={`avatarinfo  ${darkMode && "bgSecondaryDarkMode"}`}>
              Select Your Avatar
            </p>
          </div>

          <div className={`updateAvatarMain  ${darkMode && "bgDarkmode"}`}>
            <div className={`updateAvatar  ${darkMode && "bgDarkmode"}`}>
              {avatars.map((data,i) => (
                <div
                  onClick={() => handleAvatar(data)}
                  className={`imgAvatar ${
                    updatedProfile.profilePic === data && "imgAvatarSelected"
                  }  ${darkMode && "bgDarkmode"}`}
                  key={i}
                >
                  <img
                    src={data}
                    alt="img"
                    height={70}
                    width={70}
                    name="profilePic"
                    value={data}
                    onClick={updateDetails}
                  />
                </div>
              ))}
            </div>
            <div
              className={`input-file-container flex align-center  ${
                darkMode && "bgDarkmode"
              }`}
            >
              <span className={`profile-text  ${darkMode && "bgDarkmode"}`}>
                Profile
              </span>

              <label
                for="file-upload"
                className={`btn-upload  ${darkMode && "bgDarkmode"}`}
              >
                <img
                  src={updatedProfile.profilePic}
                  alt=""
                  width="200"
                  className={`edit-profile-icon  ${darkMode && "bgDarkmode"}`}
                />
                <span className={`edit-profile-camera-icon  `}>
                  <AiFillCamera />
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className={`infoEditContainer  ${darkMode && "bgDarkmode"}`}>
            <label className="labelUpdateProfile">
              First Name:
              <input
                type="text"
                name="firstName"
                onChange={updateDetails}
                value={firstName}
                className="inputp"
              />
            </label>
            <label className="labelUpdateProfile">
              last Name:
              <input
                type="text"
                name="lastName"
                onChange={updateDetails}
                value={lastName}
                className="inputp"
              />
            </label>
            <label className="labelUpdateProfile">
              Link :
              <input
                type="text"
                name="link"
                onChange={updateDetails}
                value={link}
                className="inputp"
              />
            </label>
            <div className="labelUpdateProfile">
              <label className="labelUpdateProfile">Bio :</label>
              <textarea
                placeholder="bio"
                className="editPost-input"
                onChange={updateDetails}
                name="bio"
                value={bio}
              />
            </div>
          </div>
          <div className="btn-edit-profile-div">
            <button className="updateBtn" onClick={handleUpdate}>
              Update
            </button>
            <button onClick={handleClose} className="updateBtn">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import UserInfo from "../components/UserInfo";
import Calender from "../components/Calender";
import DropDown from "../components/DropDown";
import BottomSheet from "../components/BottomSheet";

import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";

import profileImg from '../assets/profile-background.jpg';

const ProfilePage = () => {
  const Navigate = useNavigate();

  const [content, setContent] = useState(null);

  // USER GENDER INITIAL VALUE
  const fallBackUserGender = {
    gender: "Not Specified",
  };

  const [userGender, setUserGender] = useLocalStorage(
    "userGender",
    fallBackUserGender
  );

  // USER BIRTH-DATE INITIAL VALUE
  const fallBackUserBirth = {
    birthDate: "2020-01-01",
  };

  const [userBirth, setUserBirth] = useLocalStorage(
    "userBirth",
    fallBackUserBirth
  );

  return (
    <div>
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0" 
        src={profileImg} 
        alt="background" 
      />
      <form className="flex justify-center items-center min-h-screen w-full bg-gray-200">
        
        <div className="max-w-[500px] w-full mx-auto bg-white p-8 rounded-lg shadow-lg relative z-10">
          <div className="flex flex-col w-full h-full py-5 px-4 justify-evenly items-left">
            <UserInfo />

            <div className="mt-5 w-full flex flex-col justify-center items-center text-black">
              <h3 className="text-sm py-1 lg:w-[50%] text-slate-500 max-lg:w-full">
                Gender
              </h3>
              <DropDown
                defaultValue={userGender.gender}
                selections={["Not Specified", "Male", "Female"]}
                notEditable={true}
              />
            </div>

            <div className="mt-5 w-full flex flex-col justify-center items-center text-black">
              <h3 className="text-sm py-1 lg:w-[50%] text-slate-500 max-lg:w-full lg:text-base">
                Birthday
              </h3>
              <Calender defaultValue={userBirth.birthDate} notEditable={true} />
            </div>

            <div className="flex flex-col items-start py-5 lg:flex-row lg:items-center lg:text-xl">
              <div className="flex flex-row items-center py-2 mb-1">
                <HiOutlineUser className="size-5 mr-3" />
                <button
                  onClick={() => {
                    Navigate("/edit-profile");
                  }}
                  className="focus:tracking-wider focus:font-semibold focus:underline hover:tracking-wider hover:font-semibold hover:underline underline-offset-4 transition-all"
                >
                  Edit Profile
                </button>
              </div>

              <div className="flex flex-row items-center py-5 text-red-600">
                <HiOutlineLogout className="size-5 mr-3" />
                <button
                  onClick={() => {
                    content
                      ? setContent(null)
                      : setContent(
                          <div className="absolute inset-0 bg-white bg-opacity-60 z-40 w-screen h-full">
                            <BottomSheet/>
                          </div>
                        );
                  }}
                  className="focus:tracking-wider focus:font-semibold focus:underline hover:tracking-wider hover:font-semibold hover:underline underline-offset-4 transition-all"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        {content}
      </form>
    </div>
  );
};

export default ProfilePage;
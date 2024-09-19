import { useRef } from "react";
import { Link,useNavigate  } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import DropDown from "../components/DropDown";
import Calender from "../components/Calender";

import { HiOutlineArrowLeft } from "react-icons/hi";

import profileImg from '../assets/profile-background.jpg';

const EditProfile = () => {
  const navigate = useNavigate();
  // LOCAL STORAGE STATES
  
  const [userInfo, setUserInfo] = useLocalStorage("userInfo");
  const [userGender, setUserGender] = useLocalStorage("userGender");
  const [userBirth, setUserBirth] = useLocalStorage("userBirth");

  // REFS FOR THE INPUT STATE HANDLING
  const nameRef = useRef(userInfo.name);
  const emailRef = useRef(userInfo.email);

  // HANDLE Click FOR THE UPDATE BUTTON
  const handleClick = () => {
    setUserInfo({
      name: nameRef.current,
      email: emailRef.current,
    });
    navigate("/profile");
  };

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-gray-200">
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0" 
        src={profileImg} 
        alt="background" 
      />
      
      <form className="relative z-10 w-full max-w-[600px] bg-white p-8 rounded-lg shadow-lg">
        <Link
          to={"/profile"}
          role="button"
          className="flex flex-row items-center justify-start focus:tracking-wider focus:font-semibold transition-all mb-7"
        >
          <HiOutlineArrowLeft className="size-5 mr-3" />
          Back
        </Link>

        <label htmlFor ="name">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            Full Name
          </h3>
          <input
            id="name"
            name="name"
            required
            type="text"
            defaultValue={userInfo.name}
            onChange={(e) => {
              nameRef.current = e.target.value;
            }}
            className="mb-2 w-full p-2 bg-inherit border-2 
              rounded-md border-solid border-slate-100
              focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </label>

        <label htmlFor="email">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            E-mail
          </h3>
          <input
            id="email"
            name="email"
            required
            type="email"
            defaultValue={userInfo.email}
            onChange={(e) => {
              emailRef.current = e.target.value;
            }}
            className="mb-2 w-full p-2 bg-inherit border-2 
              rounded-md border-solid border-slate-100
              focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </label>

        <label htmlFor="gender">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            Gender
          </h3>
          <DropDown
            defaultValue={userGender.gender}
            selections={["Not Specified", "Male", "Female"]}
            labelName={"gender"}
            notEditable={false}
          />
        </label>

        <label htmlFor="date">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            Birthday
          </h3>
          <Calender
            defaultValue={userBirth.birthDate}
            labelName={"date"}
            notEditable={false}
          />
        </label>

        <div>
          <button
            type="submit"
            onClick={handleClick}
            className="w-full my-12 rounded-md p-2 bg-sky-600 text-black font-semibold focus:shadow-md focus:shadow-blue-500/50 
            hover:shadow-md 
            hover:shadow-blue-500/50 
            transition-all
          lg:w-[50%] lg:mb-12"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

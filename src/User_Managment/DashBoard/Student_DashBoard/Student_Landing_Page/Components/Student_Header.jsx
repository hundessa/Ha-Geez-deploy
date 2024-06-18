import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/images/Logo/logo-3.png";
import { Button, TextInput } from "@mantine/core";
import {
  MdOutlineShoppingCart,
  MdNotifications,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdLogout,
  MdSettings,
} from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import student_1 from "../../../../../assets/images/Student_profile/student_1.jpg";

const Student_Header = () => {
  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [settingVisible, setSettingVisible] = useState(false);
  const dropdownRef = useRef(null);
  const settingsRef = useRef(null);

  const settingMenu = () => {
    setSettingVisible(!settingVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      settingsRef.current &&
      !settingsRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
      setSettingVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="z-[10001] relative">
        <nav className="bg-[#09335F] bg-opacity90 flex fixed w-full">
          <div
            className="flex mr96"
            onClick={() => navigate("/student_landingpage")}
          >
            <div className="size-14 mr-2 cursor-pointer">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex items-center">
              <h1 className="font-semibold text-white font-serif cursor-pointer">
                Ha-Geez
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center mx-auto w[600px]">
            <TextInput
              placeholder="search"
              className="flexcol w-[400px] rounded-[50px] z-[10001]"
            />
          </div>
          <div className="flex">
            <div className="flex ">
              <div className="flex justify-end items-center ml-auto mr-4 space-x-6">
                <Button
                  variant="transparent"
                  className="flex text-gray-200 p-0 active:text-gray-400"
                >
                  <MdOutlineShoppingCart
                    className="size-8"
                    onClick={() => navigate("/cart")}
                  />
                </Button>
                <Button
                  variant="transparent"
                  className="flex text-gray-200 p-0 active:text-gray-400"
                >
                  <MdNotifications className="size-8" />
                </Button>
                <Button
                  variant="transparent"
                  className="flex text-gray-200 p-0 active:text-gray-400"
                  onClick={settingMenu}
                >
                  <MdSettings className="size-8" />
                </Button>
                <div className={` `} ref={dropdownRef} onClick={toggleMenu}>
                  <img
                    src={student_1}
                    alt="profile"
                    className="size-8 rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
        ref={settingsRef}
          className={`fixed right-0 mt-14 bg-[#E7F3FF] w-[150px] flx justify-center mx-auto ${
            settingVisible ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-start mx-2">
            <Button
              variant="transparent"
              onClick={toggleDarkMode}
              className={`flex justifycenter items-center text-gray-500 active:text-black p-0`}
            >
              {isDarkMode ? (
                <>
                  <MdOutlineDarkMode
                    className={`size-[20px] cursor-pointer mr-1 text-[12px]`}
                  />
                  <h1 className={`text-[12px]`}>Dark mode</h1>
                </>
              ) : (
                <>
                  <MdOutlineLightMode
                    className={`size-[20px] cursor-pointer mr-1 text-[12px]`}
                  />
                  <h1 className="text-[12px]">Light mode</h1>
                </>
              )}
            </Button>
          </div>
          <Button
            variant="transparent"
            className="text-gray-500 active:text-black text-[12px] ml-[-4px]"
            onClick={() => navigate("/change_password")}
          >
            <FaExchangeAlt className="mr-1" />
            Change Password
          </Button>
        </div>
        <div
        ref={dropdownRef}
          className={`fixed right-0 mt-14 bg-[#E7F3FF] w-[170px] flex justify-center mx-auto ${
            menuVisible ? "block" : "hidden"
          }`}
        >
          <div className="space-y-4 my-2">
            <div className="text-sm">
              <h1>Hundessa Serbessa</h1>
              <h1 className="text-xs font-light">hund@gmail.com</h1>
            </div>

            <div>
              <Button
                variant="transparent"
                className="ml4 p-0 mt32 space-x-2 font-bold text-red-500"
                onClick={() => navigate("/")}
              >
                <MdLogout className="flex items-center my-auto size-6 mr-2 active:text-red-500" />
                <h1 className={``}>Log out</h1>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Student_Header;

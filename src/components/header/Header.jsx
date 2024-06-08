import React, { useEffect, useState } from "react";
import AvatarButton from "../customUi/AvatarButton";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is less than 768px (typical mobile breakpoint)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!currentUser && !isMobile) {
      navigate("/login");
    }
  }, [currentUser, navigate, isMobile]);

  if (!currentUser && !isMobile) {
    return (
      <div className="flex justify-between h-20 w-full p-6 bg-stone-50 select-none border-b-2 shadow-xl">
        <span className="text-xl font-semibold">Welcome to Admin Panel</span>
        {/* If currentUser is null, return Welcome message */}
        <div className="flex flex-row items-center gap-10">
          <Link to="/">
            <Button className="bg-indigo-500 font-bold hover:bg-indigo-600 transition-colors">
              Visit Website
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const displayName = currentUser?.displayName || currentUser?.email;

  return (
<<<<<<< HEAD
    <div className="flex justify-between h-20 w-full p-6 bg-stone-50 select-none border-b-2 shadow-xl">
      {isMobile ? (
        <span className="text-xl font-semibold">
          Welcome, {displayName || "Guest"}
        </span>
      ) : (
        <TypeAnimation
          sequence={[`Welcome,`, 1000, `${displayName || "Guest"}`, 1000]}
=======
    <>
      <div className="flex justify-between h-20 w-full p-6 bg-stone-50 select-none border-b-2 shadow-xl">
{/*         <TypeAnimation
          sequence={[
            `Welcome`,
            1000, // wait 1s before replacing "Mice" with
            `${displayName}`,
            1000,
          ]}
>>>>>>> 7ef13a4c326688f24e76e585be1261cab56b1718
          wrapper="span"
          speed={50}
          style={{ fontSize: "1.5rem", fontWeight: 600 }}
          repeat={Infinity}
<<<<<<< HEAD
        />
      )}
      <div className="flex flex-row items-center gap-10">
        <Link to="/">
          <Button className="bg-indigo-500 font-bold hover:bg-indigo-600 transition-colors">
            Visit Website
          </Button>
        </Link>
        <AvatarButton />
=======
        /> */}
        <div className="flex flex-row items-center gap-10">
          {/* <Bell /> */}
          <Link to="/">
            <Button className="bg-indigo-500 font-bold hover:bg-indigo-600 transition-colors">
              {" "}
              Visit Website
            </Button>
          </Link>
          <AvatarButton />
        </div>
>>>>>>> 7ef13a4c326688f24e76e585be1261cab56b1718
      </div>
    </div>
  );
};

export default Header;

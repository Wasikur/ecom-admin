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
    <div className="flex flex-col md:flex-row justify-between h-20 w-full pl-24 mr-14 p-6 bg-stone-50 select-none border-b-2 shadow-xl">
      {isMobile ? (
        <>
          <div className="pl-20 w-full">
            <div className="flex gap-4">
              <Link to="/">
                <Button className="bg-indigo-500 font-bold hover:bg-indigo-600 transition-colors">
                  Visit Website
                </Button>
              </Link>
              <AvatarButton />
            </div>
          </div>
          <span className="text-xl font-semibold mt-4">
            Welcome, {displayName || "Guest"}
          </span>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <TypeAnimation
              sequence={[`Welcome,`, 1000, `${displayName || "Guest"}`, 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.5rem", fontWeight: 600 }}
              repeat={Infinity}
            />
          </div>
          <div className="flex flex-row items-center gap-10">
            <Link to="/">
              <Button className="bg-indigo-500 font-bold hover:bg-indigo-600 transition-colors">
                Visit Website
              </Button>
            </Link>
            <AvatarButton />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;

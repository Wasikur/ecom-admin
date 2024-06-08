import React, { useEffect } from "react";
import AvatarButton from "../customUi/AvatarButton";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
// import { Bell } from "lucide-react";
import { useAuth } from "../../contexts/authContext/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
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

  const displayName = currentUser.displayName || currentUser.email;

  return (
    <>
      <div className="flex justify-between h-20 w-full p-6 bg-stone-50 select-none border-b-2 shadow-xl">
{/*         <TypeAnimation
          sequence={[
            `Welcome`,
            1000, // wait 1s before replacing "Mice" with
            `${displayName}`,
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1.5rem", fontWeight: 600 }}
          repeat={Infinity}
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
      </div>
    </>
  );
};

export default Header;

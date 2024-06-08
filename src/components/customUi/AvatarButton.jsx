import React from "react";
import { doSignOut } from "../../firebase/Auth";
import { useAuth } from "../../contexts/authContext/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Profile } from "../customUi/Profile";

function AvatarButton() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className="flex justify-end text-2xl font-bold">
      <DropdownMenu>
        <DropdownMenuTrigger className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-md border-black-500 focus:outline-none hover:bg-gray-500">
          <Avatar>
            <AvatarImage src={currentUser.photoURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <div className="flex flex-col items-center mb-2">
              {currentUser.displayName && (
                <span>{currentUser.displayName}</span>
              )}
              <span>{currentUser.email}</span>
            </div>
          </DropdownMenuLabel>
          <Separator />
          <DropdownMenuSeparator />
          <div className="mt-2 flex flex-row justify-center gap-20 items-center">
            <Avatar>
              <AvatarImage src={currentUser.photoURL} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Profile />
          </div>
          <DropdownMenuItem
            onClick={handleSignOut}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default AvatarButton;

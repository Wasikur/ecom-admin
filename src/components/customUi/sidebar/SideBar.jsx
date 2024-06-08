import {
  ChevronLast,
  ChevronFirst,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import React, { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const SidebarContext = createContext();

export default function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-stone-50 border-r overflow-y-auto">
        <ScrollArea className="h-full rounded-md border">
          <div className="pt-6 p-4 flex justify-between items-center">
            <img
              src="./assets/logo.png"
              className={`overflow-hidden transition-all select-none ${
                expanded ? "w-40" : "w-0"
              }`}
              alt=""
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? (
                <ChevronFirst className="w-6 h-6 sm:w-5 sm:h-5" />
              ) : (
                <ChevronLast className="w-6 h-6 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 py-5">{children}</ul>
          </SidebarContext.Provider>
        </ScrollArea>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  onClick,
  to,
  children,
}) {
  const { expanded } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = React.Children.count(children) > 0;

  return (
    <>
      <li
        onClick={() => {
          if (hasChildren) {
            setIsOpen((prev) => !prev);
          }
          if (onClick) onClick();
        }}
        className={`
          relative flex items-center py-4 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group select-none
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
        `}
      >
        <Link to={to} className="flex items-center w-full">
          <span className="w-6 h-6 sm:w-5 sm:h-5">{icon}</span>
          <span
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "w-22 ml-3 sm:ml-2 sm:text-sm" : "w-0"
            }`}
          >
            {text}
          </span>
        </Link>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {hasChildren && expanded && (
          <span className="ml-auto">
            {isOpen ? (
              <ChevronDown className="w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300 transform rotate-180" />
            ) : (
              <ChevronRight className="w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300" />
            )}
          </span>
        )}
        {!expanded && hasChildren && (
          <div
            className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-indigo-100 text-indigo-800 text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {text}
          </div>
        )}
      </li>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen && expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        {isOpen && expanded && (
          <div className="pl-8">
            {React.Children.map(children, (child) => (
              <div>{child}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

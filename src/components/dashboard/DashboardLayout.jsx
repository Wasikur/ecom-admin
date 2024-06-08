import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext/AuthProvider";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import SideBar, { SidebarItem } from "../customUi/sidebar/SideBar";
import {
  PieChart,
  User,
  ShoppingBag,
  Shirt,
  TrendingUp,
  Image,
  SquarePlus,
  ShoppingCart,
} from "lucide-react";
import Header from "../header/Header";

const DashboardLayout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="shadow-md">
        <SideBar>
          <SidebarItem
            icon={<PieChart />}
            text="Dashboard"
            active={activeItem === "/home"}
            onClick={() => handleItemClick("/home")}
            to="/home"
          />
          <SidebarItem
            icon={<User />}
            text="Users"
            active={activeItem === "/users"}
            onClick={() => handleItemClick("/users")}
            to="/users"
          />
          <SidebarItem
            icon={<ShoppingBag />}
            text="Category"
            active={activeItem === "/categories"}
            onClick={() => handleItemClick("/categories")}
            to="/categories"
          >
            <SidebarItem
              icon={<SquarePlus />}
              text="Add Category"
              active={activeItem === "/categories/new-category"}
              onClick={() => handleItemClick("/categories/new-category")}
              to="/categories/new-category"
            />
          </SidebarItem>
          <SidebarItem
            icon={<Shirt />}
            text="Products"
            active={activeItem === "/products"}
            onClick={() => handleItemClick("/products")}
            to="/products"
          >
            <SidebarItem
              icon={<SquarePlus />}
              text="Add Product"
              active={activeItem === "/products/new-product"}
              onClick={() => handleItemClick("/products/new-product")}
              to="/products/new-product"
            />
          </SidebarItem>

          <SidebarItem
            icon={<TrendingUp />}
            text="Trending"
            active={activeItem === "/trending"}
            onClick={() => handleItemClick("/trending")}
            to="/trending"
          >
            <SidebarItem
              icon={<SquarePlus />}
              text="Add Trending"
              active={activeItem === "/trending/new-trending"}
              onClick={() => handleItemClick("/trending/new-trending")}
              to="/trending/new-trending"
            />
          </SidebarItem>
          <SidebarItem
            icon={<Image />}
            text="Banners"
            active={activeItem === "/banners"}
            onClick={() => handleItemClick("/banners")}
            to="/banners"
          >
            <SidebarItem
              icon={<SquarePlus />}
              text="Add Banner"
              active={activeItem === "/banners/new-banner"}
              onClick={() => handleItemClick("/banners/new-banner")}
              to="/banners/new-banner"
            />
          </SidebarItem>
          <SidebarItem
            icon={<ShoppingCart />}
            text="Orders"
            active={activeItem === "/orders"}
            onClick={() => handleItemClick("/orders")}
            to="/orders"
          />
        </SideBar>
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div className="bg-stone-100 w-full h-full p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

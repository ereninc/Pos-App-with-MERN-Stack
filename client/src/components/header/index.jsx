import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserSwitchOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input, message } from "antd";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../contexts/Context";
import "./index.css";

export default function Header() {
  const cart = useSelector((state) => state.cart);

  const { pathname } = useLocation();
  const { searchKeyword, setSearchKeyword } = useContext(Context);

  // console.log(pathname);

  const navigate = useNavigate();
  const logout = () => {
    if (window.confirm("Are you sure?")) {
      localStorage.removeItem("setUser");
      message.success("Logout successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  const handleOnChange = (e) => {
    pathname !== "/home" && navigate("/home");
    setSearchKeyword(e.target.value);
  };

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-6">
        <div className="logo">
          <NavLink to="/home" className="logo-link">
            <h2 className="text-2xl font-bold md:text-4xl">ex-Pos</h2>
          </NavLink>
        </div>
        <div className="header-search flex justify-center flex-1">
          <Input
            size="large"
            placeholder="Search for products"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
            onChange={handleOnChange}
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-8 md:static fixed bottom-0 md:w-auto w-[calc(100vw-25px)] md:bg-transparent z-50 bg-white left-0 md:px-0 px-6 md:py-0 py-4 md:border-t-0 border-t">
          <NavLink
            to={"/home"}
            className="menu-link nav-item flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Home</span>
          </NavLink>
          <Badge
            count={cart.cartItems.length}
            offset={[0, 6]}
            className="md:flex hidden"
          >
            <NavLink
              to={"/cart"}
              className="menu-link nav-item flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="text-xs md:text-sm">Cart</span>
            </NavLink>
          </Badge>
          <NavLink
            to={"/bills"}
            className="menu-link nav-item flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Bills</span>
          </NavLink>
          <NavLink
            to={"/customers"}
            className="menu-link nav-item flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <UserSwitchOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Customers</span>
          </NavLink>
          <NavLink
            to={"/statistics"}
            className="menu-link nav-item flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <PieChartOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Statistics</span>
          </NavLink>
          <NavLink
            to={"#"}
            className="menu-link logout flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
            onClick={logout}
          >
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Log out</span>
          </NavLink>
        </div>

        <Badge
          count={cart.cartItems.length}
          offset={[0, 6]}
          className="md:hidden flex"
        >
          <NavLink
            to={"/cart"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="text-xs md:text-sm">Cart</span>
          </NavLink>
        </Badge>
      </header>
    </div>
  );
}

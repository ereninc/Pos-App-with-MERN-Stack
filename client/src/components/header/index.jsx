import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserSwitchOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input } from "antd";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-6">
        <div className="logo">
          <NavLink to="/home">
            <h2 className="text-2xl font-bold md:text-4xl">ex-Pos</h2>
          </NavLink>
        </div>
        <div className="header-search flex justify-center flex-1">
          <Input
            size="large"
            placeholder="Search for products"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-8 md:static fixed bottom-0 md:w-auto w-[calc(100vw-25px)] md:bg-transparent z-50 bg-white left-0 md:px-0 px-6 md:py-0 py-4 md:border-t-0 border-t">
          <NavLink
            to={"/home"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Home</span>
          </NavLink>
          <Badge count={5} offset={[0, 6]} className="md:flex hidden">
            <NavLink
              to={"/cart"}
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="text-xs md:text-sm">Cart</span>
            </NavLink>
          </Badge>
          <NavLink
            to={"/bills"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Bills</span>
          </NavLink>
          <NavLink
            to={"/clients"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <UserSwitchOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Clients</span>
          </NavLink>
          <NavLink
            to={"/statistics"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <PieChartOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Statistics</span>
          </NavLink>
          <NavLink
            to={"/logout"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300 min-w-[40px] text-center"
          >
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Log out</span>
          </NavLink>
        </div>

        <Badge count={5} offset={[0, 6]} className="md:hidden flex">
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

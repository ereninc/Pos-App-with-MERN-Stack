import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserSwitchOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

export default function Header() {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-6">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">POS App</h2>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input
            size="large"
            placeholder="Search for products"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-8">
          <a href={"/"} className="menu-link flex flex-col">
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Home</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col">
            <ShoppingCartOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Cart</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col">
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Bills</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col">
            <UserSwitchOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Clients</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col">
            <PieChartOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Statistics</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col">
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Log out</span>
          </a>
        </div>
      </header>
    </div>
  );
}

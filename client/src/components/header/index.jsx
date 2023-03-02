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

export default function Header() {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-6">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">POS App</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Search for products"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-8 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:px-0 px-4 md:py-0 py-4 md:border-t-0 border-t">
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300"
          >
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Home</span>
          </a>
          <Badge count={5} offset={[0, 6]} className="md:flex hidden">
            <a
              href={"/"}
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300"
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="text-xs md:text-sm">Cart</span>
            </a>
          </Badge>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300"
          >
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Bills</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300"
          >
            <UserSwitchOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Clients</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300"
          >
            <PieChartOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Statistics</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300"
          >
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="text-xs md:text-sm">Log out</span>
          </a>
        </div>

        <Badge count={5} offset={[0, 6]} className="md:hidden flex">
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all duration-300"
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="text-xs md:text-sm">Cart</span>
          </a>
        </Badge>
      </header>
    </div>
  );
}

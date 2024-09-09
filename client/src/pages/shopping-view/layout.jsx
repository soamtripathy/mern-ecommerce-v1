import { Outlet } from "react-router-dom";
import ShoppingViewHeader from "./header";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* commonn header */}
      <ShoppingViewHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;

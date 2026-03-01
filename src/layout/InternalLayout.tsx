import InternalNavBar from "@/components/InternalNavBar";
import { Outlet } from "react-router-dom";

const InternalLayout = () => {
  return (
    <>
      <InternalNavBar />
      <Outlet />
    </>
  );
};

export default InternalLayout;

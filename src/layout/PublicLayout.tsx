import PublicNavBar from "@/components/PublicNavBar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <PublicNavBar />
      <Outlet />
    </>
  );
};

export default PublicLayout;

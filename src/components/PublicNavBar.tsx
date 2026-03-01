import { Link, useLocation } from "react-router-dom";
import TasmanLogo from "./TasmanLogo";
import NavItem from "./NavItem";

const PublicNavBar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav className="bg-zinc-800 h-[50px] border-b border-zinc-400">
      <div className="flex justify-between items-center text-zinc-400 text-md mx-8 h-full">
        <div className="flex items-center h-full gap-8">
          <span className="flex items-center">
            <TasmanLogo className="h-[50px] w-auto" />
            <span className="text-white italic -ml-3 text-xl sm:hidden">
              Tasman
            </span>
          </span>
          <div className="space-x-6">
            <NavItem to="/courses" label="Study" currentPath={path} />
            <NavItem to="/research" label="Research" currentPath={path} />
            <NavItem to="/department" label="Faculties" currentPath={path} />
            <NavItem to="/about" label="About Us" currentPath={path} />
          </div>
        </div>

        <div className="space-x-4">
          <Link to="/register" className="hover:text-white">
            Register
          </Link>
          <span>or</span>
          <Link to="/log-in" className="hover:text-white">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavBar;

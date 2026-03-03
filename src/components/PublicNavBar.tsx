import { Link, useLocation, useNavigate } from "react-router-dom";
import TasmanLogo from "./TasmanLogo";
import NavItem from "./NavItem";

const PublicNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav className="bg-zinc-800 h-[50px] border-b border-zinc-400">
      <div className="flex justify-between items-center text-zinc-400 text-md mx-8 h-full">
        <div className="flex items-center h-full gap-8">
          <span className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="group relative inline-flex items-center justify-center"
            >
              <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-sky-500/35 blur-lg opacity-0 scale-75 transition-transform duration-300 group-hover:opacity-100 group-hover:scale-100" />
              <TasmanLogo className="h-[50px] w-auto cursor-pointer origin-center transition-transform duration-300 ease-out group-hover:scale-110" />
            </button>
            <span className="text-white italic -ml-3 text-xl md:hidden">
              Tasman
            </span>
          </span>
          <div className="space-x-6 max-md:hidden">
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

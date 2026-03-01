import { Link } from "react-router-dom";

const NavItem = ({
  to,
  label,
  currentPath,
}: {
  to: string;
  label: string;
  currentPath: string;
}) => {
  const isActive = currentPath.startsWith(to);

  return (
    <Link
      to={to}
      className={`relative inline-flex items-center h-[50px] px-1 ${
        isActive ? "text-white" : "text-zinc-400 hover:text-white"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-sm" />
      )}
    </Link>
  );
};

export default NavItem;

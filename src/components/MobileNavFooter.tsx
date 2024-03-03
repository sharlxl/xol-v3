import { Link } from "@tanstack/react-router";
import { ROUTES } from "../utils/const";

interface NavButtonProps {
  route: string;
  icon: string;
}

const MobileNavFooter = () => {
  const NAVBAR = [
    { route: ROUTES.HOME, icon: "home" },
    { route: ROUTES.MYLIST, icon: "my list" },
    { route: ROUTES.PROFILE, icon: "profile" },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 w-full h-10 flex flex-row gap-1 justify-around items-center">
      {NAVBAR.map((item, index) => {
        return (
          <NavButton
            key={`${item.route}${index}`}
            route={item.route}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default MobileNavFooter;

const NavButton = ({ route, icon }: NavButtonProps) => {
  return (
    <Link
      to={route}
      className="flex flex-1 h-full justify-around items-center [&.active]:bg-primaryAccent [&.active]:bg-opacity-10"
    >
      <p>{icon}</p>
    </Link>
  );
};

import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import MobileNavFooter from "../components/MobileNavFooter";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <MobileNavFooter />
      {/* <MobileView></MobileView> */}
    </div>
  );
}

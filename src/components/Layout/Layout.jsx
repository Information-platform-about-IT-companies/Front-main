import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>Это хедер</div>
      <Outlet />
      <div>Это футер</div>
    </>
  );
}

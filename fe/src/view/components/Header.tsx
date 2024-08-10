import { Outlet } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className="bg-[#b01010]">
        <h1 className=" text-white p-8 text-lg font-bold ">Santo Antonio - NPS</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </header>
  );
}

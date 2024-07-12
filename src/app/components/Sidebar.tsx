import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import SidebarItem from "./SidebarItem";

const links = [
  {
    tag: "rest-todos",
    icon: <CiBookmarkCheck size={30} />,
    title: "REST Todos",
    href: "/dashboard/rest-todos",
  },
  {
    tag: "testdash",
    icon: <CiLogout size={30} />,
    title: "Test",
    href: "/dashboard/testdash",
  },
];

const Sidebar = () => {
  return (
    <>
      {/* TODO: src/components <Sidebar /> */}
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            {/* TODO: Next/Link hacia dashboard */}
            <Link href="/dashboard/rest-todos" title="home">
              {/* Next/Image */}
              <p className="text-xl font-bold">Logo</p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            {/* Next/Image */}
            <Image
              src="https://images.pexels.com/photos/8029708/pexels-photo-8029708.jpeg"
              alt="profile"
              className="m-auto h-auto w-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={100}
              height={100}
              priority={true}
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Cynthia J. Watts
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {/* TODO: src/components <SidebarItem /> */}
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
            {links.map((link) => (
              <SidebarItem key={link.title} {...link} />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

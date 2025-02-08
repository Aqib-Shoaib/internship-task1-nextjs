"use client";

import { menuItems } from "@/app/data/main";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SubNav() {
  const pathname = usePathname();
  const activeNav = menuItems.find((item) =>
    pathname.includes(`/nav/${item.path}`)
  );

  if (!activeNav) return null;

  const activeSubNav = activeNav.subNav.find((item) =>
    pathname.includes(`/nav/${activeNav.path}/${item.path}`)
  );

  return (
    <div className='flex flex-col justify-between p-2'>
      <div>
        <h2 className='font-medium capitalize text-base text-sub-heading'>
          {activeNav.title}
        </h2>
        <nav className='flex flex-col gap-1 items-start p-3'>
          {activeNav.subNav.map((sub) => (
            <Link
              key={sub.path}
              href={`/nav/${activeNav.path}/${sub.path}`}
              className={`capitalize font-medium text-sm leading-7 hover:text-sub-nav-active text-left transition-all p-1 rounded-sm  ${
                activeSubNav?.path === sub.path
                  ? "text-sub-nav-active"
                  : "text-sub-nav"
              }`}
            >
              {sub.title}
            </Link>
          ))}
        </nav>
      </div>

      <div>
        {/* name and email of logged in person */}
        <p className='text-primary font-semibold text-sm'>Aqib</p>
        <p className='text-tertiary text-sm'>aqibibnamjid@gmail.com</p>
      </div>
    </div>
  );
}

export default SubNav;

import Link from "next/link";
import { menuItems } from "../../data/main";
import Image from "next/image";

function Nav() {
  return (
    <div className='flex flex-col justify-between border-r-[1px] border-gray-100 p-1'>
      {/* icons nav */}
      <nav className='flex flex-col gap-1 items-center'>
        {menuItems.map((icon, index) => (
          <div
            key={index}
            className='p-2 rounded-md cursor-pointer hover:bg-gray-300 transition-all'
          >
            <Link href={`/nav/${icon.path}/${icon.subNav[0].path}`}>
              <Image
                src={icon.icon}
                alt='just some icon'
                width={40}
                height={40}
              />
            </Link>
          </div>
        ))}
      </nav>

      <div>
        <Image
          src='/Avatar.svg'
          alt='avatar of logged in person'
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}

export default Nav;

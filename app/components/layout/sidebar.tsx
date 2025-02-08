import Image from "next/image";
import Nav from "./Nav";
import SubNav from "./SubNav";

function Sidebar() {
  return (
    <div className='h-screen p-2 border-r-[1px] border-gray-100'>
      {/* logo */}
      <div>
        <Image width={200} height={200} src='/logo.png' alt='company logo' />
      </div>

      {/* ...rest */}
      <div className='flex h-full'>
        <Nav />
        <SubNav />
      </div>
    </div>
  );
}

export default Sidebar;

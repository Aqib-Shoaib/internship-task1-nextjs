import Image from "next/image";

function MainHeader() {
  return (
    <div className='flex justify-between items-center mx-2 py-3'>
      <div className='flex gap-2 items-center'>
        <Image
          src='/header/featured.png'
          alt='featured icon'
          width={40}
          height={40}
        />
        <h2 className='capitalize text-primary font-semibold text-xl'>Staff</h2>
      </div>

      <div className='flex items-center gap-5'>
        {/* search bar */}
        <div className='flex shadow-md bg-white px-2 py-1 items-center rounded-md gap-2 w-80'>
          <Image
            width={20}
            height={20}
            src='/header/search2.png'
            alt='search icon number two'
          />
          <input
            className='bg-transparent w-full outline-none text-tertiary capitalize'
            type='text'
            placeholder='Search by email, name or phone'
          />
        </div>

        {/* active btn */}
        <button className='flex items-center gap-2 text-tertiary bg-white shadow-md rounded-md px-2 py-1'>
          <span>
            <Image
              width={20}
              height={20}
              src='/header/rounded-sq.png'
              alt='rounded sqaure image icon'
            />
          </span>
          <span>Active</span>
        </button>

        {/* add btn */}
        <button className='flex items-center gap-2 bg-[#993AE2] text-white rounded-md px-2 py-1'>
          <span>
            <Image
              width={20}
              height={20}
              src='/header/plus.png'
              alt='plus icon'
            />
          </span>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default MainHeader;

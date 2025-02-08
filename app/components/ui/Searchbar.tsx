import Image from "next/image";

function Searchbar() {
  return (
    <div className='flex gap-2 bg-gray-300 rounded-full items-center p-2 mx-2'>
      <Image
        src='/appbar/search1.png'
        alt='search icon lens'
        width={20}
        height={20}
      />
      <input
        className='bg-transparent capitalize outline-none'
        type='text'
        placeholder='search'
      />
      <Image
        className='bg-gray-400 rounded-xl p-1'
        src='/appbar/Shortcut.png'
        alt='shortcuts for search icon'
        width={30}
        height={30}
      />
    </div>
  );
}

export default Searchbar;

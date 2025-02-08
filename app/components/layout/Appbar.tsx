import Image from "next/image";
import DailyUpdate from "../ui/DailyUpdate";
import Searchbar from "../ui/Searchbar";

function Appbar() {
  return (
    <div className='flex justify-between p-4'>
      {/* greetings */}
      <div className='flex text-primary text-xl gap-1'>
        <h2 className='font-bold'>Good Morning,</h2>
        <p>Aqib</p>
      </div>

      <div className='flex gap-2 items-center'>
        <DailyUpdate />
        <Searchbar />

        {/* notification icon div */}
        <div className='p-2 rounded-full shadow-md mx-2'>
          <Image
            src='/appbar/notification.png'
            alt='notification icon'
            width={20}
            height={20}
          />
        </div>

        {/* avatar box */}
        <div>
          <Image src='/Avatar.svg' alt='avatar image' width={30} height={30} />
        </div>
      </div>
    </div>
  );
}

export default Appbar;

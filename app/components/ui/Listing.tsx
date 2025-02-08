import MenuIcon from "./MenuIcon";
import Userjoining from "./Userjoining";
import UserProfile from "./UserProfile";
import UserStatus from "./UserStatus";
import UserType from "./UserType";

interface User {
  borderColor: string;
  id: number;
  name: string;
  email: string;
  avatar: string;
  active: boolean;
  joinedAt: string;
  type: string;
  // Add other properties of the user object here
}

interface ListingProps {
  data: User[];
}

function Listing({ data }: ListingProps) {
  return (
    <div className='p-5'>
      <div className='grid grid-cols-12 text-tertiary gap-4'>
        <p className='col-span-6 pl-4'>Users</p>
        <p className='col-span-1'>Status</p>
        <p className='col-span-2'>Joined At</p>
        <p className='col-span-2'>Type</p>
        <p className='col-span-1'></p>
      </div>

      {/* actual listing */}
      <div className=' bg-white '>
        {data.map((user, ind) => (
          <div
            className='grid grid-cols-12 border-[0.5px] border-gray-100 gap-4 items-center p-1 py-2'
            key={ind}
            style={{
              borderLeft: `2px solid ${user.borderColor}`,
            }}
          >
            <UserProfile user={user} />
            <UserStatus user={user} />
            <Userjoining user={user} />
            <UserType user={user} />
            <MenuIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;

/* eslint-disable react/prop-types */
function UserType({ user }) {
  return (
    <span className='col-span-2 text-[#344054] bg-gray-200 text-center rounded-2xl px-2 py-1 w-fit text-sm font-medium'>
      {user.type}
    </span>
  );
}

export default UserType;

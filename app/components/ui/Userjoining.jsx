/* eslint-disable react/prop-types */
function Userjoining({ user }) {
  return (
    <span className='col-span-2 text-sm text-tertiary uppercase font-inter'>
      {user.joinedAt}
    </span>
  );
}

export default Userjoining;

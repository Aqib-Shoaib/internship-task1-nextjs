/* eslint-disable react/prop-types */
function UserStatus({ user }) {
  return (
    <span
      className='col-span-1 capitalize text-center text-sm rounded-xl mr-2 font-inter font-medium'
      style={{
        color: user.active ? "#027A48" : "#B42318",
        backgroundColor: user.active
          ? "rgba(2, 122, 72, 0.2)"
          : "rgba(180, 35, 24, 0.2)",
      }}
    >
      {user.active ? "active" : "inactive"}
    </span>
  );
}

export default UserStatus;

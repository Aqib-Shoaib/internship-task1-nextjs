"use client";

import { useState } from "react";
import Listing from "../ui/Listing";
import MainHeader from "../ui/MainHeader";
import Pagination from "../ui/Pagination";

const data = [
  {
    id: 1,
    name: "Aqib Shoaib",
    email: "aqibibnamjid@gmail.com",
    avatar: "/Avatar.svg",
    active: true,
    joinedAt: "11 Jan, 2025",
    type: "System Admin",
    borderColor: "#C084FC",
  },
  {
    id: 2,
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    avatar: "/Avatar.svg",
    active: true,
    joinedAt: "11 Jan, 2025",
    type: "Nurse Practitioner",
    borderColor: "#4ADE80",
  },
  {
    id: 3,
    name: "John Doe",
    email: "doejogn@gmail.com",
    avatar: "/Avatar.svg",
    active: false,
    joinedAt: "11 Jan, 2025",
    type: "GP",
    borderColor: "#FACC15",
  },
  {
    id: 4,
    name: "Zaire Siphrone",
    email: "siphrone@gmail.com",
    avatar: "/Avatar.svg",
    active: true,
    joinedAt: "11 Jan, 2025",
    type: "Practice Manager",
    borderColor: "#ff66ff",
  },
  {
    id: 5,
    name: "Emma Watson",
    email: "emma@gmail.com",
    avatar: "/Avatar.svg",
    active: true,
    joinedAt: "12 Feb, 2025",
    type: "Nurse Practitioner",
    borderColor: "#4ADE80",
  },
  {
    id: 6,
    name: "Liam Neeson",
    email: "liam@gmail.com",
    avatar: "/Avatar.svg",
    active: false,
    joinedAt: "13 Mar, 2025",
    type: "GP",
    borderColor: "#FACC15",
  },
  {
    id: 7,
    name: "Sophia Brown",
    email: "sophia@gmail.com",
    avatar: "/Avatar.svg",
    active: true,
    joinedAt: "14 Apr, 2025",
    type: "Practice Manager",
    borderColor: "#ff66ff",
  },
  {
    id: 8,
    name: "James Smith",
    email: "james@gmail.com",
    avatar: "/Avatar.svg",
    active: true,
    joinedAt: "15 May, 2025",
    type: "System Admin",
    borderColor: "#C084FC",
  },
  {
    id: 9,
    name: "Isabella Johnson",
    email: "isabella@gmail.com",
    avatar: "/Avatar.svg",
    active: false,
    joinedAt: "16 Jun, 2025",
    type: "Nurse Practitioner",
    borderColor: "#4ADE80",
  },
  {
    id: 10,
    name: "Michael Brown",
    email: "michael@gmail.com",
    avatar: "/Avatar.svg",
    active: true,
    joinedAt: "17 Jul, 2025",
    type: "GP",
    borderColor: "#FACC15",
  },
];

function Main() {
  const [range, setRange] = useState({ start: 0, end: 5 });

  function incrementRange() {
    if (range.end >= data.length) {
      return;
    }
    setRange((rr) => ({ start: rr.start + 5, end: rr.end + 5 }));
  }
  function decrementRange() {
    if (range.start === 0) {
      return;
    }
    setRange((rr) => ({ start: rr.start - 5, end: rr.end - 5 }));
  }

  const actualData = data.slice(range.start, range.end);
  const pages = data.length / 5;
  const pageNumber = range.start === 0 ? 1 : 2;

  return (
    <div className='bg-gray-100 h-screen'>
      <MainHeader />
      <Listing data={actualData} />
      <Pagination
        incrementRange={incrementRange}
        decrementRange={decrementRange}
        pages={pages}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default Main;

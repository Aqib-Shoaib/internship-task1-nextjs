"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function MenuIcon() {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef();

  function toggleActive() {
    setActive((vl) => !vl);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className='relative inline-block'>
      <span
        onClick={toggleActive}
        className={`cursor-pointer rounded-lg w-fit transition-all ${
          active ? "bg-gray-400 text-primary" : "bg-transparent"
        } hover:bg-gray-400`}
      >
        <Image height={15} width={15} src='/vector.svg' alt='menu icon' />
      </span>
      {active && <Dropdown setActive={setActive} />}
    </div>
  );
}

export default MenuIcon;

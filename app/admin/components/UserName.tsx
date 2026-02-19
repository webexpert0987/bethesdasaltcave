"use client";

import { useEffect, useState } from "react";

export default function UserName() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    console.log("Retrieved userName from localStorage:", storedName);
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <span className="font-medium text-gray-700">
      {name || "User"}
    </span>
  );
}
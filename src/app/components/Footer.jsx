import React from "react";

export default function Footer({ name }) {
  return (
    <footer className="py-8 px-4 text-center text-gray-500">
      <p>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}

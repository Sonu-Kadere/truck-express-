import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white flex items-center justify-between px-4 py-2">
      <div className="text-lg font-bold">
        TRUCK EXPRESS SERVICES PVT. LTD.
      </div>
      <div className="space-x-4">
        <select className="bg-purple-600 rounded px-2 py-1">
          <option>MASTERS</option>
        </select>
        <select className="bg-purple-600 rounded px-2 py-1">
          <option>TRANSACTIONS</option>
        </select>
        <select className="bg-purple-600 rounded px-2 py-1">
          <option>REPORT</option>
        </select>
        <span className="bg-purple-800 rounded px-3 py-1">Admin</span>
      </div>
    </nav>
  );
}

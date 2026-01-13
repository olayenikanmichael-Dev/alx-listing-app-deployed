import React from "react";


const Header: React.FC = () => {
return (
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-4">
<div className="flex items-center space-x-4">
<div className="text-2xl font-bold">ALX Listings</div>
<nav className="hidden md:flex items-center space-x-3 text-sm">
<a href="#" className="hover:underline">Rooms</a>
<a href="#" className="hover:underline">Villas</a>
<a href="#" className="hover:underline">Chalets</a>
<a href="#" className="hover:underline">Countryside</a>
</nav>
</div>


<div className="flex items-center space-x-3">
<div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1">
<input
aria-label="Search properties"
className="bg-transparent outline-none text-sm w-40 sm:w-64"
placeholder="Search city, country..."
/>
</div>
<div className="flex items-center space-x-2">
<button className="text-sm">Sign in</button>
<button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">Sign up</button>
</div>
</div>
</div>
</div>
</header>
);
};


export default Header;
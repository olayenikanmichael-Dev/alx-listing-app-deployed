import React from "react";


const Footer: React.FC = () => {
return (
<footer className="bg-gray-50 border-t mt-12">
<div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600">
<div className="flex flex-col md:flex-row justify-between">
<div>
<div className="font-semibold">ALX Listings</div>
<div>Find and book luxury properties worldwide</div>
</div>


<div className="mt-4 md:mt-0 grid grid-cols-2 gap-4 sm:grid-cols-3">
<div>
<div className="font-medium">Company</div>
<ul>
<li>About</li>
<li>Careers</li>
</ul>
</div>
<div>
<div className="font-medium">Support</div>
<ul>
<li>Help Center</li>
<li>Contact</li>
</ul>
</div>
<div>
<div className="font-medium">Legal</div>
<ul>
<li>Terms</li>
<li>Privacy</li>
</ul>
</div>
</div>
</div>


<div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} ALX Listings. All rights reserved.</div>
</div>
</footer>
);
};


export default Footer;
import React from "react";


interface PillProps {
label: string;
active?: boolean;
onClick?: () => void;
}


const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
return (
<button
onClick={onClick}
className={`px-3 py-1 rounded-full text-sm border transition-all whitespace-nowrap ${
active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700 border-gray-200"
}`}
>
{label}
</button>
);
};


export default Pill;
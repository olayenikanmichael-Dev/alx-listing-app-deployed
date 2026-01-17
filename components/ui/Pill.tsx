interface PillProps {
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
        px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200
        ${isActive
                ? 'bg-red-500 text-white border-red-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
            }
        hover:shadow-sm
      `}
        >
            {label}
        </button>
    );
};

export default Pill;
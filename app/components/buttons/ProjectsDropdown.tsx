'use client';

interface DropdownProps {
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
    children
}) => {

    return (     
        <div className="
            absolute
            block
            rounded-xl
            shadow-lg
            w-[40vw]
            left-11
            bg-white
            overflow-hidden
            top-10
            text-sm
        ">
            <div className="flex flex-col cursor-pointer">
                {children}
            </div>
        </div>
    )
}

export default Dropdown;
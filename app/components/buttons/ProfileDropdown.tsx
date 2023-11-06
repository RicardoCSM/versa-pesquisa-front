'use client';

interface ProfileDropdownProps {
    children: React.ReactNode;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
    children
}) => {

    return (     
        <div className="
            absolute
            block
            rounded-xl
            shadow-lg
            w-[40vw]
            md:w-1/4
            bg-white
            overflow-hidden
            right-0
            top-11
            text-sm
        ">
            <div className="flex flex-col cursor-pointer">
                {children}
            </div>
        </div>
    )
}

export default ProfileDropdown;
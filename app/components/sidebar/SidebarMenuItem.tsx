'use client';

interface SidebarMenuItemProps {
    onClick?: () => void
    activeSidebar: string
    label: string
    icon?: React.ReactElement
    small?: boolean
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
    label, icon, onClick, activeSidebar, small
  }) => {
    const isActive = activeSidebar === label.toLowerCase();
    return (
        <div className={`border max-w-[300px] xl:m-0 m-auto border-[#1565C0] rounded-lg ${isActive ? 'bg-[#D6E3FF]' : ''} hover:shadow-md`}>
            <div 
                onClick={onClick}
                aria-label={label} 
                className={`cursor-pointer flex items-center ${ small ? 'p-1' : 'p-2' } text-gray-900 rounded-lg group`}>
                {icon}
                <span className="m-auto">{label}</span>
            </div>
        </div>
    )
}

export default SidebarMenuItem;
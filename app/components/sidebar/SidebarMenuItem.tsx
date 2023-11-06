'use client';

interface SidebarMenuItemProps {
    onClick?: () => void
    activeSidebar: string
    label: string
    icon: React.ReactElement
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
    label, icon, onClick, activeSidebar
  }) => {
    const isActive = activeSidebar === label.toLowerCase();
    return (
        <li className={`border max-w-[300px] lg:m-0 m-auto border-[#1565C0] rounded-lg ${isActive ? 'bg-[#D6E3FF]' : ''} hover:shadow-md`}>
            <div 
                onClick={onClick}
                aria-label={label} 
                className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg group">
                {icon}
                <span className="m-auto">{label}</span>
            </div>
        </li>
    )
}

export default SidebarMenuItem;
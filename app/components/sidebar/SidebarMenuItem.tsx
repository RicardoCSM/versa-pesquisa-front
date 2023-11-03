'use client';

interface SidebarMenuItemProps {
    label: string
    icon: React.ReactElement
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
    label, icon
  }) => {
    return (
        <li className="border max-w-[300px] lg:m-0 m-auto border-[#1565C0] rounded-lg hover:bg-[#D6E3FF]">
            <a href="#" aria-label={label} className="flex items-center p-2 text-gray-900 rounded-lg  group">
                {icon}
                <span className="m-auto">{label}</span>
            </a>
        </li>
    )
}

export default SidebarMenuItem;
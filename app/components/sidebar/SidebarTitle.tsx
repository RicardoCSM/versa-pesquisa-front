'use client';

interface SidebarTitleProps {
    label: string
    bigger?: boolean
}

const SidebarTitle: React.FC<SidebarTitleProps> = ({
    label, bigger
}) => {
    return (
        <div
        aria-label={label}
        className={`flex w-full ${bigger ? 'text-2xl p-3' : 'text-lg p-1'} justify-center`}>
            <div>
            {label}
            </div>
        </div>
    )
}

export default SidebarTitle;
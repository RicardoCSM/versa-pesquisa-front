'use client';

interface TitleProps {
  title: string
}

const Title: React.FC<TitleProps> = ({ 
  title
}) => {
  return ( 
    <div className="text-center p-3 w-full border-b border-gray-500">
      <div className="text-4xl">
        {title}
      </div>
    </div>
   );
}
 
export default Title;
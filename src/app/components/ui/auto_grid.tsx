import React, {ReactNode} from 'react' 

export const AutoGrid: React.FC<{ className?: string, children: ReactNode, cols?: number|string, gap?: number|string }> = ({ className = '', children, cols = 3, gap = 2 }) => {
  const gridClasses = cols == 'auto' 
    ? 'flex flex-wrap gap-2' 
    : `grid grid-cols-${cols} gap-${gap}`;
  return (
    <div className={`${gridClasses} ${className}`}>
      {children}
    </div>
  );
};

export default AutoGrid;
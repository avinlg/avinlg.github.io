import React, {ReactNode} from 'react' 

export const AutoGrid: React.FC<{ className?: string, children: ReactNode, cols?: number|string }> = ({ className = '', children, cols = 3 }) => {
  const gridClasses = cols == 'auto' 
    ? 'flex flex-wrap gap-2' 
    : `grid grid-cols-${cols} gap-2`;
  return (
    <div className={`${gridClasses} ${className}`}>
      {children}
    </div>
  );
};

export default AutoGrid;
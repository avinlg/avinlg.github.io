import React, {ReactNode} from 'react'

interface ProgressProps {
  className?: string,
  children: ReactNode,
  progress: number,
  scaleColorClass?: string,
  progressColorClass?: string,
}

const CircularProgressBar: React.FC<ProgressProps> = ({
  className,
  children,
  progress,
  scaleColorClass = 'text-gray-200',
  progressColorClass = 'text-gray-800'
}) => {
  return (
    <div className={`relative w-40 h-40 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className={`${scaleColorClass} stroke-current`}
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* Progress circle */}
        <circle
          className={`${progressColorClass} progress-ring__circle stroke-current`}
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2" 
          strokeDashoffset={`calc(251.2 - (251.2 * ${progress}) / 100)`}
        ></circle>
        
        {/* Center text */}
        <foreignObject  x="0" y="0" className='w-full h-full'>
          {children}
        </foreignObject >
      </svg>
    </div>
  );
  
}

export default CircularProgressBar;
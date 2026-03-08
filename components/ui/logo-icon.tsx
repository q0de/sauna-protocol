interface LogoIconProps {
  className?: string
  size?: number
}

export function LogoIcon({ className = "", size = 32 }: LogoIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left petal */}
      <path 
        d="M12 36C8 28 10 18 16 12C18 16 19 22 18 28C17 32 14 35 12 36Z" 
        fill="currentColor"
      />
      {/* Center petal (larger) */}
      <path 
        d="M24 40C18 30 20 16 28 8C30 14 31 22 30 30C29 34 26 38 24 40Z" 
        fill="currentColor"
      />
      {/* Right petal */}
      <path 
        d="M36 36C40 28 38 18 32 12C30 16 29 22 30 28C31 32 34 35 36 36Z" 
        fill="currentColor"
      />
    </svg>
  )
}

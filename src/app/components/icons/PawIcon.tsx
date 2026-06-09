interface PawIconProps {
  className?: string;
}

export function PawIcon({ className = "w-6 h-6" }: PawIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main pad */}
      <ellipse cx="12" cy="16" rx="4" ry="3.5" />

      {/* Toe pads */}
      <ellipse cx="7.5" cy="10" rx="2" ry="2.8" />
      <ellipse cx="12" cy="8.5" rx="2" ry="2.8" />
      <ellipse cx="16.5" cy="10" rx="2" ry="2.8" />
      <ellipse cx="9.5" cy="12.5" rx="1.8" ry="2.5" />
      <ellipse cx="14.5" cy="12.5" rx="1.8" ry="2.5" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo ip eng pro final-2-reverse (1).png"
        alt="IP Engineering Pro Logo"
        className="h-12 w-auto object-contain"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white leading-tight">IP Engineering Pro</span>
        <span className="text-xs font-medium text-ipeng-light leading-tight tracking-wide">Edge to Cloud Solutions</span>
      </div>
    </div>
  );
}

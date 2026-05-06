interface ProviderAvatarProps {
  photoUrl: string;
  name: string;
  className?: string;
}

export function ProviderAvatar({ photoUrl, name, className = "" }: ProviderAvatarProps) {
  if (photoUrl) {
    return <img src={photoUrl} alt={name} className={`w-full h-full object-cover ${className}`} />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-primary/10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-1/2 h-1/2 text-primary/40">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    </div>
  );
}

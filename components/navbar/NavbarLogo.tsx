interface NavbarLogoProps {
  className?: string
}

export const NavbarLogo = ({ className = '' } : NavbarLogoProps) => {
  return (
    <div className={className}>
      <span className="text-4xl tracking-tight text-amber-300 logo-title">IMDB</span>
    </div>
  )
}
import logo from "@/assets/logo.png";

type Props = { size?: number; className?: string; showText?: boolean };

export function Logo({ size = 44, className = "", showText = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="relative shrink-0 rounded-full bg-gradient-luxe shadow-luxe"
        style={{ width: size, height: size }}
      >
        <img
          src={logo}
          alt="Vihari Vindu emblem"
          width={size}
          height={size}
          className="h-full w-full rounded-full object-contain p-0.5"
        />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-gold/30" />
      </div>
      {showText && (
        <div className="leading-tight">
          <div className="font-display text-lg font-bold tracking-wide text-navy">
            VIHARI <span className="text-gradient-gold">VINDU</span>
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Hotel · Restaurant
          </div>
        </div>
      )}
    </div>
  );
}

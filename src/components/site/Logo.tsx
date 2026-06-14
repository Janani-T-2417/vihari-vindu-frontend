import logo from "@/assets/logo.png";

type Props = { size?: number; className?: string; showText?: boolean; variant?: "dark" | "light" };

export function Logo({ size = 44, className = "", showText = true, variant = "dark" }: Props) {
  const isLight = variant === "light";
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
          <div
            className="font-display text-lg font-extrabold"
            style={{ letterSpacing: "1px" }}
          >
            {isLight ? (
              <span style={{ color: "#FFFFFF" }}>
                VIHARI <span style={{ color: "#E6C78B" }}>VINDU</span>
              </span>
            ) : (
              <span className="text-navy">
                VIHARI <span className="text-gradient-gold">VINDU</span>
              </span>
            )}
          </div>
          <div
            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: isLight ? "rgba(255,255,255,0.75)" : undefined }}
          >
            {!isLight && <span className="text-muted-foreground">Hotel · Restaurant</span>}
            {isLight && <span>Hotel · Restaurant</span>}
          </div>
        </div>
      )}
    </div>
  );
}

import { Container } from "@/components/shared/Container"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { FloatingElement } from "@/components/shared/animations/FloatingElement"
import { cn } from "@/lib/utils"

export interface PageHeroProps {
  title: string
  description?: string
  badge?: string
  backgroundImage?: string
  className?: string
}

export function PageHero({ title, description, badge, backgroundImage, className }: PageHeroProps) {
  return (
    <div
      className={cn(
        "py-28 sm:py-36 md:py-44 lg:py-48 min-h-[380px] md:min-h-[440px] flex items-center relative overflow-hidden bg-primary text-white border-b border-border/40",
        backgroundImage && "bg-cover bg-center bg-no-repeat bg-fixed [backface-visibility:hidden] [transform-style:preserve-3d]",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
{backgroundImage && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-0 pointer-events-none" />
      )}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 z-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 z-0 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none transform-gpu" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-start">
          {badge && (
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-xs font-bold tracking-widest text-secondary uppercase mb-4 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              {badge}
            </span>
          )}

          <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] font-medium max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  )
}


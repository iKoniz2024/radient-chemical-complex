import { Container } from "@/components/shared/Container"

export interface PageHeroProps {
  title: string
  description?: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-0"></div>
      
      <Container className="relative z-10">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            {description}
          </p>
        )}
      </Container>
    </div>
  )
}

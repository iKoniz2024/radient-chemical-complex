"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { timelineData } from "@/data/timeline"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useCallback } from "react"
import { TiltCard } from "@/components/shared/animations/TiltCard"

function TimelineItem({ item, idx }: { item: typeof timelineData[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const isEven = idx % 2 === 0
  const showCard = isInView || hasAnimated

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    setHasAnimated(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Center Node */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={showCard
          ? { scale: isHovered ? 1.15 : 1, rotate: 0 }
          : { scale: 0, rotate: -180 }
        }
        transition={{ type: "spring" as const, stiffness: 200, damping: 15 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute left-0 md:left-1/2 w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-md md:-translate-x-1/2 z-10 cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={showCard
            ? { scale: isHovered ? 1.4 : 1 }
            : { scale: 0 }
          }
          transition={{ type: "spring" as const, stiffness: 300, damping: 15, delay: 0.2 }}
          className="w-3 h-3 bg-secondary rounded-full"
        />
      </motion.div>

      {/* Content Box */}
      <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 100 : -100, scale: 0.85 }}
          animate={showCard
            ? { opacity: 1, x: isHovered ? (isEven ? -8 : 8) : 0, scale: isHovered ? 1.02 : 1 }
            : { opacity: 0, x: isEven ? 100 : -100, scale: 0.85 }
          }
          transition={{ type: "spring" as const, stiffness: 120, damping: 15 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <TiltCard tiltAmount={5} scaleAmount={1.01} className="w-full">
            <div className="bg-background p-6 rounded-2xl border border-border shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(217,155,34,0.15)] hover:border-secondary/40 transition-all duration-300 relative group preserve-3d">
              <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-border transform rotate-45 transition-[border-color] duration-300 group-hover:border-secondary/40 ${isEven ? "-left-2 border-b border-l" : "-right-2 border-t border-r"}`} />

              <motion.span
                className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-bold font-montserrat mb-3 relative z-10"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
              >
                {item.year}
              </motion.span>
              <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {item.description}
              </p>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </div>
  )
}

export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <SectionWrapper className="bg-muted/30 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
        >
          <SectionTitle
            title="Our Journey"
            subtitle="From our inception to becoming a global leader in sustainable textile chemicals."
          />
        </motion.div>

        <div ref={sectionRef} className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ type: "spring" as const, stiffness: 60, damping: 20, delay: 0.2 }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 origin-top"
          />

          <div className="flex flex-col gap-16">
            {timelineData.map((item, idx) => (
              <TimelineItem key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

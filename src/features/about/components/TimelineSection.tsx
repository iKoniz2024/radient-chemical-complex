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
        initial={{ scale: 0.6, opacity: 0 }}
        animate={showCard
          ? { scale: isHovered ? 1.12 : 1, opacity: 1 }
          : { scale: 0.6, opacity: 0 }
        }
        transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute left-0 md:left-1/2 w-12 h-12 bg-background border-4 border-secondary rounded-full flex items-center justify-center shadow-md md:-translate-x-1/2 z-10 cursor-pointer transform-gpu"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={showCard
            ? { scale: isHovered ? 1.3 : 1 }
            : { scale: 0 }
          }
          transition={{ type: "spring" as const, stiffness: 300, damping: 20, delay: 0.1 }}
          className="w-2.5 h-2.5 bg-secondary rounded-full"
        />
      </motion.div>

      {/* Content Box */}
      <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 28 : -28 }}
          animate={showCard
            ? { opacity: 1, x: isHovered ? (isEven ? -4 : 4) : 0 }
            : { opacity: 0, x: isEven ? 28 : -28 }
          }
          transition={{ type: "spring" as const, stiffness: 220, damping: 20, mass: 0.75 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="transform-gpu"
        >
          <TiltCard tiltAmount={4} scaleAmount={1.01} className="w-full">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-300 relative group preserve-3d">
              <motion.span
                className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-bold font-montserrat mb-3 relative z-10"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 20 }}
              >
                {item.year}
              </motion.span>
              <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300 relative z-10">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans relative z-10 text-sm md:text-base">
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
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" })

  return (
    <SectionWrapper className="bg-background border-t border-border text-foreground">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.75 }}
          className="transform-gpu"
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
            className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 origin-top"
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

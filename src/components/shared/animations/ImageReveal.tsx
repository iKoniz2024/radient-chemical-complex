"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  width?: number
  height?: number
  fill?: boolean
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  once?: boolean
  priority?: boolean
  sizes?: string
  overlayColor?: string
  enableScale?: boolean
}

const clipPaths = {
  up: {
    hidden: "inset(100% 0 0 0)",
    visible: "inset(0% 0 0 0)",
  },
  down: {
    hidden: "inset(0 0 100% 0)",
    visible: "inset(0% 0 0 0)",
  },
  left: {
    hidden: "inset(0 100% 0 0)",
    visible: "inset(0% 0 0 0)",
  },
  right: {
    hidden: "inset(0 0 0 100%)",
    visible: "inset(0% 0 0 0)",
  },
}

export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  width,
  height,
  fill = false,
  direction = "up",
  delay = 0,
  duration = 0.85,
  once = true,
  priority = false,
  sizes,
  overlayColor = "bg-secondary/20",
  enableScale = true,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const initialClip = clipPaths[direction].hidden
  const animateClip = isInView ? clipPaths[direction].visible : initialClip

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden group", className)}
    >
      <motion.div
        initial={{ clipPath: initialClip }}
        animate={{ clipPath: animateClip }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full h-full relative overflow-hidden"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              enableScale && "group-hover:scale-105",
              imageClassName
            )}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            priority={priority}
            sizes={sizes}
            className={cn(
              "w-full h-auto object-cover transition-transform duration-700 ease-out",
              enableScale && "group-hover:scale-105",
              imageClassName
            )}
          />
        )}

        {/* Optional Ambient Subtle Overlay Glow */}
        {overlayColor && (
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isInView ? 0 : 0.6 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className={cn("absolute inset-0 pointer-events-none", overlayColor)}
          />
        )}
      </motion.div>
    </div>
  )
}

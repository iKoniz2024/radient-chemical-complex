"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string
  imageClassName?: string
  speed?: number // -1 to 1 (negative goes opposite direction of scroll)
}

export function ParallaxImage({
  containerClassName,
  imageClassName,
  speed = 0.5,
  ...imageProps
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate the translate Y value based on speed.
  // speed 0.5 means it will move 50% slower than the scroll.
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const yMapped = useTransform(y, (value) => `calc(${value} * ${speed})`)

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
    >
      <motion.div
        style={{ y: yMapped }}
        className={cn("absolute inset-0 w-full h-[130%] -top-[15%]", imageClassName)}
      >
        <Image {...imageProps} className="object-cover" fill />
      </motion.div>
    </div>
  )
}

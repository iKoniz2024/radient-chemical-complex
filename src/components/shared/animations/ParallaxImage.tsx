"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string
  imageClassName?: string
  speed?: number
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

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const yMapped = useTransform(y, (value) => `calc(${value} * ${speed})`)

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
    >
      <motion.div
        style={{ y: yMapped }}
        className={cn("absolute inset-0 w-full h-[130%] top-[15%]", imageClassName)}
      >
        <Image {...imageProps} alt={imageProps.alt ?? ""} className="object-cover" fill />
      </motion.div>
    </div>
  )
}

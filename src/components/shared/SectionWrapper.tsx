import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

export function SectionWrapper({
  className,
  as: Component = "section",
  ...props
}: SectionWrapperProps) {
  return (
    <Component
      className={cn(
        "py-16 md:py-20 lg:py-32",
        className
      )}
      {...props}
    />
  )
}

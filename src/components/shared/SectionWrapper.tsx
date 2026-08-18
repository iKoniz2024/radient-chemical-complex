import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, as: Component = "section", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "py-16 md:py-20 lg:py-32",
          className
        )}
        {...props}
      />
    )
  }
)

SectionWrapper.displayName = "SectionWrapper"
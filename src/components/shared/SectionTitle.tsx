import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  alignment?: "left" | "center"
}

export function SectionTitle({
  title,
  subtitle,
  alignment = "center",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12",
        alignment === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      <h2 className="font-montserrat text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[85%] text-lg text-muted-foreground sm:max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

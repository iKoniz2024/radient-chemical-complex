import { ReactNode } from "react"
import { PageTransition } from "@/components/shared/animations/PageTransition"

export default function Template({ children }: { children: ReactNode }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  )
}

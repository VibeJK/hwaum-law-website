import HeroSection from "@/components/hero-section"
import ServiceOverview from "@/components/service-overview"
import ExpertiseSection from "@/components/expertise-section"
import PenaltyTypes from "@/components/penalty-types"
import ProcessFlowchart from "@/components/process-flowchart"
import StatisticsSection from "@/components/statistics-section"
import ContactSection from "@/components/contact-section"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <HeroSection />
      <ServiceOverview />
      <ExpertiseSection />
      <PenaltyTypes />
      <ProcessFlowchart />
      <StatisticsSection />
      <ContactSection />
    </main>
  )
}

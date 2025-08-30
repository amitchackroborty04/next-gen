import { SoftwareMarquee } from "./SoftwareMarquee";



export default function Software() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Software We Are Specialists In</h1>
          <p className="text-muted-foreground text-lg">
            Professional expertise across industry-leading creative software
          </p>
        </div>
        <SoftwareMarquee />
      </div>
    </div>
  )
}

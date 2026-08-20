import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import { productsData } from "@/data/products"
import { categoriesData } from "@/data/categories"
import { getProductImageUrl } from "@/data/productImages"
import { 
  ArrowLeft, 
  CheckCircle2, 
  Mail, 
  FlaskConical, 
  ShieldCheck, 
  Leaf, 
  Layers, 
  Sparkles, 
  Package, 
  Clock, 
  Droplet,
  ChevronRight,
  ArrowRight,
  Phone
} from "lucide-react"
import { Metadata } from "next"

const categoryBannerMap: Record<string, string> = {
  pretreatment: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1920",
  dyeing: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1920",
  finishing: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1920",
  "denim-washing": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1920",
  psf: "https://images.unsplash.com/photo-1528255915607-9012fda0f838?auto=format&fit=crop&q=80&w=1920",
  others: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=1920",
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = productsData.find((p) => p.id === id)
  
  if (!product) {
    return { title: 'Product Not Found' }
  }
  
  return {
    title: `${product.name} | Radiant Chemical Complex`,
    description: product.properties.substring(0, 160) + '...',
  }
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = productsData.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const category = categoriesData.find((c) => c.id === product.categoryId)
  const productImageUrl = getProductImageUrl(product.id, product.categoryId)
  const bannerImage = productImageUrl || categoryBannerMap[product.categoryId] || categoryBannerMap.others

  // Related products from the same category (excluding current)
  const relatedProducts = productsData
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3)

  // Determine physical state and ionic nature hints based on naming
  const isFlake = product.name.toLowerCase().includes("flake")
  const isPowder = product.name.toLowerCase().includes("powder") || product.properties.toLowerCase().includes("powder")
  const isLiquid = !isFlake && !isPowder
  const physicalForm = isFlake ? "Flakes / Solid" : isPowder ? "Powder" : "Liquid"

  const isCationic = product.name.toLowerCase().includes("cationic")
  const isAnionic = product.name.toLowerCase().includes("anionic")
  const isNonIonic = product.name.toLowerCase().includes("non-ionic") || product.properties.toLowerCase().includes("non-ionic")
  const ionicNature = isCationic ? "Cationic" : isAnionic ? "Anionic" : isNonIonic ? "Non-Ionic" : "Non-Ionic / Special Blend"

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Header with Smooth Fixed Parallax Banner */}
      <div 
        className="relative py-24 sm:py-28 md:py-32 min-h-[360px] flex items-center text-white bg-cover bg-center bg-no-repeat bg-fixed [backface-visibility:hidden] [transform-style:preserve-3d] overflow-hidden bg-primary"
        style={{ backgroundImage: `url('${bannerImage}')` }}
      >
        {/* Soft bottom gradient to preserve original image vividness while ensuring crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1930]/95 via-[#0A1930]/40 to-transparent z-0 pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/80 mb-6 font-medium">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-secondary transition-colors">Products</Link>
            {category && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href={`/products?category=${category.id}`} className="hover:text-secondary transition-colors">
                  {category.title}
                </Link>
              </>
            )}
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-secondary font-bold truncate max-w-xs">{product.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {category && (
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-secondary text-[#0A1930] text-xs font-bold uppercase tracking-wider shadow-md">
                    <category.icon className="w-3.5 h-3.5 mr-1.5" />
                    {category.title}
                  </span>
                )}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs text-white text-xs font-semibold border border-white/20 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-secondary" />
                  Premium Grade
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  <Leaf className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  Eco-Optimized
                </span>
              </div>

              <h1 className="font-montserrat text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-white font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                High-performance textile auxiliary formulation engineered for consistency, high efficiency, and sustainable production.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button asChild size="lg" className="bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/20">
                <Link href={`/contact?type=sample&product=${encodeURIComponent(product.name)}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Request Sample
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-black/30 text-white border-white/20 hover:bg-white hover:text-[#0A1930] backdrop-blur-xs">
                <Link href="/products">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Products
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Product Content Section */}
      <SectionWrapper className="bg-muted/30 py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Product Visual Showcase & Quick Badges */}
              <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-primary/5">
                  <Image
                    src={productImageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-border/80 shadow-md">
                      <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Product Category</p>
                      <p className="text-sm font-bold text-foreground">{category?.title ?? "Textile Auxiliary"}</p>
                    </div>

                    <div className="flex gap-2">
                      <span className="bg-primary/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10">
                        ZDHC Compliant
                      </span>
                      <span className="bg-secondary/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-xl">
                        OEKO-TEX Compatible
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Technical Matrix */}
                <div className="p-6 md:p-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border bg-card">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-secondary" /> Physical Form
                    </span>
                    <span className="text-sm font-bold text-foreground">{physicalForm}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-secondary" /> Ionic Nature
                    </span>
                    <span className="text-sm font-bold text-foreground">{ionicNature}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-secondary" /> Solubility
                    </span>
                    <span className="text-sm font-bold text-foreground">Water Miscible</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-secondary" /> Shelf Life
                    </span>
                    <span className="text-sm font-bold text-foreground">12 Months</span>
                  </div>
                </div>
              </div>

              {/* Properties & Functional Uses */}
              <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-montserrat text-2xl font-bold text-foreground">Properties & Application</h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">Comprehensive functional profile and chemical mechanism</p>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none text-foreground/80 leading-relaxed text-base md:text-lg">
                  <p className="whitespace-pre-line leading-relaxed mb-6">
                    {product.properties}
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="font-montserrat text-lg font-bold text-foreground mb-4">Key Industrial Advantages</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Optimized formulation for lower chemical consumption",
                      "Improves fabric handle, uniformity and shade depth",
                      "High temperature stability across diverse processing lines",
                      "Eco-friendly profile reducing effluent wastewater load",
                      "Easy dilution and flawless batch-to-batch repeatability",
                      "Full compatibility with modern automatic dosing systems"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 bg-muted/40 p-3.5 rounded-2xl border border-border/50">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/90 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compatible Fibers & Applications */}
              <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                <h3 className="font-montserrat text-lg font-bold text-foreground mb-4">Recommended Substrates & Fibers</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["100% Cotton", "Polyester (PET)", "Denim & Indigo Fabrics", "Cotton / Poly Blends", "Viscose & Rayon", "Wool & Silk", "Synthetic PSF Fibers"].map((fiber, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-xl bg-secondary/10 text-secondary border border-secondary/20 font-semibold text-xs tracking-wide">
                      {fiber}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Sample Request Card */}
              <div className="bg-[#0A1930] text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden sticky top-24 border border-white/10">
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                  <Package className="w-3.5 h-3.5" /> Free Sample Trial
                </div>

                <h3 className="font-montserrat text-2xl font-bold mb-3 text-white">
                  Request a Lab Sample
                </h3>
                
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Evaluate <strong className="text-secondary">{product.name}</strong> on your own production machinery. We provide complimentary test samples and technical support.
                </p>

                <Button asChild size="lg" className="w-full bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/30 mb-4 text-sm">
                  <Link href={`/contact?type=sample&product=${encodeURIComponent(product.name)}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Request Sample Now
                  </Link>
                </Button>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-4 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-secondary" /> Quality Certified
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-secondary" /> Fast 48h Dispatch
                  </span>
                </div>

                {/* Custom R&D Box inside sidebar */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-montserrat text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-secondary" /> Need Custom Modification?
                  </h4>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Our R&D team can adjust active concentration, viscosity, and foaming properties to your exact mill specs.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-white/5 border-white/20 text-white hover:bg-white hover:text-[#0A1930]">
                    <Link href="/customization">
                      Custom R&D Formulation <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>

                {/* Direct Contact info */}
                <div className="mt-6 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col gap-2">
                  <p className="font-semibold text-slate-300 uppercase tracking-wider text-xs">Technical Inquiries</p>
                  <a href="tel:+8801833183921" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Phone className="w-3.5 h-3.5 text-secondary" /> +880 1833-183921
                  </a>
                  <a href="mailto:info@radiantchembd.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Mail className="w-3.5 h-3.5 text-secondary" /> info@radiantchembd.com
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Related Products in the Same Category */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">Explore Collection</span>
                  <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground">
                    Related {category?.title ?? "Products"}
                  </h2>
                </div>
                {category && (
                  <Button variant="outline" asChild>
                    <Link href={`/products?category=${category.id}`}>
                      View All {category.title} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct) => {
                  const relImg = getProductImageUrl(relProduct.id, relProduct.categoryId)
                  return (
                    <Link
                      key={relProduct.id}
                      href={`/products/${relProduct.id}`}
                      className="group bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-secondary/50 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-44 w-full overflow-hidden bg-muted">
                        <Image
                          src={relImg}
                          alt={relProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h4 className="font-montserrat font-bold text-base text-foreground group-hover:text-secondary transition-colors line-clamp-1 mb-2">
                          {relProduct.name}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
                          {relProduct.properties}
                        </p>
                        <span className="text-xs font-semibold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

        </Container>
      </SectionWrapper>
    </div>
  )
}

export interface Product {
  id: string
  categoryId: string
  name: string
  properties: string
}

export const productsData: Product[] = [
  // ============================================
  // PRETREATMENT AUXILIARY SERIES
  // ============================================
  {
    id: "pre-sequestering",
    categoryId: "pretreatment",
    name: "Sequestering Agent",
    properties: "It removes hardness of water by combining with calcium, magnesium, and heavy metal ions. Dispersing & chelating agent for all kinds of fabric. Available in neutral pH, acidic pH, and powder forms."
  },
  {
    id: "pre-core-alkali",
    categoryId: "pretreatment",
    name: "Core Alkali Neutraliser",
    properties: "An acid buffer having capability to neutralize core alkali after mercerization of cotton as well as after weight reduction of polyester fabrics. Cost-effective high-performance neutralizer."
  },
  {
    id: "pre-desizing",
    categoryId: "pretreatment",
    name: "De-sizing Agent",
    properties: "Amylase based enzymatic De-sizing Agent for cotton. NENOALFA HP removes size material from warp yarns. A highly performance oxidative De-sizing Agent for all types of woven fabric. Environmentally friendly."
  },
  {
    id: "pre-peroxide-stabilizer",
    categoryId: "pretreatment",
    name: "Hydrogen Peroxide Stabilizer",
    properties: "Stable in hard water, acid or alkali bath. Formulated with various non-ionic surfactants, nitrogen and phosphorus free, with excellent performance and compatibility."
  },
  {
    id: "pre-scouring",
    categoryId: "pretreatment",
    name: "Multifunctional Scouring Agent",
    properties: "High performance scouring, dispersing, emulsification, and chelating agent for cellulose fabrics. Replaces caustic soda, sequestering, penetrating agents, and peroxide stabilizers. Low foaming."
  },
  {
    id: "pre-antiback",
    categoryId: "pretreatment",
    name: "Anti Back Staining Agent",
    properties: "Specially designed for denim processing, preventing re-deposition and enhancing brightness. Sustainable solution available in powder form."
  },
  {
    id: "pre-peroxide-killer",
    categoryId: "pretreatment",
    name: "Hydrogen Peroxide Killer",
    properties: "Effectively removes residual hydrogen peroxide before dyeing. Converts peroxide to oxygen and water, preventing caustic broken effects. Eco-friendly enzyme-based product."
  },
  {
    id: "pre-detergent-wetting",
    categoryId: "pretreatment",
    name: "Detergent & Wetting Agent",
    properties: "Highly concentrated, low foam, APEO free wetting agent and detergent for both exhaust and continuous methods. Includes alkali stable versions for mercerization and universal powder detergents."
  },
  {
    id: "pre-enzyme",
    categoryId: "pretreatment",
    name: "Enzyme",
    properties: "High-performance bio-polishing and bio-scouring enzymes. Eco-friendly products that remove pectic substances, improving wettability, surface finish, and whiteness."
  },
  {
    id: "pre-oil-removing",
    categoryId: "pretreatment",
    name: "Oil Removing Agent",
    properties: "A self-mixture of solvents which helps to remove oil and grease stains from textiles. Suitable for woven and knit fabrics."
  },
  {
    id: "pre-antifoaming",
    categoryId: "pretreatment",
    name: "Antifoaming Agent",
    properties: "Spot-free silicone-based and highly effective non-silicone defoamers. Includes non-ionic silicone antifoam for use in both acid and alkaline conditions."
  },

  // ============================================
  // DYEING AUXILIARY SERIES
  // ============================================
  {
    id: "dye-levelling",
    categoryId: "dyeing",
    name: "Levelling Agent",
    properties: "Excellent leveling & dispersing agent. Supports uniform color build-up. Free of phthalic acid ester. Resistant to acids, alkalis, and hard water. Low foaming and suitable for wool, acrylic fibers, and automatic metering."
  },
  {
    id: "dye-dispersing",
    categoryId: "dyeing",
    name: "Dispersing Agent",
    properties: "Suitable for all dyestuff classes with protective colloid properties. High dispersing capacity and resistance to hard water salts. Includes oligomer dispersant for reductive after-treatment."
  },
  {
    id: "dye-washing-off",
    categoryId: "dyeing",
    name: "Washing Off Agent",
    properties: "Polymeric compound that binds impurities to prevent re-deposition. Efficient reactive washing-off detergent to remove silicates and gums. Effective at 60-70°C."
  },
  {
    id: "dye-anti-crease",
    categoryId: "dyeing",
    name: "Anti Crease Lubricants",
    properties: "Multifunctional agent reducing friction between fibers to prevent creases or scratches. Polymer dispersion that provides smoothing and softening effects for discontinuous forms."
  },
  {
    id: "dye-fixing",
    categoryId: "dyeing",
    name: "Dye Fixing Agent",
    properties: "Polyamine-based, non-formaldehyde cationic dye-fixing agent. Improves wash fastness of reactive and direct dyes with minimal tone change and light fastness effect."
  },
  {
    id: "dye-reduction-clearing",
    categoryId: "dyeing",
    name: "Reduction Clearing Agent",
    properties: "State of the art product replacing caustic soda and sodium hydro sulphate in reduction clearing. Treats substrate after dyeing in acidic medium, saving neutralization steps."
  },
  {
    id: "dye-soda-ash",
    categoryId: "dyeing",
    name: "Soda Ash Substitute",
    properties: "Highly effective (4x, 6x, 10x concentrated) substitute for fixation of reactive and Sulphur dyes. Reduces load on effluent treatment plants (lower TDS, BOD, COD)."
  },

  // ============================================
  // FINISHING AUXILIARY SERIES
  // ============================================
  {
    id: "fin-cationic-flakes",
    categoryId: "finishing",
    name: "Cationic Softener Flakes",
    properties: "Economical cold/warm water-soluble softeners imparting an extremely fluffy feel and durability. Super hydrophilic 100% cationic softeners in liquid and flake forms."
  },
  {
    id: "fin-wicking",
    categoryId: "finishing",
    name: "Wicking Finisher",
    properties: "Polyester derivatives for polyester and nylon compounds. Provides anti-crease properties, high moisture absorption, and anti-static processing."
  },
  {
    id: "fin-silicone",
    categoryId: "finishing",
    name: "Silicone Softeners",
    properties: "Modified micro/macro amino silicone softeners producing high surface smoothness, slippery feel, and bounciness. Improves inner softness for all types of fabrics."
  },
  {
    id: "fin-special",
    categoryId: "finishing",
    name: "Special Auxiliary Series",
    properties: "Powder forms of Soaping Agent, Levelling Agent, Anti-Creasing Agent, Peroxide Stabilizer/Killer, Dispersing Agent, Sequestering Agent, and De-Sizing Agent."
  },

  // ============================================
  // DENIM WASHING / WASHING CHEMICAL SERIES
  // ============================================
  { id: "wash-green-acid", categoryId: "denim-washing", name: "Green Acid/ Core Alkali Neutralizer", properties: "Eco-friendly core alkali neutralizer for washing processes." },
  { id: "wash-cationic", categoryId: "denim-washing", name: "Cationic Softener Flakes", properties: "Flake softener for excellent hand feel in denim." },
  { id: "wash-liquid-soft", categoryId: "denim-washing", name: "Liquid Softener", properties: "Ready-to-use liquid softening agent for industrial washing." },
  { id: "wash-non-ionic", categoryId: "denim-washing", name: "Non-ionic Softener", properties: "Stable softening agent compatible with various washing baths." },
  { id: "wash-antiback", categoryId: "denim-washing", name: "Anti-back Staining Agent", properties: "Prevents indigo redeposition during denim washing processes." },
  { id: "wash-washing-off", categoryId: "denim-washing", name: "Washing Off Agent", properties: "Removes unfixed dyes and impurities efficiently." },
  { id: "wash-anti-phenolic", categoryId: "denim-washing", name: "Anti-Phenolic Yellowing Agent", properties: "Protects fabrics from yellowing during storage." },
  { id: "wash-bio-polish", categoryId: "denim-washing", name: "Bio-polish Enzyme Powder", properties: "Enzyme powder for high-quality bio-polishing." },
  { id: "wash-neutral-enzyme", categoryId: "denim-washing", name: "SL/ Neutral Enzyme Powder", properties: "Neutral pH enzyme for stone-washing effects." },
  { id: "wash-acid-enzyme", categoryId: "denim-washing", name: "Acid Enzyme Powder", properties: "Acidic pH enzyme for deep abrasion in denim." },
  { id: "wash-stone-free", categoryId: "denim-washing", name: "Stone Free Enzyme Powder", properties: "Achieves stone-wash effects without the use of pumice stones." },
  { id: "wash-lycra-protector", categoryId: "denim-washing", name: "Lycra Protector", properties: "Protects elastane fibers during harsh washing treatments." },
  { id: "wash-detergent", categoryId: "denim-washing", name: "Detergent & Wetting Agent", properties: "High-power detergent for general washing applications." },
  { id: "wash-antimicrobial", categoryId: "denim-washing", name: "Anti-Microbial Agent", properties: "Provides lasting antimicrobial protection to garments." },
  { id: "wash-color-deep", categoryId: "denim-washing", name: "Color Deepening Agent", properties: "Enhances the depth and richness of dark shades." },
  { id: "wash-micro-silicone", categoryId: "denim-washing", name: "Micro Amino Silicone Softener", properties: "Deeply penetrating silicone for inner softness." },
  { id: "wash-hydrophobic-silicone", categoryId: "denim-washing", name: "Hydrophobic Silicone Softener", properties: "Silicone softener imparting water-repellent properties." },
  { id: "wash-hydrophilic-silicone", categoryId: "denim-washing", name: "Hydrophilic Silicone Softener", properties: "Silicone softener maintaining fabric breathability and absorbency." },
  { id: "wash-stain-remove", categoryId: "denim-washing", name: "Stain Removing Agent", properties: "Effectively targets and removes localized stains." },
  { id: "wash-rubbing", categoryId: "denim-washing", name: "Rubbing Fastness Improver", properties: "Improves dry and wet crocking fastness." },
  { id: "wash-sunlight", categoryId: "denim-washing", name: "Sunlight Fastness Improver", properties: "Protects colors from UV degradation." },
  { id: "wash-fixing", categoryId: "denim-washing", name: "Fixing Agent", properties: "Secures dyes to fibers for better wash fastness." },
  { id: "wash-cationizer", categoryId: "denim-washing", name: "Cationaizer", properties: "Modifies fabric charge to improve dye exhaustion." },
  { id: "wash-leveling", categoryId: "denim-washing", name: "Leveling Agent", properties: "Ensures uniform color distribution in garment dyeing." },
  { id: "wash-soda-sub", categoryId: "denim-washing", name: "Soda Ash Substitute", properties: "Eco-friendly alkali buffer for fixing." },

  // ============================================
  // PSF INDUSTRIES CHEMICAL SERIES
  // ============================================
  { id: "psf-washing", categoryId: "psf", name: "Washing Off Agent for PET Flakes", properties: "Formulated for deep cleaning of recycled PET flakes." },
  { id: "psf-antistatic", categoryId: "psf", name: "Anti-static Agent", properties: "Eliminates static charge build-up during fiber spinning." },
  { id: "psf-spin-finish", categoryId: "psf", name: "Spin Finish Oil", properties: "Provides essential lubrication and cohesion for synthetic fibers." },
  { id: "psf-silicone", categoryId: "psf", name: "Silicone Oil", properties: "High-grade silicone oil for industrial fiber applications." },

  // ============================================
  // OTHERS AUXILIARY SERIES
  // ============================================
  { id: "oth-cross-linking", categoryId: "others", name: "Cross Linking Agent", properties: "Enhances durability and performance of applied finishes." },
  { id: "oth-eliminating", categoryId: "others", name: "Eliminating Agent", properties: "Removes residual chemical build-ups." },
  { id: "oth-formaldehyde-elim", categoryId: "others", name: "Formaldehyde Eliminating Agent", properties: "Neutralizes and removes free formaldehyde to meet safety standards." },
  { id: "oth-water-repellent", categoryId: "others", name: "Water Repellent Agent", properties: "Provides durable water resistance to textiles." },
  { id: "oth-stiffening", categoryId: "others", name: "Stiffening Agent", properties: "Imparts a firm, stiff handle to fabrics where structural rigidity is required." },
  { id: "oth-antipilling", categoryId: "others", name: "Anti-Pilling Agent", properties: "Prevents the formation of pills on fabric surfaces." },
  { id: "oth-yellowing", categoryId: "others", name: "Anti-Phenolic Yellowing Agent", properties: "Protects nylon and cotton from BHT-induced yellowing." },
  { id: "oth-wax", categoryId: "others", name: "Wax Finishing Agent", properties: "Imparts a smooth, waxed finish and improves sewability." },
  { id: "oth-antistatic", categoryId: "others", name: "Anti-Static Agent", properties: "Prevents static cling in synthetic garments." },
  { id: "oth-water-oil", categoryId: "others", name: "Water and Oil Repellents Agent", properties: "Dual-action fluorocarbon finish for advanced stain protection." },
  { id: "oth-yarn-lube", categoryId: "others", name: "Yarn Lubricants", properties: "Reduces friction during knitting and weaving processes." },
  { id: "oth-lycra-pro", categoryId: "others", name: "Lycra Protector", properties: "Safeguards elastomeric fibers during high-temperature treatments." },
  { id: "oth-antimicrobial-silver", categoryId: "others", name: "Anti-Microbial Agent Silver Free", properties: "Non-metallic antimicrobial protection." },
  { id: "oth-antimicrobial", categoryId: "others", name: "Anti-Microbial Agent", properties: "Broad-spectrum microbial control for textiles." },
  { id: "oth-antivirus", categoryId: "others", name: "Anti-Virus Spray", properties: "Specialized coating to deactivate viral particles on fabric surfaces." },
  { id: "oth-disinfectant", categoryId: "others", name: "Disinfectant Fog Chemical", properties: "Industrial fogging solution for factory sterilization." },
  { id: "oth-uv-pigment", categoryId: "others", name: "Photochromic, Thermochromics & UV Pigment", properties: "Smart pigments that change color based on light or temperature." },
  { id: "oth-color-deep", categoryId: "others", name: "Color Deepening Agent", properties: "Optical enhancer for jet black and deep navy shades." },
  { id: "oth-stain-remove", categoryId: "others", name: "Stain Removing Agent", properties: "Heavy-duty spot cleaner for factory use." },
  { id: "oth-fiber-pro", categoryId: "others", name: "Fiber Protective Agent", properties: "Shields delicate fibers from chemical and mechanical damage." },
  { id: "oth-sunlight", categoryId: "others", name: "Sunlight Fastness Improver", properties: "UV absorber to prevent color fading." },
  { id: "oth-perspiration", categoryId: "others", name: "Perspiration Fastness Improver", properties: "Protects dyes from degradation via human sweat." },
  { id: "oth-silicone-spot", categoryId: "others", name: "Silicone Spot Remover Agent", properties: "Effectively dissolves and removes silicone stains." },
  { id: "oth-migration", categoryId: "others", name: "Anti-Migration Agent", properties: "Prevents dye migration during the drying process." },
  { id: "oth-decoloring", categoryId: "others", name: "De-Coloring Agent", properties: "Strips existing dyes for re-dyeing processes." }
]

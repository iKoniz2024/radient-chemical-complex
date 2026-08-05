export interface Product {
  id: string
  categoryId: string
  name: string
  properties: string
}

export const productsData: Product[] = [
  // Pretreatment
  {
    id: "pre-desizing",
    categoryId: "pretreatment",
    name: "De-sizing Agent",
    properties: "Amylase based enzymatic De-sizing Agent for cotton. NENOALFA HP is the process of removing the size material from the warp yarns in woven fabrics. Environmental friendliness, ease of removal, cost considerations, effluent treatment."
  },
  {
    id: "pre-sequestering",
    categoryId: "pretreatment",
    name: "Sequestering Agent",
    properties: "It removing hardness of water. Sequestering agents combine with calcium and magnesium ions and other heavy metal ions in hard water. Removing di- and trivalent cations, e.g., Ca++, Mg++, Cu++, Fe+++ etc."
  },
  {
    id: "pre-peroxide-killer",
    categoryId: "pretreatment",
    name: "Hydrogen Peroxide Killer",
    properties: "Peroxide killer can effectively remove the hydrogen which stay in fabrics before dyeing. Totally converts hydrogen peroxide to oxygen and water, and prevent caustic broken effect. Eco-friendly in nature."
  },
  
  // Dyeing
  {
    id: "dye-levelling",
    categoryId: "dyeing",
    name: "Levelling Agent",
    properties: "An excellent leveling & dispersing agent. It supports uniform color builds up. Free of phthalic acid ester anionic. Resistant to acids, alkalis and hard water salts."
  },
  {
    id: "dye-fixing",
    categoryId: "dyeing",
    name: "Dye Fixing Agent",
    properties: "A polyamine based non formaldehyde cationic dye-fixing agent for reactive dyes and direct dyes. High molecular weight, for fixing of cellulose dyed/printed fabrics with minimal tone change & effect on light fastness."
  },
  
  // Finishing
  {
    id: "fin-cationic-flakes",
    categoryId: "finishing",
    name: "Cationic Softener Flakes",
    properties: "An economical cold water-soluble cationic softener for imparting extremely fluffy feel along with good durability. Improves absorbency and imparts a soft handle."
  },
  {
    id: "fin-silicone",
    categoryId: "finishing",
    name: "Silicone Softeners",
    properties: "A modified micro amino silicone softener with special additives that produce high surface smoothness and a slippery feel. Imparts fabric with excellent soft handle and good anti-static property."
  },

  // Denim Washing
  {
    id: "denim-antiback",
    categoryId: "denim-washing",
    name: "Anti-back Staining Agent",
    properties: "Specially designed anti-back staining agent for denim processing, which prevents re-deposition and enhances brightness. It is a sustainable solution in powder form."
  },
  {
    id: "denim-enzyme",
    categoryId: "denim-washing",
    name: "Enzyme Series",
    properties: "A high-performance bio polishing and bio-scouring enzyme. It is a eco-friendly product. It removes pectic substance and other impurities effectively, wettability, surface finish and whiteness."
  },

  // PSF
  {
    id: "psf-washing",
    categoryId: "psf",
    name: "PET Flakes Washing Agent",
    properties: "Specially formulated washing off and oil removing agent for PET flakes in PSF industries. Enhances cleaning efficiency and prepares flakes for further processing."
  },
  
  // Others
  {
    id: "oth-water-repellent",
    categoryId: "others",
    name: "Water and Oil Repellent Agent",
    properties: "High-performance finishing agent providing excellent water and oil repellency to various fabric types without compromising breathability or hand feel."
  }
]

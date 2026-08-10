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
    properties: "It removing hardness of water. Sequestering agents combine with calcium and magnesium ions and other heavy metal ions in hard water. Its removing di- and trivalent cations, e.g., Ca++, Mg ++ Cu ++, Fe+++ etc. Dispersing & chelating agent for all kinds of fabric. Excellent chelating agent having neutral pH. Concentrated sequestering having acidic pH. Excellent chelating agent having neutral pH powder."
  },
  {
    id: "pre-core-alkali",
    categoryId: "pretreatment",
    name: "Core Alkali Neutraliser",
    properties: "An acid buffer having capability to neutralize Core alkali after mercerization of cotton as well as after weight reduction of polyester fabrics. An Acid buffer and core alkali neutralizer after Mercerization of cotton and all type of fabric. An acid buffer having capability to neutralize core alkali after mercerization of cotton as well as after weight reduction of polyester fabrics. Cost-effective high-performance core alkali neutralizer."
  },
  {
    id: "pre-desizing",
    categoryId: "pretreatment",
    name: "Desizing Agent",
    properties: "Amylase based enzymatic De-sizing Agent for cotton. NENOALFA HP is the process of removing the size material from the warp yarns in woven fabrics. Sizing agents are selected on the basis of type of fabric, environmental friendliness, ease of removal, cost considerations, effluent treatment, etc. A highly performance oxidative De-sizing Agent for all types of woven fabric."
  },
  {
    id: "pre-peroxide-stabilizer",
    categoryId: "pretreatment",
    name: "Hydrogen Peroxide Stabilizer",
    properties: "Stable in hard water, acid or alkali bath, compatible to one-bath treatment with any other anionic, cationic or non-ionic auxiliaries. Hydrogen peroxide stabilizer is a formulation of various non-ionic surfactants, it is nitrogen and phosphorus free, with good compatibility and excellent performance."
  },
  {
    id: "pre-scouring",
    categoryId: "pretreatment",
    name: "Multi-Functional Scouring Agent",
    properties: "Multifunctional scouring agent is a high performance of scouring, dispersing, emulsification, and chelating agent which used for pretreatment of cellulose fabrics. It is replacement of sequestering agent, penetrating agent, scouring agent, and hydrogen peroxide stabilizer. It offers a good non-ionic power to remove wax, sizing, cottonseed hull, dirty marks from the fabrics, to improve the brilliance, smoothness, whiteness, and hand feel. Multifunctional scouring agent is a high performance of scouring, dispersing, emulsification, and chelating used for pre-treatment of cellulose fabrics, it is replacement of caustic soda, sequestering, penetrating agent, scouring agent, and hydrogen peroxide stabilizer. It offers a good power to remove wax, sizing, cottonseed hull, dirty marks from the fabrics, so that to improve the brilliance, smoothness, whiteness, and hand feel. Multifunctional, low foaming wetting & detergent agent with emulsifying and extractive action for mobilizing & removing cotton impurities in pre-treatment process. Mixture of sequestering, peroxide stabilizer, wetting agent, detergent with emulsifying pre-treatment process. Multifunctional active for yarn scouring."
  },
  {
    id: "pre-antiback",
    categoryId: "pretreatment",
    name: "Anti Back Staining Agent",
    properties: "Specially designed anti-black staining agent for denim processing, which prevents re-deposition and enhances brightness. It is a sustainable solution and hence can be added during the fading step. Powder form. Hydrogen peroxide stabilizer is a formulation of various non-ionic surfactants, it is nitrogen and phosphorus free, with good compatibility and excellent performance. Cost effective anti-back staining agent designed for better performance during denim processing, helps in anti-redeposit ion and enhances brightness."
  },
  {
    id: "pre-peroxide-killer",
    categoryId: "pretreatment",
    name: "Hydrogen Peroxide Killer",
    properties: "Peroxide killer can effectively remove the hydrogen which stay in fabrics before dying. Totally converts hydrogen peroxide to oxygen and water, and prevent caustic broken effect from hydrogen peroxide to dye accordingly and save water, energy and time. An enzyme-based product for killing of residual hydrogen peroxide. Completely removes hydrogen peroxide. Eco-friendly in nature."
  },
  {
    id: "pre-detergent-wetting",
    categoryId: "pretreatment",
    name: "Detergent & Wetting Agent",
    properties: "High concentrated, low foam, APEO free, wetting agent & detergent for both exhaust and continuous method. High concentrated, low foam, non-creslyc, alkali stable wetting agent, especially suitable for continuous mercerization. High power, low foam, APEO free wetting agent. Low temperature (75°-80°C) wetting cum scouring agent retain fiber/yarn strength also saves peroxide stabilizer. Universal powder detergent especially for laundries. It facilitates to bleach the denim shade."
  },
  {
    id: "pre-enzyme",
    categoryId: "pretreatment",
    name: "Enzyme",
    properties: "A high-performance bio polishing enzyme. A high concentrated neutral cellulose enzyme. A bio-scouring enzyme. It is a eco-friendly product. It removes pectic substance and other impurities effectively, wettability, surface finish and whiteness and benefits following dyeing and finishing process."
  },
  {
    id: "pre-oil-removing",
    categoryId: "pretreatment",
    name: "Oil Removing Agent",
    properties: "A self-mixture of solvents which helps to remove oil and grease stains from textiles. It is an oil removing agent for woven and knit fabric."
  },
  {
    id: "pre-antifoaming",
    categoryId: "pretreatment",
    name: "Antifoaming Agent",
    properties: "A spot free silicone based high concentrate defoamer. Very effective non silicone based defoamer. Non-ionic silicone antifoam for use in acid and alkaline conditions."
  },

  // ============================================
  // DYEING AUXILIARY SERIES
  // ============================================
  {
    id: "dye-levelling",
    categoryId: "dyeing",
    name: "Leveling Agent",
    properties: "An excellent leveling & dispersing agent. It supports uniform color builds up. Free of phthalic acid ester anionic. Good levelling power. High dispersing capacity. Resistant to acids, alkalis and hard water salts. Prevents the precipitation of cationic and anionic dyestuffs when applied together. Non-ionic. Low-foaming, excellent levelling effects. Suitable for levelling faulty dyeing. Suitable for automatic metering devices. Supports uniform color build-up. Non-ionic. For wool dyestuffs good migration capacity. Levels out differences in affinity of different wool qualities. Resistant to hard water. Promotes dye penetration. Low foaming. Non-ionic. Versatile levelling agent for dyeing acrylic fibers & fabric with cationic dyes."
  },
  {
    id: "dye-dispersing",
    categoryId: "dyeing",
    name: "Dispersing Agent",
    properties: "Dispersing agent suitable for all dyestuff classes with protective colloid properties. High dispersing capacity. Levelling effect. High resistance to acids, alkalis and hard water salts. Good temperature resistance. Anionic. Oligomer dispersant in the dyeing liquor, for reductive after treatment as well as for post-lubricating PES, Spinning lubricant for PES."
  },
  {
    id: "dye-washing-off",
    categoryId: "dyeing",
    name: "Washing Off Agent",
    properties: "Polymeric compound with protective colloidal & sequestering property. They bind the impurities, prevent re-deposition and improve fastness and give brilliancy on white goods. Efficient reactive washing off detergent with special properties to remove silicate from dyed fabrics and gums from printed fabrics. Reactive washing off agent in acid medium, thereby reducing one prices of neutralization, leading to saving in utility costs and time. A special soaping agent for reactive dyes for dyeing & printing process. Highly effective at 60-70°C."
  },
  {
    id: "dye-anti-crease",
    categoryId: "dyeing",
    name: "Anti Crease Lubricants",
    properties: "It is a special multifunctional anti-creasing agent, which efficiently reduces the friction between fibers and fibers dyeing tank that prevents creases or scratches, due to its smoothing and softening effects. The main ingredient of anti-creasing agent is special polymer dispersion. Reduces the abrasion of fabrics to dyeing machine metal and fiber to fiber lubrication. Imparts fiber to fiber lubrication and anti-cracker marks, prevent roughen dyeing. Low foam, suitable for rapid dyeing and various kind of fabric dyeing bath. Low COD easily to treat the dyeing wastewater. Double concentrated form of polymer type anti-crease lubricant for bleaching & dyeing. Anti-creasing for the fabric processing in exhaust process in discontinues forms. It prevents the formation of crease during wet processing. Recommended to use in scouring, dyeing and after treatment process. Specially for high GSM fabrics."
  },
  {
    id: "dye-fixing",
    categoryId: "dyeing",
    name: "Dye Fixing Agent",
    properties: "A polyamine based non formaldehyde cationic dye-fixing agent for reactive dyes and direct dyes. A cationic dye-fixing agent, with high molecular weight, for fixing of cellulose dyed/printed with direct and reactive. Cationic dye fixing agent with no formaldehyde content to improve wash fastness of reactive dyed yarn/fabrics with minimal tone change & effect on light fastness. Cationic monomer. It is colorless & transparent liquid, high purity, polymer grade, quaternary ammonium salt & high charge density cationic monomer. A highly fixative cationic fixing agent for the improvement of wash fastness properties of reactive dyes on cellulose fabric, yarn and garment. Does not influence the final shade after application, application by exhaust process. Formaldehyde free."
  },
  {
    id: "dye-reduction-clearing",
    categoryId: "dyeing",
    name: "Reduction Clearing Agent",
    properties: "State of the art product replacing both caustic soda and sodium hydro sulphate in reduction clearing. Enables to treat substrate after dyeing in acidic medium thus saving neutralization step which leads to save times, water, power, and labor. Four times stronger sodium hydro sulphate substitutes in powder form."
  },
  {
    id: "dye-soda-ash",
    categoryId: "dyeing",
    name: "Soda Ash Substitute",
    properties: "Highly effective soda ash substitute for fixation of all types of reactive dyes on cellulosic, reducing load on effluent treatment plant due to its lower TDS, BOD and COD. Highly effective 10 times concentrated soda ash substitute in powder form for fixation of all types of reactive and Sulphur dyes on cellulosic yarn, fiber and garments. Highly effective 4 times concentrated soda ash substitute in powder form for fixation of all types of reactive and Sulphur dyes on cellulosic yarn, fiber and garments. Effect on light fastness. Highly effective 6 times concentrated soda ash substitute in powder form for fixation of all types of reactive and Sulphur dyes on cellulosic yarn, fiber and garments. cationic monomer. Alkaline donor for the use in reactive dyeing of cellulose. High stability in reactive dyeing temperature giving a complete liberation of alkaline for the dyeing of reactive on cellulose fibers. 1/4-1/5 compared to soda ash light."
  },

  // ============================================
  // FINISHING AUXILIARY SERIES
  // ============================================
  {
    id: "fin-cationic-flakes",
    categoryId: "finishing",
    name: "Cationic Softener Flakes",
    properties: "An economical cold water-soluble cationic softener for imparting extremely fluffy feel along with good durability. An economical warm water soluble weakly cationic softener for imparting extremely fluffy feel along with good durability. Hydrophilic cationic softener for woven, terry towel and knit to improve absorbency and impart a soft handle. It can be applied by exhaust or padding techniques. Super hydrophilic 100 percent cationic softener in liquid form. An economical cationic softener for fabric and garments. An economical non-ionic softener flakes with excellent softness and fluffy feel. High performance liquid softener. Imparts fabric with excellent soft handle and good anti-static property."
  },
  {
    id: "fin-wicking",
    categoryId: "finishing",
    name: "Wicking Finisher",
    properties: "Polyester derivatives to apply for polyester and nylon compound. Anti-crease properties, good durability, high moisture absorption, anti-contamination and anti-static to apply for processing treatment during or after dyeing or padding."
  },
  {
    id: "fin-silicone",
    categoryId: "finishing",
    name: "Silicone Softeners",
    properties: "A modified micro amino silicone softener with special additives that produce high surface smoothness and a slippery feel. High performance hydrophilic silicone softener. A concentrated micro amino silicone softener in liquid form to impart greater inner softness to all types of substrates. Economical micro amino silicone softener to impart greater softness to all types of fabric. A macro amino silicone softener for bounciness and surface softness for all kinds of fabrics. A micro amino silicone to impart high degree of surface we feel & inner softness to suiting & shirting. A micro amino silicone softener with special additives that produce high surface smoothness and a wet feel. Imparts fabric with excellent soft handle and good anti-static property."
  },
  {
    id: "fin-non-ionic-flakes",
    categoryId: "finishing",
    name: "Non-ionic Softener Flakes",
    properties: "An economical non-ionic softener flakes with excellent softness and fluffy feel. High performance liquid softener. Imparts fabric with excellent soft handle and good anti-static property."
  },
  {
    id: "fin-hydrophilic-silicone",
    categoryId: "finishing",
    name: "Hydrophilic Silicone Softener",
    properties: "High performance hydrophilic silicone softener. A concentrated micro amino silicone softener in liquid form to impart greater inner softness to all types of substrates."
  },
  {
    id: "fin-hydrophobic-silicone",
    categoryId: "finishing",
    name: "Hydrophobic Silicone Softener",
    properties: "A modified micro amino silicone softener with special additives that produce high surface smoothness and a slippery feel. Economical micro amino silicone softener to impart greater softness to all types of fabric."
  },
  {
    id: "fin-stiffener",
    categoryId: "finishing",
    name: "Stiffener",
    properties: "Imparts a firm, stiff handle to fabrics where structural rigidity is required."
  },
  {
    id: "fin-special",
    categoryId: "finishing",
    name: "Special Auxiliary Series",
    properties: "Powder Form Soaping Agent. Powder Form Levelling Agent. Powder Form Anti-Creasing Agent. Powder Form Hydrogen Peroxide Stabilizer. Powder Form Hydrogen Peroxide Killer. Powder Form Dispersing Agent. Powder Form Sequestering Agent. Powder Form De-Sizing Agent."
  },

  // ============================================
  // DENIM WASHING / WASHING CHEMICAL SERIES
  // ============================================
  {
    id: "wash-green-acid",
    categoryId: "denim-washing",
    name: "Green Acid/ Core Alkali Neutralizer",
    properties: "An acid buffer having capability to neutralize core alkali after mercerization of cotton as well as after weight reduction of polyester fabrics."
  },
  {
    id: "wash-cationic",
    categoryId: "denim-washing",
    name: "Cationic Softener Flakes",
    properties: "An economical cold water-soluble cationic softener for imparting extremely fluffy feel along with good durability."
  },
  {
    id: "wash-liquid-soft",
    categoryId: "denim-washing",
    name: "Liquid Softener",
    properties: "High performance liquid softener. Imparts fabric with excellent soft handle and good anti-static property."
  },
  {
    id: "wash-non-ionic",
    categoryId: "denim-washing",
    name: "Non-ionic Softener",
    properties: "An economical non-ionic softener flakes with excellent softness and fluffy feel."
  },
  {
    id: "wash-antiback",
    categoryId: "denim-washing",
    name: "Anti-back Staining Agent",
    properties: "Specially designed anti-black staining agent for denim processing, which prevents re-deposition and enhances brightness. Cost effective anti-back staining agent designed for better performance during denim processing."
  },
  {
    id: "wash-washing-off",
    categoryId: "denim-washing",
    name: "Washing Off Agent",
    properties: "Polymeric compound with protective colloidal & sequestering property. They bind the impurities, prevent re-deposition and improve fastness and give brilliancy on white goods."
  },
  {
    id: "wash-anti-phenolic",
    categoryId: "denim-washing",
    name: "Anti-Phenolic Yellowing Agent",
    properties: "Protects nylon and cotton from BHT-induced yellowing during storage."
  },
  {
    id: "wash-bio-polish",
    categoryId: "denim-washing",
    name: "Bio-polish Enzyme Powder",
    properties: "A high-performance bio polishing enzyme for surface finish and whiteness improvement."
  },
  {
    id: "wash-neutral-enzyme",
    categoryId: "denim-washing",
    name: "SL/ Neutral Enzyme Powder",
    properties: "A high concentrated neutral cellulose enzyme for bio-polishing."
  },
  {
    id: "wash-acid-enzyme",
    categoryId: "denim-washing",
    name: "Acid Enzyme Powder",
    properties: "Acidic pH enzyme for deep abrasion effects in denim processing."
  },
  {
    id: "wash-stone-free",
    categoryId: "denim-washing",
    name: "Stone Free Enzyme Powder",
    properties: "Achieves stone-wash effects without the use of pumice stones."
  },
  {
    id: "wash-lycra-protector",
    categoryId: "denim-washing",
    name: "Lycra Protector",
    properties: "Protects elastane fibers during harsh washing treatments."
  },
  {
    id: "wash-detergent",
    categoryId: "denim-washing",
    name: "Detergent & Wetting Agent",
    properties: "High concentrated, low foam, APEO free, wetting agent & detergent for both exhaust and continuous method. Universal powder detergent especially for laundries. It facilitates to bleach the denim shade."
  },
  {
    id: "wash-antimicrobial",
    categoryId: "denim-washing",
    name: "Anti-Microbial Agent",
    properties: "Broad-spectrum microbial control for textiles."
  },
  {
    id: "wash-color-deep",
    categoryId: "denim-washing",
    name: "Color Deepening Agent",
    properties: "Enhances the depth and richness of dark shades."
  },
  {
    id: "wash-micro-silicone",
    categoryId: "denim-washing",
    name: "Micro Amino Silicone Softener",
    properties: "A micro amino silicone to impart high degree of surface we feel & inner softness to suiting & shirting."
  },
  {
    id: "wash-hydrophobic-silicone",
    categoryId: "denim-washing",
    name: "Hydrophobic Silicone Softener",
    properties: "A modified micro amino silicone softener with special additives that produce high surface smoothness and a slippery feel."
  },
  {
    id: "wash-hydrophilic-silicone",
    categoryId: "denim-washing",
    name: "Hydrophilic Silicone Softener",
    properties: "High performance hydrophilic silicone softener."
  },
  {
    id: "wash-stain-remove",
    categoryId: "denim-washing",
    name: "Stain Removing Agent",
    properties: "Effectively targets and removes localized stains."
  },
  {
    id: "wash-rubbing",
    categoryId: "denim-washing",
    name: "Rubbing Fastness Improver",
    properties: "Improves dry and wet crocking fastness."
  },
  {
    id: "wash-sunlight",
    categoryId: "denim-washing",
    name: "Sunlight Fastness Improver",
    properties: "Protects colors from UV degradation."
  },
  {
    id: "wash-fixing",
    categoryId: "denim-washing",
    name: "Fixing Agent",
    properties: "A polyamine based non formaldehyde cationic dye-fixing agent for reactive dyes and direct dyes."
  },
  {
    id: "wash-cationizer",
    categoryId: "denim-washing",
    name: "Cationaizer",
    properties: "Modifies fabric charge to improve dye exhaustion."
  },
  {
    id: "wash-leveling",
    categoryId: "denim-washing",
    name: "Leveling Agent",
    properties: "An excellent leveling & dispersing agent. It supports uniform color builds up. Free of phthalic acid ester anionic."
  },
  {
    id: "wash-soda-sub",
    categoryId: "denim-washing",
    name: "Soda Ash Substitute",
    properties: "Highly effective soda ash substitute for fixation of all types of reactive dyes on cellulosic, reducing load on effluent treatment plant due to its lower TDS, BOD and COD."
  },

  // ============================================
  // PSF INDUSTRIES CHEMICAL SERIES
  // ============================================
  {
    id: "psf-washing",
    categoryId: "psf",
    name: "Washing Off Agent for PET Flakes",
    properties: "Formulated for deep cleaning of recycled PET flakes."
  },
  {
    id: "psf-antistatic",
    categoryId: "psf",
    name: "Anti-static Agent",
    properties: "Eliminates static charge build-up during fiber spinning."
  },
  {
    id: "psf-spin-finish",
    categoryId: "psf",
    name: "Spin Finish Oil",
    properties: "Provides essential lubrication and cohesion for synthetic fibers."
  },
  {
    id: "psf-silicone",
    categoryId: "psf",
    name: "Silicone Oil",
    properties: "High-grade silicone oil for industrial fiber applications."
  },

  // ============================================
  // OTHERS AUXILIARY SERIES
  // ============================================
  {
    id: "oth-cross-linking",
    categoryId: "others",
    name: "Cross Linking Agent",
    properties: "Enhances durability and performance of applied finishes."
  },
  {
    id: "oth-eliminating",
    categoryId: "others",
    name: "Eliminating Agent",
    properties: "Removes residual chemical build-ups."
  },
  {
    id: "oth-formaldehyde-elim",
    categoryId: "others",
    name: "Formaldehyde Eliminating Agent",
    properties: "Neutralizes and removes free formaldehyde to meet safety standards."
  },
  {
    id: "oth-water-repellent",
    categoryId: "others",
    name: "Water Repellent Agent",
    properties: "Provides durable water resistance to textiles."
  },
  {
    id: "oth-stiffening",
    categoryId: "others",
    name: "Stiffening Agent",
    properties: "Imparts a firm, stiff handle to fabrics where structural rigidity is required."
  },
  {
    id: "oth-antipilling",
    categoryId: "others",
    name: "Anti-Pilling Agent",
    properties: "Prevents the formation of pills on fabric surfaces."
  },
  {
    id: "oth-yellowing",
    categoryId: "others",
    name: "Anti-Phenolic Yellowing Agent",
    properties: "Protects nylon and cotton from BHT-induced yellowing."
  },
  {
    id: "oth-wax",
    categoryId: "others",
    name: "Wax Finishing Agent",
    properties: "Imparts a smooth, waxed finish and improves sewability."
  },
  {
    id: "oth-antistatic",
    categoryId: "others",
    name: "Anti-Static Agent",
    properties: "Prevents static cling in synthetic garments."
  },
  {
    id: "oth-water-oil",
    categoryId: "others",
    name: "Water and Oil Repellents Agent",
    properties: "Dual-action fluorocarbon finish for advanced stain protection."
  },
  {
    id: "oth-yarn-lube",
    categoryId: "others",
    name: "Yarn Lubricants",
    properties: "Reduces friction during knitting and weaving processes."
  },
  {
    id: "oth-lycra-pro",
    categoryId: "others",
    name: "Lycra Protector",
    properties: "Safeguards elastomeric fibers during high-temperature treatments."
  },
  {
    id: "oth-antimicrobial-silver",
    categoryId: "others",
    name: "Anti-Microbial Agent Silver Free",
    properties: "Non-metallic antimicrobial protection."
  },
  {
    id: "oth-antimicrobial",
    categoryId: "others",
    name: "Anti-Microbial Agent",
    properties: "Broad-spectrum microbial control for textiles."
  },
  {
    id: "oth-antivirus",
    categoryId: "others",
    name: "Anti-Virus Spray",
    properties: "Specialized coating to deactivate viral particles on fabric surfaces."
  },
  {
    id: "oth-disinfectant",
    categoryId: "others",
    name: "Disinfectant Fog Chemical",
    properties: "Industrial fogging solution for factory sterilization."
  },
  {
    id: "oth-uv-pigment",
    categoryId: "others",
    name: "Photochromic, Thermochromics & UV Pigment",
    properties: "Smart pigments that change color based on light or temperature."
  },
  {
    id: "oth-color-deep",
    categoryId: "others",
    name: "Color Deepening Agent",
    properties: "Optical enhancer for jet black and deep navy shades."
  },
  {
    id: "oth-stain-remove",
    categoryId: "others",
    name: "Stain Removing Agent",
    properties: "Heavy-duty spot cleaner for factory use."
  },
  {
    id: "oth-fiber-pro",
    categoryId: "others",
    name: "Fiber Protective Agent",
    properties: "Shields delicate fibers from chemical and mechanical damage."
  },
  {
    id: "oth-sunlight",
    categoryId: "others",
    name: "Sunlight Fastness Improver",
    properties: "UV absorber to prevent color fading."
  },
  {
    id: "oth-perspiration",
    categoryId: "others",
    name: "Perspiration Fastness Improver",
    properties: "Protects dyes from degradation via human sweat."
  },
  {
    id: "oth-silicone-spot",
    categoryId: "others",
    name: "Silicone Spot Remover Agent",
    properties: "Effectively dissolves and removes silicone stains."
  },
  {
    id: "oth-migration",
    categoryId: "others",
    name: "Anti-Migration Agent",
    properties: "Prevents dye migration during the drying process."
  },
  {
    id: "oth-decoloring",
    categoryId: "others",
    name: "De-Coloring Agent",
    properties: "Strips existing dyes for re-dyeing processes."
  }
]

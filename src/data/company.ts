import { Handshake, Leaf, TrendingUp, ShieldCheck, Lightbulb, Users } from 'lucide-react'

export const companyData = {
  about: {
    title: "About Us",
    description: "At Radiant Chemical Complex, we are more than just a supplier of textile auxiliary chemicals—we are a catalyst for change in the global textile industry. Since our founding in 2017, we have been dedicated to developing eco-friendly, high-efficiency, and cost-effective solutions that not only meet the demands of modern textile production. Our mission is rooted in the belief that innovation and sustainability can go hand in hand, driving progress while safeguarding the planet for future generations.\n\nAs a leader in the textile auxiliary sector, we serve a wide range of industries, including Pretreatment, Dyeing, Finishing, Denim Washing, and PSF (Polyester Staple Fiber). With production facilities in Bangladesh and China, we have an annual output of over 20,000 tons, making us one of the most trusted and innovative suppliers in the region. Our success is built on a foundation of cutting-edge research, global expertise, and a deep commitment to the communities we serve.",
    stats: [
      { label: "Annual Output", value: "20,000+ Tons" },
      { label: "Founded", value: "2017" },
      { label: "Facilities", value: "Bangladesh & China" }
    ],
    certifications: [
      { name: "ISO", color: "#1a365d" },
      { name: "SGS", color: "#e53e3e" },
      { name: "IQNet", color: "#2b6cb0" },
      { name: "GOTS", color: "#38a169" },
      { name: "bluesign", color: "#00b5d8" },
      { name: "bsi", color: "#1a365d" },
      { name: "OEKO-TEX", color: "#d69e2e" },
      { name: "ZDHC", color: "#805ad5" },
    ]
  },
  mission: {
    title: "Our Mission",
    description: "To lead the textile auxiliary chemical industry in innovation and sustainability, delivering high-efficiency, affordable products and services that enhance the quality of life and well-being of people worldwide.",
    points: [
      "Driving industry standards through cutting-edge research",
      "Fostering continuous improvement to optimize processes",
      "Empowering businesses with socially responsible solutions",
      "Contributing to global sustainability goals"
    ]
  },
  vision: {
    title: "Our Vision",
    description: "To be a global leader in the textile chemical industry, driving transformative change through cutting-edge technology, sustainable practices, and a deep commitment to social responsibility.",
    points: [
      "Elevate the textile industry to new heights of efficiency",
      "Contribute to a healthier planet by reducing ecological footprint",
      "Create thriving communities by fostering inclusive growth",
      "Set the benchmark for ethical and sustainable business practices"
    ]
  },
  coreValues: [
    { title: "Community Empowerment", description: "We uplift communities through education, job creation, and sustainable development.", icon: Users },
    { title: "Environmental Stewardship", description: "We prioritize eco-friendly practices, reducing our environmental impact.", icon: Leaf },
    { title: "Economic Excellence", description: "We ensure cost-effective, high-quality solutions that drive growth.", icon: TrendingUp },
    { title: "Integrity and Transparency", description: "We act with honesty, ethics, and openness—building trust.", icon: ShieldCheck },
    { title: "Collaborative Innovation", description: "We co-create solutions with clients and experts to drive breakthroughs.", icon: Lightbulb },
    { title: "Customer Centricity", description: "We listen closely to clients' needs, delivering tailored, reliable solutions.", icon: Handshake }
  ],
  ceoMessage: {
    name: "Engr. Md. Ahmmad Ullah",
    title: "Founder & CEO",
    quote: "Great things in business are never done by one person; they're accomplished by a team united in purpose and passion.",
    content: "Since the inception of Radiant Chemical Complex in 2017, our journey has been guided by a clear vision: to transform the textile industry through innovation, sustainability, and excellence. We remain dedicated to pushing the boundaries of innovation, fostering sustainable growth, and upholding the trust placed in us by our stakeholders."
  },
  contact: {
    phone: "+880 1735-221962",
    address: "House 35, Road 09, Block -H, Sector 16, Uttara, Dhaka-1230.",
    email: "info@radiantgroup-bd.com",
  }
}

// Saari details yahin se change hongi. Baaki components isi file se padhte hain.
export const site = {
  name: "BALAJI ENTERPRISES",
  product: "COPPER PATTI",
  tagline: "Precision Copper. Reliable Performance.",
  navTagline: "PRECISION • CONDUCTIVITY • PERFORMANCE",
  whatsapp: "917790961018",
  phoneDisplay: "+91 77909 61018",
  email: "chandraprakashjangid80@gmail.com",
  address: "19 Number Industrial Area, Jaipur, Rajasthan",
};

export const waLink = (text = "Hello, I want a quote for copper patti.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/#industries" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "250+", label: "Customers Served" },
  { value: "15+", label: "Industries Served" },
  { value: "100%", label: "Quality Focus" },
];

export const products = [
  { name: "Copper Patti", img: "j4.jpg", text: "High-conductivity copper patti manufactured for electrical and transformer applications." },
  { name: "Copper Strip", img: "j5.jpg", text: "Precisely manufactured copper strips designed for reliable electrical performance." },
  { name: "Copper Busbar", img: "j7.jpg", text: "Robust copper busbars engineered for efficient current transmission." },
];

export const industries = [
  { name: "Electrical", icon: "bolt", text: "Reliable copper components for electrical systems." },
  { name: "Transformers", icon: "coil", text: "Precision copper solutions for transformer manufacturing." },
  { name: "Power", icon: "factory", text: "High-conductivity products for demanding power applications." },
  { name: "Engineering", icon: "gear", text: "Copper products for specialized industrial requirements." },
];

export const process = ["Raw Material", "Rolling", "Annealing", "Cutting", "Quality Inspection", "Final Dispatch"];

export const quality = [
  { t: "High Conductivity", d: "Efficient electrical performance." },
  { t: "Dimensional Precision", d: "Consistent thickness and dimensions." },
  { t: "Material Reliability", d: "Quality-focused copper manufacturing." },
  { t: "Strict Inspection", d: "Every production stage monitored for consistency." },
];

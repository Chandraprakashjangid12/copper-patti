// Real: name, phone/WhatsApp, email, address, years. SAMPLE (edit): products, sizes, grades, industries, text.
export const site = {
  name: "Balaji Enterprises",
  phone: "+91 77909 61018",
  phoneHref: "tel:+917790961018",
  email: "chandraprakashjangid80@gmail.com",
  address: "No. 19, Industrial Area, Jaipur, Rajasthan",
  years: 10,
  // Paste a free key from web3forms.com (enter your email there) so form requests arrive in your inbox.
  // Leave "" and the form will open WhatsApp with the request instead.
  formKey: "905179fa-03d5-4c8e-a4a7-32025f9c5abd",
};

export const whatsapp = (msg = "Hello Balaji Enterprises, I need a quote for copper winding strip.") =>
  "https://wa.me/917790961018?text=" + encodeURIComponent(msg);

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const btn = "inline-block rounded-md px-6 py-3 text-sm font-semibold transition-colors";

// image: put photo in /public/products and set e.g. "/products/pcc.jpg"
export const products = [
  { slug: "paper-covered-copper-strip", name: "Paper Covered Copper Strip", note: "Single layer kraft paper insulation for LV and HV transformer windings.", width: "3 – 20 mm", thickness: "0.8 – 3.0 mm", grade: "ETP Cu, 99.9% min", image: null },
  { slug: "double-paper-covered-strip", name: "Double Paper Covered Strip", note: "Extra insulation build for higher voltage coils.", width: "4 – 25 mm", thickness: "1.0 – 4.0 mm", grade: "ETP Cu, 99.9% min", image: null },
  { slug: "bare-copper-strip", name: "Bare Copper Strip", note: "Uninsulated strip for busbars, jumpers and custom covering.", width: "5 – 100 mm", thickness: "0.5 – 6.0 mm", grade: "ETP Cu, 99.9% min", image: null },
  { slug: "double-cotton-covered-strip", name: "Double Cotton Covered Strip", note: "Cotton covering for dry-type and special windings.", width: "4 – 20 mm", thickness: "0.8 – 3.5 mm", grade: "ETP Cu, 99.9% min", image: null },
  { slug: "enamelled-copper-strip", name: "Enamelled Copper Strip", note: "Polyester enamel coating for compact motor and transformer coils.", width: "3 – 16 mm", thickness: "0.8 – 3.0 mm", grade: "ETP Cu, 99.9% min", image: null },
  { slug: "ctc-conductor", name: "CTC Conductor", note: "Continuously transposed conductor for large power transformers.", width: "10 – 40 mm", thickness: "1.5 – 4.0 mm", grade: "ETP Cu, epoxy bonded", image: null },
];

export const reasons = [
  { title: "Made to your size", text: "Send the width and thickness you need. We quote for standard and custom sizes." },
  { title: "Insulation options", text: "Bare, paper covered, cotton covered or enamelled, to suit your winding." },
  { title: "Quotes on WhatsApp", text: "Message your requirement and we reply with a price and delivery time." },
  { title: "Dispatch from Jaipur", text: "We send orders to transformer makers and repair shops across India." },
];

export const industries = [
  "Power transformers", "Distribution transformers", "Switchgear and busbars", "Motors and generators",
  "Railways", "Solar and wind", "Welding equipment", "EV and automotive",
];

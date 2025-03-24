import { ProductType } from "./types/product";

export const products: ProductType[] = [
  {
    id: "1",
    name: "Fevicol SR",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20(SR-988).png",
    description: "Fevicol SR adhesive for strong bonding.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Strong Fevicol SR adhesive for professional and industrial applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20(SR-988).png",
    sizes: ["100ml", "200ml", "500ml", "1ltr"],
    variants: ["SR-988"],
    prices: [
      { currency: "INR", amount: 90 },
      { currency: "INR", amount: 170 },
      { currency: "INR", amount: 380 },
      { currency: "INR", amount: 720 },
    ],
  },
  {
    id: "2",
    name: "Fevicol Specialized",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20(SH).png",
    description:
      "Specialized Fevicol formulas for specific bonding requirements.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Specialized Fevicol formulas for unique bonding applications in various industries.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20(SH).png",
    sizes: ["none"],
    variants: ["SH"],
    prices: [{ currency: "INR", amount: 260 }],
  },
  {
    id: "3",
    name: "Fevicol Bulbond",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20BULBOND.png",
    description: "Fevicol Bulbond adhesive for specialized industrial bonding.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Heavy-duty Fevicol Bulbond adhesive for demanding industrial projects.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20BULBOND.png",
    sizes: ["500kg", "1kg"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 350 },
      { currency: "INR", amount: 650 },
    ],
  },
  {
    id: "4",
    name: "Fevicol Silicone",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20SILICONE.png",
    description:
      "Fevicol Silicone sealant for waterproof sealing applications.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "High-quality Fevicol Silicone sealant for various waterproof applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20SILICONE.png",
    sizes: ["none"],
    variants: ["White", "Clear", "Black"],
    prices: [
      { currency: "INR", amount: 180 },
      { currency: "INR", amount: 180 },
      { currency: "INR", amount: 180 },
    ],
  },
  {
    id: "5",
    name: "Fevicol Wood Fill",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20WOOD%20FILL.png",
    description: "Fevicol Wood Fill for repairing wood surfaces.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Quality Fevicol Wood Fill for wood surface repairs and filling.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20WOOD%20FILL.png",
    sizes: ["20ml", "50ml"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 75 },
      { currency: "INR", amount: 160 },
    ],
  },
  {
    id: "6",
    name: "Fevicol Fevi Kwik",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20FEVI%20KWIK.png",
    description: "Fevicol Fevi Kwik instant adhesive for quick bonding.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Quick-bonding Fevicol Fevi Kwik for instant adhesion in various applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20FEVI%20KWIK.png",
    sizes: ["500mg"],
    variants: ["none"],
    prices: [{ currency: "INR", amount: 25 }],
  },
  {
    id: "7",
    name: "Fevicol M-Seal",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20M-SEAL.png",
    description: "Fevicol M-Seal epoxy compound for sealing and repairs.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Waterproof epoxy putty Fevicol M-Seal for sealing and repairing applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20M-SEAL.png",
    sizes: ["25gm", "40gm", "90gm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 40 },
      { currency: "INR", amount: 60 },
      { currency: "INR", amount: 120 },
    ],
  },
  {
    id: "8",
    name: "Fevicol WD40",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20WD40.png",
    description: "Fevicol WD40 multi-purpose lubricant spray.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Versatile Fevicol WD40 lubricant spray for rust prevention and machinery maintenance.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20WD40.png",
    sizes: ["32gm", "63.8gm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 150 },
      { currency: "INR", amount: 280 },
    ],
  },
  {
    id: "9",
    name: "Fevicol Flex Kwik",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20FLEX%20KWIK.png",
    description: "Fevicol Flex Kwik adhesive for flexible, quick bonding.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Flexible and quick-setting Fevicol Flex Kwik for versatile bonding applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FEVICOL%20FLEX%20KWIK.png",
    sizes: ["20gm"],
    variants: ["none"],
    prices: [{ currency: "INR", amount: 45 }],
  },
  {
    id: "10",
    name: "Araldite Standard",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ARALDITE%20STANDARD.png",
    description: "Araldite Standard two-component epoxy adhesive.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Professional two-component Araldite Standard epoxy adhesive for durable bonds.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ARALDITE%20STANDARD.png",
    sizes: ["13gm", "36gm", "90gm", "180gm", "270gm", "450gm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 60 },
      { currency: "INR", amount: 150 },
      { currency: "INR", amount: 320 },
      { currency: "INR", amount: 580 },
      { currency: "INR", amount: 820 },
      { currency: "INR", amount: 1250 },
    ],
  },
  {
    id: "11",
    name: "Araldite Klear",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ARALDITE%20KLEAR.png",
    description:
      "Araldite Klear transparent epoxy adhesive for various applications.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Professional transparent Araldite Klear epoxy adhesive for specialized bonding needs.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ARALDITE%20KLEAR.png",
    sizes: ["10gm", "26gm", "90gm", "180gm", "270gm", "450gm"],
    variants: [],
    prices: [
      { currency: "INR", amount: 55 },
      { currency: "INR", amount: 125 },
      { currency: "INR", amount: 350 },
      { currency: "INR", amount: 650 },
      { currency: "INR", amount: 920 },
      { currency: "INR", amount: 1400 },
    ],
  },
  {
    id: "12",
    name: "Masking Tape",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/MASKING%20TAPE.png",
    description:
      "Masking tape for precision painting and sealing applications.",
    isOwnProduct: false,
    category: "Adhesive Products",
    inStock: true,
    metaDescriptions:
      "Professional masking tape for painting, sealing and DIY applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/MASKING%20TAPE.png",
    sizes: ['1/2"', '3/4"', '1"', '1-1/4"', '1-1/2"', '2"'],
    variants: [],
    prices: [
      { currency: "INR", amount: 25 },
      { currency: "INR", amount: 35 },
      { currency: "INR", amount: 45 },
      { currency: "INR", amount: 55 },
      { currency: "INR", amount: 65 },
      { currency: "INR", amount: 85 },
    ],
  },
  {
    id: "13",
    name: '4" (110mm) 2net Wheel',
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/4-%20(110mm)%20%202net%20WHEEL.png",

    description: "4 inch (110mm) 2net abrasive wheel for precision grinding.",
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      "Professional 4 inch (110mm) 2net abrasive wheel for precision metal grinding applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/4-%20(110mm)%202net%20WHEEL.png",
    sizes: [],
    variants: ["Green", "Black", "Red"],
    prices: [
      { currency: "INR", amount: 110 },
      { currency: "INR", amount: 110 },
      { currency: "INR", amount: 110 },
    ],
  },
  {
    id: "14",
    name: '5" (125mm) 2net Wheel',
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5%20-(125mm)%20%202net%20WHEEL.png",
    description:
      "5 inch (125mm) 2net abrasive wheel for precision larger surface grinding.",
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      "Professional 5 inch (125mm) 2net abrasive wheel for precision grinding on larger surfaces.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5%20-(125mm)%202net%20WHEEL.png",
    sizes: [],
    variants: ["Green", "Black"],
    prices: [
      { currency: "INR", amount: 135 },
      { currency: "INR", amount: 135 },
    ],
  },
  {
    id: "15",
    name: '4" x 6" Grinding Wheel',
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/4x%206%20Grinding%20Wheel.png",
    description: '4" x 6" grinding wheel for surface grinding applications.',
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      'Professional 4" x 6" grinding wheel for surface preparation and finishing.',
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/4x%206%20Grinding%20Wheel.png",
    sizes: [],
    variants: ["Green", "Black", "Red"],
    prices: [
      { currency: "INR", amount: 165 },
      { currency: "INR", amount: 165 },
      { currency: "INR", amount: 165 },
    ],
  },
  {
    id: "16",
    name: '5" x 6" Grinding Wheel',
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5x%206%20Grinding%20Wheel.png",
    description: '5" x 6" grinding wheel for surface grinding on larger areas.',
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      'Professional 5" x 6" grinding wheel for surface preparation on larger work areas.',
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5%20-(125mm)%202net%20WHEEL.png",
    sizes: [],
    variants: ["Green", "Black"],
    prices: [
      { currency: "INR", amount: 190 },
      { currency: "INR", amount: 190 },
    ],
  },
  {
    id: "17",
    name: '7" Grinding Wheel',
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/7%20GRINDING%20WHEEL.png",
    description: "7 inch grinding wheel for large-scale grinding applications.",
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      "Professional 7 inch grinding wheel for precision grinding on large-scale projects.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/7%20GRINDING%20WHEEL.png",
    sizes: [],
    variants: ["Green", "Black"],
    prices: [
      { currency: "INR", amount: 220 },
      { currency: "INR", amount: 220 },
    ],
  },
  {
    id: "18",
    name: " 4-100mm FLAP DISC",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/4(100mm)%20FLAP%20DISC.png",
    description:
      "Flap disc for material removal and finishing on metal surfaces.",
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      "Professional flop disc for efficient material removal and finishing on metal surfaces.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/4(100mm)%20FLAP%20DISC.png",
    sizes: [],
    variants: ["Grit 60", "Grit 80", "Grit 120"],
    prices: [
      { currency: "INR", amount: 55 },
      { currency: "INR", amount: 55 },
      { currency: "INR", amount: 55 },
    ],
  },
  {
    id: "19",
    name: "5 - 120mm VELCRO DISC",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5%20(120mm)%20VELCRO%20DISC.png",
    description: "Velcro backing disc for sanding with quick replacement.",
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      "Velcro backing disc for efficient sanding with easy disc replacement.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5%20(120mm)%20VELCRO%20DISC.png",
    sizes: ["none"],
    variants: ["80", "120"],
    prices: [
      { currency: "INR", amount: 35 },
      { currency: "INR", amount: 35 },
    ],
  },
  {
    id: "20",
    name: "Abrasive Water Paper",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ABRASIVE%20WATER%20PAPER.png",
    description: "Wet/dry sandpaper for water-based sanding applications.",
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      "Waterproof sandpaper for wet sanding applications with reduced clogging.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ABRASIVE%20WATER%20PAPER.png",
    sizes: ["none"],
    variants: ["60", "80", "100", "120", "150", "180", "220", "320"],
    prices: [
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 18 },
    ],
  },
  {
    id: "21",
    name: "Abrasive Roll Paper",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ABRASIVE%20ROLL%20PAPER.png",
    description: "Abrasive paper roll for sanding larger areas.",
    isOwnProduct: true,
    category: "Abrasive Wheels",
    inStock: true,
    metaDescriptions:
      "Abrasive paper roll for efficient sanding on extended surfaces.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ABRASIVE%20ROLL%20PAPER.png",
    sizes: ["none"],
    variants: ["50", "60", "80", "100", "120"],
    prices: [
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 120 },
    ],
  },
  {
    id: "22",
    name: "Spanner",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SPANNER.png",
    description: "Professional-grade spanners for fastening applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "High-quality spanners with hardened steel construction for durability and precise fit.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SPANNER.png",
    sizes: ["none"],
    variants: ["Double End", "Ring", "DOE Set", "Rings Set", "T-Spanner"],
    prices: [
      { currency: "INR", amount: 85 },
      { currency: "INR", amount: 95 },
      { currency: "INR", amount: 450 },
      { currency: "INR", amount: 480 },
      { currency: "INR", amount: 120 },
    ],
  },
  {
    id: "23",
    name: "Screw Driver",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SCREW%20DRIVER.png",
    description: "Professional screwdrivers for fastening applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Durable screwdrivers with ergonomic handles for comfortable and efficient use.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SCREW%20DRIVER.png",
    sizes: ["Mini", '3"', '4"', '6"', '8"', '10"', '12"', "Set"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 25 },
      { currency: "INR", amount: 35 },
      { currency: "INR", amount: 40 },
      { currency: "INR", amount: 50 },
      { currency: "INR", amount: 65 },
      { currency: "INR", amount: 80 },
      { currency: "INR", amount: 95 },
      { currency: "INR", amount: 350 },
    ],
  },
  {
    id: "24",
    name: "Tester",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/TESTER.png",
    description: "Electrical testers for checking voltage in circuits.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Reliable electrical testers with LED indicators for safe voltage detection.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/TESTER.png",
    sizes: ["none"],
    variants: ["Mini", "Long"],
    prices: [
      { currency: "INR", amount: 30 },
      { currency: "INR", amount: 45 },
    ],
  },
  {
    id: "25",
    name: "Cutting Plier",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CUTTING%20PLIER.png",
    description: "Cutting pliers for wire and cable cutting applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional cutting pliers with hardened cutting edges for clean and efficient wire cutting.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CUTTING%20PLIER.png",
    sizes: ['6"', '8"'],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 95 },
      { currency: "INR", amount: 120 },
    ],
  },
  {
    id: "26",
    name: "Nose Plier",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/NOSE%20PLIER.png",
    description:
      "Long nose pliers for precision gripping and manipulation in tight spaces.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional long nose pliers with serrated jaws for enhanced grip in detailed work.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/NOSE%20PLIER.png",
    sizes: ['6"', '8"'],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 95 },
      { currency: "INR", amount: 120 },
    ],
  },
  {
    id: "27",
    name: "Wire Striper",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/WIRE%20STRIPER.png",
    description:
      "Precision wire stripper for clean removal of insulation from electrical wires.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional wire stripper with multiple gauges for efficient and damage-free insulation removal.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/WIRE%20STRIPER.png",
    sizes: ["none"],
    variants: ["none"],
    prices: [{ currency: "INR", amount: 85 }],
  },
  {
    id: "28",
    name: "Pipe Wrenches",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20HAMMER.png",
    description: "Pipe wrench for plumbing and pipe fitting applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Durable pipe wrench with hardened teeth for secure grip on pipes and fittings.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20HAMMER.png",
    sizes: ["10inch", "12inch", "14inch", "18inch", "24inch"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 210 },
      { currency: "INR", amount: 250 },
      { currency: "INR", amount: 320 },
      { currency: "INR", amount: 420 },
      { currency: "INR", amount: 580 },
    ],
  },
  {
    id: "29",
    name: "Adjustable Wrenches",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ADJUSTABLE%20WRENCHES.png",
    description: "Adjustable wrench for versatile fastening applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Precision adjustable wrench with smooth jaw adjustment for various fastener sizes.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ADJUSTABLE%20WRENCHES.png",
    sizes: ["6inch", "8inch", "10inch", "12inch", "14inch"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 150 },
      { currency: "INR", amount: 190 },
      { currency: "INR", amount: 240 },
      { currency: "INR", amount: 320 },
    ],
  },
  {
    id: "30",
    name: "Carpenter Pincer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CARPENTER%20PINCER.png",
    description:
      "Carpenter pincer for nail extraction and wood working applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional carpenter pincer with hardened jaws for effective nail pulling and cutting.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CARPENTER%20PINCER.png",
    sizes: ["6inch", "8inch"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 110 },
      { currency: "INR", amount: 150 },
    ],
  },
  {
    id: "31",
    name: "Tin Cutter",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/TIN%20CUTTER.png",
    description: "Tin cutter for precision cutting of sheet metal.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional tin cutter with compound action for clean cuts through sheet metal with minimal effort.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/TIN%20CUTTER.png",
    sizes: ["8inch", "10inch", "12inch", "14inch"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 180 },
      { currency: "INR", amount: 220 },
      { currency: "INR", amount: 280 },
      { currency: "INR", amount: 350 },
    ],
  },
  {
    id: "33",
    name: "Aviation Snip",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/AVAIATION%20SNIP.png",
    description:
      "10-inch aviation snip for precision cutting of sheet metal in various directions.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional 10-inch aviation snip with color-coded handles for easy identification of cutting direction.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/AVAIATION%20SNIP.png",
    sizes: ["10inch"],
    variants: ["none"],
    prices: [{ currency: "INR", amount: 250 }],
  },
  {
    id: "34",
    name: "Fiber Sledge Hammer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FIBER%20SLEDGE%20HAMMER.png",
    description: "Fiber handle sledge hammer for reduced vibration during use.",
    isOwnProduct: false,
    category: "Hammers",
    inStock: true,
    metaDescriptions:
      "Ergonomic fiber handle sledge hammer with non-slip grip for comfortable and precise striking.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FIBER%20SLEDGE%20HAMMER.png",
    sizes: ["1Lb", "1.5Lb", "2Lb", "3Lb"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 220 },
      { currency: "INR", amount: 260 },
      { currency: "INR", amount: 290 },
      { currency: "INR", amount: 350 },
    ],
  },
  {
    id: "35",
    name: "Claw Hammer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CLAW%20HAMMER.png",
    description:
      "Claw hammer for precision nail driving and removal in carpentry work.",
    isOwnProduct: false,
    category: "Hammers",
    inStock: true,
    metaDescriptions:
      "Professional claw hammer with balanced head for detailed woodworking and finishing applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CLAW%20HAMMER.png",
    sizes: ["1/2Lb", "1Lb"],
    variants: ["Wooden Handle", "27mm Fiber"],
    prices: [
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 150 },
      { currency: "INR", amount: 180 },
    ],
  },
  {
    id: "36",
    name: "Pipe Hammer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20HAMMER.png",
    description: "Pipe hammer for plumbing and pipe fitting applications.",
    isOwnProduct: false,
    category: "Hammers",
    inStock: true,
    metaDescriptions:
      "Professional pipe hammer with specialized head design for plumbing installations and pipe fitting work.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20HAMMER.png",
    sizes: ["3/4Lb", "1Lb"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 140 },
      { currency: "INR", amount: 160 },
    ],
  },
  {
    id: "37",
    name: "Rubber Hammer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/RUBBER%20HAMMER.png",
    description:
      "Rubber hammer for non-marking impact in assembly and woodworking.",
    isOwnProduct: false,
    category: "Hammers",
    inStock: true,
    metaDescriptions:
      "Professional rubber hammer with soft face for gentle striking on delicate surfaces without causing damage.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/RUBBER%20HAMMER.png",
    sizes: ["380Gm", "480Gm", "620Gm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 130 },
      { currency: "INR", amount: 150 },
      { currency: "INR", amount: 180 },
    ],
  },
  {
    id: "38",
    name: "Hexa Bolt",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HEXA%20BOLT.png",
    description: "Hexagonal bolt for general fastening applications.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Standard hexagonal bolt with precise threading for secure fastening applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HEXA%20BOLT.png",
    sizes: ['6mm (1/4")', '8mm (5/16")'],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 18 },
    ],
  },
  {
    id: "39",
    name: "Hand Saw",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HAND%20SAW.png",
    description: "General purpose hand saw for wood cutting applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional hand saw with precision-ground teeth for smooth, efficient cutting in various woodworking applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HAND%20SAW.png",
    sizes: ["none"],
    variants: ["none"],
    prices: [{ currency: "INR", amount: 220 }],
  },
  {
    id: "40",
    name: "Hacksaw",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HACKSAW.png",
    description: "Hacksaw for metal cutting applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional hacksaw with adjustable blade tension for precise cutting of metal and plastic materials.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HACKSAW.png",
    sizes: ["none"],
    variants: ["Wood Frame", "PVC Frame", "Mini Frame"],
    prices: [
      { currency: "INR", amount: 180 },
      { currency: "INR", amount: 160 },
      { currency: "INR", amount: 120 },
    ],
  },
  {
    id: "41",
    name: "Poker",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/POCKER.png",
    description: "Poker tool for fire management and maintenance.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Fire poker with heat-resistant design for safely managing fireplaces and wood stoves.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/POCKER.png",
    sizes: ["none"],
    variants: ["Wood", "PVC"],
    prices: [
      { currency: "INR", amount: 55 },
      { currency: "INR", amount: 45 },
    ],
  },
  {
    id: "42",
    name: "Jack Planner",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/JACK%20PLANNER.png",
    description: "Jack planner for woodworking and smoothing applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional jack planner with adjustable blade depth for versatile woodworking and carpentry applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/JACK%20PLANNER.png",
    sizes: ["1 inch", "1 1/4 inch", "1 1/2 inch"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 180 },
      { currency: "INR", amount: 210 },
      { currency: "INR", amount: 240 },
    ],
  },
  {
    id: "43",
    name: "Chisel",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CHISEL.png",
    description: "Wood chisel for woodworking and joinery applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional wood chisel with hardened steel blade for detailed carpentry work and accurate joinery applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CHISEL.png",
    sizes: [
      "1/2 inch",
      "3/4 inch",
      "1 inch",
      "1 1/4 inch",
      "1 1/2 inch",
      "2 inch",
      "2 1/2 inch",
      "3 inch",
    ],
    variants: ["Wood", "Concrete"],
    prices: [
      { currency: "INR", amount: 85 },
      { currency: "INR", amount: 95 },
      { currency: "INR", amount: 110 },
      { currency: "INR", amount: 125 },
      { currency: "INR", amount: 140 },
      { currency: "INR", amount: 160 },
      { currency: "INR", amount: 180 },
      { currency: "INR", amount: 210 },
    ],
  },
  {
    id: "44",
    name: "Oil Can",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/OIL%20CAN.png",
    description: "Oil can for precision lubrication of tools and machinery.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Precision oil can with controlled flow spout for accurate lubrication of tools, machinery, and mechanical components.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/OIL%20CAN.png",
    sizes: ["1/4 litre", "1/2 litre", "3/4 litre"],
    variants: ["None"],
    prices: [
      { currency: "INR", amount: 65 },
      { currency: "INR", amount: 85 },
      { currency: "INR", amount: 110 },
    ],
  },
  {
    id: "45",
    name: "Flat Bit Set",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FLAT%20BIT%20SET.png",
    description:
      "Comprehensive set of flat drill bits for woodworking applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional flat bit set with multiple sizes for versatile hole drilling in various woodworking and carpentry projects.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FLAT%20BIT%20SET.png",
    sizes: ["None"],
    variants: ["None"],
    prices: [{ currency: "INR", amount: 320 }],
  },
  {
    id: "46",
    name: "Scrabber",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SCRABBER.png",
    description:
      "Scraper tool with handle for surface preparation and cleaning.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Ergonomic scraper with comfortable handle for efficient paint removal and surface preparation in renovation projects.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SCRABBER.png",
    sizes: ["3 inch", "4 inch"],
    variants: ["None"],
    prices: [
      { currency: "INR", amount: 65 },
      { currency: "INR", amount: 75 },
    ],
  },
  {
    id: "47",
    name: "Spirit Level",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SPIRIT%20LEVEL.png",
    description:
      "Magnetic spirit level for accurate horizontal and vertical alignment.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional spirit level with magnetic edge for hands-free operation on metal surfaces in construction applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SPIRIT%20LEVEL.png",
    sizes: ["1 feet", "1 1/5 feet", "2 feet"],
    variants: ["With Magnet", "Without Magnet"],
    prices: [
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 140 },
      { currency: "INR", amount: 180 },
    ],
  },
  {
    id: "48",
    name: "Plumbob",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20WRENCHES.png",
    description: "Wooden plumb bob for vertical alignment applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Traditional wooden plumb bob with brass tip for accurate vertical alignment in construction and framing projects.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20WRENCHES.png",
    sizes: ["None"],
    variants: ["Medium", "Large"],
    prices: [
      { currency: "INR", amount: 85 },
      { currency: "INR", amount: 105 },
    ],
  },
  {
    id: "49",
    name: "Trowel",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/trowel%20new.png",
    description: "Trowel for concrete and masonry finishing applications.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional trowel for creating fine texture on concrete and plaster surfaces in construction work.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/trowel%20new.png",
    sizes: ["None"],
    variants: ["Wood", "Yellow", "Dekok", "Orange", "Blue"],
    prices: [
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 140 },
      { currency: "INR", amount: 160 },
      { currency: "INR", amount: 150 },
      { currency: "INR", amount: 145 },
    ],
  },
  {
    id: "50",
    name: "Hercules Gloves",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HERCULES%20GLOVES.png",
    description:
      "Heavy-duty Hercules gloves for maximum protection in demanding environments.",
    isOwnProduct: true,
    category: "Safety Equipment",
    inStock: true,
    metaDescriptions:
      "Premium Hercules heavy-duty gloves with reinforced palm and knuckle protection for maximum safety in extreme working conditions.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HERCULES%20GLOVES.png",
    sizes: ["none"],
    variants: ["none"],
    prices: [{ currency: "INR", amount: 145 }],
  },
  {
    id: "51",
    name: "Hexa Nut",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HEXA%20NUT.png",
    description: "Hexagonal nut for securing bolts.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Precision-manufactured hexagonal nut with uniform threading for secure fastening in assembly and construction projects.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/HEXA%20NUT.png",
    sizes: [
      '6mm (1/4")',
      '8mm (5/16")',
      '10mm (3/8")',
      '12mm (1/2")',
      '16mm (5/8")',
      '18mm (3/4")',
      '20mm (1")',
    ],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 3 },
      { currency: "INR", amount: 4 },
      { currency: "INR", amount: 6 },
      { currency: "INR", amount: 8 },
      { currency: "INR", amount: 12 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 18 },
    ],
  },
  {
    id: "52",
    name: "Washer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/RUBBER%20WASHER.png",
    description:
      "Flat washer for use with bolts and screws to distribute load.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Flat washer with uniform thickness for even load distribution in fastening applications with bolts and screws.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/RUBBER%20WASHER.png",
    sizes: ['1/4"', '5/16"', '3/8"', '1/2"', '5/8"', '3/4"', '1"'],
    variants: ["Standard", "Nail"],
    prices: [
      { currency: "INR", amount: 2 },
      { currency: "INR", amount: 3 },
      { currency: "INR", amount: 4 },
      { currency: "INR", amount: 5 },
      { currency: "INR", amount: 6 },
      { currency: "INR", amount: 8 },
      { currency: "INR", amount: 10 },
      { currency: "INR", amount: 2 },
    ],
  },
  {
    id: "53",
    name: "Anchor Bolt",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ANCHOR%20BOLT.png",
    description:
      "Anchor bolt for securing objects to concrete and masonry surfaces.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Precision-engineered anchor bolts with expanding mechanism for reliable fastening in concrete and masonry applications requiring various load capacities.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ANCHOR%20BOLT.png",
    sizes: ["6mm", "8mm", "10mm", "12mm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 12 },
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 18 },
      { currency: "INR", amount: 22 },
    ],
  },
  {
    id: "54",
    name: "Eye Hook",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/EYE%20HOOK.png",
    description: "Eye hook for hanging objects and securing cables or ropes.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Versatile eye hooks with precision-formed eyes for secure hanging and attachment of cables, ropes, and fixtures in various applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/EYE%20HOOK.png",
    sizes: ["6mm", "8mm", "10mm", "12mm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 10 },
      { currency: "INR", amount: 14 },
      { currency: "INR", amount: 18 },
      { currency: "INR", amount: 22 },
    ],
  },
  {
    id: "55",
    name: "Pipe Anchor Bolt",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20ANCHOR%20BOLT.png",
    description:
      "Pipe anchor bolt for securing pipes to concrete and masonry surfaces.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Specialized pipe anchor bolts with curved profile for secure mounting of pipes and conduits to concrete and masonry surfaces in various applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PIPE%20ANCHOR%20BOLT.png",
    sizes: ["6mm", "8mm", "10mm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 15 },
      { currency: "INR", amount: 18 },
      { currency: "INR", amount: 22 },
    ],
  },
  {
    id: "56",
    name: "Coach Screw",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/COACH%20SCREW.png",
    description:
      "Coach screw for securing wood to wood or wood to masonry applications.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Versatile coach screws with hexagonal head and wood thread for secure fastening in timber construction and wooden structures.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/COACH%20SCREW.png",
    sizes: ["6mm", "8mm", "10mm"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 12 },
      { currency: "INR", amount: 16 },
      { currency: "INR", amount: 20 },
    ],
  },
  {
    id: "57",
    name: "Rack Bolt",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PVC%20PAD%205.png",
    description:
      "Specialized rack bolt for securing shelving and racking systems.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Precision-engineered rack bolt with reinforced shank and specialized thread pattern for secure installation of shelving, racking systems, and heavy storage units.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PVC%20PAD%205.png",
    sizes: ["none"],
    variants: ["none"],
    prices: [{ currency: "INR", amount: 22 }],
  },
  {
    id: "58",
    name: "Cot Bolt",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CUTTING%20PLIER.png",
    description: "Cot bolt for furniture assembly and bed frame construction.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Specialized cot bolts with barrel nut design for secure, detachable connections in wooden bed frames, cots, and furniture assembly.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/CUTTING%20PLIER.png",
    sizes: ["6inch", "7inch", "8inch"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 18 },
      { currency: "INR", amount: 22 },
      { currency: "INR", amount: 26 },
    ],
  },
  {
    id: "59",
    name: "Rubber Washer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/RUBBER%20WASHER.png",
    description:
      "Rubber washer for sealing and vibration dampening applications.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Durable rubber washers for water-tight sealing, vibration reduction, and blind plugs in plumbing and mechanical applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/RUBBER%20WASHER.png",
    sizes: ["none"],
    variants: ["With Hole", "Without Hole"],
    prices: [
      { currency: "INR", amount: 5 },
      { currency: "INR", amount: 5 },
    ],
  },
  {
    id: "60",
    name: "Fisher Plug",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FISHER%20PLUG.png",
    description: "Fisher plug for wall mounting applications.",
    isOwnProduct: false,
    category: "Fasteners",
    inStock: true,
    metaDescriptions:
      "Expanding fisher plugs with ribbed design for secure anchoring of fixtures and fittings in various wall materials.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/FISHER%20PLUG.png",
    sizes: ["S5", "S6", "S8", "S10", "S12"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 2 },
      { currency: "INR", amount: 3 },
      { currency: "INR", amount: 4 },
      { currency: "INR", amount: 5 },
      { currency: "INR", amount: 6 },
    ],
  },
  {
    id: "61",
    name: "Fiber Disc",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5%20(125mm)%20FIBER%20DISC.png",
    description:
      "High-quality fiber disc for grinding, sanding, and finishing applications.",
    isOwnProduct: true,
    category: "Abrasives",
    inStock: true,
    metaDescriptions:
      "Durable fiber discs for professional grinding, sanding, and finishing applications in metal, wood, and composite materials.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/5%20(125mm)%20FIBER%20DISC.png",
    sizes: ["125mm", "100mm", "115mm", "180mm"],
    variants: ["36 Grit", "60 Grit", "80 Grit", "120 Grit"],
    prices: [
      { currency: "INR", amount: 45 },
      { currency: "INR", amount: 40 },
      { currency: "INR", amount: 42 },
      { currency: "INR", amount: 38 },
    ],
  },
  {
    id: "62",
    name: "Allen Key Set",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ALLENKEY%20SET.png",
    description:
      "Comprehensive set of Allen keys for hex socket screws and bolts.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional-grade Allen key set with multiple sizes for precision work in furniture assembly, bicycle maintenance, and general repair applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ALLENKEY%20SET.png",
    sizes: ["9-piece", "10-piece", "12-piece"],
    variants: ["Metric", "Imperial"],
    prices: [
      { currency: "INR", amount: 180 },
      { currency: "INR", amount: 220 },
      { currency: "INR", amount: 280 },
    ],
  },
  {
    id: "63",
    name: "GI Wire",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/GI%20WIRE.png",
    description:
      "Galvanized iron wire for construction, fencing, and general binding applications.",
    isOwnProduct: true,
    category: "Construction Materials",
    inStock: true,
    metaDescriptions:
      "Corrosion-resistant galvanized iron wire for construction, fencing, crafts, and general binding applications with excellent tensile strength.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/GI%20WIRE.png",
    sizes: ["18 Gauge", "20 Gauge", "22 Gauge"],
    variants: ["1kg Roll", "2kg Roll", "5kg Roll"],
    prices: [
      { currency: "INR", amount: 120 },
      { currency: "INR", amount: 230 },
      { currency: "INR", amount: 550 },
    ],
  },
  {
    id: "64",
    name: "Green Coated PVC Wire",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/GREEN%20COATED%20PVC%20WIRE.png",
    description: "PVC coated wire for garden, fencing, and craft applications.",
    isOwnProduct: true,
    category: "Garden & Outdoor",
    inStock: true,
    metaDescriptions:
      "Weather-resistant green PVC coated wire for garden supports, plant ties, fencing, and craft projects with enhanced durability.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/GREEN%20COATED%20PVC%20WIRE.png",
    sizes: ["0.8mm", "1.0mm", "1.2mm"],
    variants: ["1kg Roll", "2kg Roll", "5kg Roll"],
    prices: [
      { currency: "INR", amount: 150 },
      { currency: "INR", amount: 290 },
      { currency: "INR", amount: 680 },
    ],
  },
  {
    id: "67",
    name: "PVC Pad",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PVC%20PAD%205.png",
    description: "PVC protective pads for furniture and floor protection.",
    isOwnProduct: true,
    category: "Home Improvement",
    inStock: true,
    metaDescriptions:
      "Durable PVC protective pads for furniture legs and sensitive surfaces to prevent scratches and reduce noise on floors.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/PVC%20PAD%205.png",
    sizes: ["Small", "Medium", "Large"],
    variants: ["Round", "Square", "Rectangular"],
    prices: [
      { currency: "INR", amount: 25 },
      { currency: "INR", amount: 35 },
      { currency: "INR", amount: 45 },
    ],
  },
  {
    id: "68",
    name: "Stainless Steel Polishing Wheel",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/STAINLESS%20STEEL%20POLISHING%20WHEEL.png",
    description:
      "Specialized wheel for polishing stainless steel surfaces to a mirror finish.",
    isOwnProduct: true,
    category: "Abrasives",
    inStock: true,
    metaDescriptions:
      "Professional-grade stainless steel polishing wheel for achieving mirror finishes on metal surfaces in fabrication and restoration projects.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/STAINLESS%20STEEL%20POLISHING%20WHEEL.png",
    sizes: ['4"', '5"', '6"', '7"'],
    variants: ["Soft", "Medium", "Hard"],
    prices: [
      { currency: "INR", amount: 220 },
      { currency: "INR", amount: 280 },
      { currency: "INR", amount: 350 },
      { currency: "INR", amount: 420 },
    ],
  },
  {
    id: "69",
    name: "Wood Sledge Hammer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/WOOD%20SLEDGE%20HAMMER.png",
    description:
      "Heavy-duty sledge hammer with wooden handle for demolition and construction.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Robust wood-handled sledge hammer for demolition, driving stakes, and heavy construction applications with balanced weight distribution.",
    metaImages: "altraders/product_images/WOOD SLEDGE HAMMER.png",
    sizes: ["2lb", "4lb", "6lb", "8lb", "10lb"],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 320 },
      { currency: "INR", amount: 450 },
      { currency: "INR", amount: 580 },
      { currency: "INR", amount: 720 },
      { currency: "INR", amount: 850 },
    ],
  },
  {
    id: "70",
    name: "Concrete Cutting Blade",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/concret%20cutting%20blade.png",
    description:
      "Diamond blade designed for cutting concrete, masonry, and stone materials.",
    isOwnProduct: true,
    category: "Cutting Tools",
    inStock: true,
    metaDescriptions:
      "Professional diamond-tipped concrete cutting blade for clean, precise cuts in concrete, masonry, stone, and other hard construction materials.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/concret%20cutting%20blade.png",
    sizes: ['4"', '5"', '7"', '9"', '14"'],
    variants: ["Segmented", "Continuous Rim"],
    prices: [
      { currency: "INR", amount: 350 },
      { currency: "INR", amount: 450 },
      { currency: "INR", amount: 650 },
      { currency: "INR", amount: 950 },
      { currency: "INR", amount: 1450 },
    ],
  },
  {
    id: "71",
    name: "Diamond Cut Marble Blade",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/dioment%20cut%20marble%20blade.png",
    description:
      "Specialized diamond blade for cutting marble, granite, and other decorative stones.",
    isOwnProduct: true,
    category: "Cutting Tools",
    inStock: true,
    metaDescriptions:
      "Precision diamond-tipped marble cutting blade designed for smooth, chip-free cuts in marble, granite, and other decorative stone materials.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/dioment%20cut%20marble%20blade.png",
    sizes: ['4"', '5"', '7"', '9"', '14"'],
    variants: ["Super Thin", "Standard"],
    prices: [
      { currency: "INR", amount: 380 },
      { currency: "INR", amount: 480 },
      { currency: "INR", amount: 680 },
      { currency: "INR", amount: 980 },
      { currency: "INR", amount: 1580 },
    ],
  },
  {
    id: "72",
    name: "Rim Blade",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/rim%20blade.png",
    description:
      "Continuous rim blade for precise cutting of tiles, porcelain, and ceramic.",
    isOwnProduct: true,
    category: "Cutting Tools",
    inStock: true,
    metaDescriptions:
      "Smooth continuous rim blade for precision cutting of ceramic tiles, porcelain, and delicate materials with minimal chipping.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/rim%20blade.png",
    sizes: ['4"', '5"', '7"', '9"'],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 320 },
      { currency: "INR", amount: 420 },
      { currency: "INR", amount: 620 },
      { currency: "INR", amount: 920 },
    ],
  },
  {
    id: "73",
    name: "Turbo Tile Cutter",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/turbo%20tile%20cutter.png",
    description:
      "Turbo-style diamond blade for fast cutting of tiles, ceramic, and stone.",
    isOwnProduct: true,
    category: "Cutting Tools",
    inStock: true,
    metaDescriptions:
      "High-speed turbo tile cutter with diamond-tipped segments for rapid, clean cutting of tiles, ceramics, and natural stone materials.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/turbo%20tile%20cutter.png",
    sizes: ['4"', '5"', '7"', '9"'],
    variants: ["none"],
    prices: [
      { currency: "INR", amount: 340 },
      { currency: "INR", amount: 440 },
      { currency: "INR", amount: 640 },
      { currency: "INR", amount: 940 },
    ],
  },
  {
    id: "74",
    name: "Miscellaneous Hardware",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/pngegg (11).png",
    description:
      "Assorted hardware items for various construction and repair applications.",
    isOwnProduct: true,
    category: "Hardware",
    inStock: true,
    metaDescriptions:
      "Quality hardware components for construction, repair, and DIY projects with reliable performance and durability.",
    metaImages: "altraders/product_images/pngegg (11).png",
    sizes: ["none"],
    variants: ["Clamps", "Brackets", "Hinges", "Hooks", "Latches"],
    prices: [
      { currency: "INR", amount: 45 },
      { currency: "INR", amount: 60 },
      { currency: "INR", amount: 75 },
      { currency: "INR", amount: 35 },
      { currency: "INR", amount: 50 },
    ],
  },
  {
    id: "75",
    name: "TCT Saw Blade",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/Untitled-2.png",
    description:
      "Premium tungsten carbide tipped circular saw blade for precise cutting in wood, plastic, and soft metals.",
    isOwnProduct: true,
    category: "Cutting Tools",
    inStock: true,
    metaDescriptions:
      "Professional-grade TCT circular saw blades with precision-ground teeth for clean, accurate cuts in various materials including wood, laminate, and non-ferrous metals.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/Untitled-2.png",
    sizes: ["185mm", "210mm", "235mm", "250mm"],
    variants: ["24T", "40T", "60T", "80T"],
    prices: [
      { currency: "INR", amount: 650 },
      { currency: "INR", amount: 780 },
      { currency: "INR", amount: 950 },
      { currency: "INR", amount: 1100 },
    ],
  },
  {
    id: "76",
    name: "Wood Sledge Hammer",
    images:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/WOOD%20SLEDGE%20HAMMER.png",
    description:
      "Heavy-duty wooden sledge hammer with durable hardwood handle and solid steel head for construction and demolition tasks.",
    isOwnProduct: false,
    category: "Hand Tools",
    inStock: true,
    metaDescriptions:
      "Professional-grade wooden sledge hammers with ergonomic hardwood handles and balanced steel heads for maximum impact force in construction, demolition, and landscaping applications.",
    metaImages:
      "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/WOOD%20SLEDGE%20HAMMER.png",
    sizes: ["2kg", "3kg", "4kg", "5kg"],
    variants: [
      "Standard Handle",
      "Fiberglass Handle",
      "Anti-Vibration Handle",
      "Extended Length",
    ],
    prices: [
      { currency: "INR", amount: 850 },
      { currency: "INR", amount: 1200 },
      { currency: "INR", amount: 1450 },
      { currency: "INR", amount: 1600 },
    ],
  },
];

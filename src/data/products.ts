export const info = {
  name: "TENDER",
  description: "A curated selection of high-quality products across various categories.", 
};

export const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    slug: "premium-cotton-t-shirt",
    category: "Clothing",
    price: 39.99,
    oldPrice: 49.99,
    currency: "USD",

    rating: 4.8,
    reviews: 124,

    stock: 18,
    sku: "TSH-001",

    description:
      "A premium cotton t-shirt designed for everyday comfort. Made from soft, breathable cotton with a modern fit that works perfectly for casual and everyday outfits.",

    shortDescription:
      "Premium breathable cotton t-shirt with a comfortable modern fit.",

    features: [
      "100% premium cotton",
      "Soft and breathable fabric",
      "Modern regular fit",
      "Machine washable",
      "Lightweight construction",
      "Available in multiple colors",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Gray",
        value: "#9ca3af",
      },
    ],

    sizes: ["S", "M", "L", "XL", "XXL"],

    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=1200",
    ],

    tags: ["t-shirt", "cotton", "clothing", "casual"],
  },

  {
    id: 2,
    name: "Classic Sneakers",
    slug: "classic-sneakers",
    category: "Shoes",
    price: 89.99,
    currency: "USD",

    rating: 4.7,
    reviews: 89,

    stock: 12,
    sku: "SNK-002",

    description:
      "Classic everyday sneakers combining timeless design with lightweight comfort. Perfect for casual outfits, walking and everyday use.",

    shortDescription:
      "Classic lightweight sneakers designed for everyday comfort.",

    features: [
      "Lightweight construction",
      "Comfortable cushioned sole",
      "Durable upper material",
      "Breathable interior",
      "Classic everyday design",
      "Non-slip outsole",
    ],

    colors: [
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Blue",
        value: "#2563eb",
      },
    ],

    sizes: ["39", "40", "41", "42", "43", "44", "45"],

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200",
    ],

    tags: ["shoes", "sneakers", "casual", "footwear"],
  },

  {
    id: 3,
    name: "Minimal Backpack",
    slug: "minimal-backpack",
    category: "Accessories",
    price: 59.99,
    currency: "USD",

    rating: 4.6,
    reviews: 64,

    stock: 25,
    sku: "BAG-003",

    description:
      "A minimal and practical backpack designed for work, travel and everyday use. Its clean design provides plenty of space while maintaining a lightweight profile.",

    shortDescription:
      "Minimal water-resistant backpack for work, travel and everyday use.",

    features: [
      "Water-resistant material",
      "Dedicated laptop compartment",
      "Multiple storage pockets",
      "Adjustable shoulder straps",
      "Lightweight construction",
      "Minimal modern design",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Gray",
        value: "#6b7280",
      },
      {
        name: "Green",
        value: "#166534",
      },
    ],

    sizes: ["One Size"],

    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=1200",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=1200",
    ],

    tags: ["backpack", "bag", "travel", "accessories"],
  },

  {
    id: 4,
    name: "Classic Watch",
    slug: "classic-watch",
    category: "Accessories",
    price: 129.99,
    oldPrice: 159.99,
    currency: "USD",

    rating: 4.9,
    reviews: 156,

    stock: 9,
    sku: "WAT-004",

    description:
      "A timeless classic watch featuring a clean dial, premium materials and an elegant design suitable for both formal and casual occasions.",

    shortDescription:
      "Elegant classic watch with a timeless design and premium finish.",

    features: [
      "Premium stainless steel case",
      "Scratch-resistant glass",
      "Adjustable metal strap",
      "Water resistant",
      "Quartz movement",
      "Minimal classic dial",
    ],

    colors: [
      {
        name: "Silver",
        value: "#d1d5db",
      },
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Gold",
        value: "#d4a017",
      },
    ],

    sizes: ["One Size"],

    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200",
    ],

    tags: ["watch", "accessories", "classic", "luxury"],
  },

  {
    id: 5,
    name: "Oversized Hoodie",
    slug: "oversized-hoodie",
    category: "Clothing",
    price: 69.99,
    currency: "USD",

    rating: 4.8,
    reviews: 98,

    stock: 21,
    sku: "HOD-005",

    description:
      "A comfortable oversized hoodie made from a soft fleece blend. Designed for a relaxed fit and perfect for casual everyday wear.",

    shortDescription:
      "Soft oversized hoodie with a relaxed fit for everyday comfort.",

    features: [
      "Soft fleece blend",
      "Oversized relaxed fit",
      "Adjustable drawstring hood",
      "Kangaroo front pocket",
      "Ribbed cuffs",
      "Warm and comfortable",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Cream",
        value: "#f5f5dc",
      },
      {
        name: "Gray",
        value: "#9ca3af",
      },
      {
        name: "Brown",
        value: "#78350f",
      },
    ],

    sizes: ["S", "M", "L", "XL", "XXL"],

    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=1200",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200",
    ],

    tags: ["hoodie", "clothing", "casual", "streetwear"],
  },

  {
    id: 6,
    name: "Running Shoes",
    slug: "running-shoes",
    category: "Shoes",
    price: 109.99,
    currency: "USD",

    rating: 4.7,
    reviews: 112,

    stock: 16,
    sku: "RUN-006",

    description:
      "Lightweight running shoes engineered for comfort and everyday performance. The cushioned sole provides excellent support during running, walking and training.",

    shortDescription:
      "Lightweight running shoes with responsive cushioning and excellent support.",

    features: [
      "Lightweight mesh upper",
      "Responsive cushioning",
      "Breathable construction",
      "Flexible outsole",
      "Shock absorption",
      "Designed for running and training",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Blue",
        value: "#2563eb",
      },
      {
        name: "Red",
        value: "#dc2626",
      },
    ],

    sizes: ["39", "40", "41", "42", "43", "44", "45", "46"],

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1200",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200",
    ],

    tags: ["running", "shoes", "sports", "training"],
  },

  {
    id: 7,
    name: "Leather Wallet",
    slug: "leather-wallet",
    category: "Accessories",
    price: 44.99,
    currency: "USD",

    rating: 4.8,
    reviews: 73,

    stock: 30,
    sku: "WAL-007",

    description:
      "A compact leather wallet crafted for everyday use. Its slim profile provides enough space for cards, cash and essential documents without unnecessary bulk.",

    shortDescription:
      "Slim genuine leather wallet with a practical everyday design.",

    features: [
      "Genuine leather",
      "Slim compact profile",
      "Multiple card slots",
      "Cash compartment",
      "Durable stitching",
      "RFID protection",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Brown",
        value: "#78350f",
      },
      {
        name: "Tan",
        value: "#a16207",
      },
    ],

    sizes: ["One Size"],

    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200",
    ],

    tags: ["wallet", "leather", "accessories", "cards"],
  },

  {
    id: 8,
    name: "Basic Sweatshirt",
    slug: "basic-sweatshirt",
    category: "Clothing",
    price: 54.99,
    currency: "USD",

    rating: 4.5,
    reviews: 58,

    stock: 27,
    sku: "SWT-008",

    description: "A versatile basic sweatshirt made from a soft cotton blend. Its clean design makes it easy to combine with jeans, trousers or casual sportswear.",

    shortDescription: "Soft cotton-blend sweatshirt with a clean and versatile design.",

    features: [
      "Soft cotton blend",
      "Regular comfortable fit",
      "Ribbed neckline",
      "Ribbed cuffs",
      "Durable construction",
      "Easy to layer",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Gray",
        value: "#9ca3af",
      },
      {
        name: "Navy",
        value: "#1e3a8a",
      },
    ],

    sizes: ["S", "M", "L", "XL", "XXL"],

    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=1200", "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200"],

    tags: ["sweatshirt", "clothing", "casual", "basic"],
  },

  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    slug: "premium-cotton-t-shirt",
    category: "Clothing",
    price: 39.99,
    oldPrice: 49.99,
    currency: "USD",

    rating: 4.8,
    reviews: 124,

    stock: 18,
    sku: "TSH-001",

    description:
      "A premium cotton t-shirt designed for everyday comfort. Made from soft, breathable cotton with a modern fit that works perfectly for casual and everyday outfits.",

    shortDescription:
      "Premium breathable cotton t-shirt with a comfortable modern fit.",

    features: [
      "100% premium cotton",
      "Soft and breathable fabric",
      "Modern regular fit",
      "Machine washable",
      "Lightweight construction",
      "Available in multiple colors",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Gray",
        value: "#9ca3af",
      },
    ],

    sizes: ["S", "M", "L", "XL", "XXL"],

    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=1200",
    ],

    tags: ["t-shirt", "cotton", "clothing", "casual"],
  },

  {
    id: 2,
    name: "Classic Sneakers",
    slug: "classic-sneakers",
    category: "Shoes",
    price: 89.99,
    currency: "USD",

    rating: 4.7,
    reviews: 89,

    stock: 12,
    sku: "SNK-002",

    description:
      "Classic everyday sneakers combining timeless design with lightweight comfort. Perfect for casual outfits, walking and everyday use.",

    shortDescription:
      "Classic lightweight sneakers designed for everyday comfort.",

    features: [
      "Lightweight construction",
      "Comfortable cushioned sole",
      "Durable upper material",
      "Breathable interior",
      "Classic everyday design",
      "Non-slip outsole",
    ],

    colors: [
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Blue",
        value: "#2563eb",
      },
    ],

    sizes: ["39", "40", "41", "42", "43", "44", "45"],

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200",
    ],

    tags: ["shoes", "sneakers", "casual", "footwear"],
  },

  {
    id: 3,
    name: "Minimal Backpack",
    slug: "minimal-backpack",
    category: "Accessories",
    price: 59.99,
    currency: "USD",

    rating: 4.6,
    reviews: 64,

    stock: 25,
    sku: "BAG-003",

    description:
      "A minimal and practical backpack designed for work, travel and everyday use. Its clean design provides plenty of space while maintaining a lightweight profile.",

    shortDescription:
      "Minimal water-resistant backpack for work, travel and everyday use.",

    features: [
      "Water-resistant material",
      "Dedicated laptop compartment",
      "Multiple storage pockets",
      "Adjustable shoulder straps",
      "Lightweight construction",
      "Minimal modern design",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Gray",
        value: "#6b7280",
      },
      {
        name: "Green",
        value: "#166534",
      },
    ],

    sizes: ["One Size"],

    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=1200",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=1200",
    ],

    tags: ["backpack", "bag", "travel", "accessories"],
  },

  {
    id: 4,
    name: "Classic Watch",
    slug: "classic-watch",
    category: "Accessories",
    price: 129.99,
    oldPrice: 159.99,
    currency: "USD",

    rating: 4.9,
    reviews: 156,

    stock: 9,
    sku: "WAT-004",

    description:
      "A timeless classic watch featuring a clean dial, premium materials and an elegant design suitable for both formal and casual occasions.",

    shortDescription:
      "Elegant classic watch with a timeless design and premium finish.",

    features: [
      "Premium stainless steel case",
      "Scratch-resistant glass",
      "Adjustable metal strap",
      "Water resistant",
      "Quartz movement",
      "Minimal classic dial",
    ],

    colors: [
      {
        name: "Silver",
        value: "#d1d5db",
      },
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Gold",
        value: "#d4a017",
      },
    ],

    sizes: ["One Size"],

    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200",
    ],

    tags: ["watch", "accessories", "classic", "luxury"],
  },

  {
    id: 5,
    name: "Oversized Hoodie",
    slug: "oversized-hoodie",
    category: "Clothing",
    price: 69.99,
    currency: "USD",

    rating: 4.8,
    reviews: 98,

    stock: 21,
    sku: "HOD-005",

    description:
      "A comfortable oversized hoodie made from a soft fleece blend. Designed for a relaxed fit and perfect for casual everyday wear.",

    shortDescription:
      "Soft oversized hoodie with a relaxed fit for everyday comfort.",

    features: [
      "Soft fleece blend",
      "Oversized relaxed fit",
      "Adjustable drawstring hood",
      "Kangaroo front pocket",
      "Ribbed cuffs",
      "Warm and comfortable",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Cream",
        value: "#f5f5dc",
      },
      {
        name: "Gray",
        value: "#9ca3af",
      },
      {
        name: "Brown",
        value: "#78350f",
      },
    ],

    sizes: ["S", "M", "L", "XL", "XXL"],

    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=1200",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200",
    ],

    tags: ["hoodie", "clothing", "casual", "streetwear"],
  },

  {
    id: 6,
    name: "Running Shoes",
    slug: "running-shoes",
    category: "Shoes",
    price: 109.99,
    currency: "USD",

    rating: 4.7,
    reviews: 112,

    stock: 16,
    sku: "RUN-006",

    description:
      "Lightweight running shoes engineered for comfort and everyday performance. The cushioned sole provides excellent support during running, walking and training.",

    shortDescription:
      "Lightweight running shoes with responsive cushioning and excellent support.",

    features: [
      "Lightweight mesh upper",
      "Responsive cushioning",
      "Breathable construction",
      "Flexible outsole",
      "Shock absorption",
      "Designed for running and training",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Blue",
        value: "#2563eb",
      },
      {
        name: "Red",
        value: "#dc2626",
      },
    ],

    sizes: ["39", "40", "41", "42", "43", "44", "45", "46"],

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1200",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200",
    ],

    tags: ["running", "shoes", "sports", "training"],
  },

  {
    id: 7,
    name: "Leather Wallet",
    slug: "leather-wallet",
    category: "Accessories",
    price: 44.99,
    currency: "USD",

    rating: 4.8,
    reviews: 73,

    stock: 30,
    sku: "WAL-007",

    description:
      "A compact leather wallet crafted for everyday use. Its slim profile provides enough space for cards, cash and essential documents without unnecessary bulk.",

    shortDescription:
      "Slim genuine leather wallet with a practical everyday design.",

    features: [
      "Genuine leather",
      "Slim compact profile",
      "Multiple card slots",
      "Cash compartment",
      "Durable stitching",
      "RFID protection",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Brown",
        value: "#78350f",
      },
      {
        name: "Tan",
        value: "#a16207",
      },
    ],

    sizes: ["One Size"],

    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200",
    ],

    tags: ["wallet", "leather", "accessories", "cards"],
  },
];
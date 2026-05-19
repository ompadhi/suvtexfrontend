// Navigation links
export const navLinks = [
  { name: 'ABOUT US', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'SOURCING', path: '/sourcing' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'EXPERT TEAM', path: '/expert-team' },
  { name: 'SOCIAL SERVICE', path: '/social-service' },
  { name: 'CONTACT US', path: '/contact' },
]

// Quick links for home page columns
export const quickLinks = {
  aboutUs: [
    'Our Values',
    'Our Team',
    'Join Suvtex',
    'Why Choose Suvtex India?',
  ],
  expertTeam: [
    'Textiles Technologists',
    'Leather Technologists',
    'Utensils Technologists',
    'Plastics Technologists',
    'Non stick ware Technologists',
  ],
  expertise: [
    'Hardline',
    'Softline',
    'Factory Audits',
    'Product Inspection',
    'Quality Control',
  ],
}

// Services data
import { 
  Users, 
  Leaf, 
  Wrench, 
  Lock,
  ClipboardCheck, 
  FileCheck, 
  Search, 
  Eye, 
  CheckCircle2, 
  Shield, 
  Factory, 
  TrendingUp 
} from 'lucide-react';

export const auditTypes = [
  { title: 'Factory Audit', icon: Factory },
  { title: 'Social Compliance', icon: Users },
  { title: 'Environmental', icon: Leaf },
  { title: 'Technical', icon: Wrench },
  { title: 'Security', icon: Lock },
];

import furnitureHomeDecor from '../assets/Furniture and home decor.webp';

// Product Inspection Category Images
import mensWearImg from '../assets/Product Inspection Categories/MENS WEAR.webp';
import womensWearImg from '../assets/Product Inspection Categories/WOMENS WEAR.webp';
import kidsWearImg from '../assets/Product Inspection Categories/KIDS WEAR.webp';
import infantWearImg from '../assets/Product Inspection Categories/INFANT WEAR.webp';
import intimateWearImg from '../assets/Product Inspection Categories/Intimate Wear & Innerwear.webp';
import homeTextileImg from '../assets/Product Inspection Categories/Home Textile Products.webp';
import generalMerchandiseImg from '../assets/Product Inspection Categories/General Merchandise & Accessories.webp';
import leatherProductsImg from '../assets/Product Inspection Categories/Leather Products.webp';
import footwearProductsImg from '../assets/Product Inspection Categories/Footwear Products.webp';
import kitchenwareImg from '../assets/Product Inspection Categories/Kitchenware, Cookware & Home Utility.webp';
import toysGamesImg from '../assets/Product Inspection Categories/Toys, Games & Baby Products.webp';
import fashionJewelleryImg from '../assets/Product Inspection Categories/Fashion Jwellery.webp';
import petProductsImg from '../assets/Product Inspection Categories/Pet Products.webp';
import industrialProductsImg from '../assets/Product Inspection Categories/Industrial & Technical Products.webp';

// ... (rest of the file)

export const factoryAuditServices = [
  {
    title: 'Social compliance audit',
    description: 'A social compliance audit ensures companies meet ethical labor standards, protect workers\' rights, using interviews and inspections to ensure compliance.',
    icon: Users,
  },
  {
    title: 'Environmental audit',
    description: 'An environmental audit verifies whether the company has met the environmental objectives, policies, and performance set by management.',
    icon: Leaf,
  },
  {
    title: 'Technical audit',
    description: 'A technical audit is an examination of a company\'s technical processes, systems, and infrastructure to assess their efficiency with industry standards and best practices.',
    icon: Wrench,
  },
  {
    title: 'Security Audits',
    description: 'Security audits assess the effectiveness of a company\'s security measures to identify and address potential vulnerabilities and risks.',
    icon: Lock,
  },
]

export const productServices = [
  {
    title: 'Fabric Inspection',
    description: 'Fabric inspection is the process of evaluating the quality, defects, and specifications of fabric materials to ensure they meet the required standards for use in manufacturing. It is done using 4 Point System.',
    icon: ClipboardCheck,
  },
  {
    title: 'PP Sample Inspection / Gold Seal Sample',
    description: 'Pre-production (PP) sample inspection is a quality control process conducted before mass production begins.',
    icon: FileCheck,
  },
  {
    title: 'Pre-production Inspection',
    description: 'It means checking the quality of materials used before they go into making the final product.',
    icon: Search,
  },
  {
    title: 'During Production Inspection',
    description: 'They only inspect some of the finished products, not all. They look for problems with the products being made and solve them immediately.',
    icon: Eye,
  },
  {
    title: 'Inline inspection',
    description: 'It is basically catching quality problems as products are being made.',
    icon: CheckCircle2,
  },
  {
    title: 'Final Random Inspection',
    description: 'Is a quality control process conducted at the end of garment production, where a random sample of finished garments is selected and inspected to ensure they meet specified quality standards before shipment.',
    icon: Shield,
  },
  {
    title: 'Container Loading and Unloading Supervision',
    description: 'Container Loading Inspection involves overseeing the loading of goods into shipping containers to ensure safety, quality, and adherence to specific requirements.',
    icon: Factory,
  },
  {
    title: 'Production Monitoring',
    description: 'Production monitoring involves tracking quality during production to identify issues early and maintain standards.',
    icon: TrendingUp,
  },
]

// Values data
export const values = [
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and strong ethical standards in every inspection and decision.',
    items: ['Fair and unbiased evaluation', 'Transparent reporting', 'Ethical business practices'],
  },
  {
    title: 'Commitment',
    description: 'We are dedicated to delivering consistent quality and exceeding client expectations.',
    items: ['On-time execution', 'Reliable service delivery', 'Continuous improvement'],
  },
  {
    title: 'Customer Focus',
    description: 'Our clients are at the center of everything we do.',
    items: ['Understanding client requirements', 'Responsive communication', 'Tailored solutions'],
  },
  {
    title: 'Quality Excellence',
    description: 'We ensure the highest level of quality and compliance in every process.',
    items: ['Strict adherence to standards', 'Attention to detail', 'Zero-compromise approach'],
  },
  {
    title: 'Technical Expertise',
    description: 'We bring deep industry knowledge and professional competence to every assignment.',
    items: ['Skilled inspectors & auditors', 'Industry-specific expertise', 'Continuous skill development'],
  },
  {
    title: 'Reliability',
    description: 'We build long-term partnerships based on trust and consistency.',
    items: ['Accurate reporting', 'Dependable operations', 'Consistent performance'],
  },
]

// Priorities data
export const priorities = [
  { title: 'Assurance', description: 'Ensuring that products meet specified quality standards and requirements.' },
  { title: 'Compliance', description: 'Verifying that products comply with relevant regulations, standards, and specifications.' },
  { title: 'Timely Delivery', description: 'Conducting inspections at key stages of production to prevent delays and ensure on-time delivery.' },
  { title: 'Defect Detection', description: 'Identifying and addressing any defects or issues to maintain product integrity and customer satisfaction.' },
  { title: 'Risk Management', description: 'Assessing and mitigating risks associated with product production, transportation, and storage.' },
  { title: 'Impartiality', description: 'Maintaining independence and impartiality in conducting inspections and reporting findings.' },
  { title: 'Transparency', description: 'Providing clear and comprehensive inspection reports to clients, detailing findings and recommendations.' },
]

// Why choose us data
export const whyChooseUs = [
  {
    title: 'Expertise',
    description: 'Our team comprises seasoned professionals with in-depth knowledge of both hardline and Softline goods, ensuring a thorough and accurate assessment of your products.',
  },
  {
    title: 'Services',
    description: 'From factory inspections and product testing to quality control and compliance checks, we offer a comprehensive suite of services designed to safeguard your brand reputation.',
  },
  {
    title: 'Global Reach',
    description: 'Suvtex India operates on a global scale, providing inspection services across borders. We understand the complexities of international trade and are equipped to meet the diverse needs of our clients worldwide.',
  },
  {
    title: 'Transparency',
    description: 'We believe in transparent communication and provide detailed inspection reports that offer insights into the quality and compliance of your products.',
  },
]

// Team members data
export const teamMembers = [
  {
    title: 'Textiles Technologists',
    description: 'These specialists ensure the highest quality fabrics, considering factors like durability, comfort, and performance.',
  },
  {
    title: 'Leather Technologists',
    description: 'Our leather experts source and work with the finest materials, guaranteeing a luxurious and long-lasting product.',
  },
  {
    title: 'Plastics Technologists',
    description: 'They ensure the perfect balance of strength, flexibility, and sustainability in our plastic components.',
  },
  {
    title: 'Utensils Technologists',
    description: 'Metals Technologists: Our metals experts select and treat metals for optimal durability, weight, and functionality.',
  },
]

// Product categories
export const productCategories = [
  { name: 'Home Decor', image: furnitureHomeDecor }, // Local image: Furniture and home decor.webp
  { name: 'Textile', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop' },
  { name: 'Fashion Apparels', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop' },
  { name: 'Hardline', image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=300&fit=crop' },
  { name: 'Softline', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop' },
]

// Hardline products
export const hardlineProducts = [
  'Kitchen Tool And Gadgets',
  'Dinnerware And Cookware',
  'Furniture',
  'Adult & Childrens Jewelery',
  'Watch And Clock',
  'Sporting Goods',
  'Garment Hangers',
  'Candles And Candle Accessories',
  'Household & Decorative Accessories',
  'Luggage and Accessories',
  'Hardware And Tools',
  'Office Supplies',
  'Packaging And Transit Test',
  'Seasonal Products',
  'Tools',
  'Giftware Inspection',
  'Ceramic Inspection',
  'Promotional Products Inspection',
  'Kitchen Ware Inspection',
  'Crafts Inspection',
  'Christmas Items Inspection',
  'Stationery Inspection',
]

// Softline products
export const softlineProducts = [
  'Women\'s Wear',
  'Menswear',
  'Kids Wear',
  'Footwear',
  'Lingerie',
  'Accessories',
  'Home Furniture',
  'Fabrics',
  'Fashion Apparel',
  'Leather Products',
  'Home Textiles',
]

// Detailed product categories for Products page
export const detailedProductCategories = [
  {
    title: "Men's Wear",
    image: mensWearImg,
    items: [
      'T-Shirts',
      'Shirts (Formal/Casual)',
      'Trousers & Chinos',
      'Ethnic Wear',
      'Denim & Jeans',
      'Shorts & Cargo',
      'Jackets & Blazers',
      'Suits',
      'Hoodies & Sweatshirts',
      'Sweaters',
      'Activewear',
    ],
  },
  {
    title: "Women's Wear",
    image: womensWearImg,
    items: [
      'Tops, Tunics & Blouses',
      'Dresses & Skirts',
      'Leggings & Jeggings',
      'Cardigans',
      'Ethnic Wear (Kurtis, Sarees, Salwar Suits, Lehengas)',
      'Loungewear & Nightwear',
      'Activewear',
    ],
  },
  {
    title: "Kids Wear",
    image: kidsWearImg,
    items: [
      'T-Shirts & Shirts',
      'Shorts & Trousers',
      'Dresses',
      'School Uniforms',
      'Seasonal Wear',
    ],
  },
  {
    title: 'Infant Wear (0–24 Months)',
    image: infantWearImg,
    items: [
      'Onesies & Rompers',
      'Baby Sets',
      'Bibs & Mittens',
      'Swaddles & Blankets',
      'Caps & Socks',
    ],
  },
  {
    title: 'Intimate Wear & Innerwear',
    image: intimateWearImg,
    items: [
      'Bras & Panties',
      'Lingerie Sets',
      'Briefs & Trunks',
      'Slips',
      'Sleepwear',
      'Thermal Innerwear',
      'Shapewear',
    ],
  },
  {
    title: 'Home Textile Products',
    image: homeTextileImg,
    items: [
      'Bed Sheets & Fitted Sheets',
      'Pillow Covers',
      'Duvet Covers',
      'Quilts & Bedspreads',
      'Cushion Covers',
      'Curtains',
      'Blankets',
      'Door Mats',
      'Bath Textiles (Towels, Bathrobes)',
      'Table Linen & Kitchen Textiles',
    ],
  },
  {
    title: 'General Merchandise & Accessories',
    image: generalMerchandiseImg,
    items: [
      'Socks',
      'Handkerchiefs',
      'Caps & Hats',
      'Scarves',
      'Fashion Accessories',
    ],
  },
  {
    title: 'Leather Products',
    image: leatherProductsImg,
    items: [
      'Handbags',
      'Backpacks',
      'Wallets',
      'Duffle Bags',
      'Purses',
      'Luggage',
      'Belts',
      'Tote Bags',
      'Gloves',
      'Leather Jackets',
    ],
  },
  {
    title: 'Footwear Products',
    image: footwearProductsImg,
    items: [
      'Casual Shoes',
      'Formal Shoes',
      'Sports Shoes',
      'School Shoes',
      'Industrial Safety Footwear',
      'Sandals',
      'Boots',
      'Slippers & Flip Flops',
    ],
  },
  {
    title: 'Kitchenware, Cookware & Home Utility',
    image: kitchenwareImg,
    items: [
      'Plastic Kitchenware',
      'Stainless Steel Products',
      'Non-stick Cookware',
      'Cookware (Pots, Pans, Frying Pans)',
      'Cutlery',
      'Containers & Storage',
      'Jugs & Bottles',
      'Baskets & Bowls',
      'Kitchen Tools & Accessories',
      'Ceramic Ware',
      'Glassware',
      'Tableware',
      'Decorative Items',
    ],
  },
  {
    title: 'Toys, Games & Baby Products',
    image: toysGamesImg,
    items: [
      'Toys (Plastic, Plush, Educational)',
      'Games & Activity Products',
      'Ride-Ons',
      'Baby Care Products',
    ],
  },
  {
    title: 'Fashion Jewellery',
    image: fashionJewelleryImg,
    items: [
      'Necklaces',
      'Earrings',
      'Bracelets',
      'Rings',
      'Hair Accessories',
    ],
  },
  {
    title: 'Pet Products',
    image: petProductsImg,
    items: [
      'Pet Beds',
      'Pet Clothing',
      'Pet Toys',
      'Pet Bowls & Feeders',
      'Pet Grooming Products',
      'Pet Accessories (Leashes, Collars, Harnesses)',
      'Pet Carriers & Travel Accessories',
    ],
  },
  {
    title: 'Industrial & Technical Products',
    image: industrialProductsImg,
    items: [
      'Fiberglass Reinforcing Materials',
      'Industrial Components',
      'Finished Industrial Products',
      'Big Industrial Bags (FIBC / Jumbo Bags)',
      'Packaging & Technical Materials',
    ],
  },
]

// Footer links
export const footerLinks = {
  quickLinks: [
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Social Service', path: '/social-service' },
    { name: 'Contact', path: '/contact' },
  ],
  contact: {
    address: '202 D 41 SAGAR CHS SECTOR 2 CHARKOP KANDIVALI WEST MUMBAI',
    email: 'padhisatyavan@gmail.com',
  },
}

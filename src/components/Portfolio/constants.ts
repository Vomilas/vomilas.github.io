export interface Project {
  title: string;
  subTitle: string;
  description: string;
  link: string;
  imageSrc: string;
  keywords: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Kaspersky",
    subTitle: "Threat Intelligence Portal",
    description:
      "Engineered key features for the Threat Intelligence Portal, crafting the Threat Landscape visualization and implementing MITRE ATT&CK Matrix integration. Built an advanced research graph in the CyberTrace project that maps security indicators to detections, enabling more efficient threat analysis and correlation.",
    link: "https://opentip.kaspersky.com/",
    imageSrc: "/assets/tip.png",
    keywords: ["Kaspersky", "Threat Intelligence", "Security"],
  },
  {
    title: "Sber",
    subTitle: "School & Student accelerator",
    description:
      "Led frontend development of an educational accelerator platform that enables students to transform their business ideas into commercial projects. Implemented personalized learning paths, progress tracking, and interactive tools to support the entire project lifecycle.",
    link: "https://sberstudent.sberclass.ru",
    imageSrc: "/assets/schoolacc.png",
    keywords: ["Accelerator", "Education", "SberClass"],
  },
  {
    title: "UpTrader",
    subTitle: "UpTrader CRM",
    description:
      "Developed a comprehensive CRM system for traders and brokers, featuring partnership management, bonus systems, and advanced trading tools. Built responsive interfaces and real-time data synchronization to enhance user experience across all devices.",
    link: "https://uptrader.io",
    imageSrc: "/assets/uptrader.webp",
    keywords: ["UpTrader", "Meta trading", "CRM"],
  },
  {
    title: "Digital Wing",
    subTitle: "StarTrade Capital",
    description:
      "Built a cryptocurrency market aggregator that connects to major exchanges including Binance, Coinbase, and Bitfinex. Implemented smart routing algorithms to find optimal trading prices across multiple liquidity pools, maximizing trading efficiency for users.",
    link: "https://startradecapital.com",
    imageSrc: "/assets/startrade.png",
    keywords: ["Trading", "Market", "Aggregator"],
  },
];

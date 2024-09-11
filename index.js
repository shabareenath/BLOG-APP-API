import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  // Existing posts
  {
    id: 1,
    title: "Understanding Blockchain Technology",
    content:
      "Blockchain technology is the backbone of many modern digital innovations. It is a decentralized ledger that records transactions across many computers so that the record cannot be altered retroactively. This technology enables secure, transparent, and tamper-proof transactions. It's the foundation of cryptocurrencies like Bitcoin and has applications beyond finance, including supply chain management and voting systems.",
    author: "Shabareenath",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Decentralized Applications (dApps): A Comprehensive Overview",
    content:
      "Decentralized Applications (dApps) are applications that run on a distributed network of computers rather than a single central server. They leverage blockchain technology to ensure transparency, security, and decentralization. dApps can range from financial services and social media platforms to games and marketplaces. By eliminating intermediaries, dApps offer users more control and potentially lower costs.",
    author: "Shabareenath",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Exploring Ethereum: The World’s Leading Smart Contract Platform",
    content:
      "Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). Unlike Bitcoin, which is primarily a digital currency, Ethereum provides a robust framework for creating complex decentralized applications. Its native cryptocurrency, Ether (ETH), powers the network and incentivizes participants. Ethereum's smart contract functionality has revolutionized various sectors, from finance to supply chain management.",
    author: "Shabareenath",
    date: "2023-08-10T09:15:00Z",
  },
  
  // Additional 22 posts
  {
    id: 4,
    title: "The Evolution of Blockchain Technology",
    content:
      "Blockchain technology has evolved significantly since the inception of Bitcoin. This post explores the history and advancements in blockchain technology, from its origins to current innovations. We will discuss key milestones and how they have shaped the current landscape of distributed ledger technologies.",
    author: "Shabareenath",
    date: "2023-08-15T11:00:00Z",
  },
  {
    id: 5,
    title: "How Blockchain is Transforming Supply Chain Management",
    content:
      "Blockchain provides a transparent and secure way to track goods across the supply chain. By recording every transaction on a distributed ledger, stakeholders can access real-time data, reduce fraud, and improve efficiency. This post examines real-world examples of blockchain applications in supply chain management.",
    author: "Shabareenath",
    date: "2023-08-20T12:30:00Z",
  },
  {
    id: 6,
    title: "The Role of Smart Contracts in Decentralized Finance (DeFi)",
    content:
      "Smart contracts are self-executing contracts with the terms of the agreement written directly into code. In the DeFi ecosystem, smart contracts automate transactions and enforce agreements without intermediaries. This post explores how smart contracts are used in various DeFi applications, including lending, trading, and insurance.",
    author: "Shabareenath",
    date: "2023-08-25T14:00:00Z",
  },
  {
    id: 7,
    title: "How Decentralized Autonomous Organizations (DAOs) are Changing Governance",
    content:
      "DAOs are organizations represented by rules encoded as a computer program that is transparent, controlled by organization members, and not influenced by a central government. This post delves into how DAOs operate, their benefits, and their potential impact on traditional governance structures.",
    author: "Shabareenath",
    date: "2023-09-01T15:45:00Z",
  },
  {
    id: 8,
    title: "Ethereum 2.0: The Future of Ethereum",
    content:
      "Ethereum 2.0 is a major upgrade to the Ethereum blockchain that aims to improve scalability, security, and sustainability. This post covers the key features of Ethereum 2.0, including the transition from Proof of Work (PoW) to Proof of Stake (PoS) and the introduction of shard chains.",
    author: "Shabareenath",
    date: "2023-09-05T10:20:00Z",
  },
  {
    id: 9,
    title: "Understanding the Different Consensus Mechanisms in Blockchain",
    content:
      "Consensus mechanisms are protocols used to achieve agreement on a single data value among distributed processes or systems. This post explains various consensus mechanisms like Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS), and their implications for blockchain networks.",
    author: "Shabareenath",
    date: "2023-09-10T12:00:00Z",
  },
  {
    id: 10,
    title: "The Intersection of Blockchain and IoT",
    content:
      "Blockchain and Internet of Things (IoT) are two rapidly evolving technologies. This post explores how combining these technologies can enhance security, data integrity, and operational efficiency in IoT applications. Examples of blockchain-IoT integrations will be discussed.",
    author: "Shabareenath",
    date: "2023-09-15T13:30:00Z",
  },
  {
    id: 11,
    title: "Blockchain for Identity Verification: Use Cases and Benefits",
    content:
      "Blockchain technology offers a secure and tamper-proof way to manage identity information. This post explores the use cases of blockchain for identity verification, including digital identities, fraud prevention, and enhanced privacy for users.",
    author: "Shabareenath",
    date: "2023-09-20T14:00:00Z",
  },
  {
    id: 12,
    title: "NFTs and Blockchain: Revolutionizing Digital Ownership",
    content:
      "Non-Fungible Tokens (NFTs) are unique digital assets verified using blockchain technology. This post explains how NFTs work, their applications in art, gaming, and collectibles, and the implications for digital ownership and intellectual property.",
    author: "Shabareenath",
    date: "2023-09-25T15:00:00Z",
  },
  {
    id: 13,
    title: "The Impact of Blockchain on Financial Services",
    content:
      "Blockchain technology has the potential to disrupt traditional financial services by providing more efficient, secure, and transparent transactions. This post examines the impact of blockchain on payments, remittances, and other financial services.",
    author: "Shabareenath",
    date: "2023-10-01T16:00:00Z",
  },
  {
    id: 14,
    title: "Building Scalable dApps on Ethereum: Best Practices",
    content:
      "Developing decentralized applications (dApps) on Ethereum can be challenging, especially when it comes to scalability. This post offers best practices for building scalable dApps, including optimizing smart contracts, using layer 2 solutions, and testing for performance.",
    author: "Shabareenath",
    date: "2023-10-05T17:30:00Z",
  },
  {
    id: 15,
    title: "Exploring Blockchain Use Cases Beyond Cryptocurrencies",
    content:
      "While blockchain is most known for its use in cryptocurrencies, it has many other applications. This post explores various use cases for blockchain technology in areas such as supply chain management, healthcare, and voting systems.",
    author: "Shabareenath",
    date: "2023-10-10T18:00:00Z",
  },
  {
    id: 16,
    title: "The Benefits and Challenges of Private Blockchains",
    content:
      "Private blockchains offer many benefits, including increased privacy and control compared to public blockchains. This post discusses the advantages and challenges of implementing private blockchains in various industries and use cases.",
    author: "Shabareenath",
    date: "2023-10-15T19:00:00Z",
  },
  {
    id: 17,
    title: "How to Create and Deploy Your Own ERC-20 Token on Ethereum",
    content:
      "ERC-20 tokens are a standard for creating tokens on the Ethereum blockchain. This post provides a step-by-step guide on how to create and deploy your own ERC-20 token, including writing the smart contract and interacting with the Ethereum network.",
    author: "Shabareenath",
    date: "2023-10-20T20:00:00Z",
  },
  {
    id: 18,
    title: "The Role of Blockchain in Enhancing Cybersecurity",
    content:
      "Blockchain technology offers promising solutions for enhancing cybersecurity by providing decentralized and immutable records. This post explores how blockchain can be used to improve data security, identity protection, and threat detection.",
    author: "Shabareenath",
    date: "2023-10-25T21:00:00Z",
  },
  {
    id: 19,
    title: "Understanding Layer 2 Solutions for Ethereum Scaling",
    content:
      "Layer 2 solutions are technologies built on top of the Ethereum blockchain to improve scalability and transaction throughput. This post covers various Layer 2 solutions such as state channels, rollups, and sidechains, and their impact on Ethereum's performance.",
    author: "Shabareenath",
    date: "2023-10-30T22:00:00Z",
  },
  {
    id: 20,
    title: "Decentralized Finance (DeFi): Opportunities and Risks",
    content:
      "DeFi has emerged as a transformative force in the financial industry, offering new opportunities for financial inclusion and innovation. This post examines the opportunities and risks associated with DeFi, including its potential impact on traditional finance and regulatory challenges.",
    author: "Shabareenath",
    date: "2023-11-01T09:30:00Z",
  },
  {
    id: 21,
    title: "How Blockchain Technology is Revolutionizing Voting Systems",
    content:
      "Blockchain technology can enhance the security and transparency of voting systems by providing a tamper-proof and verifiable record of votes. This post explores how blockchain is being used to improve electoral processes and the potential benefits and challenges.",
    author: "Shabareenath",
    date: "2023-11-05T10:30:00Z",
  },
  {
    id: 22,
    title: "The Future of Blockchain in Healthcare",
    content:
      "Blockchain technology has the potential to transform healthcare by providing secure and interoperable health data management. This post discusses how blockchain can address issues such as data privacy, patient consent, and medical records management.",
    author: "Shabareenath",
    date: "2023-11-10T11:00:00Z",
  },
  {
    id: 23,
    title: "How to Securely Store and Manage Your Cryptocurrencies",
    content:
      "With the growing adoption of cryptocurrencies, securing and managing your digital assets is crucial. This post provides tips and best practices for securely storing your cryptocurrencies, including using hardware wallets, implementing strong security measures, and avoiding common pitfalls.",
    author: "Shabareenath",
    date: "2023-11-15T12:00:00Z",
  },
  {
    id: 24,
    title: "The Impact of Blockchain on Intellectual Property Rights",
    content:
      "Blockchain technology offers new ways to protect and manage intellectual property rights by providing an immutable and transparent record of ownership. This post explores how blockchain can be used to address issues related to copyright, trademarks, and patents.",
    author: "Shabareenath",
    date: "2023-11-20T13:30:00Z",
  },
  {
    id: 25,
    title: "Blockchain and AI: Synergies and Future Prospects",
    content:
      "Blockchain and artificial intelligence (AI) are two transformative technologies that can complement each other. This post examines the synergies between blockchain and AI, including potential applications in data management, decision-making, and automation.",
    author: "Shabareenath",
    date: "2023-11-25T14:00:00Z",
  },
  {
    id: 26,
    title: "The Role of Blockchain in Enhancing Supply Chain Transparency",
    content:
      "Blockchain technology can provide end-to-end transparency in supply chains by recording every transaction on a decentralized ledger. This post explores how blockchain can enhance supply chain visibility, traceability, and efficiency, and provides real-world examples of successful implementations.",
    author: "Shabareenath",
    date: "2023-12-01T15:00:00Z",
  },
  {
    id: 27,
    title: "The Evolution of Smart Contracts: From Theory to Practice",
    content:
      "Smart contracts have evolved from theoretical concepts to practical tools for automating and enforcing agreements. This post traces the development of smart contracts, their real-world applications, and the challenges associated with their implementation.",
    author: "Shabareenath",
    date: "2023-12-05T16:00:00Z",
  },
  {
    id: 28,
    title: "Exploring Blockchain-Based Identity Solutions",
    content:
      "Blockchain-based identity solutions offer a secure and user-controlled way to manage personal information. This post discusses various blockchain-based identity systems, their benefits, and the challenges of implementing them in different sectors.",
    author: "Shabareenath",
    date: "2023-12-10T17:00:00Z",
  },
  {
    id: 29,
    title: "The Benefits of Decentralization in Blockchain Technology",
    content:
      "Decentralization is a core principle of blockchain technology, offering benefits such as increased security, transparency, and resistance to censorship. This post explores the advantages of decentralization and how it contributes to the overall robustness of blockchain systems.",
    author: "Shabareenath",
    date: "2023-12-15T18:00:00Z",
  },
  {
    id: 30,
    title: "How Blockchain Can Revolutionize Data Privacy",
    content:
      "Blockchain technology can enhance data privacy by providing a decentralized and immutable record of transactions. This post examines how blockchain can address privacy concerns and improve data security in various applications, from personal data management to corporate data protection.",
    author: "Shabareenath",
    date: "2023-12-20T19:00:00Z",
  },
];



let lastId = 3;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET all posts
app.get("/posts", (req, res) => {
  console.log(posts);
  res.json(posts);
});

// GET a specific post by id
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// POST a new post
app.post("/posts", (req, res) => {
  const newId = (lastId += 1);
  const post = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  lastId = newId;
  posts.push(post);
  res.status(201).json(post);
});

// PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.author) post.author = req.body.author;

  res.json(post);
});

// DELETE a specific post by providing the post id
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

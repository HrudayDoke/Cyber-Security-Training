export const modules = [
  {
    id: 1,
    slug: "phishing-awareness",
    title: "Phishing Awareness",
    description: "Learn how to detect phishing emails and scams.",
    progress: 0,

    content: `
  Phishing is a fraudulent attempt to obtain sensitive information.
  Always verify suspicious emails before clicking links.
    `,

    quiz: [
      {
        question: "What is phishing?",
        options: [
          "A cybersecurity attack using fake communication",
          "A secure login method",
          "A firewall technology",
          "An antivirus tool",
        ],
        answer: "A cybersecurity attack using fake communication",
      },

      {
        question: "Which is a phishing red flag?",
        options: [
          "Generic greetings",
          "Strong passwords",
          "2FA verification",
          "VPN usage",
        ],
        answer: "Generic greetings",
      },
    ],
  },
  {
    id: 2,
    slug: "passwords-2fa",  
    title: "Passwords & 2FA",
    description: "Understand strong passwords and authentication.",
    progress: 0,
  },
  {
    id: 3,
    slug: "malware-defense",
    title: "Malware Defense",
    description: "Protect systems from malware and ransomware.",
    progress: 0,
  },
  {
    id: 4,
    slug: "vishing-smishing",
    title: "Vishing & Smishing",
    description: "Recognize phone and SMS-based attacks.",
    progress: 0,
  },
  {
    id: 5,
    slug: "physical-security",
    title: "Physical Security",
    description: "Secure devices during travel and remote work.",
    progress: 0,
  },
  {
    id: 6,
    slug: "data-handling",
    title: "Data Handling",
    description: "Learn secure data handling and compliance.",
    progress: 0,
  },
  {
    id: 7,
    slug: "social-engineering",
    title: "Social Engineering",
    description: "Understand modern manipulation techniques.",
    progress: 0,
  },
];
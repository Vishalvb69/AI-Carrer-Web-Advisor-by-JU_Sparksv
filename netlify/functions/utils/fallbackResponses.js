// Fallback responses when APIs are unavailable
// This provides basic career guidance while API keys are being configured

const careerKnowledge = {
  engineering: {
    careers: [
      "Software Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Aerospace Engineering",
    ],
    description:
      "Engineering offers diverse career paths with strong job prospects. Popular fields include software development, mechanical design, infrastructure, power systems, and aerospace.",
    exams: ["JEE Main", "JEE Advanced", "BITSAT", "VIT-AP VITEEE"],
    salaryRange: "₹6-15 LPA starting, ₹20-50 LPA experienced",
  },
  medical: {
    careers: [
      "Doctor (MBBS)",
      "Nursing",
      "Pharmacy",
      "Physiotherapy",
      "Psychology",
    ],
    description:
      "Medical careers focus on healthcare delivery and research. These require dedicated study and compassion for helping others.",
    exams: ["NEET", "AIIMS", "JIPMER"],
    salaryRange: "₹5-20 LPA depending on specialization",
  },
  commerce: {
    careers: [
      "CA (Chartered Accountant)",
      "CS (Company Secretary)",
      "Investment Banking",
      "Accounting",
      "Business Management",
    ],
    description:
      "Commerce careers involve financial management, business operations, and economic analysis with strong earning potential.",
    exams: ["CA Foundation", "Company Secretary Exam", "CAT (for MBA)"],
    salaryRange: "₹4-12 LPA starting, ₹20+ LPA for senior roles",
  },
  arts: {
    careers: ["Journalism", "Psychology", "Law", "Design", "Content Creation"],
    description:
      "Arts careers offer creativity, communication, and analytical skills. Growing opportunities in digital media and content.",
    exams: ["CLAT (Law)", "CUET", "Stream-specific entrance exams"],
    salaryRange: "₹3-8 LPA starting, ₹15+ LPA for established professionals",
  },
};

function generateCareerResponse(query) {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("engineering")) {
    return {
      response: `Engineering is a vast field with many specializations:\n\n${careerKnowledge.engineering.careers.join(", ")}\n\n${careerKnowledge.engineering.description}\n\nTop entrance exams: ${careerKnowledge.engineering.exams.join(", ")}\nSalary range: ${careerKnowledge.engineering.salaryRange}\n\nWould you like to know more about any specific engineering field?`,
      sources: [],
    };
  }

  if (
    lowerQuery.includes("medical") ||
    lowerQuery.includes("doctor") ||
    lowerQuery.includes("neet")
  ) {
    return {
      response: `Medical careers include:\n\n${careerKnowledge.medical.careers.join(", ")}\n\n${careerKnowledge.medical.description}\n\nMajor entrance exam: NEET (National Eligibility cum Entrance Test)\nOther exams: ${careerKnowledge.medical.exams.join(", ")}\nSalary range: ${careerKnowledge.medical.salaryRange}\n\nThe medical field requires dedication and strong academic performance. Would you like details on any specific medical career?`,
      sources: [],
    };
  }

  if (
    lowerQuery.includes("commerce") ||
    lowerQuery.includes("accounts") ||
    lowerQuery.includes("ca")
  ) {
    return {
      response: `Commerce career options:\n\n${careerKnowledge.commerce.careers.join(", ")}\n\n${careerKnowledge.commerce.description}\n\nMain courses: ${careerKnowledge.commerce.exams.join(", ")}\nSalary range: ${careerKnowledge.commerce.salaryRange}\n\nCommerce graduates often pursue higher studies like CA (Chartered Accountant) or MBA. Interested in any particular path?`,
      sources: [],
    };
  }

  if (lowerQuery.includes("arts") || lowerQuery.includes("humanities")) {
    return {
      response: `Arts stream careers include:\n\n${careerKnowledge.arts.careers.join(", ")}\n\n${careerKnowledge.arts.description}\n\nCommon entrance exams: ${careerKnowledge.arts.exams.join(", ")}\nSalary range: ${careerKnowledge.arts.salaryRange}\n\nArts graduates have diverse opportunities in creative and intellectual fields. What interests you most?`,
      sources: [],
    };
  }

  // Default response (RAG chat uses OPENROUTER; this is fallback when no keyword match)
  return {
    response: `I can help with career guidance using our website content. Try asking about:\n\n📚 Career streams (Engineering, Medical, Commerce, Arts)\n🎓 Entrance exams (JEE, NEET, CAT, etc.)\n💼 Specific careers (e.g. Computer Science, MBBS, CA)\n🚀 Use the menu to explore streams and career pages for full details.\n\nWhat would you like to know? For richer answers, set OPENROUTER_API_KEY in .env.`,
    sources: [],
  };
}

export function getFallbackResponse(message, searchResults = []) {
  const response = generateCareerResponse(message);
  return response;
}

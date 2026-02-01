// Keyword-based search over website career and exam data (no API keys needed)
// Uses the same content as the site so chat answers come "from the website"
import { careersByStream } from "../../../src/data/careers.js";
import { examsByStream } from "../../../src/data/exams.js";

const MAX_CAREERS = 5;
const MAX_EXAMS = 3;

function tokenize(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function scoreCareer(career, queryTokens) {
  const text = [
    career.title,
    career.description,
    (career.skills || []).join(" "),
    (career.jobRoles || []).join(" "),
    career.averageSalary,
    career.aiImpact,
    (career.entranceExams || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();
  let score = 0;
  for (const token of queryTokens) {
    if (text.includes(token)) score += 1;
  }
  return score;
}

function scoreExam(exam, queryTokens) {
  const text = [
    exam.name,
    exam.fullName || "",
    exam.description,
    (exam.subjects || []).join(" "),
    (exam.acceptingColleges || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();
  let score = 0;
  for (const token of queryTokens) {
    if (text.includes(token)) score += 1;
  }
  return score;
}

/**
 * Search careers and exams by keyword (no embeddings). Returns formatted response
 * and list of sources for the chat UI.
 * @param {string} query - User message
 * @returns {{ response: string, sources: Array<{ title: string, type: string, relevance: string }> }}
 */
export function searchWebsiteByKeyword(query) {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) {
    return { response: "", sources: [] };
  }

  const careers = [];
  for (const [stream, list] of Object.entries(careersByStream)) {
    for (const career of list) {
      const score = scoreCareer(career, queryTokens);
      if (score > 0) {
        careers.push({ ...career, stream, score });
      }
    }
  }
  careers.sort((a, b) => b.score - a.score);
  const topCareers = careers.slice(0, MAX_CAREERS);

  const exams = [];
  for (const [stream, list] of Object.entries(examsByStream)) {
    for (const exam of list) {
      const score = scoreExam(exam, queryTokens);
      if (score > 0) {
        exams.push({ ...exam, stream, score });
      }
    }
  }
  exams.sort((a, b) => b.score - a.score);
  const topExams = exams.slice(0, MAX_EXAMS);

  const sources = [];
  let response = "";

  if (topCareers.length > 0 || topExams.length > 0) {
    response = "Based on our website content:\n\n";

    if (topCareers.length > 0) {
      response += "Careers\n";
      topCareers.forEach((c) => {
        response += `• ${c.title} (${c.stream})\n  ${c.description}\n  Salary: ${c.averageSalary}. Skills: ${(c.skills || []).join(", ")}.\n\n`;
        sources.push({
          title: c.title,
          type: "career",
          relevance: "100",
          url: c.detailsUrl || `/career/${c.id}`,
        });
      });
    }

    if (topExams.length > 0) {
      response += "Exams\n";
      topExams.forEach((e) => {
        response += `• ${e.name}: ${e.description}\n  Conducted by: ${e.conductedBy}. ${e.frequency || ""}\n\n`;
        const streamPath = e.stream === "engineering" ? "/engineering" : e.stream === "medical" ? "/medical" : e.stream === "commerce" ? "/commerce" : e.stream === "arts" ? "/arts" : "/stream-selection";
        sources.push({
          title: e.name,
          type: "exam",
          relevance: "100",
          url: streamPath,
        });
      });
    }

    response += "Explore more on our site using the menu—streams, careers, and exam pages have full details.";
  }

  return { response: response.trim(), sources };
}

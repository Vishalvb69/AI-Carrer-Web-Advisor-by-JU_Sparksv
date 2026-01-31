// Vector database for storing and retrieving career documents with embeddings
import { generateEmbedding, findTopSimilar } from "./embeddings.js";
import { careersByStream } from "../../../src/data/careers.js";
import { examsByStream } from "../../../src/data/exams.js";

// In-memory vector store (in production, use Pinecone, Weaviate, or Milvus)
let vectorStore = [];
let isInitialized = false;

/**
 * Initialize vector store with career and exam data
 */
export async function initializeVectorStore() {
  if (isInitialized && vectorStore.length > 0) {
    return vectorStore;
  }

  try {
    const documents = [];

    // Add career documents
    Object.entries(careersByStream).forEach(([stream, careers]) => {
      careers.forEach((career) => {
        documents.push({
          type: "career",
          stream,
          id: career.id,
          title: career.title,
          description: career.description,
          url: career.detailsUrl || `/career/${career.id}`,
          content: `${career.title}: ${career.description}. Skills: ${career.skills.join(", ")}. Job Roles: ${career.jobRoles.join(", ")}. Average Salary: ${career.averageSalary}. AI Impact: ${career.aiImpact}`,
          metadata: {
            salaryRange: career.averageSalary,
            growthRate: career.growthRate,
            skills: career.skills,
            jobRoles: career.jobRoles,
          },
        });
      });
    });

    // Add exam documents
    const streamToPath = { engineering: "/engineering", medical: "/medical", commerce: "/commerce", arts: "/arts" };
    Object.entries(examsByStream).forEach(([stream, exams]) => {
      exams.forEach((exam) => {
        documents.push({
          type: "exam",
          stream,
          id: exam.id,
          title: exam.name,
          description: exam.description,
          url: streamToPath[stream] || "/stream-selection",
          content: `${exam.name}: ${exam.description}. Conducted by: ${exam.conductedBy}. Frequency: ${exam.frequency}. Duration: ${exam.duration}. Total Marks: ${exam.maxMarks}. Exam Mode: ${exam.examMode}. Accepting Colleges: ${exam.acceptingColleges.join(", ")}`,
          metadata: {
            stream,
            conductedBy: exam.conductedBy,
            frequency: exam.frequency,
            totalMarks: exam.maxMarks,
            duration: exam.duration,
            acceptingColleges: exam.acceptingColleges,
          },
        });
      });
    });

    // Generate embeddings for all documents
    console.log(`Generating embeddings for ${documents.length} documents...`);

    for (let i = 0; i < documents.length; i++) {
      try {
        const embedding = await generateEmbedding(documents[i].content);
        vectorStore.push({
          ...documents[i],
          embedding,
        });
        console.log(`Generated embedding ${i + 1}/${documents.length}`);
      } catch (error) {
        console.error(`Failed to generate embedding for document ${i}:`, error);
        // Continue with other documents
      }
    }

    isInitialized = true;
    console.log(
      `Vector store initialized with ${vectorStore.length} documents`,
    );
    return vectorStore;
  } catch (error) {
    console.error("Error initializing vector store:", error);
    throw error;
  }
}

/**
 * Search for relevant documents using vector similarity
 * @param {string} query - Search query
 * @param {number} topK - Number of results to return
 * @returns {Promise<Array<Object>>} - Top K similar documents
 */
export async function searchDocuments(query, topK = 5) {
  try {
    // Initialize if needed
    if (vectorStore.length === 0) {
      await initializeVectorStore();
    }

    // Generate query embedding
    const queryEmbedding = await generateEmbedding(query);

    // Find similar documents
    const results = findTopSimilar(queryEmbedding, vectorStore, topK);

    return results.map((result) => ({
      type: result.type,
      id: result.id,
      title: result.title,
      description: result.description,
      relevance: (result.score * 100).toFixed(2),
      metadata: result.metadata,
      ...(result.url && { url: result.url }),
    }));
  } catch (error) {
    console.error("Error searching documents:", error);
    throw error;
  }
}

/**
 * Format search results into context string for LLM
 * @param {Array<Object>} searchResults - Results from searchDocuments
 * @returns {string} - Formatted context string
 */
export function formatSearchResultsAsContext(searchResults) {
  if (!searchResults || searchResults.length === 0) {
    return "";
  }

  let context = "Relevant Information:\n\n";

  searchResults.forEach((result, index) => {
    context += `[${index + 1}] ${result.title} (Relevance: ${result.relevance}%)\n`;
    context += `${result.description}\n`;

    if (result.metadata) {
      if (result.metadata.skills) {
        context += `Skills: ${result.metadata.skills.join(", ")}\n`;
      }
      if (result.metadata.jobRoles) {
        context += `Job Roles: ${result.metadata.jobRoles.join(", ")}\n`;
      }
      if (result.metadata.salaryRange) {
        context += `Salary: ${result.metadata.salaryRange}\n`;
      }
    }
    context += "\n";
  });

  return context;
}

/**
 * Get vector store statistics
 */
export function getVectorStoreStats() {
  const stats = {
    totalDocuments: vectorStore.length,
    byType: {},
  };

  vectorStore.forEach((doc) => {
    if (!stats.byType[doc.type]) {
      stats.byType[doc.type] = 0;
    }
    stats.byType[doc.type]++;
  });

  return stats;
}

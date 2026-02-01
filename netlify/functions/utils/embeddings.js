// Embeddings generation utility using Hugging Face Inference API
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
const HUGGINGFACE_API_URL =
  "https://api-inference.huggingface.co/pipeline/feature-extraction";

/**
 * Generate embeddings for text using Hugging Face API
 * @param {string} text - Text to embed
 * @returns {Promise<Array<number>>} - Embedding vector
 */
export async function generateEmbedding(text) {
  if (!HUGGINGFACE_API_KEY) {
    throw new Error("HUGGINGFACE_API_KEY not configured");
  }

  try {
    const response = await fetch(HUGGINGFACE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: text,
        options: {
          wait_for_model: true,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Hugging Face API error:", error);
      throw new Error(`Failed to generate embedding: ${response.statusText}`);
    }

    const embedding = await response.json();
    return Array.isArray(embedding) ? embedding : embedding[0];
  } catch (error) {
    console.error("Embedding generation error:", error);
    throw error;
  }
}

/**
 * Calculate cosine similarity between two vectors
 * @param {Array<number>} vecA - First vector
 * @param {Array<number>} vecB - Second vector
 * @returns {number} - Similarity score (0-1)
 */
export function cosineSimilarity(vecA, vecB) {
  if (vecA.length !== vecB.length) {
    throw new Error("Vectors must have the same length");
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  normA = Math.sqrt(normA);
  normB = Math.sqrt(normB);

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dotProduct / (normA * normB);
}

/**
 * Find top K similar documents based on embeddings
 * @param {Array<number>} queryEmbedding - Query embedding vector
 * @param {Array<Object>} documents - Documents with embeddings
 * @param {number} k - Number of top results to return
 * @returns {Array<Object>} - Top K similar documents with scores
 */
export function findTopSimilar(queryEmbedding, documents, k = 5) {
  const similarities = documents.map((doc, index) => ({
    index,
    score: cosineSimilarity(queryEmbedding, doc.embedding),
    ...doc,
  }));

  return similarities.sort((a, b) => b.score - a.score).slice(0, k);
}

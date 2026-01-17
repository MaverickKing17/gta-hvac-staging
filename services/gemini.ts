import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini client
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is not set.");
  }
  return new GoogleGenAI({ apiKey });
};

export const diagnoseHVACIssue = async (userDescription: string): Promise<string> => {
  try {
    const ai = getAiClient();
    
    const systemPrompt = `
      You are an expert HVAC technician assistant for "Furnace King", a premier heating and cooling company in Mississauga, Ontario, owned by Raami.
      
      Your goal is to provide a structured preliminary diagnosis based on the user's description.
      
      Structure your response using the following format:

      [Brief reassuring opening sentence]

      Possible Causes:
      • [Cause 1]
      • [Cause 2]
      • [Cause 3]

      Recommendation:
      [Specific advice based on the issue]
      
      [Closing call to action to book Raami for a professional inspection]

      Guidelines:
      1. Be professional and concise.
      2. Use bullet points (•) for causes.
      3. CRITICAL: If the issue sounds dangerous (e.g., gas smell, burning smell, sparks), Start the message with a WARNING to turn off the system and call immediately.
      4. Mention the "Red and White" service guarantee implicitly.
      
      User's issue: "${userDescription}"
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: systemPrompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I couldn't generate a diagnosis at this moment. Please call Raami directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the diagnostic server. Please call us directly for immediate assistance.";
  }
};
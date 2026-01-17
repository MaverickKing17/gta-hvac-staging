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
      
      Your goal is to provide a preliminary diagnosis based on the user's description of their furnace or AC problem.
      
      Guidelines:
      1. Be professional, reassuring, and concise (under 150 words).
      2. Identify potential causes based on symptoms (e.g., clicking sounds, no heat, leaking water).
      3. CRITICAL: Always end by recommending they book a professional inspection with Raami at Furnace King for safety.
      4. If the issue sounds dangerous (e.g., gas smell, burning smell, sparks), advise them to turn off the system and call emergency services or Furnace King immediately.
      5. Mention the "Red and White" service guarantee implicitly by being bold and clear.
      
      User's issue: "${userDescription}"
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: systemPrompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "I couldn't generate a diagnosis at this moment. Please call Raami directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the diagnostic server. Please call us directly for immediate assistance.";
  }
};
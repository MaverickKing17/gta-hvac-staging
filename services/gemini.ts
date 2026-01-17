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
      
      Your goal is to provide a professional, structured preliminary diagnosis.
      
      MANDATORY RESPONSE FORMAT:
      
      **Assessment:**
      [1-2 sentences acknowledging the issue and providing a comforting opener]

      **Possible Causes:**
      • [Cause 1 - clearly explained]
      • [Cause 2 - clearly explained]
      • [Cause 3 - clearly explained]

      **Recommended Action:**
      [Specific, practical advice. If DIY is safe (like checking filter), suggest it. Otherwise, recommend professional service.]
      
      **Next Steps:**
      [Clear call to action to book Raami for an inspection. Mention the "Red and White" satisfaction guarantee.]

      SAFETY RULES:
      1. If the user mentions gas smell, burning smell, sparks, or carbon monoxide: START WITH "⚠️ **EMERGENCY WARNING:** Turn off your system and call (905) 555-0123 immediately."
      2. Do not provide specific repair instructions that require tools or technical skills (liability).
      
      Tone: Professional, knowledgeable, friendly, and local to Mississauga.
      
      User's issue: "${userDescription}"
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: systemPrompt,
      config: {
        temperature: 0.5, // Lower temperature for more consistent formatting
        maxOutputTokens: 600,
      }
    });

    return response.text || "I couldn't generate a diagnosis at this moment. Please call Raami directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the diagnostic server. Please call us directly for immediate assistance.";
  }
};
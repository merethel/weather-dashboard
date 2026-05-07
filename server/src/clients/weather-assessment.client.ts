import OpenAI from "openai";

export async function generateText(prompt: string): Promise<string> {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await client.responses.create({
    model: "gpt-5.4-mini",
    input: prompt,
  });

  return response.output_text;
}

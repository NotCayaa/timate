import Groq from 'groq-sdk';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { messages } = request.body;

    if (!messages) {
        return response.status(400).json({ error: 'Messages are required' });
    }

    try {
        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });

        const completion = await groq.chat.completions.create({
            messages,
            model: 'llama-3.3-70b-versatile',
            temperature: 0.8,
            max_tokens: 800,
        });

        const aiResponse = completion.choices[0]?.message?.content || "Sorry, I'm having trouble thinking right now.";

        return response.status(200).json({ content: aiResponse });
    } catch (error) {
        console.error("Groq API Error:", error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}

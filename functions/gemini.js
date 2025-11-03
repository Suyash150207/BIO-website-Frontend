export async function handler(event, context) {
  const { prompt } = JSON.parse(event.body);

  const API_KEY = process.env.GEMINI_API_KEY;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const json = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(json),
  };
}
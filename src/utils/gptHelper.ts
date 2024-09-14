import axios from "axios";

export async function validateKey(key: string):Promise<Boolean> {
  try {
    const response = axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: {
          parts: [
            {
              text: "Hi",
            },
          ],
        },
      },
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-Api-Client": "genai-js/0.12.0",
        },
      }
    )

    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

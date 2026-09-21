import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


try {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: "Voce respondera resumidamente tudo que eu perguntar",
            },
            {
                role: "user",
                content: "Explique resumidamente como funciona a integração com IA na pratica de forma simples",
            },
        ],
        store: true,
    });

    console.log(completion.choices[0].message.content);
} catch (error) {
    console.error("Erro ou acabou meus creditos $$$$", error.message);
}

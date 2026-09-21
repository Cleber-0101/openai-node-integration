import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            //como ela ira se comportar basicamente !
            //aqui esta sendo definido o papel do sistema, que é responder resumidamente tudo que for perguntado por mim 
            //de acordo com a documentação oficial da openai, o papel do sistema é definir o comportamento do modelo, ou seja, como ele deve se comportar durante a conversa
            role: "system",
            content: "Voce respondera resumidamente tudo que eu perguntar "
        },
        {

            //pergunta do uusuario 
            //já aqui esta sendo definido o papel do usuario, que é fazer a pergunta
            role: "user",
            content: "Explique resumidamente como funciona a integração com IA na pratica de forma simples"
        }

    ],
    store: true
})  

console.log(completion.choices[0].message.content);

<sup>Esse é um feedback gerado por IA, ele pode conter erros.</sup>

Você tem 9 créditos restantes para usar o sistema de feedback AI.

# Feedback para mtresende:

Nota final: **5.9/100**

Olá, mtresende! 🌟 Estou aqui para te ajudar a entender melhor seu código e como você pode melhorá-lo. Vamos juntos explorar o que aconteceu e como você pode brilhar ainda mais na próxima vez! 🚀

### 🎉 Conquistas e Parabéns!
Antes de falarmos sobre os pontos que precisam de atenção, quero parabenizá-lo por ter conseguido configurar um servidor básico Express.js que já responde a uma rota! Isso é um excelente primeiro passo! 👏 Você já mostra que tem a base do que é necessário para construir aplicações web. Vamos aproveitar essa energia e seguir em frente!

### 🕵️‍♂️ Análise de Causa Raiz
Agora, vou investigar os requisitos que não foram atendidos e vamos buscar entender o que está por trás disso:

1. **Rota `/` - Formulário Faltando:**
   Você implementou a rota `/` que responde com "Hello World", mas parece que estamos perdendo uma parte essencial: um formulário! A maioria dos requisitos diz respeito ao formulário que deveria estar nessa página. Para começar, precisamos adicionar um formulário HTML básico na resposta dessa rota. Isso é fundamental, pois muitos dos requisitos dependem dele. Vamos colocar um formulário que tenha dois campos de input, conforme solicitado!

2. **Botão de Submit e Campos de Input:**
   Como o formulário não está presente, também não temos o botão de submit e os campos de input com os atributos `name` necessários. Precisamos garantir que o formulário tenha:
   - Um campo de input com `name="nome"`
   - Um campo de input com `name="ingredientes"`

3. **Rota `/sugestao` e `/contato`:**
   Percebi que as rotas `/sugestao` e `/contato` não foram implementadas no seu código. Isso significa que não podemos atender aos requisitos que mencionam essas rotas, como retornar o status 200 e exibir os dados enviados. Vamos pensar em como implementar essas rotas! 

4. **Rota `/api/lanches`:**
   Da mesma forma, a rota `/api/lanches` também não existe. Isso é fundamental, pois você precisa retornar uma lista de lanches em formato JSON. Vamos trabalhar para criar essa rota e retornar uma lista com pelo menos 3 lanches, cada um com os atributos corretos!

### 🛠️ O que Fazer a Seguir?
Aqui estão algumas sugestões para você implementar:

- Crie a rota `/contato` com um formulário que tenha os campos apropriados.
- Implemente a rota `/sugestao` que retorne o que foi enviado via query string.
- Adicione a rota `/api/lanches` para retornar um array de lanches.

### 🔜 Próximos Passos
Sinta-se à vontade para começar implementando o formulário na rota `/`. Depois, podemos trabalhar juntos nas outras rotas! Lembre-se, cada erro é uma oportunidade de aprendizado. Estou aqui para te apoiar! 😊

Continue assim, você está indo muito bem! Vamos em frente e vamos fazer esse código brilhar! 💪✨
# API Literária - CRUD de Livros (Trabalho 02)

Este repositório contém o desenvolvimento de uma API REST completa para o gerenciamento de um catálogo de livros. O projeto foi focado na implementação do **CRUD 100% funcional**, utilizando Node.js e Express, conforme os requisitos da disciplina.

O tema escolhido foi **Literatura**.


## Tecnologias e Ferramentas
- **Node.js**: Ambiente de execução.
- **Express.js**: Framework para as rotas.
- **Nodemon**: Para atualização automática do servidor.
- **Postman**: Para testes de integração e criação da Collection.


## Como Rodar o Projeto

1. **Instalar Dependências:**
Bash
- npm install

**Iniciar o Servidor (Modo Dev):**
- npm run dev
- A API rodará em: http://localhost:3000

**Documentação dos Endpoints (Testes Postman)**

1. Listagem Geral (GET)
Retorna os 10 livros iniciais cadastrados no sistema.

URL: GET /api/livros

Status: 200 OK

2. Cadastro de Livro (POST)
Adiciona um novo livro ao catálogo com geração automática de ID.

Body: {
  "titulo": "Noiva",
  "autor": "Ali Hazelwood",
  "preco": 52.90,
  "genero": "Romance Paranormal"
}

URL: POST /api/livros

Status: 201 Created

3. Busca por ID (GET/:id)
Filtra um livro específico através do seu identificador único.

URL: GET /api/livros/11

4. Atualização Completa (PUT) - Aula 04
Realiza a edição de todos os campos de um livro existente. Requer o envio do objeto completo no corpo da requisição.

Body: {
  "titulo": "A Hipótese do Amor - Edição Especial",
  "autor": "Ali Hazelwood",
  "preco": 65.00,
  "genero": "Romance"
}

URL: PUT /api/livros/1

Status: 200 OK

5. Remoção de Livro (DELETE) - Aula 04
Remove permanentemente um livro do array utilizando o método "Hard Delete".

URL: DELETE /api/livros/2

Status: 204 No Content (Sucesso sem corpo de resposta)

6. Tratamento de Erro (404)
Validação para casos onde o ID solicitado não existe no sistema.

Status: 404 Not Found

**Regras de Negócio e Validações**
Implementei as travas de segurança discutidas em aula para garantir dados limpos:

- Campos Obrigatórios: Tanto no POST quanto no PUT, a API barra requisições sem título, autor, preço ou gênero.
- Status Codes Corretos: - 201 para novos cadastros.
- 204 para exclusões com sucesso.
- 400 para erros de preenchimento.
- 404 para recursos não encontrados.
- Persistência Temporária: Os dados são mantidos em memória enquanto o servidor estiver ativo.

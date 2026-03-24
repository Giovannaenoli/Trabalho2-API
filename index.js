const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Nosso "banco de dados" de livros - Começando com 10
let livros = [
    { id: 1, titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", preco: 45.90, genero: "Romance" },
    { id: 2, titulo: "A Razão de Eu e Você", autor: "Ali Hazelwood", preco: 42.00, genero: "Romance" },
    { id: 3, titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", preco: 55.00, genero: "Fantasia" },
    { id: 4, titulo: "Corte de Névoa e Fúria", autor: "Sarah J. Maas", preco: 59.90, genero: "Fantasia" },
    { id: 5, titulo: "Amor, Teoricamente", autor: "Ali Hazelwood", preco: 48.00, genero: "Romance" },
    { id: 6, titulo: "É Assim que Acaba", autor: "Colleen Hoover", preco: 39.90, genero: "Drama" },
    { id: 7, titulo: "Os Sete Maridos de Evelyn Hugo", autor: "Taylor Jenkins Reid", preco: 44.90, genero: "Drama" },
    { id: 8, titulo: "Corte de Asas e Ruína", autor: "Sarah J. Maas", preco: 62.00, genero: "Fantasia" },
    { id: 9, titulo: "Check & Mate", autor: "Ali Hazelwood", preco: 40.00, genero: "Romance" },
    { id: 10, titulo: "Quarta Asa", autor: "Rebecca Yarros", preco: 70.00, genero: "Fantasia" }
];

let proximoId = 11;

// Rota pra listar tudo
app.get('/api/livros', (req, res) => {
    res.json(livros);
});

// Rota pra buscar um livro específico pelo ID que vem na URL
app.get('/api/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
    res.json(livro);
});

app.listen(3000, () => {
    console.log('🚀 API de Livros rodando na porta 3000');
});
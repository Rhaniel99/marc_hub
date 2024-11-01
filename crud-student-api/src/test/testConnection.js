// testConnection.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testConnection() {
    try {
        // Tente fazer uma consulta simples
        await prisma.$connect(); // Conecta ao banco de dados
        console.log("Conexão com o banco de dados realizada com sucesso!");

        // Teste uma consulta
        const students = await prisma.student.findMany(); // Altere para o nome correto do seu modelo
        console.log("Estudantes encontrados:", students);
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    } finally {
        await prisma.$disconnect(); // Desconecta após o teste
    }
}

testConnection();
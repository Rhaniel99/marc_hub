import { Router } from 'express';
import { StudentController } from '@controllers/student.js';

const router = Router();

// Rotas para estudantes
router.post('/', StudentController.create); // Criar um novo estudante
router.get('/', StudentController.getAll); // Obter todos os estudantes
router.get('/:id', StudentController.getById); // Obter todos os estudantes
router.put('/:id', StudentController.update); // Atualizar um estudante pelo ID
router.delete('/:id', StudentController.delete); // Atualizar um estudante pelo ID

export default router;

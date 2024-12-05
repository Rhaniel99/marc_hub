import Student from '@models/studentModel.js';

export const StudentController = {
    async create(req, res) {
      try {        
        const { name, email, age, dob } = req.body;
  
        // Cria um novo registro no banco de dados
        const newStudent = await Student.create({
          name,
          email,
          age,
          dob,
        });
  
        return res.status(201).json({
          message: 'Estudante criado com sucesso!',
          data: newStudent,
        });
        
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: 'Erro ao criar estudante',
          error: error.message,
        });
      }
    },
  
    async getAll(req, res) {
      try {
        const students = await Student.findAll();
        return res.status(200).json({
          message: 'Estudantes recuperados com sucesso!',
          data: students,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: 'Erro ao recuperar estudantes!',
          error: error.message,
        });
      }
    },

    async getById(req, res) {
      try {
        const { id } = req.params;
  
        const student = await Student.findByPk(id);
  
        if (!student) {
          return res.status(404).json({
            message: 'Estudante nao encontrado',
          });
        }
  
        return res.status(200).json({
          message: 'Estudante recuperado com sucesso!',
          data: student,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: 'Erro ao recuperar estudante',
          error: error.message,
        });
      }
    },

    async update(req, res) {
      try {
        const { id } = req.params;
        const { name, email, age, dob } = req.body;
  
        const student = await Student.findByPk(id);
  
        if (!student) {
          return res.status(404).json({
            message: 'Student not found',
          });
        }
  
        student.name = name;
        student.email = email;
        student.age = age;
        student.dob = dob;
  
        await student.save();
  
        return res.status(200).json({
          message: 'Estudante atualizado com sucesso',
          data: student,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: 'Erro ao atualizar o estudante',
          error: error.message,
        });
      }
    },

    async delete(req, res) {
      try {
        const { id } = req.params;
  
        const student = await Student.findByPk(id);
  
        if (!student) {
          return res.status(404).json({
            message: 'Estudante não encontrado',
          });
        }
  
        await student.destroy();
  
        return res.status(200).json({
          message: 'Estudante deletado com sucesso!',
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({    
          message: 'Error ao deletar estudante',
          error: error.message,
        });
      }
    }
  };
  
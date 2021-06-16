import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Allyson',
      sobrenome: 'Reis',
      email: 'allysonreis1@gmail.com',
      idade: 28,
      peso: 61.5,
      altura: 1.65,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

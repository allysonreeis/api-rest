import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message),
      });
    }
  }

  async index(req, res){
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res){
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res){
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      
      const user = await User.findByPk(id);

      if(!user) {
        return res.status(400).json({
          errors: ['User does not exist.']
        });
      }

      const novosDados = await user.update(req.body);

      return res.json(novosDados);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message),
      });
    }
  }

  async delete(req, res){
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      
      const user = await User.findByPk(id);

      if(!user) {
        return res.status(400).json({
          errors: ['User does not exist.']
        });
      }

      await user.destroy();
      return res.json(user);
      
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message),
      });
    }
  }
}

export default new UserController();

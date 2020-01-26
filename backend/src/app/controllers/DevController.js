import api from '../services/api';
import Dev from '../schemas/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';

class DevController {
  async index(request, response) {
    const devs = await Dev.find(); // TODO buscar todos os devs

    return response.json(devs); // TODO retornar todos os devs
  }

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body; // TODO pegar dados do corpo da requisição

    let dev = await Dev.findOne({ github_username }); // TODO buscar um unico dev com o campo github_username

    // TODO verificar se o dev da busca não existe
    if (!dev) {
      const apiResponse = await api.get(`users/${github_username}`); // TODO buscar na api do github o usuario

      const { name = login, avatar_url, bio } = apiResponse.data; // TODO pegar apenas os dados da resposta da requisição

      const techsArray = parseStringAsArray(techs); // TODO criar um array de techs passadas como uma string

      // TODO formatar dados de georeferencia para salvar no bd
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      // TODO criar um novo dev
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return response.json(dev); // TODO retornar um novo ou o mesmo dev
  }
}

export default new DevController();

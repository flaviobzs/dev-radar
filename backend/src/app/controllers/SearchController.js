import Dev from '../schemas/Dev';

import parseStringAsArray from '../utils/parseStringAsArray';

class SearchController {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query; // TODO pegar dados dos parametros da requisição

    const techsArray = parseStringAsArray(techs); // TODO criar um array de techs passadas como uma string

    // TODO buscar devs como filtros de informações passada
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json({ devs }); // retornar um objeto com os devs enquadrados
  }
}

export default new SearchController();

import { me, signin, signup } from './auth';
import { createPlanet, findPlanet, listPlanets, updatePlanet } from './planet';

export const router = {
  auth: {
    signup,
    signin,
    me,
  },

  planet: {
    list: listPlanets,
    create: createPlanet,
    find: findPlanet,
    update: updatePlanet,
  },
};

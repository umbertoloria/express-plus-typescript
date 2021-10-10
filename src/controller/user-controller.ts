import {userRepo} from '../db/repo';

export default {

  findAll: () => userRepo.findAll(),

};

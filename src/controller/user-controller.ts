import {userRepo} from '../db/repo';

export default {

  findAll() {
    return userRepo.findAll();
  },

};

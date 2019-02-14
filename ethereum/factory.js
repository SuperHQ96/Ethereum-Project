import web3 from './web3';
import GameInstanceFactory from './build/GameInstanceFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(GameInstanceFactory.interface),
  '0x5e3dD6BeCD44bb858182b046Ccf297379dc1DDBc'
);

export default instance;

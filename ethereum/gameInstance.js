import web3 from './web3';
import GameInstance from './build/GameInstance.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(GameInstance.interface), address);
};

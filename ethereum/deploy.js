const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/GameInstanceFactory.json');

const provider = new HDWalletProvider(
  'student toward weird front plate van hold coral huge toilet potato reform',
  'https://rinkeby.infura.io/v3/833be3edba6e4a6c846ceb4347d5647d'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '2900000' });

  console.log('Contract deployed to', result.options.address);
};
deploy();

import Web3 from 'web3';
import MessageContract from '../../../artifacts/contracts/Task.sol/MessageContract.json';

const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; // Deployed contract address

class MessageService {
  private web3: Web3;
  private contract: any; // Contract type from web3.js

  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); // Assuming local RPC node
    this.contract = new this.web3.eth.Contract(MessageContract.abi, contractAddress);
  }

  async setMessage(message: string): Promise<void> {
    await this.contract.methods.setMessage(message).send({ from: '0xcd3B766CCDd6AE721141F452C550Ca635964ce71' });
  }

  async getMessage(): Promise<string> {
    return await this.contract.methods.getMessage().call();
  }
}

export default MessageService;

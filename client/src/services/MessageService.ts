import { ethers } from 'ethers';
import MessageContract from '../../../artifacts/contracts/Task.sol/MessageContract.json';

const contractAddress = '0x0165878A594ca255338adfa4d48449f69242Eb8F'; // Deployed contract address
class MessageService {
  private provider: ethers.providers.JsonRpcProvider;
  private signer: ethers.Signer;
  private contract: ethers.Contract;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider();
    this.signer = this.provider.getSigner();
    this.contract = new ethers.Contract(contractAddress, MessageContract.abi, this.signer);
  }

  async setMessage(message: string): Promise<void> {
    await this.contract.setMessage(message);
  }

  async getMessage(): Promise<string> {
    return await this.contract.getMessage();
  }
}

export default MessageService;

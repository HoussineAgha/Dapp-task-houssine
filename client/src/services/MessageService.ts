import { ethers } from 'ethers';
import MessageContract from '@/contracts/MessageContract.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Deployed contract address

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

import { Web3PluginBase, Contract } from 'web3'
export class MyWeb3Plugin extends Web3PluginBase {
    pluginNamespace: string;
    public publicnamespace = 'myWeb3Plugin';

    // Define the ABI for the contract
    private abi = [
        // Add your contract's ABI here
    ];

    makeCall() {
        const contract = new Contract(this.abi)
        contract.methods.myMethod().call()

    }
    sendTx() {
        const contract = new Contract(this.abi)
        contract.methods.myMethod().send({ from: 'Mayank Dharaskar' })

    }
}


export const abi = [{
    inputs: [{
        internalType: 'string',
        name: 'name',
        type: 'string'
    }, {
        internalType: 'uint256',
        name: 'age',
        type: 'uint256'
    }],
    stateMutability: 'nonpayable',
    type: 'constructor'
}, {
    anonyomus: false,
    inputs: [{
        indexed: true,
        internalType: 'address',
        name: 'name',
        type: 'string'
    }]

}, {
    indexed: false,
    internalType: 'uint256',
    name: 'age',
    type: 'uint256'
}]
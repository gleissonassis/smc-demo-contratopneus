export default {
  "contractName": "BRLTMoney",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DECIMALS",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INITIAL_SUPPLY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "NAME",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "SYMBOL",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isMinter",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.12+commit.7709ece9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"DECIMALS\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"INITIAL_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"NAME\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"SYMBOL\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isMinter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See `IERC20.allowance`.\"},\"approve(address,uint256)\":{\"details\":\"See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See `IERC20.balanceOf`.\"},\"burn(uint256)\":{\"details\":\"Destoys `amount` tokens from the caller.     * See `ERC20._burn`.\"},\"burnFrom(address,uint256)\":{\"details\":\"See `ERC20._burnFrom`.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * > Note that this information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including `IERC20.balanceOf` and `IERC20.transfer`.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See `IERC20.totalSupply`.\"},\"transfer(address,uint256)\":{\"details\":\"Transfer the specified amount of tokens to the specified address.     This function works the same with the previous one     but doesn't contain `_data` param.     Added due to backwards compatibility reasons.\",\"params\":{\"_to\":\"Receiver address.\",\"_value\":\"Amount of tokens that will be transferred.\"}},\"transfer(address,uint256,bytes)\":{\"details\":\"Transfer the specified amount of tokens to the specified address.     Invokes the `tokenFallback` function if the recipient is a contract.     The token transfer fails if the recipient is a contract     but does not implement the `tokenFallback` function     or the fallback function to receive funds.\",\"params\":{\"_data\":\"Transaction metadata.\",\"_to\":\"Receiver address.\",\"_value\":\"Amount of tokens that will be transferred.\"}},\"transferFrom(address,address,uint256)\":{\"details\":\"See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/BRLTMoney.sol\":\"BRLTMoney\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/BRLTMoney.sol\":{\"keccak256\":\"0x5728e4404e318953caff400359067c1c073808d47a32a335f1c51e56dc4bfd9d\",\"urls\":[\"bzz-raw://340649ac1524775a863fd4971828c99d575ec6a8a58621ba508d4306176932e6\",\"dweb:/ipfs/QmSkRRrRNUJohjxPqfcHxE1YEmDEKtGPEQ6CrLz1VwDNYJ\"]},\"/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/IERC223Recipient.sol\":{\"keccak256\":\"0xceea94ecdb8ccb8e9a957621c0626c3088b414918fa4b1bdaa23f1390fdcbe0d\",\"urls\":[\"bzz-raw://c21db247c8010a8549bc8cbec4f0cc210d1fc7f553c794ffb288e35edcf232ff\",\"dweb:/ipfs/QmTcbLMj5oLRCT9aPu2P6615tzpXhXeiGxvyt3z45kU1N2\"]},\"openzeppelin-solidity/contracts/access/Roles.sol\":{\"keccak256\":\"0xb002c378d7b82a101bd659c341518953ca0919d342c0a400196982c0e7e7bcdb\",\"urls\":[\"bzz-raw://00a788c4631466c220b385bdd100c571d24b2deccd657615cfbcef6cadf669a4\",\"dweb:/ipfs/QmTEwDbjJNxmMNCDMqtuou3dyM8Wtp8Q9NFvn7SAVM7Jf3\"]},\"openzeppelin-solidity/contracts/access/roles/MinterRole.sol\":{\"keccak256\":\"0x63da54a7a5d4e4d82ac8d1f4f7f995fd8ef2b5fe1f2960b83e534fa37fb60910\",\"urls\":[\"bzz-raw://22e54aa25d633d51efaadb0c956ddd80616a79ee79a41bb8d958473712732612\",\"dweb:/ipfs/QmNbiwWkL4v1i6TgrppGahxHBUHJUrLJLVc8EDb7DFsVDq\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\",\"urls\":[\"bzz-raw://d62d769b2219d5de39013093412623e624fa887f871826ea3bae6052ee893610\",\"dweb:/ipfs/QmV3yVktya1s617QmuzQR2CfuJgUi3dR2xEZY9ecmqZ2G1\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x852793a3c2f86d336a683b30d688ec3dcfc57451af5a2bf5975cda3b7191a901\",\"urls\":[\"bzz-raw://4f5b57664069671648fb81f55b0082faecdf1b2f159eec6b1fa6cef9b7d73bc5\",\"dweb:/ipfs/QmcyytaLs7zFdb4Uu7C5PmQRhQdB3wA3fUdkV6mkYfdDFH\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol\":{\"keccak256\":\"0xa5ebf3344a36eb60e723e0764d85251c496e15e4b2d737b56415502b559a1765\",\"urls\":[\"bzz-raw://c543fd1fc299b7d32c658c86118ff2d0e7897a7c8b9d5f576fe6c0271c28961b\",\"dweb:/ipfs/QmNMrjLnsC4JP54aXLHhpra5NPTAs8rrd2bgXfYYYdJMhS\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\":{\"keccak256\":\"0xc61b3603089b09a730d8ca72e9133a496cc4405da40e9b87c12f073245d774bf\",\"urls\":[\"bzz-raw://de8bb0003d53de236913f0e0102e7a9d015e02098f2495edd000f207fe2be2f4\",\"dweb:/ipfs/QmbtwNwAJEehWWL7yGGyyMoenQvcqtz91pqLgQPpLRoLYC\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\":{\"keccak256\":\"0x6df8d686813b2875e99928ecd07bf8ee6d7473bc6a95eb1190e8fdba86beda76\",\"urls\":[\"bzz-raw://ab0eb6779dbe75fcbae03ef6ec5d0345ff232750684c8341fc55f175bf43d13c\",\"dweb:/ipfs/QmcEyprFynsXawyHsgWMWGt7RoVV9tAt8Pac7QC1qEd7Bs\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\",\"urls\":[\"bzz-raw://d0abb99bb8bfc2bc0a89902b8ed1dc0442ad08cc78cee64c291b3df6a27bcccc\",\"dweb:/ipfs/QmP5NaEwZthQeM2ESz4WTT3osrP7jhbvu7ocbttBi2JAw6\"]}},\"version\":1}",
  "bytecode": "0x60806040526040518060400160405280600a81526020017f42524c54204d6f6e657900000000000000000000000000000000000000000000815250600790805190602001906200005192919062000710565b506040518060400160405280600481526020017f42524c5400000000000000000000000000000000000000000000000000000000815250600890805190602001906200009f92919062000710565b506012600960006101000a81548160ff021916908360ff1602179055506000600a55348015620000ce57600080fd5b5060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015620001695780601f106200013d5761010080835404028352916020019162000169565b820191906000526020600020905b8154815290600101906020018083116200014b57829003601f168201915b505050505060088054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015620002085780601f10620001dc5761010080835404028352916020019162000208565b820191906000526020600020905b815481529060010190602001808311620001ea57829003601f168201915b5050505050600960009054906101000a900460ff166200022e336200029860201b60201c565b82600490805190602001906200024692919062000710565b5081600590805190602001906200025f92919062000710565b5080600660006101000a81548160ff021916908360ff1602179055505050506200029233600a54620002f960201b60201c565b620007bf565b620002b3816003620004c360201b62001fa91790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200039d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620003b981600254620005a760201b620018f11790919060201c565b60028190555062000417816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620005a760201b620018f11790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b620004d582826200063060201b60201c565b1562000549576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008082840190508381101562000626576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620006b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062002a676022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200075357805160ff191683800117855562000784565b8280016001018555821562000784579182015b828111156200078357825182559160200191906001019062000766565b5b50905062000793919062000797565b5090565b620007bc91905b80821115620007b85760008160009055506001016200079e565b5090565b90565b61229880620007cf6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806379cc6790116100b8578063a457c2d71161007c578063a457c2d71461062e578063a9059cbb14610694578063aa271e1a146106fa578063be45fd6214610756578063dd62ed3e14610853578063f76f8d78146108cb57610142565b806379cc67901461048c57806395d89b41146104da578063983b2d561461055d57806398650275146105a1578063a3f4df7e146105ab57610142565b80632ff2e9dc1161010a5780632ff2e9dc146102f8578063313ce56714610316578063395093511461033a57806340c10f19146103a057806342966c681461040657806370a082311461043457610142565b806306fdde0314610147578063095ea7b3146101ca57806318160ddd1461023057806323b872dd1461024e5780632e0f2625146102d4575b600080fd5b61014f61094e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018f578082015181840152602081019050610174565b50505050905090810190601f1680156101bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610216600480360360408110156101e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109f0565b604051808215151515815260200191505060405180910390f35b610238610a07565b6040518082815260200191505060405180910390f35b6102ba6004803603606081101561026457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a11565b604051808215151515815260200191505060405180910390f35b6102dc610ac2565b604051808260ff1660ff16815260200191505060405180910390f35b610300610ad5565b6040518082815260200191505060405180910390f35b61031e610adb565b604051808260ff1660ff16815260200191505060405180910390f35b6103866004803603604081101561035057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610af2565b604051808215151515815260200191505060405180910390f35b6103ec600480360360408110156103b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b97565b604051808215151515815260200191505060405180910390f35b6104326004803603602081101561041c57600080fd5b8101908080359060200190929190505050610d49565b005b6104766004803603602081101561044a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d56565b6040518082815260200191505060405180910390f35b6104d8600480360360408110156104a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d9e565b005b6104e2610dac565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610522578082015181840152602081019050610507565b50505050905090810190601f16801561054f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059f6004803603602081101561057357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e4e565b005b6105a9610eb8565b005b6105b3610ec3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f35780820151818401526020810190506105d8565b50505050905090810190601f1680156106205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61067a6004803603604081101561064457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f61565b604051808215151515815260200191505060405180910390f35b6106e0600480360360408110156106aa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611006565b604051808215151515815260200191505060405180910390f35b61073c6004803603602081101561071057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061115a565b604051808215151515815260200191505060405180910390f35b6108396004803603606081101561076c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107b357600080fd5b8201836020820111156107c557600080fd5b803590602001918460018302840111640100000000831117156107e757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611177565b604051808215151515815260200191505060405180910390f35b6108b56004803603604081101561086957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112b0565b6040518082815260200191505060405180910390f35b6108d3611337565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109135780820151818401526020810190506108f8565b50505050905090810190601f1680156109405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109e65780601f106109bb576101008083540402835291602001916109e6565b820191906000526020600020905b8154815290600101906020018083116109c957829003601f168201915b5050505050905090565b60006109fd3384846113d5565b6001905092915050565b6000600254905090565b6000610a1e8484846115cc565b610ab78433610ab285600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6113d5565b600190509392505050565b600960009054906101000a900460ff1681565b600a5481565b6000600660009054906101000a900460ff16905090565b6000610b8d3384610b8885600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f190919063ffffffff16565b6113d5565b6001905092915050565b6000610ba23361115a565b610bf7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121876030913960400191505060405180910390fd5b610c018383611979565b50610c0b836119ed565b15610d3f5760606040518060400160405280600481526020016000815250905060008490508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610cd6578082015181840152602081019050610cbb565b50505050905090810190601f168015610d035780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610d2457600080fd5b505af1158015610d38573d6000803e3d6000fd5b5050505050505b6001905092915050565b610d533382611a00565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610da88282611b9e565b5050565b606060058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e445780601f10610e1957610100808354040283529160200191610e44565b820191906000526020600020905b815481529060010190602001808311610e2757829003601f168201915b5050505050905090565b610e573361115a565b610eac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121876030913960400191505060405180910390fd5b610eb581611c45565b50565b610ec133611c9f565b565b60078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f595780601f10610f2e57610100808354040283529160200191610f59565b820191906000526020600020905b815481529060010190602001808311610f3c57829003601f168201915b505050505081565b6000610ffc3384610ff785600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6113d5565b6001905092915050565b60006110128383611cf9565b5061101c836119ed565b156111505760606040518060400160405280600481526020016000815250905060008490508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110e75780820151818401526020810190506110cc565b50505050905090810190601f1680156111145780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561113557600080fd5b505af1158015611149573d6000803e3d6000fd5b5050505050505b6001905092915050565b6000611170826003611d1090919063ffffffff16565b9050919050565b60006111838484611cf9565b5061118d846119ed565b156112a55760008490508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561123d578082015181840152602081019050611222565b50505050905090810190601f16801561126a5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561128b57600080fd5b505af115801561129f573d6000803e3d6000fd5b50505050505b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113cd5780601f106113a2576101008083540402835291602001916113cd565b820191906000526020600020905b8154815290600101906020018083116113b057829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561145b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806122406024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806121656022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061221b6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806121426023913960400191505060405180910390fd5b611729816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117bc816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211156118e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b60008082840190508381101561196f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60006119843361115a565b6119d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121876030913960400191505060405180910390fd5b6119e38383611dee565b6001905092915050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a86576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806121fa6021913960400191505060405180910390fd5b611a9b8160025461186890919063ffffffff16565b600281905550611af2816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611ba88282611a00565b611c418233611c3c84600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6113d5565b5050565b611c59816003611fa990919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b611cb381600361208490919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b6000611d063384846115cc565b6001905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806121d86022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611ea6816002546118f190919063ffffffff16565b600281905550611efd816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611fb38282611d10565b15612026576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61208e8282611d10565b6120e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806121b76021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820c80a163f26d67df4c974538046b96c198bcf1ea17c1d570bd0eb475c543622ef64736f6c634300050c0032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101425760003560e01c806379cc6790116100b8578063a457c2d71161007c578063a457c2d71461062e578063a9059cbb14610694578063aa271e1a146106fa578063be45fd6214610756578063dd62ed3e14610853578063f76f8d78146108cb57610142565b806379cc67901461048c57806395d89b41146104da578063983b2d561461055d57806398650275146105a1578063a3f4df7e146105ab57610142565b80632ff2e9dc1161010a5780632ff2e9dc146102f8578063313ce56714610316578063395093511461033a57806340c10f19146103a057806342966c681461040657806370a082311461043457610142565b806306fdde0314610147578063095ea7b3146101ca57806318160ddd1461023057806323b872dd1461024e5780632e0f2625146102d4575b600080fd5b61014f61094e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018f578082015181840152602081019050610174565b50505050905090810190601f1680156101bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610216600480360360408110156101e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109f0565b604051808215151515815260200191505060405180910390f35b610238610a07565b6040518082815260200191505060405180910390f35b6102ba6004803603606081101561026457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a11565b604051808215151515815260200191505060405180910390f35b6102dc610ac2565b604051808260ff1660ff16815260200191505060405180910390f35b610300610ad5565b6040518082815260200191505060405180910390f35b61031e610adb565b604051808260ff1660ff16815260200191505060405180910390f35b6103866004803603604081101561035057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610af2565b604051808215151515815260200191505060405180910390f35b6103ec600480360360408110156103b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b97565b604051808215151515815260200191505060405180910390f35b6104326004803603602081101561041c57600080fd5b8101908080359060200190929190505050610d49565b005b6104766004803603602081101561044a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d56565b6040518082815260200191505060405180910390f35b6104d8600480360360408110156104a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d9e565b005b6104e2610dac565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610522578082015181840152602081019050610507565b50505050905090810190601f16801561054f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059f6004803603602081101561057357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e4e565b005b6105a9610eb8565b005b6105b3610ec3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f35780820151818401526020810190506105d8565b50505050905090810190601f1680156106205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61067a6004803603604081101561064457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f61565b604051808215151515815260200191505060405180910390f35b6106e0600480360360408110156106aa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611006565b604051808215151515815260200191505060405180910390f35b61073c6004803603602081101561071057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061115a565b604051808215151515815260200191505060405180910390f35b6108396004803603606081101561076c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107b357600080fd5b8201836020820111156107c557600080fd5b803590602001918460018302840111640100000000831117156107e757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611177565b604051808215151515815260200191505060405180910390f35b6108b56004803603604081101561086957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112b0565b6040518082815260200191505060405180910390f35b6108d3611337565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109135780820151818401526020810190506108f8565b50505050905090810190601f1680156109405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109e65780601f106109bb576101008083540402835291602001916109e6565b820191906000526020600020905b8154815290600101906020018083116109c957829003601f168201915b5050505050905090565b60006109fd3384846113d5565b6001905092915050565b6000600254905090565b6000610a1e8484846115cc565b610ab78433610ab285600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6113d5565b600190509392505050565b600960009054906101000a900460ff1681565b600a5481565b6000600660009054906101000a900460ff16905090565b6000610b8d3384610b8885600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f190919063ffffffff16565b6113d5565b6001905092915050565b6000610ba23361115a565b610bf7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121876030913960400191505060405180910390fd5b610c018383611979565b50610c0b836119ed565b15610d3f5760606040518060400160405280600481526020016000815250905060008490508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610cd6578082015181840152602081019050610cbb565b50505050905090810190601f168015610d035780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610d2457600080fd5b505af1158015610d38573d6000803e3d6000fd5b5050505050505b6001905092915050565b610d533382611a00565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610da88282611b9e565b5050565b606060058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e445780601f10610e1957610100808354040283529160200191610e44565b820191906000526020600020905b815481529060010190602001808311610e2757829003601f168201915b5050505050905090565b610e573361115a565b610eac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121876030913960400191505060405180910390fd5b610eb581611c45565b50565b610ec133611c9f565b565b60078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f595780601f10610f2e57610100808354040283529160200191610f59565b820191906000526020600020905b815481529060010190602001808311610f3c57829003601f168201915b505050505081565b6000610ffc3384610ff785600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6113d5565b6001905092915050565b60006110128383611cf9565b5061101c836119ed565b156111505760606040518060400160405280600481526020016000815250905060008490508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110e75780820151818401526020810190506110cc565b50505050905090810190601f1680156111145780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561113557600080fd5b505af1158015611149573d6000803e3d6000fd5b5050505050505b6001905092915050565b6000611170826003611d1090919063ffffffff16565b9050919050565b60006111838484611cf9565b5061118d846119ed565b156112a55760008490508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561123d578082015181840152602081019050611222565b50505050905090810190601f16801561126a5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561128b57600080fd5b505af115801561129f573d6000803e3d6000fd5b50505050505b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113cd5780601f106113a2576101008083540402835291602001916113cd565b820191906000526020600020905b8154815290600101906020018083116113b057829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561145b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806122406024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806121656022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061221b6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806121426023913960400191505060405180910390fd5b611729816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117bc816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211156118e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b60008082840190508381101561196f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60006119843361115a565b6119d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121876030913960400191505060405180910390fd5b6119e38383611dee565b6001905092915050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a86576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806121fa6021913960400191505060405180910390fd5b611a9b8160025461186890919063ffffffff16565b600281905550611af2816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611ba88282611a00565b611c418233611c3c84600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461186890919063ffffffff16565b6113d5565b5050565b611c59816003611fa990919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b611cb381600361208490919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b6000611d063384846115cc565b6001905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806121d86022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611ea6816002546118f190919063ffffffff16565b600281905550611efd816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611fb38282611d10565b15612026576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61208e8282611d10565b6120e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806121b76021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820c80a163f26d67df4c974538046b96c198bcf1ea17c1d570bd0eb475c543622ef64736f6c634300050c0032",
  "sourceMap": "340:2459:0:-;;;418:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;455:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;512:2;488:26;;;;;;;;;;;;;;;;;;;;547:1;518:30;;553:103;8:9:-1;5:2;;;30:1;27;20:12;5:2;553:103:0;581:4;416:163:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;587:6:0;416:163:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;595:8:0;;;;;;;;;;;275:22:5;286:10;275;;;:22;;:::i;:::-;512:4:9;504:5;:12;;;;;;;;;;;;:::i;:::-;;536:6;526:7;:16;;;;;;;;;;;;:::i;:::-;;564:8;552:9;;:20;;;;;;;;;;;;;;;;;;416:163;;;618:33:0;624:10;636:14;;618:5;;;:33;;:::i;:::-;340:2459;;737:119:5;793:21;806:7;793:8;:12;;;;;;:21;;;;:::i;:::-;841:7;829:20;;;;;;;;;;;;737:119;:::o;5771:302:7:-;5865:1;5846:21;;:7;:21;;;;5838:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5929:24;5946:6;5929:12;;:16;;;;;;:24;;;;:::i;:::-;5914:12;:39;;;;5984:30;6007:6;5984:9;:18;5994:7;5984:18;;;;;;;;;;;;;;;;:22;;;;;;:30;;;;:::i;:::-;5963:9;:18;5973:7;5963:18;;;;;;;;;;;;;;;:51;;;;6050:7;6029:37;;6046:1;6029:37;;;6059:6;6029:37;;;;;;;;;;;;;;;;;;5771:302;;:::o;260:175:4:-;337:18;341:4;347:7;337:3;;;:18;;:::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;834:176:6:-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;779:200:4:-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;340:2459:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "340:2459:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;340:2459:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81:9;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;644:81:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2453:145:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2453:145:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1514:89;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3055:252;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3055:252:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;488:26:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;518:30;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1478:81:9;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3702:203:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3702:203:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2129:313:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2129:313:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;397:79:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;397:79:8;;;;;;;;;;;;;;;;;:::i;:::-;;1661:108:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1661:108:7;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;533:101:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;533:101:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;838:85:9;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;838:85:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;560:90:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;560:90:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;656:75;;;:::i;:::-;;418:33:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;418:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4392:213:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4392:213:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1807:318:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1807:318:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;447:107:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;447:107:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1153:296:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1153:296:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1153:296:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1153:296:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1153:296:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1153:296:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2183:132:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2183:132:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;455:29:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;455:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81:9;681:13;713:5;706:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81;:::o;2453:145:7:-;2518:4;2534:36;2543:10;2555:7;2564:5;2534:8;:36::i;:::-;2587:4;2580:11;;2453:145;;;;:::o;1514:89::-;1558:7;1584:12;;1577:19;;1514:89;:::o;3055:252::-;3144:4;3160:36;3170:6;3178:9;3189:6;3160:9;:36::i;:::-;3206:73;3215:6;3223:10;3235:43;3271:6;3235:11;:19;3247:6;3235:19;;;;;;;;;;;;;;;:31;3255:10;3235:31;;;;;;;;;;;;;;;;:35;;:43;;;;:::i;:::-;3206:8;:73::i;:::-;3296:4;3289:11;;3055:252;;;;;:::o;488:26:0:-;;;;;;;;;;;;;:::o;518:30::-;;;;:::o;1478:81:9:-;1519:5;1543:9;;;;;;;;;;;1536:16;;1478:81;:::o;3702:203:7:-;3782:4;3798:79;3807:10;3819:7;3828:48;3865:10;3828:11;:23;3840:10;3828:23;;;;;;;;;;;;;;;:32;3852:7;3828:32;;;;;;;;;;;;;;;;:36;;:48;;;;:::i;:::-;3798:8;:79::i;:::-;3894:4;3887:11;;3702:203;;;;:::o;2129:313:0:-;2198:4;350:20:5;359:10;350:8;:20::i;:::-;342:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2210:22:0;2221:2;2225:6;2210:10;:22::i;:::-;;2242:14;2253:2;2242:10;:14::i;:::-;2239:181;;;2266:18;:34;;;;;;;;;;;;;;;;;;;2308:25;2353:2;2308:48;;2364:8;:22;;;2387:10;2399:6;2407:5;2364:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2364:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2364:49:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2364:49:0;;;;2239:181;;;2433:4;2426:11;;2129:313;;;;:::o;397:79:8:-;444:25;450:10;462:6;444:5;:25::i;:::-;397:79;:::o;1661:108:7:-;1718:7;1744:9;:18;1754:7;1744:18;;;;;;;;;;;;;;;;1737:25;;1661:108;;;:::o;533:101:8:-;601:26;611:7;620:6;601:9;:26::i;:::-;533:101;;:::o;838:85:9:-;877:13;909:7;902:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;838:85;:::o;560:90:5:-;350:20;359:10;350:8;:20::i;:::-;342:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;624:19;635:7;624:10;:19::i;:::-;560:90;:::o;656:75::-;699:25;713:10;699:13;:25::i;:::-;656:75::o;418:33:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4392:213:7:-;4477:4;4493:84;4502:10;4514:7;4523:53;4560:15;4523:11;:23;4535:10;4523:23;;;;;;;;;;;;;;;:32;4547:7;4523:32;;;;;;;;;;;;;;;;:36;;:53;;;;:::i;:::-;4493:8;:84::i;:::-;4594:4;4587:11;;4392:213;;;;:::o;1807:318:0:-;1867:12;1886:27;1901:3;1906:6;1886:14;:27::i;:::-;;1923:15;1934:3;1923:10;:15::i;:::-;1920:183;;;1948:18;:34;;;;;;;;;;;;;;;;;;;1990:25;2035:3;1990:49;;2047:8;:22;;;2070:10;2082:6;2090:5;2047:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2047:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2047:49:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2047:49:0;;;;1920:183;;;2116:4;2109:11;;1807:318;;;;:::o;447:107:5:-;503:4;526:21;539:7;526:8;:12;;:21;;;;:::i;:::-;519:28;;447:107;;;:::o;1153:296:0:-;1233:12;1252:27;1267:3;1272:6;1252:14;:27::i;:::-;;1289:15;1300:3;1289:10;:15::i;:::-;1286:141;;;1314:25;1359:3;1314:49;;1371:8;:22;;;1394:10;1406:6;1414:5;1371:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1371:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1371:49:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1371:49:0;;;;1286:141;;1440:4;1433:11;;1153:296;;;;;:::o;2183:132:7:-;2255:7;2281:11;:18;2293:5;2281:18;;;;;;;;;;;;;;;:27;2300:7;2281:27;;;;;;;;;;;;;;;;2274:34;;2183:132;;;;:::o;455:29:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7117:329:7:-;7226:1;7209:19;;:5;:19;;;;7201:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7306:1;7287:21;;:7;:21;;;;7279:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7388:5;7358:11;:18;7370:5;7358:18;;;;;;;;;;;;;;;:27;7377:7;7358:27;;;;;;;;;;;;;;;:35;;;;7424:7;7408:31;;7417:5;7408:31;;;7433:5;7408:31;;;;;;;;;;;;;;;;;;7117:329;;;:::o;5079:422::-;5194:1;5176:20;;:6;:20;;;;5168:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5277:1;5256:23;;:9;:23;;;;5248:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5350:29;5372:6;5350:9;:17;5360:6;5350:17;;;;;;;;;;;;;;;;:21;;:29;;;;:::i;:::-;5330:9;:17;5340:6;5330:17;;;;;;;;;;;;;;;:49;;;;5412:32;5437:6;5412:9;:20;5422:9;5412:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;5389:9;:20;5399:9;5389:20;;;;;;;;;;;;;;;:55;;;;5476:9;5459:35;;5468:6;5459:35;;;5487:6;5459:35;;;;;;;;;;;;;;;;;;5079:422;;;:::o;1274:179:6:-;1332:7;1364:1;1359;:6;;1351:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1410:9;1426:1;1422;:5;1410:17;;1445:1;1438:8;;;1274:179;;;;:::o;834:176::-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;502:140:10:-;576:4;350:20:5;359:10;350:8;:20::i;:::-;342:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;592:22:10;598:7;607:6;592:5;:22::i;:::-;631:4;624:11;;502:140;;;;:::o;2536:261:0:-;2593:16;2617:11;2758:5;2746:18;2736:28;;2790:1;2783:6;:8;2775:17;;;2536:261;;;:::o;6392:300:7:-;6485:1;6466:21;;:7;:21;;;;6458:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6551:23;6568:5;6551:12;;:16;;:23;;;;:::i;:::-;6536:12;:38;;;;6605:29;6628:5;6605:9;:18;6615:7;6605:18;;;;;;;;;;;;;;;;:22;;:29;;;;:::i;:::-;6584:9;:18;6594:7;6584:18;;;;;;;;;;;;;;;:50;;;;6675:1;6649:36;;6658:7;6649:36;;;6679:5;6649:36;;;;;;;;;;;;;;;;;;6392:300;;:::o;7623:185::-;7694:22;7700:7;7709:6;7694:5;:22::i;:::-;7726:75;7735:7;7744:10;7756:44;7793:6;7756:11;:20;7768:7;7756:20;;;;;;;;;;;;;;;:32;7777:10;7756:32;;;;;;;;;;;;;;;;:36;;:44;;;;:::i;:::-;7726:8;:75::i;:::-;7623:185;;:::o;737:119:5:-;793:21;806:7;793:8;:12;;:21;;;;:::i;:::-;841:7;829:20;;;;;;;;;;;;737:119;:::o;862:127::-;921:24;937:7;921:8;:15;;:24;;;;:::i;:::-;974:7;960:22;;;;;;;;;;;;862:127;:::o;1972:153:7:-;2041:4;2057:40;2067:10;2079:9;2090:6;2057:9;:40::i;:::-;2114:4;2107:11;;1972:153;;;;:::o;779:200:4:-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;5771:302:7:-;5865:1;5846:21;;:7;:21;;;;5838:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5929:24;5946:6;5929:12;;:16;;:24;;;;:::i;:::-;5914:12;:39;;;;5984:30;6007:6;5984:9;:18;5994:7;5984:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;5963:9;:18;5973:7;5963:18;;;;;;;;;;;;;;;:51;;;;6050:7;6029:37;;6046:1;6029:37;;;6059:6;6029:37;;;;;;;;;;;;;;;;;;5771:302;;:::o;260:175:4:-;337:18;341:4;347:7;337:3;:18::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;510:180::-;589:18;593:4;599:7;589:3;:18::i;:::-;581:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;678:5;655:4;:11;;:20;667:7;655:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;510:180;;:::o",
  "source": "pragma solidity ^0.5.11;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol\";\nimport \"./IERC223Recipient.sol\";\n\ncontract BRLTMoney is ERC20, ERC20Burnable, ERC20Mintable, ERC20Detailed {\n\n  string public NAME = \"BRLT Money\";\n  string public SYMBOL = \"BRLT\";\n  uint8 public DECIMALS = 18;\n  uint public INITIAL_SUPPLY = 0;\n\n  constructor() ERC20Detailed(NAME, SYMBOL, DECIMALS) public {\n    _mint(msg.sender, INITIAL_SUPPLY);\n  }\n\n  /**\n   * @dev Transfer the specified amount of tokens to the specified address.\n   *      Invokes the `tokenFallback` function if the recipient is a contract.\n   *      The token transfer fails if the recipient is a contract\n   *      but does not implement the `tokenFallback` function\n   *      or the fallback function to receive funds.\n   *\n   * @param _to    Receiver address.\n   * @param _value Amount of tokens that will be transferred.\n   * @param _data  Transaction metadata.\n   */\n  function transfer(address _to, uint _value, bytes memory _data) public returns (bool success){\n    super.transfer(_to, _value);\n\n    if(isContract(_to)) {\n      IERC223Recipient receiver = IERC223Recipient(_to);\n      receiver.tokenFallback(msg.sender, _value, _data);\n    }\n\n    return true;\n  }\n\n  /**\n   * @dev Transfer the specified amount of tokens to the specified address.\n   *      This function works the same with the previous one\n   *      but doesn't contain `_data` param.\n   *      Added due to backwards compatibility reasons.\n   *\n   * @param _to    Receiver address.\n   * @param _value Amount of tokens that will be transferred.\n   */\n  function transfer(address _to, uint _value) public returns (bool success){\n    super.transfer(_to, _value);\n\n    if(isContract(_to)) {\n      bytes memory empty = hex\"00000000\";\n      IERC223Recipient receiver = IERC223Recipient(_to);\n      receiver.tokenFallback(msg.sender, _value, empty);\n    }\n\n    return true;\n  }\n\n  function mint(address to, uint256 amount) public onlyMinter returns (bool) {\n    super.mint(to, amount);\n\n    if(isContract(to)) {\n      bytes memory empty = hex\"00000000\";\n      IERC223Recipient receiver = IERC223Recipient(to);\n      receiver.tokenFallback(msg.sender, amount, empty);\n    }\n\n    return true;\n  }\n\n  //assemble the given address bytecode. If bytecode exists then the _addr is a contract.\n  function isContract(address _addr) private view returns (bool is_contract) {\n    uint length;\n    assembly {\n          //retrieve the size of the code on target address, this needs assembly\n          length := extcodesize(_addr)\n    }\n    return (length>0);\n  }\n}\n",
  "sourcePath": "/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/BRLTMoney.sol",
  "ast": {
    "absolutePath": "/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/BRLTMoney.sol",
    "exportedSymbols": {
      "BRLTMoney": [
        188
      ]
    },
    "id": 189,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".11"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2129,
        "src": "26:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2218,
        "src": "90:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2246,
        "src": "162:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2160,
        "src": "234:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/IERC223Recipient.sol",
        "file": "./IERC223Recipient.sol",
        "id": 6,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 201,
        "src": "306:32:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2128,
              "src": "362:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$2128",
                "typeString": "contract ERC20"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "362:5:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "ERC20Burnable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2159,
              "src": "369:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burnable_$2159",
                "typeString": "contract ERC20Burnable"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "369:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 11,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2245,
              "src": "384:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$2245",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 12,
            "nodeType": "InheritanceSpecifier",
            "src": "384:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 13,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2217,
              "src": "399:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$2217",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 14,
            "nodeType": "InheritanceSpecifier",
            "src": "399:13:0"
          }
        ],
        "contractDependencies": [
          1598,
          2128,
          2159,
          2217,
          2245,
          2314
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 188,
        "linearizedBaseContracts": [
          188,
          2217,
          2245,
          1598,
          2159,
          2128,
          2314
        ],
        "name": "BRLTMoney",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 17,
            "name": "NAME",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "418:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 15,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "418:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "42524c54204d6f6e6579",
              "id": 16,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "439:12:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_6b9381ae94e688b650c5298d2375e1c25a742310ee201e0f5913b8276089ce26",
                "typeString": "literal_string \"BRLT Money\""
              },
              "value": "BRLT Money"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20,
            "name": "SYMBOL",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "455:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 18,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "455:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "42524c54",
              "id": 19,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "478:6:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_c004bd753c2d90b09db013f21d571643ce444218af32b9f6e1ae675e208d22a2",
                "typeString": "literal_string \"BRLT\""
              },
              "value": "BRLT"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 23,
            "name": "DECIMALS",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "488:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 21,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "488:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 22,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "512:2:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "INITIAL_SUPPLY",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "518:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 24,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "518:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 25,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "547:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 40,
              "nodeType": "Block",
              "src": "612:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2329,
                          "src": "624:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "624:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "INITIAL_SUPPLY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "636:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2014,
                      "src": "618:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "618:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 39,
                  "nodeType": "ExpressionStatement",
                  "src": "618:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 41,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 29,
                    "name": "NAME",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17,
                    "src": "581:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 30,
                    "name": "SYMBOL",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20,
                    "src": "587:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 31,
                    "name": "DECIMALS",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 23,
                    "src": "595:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 32,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 28,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2217,
                  "src": "567:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$2217_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "567:37:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "564:2:0"
            },
            "returnParameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:0:0"
            },
            "scope": 188,
            "src": "553:103:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 81,
              "nodeType": "Block",
              "src": "1246:203:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "1267:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 56,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "1272:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2362,
                        "src": "1252:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_BRLTMoney_$188",
                          "typeString": "contract super BRLTMoney"
                        }
                      },
                      "id": 54,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1791,
                      "src": "1252:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 57,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1252:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58,
                  "nodeType": "ExpressionStatement",
                  "src": "1252:27:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 60,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "1300:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 59,
                      "name": "isContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "1289:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) view returns (bool)"
                      }
                    },
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 78,
                  "nodeType": "IfStatement",
                  "src": "1286:141:0",
                  "trueBody": {
                    "id": 77,
                    "nodeType": "Block",
                    "src": "1306:121:0",
                    "statements": [
                      {
                        "assignments": [
                          63
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 63,
                            "name": "receiver",
                            "nodeType": "VariableDeclaration",
                            "scope": 77,
                            "src": "1314:25:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                              "typeString": "contract IERC223Recipient"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 62,
                              "name": "IERC223Recipient",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 200,
                              "src": "1314:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 67,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 65,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43,
                              "src": "1359:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 64,
                            "name": "IERC223Recipient",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 200,
                            "src": "1342:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC223Recipient_$200_$",
                              "typeString": "type(contract IERC223Recipient)"
                            }
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1342:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                            "typeString": "contract IERC223Recipient"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1314:49:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 71,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2329,
                                "src": "1394:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 72,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1394:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 73,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45,
                              "src": "1406:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 74,
                              "name": "_data",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47,
                              "src": "1414:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 68,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63,
                              "src": "1371:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "id": 70,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenFallback",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 199,
                            "src": "1371:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,bytes memory) external"
                            }
                          },
                          "id": 75,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1371:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 76,
                        "nodeType": "ExpressionStatement",
                        "src": "1371:49:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1440:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 51,
                  "id": 80,
                  "nodeType": "Return",
                  "src": "1433:11:0"
                }
              ]
            },
            "documentation": "@dev Transfer the specified amount of tokens to the specified address.\n     Invokes the `tokenFallback` function if the recipient is a contract.\n     The token transfer fails if the recipient is a contract\n     but does not implement the `tokenFallback` function\n     or the fallback function to receive funds.\n   * @param _to    Receiver address.\n@param _value Amount of tokens that will be transferred.\n@param _data  Transaction metadata.",
            "id": 82,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1171:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1171:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1184:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1197:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1197:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1170:46:0"
            },
            "returnParameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1233:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1233:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1232:14:0"
            },
            "scope": 188,
            "src": "1153:296:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 124,
              "nodeType": "Block",
              "src": "1880:245:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "1901:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 95,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1906:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2362,
                        "src": "1886:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_BRLTMoney_$188",
                          "typeString": "contract super BRLTMoney"
                        }
                      },
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1791,
                      "src": "1886:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1886:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 97,
                  "nodeType": "ExpressionStatement",
                  "src": "1886:27:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "1934:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 98,
                      "name": "isContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "1923:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) view returns (bool)"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1923:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 121,
                  "nodeType": "IfStatement",
                  "src": "1920:183:0",
                  "trueBody": {
                    "id": 120,
                    "nodeType": "Block",
                    "src": "1940:163:0",
                    "statements": [
                      {
                        "assignments": [
                          102
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 102,
                            "name": "empty",
                            "nodeType": "VariableDeclaration",
                            "scope": 120,
                            "src": "1948:18:0",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes"
                            },
                            "typeName": {
                              "id": 101,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "1948:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage_ptr",
                                "typeString": "bytes"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 104,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "00000000",
                          "id": 103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1969:13:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e8e77626586f73b955364c7b4bbf0bb7f7685ebd40e852b164633a4acbd3244c",
                            "typeString": "literal_string \"\u0000\u0000\u0000\u0000\""
                          },
                          "value": "\u0000\u0000\u0000\u0000"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1948:34:0"
                      },
                      {
                        "assignments": [
                          106
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 106,
                            "name": "receiver",
                            "nodeType": "VariableDeclaration",
                            "scope": 120,
                            "src": "1990:25:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                              "typeString": "contract IERC223Recipient"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 105,
                              "name": "IERC223Recipient",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 200,
                              "src": "1990:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 110,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 108,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 84,
                              "src": "2035:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 107,
                            "name": "IERC223Recipient",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 200,
                            "src": "2018:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC223Recipient_$200_$",
                              "typeString": "type(contract IERC223Recipient)"
                            }
                          },
                          "id": 109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2018:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                            "typeString": "contract IERC223Recipient"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1990:49:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 114,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2329,
                                "src": "2070:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 115,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2070:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 116,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 86,
                              "src": "2082:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "empty",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 102,
                              "src": "2090:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 111,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "2047:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "id": 113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenFallback",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 199,
                            "src": "2047:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,bytes memory) external"
                            }
                          },
                          "id": 118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2047:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 119,
                        "nodeType": "ExpressionStatement",
                        "src": "2047:49:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2116:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 90,
                  "id": 123,
                  "nodeType": "Return",
                  "src": "2109:11:0"
                }
              ]
            },
            "documentation": "@dev Transfer the specified amount of tokens to the specified address.\n     This function works the same with the previous one\n     but doesn't contain `_data` param.\n     Added due to backwards compatibility reasons.\n   * @param _to    Receiver address.\n@param _value Amount of tokens that will be transferred.",
            "id": 125,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "1825:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1825:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 86,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "1838:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1838:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1824:26:0"
            },
            "returnParameters": {
              "id": 90,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "1867:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1867:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1866:14:0"
            },
            "scope": 188,
            "src": "1807:318:0",
            "stateMutability": "nonpayable",
            "superFunction": 1791,
            "visibility": "public"
          },
          {
            "body": {
              "id": 169,
              "nodeType": "Block",
              "src": "2204:238:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "2221:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 140,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 129,
                        "src": "2225:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 136,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2362,
                        "src": "2210:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_BRLTMoney_$188",
                          "typeString": "contract super BRLTMoney"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2244,
                      "src": "2210:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2210:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 142,
                  "nodeType": "ExpressionStatement",
                  "src": "2210:22:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 144,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "2253:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 143,
                      "name": "isContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "2242:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) view returns (bool)"
                      }
                    },
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2242:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 166,
                  "nodeType": "IfStatement",
                  "src": "2239:181:0",
                  "trueBody": {
                    "id": 165,
                    "nodeType": "Block",
                    "src": "2258:162:0",
                    "statements": [
                      {
                        "assignments": [
                          147
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 147,
                            "name": "empty",
                            "nodeType": "VariableDeclaration",
                            "scope": 165,
                            "src": "2266:18:0",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes"
                            },
                            "typeName": {
                              "id": 146,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "2266:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage_ptr",
                                "typeString": "bytes"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 149,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "00000000",
                          "id": 148,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2287:13:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e8e77626586f73b955364c7b4bbf0bb7f7685ebd40e852b164633a4acbd3244c",
                            "typeString": "literal_string \"\u0000\u0000\u0000\u0000\""
                          },
                          "value": "\u0000\u0000\u0000\u0000"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2266:34:0"
                      },
                      {
                        "assignments": [
                          151
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 151,
                            "name": "receiver",
                            "nodeType": "VariableDeclaration",
                            "scope": 165,
                            "src": "2308:25:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                              "typeString": "contract IERC223Recipient"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 150,
                              "name": "IERC223Recipient",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 200,
                              "src": "2308:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 155,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 153,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 127,
                              "src": "2353:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 152,
                            "name": "IERC223Recipient",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 200,
                            "src": "2336:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC223Recipient_$200_$",
                              "typeString": "type(contract IERC223Recipient)"
                            }
                          },
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2336:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                            "typeString": "contract IERC223Recipient"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2308:48:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 159,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2329,
                                "src": "2387:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2387:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 161,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 129,
                              "src": "2399:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 162,
                              "name": "empty",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 147,
                              "src": "2407:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 156,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 151,
                              "src": "2364:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenFallback",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 199,
                            "src": "2364:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,bytes memory) external"
                            }
                          },
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2364:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 164,
                        "nodeType": "ExpressionStatement",
                        "src": "2364:49:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2433:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 135,
                  "id": 168,
                  "nodeType": "Return",
                  "src": "2426:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 170,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 132,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 131,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1531,
                  "src": "2178:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2178:10:0"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 127,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2143:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 129,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2155:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2155:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2142:28:0"
            },
            "returnParameters": {
              "id": 135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 134,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2198:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 133,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2198:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2197:6:0"
            },
            "scope": 188,
            "src": "2129:313:0",
            "stateMutability": "nonpayable",
            "superFunction": 2244,
            "visibility": "public"
          },
          {
            "body": {
              "id": 186,
              "nodeType": "Block",
              "src": "2611:186:0",
              "statements": [
                {
                  "assignments": [
                    178
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 178,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 186,
                      "src": "2617:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 177,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2617:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 179,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2617:11:0"
                },
                {
                  "externalReferences": [
                    {
                      "length": {
                        "declaration": 178,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2736:6:0",
                        "valueSize": 1
                      }
                    },
                    {
                      "_addr": {
                        "declaration": 172,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2758:5:0",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 180,
                  "nodeType": "InlineAssembly",
                  "operations": "{ length := extcodesize(_addr) }",
                  "src": "2634:136:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 181,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2783:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2790:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2783:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 184,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2782:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 176,
                  "id": 185,
                  "nodeType": "Return",
                  "src": "2775:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 187,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 172,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 187,
                  "src": "2556:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 171,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2556:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2555:15:0"
            },
            "returnParameters": {
              "id": 176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 175,
                  "name": "is_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 187,
                  "src": "2593:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 174,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2593:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2592:18:0"
            },
            "scope": 188,
            "src": "2536:261:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 189,
        "src": "340:2459:0"
      }
    ],
    "src": "0:2800:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/BRLTMoney.sol",
    "exportedSymbols": {
      "BRLTMoney": [
        188
      ]
    },
    "id": 189,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".11"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2129,
        "src": "26:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2218,
        "src": "90:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2246,
        "src": "162:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 2160,
        "src": "234:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/gleisson/Documents/gdxconsulting/smc-rhimagnesita/contracts/IERC223Recipient.sol",
        "file": "./IERC223Recipient.sol",
        "id": 6,
        "nodeType": "ImportDirective",
        "scope": 189,
        "sourceUnit": 201,
        "src": "306:32:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2128,
              "src": "362:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$2128",
                "typeString": "contract ERC20"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "362:5:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "ERC20Burnable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2159,
              "src": "369:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burnable_$2159",
                "typeString": "contract ERC20Burnable"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "369:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 11,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2245,
              "src": "384:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$2245",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 12,
            "nodeType": "InheritanceSpecifier",
            "src": "384:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 13,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2217,
              "src": "399:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$2217",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 14,
            "nodeType": "InheritanceSpecifier",
            "src": "399:13:0"
          }
        ],
        "contractDependencies": [
          1598,
          2128,
          2159,
          2217,
          2245,
          2314
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 188,
        "linearizedBaseContracts": [
          188,
          2217,
          2245,
          1598,
          2159,
          2128,
          2314
        ],
        "name": "BRLTMoney",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 17,
            "name": "NAME",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "418:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 15,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "418:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "42524c54204d6f6e6579",
              "id": 16,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "439:12:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_6b9381ae94e688b650c5298d2375e1c25a742310ee201e0f5913b8276089ce26",
                "typeString": "literal_string \"BRLT Money\""
              },
              "value": "BRLT Money"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20,
            "name": "SYMBOL",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "455:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 18,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "455:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "42524c54",
              "id": 19,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "478:6:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_c004bd753c2d90b09db013f21d571643ce444218af32b9f6e1ae675e208d22a2",
                "typeString": "literal_string \"BRLT\""
              },
              "value": "BRLT"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 23,
            "name": "DECIMALS",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "488:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 21,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "488:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 22,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "512:2:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "INITIAL_SUPPLY",
            "nodeType": "VariableDeclaration",
            "scope": 188,
            "src": "518:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 24,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "518:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 25,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "547:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 40,
              "nodeType": "Block",
              "src": "612:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2329,
                          "src": "624:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "624:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "INITIAL_SUPPLY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "636:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2014,
                      "src": "618:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "618:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 39,
                  "nodeType": "ExpressionStatement",
                  "src": "618:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 41,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 29,
                    "name": "NAME",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17,
                    "src": "581:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 30,
                    "name": "SYMBOL",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20,
                    "src": "587:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 31,
                    "name": "DECIMALS",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 23,
                    "src": "595:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 32,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 28,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2217,
                  "src": "567:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$2217_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "567:37:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "564:2:0"
            },
            "returnParameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:0:0"
            },
            "scope": 188,
            "src": "553:103:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 81,
              "nodeType": "Block",
              "src": "1246:203:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "1267:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 56,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "1272:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2362,
                        "src": "1252:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_BRLTMoney_$188",
                          "typeString": "contract super BRLTMoney"
                        }
                      },
                      "id": 54,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1791,
                      "src": "1252:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 57,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1252:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58,
                  "nodeType": "ExpressionStatement",
                  "src": "1252:27:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 60,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "1300:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 59,
                      "name": "isContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "1289:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) view returns (bool)"
                      }
                    },
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 78,
                  "nodeType": "IfStatement",
                  "src": "1286:141:0",
                  "trueBody": {
                    "id": 77,
                    "nodeType": "Block",
                    "src": "1306:121:0",
                    "statements": [
                      {
                        "assignments": [
                          63
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 63,
                            "name": "receiver",
                            "nodeType": "VariableDeclaration",
                            "scope": 77,
                            "src": "1314:25:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                              "typeString": "contract IERC223Recipient"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 62,
                              "name": "IERC223Recipient",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 200,
                              "src": "1314:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 67,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 65,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43,
                              "src": "1359:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 64,
                            "name": "IERC223Recipient",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 200,
                            "src": "1342:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC223Recipient_$200_$",
                              "typeString": "type(contract IERC223Recipient)"
                            }
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1342:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                            "typeString": "contract IERC223Recipient"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1314:49:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 71,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2329,
                                "src": "1394:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 72,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1394:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 73,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45,
                              "src": "1406:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 74,
                              "name": "_data",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47,
                              "src": "1414:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 68,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63,
                              "src": "1371:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "id": 70,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenFallback",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 199,
                            "src": "1371:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,bytes memory) external"
                            }
                          },
                          "id": 75,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1371:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 76,
                        "nodeType": "ExpressionStatement",
                        "src": "1371:49:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1440:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 51,
                  "id": 80,
                  "nodeType": "Return",
                  "src": "1433:11:0"
                }
              ]
            },
            "documentation": "@dev Transfer the specified amount of tokens to the specified address.\n     Invokes the `tokenFallback` function if the recipient is a contract.\n     The token transfer fails if the recipient is a contract\n     but does not implement the `tokenFallback` function\n     or the fallback function to receive funds.\n   * @param _to    Receiver address.\n@param _value Amount of tokens that will be transferred.\n@param _data  Transaction metadata.",
            "id": 82,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1171:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1171:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1184:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1197:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1197:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1170:46:0"
            },
            "returnParameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "1233:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1233:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1232:14:0"
            },
            "scope": 188,
            "src": "1153:296:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 124,
              "nodeType": "Block",
              "src": "1880:245:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "1901:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 95,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1906:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2362,
                        "src": "1886:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_BRLTMoney_$188",
                          "typeString": "contract super BRLTMoney"
                        }
                      },
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1791,
                      "src": "1886:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1886:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 97,
                  "nodeType": "ExpressionStatement",
                  "src": "1886:27:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "1934:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 98,
                      "name": "isContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "1923:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) view returns (bool)"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1923:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 121,
                  "nodeType": "IfStatement",
                  "src": "1920:183:0",
                  "trueBody": {
                    "id": 120,
                    "nodeType": "Block",
                    "src": "1940:163:0",
                    "statements": [
                      {
                        "assignments": [
                          102
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 102,
                            "name": "empty",
                            "nodeType": "VariableDeclaration",
                            "scope": 120,
                            "src": "1948:18:0",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes"
                            },
                            "typeName": {
                              "id": 101,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "1948:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage_ptr",
                                "typeString": "bytes"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 104,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "00000000",
                          "id": 103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1969:13:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e8e77626586f73b955364c7b4bbf0bb7f7685ebd40e852b164633a4acbd3244c",
                            "typeString": "literal_string \"\u0000\u0000\u0000\u0000\""
                          },
                          "value": "\u0000\u0000\u0000\u0000"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1948:34:0"
                      },
                      {
                        "assignments": [
                          106
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 106,
                            "name": "receiver",
                            "nodeType": "VariableDeclaration",
                            "scope": 120,
                            "src": "1990:25:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                              "typeString": "contract IERC223Recipient"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 105,
                              "name": "IERC223Recipient",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 200,
                              "src": "1990:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 110,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 108,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 84,
                              "src": "2035:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 107,
                            "name": "IERC223Recipient",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 200,
                            "src": "2018:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC223Recipient_$200_$",
                              "typeString": "type(contract IERC223Recipient)"
                            }
                          },
                          "id": 109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2018:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                            "typeString": "contract IERC223Recipient"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1990:49:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 114,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2329,
                                "src": "2070:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 115,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2070:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 116,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 86,
                              "src": "2082:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "empty",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 102,
                              "src": "2090:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 111,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "2047:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "id": 113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenFallback",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 199,
                            "src": "2047:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,bytes memory) external"
                            }
                          },
                          "id": 118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2047:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 119,
                        "nodeType": "ExpressionStatement",
                        "src": "2047:49:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2116:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 90,
                  "id": 123,
                  "nodeType": "Return",
                  "src": "2109:11:0"
                }
              ]
            },
            "documentation": "@dev Transfer the specified amount of tokens to the specified address.\n     This function works the same with the previous one\n     but doesn't contain `_data` param.\n     Added due to backwards compatibility reasons.\n   * @param _to    Receiver address.\n@param _value Amount of tokens that will be transferred.",
            "id": 125,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "1825:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1825:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 86,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "1838:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1838:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1824:26:0"
            },
            "returnParameters": {
              "id": 90,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "1867:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1867:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1866:14:0"
            },
            "scope": 188,
            "src": "1807:318:0",
            "stateMutability": "nonpayable",
            "superFunction": 1791,
            "visibility": "public"
          },
          {
            "body": {
              "id": 169,
              "nodeType": "Block",
              "src": "2204:238:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "2221:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 140,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 129,
                        "src": "2225:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 136,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2362,
                        "src": "2210:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_BRLTMoney_$188",
                          "typeString": "contract super BRLTMoney"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2244,
                      "src": "2210:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2210:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 142,
                  "nodeType": "ExpressionStatement",
                  "src": "2210:22:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 144,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "2253:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 143,
                      "name": "isContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "2242:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) view returns (bool)"
                      }
                    },
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2242:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 166,
                  "nodeType": "IfStatement",
                  "src": "2239:181:0",
                  "trueBody": {
                    "id": 165,
                    "nodeType": "Block",
                    "src": "2258:162:0",
                    "statements": [
                      {
                        "assignments": [
                          147
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 147,
                            "name": "empty",
                            "nodeType": "VariableDeclaration",
                            "scope": 165,
                            "src": "2266:18:0",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes"
                            },
                            "typeName": {
                              "id": 146,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "2266:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage_ptr",
                                "typeString": "bytes"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 149,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "00000000",
                          "id": 148,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2287:13:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e8e77626586f73b955364c7b4bbf0bb7f7685ebd40e852b164633a4acbd3244c",
                            "typeString": "literal_string \"\u0000\u0000\u0000\u0000\""
                          },
                          "value": "\u0000\u0000\u0000\u0000"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2266:34:0"
                      },
                      {
                        "assignments": [
                          151
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 151,
                            "name": "receiver",
                            "nodeType": "VariableDeclaration",
                            "scope": 165,
                            "src": "2308:25:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                              "typeString": "contract IERC223Recipient"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 150,
                              "name": "IERC223Recipient",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 200,
                              "src": "2308:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 155,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 153,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 127,
                              "src": "2353:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 152,
                            "name": "IERC223Recipient",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 200,
                            "src": "2336:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC223Recipient_$200_$",
                              "typeString": "type(contract IERC223Recipient)"
                            }
                          },
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2336:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                            "typeString": "contract IERC223Recipient"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2308:48:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 159,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2329,
                                "src": "2387:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2387:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 161,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 129,
                              "src": "2399:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 162,
                              "name": "empty",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 147,
                              "src": "2407:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 156,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 151,
                              "src": "2364:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC223Recipient_$200",
                                "typeString": "contract IERC223Recipient"
                              }
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenFallback",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 199,
                            "src": "2364:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,bytes memory) external"
                            }
                          },
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2364:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 164,
                        "nodeType": "ExpressionStatement",
                        "src": "2364:49:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2433:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 135,
                  "id": 168,
                  "nodeType": "Return",
                  "src": "2426:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 170,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 132,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 131,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1531,
                  "src": "2178:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2178:10:0"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 127,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2143:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 129,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2155:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2155:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2142:28:0"
            },
            "returnParameters": {
              "id": 135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 134,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2198:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 133,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2198:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2197:6:0"
            },
            "scope": 188,
            "src": "2129:313:0",
            "stateMutability": "nonpayable",
            "superFunction": 2244,
            "visibility": "public"
          },
          {
            "body": {
              "id": 186,
              "nodeType": "Block",
              "src": "2611:186:0",
              "statements": [
                {
                  "assignments": [
                    178
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 178,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 186,
                      "src": "2617:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 177,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2617:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 179,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2617:11:0"
                },
                {
                  "externalReferences": [
                    {
                      "length": {
                        "declaration": 178,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2736:6:0",
                        "valueSize": 1
                      }
                    },
                    {
                      "_addr": {
                        "declaration": 172,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2758:5:0",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 180,
                  "nodeType": "InlineAssembly",
                  "operations": "{ length := extcodesize(_addr) }",
                  "src": "2634:136:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 181,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2783:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2790:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2783:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 184,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2782:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 176,
                  "id": 185,
                  "nodeType": "Return",
                  "src": "2775:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 187,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 172,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 187,
                  "src": "2556:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 171,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2556:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2555:15:0"
            },
            "returnParameters": {
              "id": 176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 175,
                  "name": "is_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 187,
                  "src": "2593:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 174,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2593:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2592:18:0"
            },
            "scope": 188,
            "src": "2536:261:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 189,
        "src": "340:2459:0"
      }
    ],
    "src": "0:2800:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.12+commit.7709ece9.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.12",
  "updatedAt": "2019-10-27T17:24:03.129Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "See `IERC20.allowance`."
      },
      "approve(address,uint256)": {
        "details": "See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See `IERC20.balanceOf`."
      },
      "burn(uint256)": {
        "details": "Destoys `amount` tokens from the caller.     * See `ERC20._burn`."
      },
      "burnFrom(address,uint256)": {
        "details": "See `ERC20._burnFrom`."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * > Note that this information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including `IERC20.balanceOf` and `IERC20.transfer`."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See `IERC20.totalSupply`."
      },
      "transfer(address,uint256)": {
        "details": "Transfer the specified amount of tokens to the specified address.     This function works the same with the previous one     but doesn't contain `_data` param.     Added due to backwards compatibility reasons.",
        "params": {
          "_to": "Receiver address.",
          "_value": "Amount of tokens that will be transferred."
        }
      },
      "transfer(address,uint256,bytes)": {
        "details": "Transfer the specified amount of tokens to the specified address.     Invokes the `tokenFallback` function if the recipient is a contract.     The token transfer fails if the recipient is a contract     but does not implement the `tokenFallback` function     or the fallback function to receive funds.",
        "params": {
          "_data": "Transaction metadata.",
          "_to": "Receiver address.",
          "_value": "Amount of tokens that will be transferred."
        }
      },
      "transferFrom(address,address,uint256)": {
        "details": "See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}

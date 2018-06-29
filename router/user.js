var express = require("express");
var router = express.Router();
//引入web3.js
var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// 合约的api，remix的右侧Compile栏，Details->ABI
var abi = [{
        "constant": false,
        "inputs": [{
            "name": "_message",
            "type": "string"
        }],
        "name": "setMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getMessage",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// 合约地址，不同于钱包地址，在remix右侧Run栏 
var address = "0x0f753f716ba534083d1284bac8c531dcb6b56087";

//调用web3 去获取到合约的对象
var message = new web3.eth.Contract(abi, address);
router.get("/getMessage", function(req, resp) {
    // resp.send("Hello, miner.");
    //在methods中response，否则服务会崩溃
    message.methods.getMessage().call(function(error, result) {
        resp.send(result);
    });
});

module.exports = router;


var Web3=require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
var abi=[
	{
		"constant": true,
		"inputs": [],
		"name": "sayHi",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
];
var contractAddress="0x8cdaf0cd259887258bc13a92c0a6da92698644c0";
var kuaisan=new web3.eth.Contract(abi,contractAddress);


	kuaisan.methods.sayHi().call(function(error,result){
	    if(!error)
	    console.log(result);
	});




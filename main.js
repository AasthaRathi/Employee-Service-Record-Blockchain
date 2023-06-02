let WALLET_CONNECTED = "";
let contractAddress = "0x0B86c53Cd48A0467B7DC0137F7Ec418E364f47Ae";
let contractAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_employeeName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_pwd",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_phone",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_designation",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_experience",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_currEmployer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_currEmployerLocation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_profilePic",
        "type": "string"
      }
    ],
    "name": "addEmployee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_ename",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_doj",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dor",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_tsd",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_reason",
        "type": "string"
      }
    ],
    "name": "addServiceHistory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "employeeIds",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "employees",
    "outputs": [
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "employeeName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "pwd",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "designation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "currEmployer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "currEmployerLocation",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "experience",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "phone",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "profiePic",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllEmployees",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "employeeName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "pwd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "designation",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "currEmployer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "currEmployerLocation",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "experience",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "phone",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "gender",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "profiePic",
            "type": "string"
          }
        ],
        "internalType": "struct TaskToDo.Employee[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllServiceHistories",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "eid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "ename",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "doj",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dor",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tsd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "status",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "reason",
            "type": "string"
          }
        ],
        "internalType": "struct TaskToDo.ServiceHistory[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "eid",
        "type": "bytes32"
      }
    ],
    "name": "getEmployee",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "serviceid",
        "type": "bytes32"
      }
    ],
    "name": "getServiceHistory",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "serviceHistories",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "eid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "ename",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "doj",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dor",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "tsd",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "serviceIds",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const connectMetamask = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  WALLET_CONNECTED = await signer.getAddress();
  var element = document.getElementById("metamasknotification");
  element.innerHTML = "Metamask is connected " + WALLET_CONNECTED;
  alert("metamask is connected");
};

const getAllEmployees = async () => {
  if (WALLET_CONNECTED != 0) {
    var p3 = document.getElementById("p3");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    p3.innerHTML = "Please wait, getting all the tasks from the smart contract";
    var employeeList = await contractInstance.getAllEmployees();
    var serviceHistoryList = await contractInstance.getAllServiceHistories();

    console.log(serviceHistoryList);

    console.log("The tasks are updated");
  } else {
    var p3 = document.getElementById("p3");
    p3.innerHTML = "Please connect metamask first";
  }
};

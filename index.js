// to store img
const express = require("express");
// const fileUpload = require("express-fileupload");
const { Web3Storage } = require("web3.storage");
const getFilesFromPath = require("web3.storage").getFilesFromPath;
const multer = require("multer");
const path = require("path");
const ethers = require("ethers");
//rest of the code
require("dotenv").config();
const app = express();
// app.use(
//   fileUpload({
//     extended: true,
//   })
// );
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

var port = 3000;

// async function main(paths) {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI0RmY2OTliQTRmNjRjMUY2NTEwODUxMDA4ZTY2RkZEZjFjNkQ3ZUEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM3ODY2MzgwMzAsIm5hbWUiOiJ1c2VyaW1nIn0.6DgvKbmyg5TthGA7O-OCEAopP3Osg-zyRzqkOfRADdc";

//   const file = paths.myFile;
//   const path = file.name;
//   const content = new Uint8Array(await file.arrayBuffer());
//   const storage = new Web3Storage({ token });

//   console.log(`Uploading file: ${path}`);
//   const cid = await storage.put([{ path, content }]);
//   console.log("Content added with CID:", cid);
//   return cid;
// }

// async function uploadFileToWeb3Storage(file) {
//   const path = file.originalname;
//   const content = new Uint8Array(file.buffer);
//   const storage = new Web3Storage({ token });
//   const cid = await storage.put([{ path, content }]);
//   return cid;
// }

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { abi } = require("./artifacts/contracts/TaskToDo.sol/TaskToDo.json");
const provider = new ethers.providers.JsonRpcProvider(API_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

app.use("/profile", express.static("upload/images"));

app.post("/upload", upload.single("profile"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  // const file = req.file;
  // const cid = await uploadFileToWeb3Storage(file);
  // res.json({ cid });

  let profilePic = `http://localhost:3000/profile/${req.file.filename}`;
  // res.json({
  //   success: 1,
  //   url: `http://localhost:3000/profile/${req.file.filename}`,
  // });
  res.json({ url: profilePic });
});

app.post("/addEmployee", async (req, res) => {
  const {
    title,
    employeeName,
    pwd,
    phone,
    email,
    gender,
    designation,
    experience,
    currEmployer,
    currEmployerLocation,
    profilePic,
  } = req.body;
  console.log(req.body);
  // Call main function with desired arguments
  console.log(profilePic);
  // main(profilePic);

  async function storeDataInBlockchain(
    title,
    employeeName,
    pwd,
    phone,
    email,
    gender,
    designation,
    experience,
    currEmployer,
    currEmployerLocation,
    profilePic
  ) {
    console.log("Adding the employee in the blockchain network...");
    const tx = await contractInstance.addEmployee(
      title,
      employeeName,
      pwd,
      phone,
      email,
      gender,
      designation,
      experience,
      currEmployer,
      currEmployerLocation,
      profilePic
    );

    await tx.wait();
  }

  await storeDataInBlockchain(
    title,
    employeeName,
    pwd,
    phone,
    email,
    gender,
    designation,
    experience,
    currEmployer,
    currEmployerLocation,
    profilePic
  );
  res.send("The employee has been registered in the smart contract");
});

app.post("/addServiceHistory", async (req, res) => {
  const {
    employeeid,
    employerName,
    dateOfJoining,
    dateOfResignation,
    totalServiceDuration,
    status,
    reason,
  } = req.body;
  console.log(req.body);

  async function storeDataInBlockchain(
    employeeid,
    employerName,
    dateOfJoining,
    dateOfResignation,
    totalServiceDuration,
    status,
    reason
  ) {
    console.log("Adding the service history in the blockchain network...");
    console.log("eid:", employeeid);
    console.log("employeeName:", employerName);
    console.log("dateOfJoining:", dateOfJoining);
    console.log("dateOfJoiningResignation:", dateOfResignation);
    console.log("totalServiceDuration:", totalServiceDuration);
    console.log("status:", status);
    console.log("reason:", reason);
    const tx = await contractInstance.addServiceHistory(
      employeeid,
      employerName,
      dateOfJoining,
      dateOfResignation,
      totalServiceDuration,
      status,
      reason
    );

    await tx.wait();
  }

  await storeDataInBlockchain(
    employeeid,
    employerName,
    dateOfJoining,
    dateOfResignation,
    totalServiceDuration,
    status,
    reason
  );
  res.send("The employee has been registered in the smart contract");
});

app.listen(port, function () {
  console.log("App is listening on port 3000");
});

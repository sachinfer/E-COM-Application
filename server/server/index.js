const express = require("express");

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myProject';

let resResult = ""

async function getData() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  
  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  resResult = findResult
  console.log("Connected to ",dbName)
  return 'done.';
}

async function postData(name, id) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  
  // the following code examples can be pasted here...
  var myobj = { name, id };
  const insertResult = await collection.insertOne(myobj);
  console.log('Inserted documents =>', insertResult);
}

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "NODEJS API PROJECT" , name: "Rashmika"});
});

app.get("/api/getdata", (req, res) => {
  getData()
  .then()
  .catch(console.error)
  .finally(() => {
    res.json(resResult);
    client.close()
  });
  });

  app.post("/api/post", (req, res) => {
    
    console.log(req.body)
    postData(req.body.name, req.body.id)
    .then()
    .catch(console.error)
    .finally(() => {
      res.json("Success");
      client.close()
    });
    });
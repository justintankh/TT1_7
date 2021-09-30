// MongoDB //
// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('shopDB');
//     const products = database.collection('products');
//     // Query for a movie that has the title 'Back to the Future'
//     // const query = { _id: 1 };
//     // const product = await products.findOne(query);
//     // console.log(product);

//     const cursor = products.find();
//     // print a message if no documents were found
//     if ((await cursor.count()) === 0) {
//       console.log("No documents found!");
//     }

//     // replace console.dir with your callback to access individual elements
//     await cursor.forEach((item) => {
//       console.log(item);
//     });


//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.log("Connection to mongodb://localhost:27017 Successful"));

// Mongoose //
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const dbName = 'fruitsDB';
// mongoose.connect(url + "/" + dbName)
mongoose.connect('mongodb+srv://hackathon:hackathon123@cluster0.aerev.mongodb.net/maindb');


// // data schema
// const fruitSchema = new mongoose.Schema ({
//   name: String,
//   rating: Number,
//   review: String
// });
// const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit ({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit."
// });
// const orange = new Fruit ({
//   name: "orange",
//   rating: 5,
//   review: "Vitamin C fruit."
// });
// const banana = new Fruit ({
//   name: "banana",
//   rating: 6,
//   review: "Long fruit."
// });
// // Saving multiple document
// Fruit.insertMany([apple, orange, banana], (err)=>{
//   err ? console.log(err) : console.log("Successfully saved all the fruits to fruitsDB");
// })
// // // Saving single document
// // apple.save();

// // Retrieving document
// Fruit.find((err, fruits) =>{
//   // err? console.log(err) : console.log(fruits);
//   fruits.forEach(element => {
//     console.log(element.name);
//   });
//   // Close db
//   mongoose.connection.close().then(()=>{console.log(`Successfully closed ${dbName} @ ${url}.`)})
// })

// data schema
const categorySchema = new mongoose.Schema ({
  id: Number,
  name: Number,
  description: String,
  image: String,
});
const Category = mongoose.model("Category", categorySchema);

// Saving multiple document
// Fruit.insertMany([apple, orange, banana], (err)=>{
//   err ? console.log(err) : console.log("Successfully saved all the fruits to fruitsDB");
// })
// // Saving single document
// apple.save();

// Retrieving document
Category.find((err, items) =>{
  // err? console.log(err) : console.log(fruits);
  items.forEach(item => {
    console.log(item.name);
  });
  // Close db
  mongoose.connection.close().then(()=>{console.log(`Successfully closed ${dbName} @ ${url}.`)})
})


// Updating document
// Fruit.updateMany({name: "Apple"}, {name: "Peach"}, (err) => {
//   err? console.log(err) : console.log("Successfully updated document.");
// })

// Delete document
// Fruit.deleteOne({_id: "615440b6c2af5811bbd358e1"}, (err) =>{
//   err? console.log(err) : console.log("Successfully deleted document.");
// })

// // Delete many document
// Fruit.deleteMany({name: "Peach"}, (err) =>{
//   err? console.log(err) : console.log("Successfully deleted document.");
// })


// Express.js //
const express = require('express');
const app = express();
const port = 3000;

// Required for forms post request to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.send('Hello World!')   
    // console.log(__dirname)
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    res.send(`Thanks for posting that!\n\n
    The result of the calculation is 
    ${parseInt(req.body.num1) + parseInt(req.body.num2)}`);
    console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
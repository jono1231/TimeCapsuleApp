const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://Jono1231:jono1231@cluster0.twlypnm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('Encapsulation');
    const profiles = database.collection('Profile');

    // Query for a movie that has the title 'Back to the Future'
    const query = { Username: 'Super' };
    const name = await profiles.findOne(query);

    console.log(name);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
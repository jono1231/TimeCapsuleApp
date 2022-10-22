import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { TopologyDescriptionChangedEvent } from 'mongodb';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://Jono1231:jono1231@cluster0.twlypnm.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose.connect(uri)
    .then(() =>
        app.listen(port, () => console.log("Server running!")))
    .catch((error) => console.log(error.message));
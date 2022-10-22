// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// import postRoutes from './routes/posts.js';

// const app = express();


// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
// app.use(cors());

// app.use('/post', postRoutes);
// // Replace the uri string with your connection string.
// const uri =
//   "mongodb+srv://Jono1231:jono1231@cluster0.twlypnm.mongodb.net/?retryWrites=true&w=majority";
// const port = process.env.PORT || 5000;

// mongoose.connect(uri)
//     .then(() =>
//         app.listen(port, () => console.log("Server running!")))
//     .catch((error) => console.log(error.message));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../frontend/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

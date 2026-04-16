# 🚛 GarbageDay

## 🧭 What's GarbageDay?

GarbageDay is a simple garbage scheduling web tool designed to help the residents of Corner Brook, NL answer the simple question:

> _When is the next garbage collection day?_

---

## 🛠️ What technologies were used?

1. **Express.js**  
   A fast, minimalist, and unopinionated web application framework for Node.js used to build the REST API and server logic.

2. **EJS (Embedded JavaScript)**  
   A simple templating language that lets you generate HTML markup with plain JavaScript, used to render dynamic content from the Express.js server.

---

## 🚀 How to try it out

To see GarbageDay in action, visit the deployed site here:  
👉 [Live App](https://garbageday-production.up.railway.app/)

If you'd like to run the project locally:

1. Clone the repository  
2. Install dependencies:

```bash
npm install express ejs
```
3. Start the server
```bash
node app.js
```
---
## 🌍 Where is GarbageDay data from?

GarbageDay is built to work with garbage collection data from the City of Corner Brook GIS Hub:
👉 [Corner Brook GIS Hub](https://city-of-corner-brook-gis-hub-ccbrook.hub.arcgis.com/apps/9c5ca2b7d7be49d788cc2df4aabdaae5/explore).

The dataset is stored in JSON format inside the db/data folder. Review it to understand the structure of the data.

## ⚠️ Note
> _GarbageDay was designed to work with the 2026 garbage collection data._ 



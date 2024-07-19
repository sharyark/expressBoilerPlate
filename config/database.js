// import mongoose from "mongoose";

// const uri = "mongodb://localhost:27017/mydatabase";
// mongoose.connect(uri, {
//   useNewUrlParser: true,   // Deprecated, but keep for older versions
//   useUnifiedTopology: true, // Deprecated, but keep for older versions
// })
// .then(() => {
//   console.log('Connected to MongoDB Atlas');
// })
// .catch((err) => {
//   console.error('Error connecting to MongoDB Atlas:', err);
// });

// const db = mongoose.connection;

// db.on('connected', () => {
//   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
// });

// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// db.on('disconnected', () => {
//   console.log('Disconnected from MongoDB');
// });

// export default db;




import mongoose from "mongoose";

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)
console.log(process.env.DATABASE_URL)
db.on('connected', () => {
  console.log(`conneted to mongodb ${db.name} at ${db.host}:${db.port}`)
})
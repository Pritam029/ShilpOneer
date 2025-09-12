const exp = require("express");
const app = exp();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const expressFileupload = require("express-fileupload");
app.use(expressFileupload());

app.use(exp.static("public")); // Serve static files from public

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://pritamg7:pritam1234@cluster0.r2md9.mongodb.net/ecodevjhargram?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;
db.on("error", (error) => console.error("❌ MongoDB connection error:", error));
db.once("open", () => console.log("✅ MongoDB connected successfully"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello Node");
});

const productRoutes = require("./routes/product");
app.use("/product", productRoutes);

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "123") {
    return res.json({ message: "Login successful! Welcome Admin." });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

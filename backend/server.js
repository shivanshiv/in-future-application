import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Example Schema & Model
const applicationSchema = new mongoose.Schema({
  studentId: String,
  projectId: String,
  status: String,
  submittedAt: Date,
});

const Application = mongoose.model("Application", applicationSchema);

// Example API Route
app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new application
app.post("/api/applications", async (req, res) => {
  try {
    const { studentId, projectId, status } = req.body;
    const newApp = new Application({
      studentId,
      projectId,
      status,
      submittedAt: new Date()
    });

    const savedApp = await newApp.save();
    res.status(201).json(savedApp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update application status
app.put("/api/applications/:id", async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete application
app.delete("/api/applications/:id", async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ message: "Application deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

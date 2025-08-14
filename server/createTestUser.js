// createTestUser.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "./models/User.js"; // adjust path if needed

dotenv.config();

async function createTestUser() {
  try {
    console.log("Connecting to:", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);

    const hashedPassword = await bcrypt.hash("123456", 10); // password: 123456

    const user = new User({
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      password: hashedPassword,
      picturePath: "",
      friends: [],
      location: "Nowhere",
      occupation: "Tester",
      viewedProfile: 0,
      impressions: 0,
    });

    await user.save();
    console.log("✅ Test user created:", user.email);
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error creating test user:", err);
  }
}

createTestUser();

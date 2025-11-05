import express from "express";
import {
  loginAdmin,
  appointmentsAdmin,
  appointmentCancel,
  addDoctor,
  allDoctors,
  adminDashboard,
  updateDoctorImage, // 👈 added new controller
} from "../controllers/adminController.js";
import { changeAvailablity } from "../controllers/doctorController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/multer.js";

const adminRouter = express.Router();

// Admin login
adminRouter.post("/login", loginAdmin);

// Add new doctor
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

// Get all doctors
adminRouter.get("/all-doctors", authAdmin, allDoctors);

// Change doctor availability
adminRouter.post("/change-availability", authAdmin, changeAvailablity);

// Admin appointments
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);

// Cancel appointment
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);

// Admin dashboard data
adminRouter.get("/dashboard", authAdmin, adminDashboard);

// ✅ New route for updating doctor profile photo
adminRouter.put("/update-doctor-image/:id", authAdmin, upload.single("image"), updateDoctorImage);

export default adminRouter;

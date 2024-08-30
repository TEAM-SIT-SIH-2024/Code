const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:tL8mBWGUkmz2720S@cluster0.scziuv1.mongodb.net/HospitalManagementSystem"
);

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  beds: { type: Number, required: true },
  city: { type: String, required: true },
  opdTime: { type: String, required: true },
  patients: [patientSchema],
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointments",
    },
  ],
});

const AppointmentsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  purpose: { type: String, required: true },
  time: { type: String, required: true },
  phone: { type: String, required: true },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expired: { type: Boolean, default: false },
});

const CitiesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  ],
});

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
  },
  emergencyContact: {
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    phone: { type: String, required: true },
  },
  medicalHistory: { type: String },
  admissions: [
    {
      admissionDate: { type: Date, default: Date.now },
      department: { type: String, required: true },
      doctorInCharge: { type: String, required: true },
      reasonForAdmission: { type: String, required: true },
      bed: { type: String, required: true },
      medications: [{ type: String }],
      dischargeDate: { type: Date },
    },
  ],
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Appointments = mongoose.model("Appointments", AppointmentsSchema);
const Cities = mongoose.model("Cities", CitiesSchema);
const Patient = mongoose.model("Patient", patientSchema);

module.exports = {
  Admin,
  User,
  Appointments,
  Cities,
  Patient,
};

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

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Appointments = mongoose.model("Appointments", AppointmentsSchema);
const Cities = mongoose.model("Cities", CitiesSchema);

module.exports = {
  Admin,
  User,
  Appointments,
  Cities,
};

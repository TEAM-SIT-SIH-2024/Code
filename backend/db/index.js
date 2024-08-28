const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:tL8mBWGUkmz2720S@cluster0.scziuv1.mongodb.net/HospitalManagementSystem"
);

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
  beds: Number,
  city: String,
  opdTime: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointments",
    },
  ],
});

const AppointmentsSchema = new mongoose.Schema({
  name: String,
  purpose: String,
  time: String,
  phone: Number,
});

const CitiesSchema = new mongoose.Schema({
  name: String,
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

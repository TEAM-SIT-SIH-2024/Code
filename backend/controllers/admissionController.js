const Admin = require("../db/index");
const z = require("zod");

const admissionSchema = z.object({
  fullName: z.string(),
  age: z.number().min(0, "Age must be a positive number"),
  gender: z.string(),
  contactInfo: z.object({
    phone: z.string(),
    email: z.string(),
    address: z.string(),
  }),
  emergencyContact: z.object({
    name: z.string(),
    relationship: z.string(),
    phone: z.string(),
  }),
  medicalHistory: z.string(),
  admission: z.object({
    department: z.string(),
    doctorInCharge: z.string(),
    reasonForAdmission: z.string(),
    bed: z.string(),
    medications: z.array(z.string()),
    dischargeDate: z.date(),
  }),
});

exports.admitPatientToHospital = async (req, res) => {
  try {
    const validatedData = admissionSchema.parse(req.body);

    const hospital = await Admin.findById(req.params.hospitalId);
    if (!hospital) {
      return res.status(404).json({ msg: "Hospital not found" });
    }

    const newPatient = {
      fullName: validatedData.fullName,
      age: validatedData.age,
      gender: validatedData.gender,
      contactInfo: validatedData.contactInfo,
      emergencyContact: validatedData.emergencyContact,
      medicalHistory: validatedData.medicalHistory,
      admissions: [validatedData.admission],
    };

    hospital.patients.push(newPatient);
    await hospital.save();

    res.status(201).json({ msg: "Patient admitted successfully", hospital });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ msg: "Internal server error", error });
  }
};

exports.getPatientsByHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.hospitalId).populate(
      "patients"
    );
    if (!hospital) {
      return res.status(404).json({ msg: "Hospital not found" });
    }
    res.status(200).json(hospital.patients);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};

exports.dischargePatientFromHospital = async (req, res) => {
  const { hospitalId, patientId } = req.params;

  try {
    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ msg: "Hospital not found" });
    }

    const patientIndex = hospital.patients.findIndex((patient) =>
      patient._id.equals(patientId)
    );
    if (patientIndex === -1) {
      return res.status(404).json({ msg: "Patient not found" });
    }

    const patient = hospital.patients[patientIndex];
    if (
      patient.admissions[patient.admissions.length - 1].dischargeDate !==
      Date.now
    ) {
      return res
        .status(400)
        .json({ msg: "Patient has not been discharged yet" });
    }

    hospital.patients.splice(patientIndex, 1);
    await hospital.save();

    res.json({ msg: "Patient discharged and removed successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};

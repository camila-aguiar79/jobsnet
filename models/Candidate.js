const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique:false, required: true },
    position: { type: String, unique:false, required: true },
    birthdate: { type: Date, unique:false, required: true },
    maritalstatus: { type: String, unique:false, required: true },
    gender: { type: String, unique: false, required: true },
    address: { type: String, unique: false, required: true },
    district: { type: String, unique: false, required: true },
    localidade: { type: String, unique: false, required: true },
    cep: { type: Number, unique: false, required: true },
    phone1: { type: Number, unique: false, required: true },
    phone2: { type: Number, unique: false, required: true },
    mobile: { type: Number, unique: false, required: true },
    contact: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    id: { type: Number, unique: true, required: true },
    cpf: { type: Number, unique: true, required: true },
    vehicle: { type: String, unique: false, required: true },
    license: { type: String, unique: false, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
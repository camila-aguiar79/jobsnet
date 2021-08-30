const Candidate = require('../models/Candidate');

module.exports = {
    async register(req,res) {

        const { name, position, birthdate, maritalstatus, gender, address, district, localidade, cep, phone1, phone2, mobile, contact, email, id, cpf, vehicle, license} = req.body;

        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.position = position;
        newCandidate.birthdate = birthdate;
        newCandidate.maritalstatus = maritalstatus;
        newCandidate.gender = gender;
        newCandidate.address = address;
        newCandidate.district = district;
        newCandidate.localidade = localidade;
        newCandidate.cep = cep;
        newCandidate.phone1 = phone1;
        newCandidate.phone2 = phone2;
        newCandidate.mobile = mobile;
        newCandidate.contact = contact;
        newCandidate.email = email;
        newCandidate.id = id;
        newCandidate.cpf = cpf;
        newCandidate.vehicle = vehicle;
        newCandidate.license = license;
         

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(savedCandidate);

        });
    },
}
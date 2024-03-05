const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuperviseurSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    poste: { type: String, required: true },
    mail: { type: String, required: true },
    tel: { type: Number, required: true },
});

const Superviseur = mongoose.model("Superviseur", SuperviseurSchema);

module.exports = Superviseur;

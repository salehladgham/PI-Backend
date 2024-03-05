const mongoose = require("mongoose");

const airEquipementSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    nom: String,
    puissance_max: String,
    debit: String,
    puissancemoteur: Number,
    nserie: String,
    pressioncharge: Number,
    pressiondecharge: Number,
    anneefabrication: Number,
    type: String,
    alertentretien: String,
    id_energy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Energy",
    },
    local_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Local",
    },
    dossier: String,
    adresseip: String,
});

module.exports = mongoose.model("AirEquipement", airEquipementSchema);

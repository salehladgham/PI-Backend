const mongoose = require("mongoose");

const airEntretienSchema = new mongoose.Schema({
    // userajout: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },
    // usermodif: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },
    // usersupp: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },
    equipementair: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AirEquipement",
    },
    superviseur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Superviseur",
    },
    date_entretien: Date,
    dateperiodesecheur: Date,
    nbrhprochain: Number,
    hfonctionnement: Number,
    remarque: String,
    niveauprobleme: String,
    dateajout: Date,
    datemodif: Date,
    datesuppression: Date,
    suppression: Boolean,
});

module.exports = mongoose.model("AirEntretien", airEntretienSchema);

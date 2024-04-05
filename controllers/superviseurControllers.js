const Superviseur = require("../models/superviseurModel");

// Create a new Superviseur
exports.createSuperviseur = async (req, res) => {
    try {
        const superviseur = await Superviseur.create(req.body);
        res.status(201).json(superviseur);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Superviseurs
exports.getAllSuperviseurs = async (req, res) => {
    try {
        const superviseurs = await Superviseur.find();
        res.status(200).json(superviseurs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific Superviseur by ID
exports.getSuperviseurById = async (req, res) => {
    try {
        const superviseur = await Superviseur.findById(req.params.id);
        if (!superviseur) {
            return res.status(404).json({ message: "Superviseur not found" });
        }
        res.status(200).json(superviseur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific Superviseur by ID
exports.updateSuperviseur = async (req, res) => {
    try {
        const updatedSuperviseur = await Superviseur.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedSuperviseur);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific Superviseur by ID
exports.deleteSuperviseur = async (req, res) => {
    try {
        await Superviseur.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Superviseur deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

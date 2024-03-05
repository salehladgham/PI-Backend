const AirEntretien = require("../models/airEntretienModel");

// Create a new AirEntretien
exports.createAirEntretien = async (req, res) => {
    try {
        const airEntretien = await AirEntretien.create(req.body);
        res.status(201).json(airEntretien);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all AirEntretiens
exports.getAllAirEntretiens = async (req, res) => {
    try {
        const airEntretiens = await AirEntretien.find();
        res.status(200).json(airEntretiens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific AirEntretien by ID
exports.getAirEntretienById = async (req, res) => {
    try {
        const airEntretien = await AirEntretien.findById(req.params.id);
        if (!airEntretien) {
            return res.status(404).json({ message: "AirEntretien not found" });
        }
        res.status(200).json(airEntretien);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific AirEntretien by ID
exports.updateAirEntretien = async (req, res) => {
    try {
        const updatedAirEntretien = await AirEntretien.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedAirEntretien);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific AirEntretien by ID
exports.deleteAirEntretien = async (req, res) => {
    try {
        await AirEntretien.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "AirEntretien deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

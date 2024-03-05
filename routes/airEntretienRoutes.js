const express = require("express");
const router = express.Router();
const {
    getAllAirEntretiens,
    createAirEntretien,
    getAirEntretienById,
    updateAirEntretien,
    deleteAirEntretien,
} = require("../controllers/airEntretienControllers");


router.post("/", createAirEntretien);
router.get("/", getAllAirEntretiens);
router.get("/:id", getAirEntretienById);
router.put("/:id", updateAirEntretien);
router.delete("/:id", deleteAirEntretien);

module.exports = router;

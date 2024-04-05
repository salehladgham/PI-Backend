const express = require("express");
const router = express.Router();
const {
    getAllSuperviseurs,
    createSuperviseur,
    getSuperviseurById,
    updateSuperviseur,
    deleteSuperviseur,
} = require("../controllers/superviseurControllers");

router.post("/", createSuperviseur);
router.get("/", getAllSuperviseurs);
router.get("/:id", getSuperviseurById);
router.put("/:id", updateSuperviseur);
router.delete("/:id", deleteSuperviseur);

module.exports = router;

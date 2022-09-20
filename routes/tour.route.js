import express from "express";
const router = express.Router()

import { addNewTour, getAllTour, getSingleTourById, getTopChepestTour, getTopViewdTour, updateSingleTourById, } from "../controllers/tour.controller.js";


router.get("/trending", getTopViewdTour)
router.get("/cheapest", getTopChepestTour)

router.route("/")
    .post(addNewTour)
    .get(getAllTour)

router.route("/:id")
    .get(getSingleTourById)
    .patch(updateSingleTourById)

export default router;
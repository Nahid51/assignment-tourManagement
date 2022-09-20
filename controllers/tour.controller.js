import mongoose from "mongoose";
import { addNewTourAction, getAllTourAction, getSingleTourByIdAction, getTopChepestTourAction, getTopViewdTourAction, updateSingleTourByIdAction } from "../actions/tour.action.js";

export const addNewTour = async (req, res) => {
    try {
        const result = await addNewTourAction(req.body);
        res.status(200).json({
            message: "Added a new tour successfully!",
            result: result
        });

    } catch (error) {
        res.status(404).json({
            message: "Tour not added!",
            error: error.message
        });
    }
};

export const getAllTour = async (req, res) => {

    try {
        const result = await getAllTourAction(req.query);
        res.status(200).json({
            message: "All tours have been found successfully!",
            result: result
        });
    } catch (error) {
        res.status(404).json({
            message: "Tour not founded!",
            error: error.message
        });
    }
};

export const getSingleTourById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: `No tour exist with id: ${id}` });
        }

        const result = await getSingleTourByIdAction(id);
        res.status(200).json({
            message: "A single user found successfully!",
            result: result
        });

    } catch (error) {
        res.status(404).json({
            message: "Tour not Founded!",
            error: error.message
        });
    }
};

export const updateSingleTourById = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: `No tour exist with id: ${id}` });
        };

        const result = await updateSingleTourByIdAction(id, req.body);
        res.status(200).json({
            message: "Tour updated successfully!",
            result: result
        });

    } catch (error) {
        res.status(404).json({
            message: "Tour not updated!",
            error: error.message
        });
    }
};

export const getTopViewdTour = async (req, res) => {
    try {
        const result = await getTopViewdTourAction();
        res.status(200).json({
            message: "Find top viewed tour successfully!",
            result: result
        });

    } catch (error) {
        res.status(404).json({
            message: "Top viewed tour not founded!",
            error: error.message
        });
    }
};

export const getTopChepestTour = async (req, res) => {
    try {
        const result = await getTopChepestTourAction();
        res.status(200).json({
            message: "Find top cheapest tour successfully!",
            result: result
        });

    } catch (error) {
        res.status(404).json({
            message: "Top cheapest tour not founded!",
            error: error.message
        });
    }
};
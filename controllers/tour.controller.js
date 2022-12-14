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
        let filters = { ...req.query };
        const excludeFields = ['sort', 'page', 'limit'];
        excludeFields.forEach(field => delete filters[field]);

        let filtersString = JSON.stringify(filters);
        filtersString = filtersString.replace(/\b(eq|gt|gte|lt|lte|ne)\b/g, match => `$${match}`);

        filters = JSON.parse(filtersString);

        const queries = {};

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields
        }

        if (req.query.page) {
            const { page = 1, limit = 5 } = req.query;
            const skip = (page - 1) * Number(limit);
            queries.skip = skip;
            queries.limit = Number(limit);
        }

        const result = await getAllTourAction(filters, queries);

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
import tourModel from "../models/tour.model.js";

export const addNewTourAction = async (data) => {
    const result = await tourModel.create(data);
    return result;
};

export const getAllTourAction = async (data) => {
    const result = await tourModel.find();
    return result;
};

export const getSingleTourByIdAction = async (id) => {
    const result = await tourModel.findById(id);
    return result;
}

export const updateSingleTourByIdAction = async (id, data) => {
    const result = await tourModel.findByIdAndUpdate(id, data, { new: true });
    return result;
};

export const getTopViewdTourAction = async (data) => {

}
export const getTopChepestTourAction = async (data) => {

}
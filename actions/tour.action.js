import tourModel from "../models/tour.model.js";

export const addNewTourAction = async (data) => {
    const result = await tourModel.create(data);
    return result;
};

export const getAllTourAction = async (data) => {
    const result = await tourModel.find(data);
    return result;
};

export const getSingleTourByIdAction = async (id) => {

    const findViewCount = await tourModel.findById(id);
    let count = findViewCount?.viewCount + 1;

    const result = await tourModel.findByIdAndUpdate(id, { viewCount: count })
    return result;
};

export const updateSingleTourByIdAction = async (id, data) => {
    const result = await tourModel.findByIdAndUpdate(id, data, { new: true });
    return result;
};

export const getTopViewdTourAction = async () => {
    const result = await tourModel.find().sort([['viewCount', 'descending']]).limit(3);
    return result;

}
export const getTopChepestTourAction = async () => {
    const result = await tourModel.find().sort([['viewCount', 'ascending']]).limit(3);
    return result;
}
import tourModel from "../models/tour.model.js";

export const addNewTourAction = async (data) => {
    const newTour = await tourModel.create(data);
    return newTour;
};

export const getAllTourAction = async (filters, queries) => {
    const allTour = await tourModel.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy);

    const totalTours = await tourModel.countDocuments(filters);
    const pageCount = Math.ceil(totalTours / queries.limit);
    return { totalTours, pageCount, allTour };
};

export const getSingleTourByIdAction = async (id) => {

    const findViewCount = await tourModel.findById(id);
    let count = findViewCount?.viewCount + 1;

    const singleTour = await tourModel.findByIdAndUpdate(id, { viewCount: count })
    return singleTour;
};

export const updateSingleTourByIdAction = async (id, data) => {
    const updateTour = await tourModel.findByIdAndUpdate(id, data, { new: true });
    return updateTour;
};

export const getTopViewdTourAction = async () => {
    const topViewed = await tourModel.find().sort([['viewCount', 'descending']]).limit(3);
    return topViewed;

}
export const getTopChepestTourAction = async () => {
    const cheapViewed = await tourModel.find().sort([['viewCount', 'ascending']]).limit(3);
    return cheapViewed;
}
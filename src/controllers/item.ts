import Item, { IItem } from '../models/item';

export const getAllItems = async () => {
    return await Item.find();
};

export const getItemById = async (id: string) => {
    return await Item.findById(id);
};

export const createItem = async (name: string) => {
    const item: IItem = new Item({ name });
    return await item.save();
};

export const updateItem = async (id: string, name: string) => {
    return await Item.findByIdAndUpdate(id, { name }, { new: true });
};

export const deleteItem = async (id: string) => {
    return await Item.findByIdAndRemove(id);
};

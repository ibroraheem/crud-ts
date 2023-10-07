"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.createItem = exports.getItemById = exports.getAllItems = void 0;
const item_1 = __importDefault(require("../models/item"));
const getAllItems = async () => {
    return await item_1.default.find();
};
exports.getAllItems = getAllItems;
const getItemById = async (id) => {
    return await item_1.default.findById(id);
};
exports.getItemById = getItemById;
const createItem = async (name) => {
    const item = new item_1.default({ name });
    return await item.save();
};
exports.createItem = createItem;
const updateItem = async (id, name) => {
    return await item_1.default.findByIdAndUpdate(id, { name }, { new: true });
};
exports.updateItem = updateItem;
const deleteItem = async (id) => {
    return await item_1.default.findByIdAndRemove(id);
};
exports.deleteItem = deleteItem;

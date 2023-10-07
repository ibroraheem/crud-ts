"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemController = __importStar(require("../controllers/item"));
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    const items = await itemController.getAllItems();
    res.json(items);
});
router.get('/:id', async (req, res) => {
    const item = await itemController.getItemById(req.params.id);
    if (item) {
        res.json(item);
    }
    else {
        res.status(404).send("Not Found");
    }
});
router.post('/', async (req, res) => {
    const item = await itemController.createItem(req.body.name);
    res.json(item);
});
router.put('/:id', async (req, res) => {
    const updatedItem = await itemController.updateItem(req.params.id, req.body.name);
    if (updatedItem) {
        res.json(updatedItem);
    }
    else {
        res.status(404).send("Not Found");
    }
});
router.delete('/:id', async (req, res) => {
    const deletedItem = await itemController.deleteItem(req.params.id);
    if (deletedItem) {
        res.json(deletedItem);
    }
    else {
        res.status(404).send("Not Found");
    }
});
exports.default = router;

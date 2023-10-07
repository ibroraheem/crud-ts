import { Router } from 'express';
import * as itemController from '../controllers/item';

const router: Router = Router();

router.get('/', async (req, res) => {
    const items = await itemController.getAllItems();
    res.json(items);
});

router.get('/:id', async (req, res) => {
    const item = await itemController.getItemById(req.params.id);
    if (item) {
        res.json(item);
    } else {
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
    } else {
        res.status(404).send("Not Found");
    }
});

router.delete('/:id', async (req, res) => {
    const deletedItem = await itemController.deleteItem(req.params.id);
    if (deletedItem) {
        res.json(deletedItem);
    } else {
        res.status(404).send("Not Found");
    }
});

export default router;

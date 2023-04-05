const serviceProducts = require('../services/serviceProducts.js')

class ProductsController {

    // Добавление
    async add(req, res) {
        try {
            return res.status(200).json(await serviceProducts.add(req.body))
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
    // Получение
    async getAll(req, res) {
        try {
            return res.json(await serviceProducts.getAll());
        } catch (e) {
            console.log(e);
        }
    }
    // Поиск
    async find(req, res) {
        try {
            const query = {};
            query[req.params.param] = req.params.value;
            const result = res.status(200).json(await serviceProducts.find(query))
            res.status(200).json({ message: "Успешно", result })
        } catch (e) {
            console.log(e)
        }
    }
    // Редактирование
    async update(req, res) {
        try {
            return res.status(200).json(await serviceProducts.update(req.body))
        } catch (e) {
            console.log(e);
        }
    }
    // Удаление
    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json("ID не указан")
            }
            res.status(200).json(await serviceProducts.delete(id))
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new ProductsController()


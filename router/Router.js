
const Router = require('express')
const ProductsController = require('../controller/ProductsController.js')
const EmployeesController = require('../controller/EmployeesController.js')
const ProcessesServiceController = require('../controller/ProcessesServiceController.js')
const ProductsProcessesController = require('../controller/ProductsProcessesController.js')

const router = new Router()
// ProductsProcesses
router.post("/productsprocesses/add", ProductsProcessesController.add)
router.get("/productsprocesses/all", ProductsProcessesController.getAll)
router.get('/productsprocesses/find/:param/:value', ProductsProcessesController.find);
router.put("/productsprocesses/update", ProductsProcessesController.update)
router.delete("/productsprocesses/delete/:id", ProductsProcessesController.delete)
// Processing
router.post("/processes/add", ProcessesServiceController.add)
router.get("/processes/all", ProcessesServiceController.getAll)
router.get('/processes/find/:param/:value', ProcessesServiceController.find);
router.put("/processes/update", ProcessesServiceController.update)
router.delete("/processes/delete/:id", ProcessesServiceController.delete)
// Employees
router.post("/employees/add", EmployeesController.add)
router.get("/employees/all", EmployeesController.getAll)
router.get('/employees/find/:param/:value', EmployeesController.find);
router.put("/employees/update", EmployeesController.update)
router.delete("/employees/delete/:id", EmployeesController.delete)
// Products
router.post("/products/add", ProductsController.add)
router.get("/products/all", ProductsController.getAll)
router.get('/products/find/:param/:value', ProductsController.find);
router.put("/products/update", ProductsController.update)
router.delete("/products/delete/:id", ProductsController.delete)

module.exports = router
const Router = require("express").Router;
const userController = require("../controllers/userController");
const goodsController = require("../controllers/goodsController");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 30 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", userController.getUsers);
router.post("/goods/inc", goodsController.inc);
router.post("/goods/dec", goodsController.dec);
router.post("/goods/remove", goodsController.remove);
router.post("/getUser", userController.getUser);
router.get("/checkServer", userController.checkServer);

module.exports = router;

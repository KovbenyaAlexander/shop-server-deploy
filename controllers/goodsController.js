const userService = require("../services/userService");
const { validationResult } = require("express-validator");
const UserModel = require("../models/userModel");
const ApiError = require("../exceptions/apiError");

class GoodsController {
  async inc(req, res, next) {
    try {
      const { goodsId, email } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw ApiError.BadRequest("User not found");
      }
      if (!user.goods.has(goodsId)) {
        user.goods.set(goodsId, 1);
      } else {
        user.goods.set(goodsId, +user.goods.get(goodsId) + 1);
      }
      user.save();

      return res.json(user.goods);
    } catch (e) {
      next(e);
    }
  }

  async dec(req, res, next) {
    try {
      const { goodsId, email } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw ApiError.BadRequest("User not found");
      }
      if (!user.goods.has(goodsId) || +user.goods.get(goodsId) === 0) {
        return null;
      } else {
        user.goods.set(goodsId, +user.goods.get(goodsId) - 1);
      }
      user.save();

      return res.json(user.goods);
    } catch (e) {
      next(e);
    }
  }

  async remove(req, res, next) {
    try {
      const { goodsId, email } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw ApiError.BadRequest("User not found");
      }

      user.goods.delete(goodsId);

      user.save();

      return res.json(user.goods);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new GoodsController();

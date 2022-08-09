const LikesService = require("../services/likes.service");

class LikesController {
  likeService = new LikesService();

  postLike = (req, res, next) => {
    
  }

  // 함수 작성
}

module.exports = LikesController;

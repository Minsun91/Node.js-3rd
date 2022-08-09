const PostService = require("../services/posts.service");

class PostsController {
  postService = new PostService();

  
  // 8월 8일 완료
  //모든 포스트들을 가져오는 역할
  //반환값은 모든 포스트들
  // {
  //   postId: post.postId,
  //   nickname: post.nickname,
  //   title: post.title,
  //   createdAt: post.createdAt,
  //   updatedAt: post.updatedAt,
  //   like : 
  // }
  getAllPosts = async (req, res, next) => {
    
    const postsData = await this.postService.findAllPost();
    
    res.status(postsData.status).json({ data: postsData.Posts })
  }

  getOnePost = async (req, res, next) => {
    const {postId} = req.params;
    const postData = await this.postService.getPost(Number(postId))
    
    res.status(postData.status).json({data : postData.Post})
  }
  //8월 8일 완료
  createPost = async (req, res, next) => {
    const { nickname, password, title, content } = req.body;
    
    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createPostData = await this.postService.createPost(nickname, password, title, content);

    res.status(createPostData.status).json({ data: createPostData });
  }
  //8월 8일 완료
  updatePost = async (req, res, next) => {
    const {postId} = req.params;
    const { content, password} = req.body;

    const updatePostData = await this.postService.updatePost(Number(postId),  content, password);

    res.status(updatePostData.status).json({data : updatePostData});
  }

  //8월 8일 완료
  deletePost = async (req, res, next) => {
    const {postId} = req.params;
    const deletPostData =await this.postService.deletePost(Number(postId))

    res.status(deletPostData.status).json({data : deletPostData})
  }
}

module.exports = PostsController;

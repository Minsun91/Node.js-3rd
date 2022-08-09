const PostRepository = require("../repositories/posts.repository");

class PostService {
  postRepository = new PostRepository();

  //8월 8일 완료
  //모든 포스트를 가져와 반환
  findAllPost = async () => {
    const allPost = await this.postRepository.findAllPost();

    allPost.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    const Posts = allPost.map((post) => {
      return {
        postId: post.postId,
        nickname: post.nickname,
        title: post.title,
        createdAt: post.createdAt,
        like: post.like,
      };
    });
    return {
      Posts,
      status: 200,
    };
  };

  //postId로 하나의 특정 게시물만 반환
  getPost = async (postId) => {
    const getPostData = await this.postRepository.findOnePost(postId);

    const Post = {
      nickname: getPostData.nickname,
      title: getPostData.title,
      content: getPostData.content,
      createdAt: getPostData.createdAt,
      like: getPostData.like,
    };
    return {
      Post,
      status: 200,
    };
  };

  //8월 8일 완료
  createPost = async (nickname, password, title, content) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    await this.postRepository.createPost(nickname, password, title, content);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      status: 201,
      msg: "게시물이 생성되었습니다!",
    };
  };

  updatePost = async (postId, content, password) => {
    const updatePostData = await this.postRepository.findOnePost(postId);

    if (password !== updatePostData.password) {
      //입력한 비밀번호가 다른 경우
      return {
        status: 400,
        msg: "입력한 비밀번호가 다릅니다.",
      };
    }
    await this.postRepository.updatePost(postId, content);

    return {
      status: 200,
      msg: "게시물이 수정되었습니다.",
    };
  };

  deletePost = async (postId) => {
    await this.postRepository.deletePost(postId);
    return {
      status: 200,
      msg: "게시물이 삭제되었습니다.",
    };
  };
  // 함수 작성
}

module.exports = PostService;

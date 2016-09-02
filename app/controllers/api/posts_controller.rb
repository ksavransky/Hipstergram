class Api::PostsController < ApplicationController
  def index
    @posts = Post.all

    render :index
      # does this need a path like below
      # remember this is just a way to send info back to ajax success
  end

  def show
    @post = Post.find(params[:id])
    # does this need a path like below
  end

  def create
    @post = Post.new(post_params)
    if(@post.save)
      render "api/posts/show", status: 200
      # sends jbuilder info back for specific post to ajax success
    else
      @errors = @post.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render "api/posts/show", status: 200
    else
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if(@post.destroy)
      render "api/posts/show", status: 200
    else
      @errors = @post.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:image_url, :caption, :user_id)
  end
end

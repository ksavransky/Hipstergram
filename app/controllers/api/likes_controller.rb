class Api::LikesController < ApplicationController

  def create
    like = Like.new(like_params)
    if(like.save)
      @post = like.post
      render "api/posts/show", status: 200
      # sends jbuilder info back for specific like to ajax success
    else
      @errors = @like.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if(@like.destroy)
      render "api/likes/show", status: 200
    else
      @errors = @like.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:like_text, :post_id, :user_id)
  end
end

class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if(@comment.save)
      render "api/comments/show", status: 200
      # sends jbuilder info back for specific comment to ajax success
    else
      @errors = @comment.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if(@comment.destroy)
      render "api/comments/show", status: 200
    else
      @errors = @comment.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_text, :post_id, :user_id)
  end
end

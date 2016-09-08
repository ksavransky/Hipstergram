class Api::RelationshipsController < ApplicationController
  def create
    @relationship = Relationship.new(relationship_params)
    @user = User.find_by_id(@relationship.followee_id)
    if(@relationship.save)
      render "api/users/show", status: 200
      # sends jbuilder info back for specific relationship to ajax success
    else
      @errors = @relationship.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @relationship = Relationship.find(params[:id])
    @user = User.find_by_id(@relationship.followee_id)
    if(@relationship.destroy)
      render "api/users/show", status: 200
    else
      @errors = @relationship.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private

  def relationship_params
    params.require(:relationship).permit(:id, :follower_id, :followee_id)
  end
end

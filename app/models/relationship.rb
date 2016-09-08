class Relationship < ActiveRecord::Base

  validates :follower_id, :followee_id, presence: true

  validates_uniqueness_of :follower_id, :scope => :followee_id

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :User


end

require 'bcrypt'

class User < ActiveRecord::Base

	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 2}, allow_nil: :true

	has_many :posts
	has_many :comments
	has_many :likes

	has_many :follower_relationships,
		primary_key: :id,
		foreign_key: :followee_id,
		class_name: :Relationship

	has_many :followee_relationships,
		primary_key: :id,
		foreign_key: :follower_id,
		class_name: :Relationship

	has_many :followers,
		through: :follower_relationships,
		source: :follower

	has_many :followees,
		through: :followee_relationships,
		source: :followee



	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	def get_posts
		(self.posts + self.followees.map {|followee| followee.posts}).flatten
	end


	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end

json.extract! post, :id, :image_url, :caption, :user_id, :created_at

json.user do
  json.username post.user.username
  json.prof_image_url post.user.prof_image_url
end

json.comments post.comments.each do |comment|
      json.username comment.user.username
      json.comment_text comment.comment_text
      json.user_id comment.user.id
      json.id comment.id
end

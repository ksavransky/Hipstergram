json.extract! post, :id, :image_url, :caption, :user_id

json.user do
  json.username post.user.username
  json.prof_image_url post.user.prof_image_url
end

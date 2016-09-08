json.extract! user, :id, :username, :fullname, :prof_image_url, :profile_text


json.posts user.posts.each do |post|
      json.image_url post.image_url
      json.caption post.caption
end

json.followers user.followers.each do |follower|
      json.id follower.id
      json.username follower.username
      json.fullname follower.fullname
      json.prof_image_url follower.prof_image_url
end

json.followees user.followees.each do |followee|
      json.id followee.id
      json.username followee.username
      json.fullname followee.fullname
      json.prof_image_url followee.prof_image_url
end

json.follower_relationships user.follower_relationships do |follower_relationship|
  json.id follower_relationship.id
  json.follower_id  follower_relationship.follower_id
  json.followee_id  follower_relationship.followee_id
end

json.followee_relationships user.followee_relationships do |followee_relationship|
  json.id followee_relationship.id
  json.follower_id  followee_relationship.follower_id
  json.followee_id  followee_relationship.followee_id
end

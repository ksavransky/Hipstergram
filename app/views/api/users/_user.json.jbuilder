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

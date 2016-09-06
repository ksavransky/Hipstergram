# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(username: "Guest", password: "password", fullname: "John Doe Hipster", profile_text: "I used Hipstergram before you.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472662758/beebster_y0yjao.jpg")
user2 = User.create(username: "hipguy", password: "password", fullname: "Mike Hipster", profile_text: "What up Williamsburg.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748072/hipsterprof5_nyzvec.jpg")
user3 = User.create(username: "hipchick", password: "password", fullname: "Jane Hipster", profile_text: "I don't go there anymore.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748074/hipsterprof4_s3p9fw.jpg")
user4 = User.create(username: "whateverdude", password: "password", fullname: "Joe Hipster", profile_text: "Arcade Fire used to be cool.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748083/hipsterprof1_x2tacz.webp")
user5 = User.create(username: "coolchick", password: "password", fullname: "Lisa Hipster", profile_text: "I only drink Blue Bottle.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748079/hipsterprof2_thkpgs.jpg")



post1 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661388/masonjardude_wymhsw.jpg", caption: "look, a mason jar", user_id: 1)
post2 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661387/crazybeard_lvp74f.jpg", caption: "look, a crazy beard", user_id: 1)
post3 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661384/fedora_sgjxyn.jpg", caption: "look, a fedora", user_id: 1)
post4 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661380/hipstuff_s81vkv.jpg", caption: "look, hipster stuff", user_id: 2)
post5 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661376/cat_e2ue6k.jpg", caption: "look, a cat with a mustache", user_id: 3)


comment1 = Comment.create(user_id: 1, post_id: 1, comment_text: "that dude has a mason jar! wow!")
comment2 = Comment.create(user_id: 1, post_id: 2, comment_text: "that dude has a crazy beard!!!")
comment3 = Comment.create(user_id: 2, post_id: 1, comment_text: "what the hell is in that thing?")
comment4 = Comment.create(user_id: 2, post_id: 3, comment_text: "i love fedoras!")
comment5 = Comment.create(user_id: 3, post_id: 4, comment_text: "i need all that stuff!")

like1 = Like.create(user_id: 1, post_id: 1)
like2 = Like.create(user_id: 1, post_id: 2)
like3 = Like.create(user_id: 1, post_id: 3)
like4 = Like.create(user_id: 2, post_id: 1)
like5 = Like.create(user_id: 3, post_id: 1)
like6 = Like.create(user_id: 4, post_id: 5)

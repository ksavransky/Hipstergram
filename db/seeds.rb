# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(username: "Guest", password: "password", fullname: "John Doe Hipster", profile_text: "I used Hipstergram before you did.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472662758/beebster_y0yjao.jpg")

post1 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661388/masonjardude_wymhsw.jpg", caption: "look, a mason jar", user_id: 1)
post2 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661387/crazybeard_lvp74f.jpg", caption: "look, a crazy beard", user_id: 1)
post3 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661384/fedora_sgjxyn.jpg", caption: "look, a fedora", user_id: 1)
post4 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661380/hipstuff_s81vkv.jpg", caption: "look, hipster stuff", user_id: 1)
post5 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661376/cat_e2ue6k.jpg", caption: "look, a cat with a mustache", user_id: 1)

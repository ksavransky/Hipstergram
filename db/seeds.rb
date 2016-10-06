# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(username: "Guest", password: "password", fullname: "Beebster", profile_text: "I used Hipstergram before you.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472662758/beebster_y0yjao.jpg")
user2 = User.create(username: "hipguy", password: "password", fullname: "Mike Hipster", profile_text: "What up Williamsburg.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748072/hipsterprof5_nyzvec.jpg")
user3 = User.create(username: "hipchick", password: "password", fullname: "Jane Hipster", profile_text: "I don't go there anymore.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748074/hipsterprof4_s3p9fw.jpg")
user4 = User.create(username: "whateverdude", password: "password", fullname: "Joe Hipster", profile_text: "Arcade Fire used to be cool.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748083/hipsterprof1_x2tacz.webp")
user5 = User.create(username: "coolchick", password: "password", fullname: "Lisa Hipster", profile_text: "I only drink Blue Bottle.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472748079/hipsterprof2_thkpgs.jpg")

user6 = User.create(username: "alexhipster!", password: "password", fullname: "Alex Hipster", profile_text: "The mission sucks now.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441987/heprof2_itrv6u.jpg")
user7 = User.create(username: "sam1914", password: "password", fullname: "Samual H. Hipster", profile_text: "Radiohead is always there for me.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441967/heprof3_blihr3.jpg")
user8 = User.create(username: "davidhipster1999", password: "password", fullname: "David Hipster", profile_text: "Mastadon is the only hipster metal band.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441963/heprof4_qlads3.jpg")
user9 = User.create(username: "frankhipster2011", password: "password", fullname: "Frank Hipster", profile_text: "I love bacon and beer. But who doesn't?", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441967/heprof5_vqqp4w.jpg")


user10 = User.create(username: "jess1990", password: "password", fullname: "Jessica Hipster", profile_text: "Have you been to the food truck on 19th and mission?", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441966/sheprof1_ua5ebf.png")
user11 = User.create(username: "kelly", password: "password", fullname: "Kelly Hipster", profile_text: "Jamie XX! <3", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441961/sheprof2_tywx3t.jpg")
user12 = User.create(username: "lucy1992", password: "password", fullname: "Lucy Hipster", profile_text: "Lucy in the Sky with Diamonds. That's me.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441963/sheprof4_ct91gs.jpg")
user13 = User.create(username: "wendyhipster", password: "password", fullname: "Wendy Hipster", profile_text: "I hate Wendy's. Magnolia in the Haight is my scene.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441961/sheprof3_vpuqu5.jpg")
user14 = User.create(username: "ericahipster", password: "password", fullname: "Erica Hipster", profile_text: "I am special.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441956/sheprof5_n2sosy.jpg")
user15 = User.create(username: "riley1995", password: "password", fullname: "Riley Hipster", profile_text: "You just don't get it.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441955/sheprof6_hsgafc.jpg")
user16 = User.create(username: "tammy", password: "password", fullname: "Tammy Hipster", profile_text: "Every day is one day closer to death.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441970/sheprof7_ece1fu.jpg")

user17 = User.create(username: "inittowinit", password: "password", fullname: "Bobby Hipster", profile_text: "I am in it to win it.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473442713/heprof13_nthsq7.jpg")
user18 = User.create(username: "paul1993", password: "password", fullname: " Hipster", profile_text: "Yo Paullliiie", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473442712/heprof12_ormwkw.jpg")
user19 = User.create(username: "Nedster", password: "password", fullname: "Ned Hipster", profile_text: "I live in Oakland now. SF is for yuppie scum.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473442713/heprof11_kwbggc.jpg")
user20 = User.create(username: "Chadwickster", password: "password", fullname: "Chad Hipster", profile_text: "Chadwick is not a hipster name.", prof_image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473442713/heprof10_o4zkmb.jpg")



post1 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661388/masonjardude_wymhsw.jpg", caption: "Look, a mason jar!", user_id: 1)
post2 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661387/crazybeard_lvp74f.jpg", caption: "Look, a crazy beard!", user_id: 1)
post3 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661384/fedora_sgjxyn.jpg", caption: "Did someone say fedora?", user_id: 1)
post4 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661380/hipstuff_s81vkv.jpg", caption: "My stuff!", user_id: 2)
post5 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1472661376/cat_e2ue6k.jpg", caption: "A cat with a mustache?! No way!", user_id: 3)

post6 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441961/post3_acakow.jpg", caption: "my gf is the hottest", user_id: 9)
post7 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441961/post7_k8qtvv.jpg", caption: "This food truck is overrated", user_id: 1)
post8 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441958/post6_indsye.jpg", caption: "I have a whole one every morning", user_id: 10)
post9 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441957/post10bacon_rtixba.jpg", caption: "like dog treats for humans", user_id: 7)
post10 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441952/post4_xyibrg.jpg", caption: "found this recipe on a note on the sidewalk.", user_id: 12)
post11 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441951/post5_inlucg.jpg", caption: "that about sums up last night", user_id: 14)
post12 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441950/post11pbr_uoyjpn.jpg", caption: "why is this a thing still", user_id: 9)
post13 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441949/post8_zayguy.jpg", caption: "Pickillllssss", user_id: 3)
post14 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441948/post12kale_atb0fp.jpg", caption: "Is this why mission smells like farts?", user_id: 16)
post15 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441947/post9_v7woht.jpg", caption: "Its pickled and in a jar? I'll eat it.", user_id: 5)
post16 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441945/post15tacos_qadsyp.jpg", caption: "Taqueria Cancun tacos for lunch today ;)", user_id: 6)
post17 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441944/post29cagetheeleph_blwl6e.jpg", caption: "Cage the Elephant are my favs!", user_id: 7)
post18 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441942/post14kimichi_ta6zyx.jpg", caption: "Kimichi for life!", user_id: 8)
post19 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441939/post13masonjardrink_qzr8yx.jpg", caption: "Mmmm, I'm wasted.", user_id: 9)
post20 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441934/post17pickledfood_xdq5y8.jpg", caption: "look at my closet!", user_id: 7)
post21 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441933/post16kimichitacos_wushxs.jpg", caption: "Do yourself a favorite a try this.", user_id: 11)
post22 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441930/post21vegancookies_zwqffn.jpg", caption: "Ask me for my vegen cookie recipe.", user_id: 12)
post23 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441930/post18ramps_rvradb.jpg", caption: "ramps from my garden", user_id: 13)
post24 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441929/post19homebrewedbeer_fgrx3k.jpg", caption: "home brew beer? got that!", user_id: 13)
post25 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441928/post20forgedberries_pl21nr.jpg", caption: "some berries i forged. no big deal.", user_id: 15)
post26 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441928/post22greenjuice_l4rutl.jpg", caption: "great stuff, but my pee is turning green", user_id: 4)
post27 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441927/post23cauliflower_iirn1m.jpg", caption: "i can cook", user_id: 17)
post28 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441927/post35theneighborhood_jfex8f.jpg", caption: "The Neighborhood is awesome.", user_id: 18)
post29 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441927/post24fancydonut_wfj1dn.jpg", caption: "Donuts!!!", user_id: 19)
post30 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441927/post25arcticemonkeys_kgnfkr.jpg", caption: "TBT. Saw these guys in London on 2005.", user_id: 20)
post31 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441926/post26arcadefire_b4py2u.jpg", caption: "I took this photo of Arcade Fire. No big deal.", user_id: 19)
post32 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441926/post34neutralmilkhotel_hy6dzj.jpg", caption: "Neutral Milk Hotel is the best PERIOD.", user_id: 16)
post33 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441925/post37mastadon_lmybjk.jpg", caption: "Mastadon!!! Hipster metal!!!", user_id: 15)
post34 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441925/post27blackkeys_cx49if.jpg", caption: "I love this photo. Black Keys rock.", user_id: 6)
post35 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441925/post31boniver_lvnt32.jpg", caption: "Bon Iver = Hipster God.", user_id: 7)

post36 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441924/post32tameimpala_sg01o8.jpg", caption: "Tame Impala is the best band in the world.", user_id: 7)
post37 = Post.create(image_url: "http://res.cloudinary.com/ksavransky/image/upload/v1473441924/post33radiohead_hgahp1.jpg", caption: "OG Hipster Gods.", user_id: 15)


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
like6 = Like.create(user_id: 4, post_id: 34)
like6 = Like.create(user_id: 6, post_id: 34)
like6 = Like.create(user_id: 1, post_id: 29)
like6 = Like.create(user_id: 1, post_id: 31)

r1 = Relationship.create(follower_id: 1, followee_id: 19)
r1 = Relationship.create(follower_id: 1, followee_id: 6)
r1 = Relationship.create(follower_id: 1, followee_id: 2)
r3 = Relationship.create(follower_id: 1, followee_id: 5)
r2 = Relationship.create(follower_id: 1, followee_id: 3)
r3 = Relationship.create(follower_id: 1, followee_id: 10)
r3 = Relationship.create(follower_id: 1, followee_id: 4)

r4 = Relationship.create(follower_id: 2, followee_id: 5)
r4 = Relationship.create(follower_id: 2, followee_id: 6)


r5 = Relationship.create(follower_id: 3, followee_id: 2)
r6 = Relationship.create(follower_id: 3, followee_id: 4)
r7 = Relationship.create(follower_id: 3, followee_id: 1)


r5 = Relationship.create(follower_id: 4, followee_id: 11)
r6 = Relationship.create(follower_id: 4, followee_id: 12)
r7 = Relationship.create(follower_id: 4, followee_id: 13)


r5 = Relationship.create(follower_id: 5, followee_id: 1)
r6 = Relationship.create(follower_id: 5, followee_id: 19)
r7 = Relationship.create(follower_id: 5, followee_id: 20)

# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
fullname        | string    |
password_digest | string    | not null
session_token   | string    | not null
profile_text    | text      |
prof_image_url  | string    |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null
caption     | text      | 
user_id     | integer   | not null, foreign key (references users), indexed

## relationships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followed_id | integer   | not null, foreign key (references users), indexed


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts), indexed, unique [user_id]
user_id     | integer   | not null, foreign key (references users), indexed


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references posts), indexed
date        | datetime  | not null


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
post_id     | integer   | not null, foreign key (references posts), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

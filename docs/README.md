# Hipstergram

[Heroku link][heroku] Heroku link to production of Hipstergram.
[heroku]: http://thehipstergram.herokuapp.com

## Minimum Viable Product

Hipstergram is a web application inspired by Instagram built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README

- [ ] Posts
  - [ ] Ability to Post Images
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

- [ ] Following & Photo Feed
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] Infinite Scroll for Posts

- [ ] Comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

- [ ] Likes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Sample State][sample-state]
* [Redux Structure][redux-structure]
* [DB schema][schema]
* [API endpoints][api-endpoints]

[views]: https://github.com/ksavransky/Hipstergram/blob/master/docs/views.md
[components]: https://github.com/ksavransky/Hipstergram/blob/master/docs/component-heirarchy.md
[sample-state]: https://github.com/ksavransky/Hipstergram/blob/master/docs/sample-state.md
[redux-structure]: https://github.com/ksavransky/Hipstergram/blob/master/docs/redux-structure.md
[schema]: https://github.com/ksavransky/Hipstergram/blob/master/docs/schema.md
[api-endpoints]: https://github.com/ksavransky/Hipstergram/blob/master/docs/api-endpoints.md

# Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W 6pm)

**Objective**: Functioning rails project with front-end Authentication

- [ ] create new project
- [ ] create `User` model/migration
- [ ] authentication backend setup
- [ ] create `StaticPages` controller and root view
- [ ] webpack & react/redux modules
- [ ] setup `APIUtil` to interact with the API
- [ ] redux cycle for frontend authentication
- [ ] user signup/signin components
- [ ] blank landing component after signin
- [ ] style signin/signup components
- [ ] seed users

### Phase 2: Post Model, API, and components (2 days, W1 F 6pm)

**Objective**: Posts can be created, read, edited and destroyed through the API.

- [ ] create `Post` model
- [ ] seed the database with test data
- [ ] CRUD API for posts (PostsController)
- [ ] jBuilder views for posts
- [ ] test out API interaction in the console.
- implement each post component, building out the redux loop as needed.
  - [ ] `PostsIndex`  
  - [ ] `PostIndexItem`
  - [ ] `PostForm`  -- this is to create new posts
- [ ] save Posts to the DB when the form is submitted.
- [ ] style posts components
- [ ] seed posts

### Phase 3: Posts (1 day, W2 M 6pm)

**Objective**: Posts belong to a user, and can be viewed by the user-profile.

- build out API, Redux loop, and components for:
  - [ ] User-profile/Posts CRUD
  - [ ] adding posts requires a user
  - [ ] editing posts requires correct user_id
  - [ ] viewing posts by specific user
- [ ] Use CSS to style new components

Phase 3 adds organization to the Posts. Posts belong to a User, which has its own Index view.

### Phase 4: Relationships (1 days, W2 T 6pm)

**Objective**:  Users can have multiple followers, and follow multiple users.

- [ ] create `Relationships` model
- build out API, Redux loop, and components for:
  - [ ] adding following ability to a user, including the suggestions component and/or search bar
  - [ ] adding followers for a user
- [ ] Style new elements
- [ ] Seed followers

### Phase 5: Comments (1 days, W2 W 6pm)

**Objective**:  Posts can have with multiple comments.

- [ ] create `Comment` model
- build out API, Redux loop, and components for:
  - [ ] adding comments to a post
- [ ] Style new elements
- [ ] Seed comments

### Phase 6: Likes (1 days, W2 Th Noon)

**Objective**:  Posts can have multiple likes.

- [ ] create `Like` model
- build out API, Redux loop, and components for:
  - [ ] adding likes to a post
- [ ] Style new elements
- [ ] Seed likes

### Phase 7: - Pagination / infinite scroll for Posts Index (1 day, W2 F Noon)

**Objective**: Add infinite scroll to Posts Index

- [ ] Paginate Posts Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Make sure styling still looks good
- [ ] Ensure we have enough seeded posts to demo infinite scroll

### Bonus Features (TBD)

**Objective**: Posts can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Redux loop, and components for:
  - [ ] fetching tags for posts
  - [ ] adding tags to posts
  - [ ] creating tags while adding posts
  - [ ] searching posts by tag
- [ ] Style new elements
- [ ] Seed tags and tag the seeded posts

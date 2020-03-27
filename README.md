# :house_with_garden: let & GO :house_with_garden:

## What this app is about

let & GO promotes sustainability :recycle: and communal sharing :couple: . This application allows users to rent out or lease their stuff to their neighbours and build up neighbourhood bonds. With let & GO, you never need to clutter your house with things you only use once or twice. You can finally meet your neighbours while earning some extra money :moneybag: by sharing your stuff that you haven't use for a while.

## Table of contents

- [App demo](#App-demo)
- [Technology used](#technology-used)
- [Goals for this project](#goals-for-this-project)
- [User Stories and Wireframe](#user-stories-and-wireframe)
- [Git workflow](#git-workflow)
- [Server-repo](#server-repo)

## App demo

![let-go_Screenshot2](https://user-images.githubusercontent.com/48523895/77710430-3ddc1100-6fce-11ea-9dc3-f8462d935d61.png)
![let-go_Screenshot](https://user-images.githubusercontent.com/48523895/77710385-1f761580-6fce-11ea-9313-3ad89e46bb14.png)
![let-go_Screenshot3](https://user-images.githubusercontent.com/48523895/77710605-cce92900-6fce-11ea-80b4-62d6073d69d2.png)
![let-go-gif1](https://github.com/NicoleKuong/let-GO-client/tree/master/src/assets/lego-gif-1.gif)

## Technology used

:eyes::point_down: **Click links to see samples in this project** :point_down::eyes:

- [React](https://github.com/NicoleKuong/let-GO-client/blob/master/src/App.js)
- [Redux](https://github.com/NicoleKuong/let-GO-client/tree/master/src/actions)
- [Express](https://github.com/NicoleKuong/let-Go-server/blob/master/index.js)
  - [REST API](https://github.com/NicoleKuong/let-Go-server/blob/master/item/router.js)
- [Sequelize](https://github.com/NicoleKuong/let-Go-server/blob/master/user/model.js)
- [React-Bootstrap](https://github.com/sssgordon/project-outcry-client/blob/master/src/components/DetailsForm/DetailsForm.js)
- [Geolocation](https://github.com/NicoleKuong/let-GO-client/blob/master/src/components/SignUp/SignUpContainer.js) :star:
- [React-Dropzone-Uploader](https://github.com/NicoleKuong/let-GO-client/blob/master/src/components/ImageUpload/ImageUploadContainer.js) :star:
- [React-Leaflet](https://github.com/NicoleKuong/let-GO-client/blob/master/src/components/ItemDetails/ItemDetails.js) :star:
- [Nodemailer](https://github.com/NicoleKuong/let-Go-server/blob/master/email/router.js) :star:
- [Stripe](https://github.com/NicoleKuong/let-Go-server/blob/master/payment/router.js) :star:

:star: _New technology learned during this project_

## Goals for this project

The goal of this project is to build a full-stack app using new technologies (see above) _not taught in the bootcamp_. I learned these new tools by reading documentations and watching tutorial videos.

- practice full-stack development
- practice learning new technology independently
- apply what we learned in the bootcamp
- showcase development approach of using wireframes and user stories
- practice disciplined [git usage](#git-workflow)

## User Stories and Wireframe

### User stories for this project:

- As a user, I would like to sign up and login. I must register before I can make an offer
- As a user, I am able to create a profile to see my information and history of transactions
- As a user, I would like to search for items at specific locations
- As a user, I would like to see a dashboard. In this dashboard, I am able to see other users’ offers
- As a user, I can click into a post on the dashboard and look at the details of the item
- As a user, I would like to contact the item owner for meet up arrangements
- As a user, I would like to make payments online for renting an item

_This mvp is still a work in progress. Some features still need to be implemented and revised. If you have any suggestions, please let me know [here](https://www.linkedin.com/in/nicole-kuong/)_

### Wireframe

[Click here for the wireframs for this project in Mockflow](https://wireframepro.mockflow.com/editor.jsp?editor=off&perm=Owner&projectid=M942ed8396a84abfa15da1942fd72dc921583161154742&publicid=7653f18c4b5246a193328bc3cac7ca79#/page/550f39dc6adb49fc87e2187b51296e30)

## Git workflow

In this project I try to use:

- Good commit messages
- Well named branches
- Pull requests with summaries

#### 👀👇 Click links to view samples of pull requests 👇👀

- [feat/payment page](https://github.com/NicoleKuong/let-GO-client/pull/9)
- [Code Review](https://github.com/NicoleKuong/let-GO-client/pull/8)

## Server-repo

The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/NicoleKuong/let-Go-server)

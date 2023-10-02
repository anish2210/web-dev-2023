# Blogging Website with Database

I have developed an Blogging Website with Database.

I have used HTML, CSS, JS, Express, MongoDB to develop this Project.

## Install Dependencies

We need to install the required Node Modules
```bash
  npm i
```
and it will install the Dependencies

## Deployment in Local

For Local Srever we need to update the mongodb database connection code.

```bash
  mongoose.connect('mongodb://127.0.0.1:27017/blogDB');
```
Ensure that mongo server is running .

## Deployment in Atlas

For Atlas just update the username and password with your MongoDB cerdentials.

```bash
 mongoose.connect("mongodb+srv://{Your MongoDB Atlas Username}:{Your MongoDB Atlas Password}/blogDB");
```

## Overview

On successfull deployment we can add blog to our website.

We need to edit the title and description and publish it.

On clicking read more it will open the blog in a new page.
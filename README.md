# Project Name
ReMeals
<br>



## Description

Make a platform to define the meals of the week and save them as reminders.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn't exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and see my calendar of the week and see all my planned meals, my profile, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add favorite meals to my list and see my calendar.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite recipes, add news ones and delete them.
- **edit user** - As a user I want to be able to edit or delete my profile.
- **result** - As a user I want to see my calendar add meals to every day of the week and to be able to edit the list of my favorite recepies.
- **recipes listing** - As a user I want to see more details of recipes, be able to put on our planner and save it as favorites.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/profile`            | Private route. Renders `profile` form view.             |                                                          |
| `POST`      | `/private/profile`            | Private route. Adds a new user.     | { name, duration, ingredients }     |                                                          |
| `GET`      | `/private/myPlanner`            | Private route. Renders `myPlanner` form view.             |                                                          |
| `POST`      | `/private/myPlanner`            | Private route. Adds a new recipes to the page.     | { name, duration, ingredients }     |                                                          |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |                              |
| `DELETE`   | `/private/favorites/:RecipesId` | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/meals`                     | Renders `meals-list` view.                              |                                                          |
| `GET`      | `/meals/details/:id`         | Renders `meals-details` view for the particular recipes. |                                                          |







## Models

User model

```javascript
{
  name: String,
  bio: String,
  email: String,
  password: String,
  favoriteRecipes: [RecipeId],
  ImageUrl: String,

}

```
Recipes model

```javascript
{
    name: String,
    duration: Number,
    ingredients: [String]
    preparation: [String]
}

```



<br>

## API's
No api's

<br>


## Packages
ironlauncher that inside has express, mongoose and hbs.
bootstrap 


<br>



## Backlog

[See the Trello board.](https://trello.com/b/QQu1qW2s/gest%C3%A3o-de-projetos)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/deborahdelimaa/Project_2)

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
Pedro Leal - [`PeterLoyal`](https://github.com/PeterLoyal) - [`Pedro Leal`](https://www.linkedin.com/in/pedroleal6/)

Deborah Lima - [`Deborahdelimaa`](https://github.com/deborahdelimaa) - [`Deborah De Lima`](https://www.linkedin.com/in/deborahdelima/)
# LeanneGraham​

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Page Structure

1. Login Page
   On login page, we fetched user Data using users REST API and after that we compare username(email Id) user entered and email id in the user Data, if they are matched then only user can proceed further and user detail will, store in session storage if not, then user will get error.
2. Dashboard Page
   On Dashboard, we are having three tabs as follows: Posts, Albums, ToDo List in header and company link and we are getting a username from session storage and logout button. Post : In the Post section, We fetched data from post REST API and we used expansion from angular material to show the body of each post on clicking on the title. We are not able to receive comments count from Post API So, the comments count is Zero shown in Post. In the Post section we implemented the search option for that we have created a custom search pipe, which will find the keyword from the post's body and title.
   Albums : In the Album section, we fetched data from albums REST API and used sort function to sort albums on the basis alphabetically and vice versa. In the album section, we open mat dialog box on click of view photos which shows photos of the particular album. here we pass album id from dashboard page to album modal popup and call photos REST API.
   ToDo List : In ToDo List section, we fetched data from todo REST API and we used angular material check box to show value of todo list item checked and unchecked and also on material slider we show all checked value together.
   On logout, session storage get cleared and the page will navigate to the Login page. Also, if user details are not present in session storage, the user will directly navigate to the Login page.
3. Album Modal Popup
   On Album Modal popup, we passed album id of album which photos we want to open in album popup and we passed that id to the photos REST API so that we will get photos of particular album.

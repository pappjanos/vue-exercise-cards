# Vue Exercise - Cards
A VueJS 2 exercise where you can practice the usage of Vuetify for styling, apply Vue directives and get familiar with a component based approach.

## Project setup
```
npm install
```
Includes:
* Vue-router
* Vuetify
* Prettier

### Compiles and hot-reloads for development
```
npm run serve
```

### Formats the code
```
npm run format
```
- Formatting directives can be changed in the **.prettierrc.json** file

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)

## The basic exercise

### In the exercise, use Vuetify for styling (grid system, UI elements - e.g. cards, buttons, etc.)

### Home View
1. The products object should be imported and its value property should be transformed in order to use it (as it is stringified right now)
2. The Home View should display every product on cards found in the **assets/exercise.js** file
   * The cards should display the images, titles and subtitles of each product (image on top, under it the title and subtitle)
   * The height of the images should be 200px
   * The maximum width of the images should be 344px
   * A button should be in the down-right corner of each cards with the text - 'Show More'
     * The button's background should be transparent, the color of the button text should be red
   * The cards should be responsive
     * Big screens - 3 cards in a row
     * Middle-sized screens - 2 cards in a row
     * Small screens - 1 card in a row
   * **Do not display the data statically, don't repeat your code!**

### Details View
1. When the 'Show More' button of a product is clicked on the Home view, the user should be redirected to the Details page, where all the information of the product is displayed
   * Use a routing with path-params or query-params (up to you)
   * When the 'Show More' button is clicked the id of the clicked product is passed to the details url
   * In the Details View the id is read from the url and the corresponding procuct is displayed with all the details on a big card
     * The height of the image in the big card should be 400 px
   * Don't forget to update the routing file

### Extra - One step further
* Component based approach
  * Create a card component, which then you reuse in the Home and Details View
    * You should be able to pass the following data to the card component:
      * The data of the product(s)
      * The height of the image
      * The maximum width of the image
    * The button and the product description should be optional in the component (hint: slots) 
   

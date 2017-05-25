## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

 * Original code is present in src directory
 * Optimized code is present in the main directory itself
 * Used grunt to automate the process of minifying the files as well as compressing the images.
 * Here are the command for downloading the modules used.
   * npm install grunt-contrib-imagemin --save-dev 
   * npm install grunt-responsive-images --save-dev
   * npm install grunt-contrib-htmlmin --save-dev
   * npm install grunt-contrib-cssmin --save-dev
   * npm install grunt-contrib-uglify --save-dev

##### Page Speed:

* Mobile:93
* Desktop:95

##### Optimizations:

* Added async tag to script tag for javascripts
* Compressed all images
* Minified CSS/JS/HTML
* Inlined minified CSS to index.html
* Added media "print" to print.css
* Used fontface in CSS to get open sans google font and remove link to google fonts in html

#### Part 2: Optimize Frames per Second in pizza.html

##### Pizza Times:

* Time to resize Pizza = 0.5 ms average
* Average Scripting time to generate last 10 frames < 0.2 ms average

##### Optimizations:

* Saved document.body.scrollTop in global variable once when DOMContentLoaded event and whenever scroll event is received
* Saved all the moving pizza DOM in another global variable since the list does not change once added to DOM
* Added condition to add moving Pizzas to DOM based on the screen height of the device. This way we dont have to iterate over 200 pizzas since they wont be seen on the screen
* Call updatePosition on scroll using RequestAnimationFrame. To make sure RequestAnimationFrame doenst get called when the previous request is still being processed added a global flag which gets reset when updatePosition is executed.
* Inside updatePosition , since phase can take only 5 different values based on the scroll position, calculating that separately
* Move the pizzas based on transform instead of left since that has a better performance.
* Updated the changePizzaSize function to change the size based on % which is returned by switch case inside the function. This value is then applied to the width of each Pizza.
* Used getElementsByClassName/Id whereever applicable since that has better performance than querySelectorAll
* Added will-change for all moving pizzas on transform so that they get promoted to their own layer

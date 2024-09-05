// three arrays named as breakfastMenu, mainCourseMenu, and dessertMenu. Each array contains four menu items.

const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak -$18', 'Pasta -$16', 'Burger -$16', 'Salmon -$18'];
const dessertMenu = ['Cake -$8', 'Ice Cream -$12', 'Pudding -$8', 'Fruit Salad -$8'];

// We will use for loop and two array methods: map method and forEach method to traverse through these arrays and display the menu items on the HTML page.
//Firstly, we are going to iterate through the breakfastMenu array using map method. Include the following code in restaurant_menu.js file.

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// The provided code converts breakfast menu array items into HTML strings using map() and an arrow function to structure each item's HTML format.
// Subsequently, a string concatenation method has been used to join the generated HTML strings into one cohesive string using join ('') to prepare for insertion.
// Finally, this concatenated HTML is dynamically updated within the specific HTML element identified by breakfastMenuItems ID with the concatenated HTML string, dynamically populating the webpage with the breakfast menu items in formatted paragraphs <p> tags.

// We are going to traverse mainCourseMenu array using forEach array method. For this, include the below code in the restaurant_menu.js file after the previous JavaScript code.

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// The variable mainCourseItem is initialized as an empty string (''). This variable will be used to accumulate HTML strings generated for each main course menu item.
// The forEach method loops through each element in the mainCourseMenu array. For each item in the array, the arrow function (item, index) => {…} is executed. Inside the arrow function, an HTML string is composed for each menu item, incorporating the item's content and its corresponding index.
// Then HTML content is updated dynamically by setting the innerHTML property of the HTML element with the ID maincourseMenuItems to the accumulated mainCourseItem string which will insert main course menu items into the specific element within the webpage.

// Lastly, we will iterate dessertMenu array using for loop iteration. For this include the below code in restaurant_menu.js file after the previous javaScript code.

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

// The variable dessertItem is initialized as an empty string (''). This variable serves as a container to accumulate HTML strings generated for each dessert menu item.
// The for loop iterates through the dessertMenu array, starting from index 0 and continuing until reaching the length of the array. For each iteration, an HTML string is created using the current item in the dessertMenu array, including the item's content and its index (i + 1).
// The generated HTML content, composed of individual paragraphs <p> containing dessert menu items with their respective indices, is assigned to the inner HTML of the HTML element identified by the ID dessertMenuItems which will insert the dessert menu items into the specific element within the webpage.
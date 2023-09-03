const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryNameElement = category.querySelector("h2");
  const categoryName = categoryNameElement.textContent;
  const categoryItems = category.querySelectorAll("ul li");
  const elementsCount = categoryItems.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});

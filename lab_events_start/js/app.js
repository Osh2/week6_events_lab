document.addEventListener('DOMContentLoaded', () => {
  const  bookInput = document.querySelector("#new-item-form");
  bookInput.addEventListener("submit", handleInput);


});

const handleInput = function(event) {
  event.preventDefault();
  const readingList = document.querySelector("#reading-list");
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const li = document.createElement("li")
  li.textContent = `Title: ${title} Author: ${author} Category:${category}` 
  readingList.append(li)
  event.target.reset()

}
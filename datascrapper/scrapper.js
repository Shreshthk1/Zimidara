let sectionParent = document.querySelectorAll(".MenuSection_section__inDfZ");
let menuData = [];

sectionParent.forEach(section => {
  let categoryString = section.firstChild.textContent.trim();
  let itemsArr = [];

  document.querySelectorAll(`[id = '${section.id}'] .styles_header__yv33i`).forEach(item => {
    let itemName = item.querySelector('h3').textContent.trim(); // Ensure it targets the correct element
    let itemPrice = item.querySelector('p').textContent.trim(); // Ensure it targets the correct element

    itemsArr.push({
      name: itemName,
      price: itemPrice,
    });
  });

  menuData.push({
    category: categoryString,
    items: [...itemsArr],
  });
});

console.log(menuData);
const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categori => {
  const categoriName = categori.querySelector('h2').textContent;
  console.log(`Category: ${categoriName}`);
  let list = categori.querySelectorAll('li').length;
  console.log(`Elements: ${list}`);
});

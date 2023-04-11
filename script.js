//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Queen'];

const articles = ['a', 'an', 'the'];

// Remove articles from the beginning of the band names
for (let i = 0; i < bandNames.length; i++) {
  let words = bandNames[i].split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
    bandNames[i] = words.join(' ');
  }
}

// Sort the band names in lexicographic order
bandNames.sort();

// Create list items for each band name and append to the unordered list
const bandList = document.getElementById('band');
for (let i = 0; i < bandNames.length; i++) {
  const li = document.createElement('li');
  li.innerText = bandNames[i];
  bandList.appendChild(li);
}


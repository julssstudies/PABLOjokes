let phrases = [];

fetch('phrases.txt')
  .then(response => response.text())
  .then(text => {
    phrases = text.split('\n').filter(line => line.trim() !== '');
  });

let lastIndex = -1; // Stores the last shown phrase index

function showRandomPhrase() {
  if (phrases.length === 0) {
    document.getElementById('phrase-box').textContent = 'No hay PABLOjokes disponibles.';
    return;
  }

  let randomIndex;

  // Avoid repeating the same index as last time
  do {
    randomIndex = Math.floor(Math.random() * phrases.length);
  } while (phrases.length > 1 && randomIndex === lastIndex);

  lastIndex = randomIndex;
  document.getElementById('phrase-box').textContent = phrases[randomIndex];
}

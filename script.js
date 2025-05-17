let phrases = [];

fetch('phrases.txt')
  .then(response => response.text())
  .then(text => {
    phrases = text.split('\n').filter(line => line.trim() !== '');
  });

function showRandomPhrase() {
  if (phrases.length === 0) {
    document.getElementById('phrase-box').textContent = 'No hay PABLOjokes disponibles.';
    return;
  }
  const randomIndex = Math.floor(Math.random() * phrases.length);
  document.getElementById('phrase-box').textContent = phrases[randomIndex];
}

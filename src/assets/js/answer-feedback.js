// Every evaluated answer carries its result in text as well as its border/fill.
export function markAnswer(button, correct, selected = false) {
  button.querySelector('.answer-result')?.remove();
  button.classList.toggle('right', correct);
  button.classList.toggle('wrong', !correct);
  button.dataset.answerState = correct ? 'correct' : 'incorrect';
  const label = document.createElement('span');
  label.className = 'answer-result';
  const icon = document.createElement('span');
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = correct ? '✓' : '×';
  const text = document.createElement('span');
  text.textContent = correct
    ? (selected ? 'Your answer — correct' : 'Correct answer')
    : 'Your answer — incorrect';
  label.append(icon, text);
  button.append(label);
}

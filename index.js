const sentences = [
  "Failure Analysis Engineer.",
  "Machine Learning Enthusiast.",
  "Build, Fix, Automate, Repeat!"
];

const typedText = document.getElementById("typed-text");
let sentenceIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  const currentSentence = sentences[sentenceIndex];

  if (typing) {
    if (charIndex < currentSentence.length) {
      typedText.textContent += currentSentence.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typing = false;
      setTimeout(type, 1500); // Pause before deleting
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = currentSentence.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      typing = true;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      setTimeout(type, 500); // Pause before typing next
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

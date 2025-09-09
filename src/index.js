const form = document.getElementById("generator-form");
const instructionInput = document.getElementById("instruction");
const outputBox = document.getElementById("output-box");

const samples = {
  poem: [
    "Roses are red,\nViolets are blue,\nYour dreams are vast,\nAnd they’ll come true.",
    "In quiet nights, the stars will glow,\nGuiding hearts to where they’ll go."
  ],
  joke: [
    "Why don’t programmers like nature? It has too many bugs!",
    "I told my computer I needed a break, and it froze!"
  ],
  recipe: [
    "Recipe Idea: Avocado Toast 🥑🍞\n1. Toast bread\n2. Smash avocado with lemon\n3. Spread & enjoy!",
    "Quick Pasta 🍝\n1. Boil pasta\n2. Add olive oil, garlic, chili\n3. Mix & serve!"
  ],
  quote: [
    "“The best way to predict the future is to invent it.” – Alan Kay",
    "“Do not wait to strike till the iron is hot, but make it hot by striking.” – William Butler Yeats"
  ],
  travel: [
    "✨ Travel Idea: Kyoto, Japan – explore temples, cherry blossoms, and tea houses.",
    "✨ Travel Idea: Cape Town, South Africa – hike Table Mountain and enjoy the ocean breeze."
  ]
};

function generateContent(instruction) {
  const text = instruction.toLowerCase();
  let category;

  if (text.includes("poem")) category = "poem";
  else if (text.includes("joke")) category = "joke";
  else if (text.includes("recipe")) category = "recipe";
  else if (text.includes("quote")) category = "quote";
  else if (text.includes("travel")) category = "travel";

  if (category) {
    const options = samples[category];
    return options[Math.floor(Math.random() * options.length)];
  }

  return "Sorry, I couldn’t understand your request. Try asking for a poem, joke, recipe, quote, or travel idea.";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const instruction = instructionInput.value.trim();

  if (!instruction) {
    outputBox.textContent = "⚠️ Please enter an instruction.";
    return;
  }

  const result = generateContent(instruction);
  outputBox.textContent = result;
});
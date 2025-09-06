new ClipboardJS('.copy-btn');

const form = document.getElementById("aiForm");
const userInput = document.getElementById("userInput");
const output = document.getElementById("aiOutput");
const loading = document.getElementById("loading");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const prompt = userInput.value.trim();
  if (!prompt) return;

  loading.style.display = "block";
  output.textContent = "";

  try {

    const response = await axios.post(
      "https://wordsapiv1.p.rapidapi.com/words/lovely/synonyms",
      { inputs: prompt },
      {
        headers: {
          Authorization: "9d8385fa0emsh4b20233cc5aef39p142783jsnc20b11a14b30", 
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data[0] && response.data[0].generated_text) {
      output.textContent = response.data[0].generated_text;
    } else {
      output.textContent = "No response from AI. Try again.";
    }
  } catch (error) {
    output.textContent = "Error: " + error.message;
  }

  loading.style.display = "none";
});
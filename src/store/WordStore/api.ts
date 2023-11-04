const fetchTextFile = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch text file");
  }
  return response.text();
};

const getRandomWord = async () => {
  try {
    const text = await fetchTextFile("english.txt");
    const words = text.split("\n");
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex].trim();
    return randomWord;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const fetchWord = async () => {
  let word;
  let data;

  while (true) {
    try {
      word = await getRandomWord();
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          console.log("Retrying fetchWord...");
          continue; // Continue the loop to retry
        } else {
          throw new Error("Failed to fetch word");
        }
      }

      data = await response.json();
      break; // If the fetch was successful, exit the loop
    } catch (error) {
      console.error("Error:", error);

      if (error instanceof Error && error.name === "AbortError") {
        console.log("Retrying fetchWord...");
      } else {
        break; // If it's not a 404 error, exit the loop
      }
    }
  }

  return data;
};

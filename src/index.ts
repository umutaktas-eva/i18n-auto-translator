import { translate } from "./translate.js";

const texts = [
  "Hello",
  "How are you?",
  "I'm fine, thank you.",
  "And you?",
  "I'm fine too.",
  "Goodbye",
  "See you later",
  "Good night",
  "Good morning",
  "Good afternoon",
  "Good evening",
  "Have a nice day",
  "Have a nice weekend",
  "Have a nice week",
  "Have a nice month",
  "Have a nice year",
  "Have a nice life",
  "Have a nice day",
  "Have a nice weekend",
  "Have a nice week",
];

for await (const text of texts) {
  const result = await translate(text, "tr");
  console.log(text, result.text);
}

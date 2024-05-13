
// unfortunately the lib comes with some words
// that, when combined, could create some bad buzz
export const sensitiveTopics = [
  "The Pope",
  "gag",
  "sadist",
  "actress",
  "razor",
  "female",
  "destroyer",
  "prisonner",
  "rib",
  "cultist",
  "candy",
  "candies",
  "skull",
  "injury",
  "lungs",
  "field",
  "child",
  "kid",
  "walk",
  "stranger",
  "children",
  "faker",
  "fake",
  "curse",
  "scissor",
  "hobo",
  "maniac",
  "drug",
  "gang",
  "predator",
  "hostage",
  "cutthroat",
  "swallow",
  "shotgun",
  "gun",
  "pickaxe",
  "clergymen",
  "clergyman",
  "clergy",
  "dictator",
  "microbe",
  "convict",
  "sniper",
  "skeleton",
  "aborigine",
  "skirt",
  "thug",
  "thief",
  "handgun",
  "executioner",
  "beast",
  "nymph",
  "rabbis",
  "rabbies",
  "rabbi",
  "giblet",
  "prisoner",
  "machine gun",
  "infant",
  "crucifix",
  "hatchet",
  "beggar",
  "indian",
  "japanese",
  "corrupted",
  "russian",
  "italian",
  "greek",
  "bandit",
  "vulture",
  "scavenger",
  "hacksaw",
  "chick"
]

export function filterSensitiveContent(words: string[], badWords: string[] = sensitiveTopics): string[] {
  return words.filter(x => !badWords.some(y => y.toLowerCase().startsWith(x.toLowerCase().trim())))
}
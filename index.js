function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShourt(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

functoin sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!"
  }
  if (string === shout(string)) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.")
    return "I love you, too."
}
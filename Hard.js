const targetWords = [
    "rebut",
    "sissy",
    "humph",
    "awake",
    "rusty",
    "retro",
    "droll",
    "gawky",
    "hutch",
    "pinto",
    "gaily",
    "egret",
    "lilac",
    "sever",
    "field",
    "fluff",
    "hydro",
    "flack",
    "agape",
    "wench",
    "voice",
    "stead",
    "stalk",
    "berth",
    "madam",
    "night",
    "bland",
    "liver",
    "wedge",
    "augur",
    "roomy",
    "wacky",
    "flock",
    "angry",
    "bobby",
    "trite",
    "aphid",
    "tryst",
    "midge",
    "power",
    "elope",
    "cinch",
    "motto",
    "stomp",
    "upset",
    "bluff",
    "cramp",
    "quart",
    "coyly",
    "youth",
    "rhyme",
    "buggy",
    "alien",
    "smear",
    "unfit",
    "patty",
    "cling",
    "glean",
    "label",
    "hunky",
    "khaki",
    "poker",
    "gruel",
    "twice",
    "twang",
    "shrug",
    "treat",
    "unlit",
    "waste",
    "merit",
    "woven",
    "octal",
    "needy",
    "clown",
    "widow",
    "irony",
    "ruder",
    "gauze",
    "chief",
    "onset",
    "prize",
    "fungi",
    "charm",
    "gully",
    "inter",
    "whoop",
    "taunt",
    "leery",
    "class",
    "theme",
    "lofty",
    "tibia",
    "booze",
    "alpha",
    "thyme",
    "eclat",
    "doubt",
    "parer",
    "chute",
    "stick",
    "trice",
    "alike",
    "sooth",
    "recap",
    "saint",
    "liege",
    "glory",
    "grate",
    "admit",
    "brisk",
    "soggy",
    "usurp",
    "scald",
    "scorn",
    "leave",
    "twine",
    "sting",
    "bough",
    "marsh",
    "sloth",
    "dandy",
    "vigor",
    "howdy",
    "enjoy",
    "valid",
    "ionic",
    "equal",
    "unset",
    "floor",
    "catch",
    "spade",
    "stein",
    "exist",
    "quirk",
    "denim",
    "grove",
    "spiel",
    "mummy",
    "fault",
    "foggy",
    "flout",
    "carry",
    "sneak",
    "libel",
    "waltz",
    "aptly",
    "piney",
    "inept",
    "aloud",
    "photo",
    "dream",
    "stale",
    "vomit",
    "ombre",
    "fanny",
    "unite",
    "snarl",
    "baker",
    "there",
    "glyph",
    "pooch",
    "hippy",
    "spell",
    "folly",
    "louse",
    "gulch",
    "vault",
    "godly",
    "threw",
    "fleet",
    "grave",
    "inane",
    "shock",
    "crave",
    "spite",
    "valve",
    "skimp",
    "claim",
    "rainy",
    "musty",
    "pique",
    "daddy",
    "quasi",
    "arise",
    "aging",
    "valet",
    "opium",
    "avert",
    "stuck",
    "recut",
    "mulch",
    "genre",
    "plume",
    "rifle",
    "count",
    "incur",
    "total",
    "wrest",
    "mocha",
    "deter",
    "study",
    "lover",
    "safer",
    "rivet",
    "funny",
    "smoke",
    "mound",
    "undue",
    "sedan",
    "pagan",
    "swine",
    "guile",
    "gusty",
    "equip",
    "tough",
    "canoe",
    "chaos",
    "covet",
    "human",
    "udder",
    "lunch",
    "blast",
    "stray",
    "manga",
    "melee",
    "lefty",
    "quick",
    "paste",
    "given",
    "octet",
    "risen",
    "groan",
    "leaky",
    "grind",
    "carve",
    "loose",
    "sadly",
    "spilt",
    "apple",
    "slack",
    "honey",
    "final",
    "sheen",
    "eerie",
    "minty",
    "slick",
    "derby",
    "wharf",
    "spelt",
    "coach",
    "erupt",
    "singe",
    "price",
    "spawn",
    "fairy",
    "jiffy",
    "filmy",
    "stack",
    "chose",
    "sleep",
    "ardor",
    "nanny",
    "niece",
    "woozy",
    "handy",
    "grace",
    "ditto",
    "stank",
    "cream",
    "usual",
    "diode",
    "valor",
    "angle",
    "ninja",
    "muddy",
    "chase",
    "reply",
    "prone",
    "spoil",
    "heart",
    "shade",
    "diner",
    "arson",
    "onion",
    "sleet",
    "dowel",
    "couch",
    "palsy",
    "bowel",
    "smile",
    "evoke",
    "creek",
    "lance",
    "eagle",
    "idiot",
    "siren",
    "built",
    "embed",
    "award",
    "dross",
    "annul",
    "goody",
    "frown",
    "patio",
    "laden",
    "humid",
    "elite",
    "lymph",
    "edify",
    "might",
    "reset",
    "visit",
    "gusto",
    "purse",
    "vapor",
    "crock",
    "write",
    "sunny",
    "loath",
    "chaff",
    "slide",
    "queer",
    "venom",
    "stamp",
    "sorry",
    "still",
    "acorn",
    "aping",
    "pushy",
    "tamer",
    "hater",
    "mania",
    "awoke",
    "brawn",
    "swift",
    "exile",
    "birch",
    "lucky",
    "freer",
    "risky",
    "ghost",
    "plier",
    "lunar",
    "winch",
    "snare",
    "nurse",
    "house",
    "borax",
    "nicer",
    "lurch",
    "exalt",
    "about",
    "savvy",
    "toxin",
    "tunic",
    "pried",
    "inlay",
    "chump",
    "lanky",
    "cress",
    "eater",
    "elude",
    "cycle",
    "kitty",
    "boule",
    "moron",
    "tenet",
    "place",
    "lobby",
    "plush",
    "vigil",
    "index",
    "blink",
    "clung",
    "qualm",
    "croup",
    "clink",
    "juicy",
    "stage",
    "decay",
    "nerve",
    "flier",
    "shaft",
    "crook",
    "clean",
    "china",
    "ridge",
    "vowel",
    "gnome",
    "snuck",
    "icing",
    "spiny",
    "rigor",
    "snail",
    "flown",
    "rabid",
    "prose",
    "thank",
  ]


  const dictionary = [
    "rebut",
    "sissy",
    "humph",
    "awake",
    "rusty",
    "retro",
    "droll",
    "gawky",
    "hutch",
    "pinto",
    "gaily",
    "egret",
    "lilac",
    "sever",
    "field",
    "fluff",
    "hydro",
    "flack",
    "agape",
    "wench",
    "voice",
    "stead",
    "stalk",
    "berth",
    "madam",
    "night",
    "bland",
    "liver",
    "wedge",
    "augur",
    "roomy",
    "wacky",
    "flock",
    "angry",
    "bobby",
    "trite",
    "aphid",
    "tryst",
    "midge",
    "power",
    "elope",
    "cinch",
    "motto",
    "stomp",
    "upset",
    "bluff",
    "cramp",
    "quart",
    "coyly",
    "youth",
    "rhyme",
    "buggy",
    "alien",
    "smear",
    "unfit",
    "patty",
    "cling",
    "glean",
    "label",
    "hunky",
    "khaki",
    "poker",
    "gruel",
    "twice",
    "twang",
    "shrug",
    "treat",
    "unlit",
    "waste",
    "merit",
    "woven",
    "octal",
    "needy",
    "clown",
    "widow",
    "irony",
    "ruder",
    "gauze",
    "chief",
    "onset",
    "prize",
    "fungi",
    "charm",
    "gully",
    "inter",
    "whoop",
    "taunt",
    "leery",
    "class",
    "theme",
    "lofty",
    "tibia",
    "booze",
    "alpha",
    "thyme",
    "eclat",
    "doubt",
    "parer",
    "chute",
    "stick",
    "trice",
    "alike",
    "sooth",
    "recap",
    "saint",
    "liege",
    "glory",
    "grate",
    "admit",
    "brisk",
    "soggy",
    "usurp",
    "scald",
    "scorn",
    "leave",
    "twine",
    "sting",
    "bough",
    "marsh",
    "sloth",
    "dandy",
    "vigor",
    "howdy",
    "enjoy",
    "valid",
    "ionic",
    "equal",
    "unset",
    "floor",
    "catch",
    "spade",
    "stein",
    "exist",
    "quirk",
    "denim",
    "grove",
    "spiel",
    "mummy",
    "fault",
    "foggy",
    "flout",
    "carry",
    "sneak",
    "libel",
    "waltz",
    "aptly",
    "piney",
    "inept",
    "aloud",
    "photo",
    "dream",
    "stale",
    "vomit",
    "ombre",
    "fanny",
    "unite",
    "snarl",
    "baker",
    "there",
    "glyph",
    "pooch",
    "hippy",
    "spell",
    "folly",
    "louse",
    "gulch",
    "vault",
    "godly",
    "threw",
    "fleet",
    "grave",
    "inane",
    "shock",
    "crave",
    "spite",
    "valve",
    "skimp",
    "claim",
    "rainy",
    "musty",
    "pique",
    "daddy",
    "quasi",
    "arise",
    "aging",
    "valet",
    "opium",
    "avert",
    "stuck",
    "recut",
    "mulch",
    "genre",
    "plume",
    "rifle",
    "count",
    "incur",
    "total",
    "wrest",
    "mocha",
    "deter",
    "study",
    "lover",
    "safer",
    "rivet",
    "funny",
    "smoke",
    "mound",
    "undue",
    "sedan",
    "pagan",
    "swine",
    "guile",
    "gusty",
    "equip",
    "tough",
    "canoe",
    "chaos",
    "covet",
    "human",
    "udder",
    "lunch",
    "blast",
    "stray",
    "manga",
    "melee",
    "lefty",
    "quick",
    "paste",
    "given",
    "octet",
    "risen",
    "groan",
    "leaky",
    "grind",
    "carve",
    "loose",
    "sadly",
    "spilt",
    "apple",
    "slack",
    "honey",
    "final",
    "sheen",
    "eerie",
    "minty",
    "slick",
    "derby",
    "wharf",
    "spelt",
    "coach",
    "erupt",
    "singe",
    "price",
    "spawn",
    "fairy",
    "jiffy",
    "filmy",
    "stack",
    "chose",
    "sleep",
    "ardor",
    "nanny",
    "niece",
    "woozy",
    "handy",
    "grace",
    "ditto",
    "stank",
    "cream",
    "usual",
    "diode",
    "valor",
    "angle",
    "ninja",
    "muddy",
    "chase",
    "reply",
    "prone",
    "spoil",
    "heart",
    "shade",
    "diner",
    "arson",
    "onion",
    "sleet",
    "dowel",
    "couch",
    "palsy",
    "bowel",
    "smile",
    "evoke",
    "creek",
    "lance",
    "eagle",
    "idiot",
    "siren",
    "built",
    "embed",
    "award",
    "dross",
    "annul",
    "goody",
    "frown",
    "patio",
    "laden",
    "humid",
    "elite",
    "lymph",
    "edify",
    "might",
    "reset",
    "visit",
    "gusto",
    "purse",
    "vapor",
    "crock",
    "write",
    "sunny",
    "loath",
    "chaff",
    "slide",
    "queer",
    "venom",
    "stamp",
    "sorry",
    "still",
    "acorn",
    "aping",
    "pushy",
    "tamer",
    "hater",
    "mania",
    "awoke",
    "brawn",
    "swift",
    "exile",
    "birch",
    "lucky",
    "freer",
    "risky",
    "ghost",
    "plier",
    "lunar",
    "winch",
    "snare",
    "nurse",
    "house",
    "borax",
    "nicer",
    "lurch",
    "exalt",
    "about",
    "savvy",
    "toxin",
    "tunic",
    "pried",
    "inlay",
    "chump",
    "lanky",
    "cress",
    "eater",
    "elude",
    "cycle",
    "kitty",
    "boule",
    "moron",
    "tenet",
    "place",
    "lobby",
    "plush",
    "vigil",
    "index",
    "blink",
    "clung",
    "qualm",
    "croup",
    "clink",
    "juicy",
    "stage",
    "decay",
    "nerve",
    "flier",
    "shaft",
    "crook",
    "clean",
    "china",
    "ridge",
    "vowel",
    "gnome",
    "snuck",
    "icing",
    "spiny",
    "rigor",
    "snail",
    "flown",
    "rabid",
    "prose",
    "thank",
  ]
  
  const WORD_LENGTH = 5
  const FLIP_ANIMATION_DURATION = 500
  const DANCE_ANIMATION_DURATION = 500
  const keyboard = document.querySelector("[data-keyboard]")
  const alertContainer = document.querySelector("[data-alert-container]")
  const guessGrid = document.querySelector("[data-guess-grid]")
  const offsetFromDate = new Date(2022, 1, 1)
  const msOffset = Date.now() - offsetFromDate
  const dayOffset = msOffset / 1000 / 60 / 60 / 24
  //const targetWord = targetWords[Math.floor(dayOffset)]
  const targetWord = targetWords[Math.floor(Math.random()*10)]
  
  startInteraction()
  
  function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
  }
  
  function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
  }
  
  function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
      pressKey(e.target.dataset.key)
      return
    }
  
    if (e.target.matches("[data-enter]")) {
      submitGuess()
      return
    }
  
    if (e.target.matches("[data-delete]")) {
      deleteKey()
      return
    }
  }
  
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      submitGuess()
      return
    }
  
    if (e.key === "Backspace" || e.key === "Delete") {
      deleteKey()
      return
    }
  
    if (e.key.match(/^[a-z]$/)) {
      pressKey(e.key)
      return
    }
  }
  
  function pressKey(key) {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
  }
  
  function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
  }
  
  function submitGuess() {
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length !== WORD_LENGTH) {
      showAlert("Not enough letters")
      shakeTiles(activeTiles)
      return
    }
  
    const guess = activeTiles.reduce((word, tile) => {
      return word + tile.dataset.letter
    }, "")
  
    if (!dictionary.includes(guess)) {
      showAlert("Not in word list")
      shakeTiles(activeTiles)
      return
    }
  
    stopInteraction()
    activeTiles.forEach((...params) => flipTile(...params, guess))
  }
  
  function flipTile(tile, index1, array, guess) {
    const letter = tile.dataset.letter
    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    setTimeout(() => {
      tile.classList.add("flip")
    }, (index1 * FLIP_ANIMATION_DURATION) / 2)
  
    tile.addEventListener(
      "transitionend",
      () => {
        tile.classList.remove("flip")
        if (targetWord[index1] === letter) {
          tile.dataset.state = "correct"
          key.classList.add("correct")
        } else if (targetWord.includes(letter)) {
          tile.dataset.state = "wrong-location"
          key.classList.add("wrong-location")
        } else {
          tile.dataset.state = "wrong"
          key.classList.add("wrong")
        }
  
        if (index1 === array.length - 1) {
          tile.addEventListener(
            "transitionend",
            () => {
              startInteraction()
              checkWinLose(guess, array)
            },
            { once: true }
          )
        }
      },
      { once: true }
    )
  }
  
  function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]')
  }
  
  function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return
  
    setTimeout(() => {
      alert.classList.add("hide")
      alert.addEventListener("transitionend", () => {
        alert.remove()
      })
    }, duration)
  }
  
  function shakeTiles(tiles) {
    tiles.forEach(tile => {
      tile.classList.add("shake")
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("shake")
        },
        { once: true }
      )
    })
  }
  
  function checkWinLose(guess, tiles) {
    if (guess === targetWord) {
      showAlert("You Win", 5000)
      danceTiles(tiles)
      stopInteraction()
      return
    }
  
    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
    if (remainingTiles.length === 0) {
      showAlert(targetWord.toUpperCase(), null)
      stopInteraction()
    }
  }
  
  function danceTiles(tiles) {
    tiles.forEach((tile, index1) => {
      setTimeout(() => {
        tile.classList.add("dance")
        tile.addEventListener(
          "animationend",
          () => {
            tile.classList.remove("dance")
          },
          { once: true }
        )
      }, (index1 * DANCE_ANIMATION_DURATION) / 5)
    })
  }
  
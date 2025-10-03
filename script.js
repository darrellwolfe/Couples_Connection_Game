const spicyTruthPrompts = [
    "If we were to dress up in the bedroom, what character would you want to be?",
    "What is a sex position that you wish we would do more often?",
    "Do you ever try to catch a glimpse of me naked when I'm not looking?",
    "How do you feel about sexting? Is it something you would want to do?",
    "Do you like tongue when we kiss? Or closed mouth?",
    "Do you like to play music while we make love? What kind?",
    "If we could have sex outside without anyone seeing, where would it be?",
    "What is your favorite foreplay move?",
    "Describe to me in detail one of our sexual encounters.",
    "If you had a bottle of chocolate syrup right now, what would you do with it?",
    "Tell me what I wear that you find most sexy on me.",
    "Give me 2 reasons that you really like me.",
    "What is the funniest thing you think we've done during sex?",
    "If I could kiss you anywhere right this second, where would you want it to be?",
    "Is there a specific type of clothing you wish I would wear in the bedroom more often?",
    "Heels on or off during our intimate times?",
    "If you could take me anywhere right now to have sex, where would it be?",
    "Do you like looking in my eyes when I'm giving you oral?",
    "Tell me about my most attractive feature.",
    "What's a secret fantasy you've never told anyone until now?",
    "If we made a sex tape together, what scene or theme would you want to act out?",
    "What part of your body do you wish I paid more attention to?",
    "Do you enjoy when I take charge, or when I ask permission?",
    "Have you ever had a dream about us? What happened?",
    "What's the hottest thing I've ever said to you?",
    "Would you rather tease or be teased?",
    "What's something naughty you've thought about doing in public?",
    "How do you feel when I undress you slowly?",
    "What's your favorite scent or smell that turns you on?",
    "Have you ever fantasized about using toys together?",
    "Would you rather a slow, sensual session or a rough, fast one?",
    "Have you ever imagined us doing it somewhere totally unexpected?",
    "What is one compliment I've given you that turned you on?",
    "When did you first realize you were physically attracted to me?",
    "What is something sexy I do that I don't even realize I do?",
    "How would you describe your ideal seduction scene?",
    "Do you prefer morning, midday, or nighttime intimacy?",
    "What's your favorite sound I make when we're intimate?",
    "Do you ever fantasize about role play? What kind?",
    "Is there an outfit you'd love to see me wear just for you?",
    "Have you ever wanted to do something risky but held back?",
    "What kind of touch turns you on the fastest?",
    "What's a non-sexual thing I do that makes you want me?",
    "Would you ever be interested in blindfold play?",
    "What part of my body would you like to explore more?",
    "Do you like being watched, or watching me?",
    "If you could replay one night with me, which one would it be?",
    "How do you feel when I whisper in your ear?",
    "What's one phrase or word that instantly turns you on?",
    "Do you like being told exactly what to do in bed?",
    "What's a favorite thing I've done for you after sex?",
    "What would you do if I started teasing you under the table?",
    "Would you rather make out passionately or have fast, hungry kisses?",
    "If I came home wearing only lingerie or boxers, what would you do?",
    "What's the sexiest dream you've ever had about me?",
    "Is there a scent, lotion, or candle that turns you on?",
    "What do you think about when I'm not around?",
    "Do you like dirty talk, or more subtle hints?",
    "What's something that would push your boundaries, but still turn you on?",
    "If we had a weekend alone, what would you want to do together?",
    "What kind of foreplay gets you the most ready?",
    "Do you ever replay moments of us in your mind?",
    "Is there a piece of clothing you'd love to tear off me?",
    "How do you feel about mutual massages with oil?",
    "What's something sensual you want to learn with me?",
    "Would you ever want to surprise me with something sexual?",
    "What turns you on that you think most people wouldn't understand?",
    "Would you ever want to try silent intimacy - no talking, just touch?",
    "What's a private fantasy that feels too wild to say out loud?"
];

const mildTruthPrompts = [
    "What's one of your happiest memories of us together?",
    "What's something small I do that makes you feel loved?",
    "If we could travel anywhere together, where would you want to go?",
    "What does your perfect weekend with me look like?",
    "What's a habit I have that you secretly find adorable?",
    "What's something I do that always makes you smile?",
    "What was your first impression of me?",
    "What's one way I've helped you grow as a person?",
    "What's something you've always wanted to try together (non-sexual)?",
    "What song makes you think of me?",
    "What's a dream you have for our future?",
    "What's one tradition you'd love for us to start?",
    "What kind of date nights do you enjoy most?",
    "What's a movie or show you'd love to watch together?",
    "What's a skill you have that you'd love to teach me?",
    "When did you feel most seen or understood by me?",
    "What do you appreciate most about our relationship?",
    "What's something we've done together that made you laugh a lot?",
    "How do you feel most cared for - through words, touch, quality time, etc.?",
    "What's something about your childhood you want me to know?",
    "Who in your life modeled healthy love well, and why?",
    "What's something you admire about how I handle stress?",
    "How do you know when I'm having a hard day?",
    "If we could have any pet together, what would it be?",
    "What's a food or recipe you'd love us to try making together?",
    "What's something I do that you'd love for me to keep doing forever?",
    "If you wrote a love letter to me, what's one sentence you'd include?",
    "What's a memory of us that still gives you butterflies?",
    "What's something new we should learn together?",
    "What's your idea of a relaxing day off with me?",
    "What kind of environment makes you feel most at peace?",
    "If you could relive one day with me, which one would it be?",
    "What do you want to feel more often in our relationship?",
    "What's something you wish I knew, but never said?",
    "What's your love language - and what's mine?",
    "What does being home mean to you?",
    "What's something I do that makes you feel safe?",
    "If we were characters in a book, what kind of story would it be?",
    "What's your favorite thing about how we handle conflict?",
    "How do you know when I'm proud of you?",
    "What's one value we share that's important to you?",
    "What's something silly you love about our relationship?",
    "What kind of couple do you think we'll be in 10 years?",
    "If we had a themed date night, what theme would you choose?",
    "What's your favorite compliment I've ever given you?",
    "What's a random hobby you'd love us to try for fun?",
    "If we had our own couples podcast, what would it be about?",
    "What's one thing you want to get better at in our relationship?",
    "When do you feel the most us?",
    "What does commitment look like to you, day-to-day?"
];

const spicyDarePrompts = [
    "Lick any part of my body that you want to. Stop after 30 seconds.",
    "Kiss me for 20 seconds.",
    "Take video of you giving me oral for 30 seconds. Let's watch it together before we go on.",
    "Pick a place on my body and kiss it for a minute.",
    "Sing me a few words from your favorite love song.",
    "Do anything you want with me for 1 minute and then stop.",
    "Bend over and touch your toes while standing in front of me.",
    "Twerk up against me for as long as you can stand it.",
    "Put on your favorite song and let's dance together.",
    "Stand in front of the mirror with me while we both do not have clothes on.",
    "Take a picture of us kissing.",
    "Focus on my bottom for 30 seconds. Do what you like.",
    "Tell me how to pose and snap a picture of me.",
    "Have sex with me for 1 minute and then stop and resume foreplay.",
    "Run your hands all over my body one time.",
    "Use a piece of cloth or feather and lightly rub it over me.",
    "Sit in my lap anyway you like for a minute.",
    "Pleasure me for one minute in a way you know I like.",
    "Have sex with me in one position for 2 minutes and then switch positions.",
    "Whisper something dirty in my ear and then act it out.",
    "Send me a voice memo describing your favorite memory of us in bed.",
    "Remove one item of clothing slowly while making eye contact.",
    "Pretend you're a stranger trying to seduce me for 5 minutes.",
    "Trace a heart on my body using just your lips.",
    "Give me a slow 60-second lap dance.",
    "Undress me using only your mouth (as much as possible).",
    "Tie my hands using a soft scarf and tease me for 2 minutes.",
    "Take a shower together and wash each other thoroughly.",
    "Choose one body part and worship it with your hands or mouth for 2 minutes.",
    "Play 'Simon Says' but make it sexy.",
    "Call me a pet name and tell me something naughty you'd do to me.",
    "Use an ice cube on me anywhere you choose.",
    "Act out your favorite scene from a romance movie - but make it spicier.",
    "Blindfold me and feed me three different treats - guess what they are.",
    "Wear nothing but a blanket and flash me whenever I say 'please.'",
    "Give me a strip tease with a song of your choice.",
    "Tease me for 3 minutes without kissing me on the lips.",
    "Draw a heart somewhere on my body with your tongue.",
    "Put your hands behind your back and kiss me like you mean it.",
    "Act out a scene where you're seducing me for the first time.",
    "Do your best slow-motion walk toward me like you're in a perfume ad.",
    "Give me a slow, sensual neck kiss while whispering sweet things.",
    "Create a mini photo shoot with sexy poses for me.",
    "Lick or kiss a part of my body alphabetically (A to Z).",
    "Do 5 sexy yoga poses while I watch.",
    "Light a candle, turn off the lights, and dance for me.",
    "Use a massage oil and give me a 2-minute sensual massage.",
    "Act out your favorite seduction fantasy from a movie or book.",
    "Lick honey or whipped cream off any body part.",
    "Put on a piece of my clothing and do something sexy in it.",
    "Send me a sext you've never said before (while in the room).",
    "Sit on my lap and grind gently while making soft sounds.",
    "Trace shapes on my back and make me guess what they are.",
    "Read me a sexy passage from a book like it's a bedtime story.",
    "Play a quick game of hot and cold where hot equals kisses.",
    "Show me how you want to be kissed tonight.",
    "Lick or kiss around (but not on) my lips for 30 seconds.",
    "Lightly spank me while telling me something naughty.",
    "Use only your breath to tease my neck, chest, and thighs.",
    "Have me sit down, then straddle me and make me blush.",
    "Wrap a blanket around both of us and get handsy under it.",
    "Lock eyes and pleasure yourself for 30 seconds.",
    "Sit silently and undress each other using only eye contact and hands.",
    "Tell me a fantasy using just one word at a time.",
    "Write a sexy message on my skin using your finger.",
    "Roleplay as strangers in a hotel room and introduce yourself.",
    "Lightly scratch my back, chest, or thighs - slowly.",
    "Have me guess where you're going to kiss next - and then do it.",
    "End this game by making out like teenagers for 3 full minutes."
];

const mildDarePrompts = [
    "Draw a quick doodle of me and let me keep it.",
    "Pick a song and slow dance with me, even if there's no music.",
    "Share a compliment using only emojis.",
    "Speak in a goofy accent for the next two minutes.",
    "Give me a piggyback ride across the room.",
    "Take a silly couple selfie together - funniest face wins.",
    "Act out a scene from your favorite childhood movie.",
    "Make up a new handshake for us.",
    "Read a random sentence from a book in your sexiest voice.",
    "Let me braid or play with your hair (if you have it!).",
    "Imitate me doing something I do regularly.",
    "Do 10 jumping jacks and then tell me something you love about me.",
    "Make a paper airplane and try to fly it to me.",
    "Tell me a joke - even if it's terrible.",
    "Share your villain laugh and rate it together.",
    "Let me pick your outfit from the closet (mildly ridiculous is ok).",
    "Build a 1-minute pillow fort together.",
    "Draw a heart somewhere on my body with your finger.",
    "Pretend we're doing a cooking show and explain how to make toast.",
    "Give me your best in love face - hold it for 5 seconds.",
    "Make a 30-second song about how amazing I am.",
    "Dance like no one's watching for 1 minute (yes, for real).",
    "Tell me 3 things you admire about me while holding my hands.",
    "Let me wrap you in a blanket like a burrito.",
    "Try to stare into my eyes for 30 seconds without laughing.",
    "Swap favorite songs and hum them to each other.",
    "Give me a foot rub or shoulder massage for 1 minute.",
    "Describe how you'd propose to me if we weren't married.",
    "Make a wish for us and whisper it in my ear.",
    "Write something sweet on a sticky note and hide it for me to find later.",
    "Do your best animal impression while saying 'I love you.'",
    "Make a funny voiceover for the other person's actions for 30 seconds.",
    "Share your silliest nickname for me (real or invented just now).",
    "Plan a pretend date on the moon - tell me what we'll do there.",
    "Let me take a photo of you making a goofy face.",
    "Give a one-minute TED talk on why I'm awesome.",
    "Make up a brand-new word and define it using me as the subject.",
    "Hug me like it's been 10 years since you saw me.",
    "Hide something in the room and give me 3 clues to find it.",
    "Let me choose your phone wallpaper for 24 hours.",
    "Take turns saying cheesy pickup lines until someone breaks.",
    "Tell me what you think our future kids' names would be.",
    "Find something in the room that reminds you of me and explain why.",
    "Try to draw a heart using your nose in the air.",
    "Say your favorite memory of us in a movie trailer voice.",
    "Share a fun what if scenario and act it out for 1 minute.",
    "Let me wear your hoodie or T-shirt for the rest of the night.",
    "Let's swap roles - pretend to be each other for 2 minutes.",
    "Dance with just your hands.",
    "End the game with a warm, silent hug for 30 seconds."
];

const indoorDatePrompts = [
    "Sing karaoke.",
    "Go dancing.",
    "Take a pottery-making class.",
    "Try axe throwing (indoor option).",
    "Play mini-golf (indoor option).",
    "Go shopping in vintage shops, record stores, or art galleries.",
    "Do Sunday brunch.",
    "Meet up for coffee.",
    "Find some live music at an indoor venue.",
    "Head to a bookstore.",
    "Go out for ice cream (indoor option).",
    "Explore your local thrift stores.",
    "Go to an arcade bar.",
    "Grab casual drinks.",
    "Go out for lunch.",
    "Find a record shop.",
    "Plan a dinner date night at home or a restaurant.",
    "See a comedy show.",
    "Book a spa day.",
    "Get a couple tattoo.",
    "Take a wine tasting tour (indoor or local bar option).",
    "See a band at an indoor venue.",
    "Relive your first date at an indoor location.",
    "Plan a staycation.",
    "Start a new tradition together indoors.",
    "Plan a date night surprise.",
    "Have a lunch hour date.",
    "Cook something new together.",
    "Frame your favorite photos.",
    "Go to a drive-in movie and watch from your car.",
    "Order a subscription box and open it together.",
    "Make it a double date at home or at a restaurant.",
    "Spook yourselves at a haunted house.",
    "Get crafty with paint and sip or DIY crafts.",
    "Host a game night.",
    "Start a blog together.",
    "Make holiday decorations.",
    "Take an aerial yoga class.",
    "Learn to trapeze at an indoor gym.",
    "Try indoor bouldering.",
    "Take a dance class.",
    "Take a cooking class.",
    "Escape from an escape room.",
    "Host a murder mystery night.",
    "Go to an arcade.",
    "Play board games.",
    "Visit a museum or science center.",
    "Start a couple's bucket list.",
    "Have an indoor picnic.",
    "Make playlists for each other.",
    "Read spooky stories by candlelight.",
    "Binge a TV series.",
    "Listen to a podcast together.",
    "Rearrange your living room for fun.",
    "Research your family history.",
    "Create a video montage or vlog.",
    "Make a slideshow from old photos.",
    "Read to one another.",
    "Make a TikTok together.",
    "Plan a movie night at home.",
    "Re-create a favorite class at home, like cooking or art.",
    "Volunteer together for an indoor activity like packing meals."
];

const outdoorDatePrompts = [
    "Plan a slow food picnic.",
    "Be adventurous with biking, hiking, or kayaking.",
    "Visit an amusement park.",
    "Drive a go kart.",
    "Tailgate at a sports event.",
    "Visit your local farmer's market.",
    "Go to the zoo or aquarium.",
    "Rent a convertible and take a scenic drive.",
    "Go horseback riding.",
    "Take a road trip.",
    "Try the alphabet date idea trend outdoors.",
    "Plan a park picnic.",
    "Stroll through botanical gardens.",
    "Go berry picking.",
    "Go apple picking.",
    "Go to a local fair or festival.",
    "Visit a Christmas tree farm.",
    "Tour wedding venues.",
    "Go antiquing at outdoor markets.",
    "Go glamping.",
    "Do a food truck tour.",
    "Take a photo walk.",
    "Plan a scavenger hunt.",
    "Try skydiving or an indoor wind tunnel as a hybrid.",
    "See a play at an outdoor theater.",
    "Watch a sports game live.",
    "Go to an outdoor art gallery or installation.",
    "Run a race together.",
    "Attend a charity event outdoors.",
    "Go to a trivia night at a local pub.",
    "Go on a garden tour.",
    "Do a wedding cake tasting while traveling.",
    "Ride a motorcycle.",
    "Celebrate an anniversary outdoors with a picnic, hike, or sunset.",
    "Go stargazing.",
    "Book a helicopter ride.",
    "Go leaf peeping.",
    "Head to a pumpkin patch.",
    "Sit by the water at a lake, river, or pond.",
    "Go on a ferry ride.",
    "Spend the day at the beach.",
    "Explore a new neighborhood.",
    "Ride public transport for fun or adventure.",
    "Try a winter sport like ice skating, sledding, or snowshoeing.",
    "Dine al fresco.",
    "Fly a kite.",
    "Attend an outdoor concert.",
    "Build a campfire.",
    "Watch a sunset."
];

const prompts = {
    truth: [...spicyTruthPrompts, ...mildTruthPrompts],
    dare: [...spicyDarePrompts, ...mildDarePrompts],
    indoor: indoorDatePrompts,
    outdoor: outdoorDatePrompts
};

const categoryLabels = {
    truth: "Truth",
    dare: "Dare",
    indoor: "Date Indoors",
    outdoor: "Date Outside"
};

const wheel = document.getElementById("wheel");
const card = document.getElementById("card");
const cardHeading = document.getElementById("card-heading");
const cardPrompt = document.getElementById("card-prompt");
const reshuffleButton = document.getElementById("reshuffle");
const spinTruthButton = document.getElementById("spin-truth");
const spinDareButton = document.getElementById("spin-dare");
const spinIndoorButton = document.getElementById("spin-indoor");
const spinOutdoorButton = document.getElementById("spin-outdoor");

const spinButtons = {
    truth: spinTruthButton,
    dare: spinDareButton,
    indoor: spinIndoorButton,
    outdoor: spinOutdoorButton
};

const segments = [
    { label: categoryLabels.truth, key: "truth" },
    { label: categoryLabels.dare, key: "dare" },
    { label: categoryLabels.indoor, key: "indoor" },
    { label: categoryLabels.outdoor, key: "outdoor" },
    { label: categoryLabels.truth, key: "truth" },
    { label: categoryLabels.dare, key: "dare" },
    { label: categoryLabels.indoor, key: "indoor" },
    { label: categoryLabels.outdoor, key: "outdoor" }
];

const segmentAngle = 360 / segments.length;
const segmentIndicesByCategory = Object.keys(categoryLabels).reduce((acc, key) => {
    acc[key] = [];
    return acc;
}, {});
segments.forEach((segment, index) => {
    segmentIndicesByCategory[segment.key].push(index);
});

let displayedRotation = 0;
let isSpinning = false;
let pendingCategory = null;
let lastTriggerButton = null;

const promptPool = Object.keys(prompts).reduce((acc, key) => {
    acc[key] = [];
    return acc;
}, {});

function shuffle(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

function refillPool(category) {
    promptPool[category] = shuffle([...prompts[category]]);
}

function drawPrompt(category) {
    if (!promptPool[category].length) {
        refillPool(category);
    }
    return promptPool[category].pop();
}

function setCard(categoryKey, text) {
    const label = categoryLabels[categoryKey] || "Prompt";
    cardHeading.textContent = label;
    cardPrompt.textContent = text;
    card.classList.remove("card--truth", "card--dare", "card--indoor", "card--outdoor");
    if (categoryKey && card.classList) {
        card.classList.add(`card--${categoryKey}`);
    }
}

function setButtonsDisabled(state) {
    Object.values(spinButtons).forEach(button => {
        button.disabled = state;
    });
}

function setActiveButton(category) {
    Object.entries(spinButtons).forEach(([key, button]) => {
        if (key === category) {
            button.classList.add("option--active");
        } else {
            button.classList.remove("option--active");
        }
    });
}

function requestSpin(category) {
    if (isSpinning) {
        return;
    }

    const triggerButton = spinButtons[category];
    lastTriggerButton = triggerButton;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const prompt = drawPrompt(category);
        setCard(category, prompt);
        triggerButton.focus({ preventScroll: true });
        return;
    }

    isSpinning = true;
    pendingCategory = category;

    setActiveButton(category);
    setButtonsDisabled(true);
    wheel.classList.add("spinning");
    wheel.setAttribute("aria-busy", "true");

    const categoryIndices = segmentIndicesByCategory[category];
    const selectedIndex = categoryIndices[Math.floor(Math.random() * categoryIndices.length)];
    const targetNormalized = (360 - (selectedIndex * segmentAngle + segmentAngle / 2)) % 360;

    const additionalTurns = 6 + Math.random() * 4;
    displayedRotation += additionalTurns * 360;
    const currentNormalized = ((displayedRotation % 360) + 360) % 360;
    const adjustment = ((targetNormalized - currentNormalized) + 360) % 360;
    displayedRotation += adjustment;

    wheel.style.setProperty("--rotation", `${displayedRotation}deg`);
}

function handleTransitionEnd(event) {
    if (event.propertyName !== "transform" || event.target !== wheel) {
        return;
    }
    if (!isSpinning) {
        return;
    }

    isSpinning = false;
    wheel.classList.remove("spinning");
    wheel.removeAttribute("aria-busy");
    setButtonsDisabled(false);
    setActiveButton(null);

    if (pendingCategory) {
        const prompt = drawPrompt(pendingCategory);
        setCard(pendingCategory, prompt);
    }

    pendingCategory = null;

    if (lastTriggerButton) {
        lastTriggerButton.focus({ preventScroll: true });
    }
    lastTriggerButton = null;
}

function reshufflePrompts() {
    if (isSpinning) {
        return;
    }

    Object.keys(prompts).forEach(refillPool);
    cardHeading.textContent = "Deck reshuffled";
    cardPrompt.textContent = "Pick any deck whenever you're ready for the next moment together.";
    card.classList.remove("card--truth", "card--dare", "card--indoor", "card--outdoor");
}

spinTruthButton.addEventListener("click", () => requestSpin("truth"));
spinDareButton.addEventListener("click", () => requestSpin("dare"));
spinIndoorButton.addEventListener("click", () => requestSpin("indoor"));
spinOutdoorButton.addEventListener("click", () => requestSpin("outdoor"));
wheel.addEventListener("transitionend", handleTransitionEnd);
reshuffleButton.addEventListener("click", reshufflePrompts);

// Prepare the initial pools so the first draw starts randomised.
reshufflePrompts();
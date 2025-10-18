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
    "What would initiating sex look like for you? Both me initiating, and you.",
    "Tell me what I wear that you find most sexy on me.",
    "Give me 2 reasons that you really like me.",
    "What is the funniest thing you think we've done during sex?",
    "If I could kiss you anywhere right this second, other than mouth, where would you want it to be?",
    "Is there a specific type of clothing you wish I would wear in the bedroom more often?",
    "Heels/Shoes on or off during our intimate times?",
    "If you could take me anywhere right now to have sex, where would it be?",
    "Do you like looking in my eyes when I'm giving you oral?",
    "Tell me about my most attractive feature.",
    "What's a secret fantasy you've never told anyone until now?",
    "What part of your body do you wish I paid more attention to?",
    "Do you enjoy when I take charge, or when I ask permission?",
    "Have you ever had a dream about us? What happened?",
    "What's the hottest thing I've ever said to you?",
    "What's the hottest thing anyone's ever said to you?",
    "Would you rather tease or be teased?",
    "What's something naughty you've thought about doing in a public place (hidden or not)?",
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
    "Lick any part of my body that you want to.",
    "Kiss me for as long as you want.",
    "Pick a place on my body and kiss it.",
    "Bend over and touch your toes while standing in front of me.",
    "Back up to me and move your body against mine for as long as you can stand it.",
    "Stand in front of the mirror with me while we both do not have clothes on.",
    "Tell me how what position or pose you want to see me, and I'll do that for you.",
    "Have penetration without movement, looking into each other's eye, and then stop and resume foreplay.",
    "Run your hands all over my body one time.",
    "Use a piece of cloth or feather and lightly rub it over me.",
    "Sit in my lap anyway you like for a minute.",
    "Pleasure me in a way you want to, without asking what I want for as long as you want.",
    "Have sex with me in one position and then switch positions.",
    "Whisper something dirty in my ear and then act it out.",
    "Describe your favorite memory of us being intimate.",
    "Remove one item of clothing slowly while making eye contact.",
    "Trace a heart on my body using just your lips.",
    "Give me a slow lap dance or similar body to body seduction movement.",
    "Undress me using only your mouth (as much as possible).",
    "Tie my hands using a soft scarf and tease me.",
    "Take a shower together and wash each other thoroughly and slowly.",
    "Choose one body part and worship it with your hands or mouth.",
    "Play 'Simon Says' but make it sexy.",
    "Call me a pet name and tell me something naughty you'd do to me.",
    "Use an ice cube on me anywhere you choose.",
    "Blindfold me and touch me with three random items in the room - guess what they are.",
    "Wear nothing but a blanket and show me parts of your body slowly, randomly.",
    "Give me a strip tease with a song of your choice.",
    "Tease me without kissing me on the lips.",
    "Draw a heart somewhere on my body with your tongue.",
    "Put your hands behind your back and kiss me like you mean it.",
    "Act like you're seducing me for the first time.",
    "Do your best slow-motion walk toward me like you're trying to seduce me from across the room.",
    "Give me a slow, sensual neck kiss while whispering sweet things.",
    "Lick or kiss a part of my body alphabetically (A to Z).",
    "Do sexy poses while I watch.",
    "Light a candle, turn off the lights, and dance naked (or strip dance) for me.",
    "Use a massage oil and give me a sensual massage for as long as you want.",
    "Lick chocolate, honey, or whipped cream off any body part or region.",
    "Sit on my lap and grind gently while making soft sounds.",
    "Trace shapes on my back and make me guess what they are.",
    "Play a quick game of hot and cold where hot equals kisses.",
    "Show me how you want to be kissed tonight.",
    "Lick or kiss around (but not on) my lips.",
    "Lightly spank me while telling me something naughty.",
    "Use only your breath to tease my neck, chest, and thighs.",
    "Have me sit down, then straddle me and make me blush.",
    "Wrap a blanket around both of us and get handsy under it.",
    "Lock eyes and pleasure yourself.",
    "Sit silently and undress each other using only eye contact and hands.",
    "Tell me a fantasy using just one word at a time.",
    "Write a sexy message on my skin using your finger.",
    "Roleplay as strangers in a hotel room and introduce yourself.",
    "Lightly scratch my back, chest, or thighs - slowly.",
    "Have me guess where you're going to kiss next - and then do it.",
    "Using only your fingertips, caress any parts of me you want for as long as you want.",
    "Tell me a story of any kind, even silly, while I touch you sensually and try to interrupt your ability to continue.",
    "Using hands, tongue, or both... touch around my sexual parts without actually touching them.",
    "Use a toy on me the way you want to.",
    "Do to me whatever I tell you to until I say stop, next, or your turn.",
    "Give me a sensual foot massage while I relax.",
    "Tell me something you want me to do to you that I either haven't done or haven't done in a while.",
    "Tell me something you want to do to me that you either haven't done or haven't done in a while.",
    "Show me how you want to be touched.",
    "Tell me something you are curious about trying with me, especially if you are afraid to say it out loud.",
    "Heat up oil or lotion, and use it to give me a sensual massage.",
    "Let me do whatever I want to you until you tell me to stop or change.",
    "Tie my hands and do whatever you want to me (within reason).",
    "Make me hot and bothered using only your words.",
    "Tease me with your fingers, but don't let me touch you back.",
    "Hold me close and whisper all the things you want to do to me later.",
    "Hold me against a bed or wall and kiss me passionately for as long as you can.",
    "Touch my lips with fruit or something edible and then kiss me.",

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

// Split indoor/outdoor dates into short/long by alternating items
const indoorDateShortPrompts = indoorDatePrompts.filter((_, i) => i % 2 === 0);
const indoorDateLongPrompts = indoorDatePrompts.filter((_, i) => i % 2 === 1);
const outdoorDateShortPrompts = outdoorDatePrompts.filter((_, i) => i % 2 === 0);
const outdoorDateLongPrompts = outdoorDatePrompts.filter((_, i) => i % 2 === 1);

// Local scavenger hunt ideas (expanded set)
const scavengerPrompts = [
    // Observation & Local Landmarks
    "Find a red door, a bench, and a street mural. Take a selfie at each.",
    "Locate a café, a lamppost, and a mailbox. Make up a mini story about each.",
    "Locate a local landmark and recreate a famous pose in front of it.",
    "Find a doorway with character and pose like you live there.",
    "Find a sign with a business established before 1970 and guess what it originally sold.",
    "Spot a weather vane or a public clock tower.",
    "Take a picture of a flag (not your home's) flying high.",
    "Find a 'Little Free Library' and pose reading a book.",
    "Find a historic plaque and read the first and last sentences aloud.",
    "Locate a fire hydrant and take a picture of it from a high angle.",
    "Find a street sign or marker that has been vandalized with art or stickers.",
    "Find the entrance to a public park or garden and describe the first thing you smell.",
    "Locate a street artist's signature (graffiti, chalk art, or sticker tag).",
    "Find a building with at least three different types of windows (e.g., arched, square, circular).",
    "Find a public water fountain (bonus points if it's currently running).",
    "Find a school crossing sign and pose crossing the street dramatically.",
    "Locate a bench dedicated to someone and imagine a memory they shared there.",

    // Shapes, Numbers, & Letters
    "Spot a star shape, a triangle, and a circle in the environment.",
    "Capture the numbers 1, 2, and 3 on signs in order.",
    "Find a hidden message: letters you can see that spell your names.",
    "Find the Alphabet: locate five consecutive letters on signs or plates (e.g., A, B, C, D, E) and snap them.",
    "Find the numbers 4, 5, and 6 on signs or buildings, each in a different color.",
    "Find a Roman numeral and identify its value.",
    "Spot a perfect square shape and a perfect sphere.",
    "Find a sign that uses a fancy script or cursive font.",
    "Find a single letter on a sign that is the same height as your hand.",
    "Find a sign that has been misspelled or had a letter fall off.",
    "Find the percent symbol (%) or the dollar sign ($) in the wild.",

    // Nature & Textures
    "Collect three leaf shapes together and arrange them into a heart.",
    "Take a photo of three different textures: brick, metal, and wood.",
    "Take photos of three different types of flowers or plants.",
    "Find something older than both of you and guess its age (like a tree or a stone wall).",
    "Find a seed or a pinecone and describe the tree it came from.",
    "Take a picture of moss or lichen growing on a man-made surface.",
    "Find a plant with thorns or spikes and one with velvety-soft leaves.",
    "Find a puddle and take a photo of the sky reflected in it.",
    "Find a piece of natural debris (e.g., a twig, a stone) that looks like an animal.",
    "Find a spot where a tree or vine is growing over a fence or wall.",

    // Action, Creativity, & People Watching
    "Spot a dog, a bird, and a bicycle within 10 minutes.",
    "Find a sign with the word 'love' or a heart symbol and recreate it.",
    "Take a photo of something tiny, something tall, and something round.",
    "Find a place with a reflection (window, water) and take a creative selfie.",
    "Find the coziest corner outdoors and rate its date potential.",
    "Locate a place that smells amazing and describe it to each other.",
    "Pick three items that start with the same letter and make a collage photo.",
    "Take a picture of your shadow stretched out long and another picture of your shadow shrunk small.",
    "Find an item, sign, or natural element in a color that doesn't appear in either of your outfits and pose with it.",
    "Find the funniest warning sign you can and mimic the warning.",
    "Take a picture of a vehicle with a personalized license plate (obscure the number if sharing online).",
    "Find a lost-and-found item (like a glove or hat) and guess the story of the person who lost it.",
    "Take a picture of something that moves and something that is stationary in the same frame.",
    "Capture a photo of two different modes of transportation (e.g., car and bus, bike and scooter).",
    "Take a photo of a sign with an arrow and point in the opposite direction.",
    "Find a piece of street art that makes you feel happy.",
    "Listen in: capture three distinct, non‑verbal neighborhood sounds (e.g., bird call, distant siren, bell).",

    // Colors & Personal Connection
    "Find a spot with your shared initial and take a picture together.",
    "Collect three items in different colors that match your outfits.",
    "Find a sign that is only black and white and one that has at least four colors.",
    "Find three objects that are your favorite color and line them up.",
    "Find a door that is not brown, white, or black and take a picture of its handle.",
    "Find a spot that reminds you of a favorite memory you share and recreate a pose from that time.",
    "Take a picture of something that is the color of the sky at this moment.",
    "Find a piece of chalk or marker and draw a small piece of art for someone else to find.",
    "Find a pattern (stripes, dots, checkers) and try to match it with your clothes.",
    "Find a sign that has the name of your street or town and high-five in front of it.",
    "Find the cheapest item in a storefront window and the most expensive item.",
    "Find a set of stairs and take a picture of your feet on the bottom step.",
    "A Penny for Your Thoughts: find a fountain, statue, or monument dedicated to a person and summarize their story in one sentence.",
    "Find a rainbow of items (red, orange, yellow, green, blue, purple) and place them side-by-side.",
    "Find a public sign that uses the word 'Welcome' and take a picture of you both waving."
];

// Expanded prompt map by subcategory keys
const promptsByKey = {
    truth_mild: mildTruthPrompts,
    truth_spicy: spicyTruthPrompts,
    dare_mild: mildDarePrompts,
    dare_spicy: spicyDarePrompts,
    indoor_short: indoorDateShortPrompts,
    indoor_long: indoorDateLongPrompts,
    outdoor_short: outdoorDateShortPrompts,
    outdoor_long: outdoorDateLongPrompts,
    scavenger: scavengerPrompts
};

// Labels for UI card heading
const categoryLabels = {
    truth_mild: "Truth",
    truth_spicy: "Spicy Truth",
    dare_mild: "Dare",
    dare_spicy: "Spicy Dare",
    indoor_short: "Date Indoors (short)",
    indoor_long: "Date Indoors (long)",
    outdoor_short: "Date Outside (short)",
    outdoor_long: "Date Outside (long)",
    scavenger: "Scavenger Hunt"
};

// Map subcategory to wheel family for color/segment
const familyForCategory = {
    truth_mild: "truth",
    truth_spicy: "truth",
    dare_mild: "dare",
    dare_spicy: "dare",
    indoor_short: "indoor",
    indoor_long: "indoor",
    outdoor_short: "outdoor",
    outdoor_long: "outdoor",
    scavenger: "outdoor"
};

// Families used for wheel coloring and segments
const wheelFamilyLabels = {
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
const spinTruthMildButton = document.getElementById("spin-truth-mild");
const spinTruthSpicyButton = document.getElementById("spin-truth-spicy");
const spinDareMildButton = document.getElementById("spin-dare-mild");
const spinDareSpicyButton = document.getElementById("spin-dare-spicy");
const spinIndoorShortButton = document.getElementById("spin-indoor-short");
const spinIndoorLongButton = document.getElementById("spin-indoor-long");
const spinOutdoorShortButton = document.getElementById("spin-outdoor-short");
const spinOutdoorLongButton = document.getElementById("spin-outdoor-long");
const spinScavengerButton = document.getElementById("spin-scavenger");

const spinButtons = {
    truth_mild: spinTruthMildButton,
    truth_spicy: spinTruthSpicyButton,
    dare_mild: spinDareMildButton,
    dare_spicy: spinDareSpicyButton,
    indoor_short: spinIndoorShortButton,
    indoor_long: spinIndoorLongButton,
    outdoor_short: spinOutdoorShortButton,
    outdoor_long: spinOutdoorLongButton,
    scavenger: spinScavengerButton
};

const segments = [
    { label: wheelFamilyLabels.truth, key: "truth" },
    { label: wheelFamilyLabels.dare, key: "dare" },
    { label: wheelFamilyLabels.indoor, key: "indoor" },
    { label: wheelFamilyLabels.outdoor, key: "outdoor" },
    { label: wheelFamilyLabels.truth, key: "truth" },
    { label: wheelFamilyLabels.dare, key: "dare" },
    { label: wheelFamilyLabels.indoor, key: "indoor" },
    { label: wheelFamilyLabels.outdoor, key: "outdoor" }
];

const segmentAngle = 360 / segments.length;
const segmentIndicesByCategory = Object.keys(wheelFamilyLabels).reduce((acc, key) => {
    acc[key] = [];
    return acc;
}, {});
segments.forEach((segment, index) => {
    segmentIndicesByCategory[segment.key].push(index);
});

let displayedRotation = 0;
let isSpinning = false;
let pendingPromptKey = null;
let lastTriggerButton = null;

const promptPool = Object.keys(promptsByKey).reduce((acc, key) => {
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

function refillPool(categoryKey) {
    promptPool[categoryKey] = shuffle([...promptsByKey[categoryKey]]);
}

function drawPrompt(categoryKey) {
    if (!promptPool[categoryKey].length) {
        refillPool(categoryKey);
    }
    return promptPool[categoryKey].pop();
}

function setCard(categoryKey, text) {
    const label = categoryLabels[categoryKey] || "Prompt";
    const family = familyForCategory[categoryKey];
    cardHeading.textContent = label;
    cardPrompt.textContent = text;
    card.classList.remove("card--truth", "card--dare", "card--indoor", "card--outdoor");
    if (family && card.classList) {
        card.classList.add(`card--${family}`);
    }
}

function setButtonsDisabled(state) {
    Object.values(spinButtons).forEach(button => {
        button.disabled = state;
    });
}

function setActiveButton(categoryKey) {
    Object.entries(spinButtons).forEach(([key, button]) => {
        if (key === categoryKey) {
            button.classList.add("option--active");
        } else {
            button.classList.remove("option--active");
        }
    });
}

function requestSpin(categoryKey) {
    if (isSpinning) {
        return;
    }

    const triggerButton = spinButtons[categoryKey];
    lastTriggerButton = triggerButton;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const prompt = drawPrompt(categoryKey);
        setCard(categoryKey, prompt);
        triggerButton.focus({ preventScroll: true });
        return;
    }

    isSpinning = true;
    pendingPromptKey = categoryKey;

    setActiveButton(categoryKey);
    setButtonsDisabled(true);
    wheel.classList.add("spinning");
    wheel.setAttribute("aria-busy", "true");

    const family = familyForCategory[categoryKey];
    const categoryIndices = segmentIndicesByCategory[family];
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

    if (pendingPromptKey) {
        const prompt = drawPrompt(pendingPromptKey);
        setCard(pendingPromptKey, prompt);
    }

    pendingPromptKey = null;

    if (lastTriggerButton) {
        lastTriggerButton.focus({ preventScroll: true });
    }
    lastTriggerButton = null;
}

function reshufflePrompts() {
    if (isSpinning) {
        return;
    }

    Object.keys(promptsByKey).forEach(refillPool);
    cardHeading.textContent = "Deck reshuffled";
    cardPrompt.textContent = "Pick any deck whenever you're ready for the next moment together.";
    card.classList.remove("card--truth", "card--dare", "card--indoor", "card--outdoor");
}

spinTruthMildButton.addEventListener("click", () => requestSpin("truth_mild"));
spinTruthSpicyButton.addEventListener("click", () => requestSpin("truth_spicy"));
spinDareMildButton.addEventListener("click", () => requestSpin("dare_mild"));
spinDareSpicyButton.addEventListener("click", () => requestSpin("dare_spicy"));
spinIndoorShortButton.addEventListener("click", () => requestSpin("indoor_short"));
spinIndoorLongButton.addEventListener("click", () => requestSpin("indoor_long"));
spinOutdoorShortButton.addEventListener("click", () => requestSpin("outdoor_short"));
spinOutdoorLongButton.addEventListener("click", () => requestSpin("outdoor_long"));
spinScavengerButton.addEventListener("click", () => requestSpin("scavenger"));
wheel.addEventListener("transitionend", handleTransitionEnd);
reshuffleButton.addEventListener("click", reshufflePrompts);

// Prepare the initial pools so the first draw starts randomised.
reshufflePrompts();

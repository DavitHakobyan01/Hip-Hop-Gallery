const artists = [
    {
      name: "21 Savage",
      age: 31,
      popularSong: "a lot",
      hometown: "Atlanta, Georgia",
      funFact: "He was actually born in London and moved to the U.S. when he was 7."
    },
    {
      name: "Ariana Grande",
      age: 30,
      popularSong: "7 rings",
      hometown: "Boca Raton, Florida",
      funFact: "She started her career on a Nickelodeon show called *Victorious*."
    },
    {
      name: "A$AP Rocky",
      age: 36,
      popularSong: "Praise the Lord (Da Shine)",
      hometown: "Harlem, New York",
      funFact: "He’s also a fashion icon and has collaborated with top designers."
    },

    {
      name: "Bad Bunny",
      age: 30,
      popularSong: "Tití Me Preguntó",
      hometown: "Vega Baja, Puerto Rico",
      funFact: "He made history as the first Spanish-language artist to headline Coachella."
    },
    {
      name: "Bruno Mars",
      age: 38,
      popularSong: "Uptown Funk",
      hometown: "Honolulu, Hawaii",
      funFact: "He started performing Elvis impersonations at age 4.",
    },

    {
      name: "Cardi B",
      age: 31,
      popularSong: "Bodak Yellow",
      hometown: "Bronx, New York",
      funFact: "She was a social media star before blowing up in music.",
    },
    {
      name: "Central Cee",
      age: 26,
      popularSong: "Doja",
      hometown: "London, England",
      funFact: "He gained international fame with viral freestyles and UK drill hits.",
    },

    {
      name: "Charli XCX",
      age: 31,
      popularSong: "Boom Clap",
      hometown: "Cambridge, England",
      funFact: "She started posting songs on MySpace at age 14 and became a pioneer in hyperpop.",
    },
    {
      name: "Chris Brown",
      age: 34,
      popularSong: "Forever",
      hometown: "Tappahannock, Virginia",
      funFact: "He was discovered at just 13 and signed to a record label by 15.",
    },
    {
      name: "Destroy Lonely",
      age: 22,
      popularSong: "NOSTYLIST",
      hometown: "Atlanta, Georgia",
      funFact: "He’s signed to Playboi Carti’s label, Opium.",
    },
    {
      name: "Doja Cat",
      age: 28,
      popularSong: "Say So",
      hometown: "Los Angeles, California",
      funFact: "She first went viral with a meme song called 'Mooo!' in 2018.",
    },
    {
      name: "Don Toliver",
      age: 30,
      popularSong: "No Idea",
      hometown: "Houston, Texas",
      funFact: "He was featured on Travis Scott’s *Astroworld* before dropping his debut album.",
    },
    {
      name: "Drake",
      age: 37,
      popularSong: "God's Plan",
      hometown: "Toronto, Canada",
      funFact: "Before music, he played Jimmy on the teen show *Degrassi: The Next Generation*.",
    },
    {
      name: "Eminem",
      age: 51,
      popularSong: "Lose Yourself",
      hometown: "Detroit, Michigan",
      funFact: "He won an Oscar for Best Original Song—the first rapper to do so.",
    },
    {
      name: "Future",
      age: 40,
      popularSong: "Mask Off",
      hometown: "Atlanta, Georgia",
      funFact: "He's considered one of the pioneers of modern trap music.",
    },
    {
      name: "Gunna",
      age: 30,
      popularSong: "Pushin P",
      hometown: "College Park, Georgia",
      funFact: "He’s known for his melodic style and collaborations with Young Thug.",
    },
    {
      name: "Justin Bieber",
      age: 30,
      popularSong: "Sorry",
      hometown: "London, Ontario, Canada",
      funFact: "He was discovered on YouTube at just 13 years old.",
    },
    {
      name: "Katy Perry",
      age: 39,
      popularSong: "Firework",
      hometown: "Santa Barbara, California",
      funFact: "She started her music career singing gospel before going pop.",
    },
    {
      name: "Ken Carson",
      age: 23,
      popularSong: "i need u",
      hometown: "Atlanta, Georgia",
      funFact: "He’s part of Playboi Carti’s Opium label and known for his futuristic rage sound.",
    },
    {
      name: "Kendrick Lamar",
      age: 36,
      popularSong: "HUMBLE.",
      hometown: "Compton, California",
      funFact: "He’s the first rapper to win a Pulitzer Prize for Music.",
    },
    {
      name: "Lil Baby",
      age: 29,
      popularSong: "The Bigger Picture",
      hometown: "Atlanta, Georgia",
      funFact: "He started rapping after encouragement from Young Thug while he was still in prison.",
    },
    {
      name: "Lil Durk",
      age: 31,
      popularSong: "Laugh Now Cry Later",
      hometown: "Chicago, Illinois",
      funFact: "He’s the founder of the music collective and label Only the Family (OTF).",
    },
    {
      name: "Lil Uzi Vert",
      age: 29,
      popularSong: "XO Tour Llif3",
      hometown: "Philadelphia, Pennsylvania",
      funFact: "They’re known for their punk-rock energy and once bought a planet (unofficially).",
    },
    {
      name: "Lil Wayne",
      age: 41,
      popularSong: "Lollipop",
      hometown: "New Orleans, Louisiana",
      funFact: "He wrote his first rap at age 8 and signed to Cash Money Records at 9.",
    },
    {
      name: "Metro Boomin",
      age: 30,
      popularSong: "Creepin’",
      hometown: "St. Louis, Missouri",
      funFact: "His producer tag 'If Young Metro don’t trust you…' became a meme and a warning.",
    },
    {
      name: "Nicki Minaj",
      age: 41,
      popularSong: "Super Bass",
      hometown: "Queens, New York",
      funFact: "She went to a performing arts high school and originally wanted to be an actress.",
    },
    {
      name: "Offset",
      age: 32,
      popularSong: "Ric Flair Drip",
      hometown: "Lawrenceville, Georgia",
      funFact: "He was part of Migos, and is also married to Cardi B.",
    },
    {
      name: "Playboi Carti",
      age: 28,
      popularSong: "Magnolia",
      hometown: "Atlanta, Georgia",
      funFact: "He’s known for his baby voice flow and cult-like fanbase.",
    },
    {
      name: "Rick Ross",
      age: 48,
      popularSong: "Hustlin’",
      hometown: "Carol City, Florida",
      funFact: "Before music, he worked as a correctional officer for 18 months.",
    },
    {
      name: "Rihanna",
      age: 36,
      popularSong: "Umbrella",
      hometown: "Saint Michael, Barbados",
      funFact: "She’s not only a music icon but also a billionaire businesswoman thanks to Fenty Beauty.",
    },
    {
      name: "Rosé",
      age: 27,
      popularSong: "On The Ground",
      hometown: "Auckland, New Zealand",
      funFact: "She’s a member of BLACKPINK and was born in New Zealand but raised in Australia.",
    },
    {
      name: "Sia",
      age: 48,
      popularSong: "Chandelier",
      hometown: "Adelaide, Australia",
      funFact: "She often hides her face with wigs to keep her privacy despite being a global star.",
    },
    {
      name: "SZA",
      age: 34,
      popularSong: "Kill Bill",
      hometown: "Maplewood, New Jersey",
      funFact: "She studied marine biology before fully committing to music.",
    },
    {
      name: "Taylor Swift",
      age: 34,
      popularSong: "Shake It Off",
      hometown: "Reading, Pennsylvania",
      funFact: "She’s the first artist to win Album of the Year at the Grammys four times.",
    },
    {
      name: "The Kid LAROI",
      age: 20,
      popularSong: "Stay",
      hometown: "Sydney, Australia",
      funFact: "He started gaining attention after touring with Juice WRLD as a teen.",
    },
    {
      name: "The Weeknd",
      age: 34,
      popularSong: "Blinding Lights",
      hometown: "Toronto, Canada",
      funFact: "His real name is Abel Tesfaye, and he often drops vowels in his titles as a style choice.",
    },
    {
      name: "Travis Scott",
      age: 33,
      popularSong: "SICKO MODE",
      hometown: "Houston, Texas",
      funFact: "He founded the music label Cactus Jack Records and is known for his psychedelic sound.",
    },
    {
      name: "Ty Dolla $ign",
      age: 42,
      popularSong: "Paranoid",
      hometown: "Los Angeles, California",
      funFact: "He plays multiple instruments and is the son of a member of the funk band Lakeside.",
    },
    {
      name: "Tyga",
      age: 34,
      popularSong: "Taste",
      hometown: "Compton, California",
      funFact: "His stage name stands for 'Thank You God Always.'",
    },
    {
      name: "Wiz Khalifa",
      age: 36,
      popularSong: "See You Again",
      hometown: "Pittsburgh, Pennsylvania",
      funFact: "His nickname ‘Khalifa’ means 'successor' in Arabic, and he got his first tattoo at age 16.",
    },
    {
      name: "Young Thug",
      age: 32,
      popularSong: "Lifestyle",
      hometown: "Atlanta, Georgia",
      funFact: "He’s known for his eccentric fashion and vocal style, and helped launch the careers of Gunna and Lil Baby.",
    },















];


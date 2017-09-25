var homeApp = angular.module('HomeApp',[]);

// Experience Card Controller
homeApp.controller("ExperienceCardCtrl",function($scope, $rootScope, $location){
    //experienceCardData - It is an object which stores the urls & data of cities
    $scope.experienceCardData = [
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/vfOx26XXSNOguQ7j1ua7",
            "experience_title" : "East Village Pierogi Walk",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Explore sweet and savory treats in Manhattan East Village",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "You can take a taxi/Uber to 200 2nd Avenue in the East Village or take the L subway to 3rd Ave (closest stop) or the 4, 5, 6, N, Q, R, or W to Union Square 14th street (it’s a 10 minute walk from here)",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "2"
            },

            "experience_pricing" : {
                "price_1_person" : 50
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Monday - Friday and Sunday: 11 am, 2 pm and 5 pm Saturday: 11 am and 5 pm",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/69OPHTrlTG232FSZ5iLK",
                "https://www.filepicker.io/api/file/Sj744utFTvXwIZ1Lrv1Y",
                "https://www.filepicker.io/api/file/DWHrUgGKR8mfOW7QvuJ9"
            ],

            "experience_long_description" : {
                "description_by_hour" : "Explore NYC funky East Village with its old-world charm and savor some of the best buttery pierogi that Manhattan has to offer.  This is a walking tour full of food and history and in addition to pierogi some other treats you might taste include:<br><br>Spicy Kielbasa<br>Vanilla/chocolate egg cream <br>Freshly brewed coffee<br>apricot/raspberry ruggelach<br>Fresh rye bread and mustard<br> <br>In case you were wondering Pierogies are Polish dumplings with various fillings including potato, cheese, cabbage and meat.<br><br>This fun walking tour combines food with some history and is vegetarian friendly! <br><br>Some sites on our tour include:<br>St. Marks Church In-the-Bowery<br>Kleine Deutschland, Little Germany<br>Yiddish Walk of Fame<br>Funky and eclectic St. Marks Place<br>Site of The Fillmore East and The Saint Disco <br><br>The price includes the foods and drinks sampled but does NOT include any alcoholic beverages.  You may purchase additional food items to take with you.  The list above is just a sample of what you might eat and is not a guarantee - but I will guarantee a good time! <br><br>Do zobaczenia! - thats Polish for see you soon! <br><br>What to Wear/How to Prepare: This is a walking tour so wear comfortable shoes - we will walk approximately 1 mile.  Try not to carry heavy bags since you will be walking - a backpack or crossbody bag is best! Check the weather for rain/drizzle and bring an umbrella in case. I will run the tour unless there is severe weather. <br><br>Vegans/Vegetarians/Food Allergies:  This tour is vegetarian friendly but you must notify me of any allergies and food restrictions beforehand<br><br>Handicap Accessible: Yes, this tour is handicap accessible.  Please notify me beforehand<br><br> We meet for the tour outside the area known as Little Poland in Manhattan on 200 2nd avenue (East Village)<br>"
            },

            "experience_included" : [
                "Licensed NYC tour guide",
                "Food and drink samples"
            ],

            "experience_excluded" : [
                "Alcoholic beverages",
                "Additional food purchases",
                "Transportation",
                "Tips are always appreciated!"
            ],

            "experience_host_information" : {
                "about" : "Hello! I’m Greg, a licensed NYC tour guide and 27-year resident of NYC. I live in the neighborhood my family emigrated to from Italy in 1884 and I’m a passionate, witty and fun loving tour guide. I love sharing Bohemian Greenwich Village’s historic sights. I turn each action-packed, scrumptious tour is an off-off-off Broadway show, sharing food, history, intrigue and fun narrated by me - Greg Marro. So come and eat, tour and explore. <br><br>My tour company is a 2017 TripAdvisor Certificate of Excellence recipient and ranked the 13th best food tour in NYC!<br>",
                "name" : "Greg Marro",
                "profile_picture" : "https://www.filepicker.io/api/file/Bo4O1p0mQ0ue22Uyamut"
            },

            "experience_cancelation_policy" : "Customers will receive a full refund within 24 hour notice of cancellation. Processing refunds may take up to 7 business days. Customers can reschedule a tour OR request a full refund when operator cancels due to weather or unforeseen circumstances. No shows are charged the full price. If a customer does not show 30 minutes after tour start time, the customer will be considered a no show.",

            "special_cancelation" : true,


            "experience_group_size" : "2 - 15 guests",

            "experience_categories" : [
                "Walking tour",
                "Food tour"
            ],

            "experience_for" : [
                "Friends",
                "couples",
                "solo travelers",
                "native New Yorkers looking for something new",
                "birthday celebrations",
                "bachelorette parties",
                "kids",
                "families"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide",
                "Top NYC food tour on TripAdvisor"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/OVhsXo5DQUymRhvOidCq",
            "experience_title" : "Entertaining stories with Lady Liberty + Ellis Island",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Broadway insiders bring Disney costume and prop studio to life",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "Ferry service to the Statue and Ellis Island are provided.  Hotel pickups are not included.",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "3"
            },

            "experience_pricing" : {
                "price_1_person" : 49
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Tuesdays, Thursdays, Fridays and Saturdays: 8:30 am",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/PpzWOtwSRiyrWvDdYooK",
                "https://www.filepicker.io/api/file/F6lJz1eSSm6pxXbpCFWC",
                "https://www.filepicker.io/api/file/QCLm5SVNQa2pz2V1bKHg",
                "https://www.filepicker.io/api/file/QcdFcPV4QyuPV7vlqxjO",
                "https://www.filepicker.io/api/file/uB7rseCITdWp1flyPrZJ",
                "https://www.filepicker.io/api/file/YThnCkRpSb6bUyV7f3og",
                "https://www.filepicker.io/api/file/kp4ApR7oSuSKrFKruhAW",
                "https://www.filepicker.io/api/file/2OFe1zLWRxCBgezUOkfC"
            ],

            "experience_long_description" : {
                "description_by_hour" : "Highlights:<br><br>The most entertaining and irreverent Statue of Liberty Tour in New York with facts, fiction, and a few outright fabrications that go way beyond normal tours, like the giant octopus attack that killed 400 on the day JFK was assassinated.<br>Get special pre-reserved access to the Statue pedestal for the best views over NYC - with no wait<br>Enjoy the benefits of a small group of 25 people or fewer, including easier access to your guide. <br>After your tour you will have a ferry ticket and access to visit Ellis Island, where you can enjoy an independent visit of the well-curated immigration museum (so well-curated, in fact, that you really do not need a guide here). <br><br>Overview<br><br>This unique experience is a wickedly tongue-in-cheek look at the turbulent history of one of New York’s most iconic sites. With special pedestal access you’ll literally get beneath the skirt of Lady Liberty, learning about strange happenings in New York harbor; the ambivalent feelings that her French creator had towards America; the disdain that many Americans originally had for the statue herself; and an untold number of dead seagulls. With Ellis Island tickets included in the price, this is the perfect tour for people who want to learn everything they didn’t teach you in school about Lady Liberty. <br><br>Description<br><br>This is New York’s funniest and most insightful tour to the Statue of Liberty, giving you to the stories, rumors, legends that you won’t hear anywhere else. Want to know about the other tragedy on the day of JFK’s assassination (the one that involved a giant octopus)? Or what our guides ‘affectionately’ call Lady Liberty behind her back? Then this is your tour. <br><br>You’ll meet at Battery Park, home to a beer garden/immigration station, as well as a graphic plaque given to the city of New York by the Dutch to remind us that they stole Manhattan first. With a small group of 25 people or fewer and an expert local guide (carefully vetted for his/her sense of fun) you’ll board the ferry to Liberty Island. <br><br>During the crossing they will regale you with some of the more outlandish stories of Lower Manhattan. First and foremost is the tale of a ferry sinking that killed 400. In the wreckage authorities found the markings of what looked like huge suction cups on the side of the boat, pointing to an unlikely culprit. Is this the twisted story NY’s port authorities are hiding from you or is it a complete fabrication? The photographic evidence held by your guide is pretty convincing... <br><br>When you reach Liberty Island you’ll have special access to climb up to the Statue pedestal, via a stairway (or elevator) inside the structure. Climb under the skirts of Lady Liberty to marvel at her cavernous interior and hear the story of how she was made. Naturally, this won’t be the polite version from the history books. Instead you’ll learn how here creator was a little dramatic and didn’t always love Americans; how many Americans cared even less for his statue and weren’t interested in paying for the pedestal that you’re standing on (which eventually cost more than the statue itself); how her torch started out as little more than a flicker of light; and how many birds lost their lives because of it. You’ll also learn how the statue went from being little known and less cared for, to an icon of the American people, used to advertise everything from immigration and patriotism, to laxatives and cocaine. <br><br>After enjoying this eye-opening, hilarious, and eventually inspirational story, you’ll step outside for views from the pedestal that reach over the harbour and encompass much of Lower Manhattan - the perfect selfie spot. <br><br>Your guided tour ends here but your day doesn’t have to. With all-inclusive tickets valid for the rest of the day, you can take the ferry on to Ellis Island to explore the lovely museum by yourself and get even more information about the history of this hallowed stretch of harbor. The museum here is so well-curated, with videos, audio and huge photographic exhibits; you won’t need your guide at all. <br><br>Sites Visited: <br><br>Statue of Liberty<br>Battery Park<br>Ellis Island (unguided) <br><br>Important Notes: <br><br>Gratuities to guides are appreciated but never obligatory. <br>Please note that the tour meeting time is 15 minutes prior to the start time. No refunds or re-bookings can be provided for late arrivals or no shows after tour commencement or departure. <br>Please note this tour does not include a visit to the Statue of Liberty's Crown, due to security measures in place by the National Park Services who manage the Statue of Liberty. <br>Tour participants must be able to climb and descend 215 stairs from the Statue lobby to the top of the pedestal. <br>Please note that guests will need to pass through airport style security to enter the Statue of Liberty.  Certain items are not permitted in the Statue of Liberty and such items will be confiscated and will not be returned. Please refer to the Statue of Liberty’s guidelines on specific prohibited items: http://www.nps.gov/stli/planyourvisit/yoursafety.htm<br>Please be aware that upon arrival at Liberty Island, if you are carrying a backpack or large bags you are required to put your bag/s into a locker which costs $2.00 in bills only (no coins accepted). Please be sure to have dollar bills for the lockers. <br>Please note, the ferry does not operate during heavy rain or other adverse weather conditions; when this occurs, an alternative option is provided. <br>Meeting Point: <br><br>Front entrance of Pier A Harbor House, 22 Battery Place, in Battery Park, to the right of Statue of Liberty ferry and Castle Clinton<br><br>Meeting Point Directions: <br><br>Directions by taxi: Tell your driver to drop you off at Pier A Harbor House, Battery Park, near the Statue of Liberty ferry<br><br>Directions by subway: Take Line 4 or 5 to Bowling Green, or Lines 1 or R to Rector Street. Walk towards the water. Pier A Harbor House is to the right of the Statue of Liberty ferry and Castle Clinton<br><br>End Point: <br><br>Liberty Island.  All tickets include Ellis Island access, to be used (or not) at guest's own leisure. <br><br>Price per person: Adults: $49, Children (4-12): $46 & Under 4 years old: FREE"
            },

            "experience_included" : [
                "Special access to the Statue Pedestal",
                "Round-trip transport to Liberty Island & Ellis Island by ferry",
                "Small groups of max 25 people",
                "Fun expert guide"

            ],

            "experience_excluded" : [
                "Statue of Liberty Crown",
                "Gratuities",
                "Hotel Pick-Up/Drop-Off"
            ],

            "experience_host_information" : {
                "about" : "We are a premier walking tour company in NYC and believe that the best way to travel is to walk! We believe in slow travel, no matter how long your trip. In taking the time to appreciate your surroundings and learn a little about the local history and culture – to eat as locals do and discover those hidden nooks and crannies that they proudly show to visiting friends.<br><br>We believe in discovering a city at ground level, which is why our tours focus not so much on the facts and figures, but on the stories and legends behind those – the little details that make a city, a building, a painting or even a street corner so special. On the seasonal ingredients and culture that make the food so different. <br><br>We believe in walking, not cattle herding, which is why we keep our group sizes smaller, so you can always interact with your guide. <br><br>We believe in supporting local industry, which is why all of our suppliers and the people you meet on our tours are locals, and why we've partnered with local associations such as the Broadway League, chef Mario Batali and Eldridge Street Synagogue. That's why your tour guides are locals too – so you're really getting a local insight. <br><br>Wherever you travel, take some time to slow down and really see the place you're visiting — take some time to take walks. <br>",
                "name" : "Walks of New York",
                "profile_picture" : ""
            },

            "experience_cancelation_policy" : "In order to provide the highest level of service with top guides and guaranteed tour departures, cancellations and amendments may be subject to fees. The policy applies to all group and private tours booked on a per person and per tour basis. <br>Group tours & activities: <br>Cancellations received greater than 72 hours prior to tour commencement are fully refundable. <br>Cancellations received within 72 hours of tour commencement are nonrefundable. <br>Amendment requests are subject to availability and price changes. <br><br>Private tours & activities: <br>Cancellations received greater than 7 days prior to tour commencement are fully refundable. <br>Cancellations received within 7 days of tour commencement are nonrefundable. <br>All amendments made to private tours may be subject to an administrative fee up to 20%.<br><br>Late Arrivals & No Shows: <br>Late arrivals and no shows are nonrefundable. This is applicable to any tour participant that fails to arrive, or arrives after tour departure. <br>Changes to this Policy: <br>From time to time, the terms of this policy may change at the Company's discretion. In the event of such changes, the new policy will apply for all tours booked after the date and time of the policy change. <br>",

            "special_cancelation" : true,


            "experience_group_size" : "25 guests",

            "experience_categories" : [
                "Walking tour",
                "History tour",
                "Outdoor",
                "Manhattan"
            ],

            "experience_for" : [
                "Families",
                "Couples",
                "Friends",
                "Children"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/ZdxMaxpKRrecrF88GZfK",
            "experience_title" : "Exclusive Disney on Broadway Costume Closet",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Broadway insiders bring Disney’s costume and prop studio to life",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "Not included",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "2"
            },

            "experience_pricing" : {
                "price_1_person" : 72
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Mondays and Saturdays: 9:30 am/ 10 am",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/84RSYCYxSUu070Zlp7oS",
                "https://www.filepicker.io/api/file/SJ7Qa8vnTFyHX1ZtZAFy",
                "https://www.filepicker.io/api/file/C6e1kJiVQrecR0wu1kV9",
                "https://www.filepicker.io/api/file/4WriEJu1TGaD9pKIzg11",
                "https://www.filepicker.io/api/file/BQJxmA7CQfeTjOkOShms",
                "https://www.filepicker.io/api/file/QGMaqNG2Rlx9rjlkaRpx"
            ],

            "experience_long_description" : {
                "description_by_hour" : "  Highlights:<br><br>      Brand new: This an exclusive behind-the-magic Broadway tour created in collaboration with Disney Theatrical Group (you could say it’s the ‘happiest tour on earth’). <br>      Discover the magic of Broadway productions like ‘The Lion King’ and ‘Aladdin’ with a special guided tour of Disney’s landmark New Amsterdam Theatre, led by the in-house historian. <br>      Get into character with a special hands-on visit to the New Amsterdam Theatre’s Costumes & Props Studio. <br>      Enjoy a 1.5-hour guided tour of the best of Broadway; stopping at all the most important theatres and hotspots to learn about the actors, shows and scandals that rocked NYC’s theatre district. <br>      With audio headsets you’ll never miss a word from your guide. <br><br>Overview: <br><br>      For Broadway lovers and Disney fans, there’s no better experience than this new, exclusive access tour. Created in collaboration with Disney Theatrical Group, this tour takes you behind the magic at the New Amsterdam Theatre; entering when the theatre is closed for a special guided tour. <br><br>Description: <br><br>Spend a full hour with the in-house historian, learning about the history of this incredible building. You’ll have the place to yourself so you can visit the first floor and balcony levels, admiring the vast stage as your guide describes what goes into the creation and performance of a Broadway production like ‘Beauty & The Beast’, ‘Mary Poppins’, ‘Aladdin’ and ‘The Lion King’. You’ll hear stories of the goings-on behind the scenes and learn about the superstitions held by Broadway performers — including a few ghost stories. <br><br>The highlight of your experience is in the second part of your New Amsterdam tour. You’ll visit the Prop Studio, where you’ll find treasures untold, getting up close and personal with original props, costumes and set piece for many of your favorite Disney on Broadway musicals. <br><br>While we do spend a lot of time on the Disney element of our tour (you’ll hear audio recordings from shows and learn lots of fun Disney trivia), we don’t just stop there: This is a proper Broadway tour. <br><br>To ensure that you get a full picture of Broadway and that you have as much context as possible when you visit the New Amsterdam, you’ll take a guided tour of Broadway before your visit, stopping at landmark theatres where legendary shows drew huge crowds and global attention. For this section of your tour, you’ll travel with one of our Broadway Insiders, a team drawn from a bank of actors, crew members and even theatre managers — all of whom have first-hand experience of life behind the curtain. <br><br>Discover the unlikely origins of Times Square and hear the rags-to-riches tale of NYC’s theatre district (and how Disney was instrumental in changing the fate of a notorious red light district). Learn of the legendary Ziegfeld Follies which kick started Broadway production as we know it, not to mention the careers of so many legendary performers. You’ll also visit Sardi’s to see the famous character portraits, learning about the on and off-screen shenanigans of Broadway’s biggest names. <br><br>With your Broadway Insider guide, you’ll see the most popular cast hangouts and identify the most important theatres — in both a historic sense and from a theatrical and musical standpoint. You’ll hear stories you’ll hardly be able to believe (like how a goat once fell from the roof of one of these very theatres) and get a grasp of just how colossal a Broadway production is; how much blood and sweat goes into every performance and how many people there are behind the scenes and in the wings every time the curtain rises. <br><br>Like a theatre director on opening night, you can rest assured that we’ve taken painstaking care over the little details on this tour. We’ve chosen only the best guides to join our Broadway Insiders team and have drawn up the perfect route to showcase the very best of showbiz, combining the magic of Disney and the glamour of Broadway into one epic behind-the-magic adventure. <br><br>Note: Between January 2017 and July of 2018, the costume and prop access will be restored via a mobile cart brought into the orchestra section of the theatre. <br><br>Sites Visited: <br><br>      New Amsterdam Theatre (including Prop Studio) <br>      Duffy Square<br>      Times Square<br>      Sardi’s<br>      Rodgers & Hammerstein Way<br>      Shubert Alley<br>      Marriott Marquis Theatre (from outside) <br>      Majestic Theatre (from outside) <br>      American Airlines Theatre (from outside) <br><br>Important Notes: <br><br>      Gratuities to guides are appreciated but never obligatory. <br>      Please note that the tour meeting time is 15 minutes prior to the start time. No refunds or re-bookings can be provided for late arrivals or no shows after tour commencement or departure. <br>      Please note, the voucher is NOT redeemable at the New Amsterdam Theater ticket desk. <br>      Due to ongoing construction and preparations of the New Amsterdam Theatre for the premiere of Frozen on Broadway, from November 2016 through January 2017, the costume room access will be replaced by an actual backstage experience. The backstage area of Broadway theatres has been off limits to public tours for decades, and hasn't been accessed by the public in the New Amsterdam in nearly a century. Between January 2017 and July of 2018, the costume and prop access will be restored via a mobile cart brought into the orchestra section of the theatre. <br><br>Meeting Point: <br><br>      George M. Cohan statue at West 46th Street between Broadway and 7th Avenue towards the end of the block, (NOT the statue in front of the red stairs.) Please note, the voucher is NOT redeemable at the New Amsterdam Theater ticket desk. <br><br>Meeting Point Directions: <br><br>      Arriving by taxi:  Tell driver to take you to TKTS booth in Times Square.  Meeting point will be at George M. Cohan statue at the opposite end of TKTS at West 46th Street. <br>      Arriving by subway:  1, 2, 3, 7, N, Q, R, S to Times Square (42nd Street.  Meeting point is 4 blocks away) <br><br>End Point: <br><br>      New Amsterdam Theatre. On occasion tour may end within walking distance of the theater. <br><br>Price per person: Adults: $72, Children (4-12): $65 & Under 4 years old: FREE<br>"
            },

            "experience_included" : [
                "Exclusive behind-the-magic access to Disney Theatrical’s New Amsterdam Theatre (with Prop Studio access)",
                "Expert in-house historian for your New Amsterdam Theatre tour",
                "Broadway Insider to show you the ropes on a 1.5 hour Broadway tour (will also stay with you for New Amsterdam section)",
                "Audio headsets so you can hear your guide for Broadway tour — with special audio inserts from Broadway shows and Disney productions",
                "Small groups"
            ],

            "experience_excluded" : [
                "Statue of Liberty Crown",
                "Gratuities",
                "Hotel Pick-Up/Drop-Off"
            ],
            "experience_host_information" :{
                "about" : "We are a premier walking tour company in NYC and believe that the best way to travel is to walk! We believe in slow travel, no matter how long your trip. In taking the time to appreciate your surroundings and learn a little about the local history and culture – to eat as locals do and discover those hidden nooks and crannies that they proudly show to visiting friends.<br><br>We believe in discovering a city at ground level, which is why our tours focus not so much on the facts and figures, but on the stories and legends behind those – the little details that make a city, a building, a painting or even a street corner so special. On the seasonal ingredients and culture that make the food so different. <br><br>We believe in walking, not cattle herding, which is why we keep our group sizes smaller, so you can always interact with your guide. <br><br>We believe in supporting local industry, which is why all of our suppliers and the people you meet on our tours are locals, and why we've partnered with local associations such as the Broadway League, chef Mario Batali and Eldridge Street Synagogue. That's why your tour guides are locals too – so you're really getting a local insight. <br><br>Wherever you travel, take some time to slow down and really see the place you're visiting — take some time to take walks. <br>",
                "name" : "Walks of New York",
                "profile_picture" : ""
            },
            "experience_cancelation_policy" : "In order to provide the highest level of service with top guides and guaranteed tour departures, cancellations and amendments may be subject to fees. The policy applies to all group and private tours booked on a per person and per tour basis. <br>Group tours & activities: <br>Cancellations received greater than 72 hours prior to tour commencement are fully refundable. <br>Cancellations received within 72 hours of tour commencement are nonrefundable. <br>Amendment requests are subject to availability and price changes. <br><br>Private tours & activities: <br>Cancellations received greater than 7 days prior to tour commencement are fully refundable. <br>Cancellations received within 7 days of tour commencement are nonrefundable. <br>All amendments made to private tours may be subject to an administrative fee up to 20%.<br><br>Late Arrivals & No Shows: <br> Late arrivals and no shows are nonrefundable. This is applicable to any tour participant that fails to arrive, or arrives after tour departure. <br>Changes to this Policy: <br>From time to time, the terms of this policy may change at the Company's discretion. In the event of such changes, the new policy will apply for all tours booked after the date and time of the policy change. <br>",

            "special_cancelation" : true,


            "experience_group_size" : "25 guests",

            "experience_categories" : [
                "Walking tour",
                "History tour",
                "Art",
                "Theater",
                "Kid friendly",
                "Manhattan"
            ],

            "experience_for" : [
                "Families",
                "Couples",
                "Friends",
                "Children",
                "Birthdays",
                "Special celebrations",
                "Senior citizens"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/eNMStx05R7GVqAjpSbU4",
            "experience_title" : "History of Statue of Liberty + Ellis Island",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Beat the crowds and get special access to the pedestal",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "See above - ferry service to the Statue and Ellis Island are provided.  Hotel pickups are not included.",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "4"
            },

            "experience_pricing" : {
                "price_1_person" : 57
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Monday - Sunday: 9 am",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/oV62SaeTLqAHOPdmX7BG",
                "https://www.filepicker.io/api/file/WRWZp1GQAq8yrv6ZW9kA",
                "https://www.filepicker.io/api/file/2p2A1bOTsyn6qvJFrJoq",
                "https://www.filepicker.io/api/file/QxHPuVnbQ1eF3p48RigU",
                "https://www.filepicker.io/api/file/lb3oFDASBKapNqnuTaxd"

            ],

            "experience_long_description" : {
                "description_by_hour" : "Highlights:<br><br>Take an early ferry to Liberty Island and arrive often before the crowds!<br>Enjoy a guided tour of the Statue of Liberty, including special access to the statue pedestal. <br>Visit Ellis Island and follow in the footsteps of 12 million immigrants, taking their first step on the land of freedom. <br>Get more from your experience with an expert guide at the Ellis Island Immigration Museum – you’ll walk the Stairs of Separation, visit the Kissing Post and hear tales at the American Immigrant Wall of Honor to put a human context on your visit. <br>With small groups of 20 people or fewer your tour will be intimate, your guide easy to interact with. <br><br>Overview: <br><br>Meet NYC’s most famous lady up close and in person on our Early Access Statue of Liberty Tour. <br><br>Description: <br><br>We’ll start our tour with a little context, visiting the sites around Battery Park. The memorials here rarely get the attention they deserve, from visitors rushing past to board the ferry. The stories they have to tell are well worth hearing though, so we’ll spare some time for the Castle Clinton National Monument, Pier A Harbor House, the American Merchant Mariner’s Memorial, the Sphere and New York Korean War Veteran’s Memorial. <br><br>Then it’s off to Liberty Island, with priority boarding to get us the best seats on the ferry – and since we leave so early you’ll arrive at the Statue before the crowds. Once there, you’ll enjoy stunning views back over the city and a guided tour that takes you right into the pedestal, getting you closer to Lady Liberty than a regular visit. <br><br>Here your guide will teach you a little about the city’s greatest icon. Gifted to the US by France and designed by their finest architects including Gustav Eiffel (whose Parisian Tower you may be familiar with), Lady Liberty wasn’t as warmly received as you would think. With your expert guide on hand, you’ll hear all about the struggle that got her on her feet and made her even more special to the people of New York. <br><br>Then it’s back on the ferry and on to Ellis Island, where you’ll follow in the footsteps of 12 million immigrants. With your expert guide on hand you’ll learn about the lengthy immigration process they went through, walking the Stairs of Separation to understand the island’s two very different names – ‘The Island of Hope’ and ‘The Island of Tears’. Together you’ll explore the museum’s impressive collection of interactive displays, asking all the questions you want of your expert guide. Our tour ends in Ellis Island, so you can stay a little longer if you’d like, or head back on the ferry with your guide. <br><br>With small groups of 20 people or fewer and early morning ferries to the islands, we ensure that your tour is peaceful and relaxed, removing the stress and frustrations of the average visit. And with an expert guide on hand you’re certain to learn a thing or two, getting more from your experience than you would have on your own. <br><br>Sites Visited: <br><br>Statue of Liberty Museum and Pedestal<br>Ellis Island Museum<br>Castle Clinton National Monument<br>Pier A Harbor House (from exterior) <br>American Merchant Mariner’s Memorial<br>The Sphere<br>New York Korean War Veterans Memorial<br><br>Important Notes: <br><br>Gratuities to guides are appreciated but never obligatory. <br>Please note that the tour meeting time is 15 minutes prior to the start time. No refunds or re-bookings can be provided for late arrivals or no shows after tour commencement or departure. <br>Please note this tour does not include a visit to the Statue of Liberty's Crown, due to security measures in place by the National Park Services who manage the Statue of Liberty. <br>Tour participants must be able to climb and descend 215 stairs from the Statue lobby to the top of the pedestal. <br>Please note that guests will need to pass through airport style security to enter the Statue of Liberty.  Certain items are not permitted in the Statue of Liberty and such items will be confiscated and will not be returned. Please refer to the Statue of Liberty’s guidelines on specific prohibited items: http://www.nps.gov/stli/planyourvisit/yoursafety.htm<br>Please be aware that upon arrival at Liberty Island, if you are carrying a backpack or large bags you are required to put your bag/s into a locker which costs $2.00 in bills only (no coins accepted). Please be sure to have dollar bills for the lockers. <br>Please note, the ferry does not operate during heavy rain or other adverse weather conditions; when this occurs, an alternative option is provided. <br><br>Meeting Point: Front entrance of Pier A Harbor House, 22 Battery Place, in Battery Park, to the right of Statue of Liberty ferry and Castle Clinton<br><br>Meeting Point Directions: <br><br>Directions by taxi: Tell your driver to drop you off at Pier A Harbor House, Battery Park, near the Statue of Liberty ferry<br>Directions by subway: Take Line 4 or 5 to Bowling Green, or Lines 1 or R to Rector Street. Walk towards the water. Pier A Harbor House is to the right of the Statue of Liberty ferry and Castle Clinton<br><br>End Point: <br><br>Ellis Island (Guest can choose to stay on Ellis Island and return on their own or take ferry back to Battery Park with Guide.) <br><br>Price per person: Adults: $57, Children (4-12): $47 & Under 4 years old: FREE<br>"
            },

            "experience_included" : [
                "Expert local tour guide",
                "Fully guided Statue of Liberty and Ellis Island Museum tour",
                "Pedestal Tickets for Statue of Liberty",
                "All ferry tickets between Battery Park, Statue of Liberty and Ellis Island",
                "Priority ferry boarding from Battery Park – Statue of Liberty",
                "Small groups of 20 people or fewer"
            ],

            "experience_excluded" : [
                "Statue of Liberty Crown",
                "Gratuities",
                "Hotel Pick-Up/Drop-Off"
            ],

            "experience_host_information" : {
                "about" : "We are a premier walking tour company in NYC and believe that the best way to travel is to walk! We believe in slow travel, no matter how long your trip. In taking the time to appreciate your surroundings and learn a little about the local history and culture – to eat as locals do and discover those hidden nooks and crannies that they proudly show to visiting friends.<br><br>We believe in discovering a city at ground level, which is why our tours focus not so much on the facts and figures, but on the stories and legends behind those – the little details that make a city, a building, a painting or even a street corner so special. On the seasonal ingredients and culture that make the food so different. <br><br>We believe in walking, not cattle herding, which is why we keep our group sizes smaller, so you can always interact with your guide. <br><br>We believe in supporting local industry, which is why all of our suppliers and the people you meet on our tours are locals, and why we've partnered with local associations such as the Broadway League, chef Mario Batali and Eldridge Street Synagogue. That's why your tour guides are locals too – so you're really getting a local insight. <br><br>Wherever you travel, take some time to slow down and really see the place you're visiting — take some time to take walks. <br>",
                "name" : "Walks of New York",
                "profile_picture" : ""
            },

            "experience_cancelation_policy" : "In order to provide the highest level of service with top guides and guaranteed tour departures, cancellations and amendments may be subject to fees. The policy applies to all group and private tours booked on a per person and per tour basis. <br>Group tours & activities: <br>Cancellations received greater than 72 hours prior to tour commencement are fully refundable. <br>Cancellations received within 72 hours of tour commencement are nonrefundable. <br> Amendment requests are subject to availability and price changes. <br><br>Private tours & activities: <br> Cancellations received greater than 7 days prior to tour commencement are fully refundable. <br>Cancellations received within 7 days of tour commencement are nonrefundable. <br>All amendments made to private tours may be subject to an administrative fee up to 20%.<br><br>Late Arrivals & No Shows: <br>Late arrivals and no shows are nonrefundable. This is applicable to any tour participant that fails to arrive, or arrives after tour departure. <br>Changes to this Policy: <br>From time to time, the terms of this policy may change at the Company's discretion. In the event of such changes, the new policy will apply for all tours booked after the date and time of the policy change. <br>",

            "special_cancelation" : true,


            "experience_group_size" : "20 guests",

            "experience_categories" : [
                "Walking tour",
                "History tour",
                "Outdoors",
                "Manhattan"
            ],

            "experience_for" : [
                "Families",
                "Couples",
                "Friends",
                "Children"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/oO4Y2eRlR8SHt65jqqke",
            "experience_title" : "Italians of Greenwich Village",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Eat your way through this 150-year old Italian Neighborhood with a local",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "2"
            },

            "experience_pricing" : {
                "price_1_person" : 50
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Monday - Sunday 11 am, 2 pm & 5 pm",


            "experience_photos" : [

                "https://www.filepicker.io/api/file/aC9LS6pBTYm7YqKcJZHq",
                "https://www.filepicker.io/api/file/f0z9SpcS2GtbXsSQMeYt",
                "https://www.filepicker.io/api/file/sskOMI0RYe2zYrKs4NnQ",
                "https://www.filepicker.io/api/file/PYJbVGfBSiKIHXkryBLa",
                "https://www.filepicker.io/api/file/CeLo76DnSlulUgqqt4XP",
                "https://www.filepicker.io/api/file/9TTyye0WQkOIjzzCn6Da",
                "https://www.filepicker.io/api/file/dPmCWLanR5yTZtqty4ct",
                "https://www.filepicker.io/api/file/BtTzX8SrR1uK37YU6mOh",
                "https://www.filepicker.io/api/file/BZ5i6eq2SbegyQKAEjbH",
                "https://www.filepicker.io/api/file/Paxg27S8RR6aJCPEuwyx",
                "https://www.filepicker.io/api/file/5xGseh6iRduZVEmJvKMj"
            ],

            "experience_long_description" : {
                "description_by_hour" : "Stroll through one of NYCs oldest Italian neighborhoods with me - your local NYC Italian! While learning about this historic and Bella neighborhood, sample a savory Raffettos Pasta meatball, Faiccos hot cheesy rice balls and imported Italian prosciutto. Enjoy sweet semolina bread with a hot cup of Porto Rico fresh brewed coffee or tea. Bite into Bens Pizza oven fresh Grandma Pizza slice followed by a decadent Roccos Pastry fruit-a- misu. All of these bites show you just how delicious this Old Italian neighborhood was and still is! Come hungry - you will leave full!<br><br>Some beautiful historic sites along the way include:<br>St. Anthony of Padua Church <br>Raffettos Pasta<br>Tira a Segno Rifle Club<br>Minetta Tavern<br>Caffe Reggio<br>Our Lady of Pompeii<br><br>This tour can be made vegetarian friendly - please note any dietary restrictions when booking!<br><br>Ciao.ciao,ciao e mangia! <br><br>What to Wear/How to Prepare: This is a walking tour so wear comfortable shoes - we will walk approximately 1 mile.Try not to carry heavy bags since you will be walking - a backpack or crossbody bag is best! Check the weather for rain/drizzle and bring an umbrella in case.I will run the tour unless there is severe weather.<br><br>Vegans/Vegetarians/Food Allergies:This tour is vegetarian friendly but you must notify me of any allergies and food restrictions beforehand<br><br>Handicap Accessible: Yes, this tour is handicap accessible. Please notify me beforehand<br><br> Meet at St. Anthony of Padua Church on the southeast corner of West Houston and Sullivan Streets. You can take a taxi/Uber to: 154 Sullivan Street, New York, New York 10012<br><br>The closest subways are: C, E to Spring Street; 1 train to Houston street; A, C, E, B, D, F, M to West 4th street (estimate a 10 minute walk to the church)<br>"
            },

            "experience_included" : [
                "Licensed NYC tour guide",
                "Food and drink samples"
            ],

            "experience_excluded" : [
                "Alcoholic beverages",
                "Additional food purchases",
                "Transportation",
                "Tips are always appreciated!"
            ],

            "experience_host_information" : {
                "about" : "Hello! I’m Greg, a licensed NYC tour guide and 27-year resident of NYC. I live in the neighborhood my family emigrated to from Italy in 1884 and I’m a passionate, witty and fun loving tour guide. I love sharing Bohemian Greenwich Village’s historic sights. I turn each action-packed, scrumptious tour is an off-off-off Broadway show, sharing food, history, intrigue and fun narrated by me - Greg Marro. So come and eat, tour and explore. <br /><br />My tour company is a 2017 TripAdvisor Certificate of Excellence recipient and ranked the 13th best food tour in NYC!<br>",
                "name" : "Greg Marro",
                "profile_picture" : "https://www.filepicker.io/api/file/Bo4O1p0mQ0ue22Uyamut"
            },

            "experience_cancelation_policy" : "Customers will receive a full refund within 24 hour notice of cancellation. Processing refunds may take up to 7 business days. Customers can reschedule a tour OR request a full refund when operator cancels due to weather or unforeseen circumstances. No shows are charged the full price. If a customer does not show 30 minutes after tour start time, the customer will be considered a no show.",

            "special_cancelation" : true,


            "experience_group_size" : "2 - 15 guests",

            "experience_categories" : [
                "Walking tour",
                "Food tour"
            ],

            "experience_for" : [
                "Friends",
                "couples",
                "solo travelers",
                "native New Yorkers looking for something new",
                "birthday celebrations",
                "bachelorette parties",
                "kids",
                "families"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide",
                "Top NYC food tour on TripAdvisor"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/XQzrSD3URy6rgiTz3T8y",
            "experience_title" : "Meatball Crawl of Greenwich Village",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Eat some of the best meatballs and other treats",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "2"
            },

            "experience_pricing" : {
                "price_1_person" : 50
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Monday - Friday and Sunday: 11 am, 2 pm and 5 pm & Saturday: 11 am and 5 pm",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/QlJs5FLsSaGd9HhIyqQu",
                "https://www.filepicker.io/api/file/bKvbHVs7SLqBQxEUomPA",
                "https://www.filepicker.io/api/file/uRdvSIrMRpiVQ7ugBj8m",
                "https://www.filepicker.io/api/file/QkgvOelSUKSZETkTrEtj",
                "https://www.filepicker.io/api/file/CommzFzQQqeIMNHauaji",
                "https://www.filepicker.io/api/file/yltP9DTyTF21K8sJJ89v",
                "https://www.filepicker.io/api/file/gFOs3gilSce7jqw41AEc",
                "https://www.filepicker.io/api/file/dNhtFGmCS4mybnWzwNyd",
                "https://www.filepicker.io/api/file/Kz4915wgQUavt7CiNxqD",
                "https://www.filepicker.io/api/file/HQ8vSY4BSoqVbZpIv2Ar"
            ],

            "experience_long_description" : {
                "description_by_hour" : "Explore the funky and Bohemian West Village with me - your entertaining guide Greg! This is a fun food and history walking tour where the highlight is sampling 3 unique meatballs including: Genovese,Neapolitan, and American.  You may also sample pepper biscuits and fresh Italian bread. Eat a delectable Rocco’s fruit-a- misu pastry and enjoy a fresh brewed coffee or tea from Porto Rico, Greenwich Village’s oldest coffee importer.<br><br>This tour will leave you feeling full and we will walk, eat and laugh! Come hungry and leave full! <br><br>What to Wear/How to Prepare: This is a walking tour so wear comfortable shoes - we will walk approximately 1 mile.  Try not to carry heavy bags since you will be walking - a backpack or crossbody bag is best! Check the weather for rain/drizzle and bring an umbrella in case. I will run the tour unless there is severe weather. <br><br>Vegans/Vegetarians/Food Allergies:  This tour is NOT vegetarian friendly but my Italians of Greenwich Village and Pierogi walk ARE vegetarian friendly! Please notify me of any food allergies beforehand. <br><br>Handicap Accessible: Yes, this tour is handicap accessible.  Please notify me beforehand<br><br> Meeting point: Faicco's Italian Specialties, 260 Bleecker St, New York, NY 10014 Subways: A, C, E, B, D, F, M at West 4th street, 1 to Christopher Street"
            },

            "experience_included" : [
                "Licensed NYC tour guide",
                "Food and drink samples"
            ],

            "experience_excluded" : [
                "Alcoholic beverages",
                "Additional food purchases",
                "Transportation",
                "Tips are always appreciated!"
            ],

            "experience_host_information" : {
                "about" : "Hello! I’m Greg, a licensed NYC tour guide and 27-year resident of NYC. I live in the neighborhood my family emigrated to from Italy in 1884 and I’m a passionate, witty and fun loving tour guide. I love sharing Bohemian Greenwich Village’s historic sights. I turn each action-packed, scrumptious tour is an off-off-off Broadway show, sharing food, history, intrigue and fun narrated by me - Greg Marro. So come and eat, tour and explore. <br><br>My tour company is a 2017 TripAdvisor Certificate of Excellence recipient and ranked the 13th best food tour in NYC!<br>",
                "name" : "Greg Marro",
                "profile_picture" : "https://www.filepicker.io/api/file/Bo4O1p0mQ0ue22Uyamut"
            },

            "experience_cancelation_policy" : "Customers will receive a full refund within 24 hour notice of cancellation. Processing refunds may take up to 7 business days. Customers can reschedule a tour OR request a full refund when operator cancels due to weather or unforeseen circumstances. No shows are charged the full price. If a customer does not show 30 minutes after tour start time, the customer will be considered a no show.",

            "special_cancelation" : true,


            "experience_group_size" : "2 - 15 guests",

            "experience_categories" : [
                "Walking tour",
                "Food tour",
                "West Village",
                "History"
            ],

            "experience_for" : [
                "Friends",
                "Couples",
                "Solo Travelers",
                "Native New Yorkers looking for something new",
                "Birthday celebrations",
                "Bachelorette parties",
                "Kids",
                "Families"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide",
                "Top NYC food tour on TripAdvisor"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/TKHP1yYsS8iTAe5LOTbL",
            "experience_title" : "Metropolitan Museum of Art Tour",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Explore the history of the MET with a professional guide",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "Not included",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "3"
            },

            "experience_pricing" : {
                "price_1_person" : 69
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Thursdays and select weekdays: 10:45 am & Saturdays: 3 pm",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/BGSvMiAqQOWkxlrnWGLD",
                "https://www.filepicker.io/api/file/4YtxenSOQKWvPre1oYC4",
                "https://www.filepicker.io/api/file/Gd8BXySATXurzqekwvIw",
                "https://www.filepicker.io/api/file/Vbf0dvuKRseEZESlUuLD",
                "https://www.filepicker.io/api/file/UuuKBIRThaoeNrurRzAf",
                "https://www.filepicker.io/api/file/JU0xBJ9RQtSvwLjHgnjQ",
                "https://www.filepicker.io/api/file/YOn6jPiQQhGrlaQqI6uu",
                "https://www.filepicker.io/api/file/R9bbWYoST2XGY27onURC",
                "https://www.filepicker.io/api/file/cCjV7HvySIq2hVs2gAWn"
            ],

            "experience_long_description" : {
                "description_by_hour" : "You may have seen New York's Metropolitan Museum of Art before, but you've never seen it like this.  Travel through 6,000 years and across the globe in just a few hours, to gain a greater understanding of the length and breadth of this world-class collection.  In small groups of 15 people or fewer, you’ll delve into the history and art of the Met, seeing works come to life through the stories of your expert guide.<br><br>Highlights include : <br><br>	On our extended Met tour we cover major highlights of the collection - and some fascinating less-visited pieces – in 3 hours. <br>	Perfect for art and history lovers, we cover Ancient Egyptian tomb models, to Vermeer and van Gogh, to the infamous Madame X, the iconic Washington Crossing the Delaware and more. <br>	Includes a special visit to the Met rooftop garden for spectacular views over Central Park (May-October only, weather permitting). <br>	With pre-reserved tickets included in the price you won’t waste time waiting in line. <br>	Small groups of 15 people or fewer and expert guides keep your tour intimate and engaging. <br><br>Additional details: <br><br>We start our tour in the ancient world, with a visit to Ancient Egyptian tomb models.  Incredibly well preserved, these pieces were a more important discovery than they seem, as they offered pictorial insight into what life in Ancient Egypt was like. This insight continues at the incredible Temple of Dendur, fully intact and surreally displayed inside a naturally lit atrium, nestled in Central Park. <br><br>Our world tour returns to New York for stained glass by Tiffany and then hops over to Britain to size up the armor of notorious King Henry VIII.  We then head east for the Antioch Chalice, believed by some to be the Holy Grail itself, the cup from which Jesus drank on the night he was betrayed.  Believe the story?  You’ll have time to debate its merits with your expert guide.  For historians our next few stops are a true delight – the Greek and Roman wing contain elegant statues, imperial Roman busts, and intact frescos buried along with those at Pompeii. <br><br>Off to exotic Oceania to see boldly carved Bisj poles from Papua New Guinea, for which a Rockefeller gave his life.  We’ll then move to the second floor to admire Water Lilies by Monet, a Thinker by Rodin, and the swirling strokes of van Gogh. <br><br>It’s break time inside the museum or atop the rooftop garden (May-October only, weather permitting) for verdant vistas of Central Park. <br><br>The tour continues to the Golden Age of Dutch painting, perusing portraits by Rembrandt and marveling at the virtuosity of Vermeer.  After a brief passage through Italy, it’s off to Spain to see El Greco and to  France for Jacques-Louis David’s famous Death of Socrates. <br><br>A little scandal is in store, as your guide gives the inside story of John Singer Sargent’s infamous Madame X.   You’ll then be dwarfed by the immense iconic Washington Crossing the Delaware – one of the most recognized paintings in the United States. <br><br>Besides from what’s listed here, you’ll see little surprises and quirks of the collection as you tour.  Our small group and expert guides will allow you to ask questions, be engaged, and take the most from your Met experience! <br><br>Sites Visited: <br><br>	Ancient Egyptian Tomb Models (original and perfectly preserved) <br>	Temple of Dendur<br>	Egyptian mummies<br>	Armor of King Henry VIII<br>	Antioch Chalice a.k.a. the 'Holy Grail'<br>	Greek and Roman Statuary<br>	Ancient Roman Frescoes<br>	Tiffany glass and mosaics<br>	Rodin sculptures<br>	Bisj Poles from New Guinea<br>	Claude Monet – Water Lillies<br>	Vincent van Gogh - Selected Works<br>	Auguste Rodin - Sculptures<br>	Rembrandt van Rijn - Portraits<br>	Johannes Vermeer - Selected Paintings<br>	Jacques-Louis David's Death of Socrates<br>	Madame X by John Singer Sargent<br>	Washington Crossing the Delaware by Emmanuele Leutze<br>	Rooftop Garden (May–October only, weather permitting) <br><br>Important Notes: <br><br>	Gratuities to guides are appreciated but never obligatory. <br>	Please note that the tour meeting time is 15 minutes prior to the start time. No refunds or re-bookings can be provided for late arrivals or no shows after tour commencement or departure. <br>	The Temple of Dendur is occasionally rented out for private events with no advance notice provided.  While usually this occurs in the evening times, closures may impact this tour.  In such cases, other works from the Egyptian collection will be substituted.  Even more rarely, the Met may rent out select rooms for private events in which the same rule of substitution applies. <br>	Please note that the Met rooftop is closed during the winter from November through April and reopens from early May through the end of October, weather permitting. <br><br>Meeting Point: <br><br>	Main lobby of the Metropolitan Museum, at the statue of the Pharaoh, on your right upon entering. <br><br>Meeting Point Directions: <br><br>	ARRIVING BY TAXI: Most cab drivers will know the Metropolitan Museum of Art.  The exact address to tell a cab driver is East 82nd Street and 5th Avenue. <br>	ARRIVING BY SUBWAY: 4,5,6 (green line) to 86th Street station.  Upon exiting the station, walk west to 5th Avenue (which borders Central Park), then walk south until the main entrance. <br>	ARRIVING BY SUBWAY: The closest and easiest station is the 86 St station, serviced by the [4,5,6] green line. The 4 and 5 are express trains, and therefore the quickest from downtown.  Exit the station, and walk west to 5th avenue (which borders Central Park), then walk south until the main entrance. <br><br>ARRIVING BY FOOT: You can walk to the museum through central park, on a picturesque path called East Drive.  Along this path stands an ancient Egyptian obelisk (called Cleopatra's Needle NYC) which is located directly behind the museum.  However, you cannot enter the museum from the back (west-facing side) so you'll have to go to the, east-facing, front 5th avenue entrance to go inside. <br><br>Price per persons : Adult: $49, Child (4 – 11 years old): $39 & Children under 4 are FREE <br>"
            },

            "experience_included" : [
                "Expert local tour guide",
                "Reserved 5pm timed-entry 9/11 Museum tickets (non-guided)",
                "Small groups of 15 people or fewer"
            ],

            "experience_excluded" : [
                "Gratuities",
                "Hotel Pick-Up/Drop-Off",
                "Food and beverages are not included"
            ],

            "experience_host_information" : {
                "about" : "We are a premier walking tour company in NYC and believe that the best way to travel is to walk! We believe in slow travel, no matter how long your trip. In taking the time to appreciate your surroundings and learn a little about the local history and culture – to eat as locals do and discover those hidden nooks and crannies that they proudly show to visiting friends.<br><br>We believe in discovering a city at ground level, which is why our tours focus not so much on the facts and figures, but on the stories and legends behind those – the little details that make a city, a building, a painting or even a street corner so special. On the seasonal ingredients and culture that make the food so different. <br><br>We believe in walking, not cattle herding, which is why we keep our group sizes smaller, so you can always interact with your guide. <br><br>We believe in supporting local industry, which is why all of our suppliers and the people you meet on our tours are locals, and why we've partnered with local associations such as the Broadway League, chef Mario Batali and Eldridge Street Synagogue. That's why your tour guides are locals too – so you're really getting a local insight. <br><br>Wherever you travel, take some time to slow down and really see the place you're visiting — take some time to take walks. <br>",
                "name" : "Walks of New York",
                "profile_picture" : ""
            },

            "experience_cancelation_policy" : "In order to provide the highest level of service with top guides and guaranteed tour departures, cancellations and amendments may be subject to fees. The policy applies to all group and private tours booked on a per person and per tour basis. <br>Group tours & activities: <br>	Cancellations received greater than 72 hours prior to tour commencement are fully refundable. <br>	Cancellations received within 72 hours of tour commencement are nonrefundable. <br>	Amendment requests are subject to availability and price changes. <br><br>Private tours & activities: <br>	Cancellations received greater than 7 days prior to tour commencement are fully refundable. <br>	Cancellations received within 7 days of tour commencement are nonrefundable. <br>	All amendments made to private tours may be subject to an administrative fee up to 20%.<br><br>Late Arrivals & No Shows: <br>	Late arrivals and no shows are nonrefundable. This is applicable to any tour participant that fails to arrive, or arrives after tour departure. <br>Changes to this Policy: <br>From time to time, the terms of this policy may change at the Company's discretion. In the event of such changes, the new policy will apply for all tours booked after the date and time of the policy change. <br>",

            "special_cancelation" : true,


            "experience_group_size" : "15 guests",

            "experience_categories" : [
                "Museum tour",
                "History tour",
                "Art tour",
                "Manhattan"
            ],

            "experience_for" : [
                "Families",
                "Couples",
                "Friends",
                "Senior citizens"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/wXWhedUQH2BiI8ZsIyCs",
            "experience_title" : "Music and Food on MacDougal Street",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Food tour + Music History of the West Village",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "2"
            },

            "experience_pricing" : {
                "price_1_person" : 50
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Monday - Friday and Sunday: 11 am, 2 pm and 5 pm Saturday: 11 am and 5 pm",


            "experience_photos" : [

            ],

            "experience_long_description" : {
                "description_by_hour" : "Explore Greenwich Village's most famous street, with its rich and colorful musical history. I will be your entertaining guide for 2 hours as we stroll through MacDougal street and taste some local bites including:<br><br> The bites:<br>●Sticky Finger's Bacon Mac Fries<br>●A crunchy Ben's Pizza Grandma slice<br>●Mamoun's steamy falafel<br>●Fresh-roasted and brewed Porto Rico coffee<br>●A decadent Molly's Cupcake<br><br>The sights: <br>●The Beatnik Riot and 1950's folk music <br>●Historic Washington Square Park <br>●Cafe Wha! and Beatnik cafe sites<br>●Bob Dylan's and Pete Seeger's Village residences<br>●Sing along with Greg (or not!) <br><br>What to Wear/How to Prepare: This is a walking tour so wear comfortable shoes - we will walk approximately 1 mile.  Try not to carry heavy bags since you will be walking - a backpack or crossbody bag is best! Check the weather for rain/drizzle and bring an umbrella in case. I will run the tour unless there is severe weather. <br><br> Vegans/Vegetarians/Food Allergies:  This tour is vegetarian friendly - please notify me beforehand and let me know of any food allergies. <br><br> Handicap Accessible: Yes, this tour is handicap accessible.  Please notify me beforehand<br> Electric Lady Studios, We will meet at 52 W 8th St, New York, NY 10011 You can take the following subways: A, C, E, B, D, F, M at West 4th street"
            },

            "experience_included" : [
                "Licensed NYC tour guide",
                "Food and drink samples"
            ],

            "experience_excluded" : [
                "Alcoholic beverages",
                "Additional food purchases",
                "Transportation",
                "Tips are always appreciated!"
            ],

            "experience_host_information" : {
                "about" : "Hello! I’m Greg, a licensed NYC tour guide and 27-year resident of NYC. I live in the neighborhood my family emigrated to from Italy in 1884 and I’m a passionate, witty and fun loving tour guide. I love sharing Bohemian Greenwich Village’s historic sights. I turn each action-packed, scrumptious tour is an off-off-off Broadway show, sharing food, history, intrigue and fun narrated by me - Greg Marro. So come and eat, tour and explore. <br><br>My tour company is a 2017 TripAdvisor Certificate of Excellence recipient and ranked the 13th best food tour in NYC!<br>",
                "name" : "Greg Marro",
                "profile_picture" : ""
            },

            "experience_cancelation_policy" : "Customers will receive a full refund within 24 hour notice of cancellation. Processing refunds may take up to 7 business days. Customers can reschedule a tour OR request a full refund when operator cancels due to weather or unforeseen circumstances. No shows are charged the full price. If a customer does not show 30 minutes after tour start time, the customer will be considered a no show.",

            "special_cancelation" : true,


            "experience_group_size" : "2 - 15 guests",

            "experience_categories" : [
                "Walking tour",
                "Food tour",
                "West Village",
                "History"
            ],

            "experience_for" : [
                "Friends",
                "Couples",
                "Solo Travelers",
                "Native New Yorkers looking for something new",
                "Birthday celebrations",
                "Bachelorette parties",
                "Kids",
                "Families"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide",
                "Top NYC food tour on TripAdvisor"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/NalFSXdGQWKUuqTRDct5",
            "experience_title" : "TV + Movie Locations with NBC Studios",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Visit the studios where your favorite TV shows are filmed",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "Not included",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "3"
            },

            "experience_pricing" : {
                "price_1_person" : 84
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Mondays: 12 noon, Saturdays: 1:30 pm",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/2TIRJrdTe6LbqyuFCCIg",
                "https://www.filepicker.io/api/file/7zx2c89hSC2FUK8HFKog",
                "https://www.filepicker.io/api/file/FOXqRQTRfagM6eX0aHkX",
                "https://www.filepicker.io/api/file/vipyAsE4S4e61uLeXoj9",
                "https://www.filepicker.io/api/file/du4x0pMUTzqAC2TaYKTt"
            ],

            "experience_long_description" : {
                "description_by_hour" : "Highlights:<br>•See some of your favorite TV and movie locations, like the fountain from ‘Friends’ and Tiffany’s from ‘Breakfast at Tiffany’s’.<br>•Enjoy a small group of 12 people or fewer so you get plenty of personal attention from your guide. <br>•Film your own DIY talk show in a real TV studio - everyone gets a job and the producers will email you a cut after the tour. <br>•Visit the studios where some of NBC’s most iconic shows are made like SNL & the Tonight Show and learn what it takes to meet their strenuous shooting schedules every week. <br>•Take home a copy of your talk show and use it to launch your career in show biz (or more likely just show your friends). <br><br>Overview: <br>Have you ever wanted to go behind the scenes at one of America’s most iconic TV studios to see what goes into the making of your favorite shows? This tour is the perfect opportunity to make that dream come true. This hands-on tour won’t only have you visiting the studios of some of America’s most beloved shows - like those of SNL and the Today Show - you’ll also get to film your own talk show segment which the producers will email to you when you get home - the perfect souvenir from this all-access tour. To round things out you’ll hit the streets to see show-business landmarks like the Radio City Music Hall as well as a collection of the most famous shooting locations from television shows like ‘Friends’ and movies like ‘Wall Street’. <br><br>Description: <br>Discover familiar sights on this TV & Movie Locations Tour with Official NBC Studios. <br>Be amazed how many many iconic television and movie moments were shot within a stone's throw of NBC Studios. Together with your guide you’ll take a guided tour of some of the most famous set locations in NYC from both TV and film. New York City is packed with famous spots but it’s often hard to recognize them without someone in the know to show you. You’ll see Tiffany’s from ‘Breakfast at Tiffany’s’, the famous fountain from “Friends”, 21 club from ‘Wall Street’ and the Seinfeld Soup Nazi stand, among many others. Along the way you’ll pass showbiz landmarks like CBS headquarters and Radio City Music Hall. After you see where they shot some of your favorite scenes you’ll never look at the city in the same way again. <br><br>The absolute highlight of your tour will be a visit of the NBC studios - one of America’s most iconic TV studios. NBC studios has consistently produced some of the best television shows in America for more than 80 years. Now you can go behind the scenes at their headquarters in Rockefeller Center to get an unprecedented view of their production process. This tour is the perfect opportunity to make that dream come true! <br><br>Recently revised and re-launched, the NBC Studio Tour starts by visiting two of the official production studios, such as the ones where they shoot Saturday Night Live or the Tonight Show Starring Jimmy Fallon. Then it’s on to the nerve centers of NBC – the video & audio studios and the control center where satellite feeds are monitored 24 hours a day. You’ll get a 360-degree view of the production process and see just how many moving parts it takes to make a single television show.  You’ll also get to film your own 5-minute talk show segment which the producers will email to you when you get home - the perfect souvenir from this all-access tour. <br><br>Sites Visited: <br>•Dozens of filming sites from movies and shows like 'Sex and The City', 'Wolf of Wall Street', 'Home Alone', 'Seinfeld', 'Crocodile Dundee', 'Gossip Girl', 'Die Hard 2' and many more. <br>•A famous Central Park bridge featured in hundreds of movies and tv shows<br>•The 'Friends' fountain<br>•Radio City Music Hall<br>•Rockefeller Center<br>•NBC Studios Tour, including visits to two working tv studios and an opportunity to film your own mock late night tv talk show<br><br>Important Notes: <br>•Gratuities to guides are appreciated but never obligatory. <br>•Please note that the tour meeting time is 15 minutes prior to the start time. No refunds or re-bookings can be provided for late arrivals or no shows after tour commencement or departure. <br>•Please note that all bags will be checked at NBC Security after tour begins. <br>•Photography is not permitted inside NBC Studios<br>•Comfortable shoes are recommended. <br>•Please note, the voucher is NOT redeemable at the NBC Studio ticket desk. <br><br>Meeting Point: <br>•Pulitzer Fountain (In Front of Plaza Hotel) at 59th St and 5th Ave<br><br>Meeting Point Directions: <br>•Arriving by taxi: Tell your driver to stop at Pulitzer Fountain (In Front of Plaza Hotel) at 59th St and 5th Ave<br>•Arriving by subway: N/Q/R 5th Ave/59th St; F 57th St; 4/5/6 59th/Lexington<br>End Point:●NBC Studios, 6th Avenue and 49th St<br><br>Price per Person: Adult: $84, Child (4-12): $79 & Under 4: Free"
            },

            "experience_included" : [
                "Guided tour of NYC’s top TV & movie locations",
                "Official NBC studio tour led by NBC page",
                "DIY talk show session with video keepsake"
            ],

            "experience_excluded" : [
                "Gratuities",
                "Hotel Pick-Up/Drop-Off"
            ],

            "experience_host_information" : {
                "about" : "We are a premier walking tour company in NYC and believe that the best way to travel is to walk! We believe in slow travel, no matter how long your trip. In taking the time to appreciate your surroundings and learn a little about the local history and culture – to eat as locals do and discover those hidden nooks and crannies that they proudly show to visiting friends.<br><br>We believe in discovering a city at ground level, which is why our tours focus not so much on the facts and figures, but on the stories and legends behind those – the little details that make a city, a building, a painting or even a street corner so special. On the seasonal ingredients and culture that make the food so different. <br><br>We believe in walking, not cattle herding, which is why we keep our group sizes smaller, so you can always interact with your guide. <br><br>We believe in supporting local industry, which is why all of our suppliers and the people you meet on our tours are locals, and why we've partnered with local associations such as the Broadway League, chef Mario Batali and Eldridge Street Synagogue. That's why your tour guides are locals too – so you're really getting a local insight. <br><br>Wherever you travel, take some time to slow down and really see the place you're visiting — take some time to take walks. <br>",
                "name" : "Walks of New York",
                "profile_picture" : ""
            },

            "experience_cancelation_policy" : "In order to provide the highest level of service with top guides and guaranteed tour departures, cancellations and amendments may be subject to fees. The policy applies to all group and private tours booked on a per person and per tour basis. <br>Group tours & activities: <br>●Cancellations received greater than 72 hours prior to tour commencement are fully refundable. <br>●Cancellations received within 72 hours of tour commencement are nonrefundable. <br>●Amendment requests are subject to availability and price changes. <br><br>Private tours & activities: <br>●Cancellations received greater than 7 days prior to tour commencement are fully refundable. <br>●Cancellations received within 7 days of tour commencement are nonrefundable. <br>●All amendments made to private tours may be subject to an administrative fee up to 20%.<br><br>Late Arrivals & No Shows: <br>●Late arrivals and no shows are nonrefundable. This is applicable to any tour participant that fails to arrive, or arrives after tour departure. <br>Changes to this Policy: <br>From time to time, the terms of this policy may change at the Company's discretion. In the event of such changes, the new policy will apply for all tours booked after the date and time of the policy change. <br>",

            "special_cancelation" : true,


            "experience_group_size" : "12 guests",

            "experience_categories" : [
                "Walking tour",
                "studio tour",
                "TV & film",
                "Movies"
            ],

            "experience_for" : [
                "Families",
                "Couples",
                "Friends",
                "Birthdays",
                "Senior citizens",
                "Solo travelers",
                "Special Events"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide"
            ]

        },
        {
            "thumbail_image_link" : "https://www.filepicker.io/api/file/T5MLtLLLTaGdH32lsW98",
            "experience_title" : "World Trade Center Tour + 9/11 Museum",

            "experience_location" : "New York City, USA",

            "experience_short_description" : "Visit the key sites of the 9/11 attack with an expert local",

            "experience_ratings" : {
                "ratings_avg" : 0,
                "total_ratings" : 0
            },

            "experience_transportation" : "Not included",

            "experience_length" : {
                "length_type" : "HOURS",
                "length_value" : "2"
            },

            "experience_pricing" : {
                "price_1_person" : 69
            },

            "experience_languages" : [
                "English"
            ],

            "experience_start_time" : "Monday - Sunday at 3 pm",


            "experience_photos" : [
                "https://www.filepicker.io/api/file/P456WOXQnK5jNJ7kaYxQ",
                "https://www.filepicker.io/api/file/gx76WL3OSzGymAlM8T36",
                "https://www.filepicker.io/api/file/IF4cERxTIenbacFaYWpH"
            ],

            "experience_long_description" : {
                "description_by_hour" : "Highlights: <br>•Visit the 9/11 Memorial on a guided tour to learn about the tragic events of September 11, 2001 and see how New York has recovered and rebuilt<br>•See the beautiful 9/11 Memorial Pools and the new One World Trade Center<br>•Includes pre-reserved tickets for the 9/11 Memorial Museum, so you won’t wait in line. Explore the museum exhibits alone, at your own pace. <br>•Explore the surrounding monuments including the Fireman’s Memorial & the Survivor’s tree. <br>•Led by an expert local guide, you’ll hear personal stories from that fateful day, giving your visit a human context, and with small groups and all tickets purchased in advance, your visit is intimate, relaxed and hassle-free. <br><br>Overview: <br><br>Everyone remembers where they were on September 11, 2001. An event that shook the world, the terrorist attacks on the World Trade Center changed the path of recent history in a way we still see every day. Visit Ground Zero to gain a deeper understanding of 9/11, the affect it had on the city (and the world!) and the long struggle undergone in New York City to move forward from that day. <br><br>Description: <br><br>With an expert local guide, you’ll explore not just the 9/11 Memorial & Museum, but the areas and landmarks around the World Trade Center that featured so poignantly in news reports after the attacks. <br><br>At Brookfield Place (previously known as the World Financial Center) you’ll learn about the economic effects of the attack and the struggle to rebuild afterwards. You’ll visit the Eleven Tears Memorial, a touching and personal memorial, which commemorates the 11 American Express employees that died in 9/11. The Winter Garden is another must-see on Vesey Street. You may have missed it on your own, but with a local guide leading the way, you won’t miss a beat. <br><br>After that we’ll head for Ground Zero, to see the stunning 9/11 Memorial Pools, each one built in the footprint of one of the twin towers, and inscribed with the names of all those who perished in the attack. Your guide will take this time to give you a more personal account of the tragedy that unfolded here, taking you to the Fireman’s Memorial and the Survivor Tree to tell you the incredible stories of courage and loss that unfolded right where you stand. <br><br>The last stop on our tour is one we’ll let you manage on your own. The 9/11 Museum is a very well curated space, with artifacts salvaged from the event on display, alongside countless personal stories. It’s a very moving visit, best taken in at your own pace in silence. We still have one last perk though – we’ve pre-reserved your museum tickets, so you’ll skip long lines to gain immediate access. <br><br>We’ve kept our groups small for this tour to ensure a level of intimacy and peace that’s fitting for such a visit, and have chosen only the best local guides to give your tour a more personal feel, giving the 9/11 Memorial and its surrounds a more human context. <br><br>Sites Visited:<br>•St Paul's Chapel<br>•Brookfield Place (formerly known as World Financial Center) <br>•American Express Eleven Tears Memorial<br>•Winter Garden<br>•9/11 Memorial Museum (Museum is non-guided) <br>•9/11 Memorial Pools<br>•Freedom Tower (from exterior) <br>•Fireman's Memorial<br>•Survivor Tree<br>•North Cove Marina<br><br>Important Notes: <br><br>•Gratuities to guides are appreciated but never obligatory. <br>•Please note that the tour meeting time is 15 minutes prior to the start time. No refunds or re-bookings can be provided for late arrivals or no shows after tour commencement or departure. <br>•Please note that guests will need to pass through airport style security to enter the 9/11 Memorial Museum.  Certain items are not permitted in the Museum and such items will be confiscated and will not be returned. Please refer to 9/11 Museum's guidelines on specific prohibited items:  http://www.911memorial.org/security-screening. <br>•9/11 Memorial Museum is non-guided  with 5pm entry. An average visit takes approximately two hours. <br>•St Paul's Chapel is closed on Tuesdays & Thursdays for renovations for the forseeable future and may also be closed on other dates. On the days when St. Paul's Chapel is closed, we will tour the grounds and substitute our inside visit for additional sites important to the events of 9/11 but not normally covered on the tour. <br><br>Meeting Point: <br><br>•Meet in front of St Peter’s Church, at the intersection of Barclay and Church Street; address: 22 Barclay St, New York, NY 10007<br><br>Meeting Point Directions: <br><br>•Arriving by taxi:  Tell your driver to drop you at the intersection of Barclay and Church Street. <br>•Arriving by subway:  2/3/4/5 Wall St Station; 1/R Rector St Station<br><br>End Point: <br><br>•9/11 Memorial Museum, Greenwich Street between Albany Street and Liberty Street<br><br>Price per person:<br><br>Adults: $69, children (4-12): $55 & under 4 years old: FREE"
            },

            "experience_included" : [
                "Expert local tour guide",
                "Reserved 5pm timed-entry 9/11 Museum tickets (non-guided)",
                "Small groups of 25 people or fewer"
            ],

            "experience_excluded" : [
                "Gratuities",
                "Hotel Pick-Up/Drop-Off"
            ],

            "experience_host_information" : {
                "about" : "We are a premier walking tour company in NYC and believe that the best way to travel is to walk! We believe in slow travel, no matter how long your trip. In taking the time to appreciate your surroundings and learn a little about the local history and culture – to eat as locals do and discover those hidden nooks and crannies that they proudly show to visiting friends.<br><br>We believe in discovering a city at ground level, which is why our tours focus not so much on the facts and figures, but on the stories and legends behind those – the little details that make a city, a building, a painting or even a street corner so special. On the seasonal ingredients and culture that make the food so different. <br><br>We believe in walking, not cattle herding, which is why we keep our group sizes smaller, so you can always interact with your guide. <br><br>We believe in supporting local industry, which is why all of our suppliers and the people you meet on our tours are locals, and why we've partnered with local associations such as the Broadway League, chef Mario Batali and Eldridge Street Synagogue. That's why your tour guides are locals too – so you're really getting a local insight. <br><br>Wherever you travel, take some time to slow down and really see the place you're visiting — take some time to take walks. <br>",
                "name" : "Walks of New York",
                "profile_picture" : ""
            },

            "experience_cancelation_policy" : "In order to provide the highest level of service with top guides and guaranteed tour departures, cancellations and amendments may be subject to fees. The policy applies to all group and private tours booked on a per person and per tour basis. <br>Group tours & activities: <br>●Cancellations received greater than 72 hours prior to tour commencement are fully refundable. <br>●Cancellations received within 72 hours of tour commencement are nonrefundable. <br>●Amendment requests are subject to availability and price changes. <br><br>Private tours & activities: <br>●Cancellations received greater than 7 days prior to tour commencement are fully refundable. <br>●Cancellations received within 7 days of tour commencement are nonrefundable. <br>●All amendments made to private tours may be subject to an administrative fee up to 20%.<br><br>Late Arrivals & No Shows: <br>●Late arrivals and no shows are nonrefundable. This is applicable to any tour participant that fails to arrive, or arrives after tour departure. <br>Changes to this Policy: <br>From time to time, the terms of this policy may change at the Company's discretion. In the event of such changes, the new policy will apply for all tours booked after the date and time of the policy change. <br>",

            "special_cancelation" : true,


            "experience_group_size" : "25 guests",

            "experience_categories" : [
                "Walking tour",
                "History tour",
                "Manhattan"
            ],

            "experience_for" : [
                "Families",
                "Couples",
                "Friends",
                "Children",
                "Senior citizens",
                "Solo travelers"
            ],

            "experience_other_qualification" : [
                "NYC Licensed Tour Guide"
            ]

        }
    ];
    // Card click
    $scope.cardClick = function (data) {
        $rootScope.clickCardData = data;
        $location.path('/experienceDetails');
    };

});

//Filter category controller
homeApp.controller("FilterCtrl",function ($scope) {
    $scope.categoryStatus = {
        isopen: false
    };
    //Category Menu
    $scope.categoryMenu = [
        "Family friendly",
        "Cooking",
        "Food",
        "Shopping",
        "Traditional",
        "Anshul",
        "Testing",
        "Category Test"
    ];
    $scope.boroughMenu = [
        "Manhattan",
        "Brooklyn",
        "Bronx",
        "Queens",
        "Borough Test"
    ];

});
homeApp.controller("FilterSearchCtrl",function($scope){
    $scope.categoryItemSelected = function(categoryItems){
        $scope.categoryFilter= categoryItems;
        $scope.categoryFilterDisplay = "Results: ";
        $scope.filterClicked = true;
    };
    $scope.boroughItemSelected = function(boroughItems){
        $scope.boroughFilter= boroughItems;
        $scope.categoryFilterDisplay = "Results: ";
        $scope.boroughFilterDisplay = " ";
        $scope.filterClicked = true;
    };
    $scope.removeFilter=function(){
        $scope.categoryFilter="";
        $scope.categoryFilterDisplay="";
        $scope.boroughFilterDisplay= "";
        $scope.boroughFilter="";
        $scope.filterClicked = false;
    };

});

homeApp.controller("HotelDescCtrl", function($scope){
    $scope.hotelDescHeadline = "Book unique tours and activities from NYC Locals";
    $scope.hotelDescData = "The Bernic Hotel offers a number of unique experiences from actual locals through our partner, Your Local Cousin. Don't just walk through Times Square, take a tour with a Broadway actor and get a behind the scenes look at the costume closet of the Lion King. Celebrating a special occasion? Take a dessert tour of the West Village and get your sugar fix! You can even take a street art tour of Williamsburg or explore DUMBO with some of the best views of the city. If you don't see an experience you want, just ask! We can also make recommendations.";
});
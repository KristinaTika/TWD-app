const books = [
    {   
        id: 1,
        name: 'The Walking Dead: Rise of the Governor',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/f/f7/Risegov.png/revision/latest?cb=20120708025406',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'October 21, 2011',
        characters: ['Phillip Blake', 'Brian Blake', 'Penny Blake', 'Nick Parsons', 'Bobby Marsh', 'April Chalmers', 'Tara Chalmers', 'David Chalmers', 'Tommy', 'Shorty', 'Sonny', 'Cher', 'Bruce Allan Cooper', 'Gabriel Harris', 'Stevens', 'Caesar Ramon Martinez', 'Alice Warren', 'Detroit', 'Charlie Banes', 'Bridges Daughter', 'Gene Gavin', 'Trey Barker', 'Manning'],
        plot: [
            {
                name: 'Part 1: The Hollow Men',
                summary: "'There's nothing glorious in dying. Anyone can do it.' — Johnny Rotten\n The novel begins with Philip, his daughter Penny, his older brother Brian, and his best friends Bobby Marsh and Nick Parsons staying in an upper class house at Wiltshire Estates; the group had been driving for three days away from their home in Waynesboro, Georgia in order to escape the apocalypse, and were heading towards the refugee center in Atlanta, Georgia prior to stumbling upon the walled community - infested with undead and recently abandoned. The group intended to stay only for a night, but upon finding ample provisions and amenities inside, they chose to make it a more permanent settlement, hoping to wait out the crisis.\nAs they go out scavenging and build barricades, the undead become drawn to their presence. Days later, after fending off another small wave of them from the fences, Bobby is bitten by a child-zombie while trying to rest, and immediately turns after dying, prompting Phillip to kill him. With the undead clawing at the barricades continuing to grow in number, the group buries Bobby. Brian goes into the basement and makes a sign that states 'ALL DEAD DO NOT ENTER'. The group packs up their vehicle with weapons and supplies, leaving the next night. Brian posts the sign outside the gateway before they ultimately depart.\nThe survivors are eventually forced to reach Atlanta's outskirts on foot, due to the road being packed with wreckage and abandoned cars. They find the surrounding landscape - and thus civilization at large - in utter ruin, and have many close calls with undead before finding another vehicle, which they use to drive into the city.\nAtlanta appears completely abandoned and marked with the same signs of catastrophe they had seen earlier. Philip drives further into the city despite the omens, but after reaching the Capitol Building, they encounter a vast herd of walkers, which number in the thousands, coming towards them."
            },
            {
                name: 'Part 2: Atlanta',
                summary: " Philip attempts to drive away from the hordes chasing after them, but is quickly surrounded by the city's almost entire infected population. In a fit of both psychotic rage and desperation, Philip drives through the endless crowd, running over many and covering the group's heavy vehicle in gore, which causes it to spin out of control and crash, forcing them once again to go on foot.\n\tRunning from the walkers through the back alleys they are rescued by April Chalmers by being led into her and her family's safe house. Chalmer's family comprised of ailing father David and his daughters, Tara and April Chalmers. The two groups bond into the autumn, clearing biters from the rest of the apartment building, reinforcing it, gathering supplies, and trying to live normal lives. During Part 2, Philip Blake gradually become more violent, bloodthirsty, and volatile and Nick and Brian worries. David dies from lung cancer during this period and turns into a walker, but Philip manages to kill him before he can bite Tara. After this incident Tara develops harsh feelings towards Philip.\n\tPhilip develops a romantic relationship with April, but while the two are out on a scavenging run he ends up raping her. The next morning, April is missing, and Tara threatens Philip, Penny, Brian, and Nick with a gun, demanding that they leave. The survivors reluctantly do so, staying in various safe havens (previously marked by Nick during his reconnoiters of the area) before reaching a motorcycle garage. They jump on a pair of Harleys and ride out into the countryside, away from the city."
            },
            {
                name: 'Part 3: Chaos Theory',
                summary: " The group stops briefly at a deserted rest stop, and then settles at an abandoned plantation house. They stay there for some time with winter approaching, but one day a well-armed gang of drug-addicts invade their home, wanting it for themselves. Philip, with his family held hostage, keeps the gang at bay with an unloaded shotgun, and negotiates that they can have the house if they're allowed to leave. The gang fires at them as they depart, however, and though Nick and Philip manage to take down the gang, Penny - mistaking a gang member for her father - is shot and mortally wounded amidst the battle, dying in Brian's and Philip's arms. Brian, who was assigned to guard her, is beaten savagely by Philip.\n\tOver the proceeding days, a grief-stricken Philip brutally tortures two gang members he had captured (whom he names 'Cher' and 'Sonny'), and pays nightly visits to Penny - now undead - tied to a tree in the orchard. Nick and Brian go out to try and rescue the two prisoners, but Nick ends up euthanizing them due to the severe extent of their injuries. They soon depart, Philip dragging the Penny-zombie with them.\n\tTheir vehicle breaks down a few miles from the plantation, and while on foot they find the town of Woodbury, populated by a small community of survivors. The town is disorganized and comes under frequent undead attack. Three former National Guardsmen, led by 'Major' Gene Gavin, control the town by force, and frequently hold dirt races as entertainment and as an excuse to steal from the townsfolk.\n\tPhilip would continue to become insular and insane, visiting dead Penny tied up in the group's apartment room and feeding her severed human body parts. A few days later, Philip disappears, and Brian follows Nick as he goes looking for him. They find him in the woods, tying up a young girl from the town. Nick intervenes, but with Philip refusing to stop, he opens fire - the blast from his shotgun strikes both Philip and the girl, killing the latter. As Nick goes insane from his actions, Brian angrily shoots Nick in the side of the head. Nick‘s eyes roll back and he falls to the ground, dead. He goes to comfort Philip, who dies in his arms, and then leaves to allow a group of walkers to eat the bodies.\n\tBrian falls into sort of a catatonic state during the next two days grieving for Nick and his brother. Constantly questioning what his brother, Philip Blake would have done in certain situations but he is brought back to his senses when he hears 'GoodBye' somewhere from his semiconscious.\n\tTwo days later a town meeting is called at the courthouse - walkers have surrounded the settlement, attracted by the noise of the dirt races, and Gavin is organizing a defense. Several people speak up against him but Gavin threatens them, shooting dead the town's mechanic as he tries to leave. After Gavin sends his men out to round up the other townsfolk, Brian walks up and shoots Gavin's face. He calls the armed townsfolk in the room to follow him and prepares to take back the town. One of the men, Martinez, is first to greet him, and when Brian is asked his name, he answers 'Philip Blake'."
            }
        ] 
    },
    {
        id: 2,
        name: 'The Walking Dead: The Road to Woodbury',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/1/1c/THE_WALKING_DEAD_Road_to_W.jpg/revision/latest/scale-to-width-down/331?cb=20120809233914',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'October 16, 2012',
        characters: ['Lilly Caul', 'Bob Stookey', 'Joshua Lee Hamilton', 'Megan LAfferty', 'Scott Moon', 'Chad Bingham', 'Donna Bingham', 'Sarah Bingham', 'Lydia Bingham', 'Mary Bingham', 'Ruthie Bingham', 'Harlan Steagal', 'O"Toole', 'Jerry Hennessey', 'Dick Fenster', 'Rhimes', 'Brian Blake', 'Bruce Allan Cooper', 'Gabriel Harris', 'Ceasar Martinez', 'Stevens', 'Alice Warren', 'Sam', 'Johny', 'Davy', 'Haynes', 'Calvin Deets', 'Dean Gorman', 'Johnny Pruitt', 'Travis', 'Stevie', 'Swede', 'Broyles', 'Taggert', 'Hines', 'Trey Barker', 'Manning', 'Stinson', 'Tomy Zorn', 'Greely', 'Johnson'],
        plot: [
            {
                name: 'Part 1: Red Day Raising',
                summary: "'Life hurts a lot more than death.' — Jim Morrison \n\tThe story begins following survivors Lilly Caul, Josh Lee Hamilton, And Bob Stookey as they attempt to recreate some form of community within the woods, nicknamed 'Tent City'. Lilly and Josh are among those who train the kids and teens with schooling and other survival tactics. While others, such as Bob, guard and scavenge for supplies. A hurricane hits Georgia, destroying major areas but sparing the group. Tensions begin to rise however, after several walker hordes descend upon the group, and the antagonism caused by leader Chad Bingham comes to a head, resulting in his death at the hands of Josh. Josh is forced to leave the group but is joined by Lilly, and Bob, who are also joined by two other survivors, Scott and Megan.\n\tSome time passes and the group are barely making it out on their own. The group manage to come across a scavenging team while searching a local Wal-Mart. After initial hostilities, the scavengers, lead by Martinez, welcomes them to their crew and invites them to their community, Woodbury."
            },
            {
                name: 'Part 2: This Is How The World Ends',
                summary: "'The evil that men do lives after them; the good is often interred with their bones.' — William Shakespeare\n\tThe group is lead to Woodbury and are taken back by how the community runs, they soon meet the leader of the group, Phillip Blake. The group begins to separate and begin to take odd jobs and positions within the community. The former Tent-City survivors are found unwelcome by several members within the 'utopia' and, after attempting to calm an escalating situation, Josh is killed.\n\tLilly begins to struggle with herself from the loss, but is tended to by Bob. She soon begins to grow suspicious about Phillip after the incident and several strange encounters with him. Lilly forms a group to find what The Governor is up to but find that Megan has formed a relationship with him. Megan quickly discovers what lies beneath 'The Governors' façade and takes her life, much to the dismay of Bob.\n\tThe group soon reveal his disturbing and tyrannical ideas of law & order and decide that they will fight the Governor. The group, including Martinez, plan to assassinate the leader while out on a run, but the plan quickly falls apart after a horde surrounds the vehicles they encompass. The group are forced to work together and Lilly's life is spared. The Governor gives her and the other insurgent's jobs chopping up dead bodies to feed to the walkers within their new 'coliseum'. She is forced to keep The Governor's secret or risk being killed and vows revenge against The Governor's cruel reign."
            },
        ] 
    },
    {
        id: 3,
        name: 'The Walking Dead: The Fall of the Governor ( parts 1 and 2)',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/5/53/562665_560041260718959_339825824_n.jpg/revision/latest/scale-to-width-down/331?cb=20130718150240',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'October 8, 2013',
        characters: ['Bruce Allan Cooper', 'Gabriel Harris', 'Ceasar Martinez', 'Stevens', 'Alice Warren', 'Sam', 'Brian Blake', 'Penny Blake', 'Lilly Caul', 'Bob Stookey', 'Wess', 'Austin Ballard', 'David Stern', 'Barbara Stern', 'Jameson', 'Miller', 'Saul', 'Harold Abernathy', 'Eugine Cooney', 'Denny', 'Lou', 'Albert', 'Marianne Williams', 'Matthew Williams', 'Earl', 'Jake', 'Smitty', 'Tom Blanchford', 'Gloria Pyne', 'RAymond Hilliard', 'Rudy Warburton', 'Jared', 'Curtis', 'Eric', 'James Lee Steagal', 'Hap Abernathy', 'Matthew Hennesey', 'Ben Buchholz', 'Wilkins', 'Mike', 'Christina Meredith Haben', 'Rick Grimes', 'Glenn', 'Michonne', 'Andrea', 'Carl Grimes', 'Tyreese', 'Patricia', 'Axel', 'Billy Greene', 'Hershal Greene', 'Lori Grimes', 'Judith Grimes', 'Calvin Dupree', 'Meredith Dupree', 'Lucas Dupree'],
        plot: [
            {
                name: 'Part 1: The Gathering',
                summary: "The story begins with Bruce and Gabe fighting in the arena. As the fight concludes, Lilly decides to leave the arena, when the Governor suddenly steps forward, and addresses the people of Woodbury. The Governor tells the people he is aware of their dwindling supplies, and that a group of citizens will be sent out on a supply run soon. Later that night, Lilly has difficulty falling asleep. She finishes off a bottle of cold medicine, and falls asleep. While she is asleep, she has nightmares about her first days in Woodbury, and the death of her other friends. She is awakened in the early morning by Martinez, who has come to take her on the supply run. Along with Martinez, Austin Ballard, Wes, and David and Barbara Stern, they leave Woodbury to go on the supply run. As they ride around, Austin tries to flirt and make small talk with Lilly. She mainly keeps to herself and ignores him though she does find him attractive. They finally come to what they were looking for: a deserted and ransacked Piggly-Wiggly. At first, the group thinks that the run was for nothing, until they see the warehouse behind the Piggly-Wiggly. Martinez thinks the warehouse may contain supplies. They prepare to enter and leave the truck ready to be loaded along with a lookout. There are several dead inside along with many supplies. They clean out the walkers and gather supplies onto pallets for transport. Austin is attacked by a walker that was hiding in a freezer; however, Lilly manages to save his life. The group leaves the warehouse with their supplies as more walkers draw near it. On their way back to Woodbury, they witness a helicopter flying overhead. As they watch it, the helicopter crashes in the woods nearby. They rush to the crash site, with Austin almost getting bitten by a walker that was hiding in a swamp. Everyone seems to drop their guns at the worst possible moments. When they get to the crash site, they discover the pilot dead and the passenger disoriented and severely injured. They make a stretcher for the passenger, who has passed out, and at her insistence also haul out the pilot, and return to their truck.\n\t\tOn their way to Woodbury, the passenger regains consciousness and reveals her name to be Christina. She tells them about her past job, the pilot, and why she wants to give him a Christian funeral, and where they had been hiding at. After talking with the others, she passes out again. They eventually make it back to Woodbury, where Christina is taken to the infirmary. While she stays in the infirmary, she meets Doctor Stevens, and he warns her about the Governor, telling her not to trust him. A short period after this, the Governor comes into the infirmary with Bruce and Gabe right behind him. He asks to be alone with Christina. When they are alone, the Governor seems kindly and asks Christina questions about herself, and where she was previously located. She at first dodges these questions, and gives vague answers. The Governor makes veiled threats and uses some suggestive physical threats without actually touching her. As he is doing this, he continues to question her, and she finally reveals the truth.\n\t\tShe tells of her having been holed up in a news station with many others, and eventually running out of supplies. People started turning on one another. To escape this, her and her friend Mike, who was the pilot and her cameraman, tried to escape by leaving in the news chopper, little did they know someone had tampered with the helicopter's engine. Satisfied by what he heard, The Governor tells Christina to get some rest and welcomes her to settle down in Woodbury because the town needs good people like her. He seems to have sympathy for her ordeal but Christina realizes that the Governor is really just trying to glean information for his own purposes and remembering what Stevens said to her, confronts him. She calls him a bully, and says that Dr. Stevens warned her about trusting him. The Governor drops his facade and attacks her. He mentions giving someone a chance, referring to Stevens, before he chokes Christina to death.\n\t\tGabe comes in, asks what happened, and the Governor tells him to listen as to how they will handle the situation. A short period later, the Governor, as well as Bruce and Gabe, go to Doctor Stevens apartment. The Governor inform him of Christina's death, and how her death is on Stevens' hands because he warned her against the Governor. The Governor informs Stevens that he needs to watch himself, and that if they ever come across another doctor, then Stevens will be easily replaced. Stevens gets the message, and says he will listen to the Governor. The Governor, along with Bruce and Gabe, then leave Stevens apartment. As they are leaving, they hear gunfire coming from the entrance to Woodbury. As they approach the entrance, they see Martinez walking with three strangers (Rick, Glenn, and Michonne). The Governor approaches them, and offers to give them a tour of the city.\n\t\tMeanwhile, Austin leaves the arena fight to go visit Lilly, who had earlier offered to help train him to survive better in the world. They go off to the outskirts of the town, where they train for many hours. Austin gets tired off it, believing Lilly is doing this to make fun of him, and as he leaves he ends up tripping and falling. Lilly helps him up, telling him she didn't mean for any of it to seem mean, and as they are about to share a kiss, Lilly realizes Austin had fallen on his knife and is bleeding from his side. She then rushes him to the infirmary.\n\t\tOn their way there, they come across the Governor, who now has a bandage over his left ear, standing in front of a storage room containing all the arena walkers, who are eating the remains of Christina and Mike. They asked what happened to his ear, and he tells them the visitors that arrived earlier attacked him, and so he chopped off presumably their leader's hand to keep them away. They tell the Governor they hope everything else is ok, and then they continue to the infirmary. When they get to the infirmary, they notice one of the visitors (Rick) lying in the infirmary, and he is missing a hand. Doctor Stevens patches Austin up, and they return to Lilly's apartment. When they get to her apartment, they both get drunk, and end up having sex.\n\t\tMeanwhile, back at the storage units underneath the racetrack, the Governor enters one of the visitor's holding cells (Michonne), and has Bruce take her pants off and tie her legs to opposite ends of the rooms. He then has Bruce leave them alone, and he proceeds to beat and rape Michonne. Back in Lilly's apartment, Austin and Lilly clean themselves up, and before he leaves, Austin tells Lilly he loves her. He then returns to his apartment and goes to sleep, with Lilly doing the same. Meanwhile, back at Michonne's holding room, Bruce is standing outside, and he remarks to himself that the Governor has been in the room for a couple of hours. He wonders what the Governor is doing to her, and how much longer it will be. Just as Bruce's legs are about to give out, the Governor emerges from the room, and returns to his apartment.\n\t\tHe enters his apartment, where his undead niece Penny tries to attack him. He slaps her, and realizes her bucket of food rolled out of her reach. He brings it back to her, and when she doesn't like it because the body parts have spoiled. The Governor remarks that he doesn't see how she eats it, and that he tried it once and it was horrible. He then sits in his recliner and tries to go to sleep, when there is suddenly a knock at his back door. He goes to the back door, and sees Gabe, who is holding a metal box. He gives the box to the Governor, and then the Governor tells Gabe to let no one come up to his apartment, because he needs to get some sleep. The Governor then closes the door, and as he returns to his recliner, he gives Penny Rick's hand, which was inside the box.\n\t\tHe then returns to his recliner, gets two heads out of the box, one belonging to Christina and the other to Mike, and he places them in an aquarium. He then sits in his chair, and stares at his aquariums full of heads, remarking that nothing good is on. Then, in a deep part of his mind, Brian begins to speak up, asking how someone could do such horrible things to the human beings. Philip ignores these questions, and he falls asleep."
            },
            {
                name: 'Part 1: Showtime',
                summary: ''
            },
            {
                name: 'Part 2: Battlefield',
                summary: ''
            },
            {
                name: 'Part 2: Doomsday Clock',
                summary: ''
            },
            {
                name: 'Part 1: The Fall',
                summary: ''
            },
        ] 
    },
    {
        id: 4,
        name: 'Just Another Day at the Office',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/4/4c/16037337.jpeg/revision/latest?cb=20121222131026',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'December 4, 2012',
        characters: ['Brian Blake', 'Caesar Martinez', 'Bruce Allan Cooper', 'Gabriel Harris', 'Gene Gavin'],
        plot: [
            {
                name: 'Plot',
                summary: "The storyline takes place right after the events of The Walking Dead: Rise of the Governor.\n\t\tBrian has taken charge after the death of Gene Gavin. He leads the Woodbury residents during a zombie attack. The town is overrun by zombies and the citizens are being devoured. Brian takes control and stops the slaughter by not only saving the town, but many citizens personally. These actions make the people of Woodbury trust and look up to Brian, some even start calling him The Governor."
            }
        ] 
    },
    {
        id: 5,
        name: 'The Walking Dead: Descent',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/5/5d/The-walking-dead-descent.jpg/revision/latest/scale-to-width-down/328?cb=20140411162052',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'October 14, 2014',
        characters: ['Lilly Caul', 'Bob Stookey', 'Gloria Pyne', 'Hap Abernathy', 'Ben Buchholz', 'Matthew Hennesey', 'Wilkins', 'Barbara Stern', 'David Stern', 'Robbie', 'Alyssa', 'Nathan', 'Mercy Slocum', 'Tiffany Slocum', 'Tyler Coogan', 'Jenny Coogan', 'Calvin Dupree', 'Meredith Dupree', 'Thomas Dupree', 'Lucas Dupree', 'Bethany Dupree', 'Reese  Lee Hawthorne', 'Jeremiah James Garlitz', 'Rose', 'Stephen Pembry', 'Mark Arbogast', 'Joseph Bressler', 'Harold Benjamin Stauback', 'Wade Pilcher', 'Anthony', 'Colby', 'Cailinn', 'Emma', 'Mary Jean', 'Noelle' ],
        plot: [
            {
                name: 'Plot',
                summary: "The Walking Dead: Descent follows the events of The Fall of the Governor, and Lilly Caul’s struggles to rebuild Woodbury after The Governor's shocking demise. Out of the ashes of its dark past, Woodbury, Georgia, becomes an oasis of safety amidst the plague of the walking dead – a town reborn in the wake of its former tyrannical leader, Brian Blake, aka The Governor.\n\t\tBlake's legacy of madness haunts every nook and cranny of this little walled community, but Lilly Caul and a small ragtag band of survivors are determined to overcome their traumatic past-despite the fact that a super-herd is closing in on them.\n\t\tThis vast stampede of zombies, driven by inexorable hunger and aimed directly at Woodbury, becomes their first true test. But Lilly and company refuse to succumb, and in a stunning counteroffensive, the beleaguered townspeople save themselves by joining forces with a mysterious religious sect fresh from the wilderness.\n\t\tLed by an enigmatic preacher named Jeremiah Garlitz, this rogue church group seems tailor made for Woodbury and Lilly’s dream of a democratic, family-friendly future. The two factions meld into one, the town prospers, and everything seems hopeful for the first time since the plague broke out.\n\t\tBut things – especially in the world of the walking dead – are often not what they seem. Jeremiah and his followers harbor a dark secret, the evidence of which very gradually begins to unravel.\n\t\tAlong with a popular TV show also based on Kirkman’s AMC comic books, The Walking Dead franchise is just getting better and better with Bonansinga’s newest novel. In a stunning and horrifying finale, the world for Lilly and her close friends is turned upside down, and it is solely up to Lilly Caul to cleanse the town once and for all of its poisonous fate."
            },
            {    
                name: 'Lake of Fire',
                summary: "'The days of punishment have come, the days of retribution have come; Let Israel know this! The prophet is a fool, the inspired man is demented. And there is only hostility in the house of God.' — Hosea 9:7-8 \n\t\tThe fortified town of Woodbury is among the few safe-places left in the post-apocalyptic Georgia. The leader, Lilly Caul, is telling the Dupree's some of the town's history. About The Governor and the events of The Prison, but reassures them that everything is in the past and the town has a bright future. The Dupree's are reluctant, and after a sudden roamer attack, Meredith decides to leave against her husband's will. Lilly bids them farewell, and tells them that the door will always be open for them.\n\t\tIn private, Meredith and her husband argue about whether or not saying is the best option, with Meredith affirming that the people of Woodbury won't be so welcoming after they find out about her 'condition', to which Calvin replies that Woodbury might have the type of medication that she needs.\n\t\tElsewhere, Matthew Hennessey and 'Speed' Wilkins are walking on foot after their vehicle got stuck in the mud. After walking three miles, they find some gas in a small town, but get separated after being ambushed by a group of roamers. After reuniting, they discover a gigantic herd, numbered in the thousands, in a field nearby, heading directly to Woodbury - The Prison assault created a chain-reaction that attracted all zombies in the area. They immediately rush back to their vehicle to warn the town."
            }
        ] 
    },
    {
        id: 6,
        name: 'The Walking Dead: Invasion',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/9/98/The_Walking_Dead_Invasion.jpg/revision/latest/scale-to-width-down/329?cb=20150318220608',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'October 6, 2015',
        characters: ['Lilly Caul', 'Bob Stookey', 'Gloria Pyne', 'Barbara Stern', 'David Stern', 'Thomas Dupree', 'Lucas Dupree', 'Bethany Dupree' , 'Mercy Slocum', 'Tiffany Slocum', 'Tyler Coogan', 'Jenny Coogan', 'Reese Lee Hawthorne', 'Jeremiah James Garlitz', 'Stephen PEmbry', 'Harold Benjamin Stauback', 'Norma Sutters', 'Helms', 'Maywell', 'Miles Littleton', 'Patrick Liam Murphy', 'James Frazier', 'Liland Burress', 'Melissa Thorndyke', 'Rory ThornDyke', 'Chester Gleason', 'Harlan', 'Earl Jerico',' Molly Frazier', 'Louis Packard', 'Thurston Breen', 'Mr. Kenton', 'Mrs. Kenton'],
        plot: [
            {
                name: 'Plot',
                summary: "Out of the ashes of a devastated Woodbury, Georgia, two opposing camps of ragtag survivors develop – each one on a collision course with the other. Underground, in the labyrinth of ancient tunnels and mine shafts, Lilly Caul and her motley crew of senior citizens, misfits, and children struggle to build a new life. But a secret ambition still burns in Lilly’s heart and soul. She wants her beloved town of Woodbury back from the plague of walkers, and now the only thing that stands in her way currently roams the wasted backwaters of Georgia…\n\t\tWay out in the hinterlands, amidst the rising tide of walkers that seem to be pushing in from all directions, the psychotic Reverend Jeremiah Garlitz rebuilds his army of followers with a diabolical secret weapon. He has designs on the destruction of Lilly and her crew – the very people who vanquished his cultish church – and now, for the first time, he has the means to bring a special brand of hell down upon the tunnel dwellers.\n\t\tThe final confrontation between these two human factions unleashes an unthinkable weapon – forged from the monstrous hordes of undead, perfected by a madman, and soaked in the blood of innocents."
            },
        ] 
    },
    {
        name: 'The Walking Dead: Search and Destroy',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/8/89/The_Walking_Dead_novel_sandd.jpg/revision/latest?cb=20160610171326',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'October 18, 2016',
        characters: ['Lilly Caul', 'David Stern', 'Thomas Dupree', 'Lucas Dupree', 'Bethany Dupree', 'Tiffany Slocum', 'Mercy Slocum', 'Jenny Slocum', 'Jenny Coogan', 'Tyler Coogan', 'Norma Sutters', 'Ashley Lynn Duart', 'Bobby Quinn', 'Chelsea Quinn', 'Trudy Quinn', 'Jamie Quinn', 'Frank Steuben', 'Caleeb Washburn', 'Johhny Musolino', 'Martin Haywood Boone', 'Burt Stankowski', 'Eve Betts', 'Sophie Leland', 'Connie', 'Bradley', 'Lyle', 'Doe', 'Rafael Rodrigo Machado', 'John Stack', 'Jennifer Stack', 'Kayla Stack', 'Kourtney Stack', 'Spenser-Li Dryden', 'Sally Dryden', 'Ronnie Nesbit', 'Dina Nesbit', 'Cindy Nesbit', 'Teddy Nesbit', 'Fitz', 'Antoine Spanic', 'Barret Deems', 'Daniel Klouse', 'Weimann Family', 'Fordham Family', 'Shecky'],
        plot: [
            {
                name: 'Plot',
                summary: "For one brief moment, it seems Lilly and her plague-weary band of survivors might just engineer a better tomorrow. Banding together with other small town settlements, they begin a massive project to refurbish the railroad between Woodbury and Atlanta. The safer travel will begin a new post-apocalyptic era of trade, progress, and democracy.\n\t\tLittle do they know, however, that trouble is brewing back home.\n\t\tOut of nowhere, a brutal new faction has attacked Woodbury while Lilly and the others have been off repairing the railroad. Now the barricades are burning. Adults have been murdered, children kidnapped. But why? Why subject innocent survivors to such a random, unprovoked assault.\n\t\tLilly Caul and her ragtag posse of rescuers will soon discover the chilling answers to these questions and more as they launch a desperate mission to save the kidnapped children. But along the way, the dark odyssey will take them into a nightmarish series of traps and hellish encounters with incomprehensible swarms of undead."
            },
        ] 
    },
    {
        id: 7,
        name: 'The Walking Dead: Return to Woodbury',
        photo: 'https://vignette.wikia.nocookie.net/walkingdead/images/4/42/The-walking-dead-return-to-woodbury.jpg/revision/latest/scale-to-width-down/329?cb=20170217053604',
        author: ['Robert Kirkman', 'Jay Bonansinga'],
        publisher: 'Thomas Dunne Books',
        published: 'October 17, 2017',
        characters: ['Lilly Caul', 'David Stern', 'Thomas Dupree', 'Lucas Dupree', 'Bethany Dupree', 'Tiffany Slocum', 'Mercy Slocum', 'Jenny Slocum', 'Tyler Slocum', 'Norma Sutters', 'Miles Littleton', 'Jinx Tyrell', 'Ashley Lynn Duart', 'Mike Bell', 'Jack', 'Cooper Steeves', 'Theodore Bryce', 'Daniels', 'Sonny Hopkins', 'Soames', 'Camo Pants', 'Raymond Nails', 'Glenn Markham', 'Callum', 'Lawrence', 'Johnny Musolino', 'Martin Haywood Boone', 'Arrow', 'Gypsy'],
        plot: [
            {
                name: 'Plot',
                summary: "She has weathered over four years of the apocalypse. She has done things that she would not have dreamt of doing in her darkest nightmares. But she has survived. And now, she has staked a claim in the plague-ravaged city of Atlanta. It is a safe haven for her people, rising high above the walker-ridden streets.\n\t\t But for Lilly Caul, something is missing...\n\t\tShe still dreams of her former home, the little village known as Woodbury – a place of heartache as well as hope. For Lilly, Woodbury has become a symbol of the future, of family, of a return to normal life amidst this hell on earth. The call is so powerful that Lilly decides to risk everything in order to go back...\n\t\tAgainst all odds, Lilly leads a ragtag group of survivors across the impossible landscape of walker swarms, flooded rivers, bands of murderers and untold dangers. Along the way, she discovers a disturbing truth about herself. She is determined to return to Woodbury. No matter what the cost."
            },
        ] 
    },

];

module.exports = { books };
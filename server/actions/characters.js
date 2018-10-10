const characters = [
    {
        main_characters: [
            {   
                id: 1,
                name: "Rick Grimes",
                photo: "https://thebrotherhoodofevilgeeks.files.wordpress.com/2015/09/uhvmsgpr.jpeg",
                actor: 'Andrew Lincoln',
                gender: 'Male',
                hair: 'Dark brown (Graying)',
                age: 'Mid 40s',
                occupation: ['King County Sheriff"s Deputy (Pre - Apocalypse)', 'Leader of the Atlanta Survivor Group (Post - Apocalypse)', 'Former Constable for the Alexandria Safe-Zone (Post - Apocalypse)', 'Leader of the Alexandria Safe-Zone (Post - Apocalypse', 'Co-Leader of the Militia (Post - Apocalypse)'],
                family: ['Lori Grimes - former wife', 'Carl Grimes - son (deceased)', 'Judith Grimes - adopted daughter', 'Michonne - girlfriend', 'Evie - sister or sister-in-law'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'What Comes After',
                status: {
                    alive: {
                        status: "Alive",
                        lifespan: "'Days Gone Bye' to 'What Comes After'"
                    },
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: "Rick Grimes, is a former sheriff's deputy from a small Georgia town. He is often described as an everyman — smart, calm, just, and a good friend, husband and father, but with his own set of flaws. Rick is a natural leader even when he might doubt himself, but these doubts contribute to the ups and downs his character experiences throughout the series. His overwhelming need to do the right thing and protect those who can't protect themselves may pull him away from his family, causing tension within his marriage with Lori and his relationship with his son, Carl.\nActing as a sheriff's deputy, Rick was shot in the line of duty shortly before the events of the apocalypse began. He finds himself waking up from a coma to a deserted hospital, unbelievable carnage, and his family home deserted. He eventually makes his way to Atlanta and then to the survivors' camp where his family is taking shelter, and quickly becomes the leader of those survivors. In his quest to lead them to safety, his son Carl is shot in a hunting accident, which brings the group to the Greene farm. While he is still optimistic about the general goodwill of other survivors when the group arrives at the farm, he is shaken by the circumstances which force them to leave, becoming a much darker, warier version of himself. Focused on protecting his family, he leads the group to the prison and clears it for occupation. While there are threats and incidents at the prison, including the death of Rick's wife Lori and the delusions Rick's grief causes, Rick and his group transform it into a relatively safe and productive community until they are forced out permanently by the Governor and his forces. Rick subsequently travels with Carl, not knowing if the other survivors, including his daughter Judith, are alive or dead. After almost being killed for meat by the cannibalistic inhabitants of Terminus, Rick's group is reunited and begins to travel toward Washington, D.C.\nRick and his group are on the verge of starvation when they are invited to join the Alexandria Safe Zone, and Rick becomes the leader there following the death of Deanna Monroe. Just as he has begun to regain hope for a future for his friends and children, he and the Alexandrians are thrown into a lethal conflict with the Saviors. After losing two of his closest allies, Rick is at his lowest, but eventually accepts his responsibility to work with his new allies and make a plan to bring down the Saviors. During the war against the saviors, Rick's emotions return to destabilize after the loss of his legitimate son Carl Grimes."
            },
            {
                id: 2,
                name: "Shane Walsh",
                photo: "http://pm1.narvii.com/6672/90439426b75ae274d6bc9ff67eb9d728335bd5d7_00.jpg",
                actor: 'Jon Bernthal',
                gender: 'Male',
                hair: 'Black',
                age: 'Mid to Late 30s',
                occupation: ['King County Sheriff"s Deputy (Pre - Apocalypse)', 'Former leader of the Atlanta Group (Post - Apocalypse)', 'Head of the Gun Training (Post - Apocalypse)'],
                family: ['Judith Grimes - daughter', 'Jean = grandmother', 'Lori Grimes - ex-girlfriend (deceased)', 'Patty Taylor - ex-girlfriend (deceased)'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'season 9',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Better Angels',
                        cause_of_death: 'Stabbed in the chest by Rick Grimes.(alive)\nShot in the head by Carl Grimes.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/8/84/Episode-12-rick-shane-stab9234698562.jpg/revision/latest/scale-to-width-down/350?cb=20120320013228', 'https://vignette.wikia.nocookie.net/walkingdead/images/a/a6/Shane_death.jpg/revision/latest/scale-to-width-down/350?cb=20151124172442' ]
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Shane Walsh is a former sheriff's deputy from a small Georgia town. He was Rick's partner in the sheriff's department and his best friend since high school. Until Rick's arrival, Shane led the group of Atlanta survivors. Shane harbors feelings for Lori, and after the start of the apocalypse, when Lori believes Rick is dead, Shane starts a sexual relationship with her. When Rick finds them, Shane relinquishes the leadership position to Rick, while trying to hide his resentment towards Rick and his relationship with Lori. During season two, Shane gradually becomes more unhinged and shows bouts of irrational violence and bloodlust after allowing another survivor to die in an act of self-preservation. Shane eventually lures Rick away from the group to kill him, but Rick kills him first. Shane's reanimation after being stabbed was the first concrete indication to the survivors that it didn't matter how someone died: they would still come back as a walker.\nWhile Rick claims Lori's baby as his daughter, it is strongly implied that Judith is Shane's biological child. This is further supported when Rick specifically tells Michonne that he knows Judith isn't his, but still vows to protect her and treat her as if she was."
            },
            {   
                id: 3,
                name: "Lori Grimes",
                photo: "http://www.femalefirst.co.uk/image-library/square/500/s/sarah-wayne-callies-interview-image.jpg",
                actor: 'Sarah Wayne Callies',
                gender: 'female',
                hair: 'brown',
                age: 'Early to Mid 30s',
                occupation: ['Housewife (Pre - Apocalypse)'],
                family: ['Rick Grimes - former husband', 'Carl Grimes - son (deceased)', 'Judith Grimes - daughter', 'Shane Walsh - ex-boyfriend (deceased)', 'Evie - sister or sister-in-law'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'The Day Will Come When You Won"t be',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Killer Within',
                        cause_of_death: 'Died from blood loss during a caesarean section by Maggie Rhee in order to deliver her baby, Judith.(alive)\nShot in the head by Carl Grimes.(before reanimation, off-screen)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/1/11/Lori_C-section_Death.png/revision/latest/scale-to-width-down/350?cb=20121105072010', 'https://vignette.wikia.nocookie.net/walkingdead/images/2/2c/Lori_after_c-section.png/revision/latest/scale-to-width-down/350?cb=20121105075642' ]
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Lori Grimes is Rick's wife, and Carl and Judith's mother. Believing Rick to be dead, she begins a relationship with Shane, but is loyal to Rick once he returns, and she pushes Shane away from her and Carl, of whom she is fiercely protective. In the second season, she discovers she is pregnant, but is unsure who the father is. She attempts to comfort Shane so he will feel accepted in their group, but she is cautious about his reckless actions, and ultimately warns Rick that Shane is dangerous. At the same time, she is disturbed by her husband's gradual change in this more savage environment, and is shocked after learning he killed Shane. From their escape from the farm till their endeavor to take up residence at the prison, Lori becomes increasingly estranged from Rick and Carl, which she blames on herself. She becomes worried about her baby's survival, and when she goes into labor following a walker attack, Lori convinces Maggie to give her a C-section, despite the fact that it will prove fatal for her. Lori dies giving birth, and Carl is forced to shoot her to prevent reanimation.\nLori is later seen as reoccurring illusions for Rick during his group's stay at the prison."
            },
            {
                id: 4,
                name: "Carl Grimes",
                photo: "https://i1.wp.com/www.projectcasting.com/wp-content/uploads/2013/12/Carl-Atomic-Paw.jpg?resize=500%2C500",
                actor: 'Chandler Riggs',
                gender: 'male',
                hair: 'brown',
                age: '12 (season 1), 13(season 3), 14(season 4)',
                occupation: ['Middle school student (Pre - Apocalypse)', 'Member of the Militia (Post - Apocalypse'],
                family: ['Rick Grimes - father', 'Lori Grimes - mother', 'Michonne - stepmother', 'Judith Grimes - half-sister', 'Evie - aunt'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'Wrath (flashback)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Honor',
                        cause_of_death: 'Bitten on the rib by a walker.(caused)\nSelf-infliced gunshot to the head to prevent reanimation.(suicide, before reanimation, off-screen)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c4/Amc2.png/revision/latest/scale-to-width-down/350?cb=20180226114908', 'https://vignette.wikia.nocookie.net/walkingdead/images/5/58/Carl%27sDeath%283%29.png/revision/latest/scale-to-width-down/350?cb=20180106222814', 'https://vignette.wikia.nocookie.net/walkingdead/images/9/9f/Amc1.png/revision/latest/scale-to-width-down/350?cb=20180226062708' ]
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Carl Grimes is the son of Rick and Lori, and Judith's older brother. Confronted with the harsh realities of his new world, he quickly learns to defend himself and even rescues Rick from a reanimated Shane. In the prison, when his mother dies during childbirth, he shoots her in the head to prevent her from turning. The ease with which he shoots a member of The Governor's militia troubles Rick, leading him to give up his authority over the group and teaching Carl to farm, renouncing violence. When The Governor attacks for the final time, he and Carl are separated from the rest of the group. With Rick severely injured and unconscious, Carl reveals his anger towards his father for failing to protect the group and his mother. He raids neighboring houses for supplies, but is nearly overcome by a walker. He returns to the house and reveals he still depends on his father, and can't bear to bring himself to shoot Rick if he does turn. Rick eventually recovers and they are reunited with Michonne, but are driven from the house by the Claimers. They later meet the Claimers again on the road, where one of the members nearly rapes Carl. After overcoming them with Daryl's help, they travel to Terminus and are captured. After the band of survivors reunites at Terminus, Carl devotes himself to caring for Judith. When he arrives at Alexandria, he is initially awkward with the other teenagers, but befriends Enid, a girl who was outside for a long time also, they spend time together in the woods running from walkers. During the attack of the zombies on Alexandria, Carl gets shot in his right eye by a stray bullet shot by Ron. Carl is saved by Denise, but loses his eye and faces a long recovery, during which he grows darker and more fierce. Negan calls him a future 'serial killer' in the season six finale, which could imply how seriously dangerous Carl may become. Carl, along with Glenn, Rosita, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Eugene and Aaron, are forced to kneel before Negan. In the season seven premiere, Negan begins to force Rick to cut Carl's arm off, but changes his mind once he sees Rick is broken. Carl later sneaks into the Sanctuary against his father's orders to try to kill Negan. While this proves unsuccessful, it does lead Negan to take an unlikely interest in Carl. Carl continues to work in and around Alexandria to try to defeat the Saviors, but begins to believe that Rick is wrong to want to completely destroy them, and wants to go back to welcoming other survivors and working together toward a better future. It is revealed in the season eight midseason finale that is trying to help a stranger named Siddiq and bring to Alexandria Safe-Zone, Carl has been bitten on the abdomen by a walker. He dies by shooting himself after.\nIn later episodes, it is revealed that Carl wrote letters to everyone he had connections to, including Negan. He asks for peace between the Alexandrians and the Saviors, which is quickly shut down by their respective leaders."
            },
            {
                id: 5,
                name: "Morgan Jones",
                photo: "https://img1.telestar.fr/var/telestar/storage/images/3/0/5/6/3056852/lennie-james-morgan-jones_square500x500.jpg",
                actor: 'Lennia James',
                gender: 'male',
                hair: 'black',
                age: 'Mit to Late 40s',
                occupation: ['Former Soldier for the Kingdom (Post - Apocalypse)', 'Former member of the Militia (Post - Apocalypse)'],
                family: ['Jenny Jones - former wife (deceased)', 'Duane Jones - son (deceased)'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'Wrath',
                status: {
                    alive: {
                        status: "Alive",
                        lifespan: "'Days Gone Bye' to 'Wrath'"
                    },
                    dead: ""
                },
                ethnicity: 'African - American',
                description: "Morgan Jones is a survivor staying in Rick Grimes' hometown with his son, Duane. Initially, he suffers from the loss of his wife Jenny at the start of the apocalypse, unwilling to move on while her reanimated body roamed the town. He helps Rick recover after he wakes from his coma, and promises to contact him over radio as Rick continued towards Atlanta. Later, Morgan could not take action to prevent walker Jenny from biting Duane, and he becomes obsessed with clearing walkers from the town. Rick meets him again while scavenging for supplies, and asks him to join them, but Morgan refuses. After he accidentally burned down his home in a fit, Morgan takes to following Rick and eventually encounters a former prison psychologist named Eastman, who helps Morgan find inner peace through the use of aikido. This not only gives Morgan a new mode of self-defense, but also imparts a new dedication to respecting the value of human life. Morgan follows Rick's group from Terminus to Alexandria, where he finds their violent ways, particularly of Carol's, distressing and tries to help show them a better way to deal with the humans that want to harm them. After being asked to locate a missing Carol and becoming a part of the Kingdom, Morgan finally comes to the realization that you have to kill sometimes, and kills Richard in a rage. Morgan helps in the fight against the Saviors and Scavengers, but the violence and the familiar feeling of instability become too much for him, and he once again leaves to be on his own and leads him to Fear The Walking Dead."
            },
            {
                id: 6,
                name: " Dale Horvath",
                photo: "http://images5.fanpop.com/image/photos/29500000/Judge-Jury-Executioner-2x11-the-walking-dead-29592366-500-500.jpg",
                actor: 'Jeffrey DeMunn',
                gender: 'male',
                hair: 'white/grey',
                age: '64',
                occupation: ['Pensioner (Pre - Apocalypse)'],
                family: ['Irma Horvath - wife (deceased)', 'unborn child (deceased)'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'Judge, Jury, Executioner',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Judge, Jury, Executioner',
                        cause_of_death: 'Disemboweled by a walker on Hershal Greene"s farm.(caused)\nShot in the head by Daryl Dixon.(out of mercy)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/d/df/Episode-11-dale-walker.jpg/revision/latest/scale-to-width-down/350?cb=20120305153133', 'https://vignette.wikia.nocookie.net/walkingdead/images/8/8d/Episode-11-dale-guts.jpg/revision/latest/scale-to-width-down/350?cb=20120305153115', 'https://vignette.wikia.nocookie.net/walkingdead/images/9/92/Daledeath.jpg/revision/latest/scale-to-width-down/350?cb=20120320015924' ]
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Dale Horvath is an older man and former car salesman. His age, calm affect, worldly experience, and RV provide the nucleus around which the small community of survivors has formed. He is wise, and the respected elder of the group. He is also rather feisty and not afraid to speak his mind or call others out for mistakes in judgment. Dale manages to talk Andrea out of a suicide attempt by putting himself at risk, as well. Dale becomes wary of Shane, after witnessing that Shane contemplated assassinating Rick beforehand as well as guessing that Shane killed Otis while retrieving medical supplies for Carl. Dale becomes upset at the group when they decide to kill Randall to avoid any risks he might have posed and argues for sparing his life, leading to the execution being postponed. Dale is killed by a walker, who was accidentally lured by Carl earlier that day. Dale's death causes the group to reevaluate their unity and allow Randall to live."
            },
            {
                id: 7,
                name: "Glen Rhee",
                photo: "https://3.bp.blogspot.com/-CMbgR0H4MWk/V8Mat66kEUI/AAAAAAAAAGc/OCHqJrSzUbwS8Mh6qupTPOs8cRY8kClkgCLcB/s1600/Glenn%2BRhee.jpg",
                actor: 'Steven Yeun',
                gender: 'male',
                hair: 'black',
                age: 'Mid 20s',
                occupation: ['Pizza delivery boy (Pre - Apocalypse)', 'Supply runner for the Atlanta Survivor Group (Post - Apocalypse)', 'Former prison council member (Post - Apocalypse)', 'supply runner for the Alexandria Safe-Zone(Post - Apocalypse'],
                family: ['Maggie Rhee - former wife', 'Hershal Greene - father-in-law', 'Beth Greene - sister-in-law', 'Shawn Greene - step-brother-in-law', 'Josephine Greene - mother-in-law', 'Hershal Rhee - son'],
                first_appearance: 'Days Gone Bye (voice only), Guts',
                last_appearance: 'The Cell (photography/corpse)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'The Day Will Come When You Won"T Be',
                        cause_of_death: 'Head smashed by Negan using his baseball bat, Lucille.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/e/ec/GlennDeaths.jpg/revision/latest/scale-to-width-down/297?cb=20171031140751']
                    }
                },
                ethnicity: 'Korean - American',
                description: "Glenn Rhee is a former pizza delivery boy from Atlanta. He is keenly aware of the extreme danger of his missions on behalf of the group, but because of his loyalty to the group he is willing to take the risks. His knowledge of every shortcut in Atlanta proves extremely useful, and he is an excellent scavenger. Glenn thinks well on his feet and shows great compassion and humanity. He develops a passionate relationship with Maggie while living on the Greene farm and later marries her while they are living in the prison. He becomes more confident and displays more courage and ingenuity, as well as leadership qualities later. After being infected with the illness spreading in the prison, he recovers through Hershel and Bob's care. When The Governor attacks the prison, he is unable to find Maggie and goes on a search for her with Tara Chambler. The two encounter Abraham Ford, Eugene Porter and Rosita Espinosa, who plan to bring Eugene to Washington, D.C. to find a cure for the apocalypse. After reuniting with his wife, they journey on their mission to D.C., although Eugene eventually reveals he was a fraud hoping for protection. After his half-sister-in-law, Beth's death, he moves forward with plans to find a safe haven for the group and continues to comfort Maggie in her loss. Glenn continues to be the voice of reason after Beth's death, and moral support for the group. When they arrive at Alexandria, he is assigned to be one of the runners, and he and fellow runner Nicholas become rivals. After Nicholas causes the death of one of the other runners, their feud eventually culminates in Nicholas trying to shoot Glenn, and the two of them getting in a fight. Glenn is unable to kill Nicholas, and the two form a fragile peace. Glenn is seemingly killed when Nicholas commits suicide and the two fall into a horde of walkers, but he was able to use Nicholas's body as a shield and escape under a nearby dumpster. When he arrives back home, he learns that Maggie is expecting their first child. Glenn is part of the raid on the Savior outpost and is forced to kill his first living human, which he finds very difficult. When Maggie experiences complications in her pregnancy, Glenn is captured and, along with Rosita, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan as punishment for the raid. Negan's wrath lands on Abraham, and Daryl's reaction to Abraham's death causes Negan to additionally bludgeon Glenn to death. His remains are taken by Maggie and Sasha to the Hilltop, where he and Abraham are buried together."
            }, 
            {
                id: 8,
                name: "Andrea",
                photo: "https://i.pinimg.com/originals/f0/ef/34/f0ef347fcc63f89ba1537123fcb2c291.jpg",
                actor: 'Laurie Holden',
                gender: 'female',
                hair: 'blonde',
                age: '36 (season 1), 37 (season 3)',
                occupation: ['Civil rights lawyer (Pre - Apocalypse)'],
                family: ['Amy - sister (deceased)', 'Phillip Blake - ex-boyfriend (deceased)'],
                first_appearance: 'Guts',
                last_appearance: 'Welcome to the Tombs',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Welcome to the Tombs',
                        cause_of_death: 'Bitten on the neck by a zombified Milton Mamet.(caused, off-screen, alive).\nSelf-inflicted gunshot to the head.(suicide, before reanimation, off-screen)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/b/bc/AndreaBitten.png/revision/latest/scale-to-width-down/350?cb=20130729212025']
                    }
                },
                ethnicity: 'Caucasion - American',
                description: "Andrea, portrayed by Laurie Holden, is a former civil rights attorney who is extremely protective of her younger sister, Amy. Following Amy's death, she considers suicide, but decides to remain with the group. With the others, they find a farm owned by Hershel Greene. At the farm, she continued to confide and seek comfort in Dale, and gained survivalist skills through Shane. After escaping Hershel's overrun farm, she is rescued by Michonne and is brought by Merle to Woodbury, where she begins a romantic relationship with The Governor. She is eventually caught in the crossfire between Rick and The Governor, and attempts to mend relations, but later turns on The Governor after learning that he intends to attack the prison. She is captured by The Governor and left in a room with a dying Milton, who bites her before she is able to free herself. She is discovered by Michonne, Rick, and the others, and makes amends before taking her own life."
            },
            {
                id: 9,
                name: "Merle Dixon",
                photo: "https://i.pinimg.com/originals/2a/95/98/2a95984c78afa661775a7d67ca2b1b11.jpg",
                actor: 'Michael Rooker',
                gender: 'male',
                hair: 'brown(greying)',
                age: 'Early to Mid 50s',
                occupation: ['Former military serviceman (Pre - Apocalypse)', 'former drug dealer and leader of the Savage Sonds Motorcycle Club (Pre - Apocalypse)', 'former supply runner for the Atlanta Group (Post - Apocalypse)', 'former Woodbury guard (Post - Apocalypse)', 'former lieutenant of the Woodbury Army (Post - Apocalypse)'],
                family: ['Daryl Dixon - brother', 'Will Dixon - father (deceased)', 'Jess Collines - half-uncle (deceased)'],
                first_appearance: 'Guts',
                last_appearance: 'This Sorrowful Life',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'This Sorrowful Life',
                        cause_of_death: 'Shot in the heart by The Governor.(alive)\nRepeatedly stabbed in the head by Daryl Dixon.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c2/Vlcsnap-2014-01-25-14h25m07s154.png/revision/latest/scale-to-width-down/350?cb=20140125192616', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c9/Vlcsnap-2014-01-25-14h33m40s162.png/revision/latest/scale-to-width-down/350?cb=20140125193501' ]
                    }
                },
                ethnicity: 'Caucasion - American',
                description: "Merle Dixon is Daryl Dixon's older brother. A racist and misogynist, Merle grew up in an abusive household. His first meeting with Rick quickly escalates to conflict and Merle is subdued and handcuffed to a pipe, but the keys are lost. The group has to leave him there, but Rick leads a rescue party only to find that Merle has cut himself free and disappeared. Merle returns in 'Walk with Me,' alive, one-handed, and residing at Woodbury, a thriving settlement run by the malicious Governor, where Merle serves as his lieutenant and enforcer. He escapes Woodbury with Daryl, but struggles to integrate into the prison. He attempts to secure peace with The Governor by kidnapping Michonne, but relents and lets her go before returning to Woodbury and luring a pack of zombies to attack in an attempt to assassinate The Governor. He fails and is killed and left to reanimate. He is later discovered by Daryl, who kills him."
            },
            {
                id: 10,
                name: "Carol Peletier",
                photo: "http://www.sparklyprettybriiiight.com/wp-content/uploads/2014/11/The-Walking-Dead-Consumed-MAIN.jpg",
                actor: 'Melissa McBride',
                gender: 'female',
                hair: 'grey',
                age: 'Mid to Late 40s',
                occupation: ['housewife (Pre - Apocalypse)', 'former prison Council Member (Post - Apocalypse)', 'former Cook for the Alexandria Safe-Zone (Post - Apocalypse)', 'Kingdom Soldier (Post - Apocalypse)', 'member of the Militia ( Post - Apocalypse)', 'Leader of the Sanctuary (Post - Apocalypse)'],
                family: ['Ed Peletier - former husband', 'Sophia Peletier - daughter (deceased)', 'Lizzie Samuels - adopted daughter (deceased)', 'Mika Samuels - adopted daughter (deceased)', 'Tobin - ex-boyfriend', 'Ezekiel - boyfriend',],
                first_appearance: 'Tell it to the Frogs',
                last_appearance: 'season 9',
                status: {
                    alive: '',
                    lifespan: "'Tell it to the Frogs' to present",
                    dead: ''
                },
                ethnicity: 'Caucasion - American',
                description: "Carol Peletier, portrayed by Melissa McBride, is Sophia's protective mother and Ed's abused wife. Before the outbreak, she was a meek housewife, and in the beginning of the apocalypse she often depended on others for survival and appeared weak, despite showing compassion and kindness to others, particularly Daryl, and putting the good of the group ahead of her own needs. After Sophia's death, Carol gradually undergoes a transformation from a former victim of domestic abuse to a hardened and pragmatic warrior. She manages to survive under difficult circumstances, and soon begins sharing her survival tactics with others. Her story time program at the prison is revealed as a cover for teaching a group of young children self-defense and a weapons training course. When the father of two children, Lizzie and Mika, dies following a walker attack, she becomes their adoptive mother by the father's wishes. Carol begins taking bold risks in order to survive, especially during the epidemic that breaks out, killing the severely ill Karen and David mercifully to prevent any others from dying. After Tyreese's devastated reaction at losing Karen, Rick banishes Carol from the prison with a car and some supplies. When she sees smoke from the prison's destruction, she heads back and encounters Tyreese traveling with Lizzie, Mika, and Rick and Lori's infant daughter Judith. Carol is further hardened when she is forced to kill Lizzie, who has murdered her sister Mika to convince Carol and Tyreese that turning into a walker is just a change, not death. Carol eventually confesses Tyreese that she was responsible for Karen and David's deaths and Tyreese forgives her. With Judith, the two move towards Terminus only to discover its true nature. Carol successfully destroys Terminus and saves her friends. Rick asks her to rejoin the group and she accepts. She joins Daryl on a rescue mission for Beth in Atlanta, but Beth is killed, leaving Carol devastated. Carol arrives with the group at Alexandria and pretends to be a weak housewife so that the Alexandrians underestimate her, particularly so that she can steal guns from the armory. Young Sam Anderson takes a liking to her despite her efforts to get rid of him, and their odd friendship is what brings to light the abuse Sam, his mother, and his brother face at the hands of his father. Carol believes that the Alexandrians are weak and that they may need to take the settlement for themselves, but after reflecting on her views with Morgan, Carol realizes she had killed about twenty-five people since the beginning of the apocalypse and becomes distraught. She leaves Alexandria and, along with Morgan, discovers the Kingdom. At the Kingdom she is able to receive medical treatment from multiple gunshot wounds. After learning of the deaths of Glenn and Abraham, Carol joins the fight against the Saviors."
            },
            {
                id: 11,
                name: "Daryl Dixon",
                photo: "https://1.bp.blogspot.com/-ilKQ0Wbs4w0/V8MZltkneoI/AAAAAAAAAGY/ANsX5XIc4ZMKrHTNdtwi9tIMqxwb_AW9ACLcB/s1600/Daryl%2BDixon.jpg",
                actor: 'Norman Reedus',
                gender: 'male',
                hair: 'brown',
                age: 'Early to Mid 40s',
                occupation: ['Hunter for the Atlanta Survivor Group', 'former prison Council Member', 'former recruiter for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Merle Dixon - brother (deceased)', 'Will Dixon - father (deceased)', 'Jess Collins - half-uncle (deceased)'],
                first_appearance: 'Tell it to the Frogs',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Tell it to the Frogs' to present",
                    dead: ''
                },
                ethnicity: 'Caucasion - American',
                description: "Daryl Dixon is Merle's younger brother. A Southern redneck with a tough background, Daryl is a survivalist and member of the Atlanta band, who quickly becomes one of Rick's closest confidantes and a leader within the group, a role he is not entirely comfortable with. He develops a close relationship with Carol Peletier in the second season after spending a large amount of time searching for her missing daughter Sophia. Following Shane's death, Daryl becomes Rick's right-hand man. After the fall of the prison, he escapes with Beth, who is later kidnapped while he fights off a group of walkers. He joins a nomadic group (the Claimers) before turning on them to save Rick, Carl, and Michonne. In season five, he goes with Carol to Atlanta in an attempt to rescue Beth, but is forced to return with Noah when Carol is also taken to Grady Memorial Hospital. He returns with the group to break Beth and Carol out and is clearly devastated at Beth's death. He becomes more distant. Once the group arrives at Alexandria, Daryl has a hard time acclimating but befriends recruiter Aaron and eventually becomes a recruiter himself. Daryl and Aaron later discover Morgan in the woods and bring him to Alexandria. After an enormous herd of walkers is discovered near Alexandria, Daryl's role is to drive them away along with Sasha and Abraham. Daryl is driven away from Sasha and Abraham and has a small encounter with three strangers; Dwight, Sherry, and Tina. He is captured by them, who believe him to be a Savior. After Tina is killed, Dwight and Sherry steal Daryl's crossbow and motorcycle. Daryl is later found attempting to rescue Glenn and Michonne, who have been captured by Saviors. He is caught by Dwight, and shot near the shoulder. Daryl, along with Glenn, Rosita, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Aaron, and Eugene are forced to kneel before Negan. Daryl is one of the members of the group forced to kneel for Negan during his infamous 'Eeny, meeny, miny, moe' speech. After the death of Abraham at Negans hands, Daryl becomes outraged when Negan forces a terrified Rosita to look at the remains of Abraham on his bat, Lucille. Daryl lashes out at Negan in retaliation and punches him. Much to Daryl's horror, this causes Negan to further punish the group, responding to this outburst by killing Glenn. Negan takes Daryl back to the Sanctuary as prisoner, where he is tortured physically and psychologically in attempts to convince Daryl to join the Saviors. In 'Hearts Still Beating,' Sherry helps Daryl escape from the Sanctuary. He is hidden among the allied groups to avoid being caught, and is an integral part of the All Out War against the Saviors.\nDaryl Dixon is a television show only character, as he is not in the comics. His role was specifically created for his actor."
            },
            {
                id: 12,
                name: "Maggie Rhee",
                photo: "http://www.clevver.com/wp-content/uploads/2016/01/The-Walking-Dead-Lauren-Cohan.jpg",
                actor: 'Lauren Cohan',
                gender: 'female',
                hair: 'dark brown',
                age: '22 (season 2), 23 (season 3), 24 (season 4), 25 (season 9)',
                occupation: ['College Student (Pre - Apocalypse)', 'Farm Hand on the Greene Family Farm (Pre and Post - Apocalypse)', 'former Govern Assistant for the Alexandria Safe-Zone', 'leader of the Hilltop Colony', 'Co-Leader of the Militia'],
                family: ['Glenn Rhee - former husband (deceased)', 'Hershal Greene - father (deceased)', 'Josephine Greene - mother (deceased)', 'Annette Greene - step-mother (deceased)', 'Beth Greene - half-sister (deceased)','Shawn Greene - step-brother (deceased', 'Arnold Greene - cousin (deceased)', 'Hershal Rhee - son'],
                first_appearance: 'Blodletting',
                last_appearance: 'Who Are You Now',
                status: {
                    alive: '',
                    lifespan: "'Bllodletting' to 'Who Are You Now'",
                    dead: ''
                },
                ethnicity: 'Irish - American',
                description: "Maggie Greene is Hershel's daughter and Beth's elder half-sister. A tomboy at heart, she scavenges supplies from the local town. She develops strong feelings for Glenn, impressed by his bravery and loyalty to the group. After the fall of the farm, she settles 8 months later at the prison with the rest of the group. She and Glenn are later captured and interrogated by Merle and The Governor, who forces her to undress and threatens her with rape to intimidate Glenn into giving up information. After a rescue mission, she continues to be proactive in defending the prison during The Governor's attacks, killing several snipers and soldiers to protect the prison survivors. She soon marries Glenn. When Glenn is infected by the deadly influenza virus that has spread across the prison and her father risks exposure by caring for the sick, she is angry and frustrated but is able to help when she rushes in to rescue her father and husband from the reanimated infected that overrun the quarantine zone. The Governor returns to the prison and Maggie witnesses her father's execution in horror. She defends the prison against The Governor's militia before escaping the overrun compound with Sasha and Bob, unsure if Glenn and her sister are alive or not. Deciding that Glenn is alive, Maggie searches for and finds him, and joins the mission to D.C. for a cure. She receives news that her sister is still alive, only to be left heartbroken once she arrives too late to meet her, as Beth has just died. Maggie becomes depressed after her sister's death, but begins to recover before the group arrived at Alexandria. Once in Alexandria, Maggie acts as Deanna's assistant. She tries to persuade Deanna not to exile Rick and also prevents Sasha from killing Gabriel. Maggie later discovers she is pregnant and worries with the possibility of Glenn's death. When they reunite, she joins the group to go to the Hilltop Colony where she negotiates a deal with Gregory for half of their supplies. When Rick initiates a plan to take out the Saviors, Maggie and Carol are captured by a female group of Saviors and Maggie is forced to kill them, as well as some others, to protect herself and the baby. She forms a maternal bond with Enid. When Enid gives Maggie a haircut, she collapses on the floor in pain and she is taken with a group to reach the Hilltop to see a doctor. Maggie, along with Glenn, Rosita, Daryl, Michonne, Abraham, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan before they can reach the Hilltop. Maggie is forced to watch as Negan kills Glenn as punishment for Daryl's strike. A devastated Maggie tells Rick to prepare to fight Negan as she attempts to collect Glenn's body. Glenn's death ultimately helps Maggie grow stronger. Maggie moves to the Hilltop for medical treatment along with Sasha and Enid, and eventually takes leadership over Gregory. At the end of the All Out War arc, Maggie is secretly plotting behind Rick's back alongside Daryl and Jesus to kill Negan (who is spared by Rick earlier) in the future."
            },
            {
                id: 13,
                name: "Hershan Green",
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4ingVeEH2joK_0KphFetAUSZhgCV_wVO682Gp31TDl7Fh9t3",
                actor: 'Scott Wilson',
                gender: 'male',
                hair: 'white',
                age: 'Early to Mid 70s',
                occupation: ['Veterinarian (Pre - Apocalypse', 'Group Medic/Former Prison Council Member (Post - Apocalypse'],
                family: ['Josephine Greene - former wife (deceased)', 'Annette Greene - former wife (deceased)', 'Maggie Rhee - daughter', 'Beth Greene -daughter(deceased)','Shawn Greene - step-son (deceased', 'Glenn Rhee - son-in-law', 'Arnold Greene - nephew (deceased)'],
                first_appearance: 'Blootletting',
                last_appearance: 'season 9',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: '"Too Far Gone" (alive), "After"(zombified)',
                        cause_of_death: 'Decapitated by The Governor. (alive)\nStabbed in the head by Michonne(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/9/94/TFG_Hershel_Neck_Slice.png/revision/latest/scale-to-width-down/350?cb=20131202061312', 'https://vignette.wikia.nocookie.net/walkingdead/images/f/fe/LastofHershel.png/revision/latest/scale-to-width-down/350?cb=20131202153803', 'https://vignette.wikia.nocookie.net/walkingdead/images/0/09/Hershel%27s_Head.png/revision/latest/scale-to-width-down/350?cb=20140210040908']
                    }
                },
                ethnicity: 'Irish - American',
                description: "Hershel Greene, portrayed by Scott Wilson, is a veterinarian and farmer, who is also a religious man and former alcoholic. He allows Rick and his group to remain at the farm while Carl recuperates after being shot, but hides from them that he is keeping walkers in his barn, merely believing them to be sick and not dead. When Shane opens the barn and the group kills everyone inside, his worldview is shattered, but he develops a close friendship with Rick and often acts as a voice of wisdom. When the group attempts to clear the prison, he is bitten and Rick cuts off his leg to prevent him from turning into a walker. Hershel becomes a member of the leading council of the prison and counsels the group to work to rebuild a society which can forgive the past wrongs of its members. When the prison becomes infected with the flu, he works as a medic and provides natural remedies to help ease the symptoms of his patients until a cure can be found. He is later taken hostage by The Governor, but is proud to hear Rick offer forgiveness and coexistence to The Governor and his group. The Governor refuses and executes Hershel before attacking the prison."
            },
            {
                id: 14,
                name: "Beth Green",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2014/10/b5c54483_1419_81ab_fcf4_979f275f708a_TWD_504_GP_0610_0054/square.jpg?1522684691",
                actor: 'Emily Kinney',
                gender: 'female',
                hair: 'blonde',
                age: '16 (season 2), 17 (season 3), 17-18 (season 5)',
                occupation: ['High school Student (Pre - Apocalypse)', 'Farm Hand on the Greene Family Farm (Pre and Post - Apocalypse)', 'Dawwn Lerner"s ward at Grady Memorial Hospital (Post - Apocalypse)'],
                family: ['Hershal Greene - father (deceased)', 'Annette Greene - mother (deceased)', 'Maggie Greene - half-sister','Shawn Greene - half-brother (deceased', 'Arnold Greene - cousin (deceased)', 'Glenn Rhee - brother-in-law', 'Jimmy - former boyfriend (deceased)', 'Zach - former boyfriend (deceased)', 'Hershal Rhee - newphew'],
                first_appearance: 'Blodletting',
                last_appearance: 'The Way Will Come When You Won"t Be (archive footage)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Coda',
                        cause_of_death: 'Accidentally shot in the head by Dawn Lerner',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/8/8a/508_Beth_Death.png/revision/latest/scale-to-width-down/350?cb=20141201034640']
                    }
                },
                ethnicity: 'Irish - American',
                description: "Beth Greene, portrayed by Emily Kinney, is Hershel's younger daughter and Maggie's younger half-sister. She sinks into a deep depression after watching her mother, half-brother, and neighbors, who had become walkers and were being housed in her father's barn, get shot by Rick's group, and unsuccessfully attempts suicide. She recovers and survives the fall of the farm before traveling with the group to the prison. She is often seen helping take care of Judith. When the prison becomes infected with the flu, she is put in charge of isolating the group's children to protect them from the deadly virus. She witnesses her father's death at the hands of The Governor and escapes the fall of the prison with Daryl. When they become separated during a walker attack, she is kidnapped. She reappears in season five at Grady Memorial Hospital, where she wakes up and discovers that she is being held in the hospital by a group of corrupt police officers. She regularly tries to fight against their strict regime, killing one officer and helping another patient, Noah, escape, but she is kept alive by the officer in charge, Dawn Lerner. As a result of an exchange plan negotiated by Rick to rescue Beth, she is returned to Rick's group, but Rick refuses to let Lerner take back Noah. Beth stabs Dawn with hidden scissors, but Dawn's instinctive reflexes cause her to fire a single bullet through Beth's head, killing her instantly and unexpectedly."
            },
            {
                id: 15,
                name: "Michonne",
                photo: "https://scontent-iad3-1.cdninstagram.com/vp/5da65d466b5e4646f4c510c41262ce2e/5BFBFD94/t51.2885-15/e35/c0.50.500.500/37594001_219072195446406_1822120200082817024_n.jpg",
                actor: 'Danai Gurrira',
                gender: 'female',
                hair: 'brown',
                age: 'Mid to Late 30s',
                occupation: ['Former Constable for the Alexandria Safe-Zone', 'Member of the Militia', 'Co-Leader of the Alexandria-Safe-Zone'],
                family: ['Mike - former husband (deceased)', 'Andre Anthony - son (deceased)', 'Rick Grimes - boyfriend', 'Carl Grimes - stepson (deceased)', 'Judith Grimes - adopted daughter'],
                first_appearance: 'Beside the Dying Fire',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Beside the Dying Fire' to present",
                    dead: ''
                },
                ethnicity: 'African - American',
                description: "Michonne, portrayed by Danai Gurira, is a resourceful and self-sufficient katana-wielding survivor. Her past, revealed slowly over the series, shows she had survived the initial apocalypse with her three-year-old son Andre, her boyfriend Mike, and their friend Terry. Mike, Terry, and Andre had been attacked by walkers while she was on a supply run, and she blamed Andre's death on Mike and Terry. She used the reanimated Mike and Terry walkers as a means to disguise her scent among walker hordes. She saves Andrea after the group ran off from Hershel's farm, and becomes her friend. When they are brought to Woodbury, Michonne is highly distrustful of The Governor and leaves the community to warn Andrea's friends after witnessing Glenn and Maggie being captured. When Rick's group attacks Woodbury, Michonne joins in and gets in a fight with The Governor, destroying one of his eyes. Michonne becomes a pivot in the conflict between Rick's group and The Governor. Later, when Rick's group is forced to flee the prison after The Governor's attack, Michonne meets up with Rick and Carl, and the three become closer. As the story progresses, Michonne becomes the voice of reason for Rick, reminding him not to take risks. By the time the group has worked their way to Alexandria, Rick and Michonne have started a relationship with each other. Michonne is attacked by a member of the Scavengers and is almost killed."
            },
            {
                id: 16,
                name: "The Governor",
                photo: "https://www.horrornewsnetwork.net/wp-content/uploads/2013/11/The-Walking-Dead-Season-4Live-Bait.jpg",
                actor: 'David Morrissey',
                gender: 'male',
                hair: 'graying brown',
                age: 'Mid to Late 40s',
                occupation: ['Middle-Management Employee (Pre - Apocalypse)', 'former Leader of Woodbury (Post - Apocalypse)', 'Former Leader of the River Camp (Post - Apocalypse)'],
                family: ['Mrs.Blake - former wife (deceased)', 'Penny Blake - daughter (deceased)', 'Andrea - ex-girlfriend (deceased)', 'Lilly Chambler - ex-girlfriend (deceased)'],
                first_appearance: 'Walk With Me',
                last_appearance: 'What Happened and What"s Going On (hallucination)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Too Far Gone',
                        cause_of_death: 'Stabbed through the back by Michonne. (caused)\nShot in the head by Lilly Chambler.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/a/a4/GovStabbed.png/revision/latest/scale-to-width-down/350?cb=20131202060219', 'https://vignette.wikia.nocookie.net/walkingdead/images/3/39/Wd1.png/revision/latest/scale-to-width-down/350?cb=20131217163104', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/ce/Philip%27sCorpse.jpg/revision/latest/scale-to-width-down/350?cb=20160423010223']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "The Governor (real name, Phillip Blake), portrayed by David Morrissey, is the leader of the fortified town of Woodbury. He is a charismatic man, who is nevertheless power-mad and willing to kill anyone to secure the supplies needed to strengthen the town. When Merle rescues Andrea and Michonne, he quickly develops a romantic relationship with Andrea, but Michonne remains skeptical. When she leaves, he orders Merle to track her and kill her, but she escapes. Merle instead returns with Glenn and Maggie, who are tortured. When Rick leads a rescue party, Michonne steals away to kill The Governor only to find a room full of heads in fish tanks and his reanimated daughter, who she kills. This enrages The Governor and in the ensuing fight he loses his eye. He resolves to take the prison using walkers as a weapon and eventually leading a militia. When they are routed, he murders most of the militia before being abandoned by his remaining lieutenants. He wanders alone before meeting Lilly and Tara using the pseudonym 'Brian Heriot'. He eventually meets up with a larger group and takes it over, murdering its leader and blaming the prison group. He takes Hershel and Michonne hostage and leads his new group to attack the prison, demanding that Rick and his group abandon the prison. He refuses a gesture of cohabitation before murdering Hershel and triggering a battle. Rick and The Governor brawl, with The Governor gaining the upper hand before being impaled by Michonne, and shot and killed by Lilly."
            },
            {
                id: 17,
                name: "Tyreese Williams",
                photo: "http://nerdreactor.com/wp-content/uploads/2015/02/c397235c-63d3-cc1a-0616-0610d54ab08d_twd_501_gp_0505_0010-chad-coleman-cast-in-new-syfy-series-what-does-this-mean-for-tyreese-500x500_c.jpeg",
                actor: 'Chad Coleman',
                gender: 'male',
                hair: 'black',
                age: 'Late 30s to early 40s',
                occupation: ['Ex-NFL Player (Pre -Apocalypse)', 'Former Woodbury Guard (Post - Apocalypse)'],
                family: ['Sasha Williams - sister (deceased)', 'Karen - former girlfriend (deceased)'],
                first_appearance: 'Made To Suffer',
                last_appearance: 'The Day Will Come When You Won"t Be',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'What Happened and What"S Going On',
                        cause_of_death: 'Bitten by Noah"S zombified brother and later dies from blood loss.(alive)\nPut down by Michonne(before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c0/WHW_Tyreese_Bit.png/revision/latest/scale-to-width-down/350?cb=20150209061007', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c9/Tyreese_getting_rekt.png/revision/latest/scale-to-width-down/350?cb=20150211075201', 'https://vignette.wikia.nocookie.net/walkingdead/images/0/09/WHW_Tyreese_Dead.png/revision/latest/scale-to-width-down/350?cb=20150209061026']
                    }
                },
                ethnicity: 'African - American',
                description: "Tyreese Williams, portrayed by Chad L. Coleman, is the leader of a group from Jacksonville, Florida, which includes his sister Sasha as well as Allen's family. After unsuccessfully trying to seek refuge at the prison due to Rick's hallucinations, Tyreese and the others find their way to Woodbury. Tyreese and Sasha become guards at Woodbury's walls, but he becomes wary of The Governor's intentions. When the assault on the prison is declared, Tyreese and Sasha stay behind to protect the innocent civilians. Eventually, Rick's group return to reveal The Governor massacred his entire army, except for lone survivor, Karen. Six months later, Karen and Tyreese form a relationship at the prison and he becomes proactive in supply runs with Daryl, Michonne, Bob, and Sasha. During the flu epidemic that breaks out at the prison, Karen is secretly killed and burned by Carol to prevent the disease from spreading. Furious, he commands Rick to investigate the murders, and attacks Daryl and Rick out of frustration. He helps find medicine for the sick inmates before The Governor returns when their numbers are down. Tyreese fights The Governor's militia along with Rick's group and manages to escape with Rick's infant daughter, Judith, and Lizzie and Mika. They encounter Carol on the road, but Tyreese is unaware of her responsibility for Karen's death. Lizzie's psychotic behavior becomes a threat to Tyreese, Carol, and Judith when she murders her sister, forcing Carol to put her down. Carol then admits to killing Karen to prevent people from dying. Tyreese forgives her, but remains haunted by the situation at the grove where they stayed. Soon, he appears psychologically and emotionally damaged, refusing to kill and trying to teach others about mercy. After reuniting with the group, Sasha is alarmed by his behavior, but seeks his comfort in her own loss. After proposing a mission to save Beth that fails when Beth is killed, the group goes to Noah's home town of Richmond, Virginia for possible sanctuary. Tyreese, however, is bitten in one of the overrun homes, and accepts his fate while hallucinating previously deceased group members, making the choice to let go of his guilt for their losses. The group tries to save him by amputating his arm, but he dies anyway."
            },
            {
                id: 18,
                name: "Sasha Williams",
                photo: "https://img-s3.onedio.com/id-58e2229cf8a5143e0921994a/rev-0/w-500/h-500/s-30c1ec2caf02fa036576d88f532f0f82e087e4be.jpg",
                actor: 'Sonequa Martin-Green',
                gender: 'female',
                hair: 'black',
                age: 'Early 30s',
                occupation: ['Firefighter (Pre -Apocalypse)', 'former Woodbury guard', 'former prison Council Member', 'former guard and marksman for the Alexandria Safe-Zone'],
                family: ['Tyreese Williams - brother (deceased)', 'Bob Stookey - former boyfriend (deceased)', 'Abraham Ford - former boyfriend (deceased)'],
                first_appearance: 'Made To Suffer',
                last_appearance: 'season 9',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'The First Day of the Rest of Your Life',
                        cause_of_death: 'Suicide via ingestion of a cyanide tablet.(alive)\nStabbed in the head by Maggie Rhee.(zombified, out of mercy)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/1/1c/Sasha_Williams_Death_TWD_7x16_The_First_Day_Of_The_Rest_of_Your_Life.png/revision/latest/scale-to-width-down/350?cb=20180226162046', 'https://vignette.wikia.nocookie.net/walkingdead/images/f/f8/SashaZombifiedDeath.png/revision/latest/scale-to-width-down/350?cb=20170715173448']
                    }
                },
                ethnicity: 'African - American',
                description: "Sasha Williams is a former firefighter from Jacksonville, Florida. She travels to Georgia with a group run by her older brother, Tyreese, in search of a safe haven. After passing on the prison, Sasha, her brother Tyreese, Allen, and Ben are welcomed into Woodbury where she protects the walls as a guard. She proves to be a great shot, much better than Tyreese, and decides to stay behind with the people of Woodbury at the walls to protect them instead of joining their army's attack on the prison. They let Rick's group in after Karen explains The Governor's onslaught on his men. Sasha, along with Tyreese, Karen, and other citizens of Woodbury, is taken in by the prison group. At the prison, she is appointed to the prison council, and participates as co-leader on the majority of the supply runs that the prison organizes. She becomes infected by a deadly virus circulating the prison and is forced into quarantine. Hershel keeps her safe in a locked cell block when some infected reanimate as walkers. She is treated by Bob, one of the new prison inhabitants, who gives her medicine. She participates in the battle between her group and The Governor, and escapes the prison with Bob and Maggie. The three later discover the inhabitants in the prison bus have died and reanimated, and Sasha helps put down her undead former comrades. She eventually starts a romantic relationship with Bob, and she is devastated when he dies. This leads her to become a colder, more hardened individual, and her reclusiveness and recklessness only increase when Tyreese dies. Once at Alexandria she becomes a lookout and at one point disappears for a day, hunting walkers in the woods, before Michonne and Rosita find her and convince her to come home. She seeks help from Gabriel, who denies her, and she attempts to beat him but is stopped by Maggie. Sasha begins a romantic relationship with Abraham. Sasha, along with Glenn, Rosita, Daryl, Michonne, Abraham, Maggie, Rick, Carl, Eugene and Aaron, is forced to kneel before Negan. Sasha moves to the Hilltop with Maggie and Enid after Abraham's death as Maggie's protector. Sasha and Rosita decide they are tired of waiting for Rick to attack the Saviors and decide to go themselves. After their plans are compromised, Sasha locks Rosita out of the Sanctuary, saving Rosita's life. Sasha is captured by Negan and put in a cell. When she asks him, Eugene gives Sasha the cyanide tablet he had made so she can determine her own fate. Sasha is put in a casket to travel back to Alexandria as a trade, but she poisons herself on the way there. When Negan opens the casket to prove to Rick she is still safe, a zombified Sasha emerges and tries to attack Negan, leading to the All Out War between the groups. Maggie and Jesus find zombified Sasha and put her down."

            },
            {
                id: 19,
                name: "Bob Stookey",
                photo: "https://i.pinimg.com/originals/ed/77/5c/ed775ced2d014a0aef395ad23da8debc.jpg",
                actor: 'Lawrence Gilliard Jr.',
                gender: 'male',
                hair: 'black',
                age: 'Early to Mid 30s',
                occupation: ['Army Medic (Pre - Apocalypse)'],
                family: ['Sasha Williams - former girlfriend (deceased)'],
                first_appearance: '30 Days Without An Accident',
                last_appearance: 'The Day Will Come When You Won"t Be',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Four Walls and a Roof',
                        cause_of_death: 'Bitten on the right shouder by a walker.(caused)\nStabbed in the head by Tyreese Williams(before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/a/a3/Bob_S5E3_15.jpg.jpg/revision/latest/scale-to-width-down/350?cb=20141028082836', 'https://vignette.wikia.nocookie.net/walkingdead/images/b/b2/Bob_S5E3_33.jpg/revision/latest/scale-to-width-down/350?cb=20141028083907']
                    }
                },
                ethnicity: 'African - American',
                description: "Bob Stookey is a former army medic. He joins the prison community a week before the fourth season opener, '30 Days Without an Accident,' when Daryl found him surviving on his own. Bob maintains a confident face to prove his worth to the group, but struggles with alcoholism and his troubled past. When a deadly influenza virus affects the prison inhabitants, Bob joins Daryl's group to retrieve medicine at a college. Bob then talks to Daryl about being the last survivor of two different groups, and admits responsibility for the death of another member of their group during a supply run when his temptation for alcohol resulted in an attack by walkers, although he is quickly forgiven by Daryl. At the college, Bob retrieves a bottle of alcohol, which is later discovered by Daryl, who loses trust in Bob. When they return to the prison, Bob creates vaccinations to help cure the infected. Bob participates in the battle against The Governor. He is injured but he manages to escape the prison with Sasha and Maggie. After being treated by Sasha, he joins them in their quest to find the prison bus. The three discover the inhabitants in the prison bus have died and reanimated, and Bob helps to put them down. He eventually starts a romantic relationship with Sasha. Later, after the group reunites and escapes Terminus, he joins Rick, Michonne, Sasha, and Father Stokes on a supply run into the nearest town's food bank in 'Strangers.' It is eventually revealed that, during a scuffle between Bob and a walker beneath the sewage water in the food bank's basement, he sustained a bite to his right shoulder, but kept it a secret from everyone else. Later that night, he leaves the church to put himself down, only to be kidnapped by the Hunters. Though he is initially horrified that they are eating his leg, he laughs and taunts them, saying that he is 'tainted meat.' In response, the Hunters savagely beat him and leave him outside the church, where he is found by the group. He dies the next morning, after the group has already killed the Hunters, and Tyreese stabs him in the head to put him down."
            },
            {
                id: 20,
                name: "Tara Chambler",
                photo: "https://i.pinimg.com/originals/a6/12/b1/a612b183c329e54231e1edd830cb2646.jpg",
                actor: 'Alanna Masterson',
                gender: 'female',
                hair: 'dark brown',
                age: 'early to Mid 30s',
                occupation: ['Police Academy Student ( Pre - Apocalypse)', 'former Governor"s Militia soldier', 'supply runner for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['David Chambler - father (deceased)', 'Lilly Chambler - sister (deceased)', 'Meghan Chambler - niece (deceased)', 'Sam - ex-girlfriend (deceased)', 'Alisha - former girlfriend (deceased)', 'Denise Cloyd - former girlfriend (deceased)'],
                first_appearance: 'Live Bait',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Live Bait' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Tara Chambler is a former police academy student, who holes up in an apartment complex with her remaining family — her sister Lilly, her dying father David, and her niece Meghan. They welcome The Governor into their apartment and Tara comes to trust him and follows him as he leads them to join a larger group after her father's death. As he leads an attack on the prison, she refuses to fight when confronted with The Governor's true nature. Glenn discovers a catatonic Tara in the aftermath of the battle, having lost her sister (who killed The Governor out of vengeance), her niece, and her girlfriend Alisha. She agrees to stay with him until he finds Maggie. They later meet Abraham Ford, Dr. Eugene Porter, and Rosita Espinosa, who are on a mission to find a cure for the virus in Washington, D.C. She travels with them and they eventually find Maggie, Bob and Sasha before finding Terminus and being captured and imprisoned by cannibals. The group escapes as the compound is overrun and Tara is formally accepted as a member of the group by Rick, who tells her that he knows she didn't want to be a part of the assault. She accompanies group members to D.C. and develops a strong friendship with Eugene, giving him a chance to prove himself and be accepted like she was. Upon discovering his mission was a lie, she is silent, but later explains to Eugene that he needs to pull his weight within the group. The band of survivors regroup and head to Noah's community in Virginia, suffering several losses in the process before being recruited to a safe zone outside of D.C. called Alexandria. Tara, Noah, and Glenn become supply runners. During one run, Tara is severely injured and knocked unconscious as Noah is killed. Tara later wakes up in a medical room as Rosita watches over her. She soon begins a relationship with Denise Cloyd, the local doctor for Alexandria. She is part of Rick's plan to kill the Saviors at the outpost. After this, she joins Heath on a two-week supply run. While she is gone, Denise is killed by Dwight. Tara and Heath are separated after Tara falls off of a bridge. An unconscious Tara is discovered by the Oceanside community; Tara is able to escape Oceanside but promises she wouldn't tell anyone of their whereabouts. She eventually breaks this promise when Negan takes Alexandria's guns. Tara leads Rick, Daryl, Carl, Michonne, Aaron, Gabriel, Jesus, Enid, Tobin, Eric, Scott, & Francine to Oceanside to take their guns. When Rosita brings Dwight back to Alexandria, Tara repeatedly tells Daryl to kill him. When Daryl doesn't know that Tara is seemingly angry at him."
            },
            {
                id: 21,
                name: "Sergeant Abraham Ford",
                photo: "http://www.femalefirst.co.uk/image-library/square/500/a/abraham-the-walking-dead-season-5-part-b.jpg",
                actor: 'Michael Cudlitz',
                gender: 'male',
                hair: 'red',
                age: 'LAte 40s to early 50s',
                occupation: ['U.S.Army Sergeant (Pre - Apocalypse)', 'Constuction Foreman for the Alexandria Safe-Zone'],
                family: ['Ellen Ford - wife (deceased)', 'A.J. Ford - son (deceased)', 'Becca Ford - daughter (deceased)', 'Rosita Espinosa -ex-girfriend', 'Sasha Williams - former girlfriend (deceased)'],
                first_appearance: 'Inmates',
                last_appearance: 'The First Day of the Rest of Your Life (flashback)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Last Day on Earth (off-screen)',
                        cause_of_death: 'Head smashed by Negan using his baseball bat, Lucille.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/e/e3/Abrahamdeath.png/revision/latest/scale-to-width-down/350?cb=20161124012832', 'https://vignette.wikia.nocookie.net/walkingdead/images/8/8f/Abraham%27s_death.png/revision/latest/scale-to-width-down/350?cb=20161024082825']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Sergeant Abraham Ford, portrayed by Michael Cudlitz, is a survivor and former member of the military. Before meeting Eugene, he had a family, who ran away after seeing him kill a group that threatened their safety. After his family was killed, Abraham attempted suicide, but Eugene arrived at the same moment, stopping him from doing so. His mission has become attempting to deliver Eugene to Washington, D.C., believing he has the answer to the cause and cure of the zombie plague. Upon discovering that Eugene was lying, he nearly beats Eugene to death. His actions cause friction with the others, but he remains with the group nonetheless. He becomes part of Alexandria's construction crew and upon Tobin's recommendation becomes their leader after saving Francine from walkers. Abraham's friendship with Eugene is later repaired after intervention from Rosita. He had been in a relationship with Rosita while they traveled with Eugene, Glenn and Tara, but he ended it at Alexandria. He takes a liking to Sasha from being on some runs with her as a partner, and they become lovers. Abraham, along with Glenn, Rosita, Daryl, Michonne, Maggie, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan. After Negan plays 'Eeny, meeny, miny, moe' with the group, he lands on Abraham, who flashes Sasha a peace sign before accepting his death at Negan's hands."
            },
            {
                id: 22,
                name: "Eugine Porter",
                photo: "https://i.pinimg.com/originals/43/ee/bc/43eebc2b574b3d1921f0fc1646e5c529.jpg",
                actor: 'Josh McDermitt',
                gender: 'male',
                hair: 'dark brown',
                age: 'Mid to Late 30s',
                occupation: ['Former Engineer for the Alexandria Safe-Zone', 'Chief Engineer for the Sanctuary', 'Former Lieutenant of the Saviors', 'Former Head of the Bullet Factory Outpost'],
                family: ['unknown'],
                first_appearance: 'Inmates',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Inmates' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Dr. Eugene Porter is a survivor of the apocalypse and a member of Abraham Ford's survivor group and later a minor antagonist after he unwillingly begins working for the Saviors. He comes across as timid and socially awkward. Initially when encountered by Rick's group, he appears to be a scientist that knows of a cure to the outbreak located in Washington, D.C., with Abraham and Rosita assisting him. Later, Eugene is forced to reveal that he lied to Abraham to gain his protection back when they first met, leading Abraham to punch him unconscious and creating a rift in their friendship. When the group makes it to Alexandria, Eugene assists the community with his technical knowledge to repair their solar power system. This helps to boost his confidence to learn how to defend himself, reconcile his friendship with Abraham, and help the community find a way to make more bullets. When Negan discovers that Eugene makes bullets, Eugene is taken to work for the Saviors. Although Eugene accepts the offer to become one of the Saviors, he still helps Sasha kill herself but lies about it to Negan. He is an important player for the Saviors in the All Out War arc, but is tormented with conflicting loyalties, especially after he discovers that Dwight is playing both sides."
            },
            {
                id: 23,
                name: "Rosita Espinosa",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2016/03/TWD_615_GP_1030_0078_RT/square.jpg?1522795861",
                actor: 'Christian Serratos',
                gender: 'female',
                hair: 'black',
                age: 'Mid to Late 20s',
                occupation: ['Medical Assistant at the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Abraham Ford - ex-boyfriend (deceased)', 'Spenser Monroe - ex-lover (deceased)'],
                first_appearance: 'Inmates',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Inmates' to present",
                    dead: ''
                },
                ethnicity: 'Hispanic - American',
                description: "Rosita Espinosa is a survivor of the apocalypse and a member of Abraham Ford's survivor group, with whom she is in a relationship. When their truck breaks down on the way to D.C. she and the others journey with Glenn and Tara towards Terminus, ultimately leading to her capture there. She escapes with the group and goes with them from Georgia to Alexandria, forming a close relationship with fellow survivors Glenn Rhee and Tara Chambler before becoming fully accepted into their group. Upon arriving at Alexandria, Rosita is made a medical assistant. Along with Michonne, she tries to bring Sasha back to Alexandria after she goes missing, and takes close care of Tara after her injury while simultaneously trying to mend Abraham's and Eugene's friendship. She is with Tara when she wakes up in the season five finale. In 'Not Tomorrow Yet,' Rosita is heartbroken after Abraham breaks up with her. She then begins a relationship with Spencer. Rosita, along with Glenn, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan. Furious about Abraham and Glenn's death, Rosita has Eugene make her a bullet to kill Negan. Negan kills Spencer which triggers Rosita to shoot at him, but she hits Lucille. She is tackled by Arat, who scars her face. Rosita becomes increasingly angry with the Saviors. She finds Sasha at Hilltop and the two go on a mission to the Sanctuary to kill Negan. During their run, Rosita reveals to Sasha that she learned everything she knows from everyone she met after the apocalypse. Later, when breaking into the Sanctuary, Eugene refuses her help and will not join them and escape. Sasha locks Rosita out of the Sanctuary, telling her that is isn't her time to die. Rosita then runs into Dwight, who she brings back to Alexandria. During the battle at Alexandria, Rosita is shot and is rushed to the infirmary by Tara."
            },
            {
                id: 24,
                name: "Gareth",
                photo: "https://78.media.tumblr.com/95693528591042256936bab8024c74c0/tumblr_ne6g194rsn1u292n2o1_500.jpg",
                actor: 'Andrew J. West',
                gender: 'male',
                hair: 'brown',
                age: 'Mid to late 20s',
                occupation: [' Leader of Terminus (Post - Apocalypse)'],
                family: ['Mary - mother (deceased)', 'Alex - brother (deceased)'],
                first_appearance: 'A',
                last_appearance: 'What Happened and What"S Going On (flashback, corpse)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Four Walls and a Roof',
                        cause_of_death: 'Hacked to death by Rick Grimes',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/f8/503_Gareth_Slashed.png/revision/latest/scale-to-width-down/350?cb=20141027033228', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c3/GarethBody.PNG/revision/latest/scale-to-width-down/350?cb=20141030045756']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Gareth, portrayed by Andrew J. West, is the leader of a supposed safe zone, Terminus, which he runs along with his younger brother, Alex, and his mother, Mary. He explains that Terminus initially was a safe and welcoming place, a sanctuary for all who wanted to come in, before a group of marauders took over and began ruthlessly beating and raping the other survivors. Gareth and his family had to take Terminus back by force, and decided that from then on, they would run Terminus in a similarly brutal manner by capturing, killing, and eating all those who were lured in by the various signs posted in the area. Just before Gareth and his butchers can kill Rick, Daryl, Glenn, and Bob, Carol begins her siege on Terminus by blowing up the propane tank outside, blasting open the fences and allowing the walkers to flow in. Though Terminus is destroyed and a majority of the survivors, including Alex and Mary, are killed, Gareth manages to survive and escape, along with five others, and become known as The Hunters. Later the Hunters kidnap Bob and eat one of his legs, but when he reveals that he is infected, they savagely beat him and leave him outside Father Stokes's church, where Rick's group has taken residence. They then attempt to lead a siege against the church in 'Four Walls and a Roof,' only to be outsmarted and overpowered by Rick, Abraham, Michonne, Glenn, Maggie and Tara. Although Gareth initially pleads for his life, Rick refuses and kills him with a red-handled machete."
            },
            {
                id: 25,
                name: "Gabriel Stokes",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2015/03/4ac4747a_813a_abdf_17cd_40262dd8c4d7_TWD_514_GP_1024_0004/square.jpg?1522840927",
                actor: 'Seth Gilliam',
                gender: 'male',
                hair: 'black',
                age: 'Late 40s to Mid 50s',
                occupation: ['Priest (Pre and Post - Apocalypse)', 'former lookout for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['unknown'],
                first_appearance: 'Strangers',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Strangers' to present",
                    dead: ''
                },
                ethnicity: 'African - American',
                description: "Gabriel Stokes, portrayed by Seth Gilliam, is a priest at a small parish church outside Atlanta. He is an extremely nervous man, who is not used to the hazards of the outside world, having been mostly sheltered inside his church after the outbreak began, living off of stored food from the nearby town's food drive. He also struggles with how his religious beliefs fit within this new world. He is introduced when Rick's group rescues him from walkers while he was out foraging, and he offers them shelter in his church. Rick discovers Gabriel had locked his congregation out of the church at the start of the outbreak, an action he remains remorseful for. He joins Rick's group as the church is overrun, though detests the use of violence. When they arrive at the relative safety of Alexandria, he attempts to convince Deanna that Rick's group is Satan in disguise, but eventually apologizes to all for sowing seeds of distrust. He becomes a useful member of Alexandria, both a man of the cloth as well as a protector on the community's walls. Tamiel from the Scavengers kidnaps Gabriel. Rick, Michonne, Rosita, Tara, and Aaron find Gabriel with the Scavengers, which leads to the Alexandrians' deal to exchange guns for an alliance. This alliance proves unfaithful, and Gabriel is involved in the war against the Saviors. As he tries to help save Gregory during the attack on the Sanctuary, Gabriel ends up sheltering in the same storage room where Negan himself is hiding. Though Negan helps him escape from the walker horde, Gabriel becomes a prisoner of the Saviors, and contracts a deadly infection that requires medical attention."
            },
            {
                id: 26,
                name: "Aaron",
                photo: "http://nerdreactor.com/wp-content/uploads/2015/10/AMC_TWD_S6A_602_Inside_JSS-800x450-500x500_c.jpg",
                actor: 'Ross Marquand',
                gender: 'male',
                hair: 'brown',
                age: 'Early to Mid 30s',
                occupation: ['Former Politician (Pre - Apocalypse)', 'NGO worker (Pre - Apocalypse)', 'former recruiter for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Eric Raleigh - former boyfriend (deceased)',' Gracie - adopted daughter'],
                first_appearance: 'Them',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Them' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Aaron, portrayed by Ross Marquand, is a recruiter for the Alexandria Safe Zone community, and generally has a cheerful, outgoing personality. Prior to formally meeting Rick's group of survivors, he followed them around to evaluate them as candidates for membership in Alexandria, and eventually extends an invitation to Rick. The group, after some deliberation, accepts. Once the group is accustomed to Alexandria, Aaron invites Daryl to help assist him in recruiting other survivors. During once such excursion, Aaron and Daryl are lured into a walker trap set up by the Wolves. Morgan helps them to escape, though Aaron loses his kit of recruiting materials. Later, when the Wolves launch a full-out attack on Alexandria, Aaron finds that they had used his recruiting materials to locate Alexandria and plan the attack, causing him to feel guilty over the deaths of several Alexandrians. His guilt inspires him to take part in more of the fighting that follows, which leads to conflict with his husband, Eric, who worries for his safety. Aaron, along with Glenn, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Eugene and Rosita, is forced to kneel before Negan, and watches in horror as Negan brutally murders Abraham and Glenn. He helps Rick carry back Abraham and Glenn's bodies after their deaths. He and Eric make amends and both fight against the Saviors, which leads to Eric's death."
            },
            {
                id: 27,
                name: "Deanna Monroe",
                photo: "https://cdn2.atlantamagazine.com/wp-content/uploads/sites/12/2016/02/0216_twd06_amc_oneuseonly.jpg",
                actor: 'Tovah Feldshuh',
                gender: 'female',
                hair: 'auburn',
                age: 'Late 50s',
                occupation: [' Ohio U.S. Congresswoman (Pre - Apocalypse)', 'former leader of the Alexandria Safe-Zone'],
                family: ['Reg Monroe - former husband (deceased)', 'Aiden Monroe - son (deceased)', 'Spencer Monroe - son (deceased)'],
                first_appearance: 'Remember',
                last_appearance: 'The Day Will Come When You Won"t Be (archive footage)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: '"Start to Finish"(alive), "The Next You"(zombified)',
                        cause_of_death: 'Bitten by a walker.(alive)\nStabbed in the head by Spencer Monroe (zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/fe/6x08_Deanna_Bite.png/revision/latest/scale-to-width-down/350?cb=20151201083238', 'https://vignette.wikia.nocookie.net/walkingdead/images/7/70/6x08_Deanna.png/revision/latest/scale-to-width-down/350?cb=20151201083415', 'https://vignette.wikia.nocookie.net/walkingdead/images/7/75/AMC_TWD_610_Deanna_Death.png/revision/latest/scale-to-width-down/350?cb=20160222033028']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Deanna Monroe, portrayed by Tovah Feldshuh is a former Congresswoman and the leader of the Alexandria Safe Zone. She is based on the character of Douglas Monroe from the comic books. When Rick's group arrives in Alexandria, she interviews each member and records their testimonies, believing that the tapes would be important artifacts when Alexandria rekindled civilization. Deanna is very good at reading people, and she eventually finds an ideal job for each of them to contribute in the community. Deanna is the mother of Aiden and Spencer and wife to Reg. She had to deal with the loss of her son, Aiden, who died on a run for supplies and later Reg, who was accidentally killed by Pete, their medical adviser, and these losses change her views on how Alexandria has to be run. She wanted to expand Alexandria wider and gave her plans to Rick. When the herd of walkers break into Alexandria in 'Start to Finish' she is bitten, and she tells Michonne she will kill herself when the time is right. Due to Carl and Ron fighting, the walkers end up invading the house they were in, and Deanna sends them away without her. Once the walkers reach upstairs, instead of killing herself she takes out several walkers before being consumed. She is later put down by Spencer and Michonne, then buried in the woods outside Alexandria."
            },
            {
                id: 28,
                name: "Jessie Anderson",
                photo: "https://thesupernaturalfoxsisters.files.wordpress.com/2015/03/rd-rick-jessie-the-walking-dead-conquer.jpeg",
                actor: 'Alexandra Breckenridge',
                gender: 'female',
                hair: 'blonde',
                age: 'Early to Mid 30s',
                occupation: ['Hair Stylist (Pre - Apocalypse)', 'pantry worker for the Alexandria Safe-Zone'],
                family: ['Pete Anderson - former husband (deceased)', 'Ron Anderson - son (deceased)', 'Sam Anderson - son (deceased)'],
                first_appearance: 'Remember',
                last_appearance: 'No Way Out',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'No Way Out',
                        cause_of_death: 'Devoured by walkers',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/2/25/Jessie_1.png/revision/latest/scale-to-width-down/350?cb=20160215044329']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Jessie Anderson, portrayed by Alexandra Breckenridge, is an Alexandria resident, married to Pete and mother of Ron and Sam. She mentions to Rick she is a former stylist and gives him a haircut, where it is apparent the two have romantic chemistry. It comes to light that Jessie is abused by Pete and Rick intervenes, which leads to a fight between the two men. After Rick executes Pete for killing Reg, Jessie decides to step up in the community and learns to shoot. When the Wolves attack, Jessie is tackled by one of their women and stabs her repeatedly. She then tries to convince the other Alexandrians that they can be brave and accept the harsh realities outside the walls, and begins a relationship with Rick. When the herd breaks into Alexandria, her son Sam panics during the escape attempt and is devoured in front of her. In shock, Jessie freezes and the walkers begin to rip at her, but she is still gripping tightly onto Carl's hand. Rick is forced to chop her hand off so she doesn't pull Carl into the herd with her. She and her sons are buried together in Alexandria once the herd is destroyed."
            },
            {
                id: 29,
                name: "Enid",
                photo: "https://i1.sndcdn.com/artworks-000109318786-d8gqis-t500x500.jpg",
                actor: 'Katelyn Nacon',
                gender: 'female',
                hair: 'brown',
                age: 'Mid to Late teens',
                occupation: ['Middle Schol Student (Pre - Apocalypse)', 'member of the Militia', 'Medical Trainee of the Hilltop Colony'],
                family: ['Ron Andreson - ex-boyfriend (deceased)', 'Carl Grimes - former boyfriend (deceised)'],
                first_appearance: 'Remember',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Remember' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Enid is an Alexandria resident. She is first introduced to Carl sitting on a bed with a book while Ron and Mikey show Carl their video games. She often sneaks out of the safe zone. Eventually, Carl follows her out, but she sneaks back in away from him. Ron explains to Carl that she arrived alone and that it took her a while to speak to the other kids. Carl continues to follow her outside, which she quickly realizes. Despite her uneasiness with him stalking her, she lets him accompany her as she keeps up the survival skills she used to travel before she arrived in Alexandria. Carl also seems to have developed a crush on Enid, but appears too timid to pursue it, given his resistance to even hold her hand for more than one second. Enid finally tells Carl that she is the last survivor of her family; they were attacked and only she came out safe, traveling alone until she came across Alexandria. She helps Maggie during her pregnancy and wanted to go on the trip to the Hilltop Colony, but Carl traps her in a cupboard in fear of losing her. After learning of the deaths of Glenn and Abraham, Enid travels to the Hilltop with Carl. She and Carl share their first kiss and Enid begs Carl to not travel to the Sanctuary, but he doesn't give in. When at the Oceanside, Enid asks Carl what it's like to kill somebody, anticipating she will have to do it soon. In the Season 7 finale, Enid arrives at Alexandria with Maggie, Jesus, and the other Hilltop residents to join the battle against the Scavengers and the Saviors. In Season 8, Enid joins the others from Alexandria, Hilltop, and the Kingdom at the first assault on the Saviors at the Sanctuary. She accompanys Maggie back to Hilltop afterward. After Aaron arrives at the Hilltop with news of Eric's death, he decides they need to convince the Oceanside to join the fight against the Saviors. Enid convinces Aaron to let her go with him on the mission. Before entering Oceanside, Enid tells Aaron they need to bring them something they can use, and she finds a truck full of alcohol. They arrive at night so they decide to sleep in the car and meet with Natania and Cyndie in the morning. While they are sleeping they hear a noise and they get out of the car to investigate. Aaron is then attacked by Natania, but Enid shoots and kills her before she stabs him. Cyndie and the other women of Oceanside take Aaron and Enid prisoner. Cyndie decides to execute the two, but Enid talks her out of it and Cyndie lets them leave, but warns them to never come back. Aaron and Enid leave Oceanside. Aaron tells Enid he needs to stay and try to convince Cyndie to join the fight but she should leave and get back to Maggie and the Hilltop. Enid reluctantly leaves. After Enid returns to Hilltop, Daryl, Rosita, Tara, and the other Alexandrian's tell Enid, Maggie, Carol, and Morgan of Carl's death. Enid collapses in tears and Maggie holds her. Enid is with Michonne, Maggie, and Rosita when they meet Georgie for the first time. Enid, still angry about the Carl's death, argues with Michonne about what they should do with Georgie. Enid wants to take their stuff and kick the newcomer out. Michonne takes her gun and tells her to step back. In the finale of Season 8, Enid stays with Tara at the Hilltop to protect it if the Saviors attack. When Saviors do show up at Hilltop, Enid carries Judith to safety outside the walls. Aaron and the Oceanside show up and help defend the Hilltop."
            },
            {
                id: 30,
                name: "Spenser Monroe",
                photo: "https://m.media-amazon.com/images/M/MV5BMGE5M2ZjMTAtNzNmOS00Mzk3LTkzZDctMGY2YjE3Zjg4ODNiL2ltYWdlXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
                actor: 'Austin Nichols',
                gender: 'male',
                hair: 'brown',
                age: 'Late 20s to early 30s',
                occupation: ['Lookout for the Alexandria Safe-Zone (Post - Apocalypse)'],
                family: ['Deanna Monroe - mother (deceased)','Reg Monroe -  father (deceased)', 'Aiden Monroe - brother (deceased)', 'Rosita Espinosa - ex-lover'],
                first_appearance: 'Forget',
                last_appearance: 'Hearts Still Beating',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Hearts Still Beating',
                        cause_of_death: 'Disemboweled by Negan.(alive)\nStabbed in the forehead by Rick Grimes.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/b/be/Spenchersdeathverysadno.png/revision/latest/scale-to-width-down/350?cb=20161212035757', 'https://vignette.wikia.nocookie.net/walkingdead/images/2/2e/2016-12-12_%281%29.png/revision/latest/scale-to-width-down/350?cb=20161212202026']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Spencer Monroe, portrayed by Austin Nichols, is the son of Deanna and Reg, and the older brother of Aiden. He is distrustful of the Rick and his group even after his parents accept them and shows disregard for the society's regulations, especially when it comes to firearm possession and food rationing. He becomes a sniper in the bell tower with Sasha, in whom he takes an interest. When the herd came upon Alexandria, he almost died attempting to climb across a wire to reach a car and lead the herd of walkers away. Saving him almost cost Tara's life. After the events of the herd attack, he sneaks out of Alexandria to go put down his reanimated mother. Michonne follows him and then allows him to do what he wanted. In 'Twice as Far,' he awakens from sleeping with Rosita. He later asks her for a date, which she reluctantly agrees to. Spencer blames Rick for the deaths of Abraham and Glenn and even challenges Rick once after his return, but it wasn't received constructively. He tried to prove himself to the Saviors by going out alone to collect supplies, but when he reveals to Negan his desire to overthrow Rick, Negan notices how cowardly Spencer truly is. Negan doubts that Spencer has any 'guts' and slashes him across the stomach, allowing his intestines to spill out before he dies, in front of the whole community. He is left to reanimate and Rick puts him down."
            },
            {
                id: 31,
                name: "Dwight",
                photo: "http://nerdreactor.com/wp-content/uploads/2016/11/dwight-daryl-500x500_c.jpg",
                actor: 'Austin Amelio',
                gender: 'male',
                hair: 'blond',
                age: 'Late 20s to early 30s',
                occupation: ['Blue collar employee (Pre - Apocalypse)', 'former Lieutenant of the Saviors', 'former Informant for the Militia', 'former member of the Militia'],
                family: ['Sherry - ex-wife', 'Tina - sister-in-law (deceased)'],
                first_appearance: 'Always Accountable',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Always Accountable' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Dwight, portrayed by Austin Amelio, is a ruthless but reluctant member of the Saviors who forms a hostile rivalry with Daryl. He first appears in 'Always Accountable' with his wife Sherry and his sister-in-law Tina. The three of them come across Daryl in the woods and take him captive, mistaking him for a Savior coming to bring them back. Although Daryl offers to help them, they steal his motorcycle and crossbow and go back to the Sanctuary. Dwight appears later with half of his face melted and attempts to kill Daryl, but ends up shooting Denise in the eye with Daryl's crossbow. Dwight and his crew have Eugene hostage, but Eugene creates a distraction by biting Dwight in the testicles, allowing Abraham to begin firing on them. Dwight and his men retreat. After Denise's death, Daryl goes out to hunt for Dwight for vengeance. Michonne, Rosita, and Glenn follow him to lead him back, but Rosita agrees with him that they should bring down Dwight. Michonne and Glenn head back but are captured by Dwight's men. Rosita and Daryl are also found by Dwight, who then shoots Daryl. Dwight stands forward when they ambush Rick's group, taking an interest in Daryl's gear, especially his vest, motorcycle, and crossbow. After Negan takes Daryl captive, Dwight uses Daryl's motorcycle to get around. Dwight is sent to convince a renegade Savior to return to the fold, but he refuses. Dwight shoots him out of desperation. It is revealed the burn mark on his face came from Negan. After their failed escape attempt Sherry became one of Negan's wives to save them both, but Dwight and Sherry were caught illicitly seeing each other, which is punishable by a red hot iron to the face. Rosita comes across Dwight and brings him to Alexandria, where he is confronted by Daryl, Rick, Tara, Michonne, and Jesus. He tells them that he wants to join them as a double agent to take down Negan. Tara wants Daryl to kill him for killing Denise, but the Alexandrians decide they need Dwight as an ally. Dwight continues to honor their new alliance as the All Out War begins, sending secret messages and internally sabotaging the Savior's plans. He is eventually found out by Negan, yet is kept alive for Negan's unknown purposes."
            },
            {
                id: 32,
                name: "Paul 'Jesus' Rovia",
                photo: "https://pbs.twimg.com/media/Cl0sNX0XIAAjaY_.jpg",
                actor: 'Tom Payne',
                gender: 'male',
                hair: 'light brown',
                age: 'early 30s',
                occupation: ['recruiter and supply runner for the Hilltop Colony', 'member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'The Next World',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'The Next World' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Paul 'Jesus' Rovia is a friend of Rick's group and a member of the Hilltop Colony. He first met Daryl and Rick while they were on a run and stole their truck full of food. Then he fought with Daryl and Rick, who knocked him unconscious and brought him to Alexandria instead of leaving him to die. Jesus introduces them to the Hilltop in order for the two communities to become trading partners, and assists them in rescuing Craig and taking out one of the Saviors' outposts. When Maggie and Sasha make it to the Hilltop after Glenn and Abraham are killed, he is very welcoming; he constantly tries to convince Gregory of their usefulness. After the Saviors come to collect supplies, Gregory tells Jesus to follow them and find their location. He sneaks into the back of one of their supply trucks where he finds that Carl had the same idea. After infiltrating the Sanctuary, he runs into a freshly-escaped Daryl and helps him get to the Hilltop to reunite with Rick and Alexandrians."
            },
            {
                id: 33,
                name: "Gregory",
                photo: "https://static1.squarespace.com/static/57852bb69f74567650e70d5f/t/5abad5c970a6ad9323fd35bb/1468904310063/TWD_611_GP_0918_0167-RT.jpg?format=500w",
                actor: 'Xander Berkeley',
                gender: 'male',
                hair: 'gray',
                age: 'Late 50s to early 60s',
                occupation: ['former Leader of the Hilltop Colony'],
                family: ['Unknown'],
                first_appearance: 'Knots Untie',
                last_appearance: 'A New Beginning',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'A New Beginning',
                        cause_of_death: 'Hanged by Daryl Dixon as requested by Maggie Rhee for his treachery and subsequent attempts to assassinate her.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c8/Gregorydies.png/revision/latest/scale-to-width-down/350?cb=20181008202531', 'https://vignette.wikia.nocookie.net/walkingdead/images/4/41/Gregoryhanged.png/revision/latest/scale-to-width-down/350?cb=20181008194701']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Gregory is the leader of the Hilltop Colony. He accepted the deal from the Saviors and later tried to break that deal with Rick's help. He was stabbed by Ethan under Negan's orders but he survived. He is seen by everyone as a great coward. Reluctantly, he ends up taking in Sasha and Maggie after Negan's ambush. He never calls Maggie by the correct name and scoffs at the idea that Maggie and Sasha could be useful. He almost gave up their hiding space to Simon in 'Go Getters,' but Jesus, not trusting him to honor their agreement, had moved the women elsewhere. In 'Rock in the Road,' Gregory refuses to assist Rick in the oncoming fight against the Saviors and is greatly criticized by the combined communities. He is visiting the Sanctuary to prove his loyalty when the combined Alexandrian forces attack and only narrowly escapes when Gabriel stops to help him. When he gets back to the Hilltop, Maggie throws him in the pen with the Savior hostages. Gregory later becomes a messenger between Dwight and the Hilltop, warning the later of Negan's next plan. This plan turns out to be faked, as Negan knew Dwight had betrayed the Saviors and that Gregory was his messenger."
            },
            {
                id: 34,
                name: "Simon",
                photo: "https://images-na.ssl-images-amazon.com/images/I/41E9EB0w0fL.jpg",
                actor: 'Steven Ogg',
                gender: 'male',
                hair: 'black (graying, balding)',
                age: 'Mid to Late 40s',
                occupation: ['Morgage Broker (Pre - Apocalypse)', 'former Second-In-Command of the Saviors', 'former Head of the Satellite Outpost', 'former De-Facto Leader of the Saviours'],
                family: ['Unknown'],
                first_appearance: 'Last Day on Earth',
                last_appearance: 'Worth',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: '"Worth"(alive), "Wrath"(zombified, off-screen)',
                        cause_of_death: 'Strangled by Negan.(alive)\nPut dwon by a Sanctuary resident.(zombified, assumed, off-screen)',
                        photo: ['src="https://vignette.wikia.nocookie.net/walkingdead/images/7/70/Simon%27sDeath-1.png/revision/latest/scale-to-width-down/350?cb=20180409040222"', 'https://vignette.wikia.nocookie.net/walkingdead/images/e/e4/TWD_815_GP_1109_0427_RT.jpg/revision/latest/scale-to-width-down/350?cb=20180409195842', 'https://vignette.wikia.nocookie.net/walkingdead/images/6/69/Simon%27sDeath-3.png/revision/latest/scale-to-width-down/350?cb=20180409040559']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Simon (also known as Lead Savior in his first appearance), portrayed by Steven Ogg, is a psychopath high-ranking member of the Saviors who serves as Negan's right-hand man. He is first encountered in the season six finale as a roadblock to Rick's group. He talks to Rick, musing on how that day is someone's 'last day on earth.' He reappears at the end of the episode and announces to Rick's group that this is their destination. He has Dwight get Daryl, Glenn, Michonne and Rosita out of the truck, and later calls for Negan to face the fearful Alexandrians, which brings the Alexandrians under Negan's rule. Simon is the deputy in charge of relations with the Hilltop Colony and comes to remind Gregory of their agreement and how important it is for the Hilltop to keep up its end of the bargain. In the end of the seventh season Simon accompanies Negan to intimidate the Alexandrians without realizing that the community allied with Hilltop and the Kingdom. This battle is a hard blow to the Saviors, who then flee. Simon is one of Negan's deputies during the upcoming war with the allied survivors. In the episode 'How It's Gotta Be', Simon tries to capture Maggie without knowing of the surprise that this one will take. When The Scavengers form an alliance with Rick, Simon goes to The Scavengers and kills them all except for Jadis, making it clear that he is opposed to Negan's order, creating a rift with the leader of the Saviors. Simon believes that the rebellion of Alexandria, The Kingdom and Hilltop are a potential threat to them since their choice is to seek other communities to subjugate but Negan does not agree as his order is to maintain a balance without causing too much collateral damage. When Negan decides to attack Hilltop using weapons tainted with walker blood to leave a 'warning', Rick notices Negan's car and attacks the leader of the Saviors, isolating him from the others. The Saviors, including Simon and Dwight, believed that Negan was dead, and Simon immediately proclaims himself as the new leader of The Saviors. Upon Negan's return, Simon plans a coup with Dwight and other members of the Savior's. Dwight betrays Simon and Negan walks in on their meeting. Simon challenges Negan to a fight for control of the Savior's which Negan accepts, and wins, strangling Simon to death and turns into the walker. After the defeat of Negan, it is presumed that Simon is no longer seen since his zombified body is no longer chained to the fence of the Sanctuary after peace is declared between the saviors and the militia, possibly Laura or some savior with its zombification."
            },
            {
                id: 35,
                name: "Negan",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2016/10/TWD_701_GP_0504_0183_RT/square.jpg?1522790620",
                actor: 'Jeffrey Dean Morgan',
                gender: 'male',
                hair: 'black (graying)',
                age: 'Late 40s to Early 50s',
                occupation: ['Unspecified profession dealing with children (Pre - Apocalypse)', 'former Leader of the Saviour'],
                family: [' Lucille - former wife (deceased)', 'Sherry - former "wife"', 'Amber - former "wife"', 'Tanya - former "wife"', 'Frankie - ex-"wife"'],
                first_appearance: 'Last Day on Earth',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'The Last Day on Earth' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Negan, portrayed by Jeffrey Dean Morgan, is a totalitarian and manipulative dictator who made his first appearance in the season six finale. He is the psychopathic and merciless leader of a vast organization of hostile survivors called the Saviors that he rules with tyranny. His group coerces other survivors to give the Saviors their possessions and supplies by the threat of force and intimidation. When Rick's group attempt to take Maggie to the Hilltop Colony for medical assistance, the Saviors capture them all. Negan demands that Alexandria will turn over half its supplies to him from now on, and reinforces his mandate by beating to a bloody pulp Abraham and Glenn with his barbed wire-studded baseball bat, Lucille. Negan finds his way to Alexandria, where he meets the rest of the group and, as promised, takes half of all of their supplies, furniture, and weapons. At the Sanctuary, one of his standard punishments is using a hot iron to melt the face of anyone who sleeps with any of his wives, which is how Dwight's face became scarred. When Carl sneaks into the Sanctuary and guns down Negan's men, he takes Carl and shows him around before trying to intimidate him by making him sing a song and reveal his empty eye socket. He then returns to Alexandria with Carl to wait for Rick. In the meantime, he is taken on a tour and enjoys a meal with Carl, Olivia, and Judith. Before Rick returns, Spencer tries to ingratiate himself with Negan by offering him a drink and playing pool with him. However, when Spencer reveals his desire for Rick to be deposed, Negan suggests that he 'has no guts' for not killing Rick himself and just taking over. He then guts Spencer and Rosita to attempts to shoot him. Rosita misses and shoots Lucille instead. Furious not only at Lucille's marring but also at the presence of a bullet in Alexandria, Negan demands that Rosita tell him who made it. When Rosita refuses, Negan tells one of his soldiers to pick someone to shoot; she turns and shoots Olivia through the head. Eugene confesses to manufacturing the bullets and Negan orders him to be taken. Negan leaves when Rick gets back, stating that he helped him and cleared up his mess. After Sasha is captured, Negan takes her as a show of goodwill to the Alexandrians even though he has allied with the Scavengers to double-cross them. He is taken by surprise to see that Rick formed alliances with the Kingdom and Hilltop and the communities had formed a militia. Their arrivals force Negan and his henchmen to retreat. In the season eight premiere, Rick and his soldiers go to the Sanctuary to tell Negan that they will not submit to his tyranny and that, if the Saviors will cease their terror, they can all continue in peace. Negan rejects Rick's offer and fighting begins. In the episode 'The Big Scary U', he confesses to Gabriel the past of his deceased wife Lucille and his inability to put her down after her reanimation. In the season finale, 'Wrath', Rick's group shows up to challenge the Saviors. Negan orders his men to open fire, but discovers that Eugene has tampered with their weapons, rendering them helpless. Rick's group kills several of Negan's men, while Rick and Negan have a final battle that ends with Rick cutting Negan's throat open. Rick saves Negan's life, however, as he believes it is what Carl would want. They take Negan back to Alexandria, where Rick and Michonne inform him that they will imprison him for the rest of his life."
            },
            {
                id: 36,
                name: "King Ezekiel",
                photo: "https://i1.sndcdn.com/artworks-000191509264-wbx99l-t500x500.jpg",
                actor: 'Khary Payton',
                gender: 'male',
                hair: 'gray',
                age: 'Late 40s to Early 50s',
                occupation: ['Amateur theater actor (Pre - Apocalypse)', 'Zookeeper (Pre - Apocalypse)', 'Leader of the Kingdom', 'Co-Leader of the Militia'],
                family: ['Shiva - pet tiger (deceased)', 'Carol Peletier - girlfriend', 'Henry - adopted son'],
                first_appearance: 'The Well',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'The Well' to present",
                    dead: ''
                },
                ethnicity: 'African - American',
                description: "King Ezekiel, portrayed by Khary Payton, is the leader of a community known as the Kingdom. A former actor and zookeeper, Ezekiel created his persona as a king alongside a pet Bengal tiger he rescued from the zoo, Shiva . When Carol is taken to the Kingdom, she and Ezekiel form a tentative friendship. When the Saviors escalate their harassment of the Kingdom, Ezekiel begins to realize that their relatively peaceful lifestyle cannot continue and accepts the invitations of Jesus, Morgan, and Rick to band together and fight the Saviors. He maintains his kingly persona as he leads his troops into the battle where they kill a large number of Saviors and believe themselves to be victorious. Not long afterward, they come into the line of fire of Savior snipers who kill all of Ezekiel's fighters except for Jerry and Carol and wound Ezekiel himself. As they try to escape the compound, Shiva finds them threatened by walkers and sacrifices herself to save Ezekiel. Only then does his facade break down. When he returns to the Kingdom, devastated, he retreats to his rooms and will see no one. He only reappears when the Saviors come to remove everyone from the Sanctuary, sacrificing himself as a distraction so his people could escape and padlocking the gates so the Saviors could not overrun their home."
            },
            {
                id: 37,
                name: "Jadis / Anne",
                photo: "https://img1.telestar.fr/var/telestar/storage/images/3/0/8/9/3089566/jadis-attire-les-zombies-dans-piege-terrible-lors-episode-saison-the-walking-dead_square500x500.jpg",
                actor: 'Pollyanna McIntosh',
                gender: 'female',
                hair: 'brown/blonde',
                age: 'Mid to Late 30s',
                occupation: ['Teacher (Pre - Apocalypse)', 'Artist (Pre and Post - Apocalypse)', 'former LEader of the Scavengers'],
                family: ['Unknown'],
                first_appearance: 'New Best Friends',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'New Best Friends' to present",
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Jadis (or known as 'Anne'), portrayed by Pollyanna McIntosh, is the oddly-spoken and enigmatic leader of the Scavengers. She is calm and collected, but also very cunning and sly. Her group kidnapped Gabriel and then ambushed Rick's team as they searched for him. When asked by Rick to join forces to defeat the Saviors, Jadis is reluctant but takes it into consideration after being told that they could gain more supplies. Jadis tells Rick he needs to prove his worth and she pushes him down a trash heap into a pit of trash and metal. After watching Rick kill a heavily armored walker, she tells him that she and her people will help him, but that they need a lot of guns. When Rick's group delivers 63 guns to her, she tells him that it is not enough, claiming they need nearly twice as many guns. Rick and Jadis renegotiate and agree that he will keep 20 of the guns while he searches for more. He finds the needed guns at Oceanside, seemingly clinching the Scavengers' support. The day of the battle, she crudely propositions Rick upon arrival at Alexandria. Together, the Scavengers and the Alexandrians wire up bombs at the gates ready for the enemy. When the explosion fails as Negan and his men wait by the gates, Jadis pulls a gun on Rick and the Scavengers follow suit with the rest of the Alexandrians. She reveals that she told Negan of Rick's plan and was offered a 'better deal' by the Saviors. When the Saviors get distracted by the re-animated Sasha, Rick attempts to make another deal with her, but Jadis refuses and shoots him in the abdomen; she pushes him off the platform. During the battle, she flees with her group through smoke bombs. After the war between the Saviors and the banded survivors has begun, Rick again attempts to get Jadis on his side. She imprisons him in a shipping container, only releasing him to fight with another armed walker. He decapitates the walker and disarms her men, giving her new terms which she appears to accept. In the episode 'The Key', Jadis captures Negan at gunpoint, in trying to take justice for the death of his camp at the hands of Simon. Jadis seeing the sincerity of Negan she decides to let him go. In the season finale, 'Wrath', Jadis tells Morgan that he can call her 'Anne'. Morgan comes to the junkyard and tells her she can go anywhere she wants now that Negan has been defeated, so she leaves, but he stays in her place."
            },
            {
                id: 38,
                name: "Siddiq",
                photo: "https://m.media-amazon.com/images/M/MV5BMjA2MDEwMTYzN15BMl5BanBnXkFtZTgwMjQ2Mjg4NDM@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                actor: 'Avi Nash',
                gender: 'male',
                hair: 'dark brown',
                age: 'Early 30s',
                occupation: ['Resident Doctor (Pre - Apocalypse)', 'Medic for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'Mercy;=',
                last_appearance: 'present',
                status: {
                    alive: '',
                    lifespan: "'Mercy' to present",
                    dead: ''
                },
                ethnicity: 'Arab - American',
                description: "Siddiq, portrayed by Avi Nash, debuts in the first episode of season eight. He is first seen surrendering to Carl and tells him that he hasn't ate in a few days. When Carl suddenly points a gun at Siddiq, he tries to calm Carl down and then Rick comes and fires a few warning shots which makes Siddiq run away. Later, Carl returns and leaves two cans of food with a note saying: 'Sorry.' Siddiq watches Carl from the bushes as he walks away."
            }
        ]
    },
    {
        extra: [
            {
                alive: ['Rick', 'Judith', 'Daryl', 'Carol', 'Maggie', 'Michonne', 'Tara', 'Eugine', 'Rosita', 'Gabriel', 'Aaron', 'Enid',  'Siddiq', 'Negan', 'Ezekiel', 'Jerry', 'Jadis / Annie', 'Laura', 'Arat', 'Amber', 'Frankie',  'Dwight', 'Alden', 'Gracie', 'Paul / Jesus', 'Bertie', 'Kal', 'Eduardo', 'Oscar', 'Marco', 'Hershel', 'Earl', 'Tammy', 'Ken', , 'Dianne', 'Jenny', 'Nabila', 'Henry', 'Rachel', 'Beatrice', 'Kathy', 'Cyndie', 'Barbara', 'Scott', 'Bob', 'Tanya', 'Mark', 'Gina', 'Regina', 'Potter', 'Jose', 'Brooke', 'D.J.', 'Norris', 'Mel', 'John', 'Justin', 'Jed',
                ]
            },
            {
                dead: ['Carl', 'Lori', 'Shane', 'Leon', 'Jenny', 'Glenn', 'Theodore', 'Dale', 'Jacqui', 'Merle', 'Sophia', 'Ed', 'Andrea', 'Amy', 'Edwin', 'Beth', 'Hershal', 'Patricia', 'Otis', 'Jimmy', 'Terry', 'Mike', 'Andre',
        
                ],
            },
            {
                undead: [
        
                ],
            },
            {
                unknown: [
        
                ],
            }
        ]
    },
];

module.exports = { characters };



const episodes = [
    {

        ep: 1,
        season: 1,
        season_ep: 1,
        title: "Days Gone Bye",
        director: "Frank Darabont",
        air_date: "October 31, 2010",
        us_viewers: "5.35 millions",
        plot: "Sheriff's deputy Rick Grimes wakes from a gunshot-inflicted coma to discover the world overrun with walkers. He goes back to his house to find his wife and son but meets survivor Morgan Jones and his son Duane. Rick decides to head to Atlanta to find his wife Lori and son Carl, unaware they are safe with other survivors led by his former partner Shane). He encounters hordes of walkers and becomes trapped inside a tank."
    },
    {

        ep: 2,
        season: 1,
        season_ep: 2,
        title: "Guts",
        director: "Michelle MacLaren",
        air_date: "November 7, 2010",
        us_viewers: "4.71 millions",
        plot: "Rick is ambushed by a walker horde but is rescued by scavenger survivor Glenn when he becomes trapped inside a tank. They meet up with the rest of the survivors where they have to leave Merle handcuffed to the roof to stop him attracting walkers. They are forced to leave Rick's gun bag behind as well as abandon the unhinged Merle as walkers surround them, but manage to escape the city."
    },
    {

        ep: 3,
        season: 1,
        season_ep: 3,
        title: "Tell it to the Frogs",
        director: "Gwyneth Horder-Payton",
        air_date: "November 14, 2010",
        us_viewers: "5.07 millions",
        plot: "Glenn takes Rick to the survivors' camp, where he finds Lori, Carl, and Shane. Rick leads a group, including Glenn, T-Dog, and Merle's younger brother, Daryl back to Atlanta to recover his weapons, finding that Merle managed to free himself by sawing off his hand."
    },
    {

        ep: 4,
        season: 1,
        season_ep: 4,
        title: "Vatos",
        director: "Johan renck",
        air_date: "November 21, 2010",
        us_viewers: "4.75 millions",
        plot: "Rick's group briefly scuffles with a group of Latino survivors protecting the residents of a nursing home in Atlanta, who want Rick's weapons, but Rick is able to defuse the situation peacefully. They return to camp too late to stop a walker horde from attacking, killing Andrea's sister Amy, and Carol's husband Ed."
    },
    {

        ep: 5,
        season: 1,
        season_ep: 5,
        title: "Wildfire",
        director: "Ernest Dickerson",
        air_date: "November 28, 2010",
        us_viewers: "5.56 millions",
        plot: "As the survivors bury their dead, some split off on their own. Rick, against Shane's judgement, leads the rest to the CDC facility in Atlanta, which initially appears abandoned and locked-down, but Rick spots signs of life and demands entry."
    },
    {

        ep: 6,
        season: 1,
        season_ep: 6,
        title: "TS-19",
        director: "Guy Ferland",
        air_date: "December 5, 2010",
        us_viewers: "5.97 millions",
        plot: "Dr. Edwin Jenner of the CDC welcomes the survivors, allowing them to enjoy the amenities of the powered building while explaining what he knows about walkers. When the survivors discover that the building will self-detonate once it runs out of backup power, Dr. Jenner initially prevents them from leaving. Rick convinces Jenner to let them go, and Jenner whispers something to Rick. They escape just before the building explodes, and the group departs the city."
    },
    {
        ep: 7,
        season: 2,
        season_ep: 1,
        title: "What Lies Ahead",
        director: "Ernest Dickerson, Gwyneth Holder-Payton",
        air_date: "October 16, 2011",
        us_viewers: "7.26 millions",
        plot: "While traveling to Fort Benning, the survivors are forced to hide among a number of abandoned vehicles as a walker horde passes. Sophia, Carol's daughter, is chased off into the woods by two walkers before they are killed by Rick. While searching for Sophia, Carl is accidentally shot."
    },
    {
        ep: 8,
        season: 2,
        season_ep: 2,
        title: "Bloodletting",
        director: "Ernest Dickerson",
        air_date: "October 23, 2011",
        us_viewers: "6.70 millions",
        plot: "Otis, the hunter that accidentally shot Carl, helps Rick to bring Carl to a farmstead owned by veterinarian Hershel Greene, who stabilizes Carl, but needs further medical supplies to heal him. Shane and Otis leave to a walker-infested school to find supplies. They do so, but are caught and attacked by the horde."
    },
    {
        ep: 9,
        season: 2,
        season_ep: 3,
        title: "Save the Last one",
        director: "Phil Abraham",
        air_date: "October 30, 2011",
        us_viewers: "6.10 millions",
        plot: "Shane manages to escape with the supplies by shooting Otis in the leg, while the walkers devour him instead; when he returns to the farm, Shane lies that Otis sacrificed himself. Daryl continues the search for Sophia, while the other survivors start arriving at the farm and their wounds tended to by Hershel."
    },
    {
        ep: 10,
        season: 2,
        season_ep: 4,
        title: "Cherokee Rose",
        director: "Billy Gierhart",
        air_date: "November 6, 2011",
        us_viewers: "6.29 millions",
        plot: "With Hershel's surgery on Carl successful, Hershel tells Rick that his group should leave his farm once Carl is well enough, but Rick convinces him to allow them to stay if they follow Hershel's rules. The survivors attempt to remove a walker from the farm's well-water. Glenn and Hershel's daughter, Maggie, begin a romantic relationship, while Lori discovers she is pregnant."
    },
    {
        ep: 11,
        season: 2,
        season_ep: 5,
        title: "Chupacabra",
        director: "Guy Ferland",
        air_date: "November 13, 2011",
        us_viewers: "6.12 millions",
        plot: "Daryl continues to search for Sophia, despite Rick and Shane arguing whether it is pointless and Hershel becoming more unnerved by the group's presence. As Glenn's relationship with Maggie continues in secret, Glenn offers to meet Maggie in the barn's hayloft, and Maggie is too late to stop him from discovering the barn is filled with walkers."
    },
    {
        ep: 12,
        season: 2,
        season_ep: 6,
        title: "Secrets",
        director: "David Boyd",
        air_date: "November 20, 2011",
        us_viewers: "6.08 millions",
        plot: "Glenn tells Dale about the walkers, and together discreetly approach Hershel, who explains the walkers are his friends and family, and believes they can be cured. Rick discovers that Lori is pregnant, and tensions rise between Rick and Shane over what transpired with Lori while Rick was in a coma."
    },
    {
        ep: 13,
        season: 2,
        season_ep: 7,
        title: "Pretty Much Dead Already",
        director: "Michelle MacLaren",
        air_date: "November 27, 2011",
        us_viewers: "6.62 millions",
        plot: "Glenn reveals the presence of the walkers in the barn to the rest of the group, and Rick confronts Hershel about it. Hershel tells Rick their group can only stay if they promise not to kill any walkers, and takes Rick out to demonstrate how to capture them. When they return, Shane becomes enraged, and releases the barn's locks, letting the walkers trickle out, and the group is forced to kill them. One last walker appears: Sophia. Rick is forced to shoot her in the head."
    },
    {
        ep: 14,
        season: 2,
        season_ep: 8,
        title: "Nebraska",
        director: "Clark Johnson",
        air_date: "February 12, 2012",
        us_viewers: "8.10 millions",
        plot: "Hershel demands Rick's group leave. The group is shaken by the loss of Sophia and they bury her along with Hershel's wife and son-in-law. Hershel goes missing; Rick and Glenn find him drinking in a nearby town bar. When they turn to leave, they are confronted by two men, Dave and Tony, that want to know about Hershel's farm. Rick kills them before they attack the three."
    },
    {
        ep: 15,
        season: 2,
        season_ep: 9,
        title: "Triggerfinger",
        director: "Billy Gierhard",
        air_date: "February 19, 2012",
        us_viewers: "6.89 millions",
        plot: "Three other men arrive at the bar to investigate the gunfire, and Rick, Glenn, and Hershel attempt to sneak away. Their activities have lured walkers to the town, and in their haste to escape, one of the three men, Randall, gets his leg impaled on a fence. Rick is unable to leave him behind and helps to free him, taking him with them back to the farm. The other survivors at the farm start to recognize Shane is becoming more unhinged."
    },
    {
        ep: 16,
        season: 2,
        season_ep: 10,
        title: "18 Milles Out",
        director: "Ernest Dickerson",
        air_date: "February 26, 2012",
        us_viewers: "7.04 millions",
        plot: "Rick and Shane take a healed Randall several miles from the farm with the intent to abandon him without knowledge of the farm's location, but once there, have an argument, which turns physical, about not only what to do with Randall, but the fissure between Rick and Shane's leadership with the group. When the brawl attract a pack of walkers, they are forced to take Randall back to the farm. Meanwhile, Hershel's daughter Beth attempts suicide while under Andrea's watch, but is saved by Maggie and Lori."
    },
    {
        ep: 17,
        season: 2,
        season_ep: 11,
        title: "Judge, Jury, Executioner",
        director: "Greg Nicotero",
        air_date: "March 4, 2012",
        us_viewers: "6.77 millions",
        plot: "Randall is kept in custody, and they learn his group would be dangerous to bring to the farm, and that letting Randall live to reveal the farm's location would be a risk. Dale tries to calm tensions reminding everyone about their humanity and warning them the group is broken. Carl attempts to kill a walker in the forest, but it scares him away. Shane, Rick, and Daryl take Randall out to the barn to execute him, but Ricks stops when he sees that Carl was watching. Later, as Dale paces on the outskirts of the farm, he is mortally wounded by the walker Carl failed to kill. Daryl dispatches the walker before mercifully killing Dale."
    },
    {
        ep: 18,
        season: 2,
        season_ep: 12,
        title: "Better Angels",
        director: "Guy Ferland",
        air_date: "March 11, 2012",
        us_viewers: "6.89 millions",
        plot: "As Dale is laid to rest, his advice to the group sits heavy with Rick, and he decides they should spare Randall's life. However, Shane secretly takes Randall deep into the woods and murders him, then returns and claims Randall escaped. The group searches for him, and Shane uses the opportunity to confront Rick at gunpoint, intent on killing him. Rick, after trying unsuccessfully to calm Shane down, is forced to stab him to death, unaware Carl is watching nearby. Carl holds his gun at Rick, but uses it to shoot Shane, who has reanimated as a walker, in the head. The gunfire draws a horde of walkers to the farm."
    },
    {
        ep: 19,
        season: 2,
        season_ep: 13,
        title: "Beside the Dying Fire",
        director: "Ernest Dickerson",
        air_date: "March 18, 2012",
        us_viewers: "8.99 millions",
        plot: "Hershel's farm is swarmed by walkers and overwhelm the survivors, forcing them to abandon it, bringing Hershel, Maggie, and Beth with them. After regrouping, Rick is forced to tell them what Jenner told him; they are all infected with the walker virus and will automatically become walkers upon death, regardless of how they die. He takes charge of the group to find them a safe haven. Andrea is separated from the others during the evacuation from the farm, but found by a mysterious hooded person, who has two armless walker pets and wields a katana."
    },
    {
        ep: 20,
        season: 3,
        season_ep: 1,
        title: "Seed",
        director: "Ernest Dickerson",
        air_date: "October 14, 2012",
        us_viewers: "10.87 millions",
        plot: "Eight months after abandoning Hershel's farmstead, and Lori at the end of her pregnancy, Rick leads the group into securing a prison presently overrun with walkers. While clearing out the cells, Hershel is bitten on the foot by a walker, and they are forced to amputate it to save his life, discovering that five surviving prisoners are present. Meanwhile, Michonne watches over an ailing Andrea."
    },
    {
        ep: 21,
        season: 3,
        season_ep: 2,
        title: "Sick",
        director: "Billy Gierhart",
        air_date: "October 21, 2012",
        us_viewers: "9.55 millions",
        plot: "Rick's group discuss what to do with the five prison survivors, and initially lock them in a separate but walker-free part of the prison. When the prisoners agree to help them clear walkers, Rick allows them to come, but finds their leader Tomas unstable and is forced to kill him, while abandoning another, Andrew, in a yard full of walkers. The others tend carefully to Hershel's health to make sure he does not turn."
    },
    {
        ep: 22,
        season: 3,
        season_ep: 3,
        title: "Walk with Me",
        director: "Guy Ferland",
        air_date: "October 28, 2012",
        us_viewers: "10.51 millions",
        plot: "Andrea and Michonne witness a group of men investigate a helicopter crash, but are captured by Merle and taken to the fortified town of Woodbury, where they meet The Governor, of whom Michonne is distrustful. One of the survivors of the crash tells The Governor of where their group is based out of, and The Governor leads his men to kill the other group and secure their weapons and vehicles for themselves."
    },
    {
        ep: 23,
        season: 3,
        season_ep: 4,
        title: "Killer Within",
        director: "Guy Ferland",
        air_date: "November 4, 2012",
        us_viewers: "9.27 millions",
        plot: "As Hershel recovers, the prison's alarms go off, and walkers, lured by the sound, overwhelm Rick's group, and they are forced to scatter within the prison, while T-Dog sacrifices himself to protect Carol. Rick, aided by surviving prisoners Oscar and Axel in shutting down the alarms, discovers the walkers were lured through a breach in the prison fence by Andrew, and kills him. Lori, Carl, and Maggie secure themselves in a boiler room as Lori goes into labor. Maggie is forced to perform a Caesarean section to deliver her daughter but which is fatal to Lori, and Carl shoots her to prevent reanimation. As the survivors regroup, Rick is devastated to discover Lori's death."
    },
    {
        ep: 24,
        season: 3,
        season_ep: 5,
        title: "Say the Word",
        director: "Greg Nicotero",
        air_date: "November 11, 2012",
        us_viewers: "10.37 millions",
        plot: "Michonne discovers The Governor's secret captivity of walkers, and decides to leave Woodbury, despite Andrea staying behind and learning more about The Governor from his second-hand man, Milton. The Governor, on learning of her departure, has Merle and a group of men try to find her. Meanwhile, Rick is still emotionally upset about his loss when he gets a phone call."
    },
    {
        ep: 25,
        season: 3,
        season_ep: 6,
        title: "Hounded",
        director: "Dan Attias",
        air_date: "November 18, 2012",
        us_viewers: "9.21 millions",
        plot: "Rick, still in mourning, seems to receive phone calls in the boiler room where Lori died, from previous survivors that had died. While evading capture, Michonne witnesses Glenn and Maggie scavenging for baby supplies for Lori's child before they are captured by Merle, who recognizes Glenn as one of the members of his former group that abandoned him in Atlanta. Michonne, having deduced where Glenn and Maggie originated from, takes the supplies to the prison and encounters Rick there."
    },
    {
        ep: 26,
        season: 3,
        season_ep: 7,
        title: "When the Dead Come Knocking",
        director: "Dan Sackeim",
        air_date: "November 25, 2012",
        us_viewers: "10.43 millions",
        plot: "Though distrustful of her, Rick has Michonne's wounds tended to while she explains Glenn and Maggie's capture and Woodbury. At Woodbury, The Governor harshly interrogates Glenn and Maggie to learn where they are from, and when he threatens to kill Glenn, Maggie reveals the group is at the prison. The Governor sends Merle to scout the prison, while Rick, Daryl, Oscar, and Michonne approach Woodbury."
    },
    {
        ep: 27,
        season: 3,
        season_ep: 8,
        title: "Made to Suffer",
        director: "Billy Gierhart",
        air_date: "December 2, 2012",
        us_viewers: "10.48 millions",
        plot: "Rick's party invade Woodbury and rescue Glenn and Maggie, where Daryl learns Merle is still alive. Michonne, attempting to kill The Governor, finds he keeps his reanimated daughter Penny still chained up and kills her; The Governor discovers Michonne and they fight, which ends when she stabs him in the eye. Oscar is killed in covering their escape while Daryl is captured and forced into fighting Merle. Meanwhile, a new group of survivors led by Tyreese and Sasha enter the prison through the fence breach."
    },
    {
        ep: 28,
        season: 3,
        season_ep: 9,
        title: "The Suicide King",
        director: "Lesli Linka Glatter",
        air_date: "February 10, 2013",
        us_viewers: "12.26 millions",
        plot: "While Daryl and Merle fight, Rick and Maggie return to Woodbury to free Daryl. They are forced to bring Merle along, which Rick and Glenn fear will harm them, and Daryl and Merle go on their own. The residents of Woodbury begin to question their safety, and Andrea tries to calm The Governor down from taking drastic action. At the prison, the survivors discover Tyreese and Sasha's group, and though wary, allow them to stay. When Rick returns, he is still seeing visions of Lori and becomes angry and violent, and Glenn suggests it is best for the new group to leave."
    },
    {
        ep: 29,
        season: 3,
        season_ep: 10,
        title: "Home",
        director: "Seith Mann",
        air_date: "February 17, 2013",
        us_viewers: "11.05 millions",
        plot: "Though distrustful of her, The Governor offers to give leadership of Woodbury to Andrea. The Governor secretly leads a group of his men to attack the prison, killing Axel, and breaching the outer fence to allow walkers in. The survivors hold back the attack, forcing The Governor to retreat, while Daryl and Merle, having decided it is best to stay part of the group, arrive to save the other survivors."
    },
    {
        ep: 30,
        season: 3,
        season_ep: 11,
        title: "I Ain't a Judas",
        director: "Greg Nicotero",
        air_date: "February 24, 2013",
        us_viewers: "11.01 millions",
        plot: "Andrea learns of the attack on the prison, and demands to go there to try to calm the situation. The Governor allows her to go but with Milton along. En route, they find Tyreese and Sasha's group, and Milton takes them back to Woodbury, where they offer to give The Governor the layout of the prison in exchange for being allowed to stay. At the prison, Andrea explains the situation and that The Governor really wants Michonne, and the group suggests she try to kill The Governor herself before all-out war breaks out. Back in Woodbury, Andrea finds she cannot come to kill The Governor."
    },
    {
        ep: 31,
        season: 3,
        season_ep: 12,
        title: "Clear",
        director: "Tricia Brock",
        air_date: "March 3, 2013",
        us_viewers: "11.30 millions",
        plot: "Rick, Carl, and Michonne travel back to Rick's home in King County to gather more weapons for the pending battle, and discover Morgan Jones is still alive, though has lost his son Duane. Rick tries to convince Morgan to return with them, while Michonne protects Carl while he recovers supplies and a personal photograph from a bar. As they return, Rick and Carl realize Michonne is an asset to their group."
    },
    {
        ep: 32,
        season: 3,
        season_ep: 13,
        title: "Arrow on the Doorpost",
        director: "David Boyd",
        air_date: "March 10, 2013",
        us_viewers: "11.46 millions",
        plot: "Andrea arranges a face-to-face meeting between The Governor and Rick, where The Governor demands they turn over Michonne to him. Believing that The Governor wants to kill them regardless, Rick and The Governor prepare their respective groups for combat."
    },
    {
        ep: 33,
        season: 3,
        season_ep: 14,
        title: "Prey",
        director: "Stefan Schwartz",
        air_date: "March 17, 2013",
        us_viewers: "10.84 millions",
        plot: "Andrea learns of The Governor's duplicity and intent to kill Rick's group from Milton, and manages to escape Woodbury to warn Rick, but The Governor is able to capture her just before she reaches the prison. While they are gone, someone burns all of the captured walkers that The Governor has kept, and he suspects either Milton or Tyreese."
    },
    {
        ep: 34,
        season: 3,
        season_ep: 15,
        title: "This Sorrowful Life",
        director: "Greg Nicotero",
        air_date: "March 24, 2013",
        us_viewers: "10.99 millions",
        plot: "Rick decides on his own to deliver Michonne to The Governor, discreetly asking Merle for help, but Merle insists he do it alone. As Merle takes Michonne to the spot, Merle becomes sympathetic towards her, and lets her go. Merle uses the opportunity to lead a group of walkers to the meeting point, and then to attack The Governor, but is eventually killed. Michonne returns to the prison and on her way back she meets Daryl telling him that Merle let her go. Daryl goes to the meeting point and finds Merle, now reanimated, before he kills him. Michonne finally arrives back at prison."
    },
    {
        ep: 35,
        season: 3,
        season_ep: 16,
        title: "Welcome to the Tombs",
        director: "Ernest Dickerson",
        air_date: "March 31, 2013",
        us_viewers: "12.42 millions",
        plot: "The Governor, no longer trusting of anyone, fatally wounds Milton and locks him in the room he has kept Andrea, expecting him to turn and kill her; Milton manages to keep his wits long enough to explain to her how to escape. The Governor leads an attack on the prison, but Rick's group is prepared and ambushes them, forcing The Governor and stragglers to flee; he later kills his own people when they do not want to return and continue the fight. Rick and the others return to Woodbury, and are too late to save Andrea, having been bitten by Milton. She kills herself, and the surviving residents of Woodbury are brought to the prison."
    },
    {
        ep: 36,
        season: 4,
        season_ep: 1,
        title: "30 Days Without an Accident",
        director: "Greg Nicotero",
        air_date: "October 13, 2013",
        us_viewers: "16.11 millions",
        plot: "Rick's group has brought the survivors from Woodbury into the prison, and Rick has renounced leadership of the group. The prison has proven a safe haven for many months, while Michonne continues to search for The Governor, fearing his retribution. Patrick, one of new survivors comes down with a fatal illness, dies, and reanimates as a walker."
    },
    {
        ep: 37,
        season: 4,
        season_ep: 2,
        title: "Infected",
        director: "Guy Ferland",
        air_date: "October 20, 2013",
        us_viewers: "13.95 millions",
        plot: "The reanimated Patrick manages to attack other survivors in a cell block, and the group is forced to kill off those bitten and relocate the others to a different block. They discover a deadly flu strain, brought by pigs that Rick tried to raise, affecting some of the survivors and which killed Patrick, and isolate those infected, fearing they will reanimate when they die. Tyreese discovers his girlfriend Karen and her friend David, both considered infected, were killed and burnt by someone unknown."
    },
    {
        ep: 38,
        season: 4,
        season_ep: 3,
        title: "Isolation",
        director: "Dan Sackeim",
        air_date: "October 27, 2013",
        us_viewers: "12.92 millions",
        plot: "The illness continues to spread, and Hershel takes responsibility to stay with the infected to tend to them. Daryl leads a group to a nearby veterinary college to recover medicine to cure the illness, though en route, overhear a radio broadcast directing people to 'sanctuary'. Rick discovers Carol killed Karen and David, acting on her own but for the good of the survivors."
    },
    {
        ep: 39,
        season: 4,
        season_ep: 4,
        title: "Indifference",
        director: "Tricia Brock",
        air_date: "November 3, 2013",
        us_viewers: "13.31 millions",
        plot: "Daryl's group completes their run to the hospital, while Rick and Carol go scavenging for supplies at a local residential area. After trying to help a couple return to the prison, only to have the wife die and the husband disappear. Rick tells Carol that she cannot come back to the prison, and the two depart on separate ways."
    },
    {
        ep: 40,
        season: 4,
        season_ep: 5,
        title: "Internment",
        director: "David Boyd",
        air_date: "November 10, 2013",
        us_viewers: "12.20 millions",
        plot: "The infected survivors begin to succumb to the illness and reanimate as walkers, forcing the survivors to start to kill their friends, but Daryl's group returns in time for Hershel and Bob to help administer the medicine and cure the remaining infected. Carol's absence from the group is noticed, but Rick only confides in his choice to a select few. As the survivors recover and try to return to a regular routine, they are unaware they are being watched from afar by The Governor."
    },
    {
        ep: 41,
        season: 4,
        season_ep: 6,
        title: "Live Bait",
        director: "Michael Uppendahl",
        air_date: "November 17, 2013",
        us_viewers: "12.00 millions",
        plot: "In a flashback episode, The Governor is abandoned by Martinez and Shumpert following his attack on the prison. He sets Woodbury ablaze, and later encounters the Chamblers, Lilly, Tara, Lilly's daughter Meghan, and their dying father. He hides his identity while helping them to deal with their father, and the three opt to leave with him when he moves on. They come across another group of survivors - this being led by Martinez."
    },
    {
        ep: 42,
        season: 4,
        season_ep: 7,
        title: "Dead Weight",
        director: "Jeremy Podeswa",
        air_date: "November 24, 2013",
        us_viewers: "11.29 millions",
        plot: "While still in flashback, Martinez recognizes The Governor has taken a new identity and privately explains how he found this new group and their arsenal of weapons. The Governor senses the group is weak, and with the power of their arsenal, believes he can secure the prison for a safe haven for the Chamblers. He kills Martinez and his right-hand man, taking charge of the group, and organizes the group to head to the prison. The Governor, observing the prison, sees Michonne and Hershel outside its fence, burning the corpses of the infected."
    },
    {
        ep: 43,
        season: 4,
        season_ep: 8,
        title: "Too Far Gone",
        director: "Ernest Dickerson",
        air_date: "December 1, 2013",
        us_viewers: "12.05 millions",
        plot: "The Governor captures Michonne and Hershel and challenges Rick and the others to abandon the prison. Though Rick offers co-existence, The Governor refuses and decapitates Hershel, and gunfire breaks out. In the midst of battle, Lilly rushes up to The Governor with the body of Meghan, who was bitten by a walker while playing. The Governor shoots Meghan to prevent her from reanimating and then orders a full-out assault of the prison, tearing through its fences and allowing a horde of walkers in. The survivors in the prison are forced to scatter when they no longer can hold down their defenses. At the same time, Rick and The Governor engage in a one-on-one brawl in which the latter gains the upper hand, only to be mortally stabbed by Michonne just before he can kill Rick. Rick escapes with Carl, while the near-death Governor is approached and executed by Lilly."
    },
    {
        ep: 44,
        season: 4,
        season_ep: 9,
        title: "After",
        director: "Greg Nicotero",
        air_date: "February 9, 2014",
        us_viewers: "15.76 millions",
        plot: "Carl helps his injured father Rick as they flee the prison and fearful they have lost Lori's child. They take shelter in a suburban home, and Rick collapses from exhaustion. Carl scavenges nearby homes for supplies. Michonne, finding the prison overrun and no sign of the survivors, sets off on her own, but comes to an epiphany about her purpose, and follows Carl and Rick's trail, rejoining them at the home they have taken shelter at."
    },
    {
        ep: 45,
        season: 4,
        season_ep: 10,
        title: "Inmates",
        director: "Tricia Brock",
        air_date: "February 16, 2014",
        us_viewers: "13.34 millions",
        plot: "Daryl helps to protect Beth as they flee and search for survivors. Tyreese, having saved Lori's child Judith, escorts young sisters Lizzie and Mika, and is soon joined by Carol. Maggie, Sasha and Bob find the bus from the prison, the survivors inside dead and reanimated as walkers, though Maggie is relieved that Glenn is not among them. Glenn, having been knocked unconscious at the prison, finds a frightened Tara and helps to lead her to safety, coming across Abraham, Eugene and Rosita in their travels."
    },
    {
        ep: 46,
        season: 4,
        season_ep: 11,
        title: "Claimed",
        director: "Seith Mann",
        air_date: "February 23, 2014",
        us_viewers: "13.12 millions",
        plot: "As Rick, Carl and Michonne rest up, their home is discovered by a group of men called Claimers, and they are forced to abandon it, later finding signs towards 'Terminus' along railroad tracks. Glenn and Tara learn that Abraham and Rosita are escorting Eugene to Washington, D.C. as he knows how to stop the walker outbreak once there."
    },
    {
        ep: 47,
        season: 4,
        season_ep: 12,
        title: "Still",
        director: "Julius Ramsay",
        air_date: "March 2, 2014",
        us_viewers: "12.61 millions",
        plot: "Beth continues to travel with Daryl, and becomes distraught she might die before having a drink of alcohol, something Hershel prevented her from having. After scavenging through a country club and only finding peach schnapps, Daryl takes her to a cabin he had found earlier that was used to make moonshine, and tells her that is a proper drink. As they get inebriated, Daryl sadly discusses his past and what Merle meant to him. They decide to burn down the cabin as a way of putting their past behind them."
    },
    {
        ep: 48,
        season: 4,
        season_ep: 13,
        title: "Alone",
        director: "Ernest Dickerson",
        air_date: "March 9, 2014",
        us_viewers: "12.65 millions",
        plot: "While following signs to Terminus, Maggie, Sasha, and Bob disagree on what they should do. Maggie, still anxious about Glenn's fate, leaves on her own. Bob leaves to follow her trail, while Sasha decides to remain in a small town and ultimately save Maggie from a horde of walkers and agrees to continue with her. Daryl and Beth come across a church where they take refuge, but when the church is invaded by walkers, Daryl covers for Beth's escape, during which she is captured by someone in a car with a white cross on its back windshield. Daryl is suddenly captured by another group of men."
    },
    {
        ep: 49,
        season: 4,
        season_ep: 14,
        title: "The Groove",
        director: "Michael E. Satrazemis",
        air_date: "March 16, 2014",
        us_viewers: "12.87 millions",
        plot: "Tyreese, Carol, Lizzie, Mika and Judith follow signs to Terminus and come across a cabin which they plan to take a few days of rest in. During this time, Tyreese and Carol find Lizzie has an unhealthy fascination with walkers. Later, after coming back with supplies, they find Lizzie has killed Mika and is about to kill Judith, hoping they will come back as walkers. Carol and Tyreese agree Lizzie is too dangerous to keep around, and Carol is forced to kill her. Carol opens up about having killed Tyreese's friend Karen, which he forgives her for. They leave the cabin and continue to Terminus."
    },
    {
        ep: 50,
        season: 4,
        season_ep: 15,
        title: "Us",
        director: "Greg Nicotero",
        air_date: "March 23, 2014",
        us_viewers: "13.47 millions",
        plot: "Glenn, Tara, Abraham, Eugene and Rosita continue towards Terminus, and they find a sign by a tunnel written by Maggie to Glenn. Abraham fears the tunnel too dangerous but Glenn and Tara proceed. They are surrounded by walkers but saved by Maggie, Sasha, and Bob; the combined group continue to Terminus as a waypoint towards Washington, D.C. They find Terminus and are welcomed with open arms. Meanwhile, Daryl is forced to travel with the men that captured him, the same Claimers that Rick encountered, and learning they are on Rick's trail for having killed one of their own."
    },
    {
        ep: 51,
        season: 4,
        season_ep: 16,
        title: "A",
        director: "Michelle MacLaren",
        air_date: "March 30, 2014",
        us_viewers: "15.68 millions",
        plot: "The Claimers catch up to Rick, Carl, and Michonne, but when they threaten to rape Michonne and Carl, they are slaughtered by Rick and Daryl. The four continue towards Terminus, but Rick is wary and leaves their weapons hidden before they enter. Inside they are guided by Gareth, who welcomes them. Rick spots gear belonging to the other survivors and demands to know what is going on. Rick's group is forced into a boxcar at gunpoint where they join up with Glenn, Maggie, Sasha, Bob, Tara, Abraham, Eugene, and Rosita, all also captives of the Terminus residents. Rick asserts that they have picked the wrong people to mess with."
    },
    {
        ep: 52,
        season: 5,
        season_ep: 1,
        title: "No Sanctuary",
        director: "Greg Nicotero",
        air_date: "October 12, 2014",
        us_viewers: "17.29 millions",
        plot: "Carol and Tyreese capture a Terminus ally, Martin, learning their friends have been captured and will likely be cannibalized by Gareth and the other Terminus survivors. While Tyreese stays back with Judith and Martin, Carol uses a herd of walkers as a distraction to free Rick and the others. Once regrouped, the others convince Rick to forget attacking Terminus and instead head towards Washington, D.C."
    },
    {
        ep: 53,
        season: 5,
        season_ep: 2,
        title: "Strangers",
        director: "David Boyd",
        air_date: "October 19, 2014",
        us_viewers: "15.14 millions",
        plot: "Rick's group saves Father Gabriel Stokes from walkers, and he provides them shelter in his church; his motives are suspicious, leaving some anxious to continue on. Carol withdraws from the group, followed by Daryl, when they see a car with a white cross on its window, the same as the one Daryl saw abduct Beth, and the two follow it. Bob is captured by the remaining Terminus survivors led by Gareth, who proceed to amputate and consume his leg."
    },
    {
        ep: 54,
        season: 5,
        season_ep: 3,
        title: "Four Walls and a Roof",
        director: "Jeffrey F. January",
        air_date: "October 26, 2014",
        us_viewers: "13.80 millions",
        plot: "Father Gabriel is forced to reveal he had let his congregation be consumed by walkers while he barricaded himself inside, and is now experiencing a crisis of faith. Gareth leaves Bob outside the church, and Rick leads a group to finish off Gareth in retribution. Gareth uses this opportunity to attack the church, but is ambushed and killed by Rick's group. Rick insists they wait for Daryl and Carol's return before leaving, but Abraham and Rosita decide to continue on escorting Eugene to D.C., with Glenn, Maggie, and Tara coming along. Abraham leaves a map for Rick to follow him once he is ready to leave."
    },
    {
        ep: 55,
        season: 5,
        season_ep: 4,
        title: "Slabtown",
        director: "Michael E. Satrazemis",
        air_date: "November 2, 2014",
        us_viewers: "14.52 millions",
        plot: "Beth awakens in Grady Memorial Hospital in Atlanta, finding it run and protected by police officers led by Officer Dawn Lerner. Though they provide medical treatment, they force those in their care to help and forgo medical treatment on the weakest. When Beth goes against these policies, she is berated by Dawn. Beth befriends fellow patient, Noah, and the two attempt to escape together. Noah escapes, but Beth is caught, punished, and instructed to kill a corrupt doctor; just then, she sees an unconscious Carol being wheeled into the hospital."
    },
    {
        ep: 56,
        season: 5,
        season_ep: 5,
        title: "Self Help",
        director: "Ernest Dickerson",
        air_date: "November 9, 2014",
        us_viewers: "13.53 millions",
        plot: "Abraham's group heads north, where Eugene's insecurities lead to some conflict within the group. They come across a wide expanse of fields that are filled with walkers, and Abraham and Glenn get into an argument on what to do. During this, Eugene reveals that he lied about being a scientist or knowing a cure, only using that to inspire Abraham to help protect him when they first met. Abraham punches Eugene out, and then drops to knees in shock and disbelief."
    },
    {
        ep: 57,
        season: 5,
        season_ep: 6,
        title: "Consumed",
        director: "Seith Mann",
        air_date: "November 16, 2014",
        us_viewers: "14.07 millions",
        plot: "Daryl and Carol follow the car to Atlanta, where they have their gear stolen by Noah. They discover the white cross vehicles are from Grady Memorial, and use a building across the street to study the hospital. There, they encounter Noah again, who apologizes and gives back their gear, as well as telling them about Beth. With the police from the hospital en route to their building, the three escape, but Carol is hit by a speeding police car and taken to the hospital."
    },
    {
        ep: 58,
        season: 5,
        season_ep: 7,
        title: "Crossed",
        director: "Billy Gierhart",
        air_date: "November 23, 2014",
        us_viewers: "13.33 millions",
        plot: "Though Dawn believes Carol is a lost cause and orders treatment to be denied, Beth is able to provide her with life-saving medicine. Daryl and Noah return to the church to recruit Rick and others to rescue Beth. The group returns to Atlanta and devise a plan to capture some of the police officers to use as a trade for Carol and Beth."
    },
    {
        ep: 59,
        season: 5,
        season_ep: 8,
        title: "Coda",
        director: "Ernest Dickerson",
        air_date: "November 23, 2014",
        us_viewers: "14.81 millions",
        plot: "At the church, Gabriel inadvertently leads a group of walkers to it, but Abraham and his group arrive in time to protect the others. They all agree to head to Atlanta to help. Rick negotiates to trade the captured officers for Carol and Beth. In the trade confrontation, Beth stabs Dawn, who instinctively shoots and kills Beth; Daryl reacts by killing Dawn. The groups stand down and Rick's group leaves the hospital with Beth's corpse, eventually meeting with Abraham's group."
    },
    {
        ep: 60,
        season: 5,
        season_ep: 9,
        title: "What Happened and What's Going on",
        director: "Greg Nicotero",
        air_date: "February 8, 2015",
        us_viewers: "15.64 millions",
        plot: "Rick's group heads north, and a small group of Rick, Tyreese, Glenn, and Michonne take Noah to his hometown community which he claims was protected. They find the community has been overrun with walkers, and Noah panics; Tyreese is bitten by a walker while protecting him. Tyreese has visions of several now-dead survivors, while Michonne amputates the bitten arm. Despite this, Tyreese dies as they race back to join the others."
    },
    {
        ep: 61,
        season: 5,
        season_ep: 10,
        title: "Them",
        director: "Juliuj Ramsay",
        air_date: "February 15, 2015",
        us_viewers: "12.27 millions",
        plot: "The group's vehicle breaks down, forcing them to continue on foot towards D.C. After a run-in with a small horde of walkers and feral dogs, Daryl suggests the group take shelter in a small barn. They find a number of water bottles and jugs with a note saying they are from a 'friend,' but Rick is wary and orders them to avoid it. The next morning, the group is approached by Aaron, identifying himself as a 'friend.'"
    },
    {
        ep: 62,
        season: 5,
        season_ep: 11,
        title: "The Distance",
        director: "Larysa Kondracki",
        air_date: "February 22, 2015",
        us_viewers: "13.44 millions",
        plot: "Aaron tells Rick's group about Alexandria, a walled-off and safe-zone community, and that he wants them to 'audition' to join their community. Despite Aaron telling them truthfully of vehicles waiting nearby to take them to Alexandria, Rick remains distrustful, fearing a repeat of Woodbury and Terminus. Michonne convinces Rick that they should at least check it out; Aaron leads the group to Alexandria's gates."
    },
    {
        ep: 63,
        season: 5,
        season_ep: 12,
        title: "Remember",
        director: "Greg Nicotero",
        air_date: "March 1, 2015",
        us_viewers: "14.43 millions",
        plot: "Rick's group turn over their weapons before meeting with Alexandria's leader, Deanna Monroe. She gives them individual private interviews, and assigns them quarters to wait out their decision. The group starts to integrate with the other Alexandria survivors, finding they are generally ill-prepared for dealing with walkers. Deanna gives Rick and Michonne constable duties as a show of trust, but Rick confides to Carol that they will take over if the community fails to protect itself."
    },
    {
        ep: 64,
        season: 5,
        season_ep: 13,
        title: "Forget",
        director: "David Boyd",
        air_date: "March 8, 2015",
        us_viewers: "14.53 millions",
        plot: "Though Rick's group is welcomed to the community, Rick, Daryl, and Carol meet privately to discuss how to recover and stash their weapons from the Alexandria armory as backup plans should they need to exert control."
    },
    {
        ep: 65,
        season: 5,
        season_ep: 14,
        title: "Spend",
        director: "Jennifer Lynch",
        air_date: "March 15, 2015",
        us_viewers: "13.78 millions",
        plot: "Abraham takes control of the Alexandria construction crew after rescuing them from walkers, while an attempt to obtain equipment to repair the community's solar panels leads to the deaths of both Deanna's son Aiden, and Noah. Deanna observes that members of Rick's group seem to be taking charge of the community; Gabriel warns Deanna that Rick's group is dangerous. Carol determines that Pete, the town's surgeon, is abusing his wife Jessie and son Sam, and suggests to Rick he must kill Pete."
    },
    {
        ep: 66,
        season: 5,
        season_ep: 15,
        title: "Try",
        director: "Michael E. Satrazemis",
        air_date: "March 22, 2015",
        us_viewers: "13.76 millions",
        plot: "Deanna and Rick blame each other for the deaths of Aiden and Noah. Rick tries to approach Jessie privately to offer his protection against Pete, but Pete interrupts, leading to a physical fight between him and Rick, and a public confrontation between Rick and Deanna; Rick asserts Alexandria's residents have grown too complacent to survive. Michonne knocks Rick out before he can cause further damage."
    },
    {
        ep: 67,
        season: 5,
        season_ep: 16,
        title: "Conquer",
        director: "Greg Nicotero",
        air_date: "March 29, 2015",
        us_viewers: "15.78 millions",
        plot: "Deanna prepares to hold a meeting to discuss exiling Rick for his last outburst, and Rick prepares his group to move into action should they decide to do so. Daryl and Aaron discover that the Wolves, a group of scavengers camping near Alexandria, threaten the community, and come across Morgan Jones, who has been following Rick's trail. As the meeting starts, Rick discovers some walkers inside the community, allowed in inadvertently by Gabriel, and shows one of the bodies to the gathered Alexanderians, showing that they need his help to survive. Pete barges into the meeting to kill Rick, accidentally kills Deanna's husband instead. Distraught, Deanna orders Rick to execute Pete, which he does just as Daryl, Aaron, and Morgan arrive."
    },
    {
        ep: 68,
        season: 6,
        season_ep: 1,
        title: "First Time Again",
        director: "Greg Nicotero",
        air_date: "October 11, 2015",
        us_viewers: "14.63 millions",
        plot: "Following the deadly town meeting, Rick and Morgan discover a large group of walkers in a nearby quarry. Rick pushes forward a plan to lure the walkers away from the community before they become a greater threat. Rick's brutal domination of the Alexandrians leads one to contemplate killing him while Morgan provokes him to question his conscience. Ultimately, the plan falls apart when a horn blares near Alexandria, attracting many walkers from the orderly 'parade.'"
    },
    {
        ep: 69,
        season: 6,
        season_ep: 2,
        title: "JSS",
        director: "Jennifer Lynch",
        air_date: "October 18, 2015",
        us_viewers: "12.18 millions",
        plot: "Alexandria is invaded by the Wolves, who brutally slaughter people in the streets. Spencer opens fire on a truck approaching the wall, killing the driver and inadvertently activating the truck's horn. Morgan saves people while Carol fights her way to the armory and distributes guns to survivors. Carl tries to shelter Ron and Enid, but Ron refuses his protection and Enid flees Alexandria. As the Alexandrians begin fighting back, Morgan is attacked by a member of the Wolves he had previously met on the road and convinces him and his pack to retreat."
    },
    {
        ep: 70,
        season: 6,
        season_ep: 3,
        title: "Thank You",
        director: "Michael Slovis",
        air_date: "October 25, 2015",
        us_viewers: "13.14 millions",
        plot: "Glenn and Michonne race to lead a group ahead of a herd which has changed course for Alexandria. The herd catches up to them, and only Michonne, Heath and Scott make it back to the community. Failing to distract the herd, Glenn and Nicholas are surrounded by walkers, leading Nicholas to panic and kill himself. Rick circles around for an RV hoping to draw the herd back on the planned route, but he is attacked by the Wolves that Morgan dismissed from Alexandria. Rick kills them, but the shot-up RV won't start as the walker herd begins surrounding it."
    },
    {
        ep: 71,
        season: 6,
        season_ep: 4,
        title: "Here's Not Here",
        director: "Stephen Williams",
        air_date: "November 1, 2015",
        us_viewers: "13.34 millions",
        plot: "In flashbacks, Morgan is living in the woods after burning down his apartment in a fit of insanity. He stumbles upon a secluded cabin and shoots at its sole inhabitant, psychiatrist Eastman, who knocks Morgan out and locks him in a cell. The two gradually bond as Eastman teaches Morgan aikido and a philosophy that all life is precious. After Eastman is killed by a walker, Morgan leaves and discovers a sign that leads to Terminus. In the present, Morgan tells his story to a Wolf he had secretly taken prisoner, in hopes of inspiring him to change his ways."
    },
    {
        ep: 72,
        season: 6,
        season_ep: 5,
        title: "Now",
        director: "Avi Youabian",
        air_date: "November 8, 2015",
        us_viewers: "12.44 millions",
        plot: "In flashbacks, Morgan is living in the woods after burning down his apartment in a fit of insanity. He stumbles upon a secluded cabin and shoots at its sole inhabitant, psychiatrist Eastman, who knocks Morgan out and locks him in a cell. The two gradually bond as Eastman teaches Morgan aikido and a philosophy that all life is precious. After Eastman is killed by a walker, Morgan leaves and discovers a sign that leads to Terminus. In the present, Morgan tells his story to a Wolf he had secretly taken prisoner, in hopes of inspiring him to change his ways."
    },
    {
        ep: 73,
        season: 6,
        season_ep: 6,
        title: "Always Accountable",
        director: "Jeffrey F. January",
        air_date: "November 15, 2015",
        us_viewers: "12.87 millions",
        plot: "While helping lead the walker herd away from Alexandria, Daryl is separated from Sasha and Abraham when they're ambushed by a group of strangers. Daryl is captured by a trio of survivors, who suspect he is one of the assailants. Daryl tries to recruit his captors, but they steal his crossbow and motorcycle before fleeing. Abraham and Sasha reunite with Daryl; they begin to head back to Alexandria in a fuel truck."
    },
    {
        ep: 74,
        season: 6,
        season_ep: 7,
        title: "Heads Up",
        director: "David Boyd",
        air_date: "November 22, 2015",
        us_viewers: "13.22 millions",
        plot: "After hiding from the walker herd, Glenn encounters Enid and convinces her to accompany him back to Alexandria. Ron sneaks into the armoury and steals ammunition. Carol confronts Morgan, suspecting that he is holding a prisoner. Glenn and Enid release several balloons, leading Maggie to realize Glenn is alive. However, at that moment, the damaged clock tower collapses, opening a breach in Alexandria's wall."
    },
    {
        ep: 75,
        season: 6,
        season_ep: 8,
        title: "Start to Finish",
        director: "Michael E. Satrazemis",
        air_date: "November 29, 2015",
        us_viewers: "13.98 millions",
        plot: "With the wall breached, walkers invade Alexandria. Rick, Michonne, Carl, Gabriel, and Deanna take refuge in Jessie's house; they discover Deanna has been bitten. Carol takes shelter in Morgan's house and discovers Denise treating the captured Wolf. Carol attempts to kill the Wolf, but Morgan stops her, only to be immediately knocked out by the Wolf, who takes Denise hostage and escapes. Succumbing to infection, Deanna stages a last stand as Rick's group disguises themselves as walkers and maneuvers through the walker horde. In a post-credits scene, Daryl, Abraham and Sasha are confronted by the Saviors, who tell them that all of their possessions now belong to Negan."
    },
    {
        ep: 76,
        season: 6,
        season_ep: 9,
        title: "No Way Out",
        director: "Greg Nicotero",
        air_date: "February 14, 2016",
        us_viewers: "13.74 millions",
        plot: "After eliminating the Saviors patrol, Abraham, Sasha, and Daryl continue toward Alexandria. While saving Denise from walkers, the Wolf is shot by Carol and killed by walkers. Sam and Jessie are killed by walkers while moving through the herd. In response, Ron tries to shoot Rick, but is killed by Michonne; Carl is shot in the eye as the handgun discharges. Rick inspires others to make a desperate stand against the herd; they are about to be overwhelmed when the walkers are diverted by burning fuel brought by Daryl, Sasha and Abraham."
    },
    {
        ep: 77,
        season: 6,
        season_ep: 10,
        title: "The Next World",
        director: "Kari Skogland",
        air_date: "February 21, 2016",
        us_viewers: "13.48 millions",
        plot: "Some two months after battling the walkers in Alexandria, Rick and Daryl head out for a supply run and encounter a smooth-talking man known as Jesus, who steals their truck; they bring him back to Alexandria after a tussle. Meanwhile, Michonne follows Spencer into the woods and aids him in dispatching and burying the walker that once was his mother, Deanna."
    },
    {
        ep: 78,
        season: 6,
        season_ep: 11,
        title: "Knots Untie",
        director: " Michael E. Satrazemis",
        air_date: "February 28, 2016",
        us_viewers: "12.79 millions",
        plot: "Rick's group travels to The Hilltop with Jesus to trade and alleviate Alexandria's food shortage. Talks are interrupted when a Hilltop resident attempts to assassinate Hilltop's leader, Gregory, on Negan's orders. Jesus explains that Negan's people have been extorting Hilltop for food, medicine and supplies under the threat of an attack. Maggie makes a deal with Gregory to kill Negan, take out the Saviors, and return a Hilltop hostage in exchange for half of their supplies."
    },
    {
        ep: 79,
        season: 6,
        season_ep: 12,
        title: "Not Tomorrow Yet",
        director: "Greg Nicotero",
        air_date: "March 6, 2016",
        us_viewers: "12.82 millions",
        plot: "Rick campaigns for a pre-emptive attack to kill the Saviors, leaving Carol haunted by the lives she has taken. Using a ruse to kill the guards at the compound, they secure the Hilltop hostage, Craig, and proceed to methodically murder several Saviors before an alarm is triggered. Jesus and Tara send Andy back to the Hilltop with Craig to honor their deal, while Carol prevents Maggie from joining the fight. The next morning, Tara and Heath depart on a supply run. A lone surviving Savior named Primo tries to escape; while Daryl beats him, a woman's voice comes over a walkie-talkie, claiming that they have Maggie and Carol."
    },
    {
        ep: 80,
        season: 6,
        season_ep: 13,
        title: "The Same Boat",
        director: "Greg Nicotero",
        air_date: "March 13, 2016",
        us_viewers: "12.53 millions",
        plot: "Carol and Maggie are captured by Paula, Michelle, Molly and Donnie, who observe Primo taken hostage by Rick's group. Feeling themselves at a disadvantage, they withdraw to a slaughterhouse to interrogate Carol and Maggie while awaiting reinforcements. When unguarded, Carol and Maggie free themselves and kill their four captors; they dispatch the reinforcements who arrive just ahead of their group. Rick kills Primo when he claims to be Negan."
    },
    {
        ep: 81,
        season: 6,
        season_ep: 14,
        title: "Twice as Far",
        director: "Alrick Riley",
        air_date: "March 20, 2016",
        us_viewers: "12.69 millions",
        plot: "Abraham and Eugene go on a patrol and find a facility where Eugene can craft ammunition; Abraham leaves after Eugene claims he no longer requires Abraham's protection. Daryl, Rosita, and Denise travel to an apothecary to scavenge medicines. Denise is killed by Dwight and the Saviors, who ambush Daryl and Rosita while holding Eugene hostage. A gun battle ensues, and Eugene is injured before Dwight retreats with the surviving members of his group. Carol sneaks out of Alexandria, leaving a note for Tobin expressing her wishes not to be pursued."
    },
    {
        ep: 82,
        season: 6,
        season_ep: 15,
        title: "East",
        director: "Michael E. Satrazemis",
        air_date: "March 27, 2016",
        us_viewers: "12.38 millions",
        plot: "While Alexandria is locked-down against the Savior threat, Carol is caught by a group of Saviors who want to use her to get into the community. She kills most of them, but one, Roman, survives and pursues her on foot. Rick and Morgan follow a blood trail they believe is Carol's, until Morgan sends Rick back due to his murderous reaction toward a non-hostile survivor. Aided by Glenn, Michonne and Rosita, Daryl hunts Dwight to avenge Denise, but the four of them are captured in the woods by Dwight and the Saviors."
    },
    {
        ep: 83,
        season: 6,
        season_ep: 16,
        title: "Last Day on Earth",
        director: "Greg Nicotero",
        air_date: "April 3, 2016",
        us_viewers: "14.19 millions",
        plot: "Roman finds Carol and shoots her twice, but is killed by Morgan before he can finish her off; two strangers find Carol and Morgan and offer to take them to their community for refuge. Rick's group try to get Maggie to Hilltop for medical attention, but find all of the routes blocked by the Saviors. Although Eugene volunteers to distract the Saviors while the rest of the group gets Maggie to Hilltop on foot, everyone is captured. Negan, who was not Primo, arrives and coerces the group's loyalty. As punishment for their actions, he bludgeons an unseen member of Rick's group to death with his barbed-wire laced baseball bat 'Lucille'."
    },
    {
        ep: 84,
        season: 7,
        season_ep: 1,
        title: "The Day Will Come When You Won't Be",
        director: "Greg Nicotero",
        air_date: "October 23, 2016",
        us_viewers: "17.03 millions",
        plot: "Negan's victim is revealed to be Abraham, who is beaten to death in front of Rick's group. Daryl punches Negan out of anger, prompting Negan to also murder Glenn. After several tests, Negan ultimately breaks Rick's resolve by nearly forcing him to hack off Carl's arm. Negan and his crew then leave with Daryl as hostage, while Sasha volunteers to take Maggie to Hilltop to recover, along with the bodies of Glenn and Abraham."
    },
    {
        ep: 85,
        season: 7,
        season_ep: 2,
        title: "JSS",
        director: " Greg Nicotero",
        air_date: "October 30, 2016",
        us_viewers: "12.46 millions",
        plot: "Carol and Morgan arrive at the Kingdom, a well-established community run by flamboyant former zookeeper 'King' Ezekiel. The Kingdom, like Hilltop, has been producing for the Saviors under the threat of violence, although Ezekiel has kept this arrangement secret from most residents of the Kingdom. Carol recuperates and eagerly prepares to abandon the community, but opts to stay in an isolated house nearby after bonding with Ezekiel."
    },
    {
        ep: 86,
        season: 7,
        season_ep: 3,
        title: "The Cell",
        director: "Alrick Riley ",
        air_date: "November 6, 2016",
        us_viewers: "11.72 millions",
        plot: "Daryl is locked in a cell at the Sanctuary, where Negan and Dwight constantly torture him in an effort to break him down to obedience. Negan sends Dwight on a mission to retrieve an escaped Savior, who says he would rather die than return to the Sanctuary. Dwight, therefore, ultimately mercy-kills the man. Daryl is given the opportunity to become a Savior but adamantly refuses."
    },
    {
        ep: 87,
        season: 7,
        season_ep: 4,
        title: "Service",
        director: "David Boyd ",
        air_date: "November 13, 2016",
        us_viewers: "11.40 millions",
        plot: "As the grieving survivors struggle to come to terms with life under Negan's rule, Negan and the Saviors arrive at Alexandria days ahead of schedule for their first offering and take most of Alexandria's furniture and medicine, and all their firearms. Feeling powerless, Rick informs the survivors that he is no longer in charge and they must learn to live by Negan's terms. Rosita finds an empty cartridge case and brings it to Eugene, tasking him to craft a live, usable cartridge for a gun she found in the woods."
    },
    {
        ep: 88,
        season: 7,
        season_ep: 5,
        title: "Go Getters",
        director: "Darnell Martin",
        air_date: "November 20, 2016",
        us_viewers: "11.00 millions",
        plot: "Carl accompanies Enid to Hilltop to visit Maggie, who is recovering there with Sasha. Gregory is furious with Maggie and Sasha for not fulfilling their deal to kill the Saviors, and demands they leave. However, after they help defend Hilltop from a walker attack, Jesus convinces Gregory to let them stay. While the Saviors raid Hilltop's supplies, Sasha asks Jesus if he can find where Negan lives, which he agrees to do. Jesus then sneaks onto one of the Saviors' trucks, where he finds Carl hiding."
    },
    {
        ep: 89,
        season: 7,
        season_ep: 6,
        title: "Swear ",
        director: "Michael E. Satrazemis",
        air_date: "November 27, 2016",
        us_viewers: "10.40 millions",
        plot: "Two weeks after the attack at the Saviors' satellite station outpost, Tara is separated from Heath when she falls off a bridge during a walker attack. She washes up on a beach, where she is revived by a girl named Cyndie. Tara follows Cyndie to her community, Oceanside, a secluded group consisting of heavily-armed women and children; any men in the group had been slaughtered by the Saviors. Cyndie helps Tara find her way back to Alexandria and makes her swear to never mention Oceanside to anyone."
    },
    {
        ep: 90,
        season_ep: 7,
        title: "Sing Me a Song",
        director: "Rosemary Rodriguez",
        air_date: "December 4, 2016",
        us_viewers: "10.48 millions",
        plot: "Upon nearing the Sanctuary, Jesus jumps off the Saviors' truck to recon the area, but Carl stays behind to kill Negan on his own. Dwight subdues Carl, but Negan is impressed by Carl's bravery and tours him around Sanctuary. Rosita and Eugene manage to craft a live cartridge, while Spencer scavenges for supplies in the woods. Upon returning to Alexandria, the trio finds Negan and the Saviors are there."
    },
    {
        ep: 91,
        season: 7,
        season_ep: 8,
        title: "Hearts Still Beating",
        director: "Michael E. Satrazemis",
        air_date: "December 11,, 2016",
        us_viewers: "10.58 millions",
        plot: "With help from Jesus and an anonymous source, Daryl finally escapes from the Sanctuary. During a discussion about Rick's leadership, Negan guts and kills Spencer, enraging Rosita, who shoots at Negan but hits Lucille instead. As punishment, Arat kills Olivia. Negan and the Saviors then leave with Eugene as hostage. After a talk with Michonne, Rick is finally motivated to fight the Saviors. Rick's group travels to Hilltop to reunite with Maggie, Sasha, and Enid; Daryl and Jesus emerge, and the group embraces."
    },
    {
        ep: 92,
        season: 7,
        season_ep: 9,
        title: "Rock in the Road",
        director: "Greg Nicotero",
        air_date: "February 12, 2017",
        us_viewers: "12.00 millions",
        plot: "After Hilltop rallies behind Rick's group in the fight against the Saviors, Jesus introduces the group to the Kingdom, where they meet 'King' Ezekiel and reunite with Morgan. Although Ezekiel hesitates to join the proposed alliance, he offers Daryl asylum at the Kingdom. In Alexandria, a group of Saviors raids the community in search of Daryl but leaves after they are unable to find him. Rick's group pursues Father Gabriel, who had taken the group's supplies and left clues leading to a dilapidated yard. Upon their arrival, the group is surrounded by the Scavengers."
    },
    {
        ep: 93,
        season: 7,
        season_ep: 10,
        title: "New Best Friend",
        director: "Jeffrey F. January",
        air_date: "February 19, 2017",
        us_viewers: "11.08 millions",
        plot: "Rick manages to convince the Scavengers to join Alexandria in the fight against the Saviors, but their leader, Jadis, demands Rick's group deliver them guns in exchange for their assistance. Richard plans to have Carol killed by the Saviors, believing that her death would motivate Ezekiel to fight. When Daryl learns of Richard's plans, he threatens to kill him should Carol be harmed in any way. After reuniting with Carol and lying to her about Glenn and Abraham's fates, Daryl travels to Hilltop to prepare for battle against the Saviors."
    },
    {
        ep: 94,
        season: 7,
        season_ep: 11,
        title: "Hostiles and Calamities",
        director: " Kari Skogland",
        air_date: "February 26, 2017",
        us_viewers: "12.79 millions",
        plot: "Eugene settles in quickly at the Sanctuary, as he's rewarded for his intelligence and willingness to submit to Negan's demands. Eugene bonds with two of Negan's wives. At their request, he makes poison capsules; however, he refuses to give them the capsules after learning of their intentions to kill Negan. Dwight discovers a note from Sherry that reveals she helped Daryl escape from the Sanctuary and then fled to parts unknown. Dwight frames Dr. Emmett Carson for Daryl and Sherry's disappearances, leading Negan to murder Carson by hurling him into a furnace."
    },
    {
        ep: 95,
        season: 7,
        season_ep: 12,
        title: "Say Yes",
        director: "Greg Nicotero",
        air_date: "March 5, 2017",
        us_viewers: "10.16 millions",
        plot: "Rick and Michonne embark on a hunt for guns to bring to the Scavengers and find an abandoned school carnival, where they acquire dozens of guns. They bring the guns back to the Scavengers, but Jadis is unsatisfied and demands more. Tara contemplates whether or not to tell Rick about Oceanside, knowing Rick's group's need for weapons and reinforcements. Frustrated with the delay, Rosita travels to Hilltop and meets with Sasha; they make a pact to kill Negan together."
    },
    {
        ep: 96,
        season: 7,
        season_ep: 13,
        title: "Bury Me Here",
        director: "Alrick Riley",
        air_date: "March 12, 2017",
        us_viewers: "10.68 millions",
        plot: "Ezekiel and his group meet the Saviors for the Kingdom's weekly tribute. After the Saviors notice a single cantaloupe is missing, Jared shoots Benjamin, who bleeds to death. Morgan, who finds the missing cantaloupe hidden in the street and learns that Richard sabotaged the drop-off in an effort to get himself killed and become a martyr for war, Morgan strangles Richard to death for causing Benjamin's murder. Morgan reveals the truth about Glenn, Abraham, Spencer, and Olivia to Carol, leading her to return to the Kingdom prepared to fight the Saviors alongside Ezekiel."
    },
    {
        ep: 97,
        season: 7,
        season_ep: 14,
        title: "The Other Side",
        director: "Michael E. Satrazemis",
        air_date: "March 19, 2017",
        us_viewers: "10.32 millions",
        plot: "The Saviors raid Hilltop unexpectedly, forcing Daryl and Maggie into hiding; the Saviors leave with Dr. Harlan Carson in tow to replace his now-deceased brother as their doctor. While sneaking into the Sanctuary on a secret mission, Sasha and Rosita encounter Eugene and urge him to escape, but he refuses. Sasha then locks Rosita out, telling her to go back to Alexandria because the group needs her. As Sasha breaks into the Sanctuary to kill Negan herself, Rosita flees and notices someone watching her."
    },
    {
        ep: 98,
        season: 7,
        season_ep: 15,
        title: "Something They Need",
        director: "Micael Slovis",
        air_date: "March 26, 2017",
        us_viewers: "10.54 millions",
        plot: "Tara leads the group to Oceanside in hopes of convincing that community to join the fight against the Saviors. Natania refuses to have her people fight but ultimately capitulates to Rick's group's demands to take their guns. After imprisoning Sasha, Negan reveals he is aware of Rick's plans to fight him and encourages Sasha to join him. She confides in Eugene and asks him for a weapon, then a way to kill herself; in response, he gives her one of the poison capsules he had made. Upon their return to Alexandria, Rick's group is greeted by Rosita, who after running into Dwight while fleeing the Sanctuary, reveals Dwight's intentions of helping take down Negan."
    },
    {
        ep: 99,
        season: 7,
        season_ep: 16,
        title: "Day of the Rest of Your Life",
        director: "Greg Nicotero",
        air_date: "April 2, 2017",
        us_viewers: "11.31 millions",
        plot: "Negan and the Saviors travel to Alexandria with Sasha in a coffin as a gimmick to confront Rick. On the way, Sasha commits suicide with the poison capsule Eugene had given her. At Alexandria, the Scavengers double-cross Rick's group, revealing they've been dealing with Negan all along. After a standoff, a gun fight ensues, with the unexpected arrival of Kingdom and Hilltop fighters forcing Negan and the Saviors and the Scavengers to retreat. Alexandria, the Kingdom, and Hilltop are hit badly, but are prepared for all-out war against their enemies, while the undead Sasha is put down by Maggie and Jesus."
    },
    {
        ep: 100,
        season: 8,
        season_ep: 1,
        title: "Mercy",
        director: "Greg Nicotero",
        air_date: "October 22, 2017",
        us_viewers: "11.44 millions",
        plot: "Rick, Maggie, and Ezekiel rally their communities together to take down Negan. Gregory attempts to have the Hilltop residents side with Negan, but they all firmly stand behind Maggie. The group attacks the Sanctuary, taking down its fences and flooding the compound with walkers. With the Sanctuary overrun, everyone leaves except Gabriel, who reluctantly stays to save Gregory, but is left behind when Gregory abandons him. Surrounded by walkers, Gabriel hides in a trailer, where he is trapped inside with Negan."
    },
    {
        ep: 101,
        season: 8,
        season_ep: 2,
        title: "The Damned",
        director: "Rosemary Rodrigues",
        air_date: "October 29, 2017",
        us_viewers: "8.92 millions",
        plot: "Rick's forces split into separate parties to attack several of the Saviors' outposts, during which many members of the group are killed; Eric is critically injured and rushed away by Aaron. Jesus stops Tara and Morgan from executing a group of surrendered Saviors. While clearing an outpost with Daryl, Rick is confronted and held at gunpoint by Morales, a survivor he met in the initial Atlanta camp, who is now with the Saviors."
    },
    {
        ep: 102,
        season: 8,
        season_ep: 3,
        title: "Monsters",
        director: "Greg Nicotero ",
        air_date: "November 5, 2017",
        us_viewers: "8.52 millions",
        plot: "Daryl finds Morales threatening Rick and kills him; the duo then pursue a group of Saviors who are transporting weapons to another outpost. Gregory returns to Hilltop, and after a heated argument, Maggie ultimately allows him back in the community. Eric dies from his injuries, leaving Aaron distraught. Despite Tara and Morgan's objections, Jesus leads the group of surrendered Saviors to Hilltop. Ezekiel's group attacks another Savior compound, during which Kingdom fighters are annihilated while protecting Ezekiel."
    },
    {
        ep: 103,
        season: 8,
        season_ep: 4,
        title: "Some Guy",
        director: "Dan Liu ",
        air_date: "November 12, 2017",
        us_viewers: "8.69 millions",
        plot: "Ezekiel's group is overwhelmed by the Saviors, who kill all of them except for Ezekiel himself and Jerry. Carol clears the inside of the compound, killing all but two Saviors, who almost escape but are eventually caught by Rick and Daryl. En route to the Kingdom, Ezekiel, Jerry, and Carol are surrounded by walkers, but Shiva sacrifices herself to save them. The trio returns to the Kingdom, where Ezekiel's confidence in himself as a leader has diminished."
    },
    {
        ep: 104,
        season: 8,
        season_ep: 5,
        title: "The Big Scary U",
        director: "Michael E. Satrazemis",
        air_date: "November 19, 2017",
        us_viewers: "7.85 millions",
        plot: "After confessing their sins to each other, Gabriel and Negan manage to escape from the trailer. Simon and the other lieutenants grow suspicious of each other, knowing that Rick’s forces must have inside information. The workers in the Sanctuary become increasingly frustrated with their living conditions, and a riot nearly ensues, until Negan returns and restores order. Gabriel is locked in a cell, where Eugene discovers him sick and suffering. Meanwhile, Rick and Daryl argue over how to take out the Saviors, leading Daryl to abandon Rick."
    },
    {
        ep: 105,
        season: 8,
        season_ep: 6,
        title: "The King, the Widow, and Rick ",
        director: "John Polson",
        air_date: "November 26, 2017",
        us_viewers: "8.28 millions",
        plot: "Rick visits Jadis in hopes of convincing her to turn against Negan; Jadis refuses, and locks Rick in a shipping container. Carl encounters Siddiq in the woods and recruits him to Alexandria. Daryl and Tara plot to deviate from Rick’s plans by destroying the Sanctuary. Ezekiel isolates himself at the Kingdom, where Carol tries to encourage him to be the leader his people need. Maggie has the group of captured Saviors placed in a holding area and forces Gregory to join them as punishment for betraying Hilltop."
    },
    {
        ep: 106,
        season: 8,
        season_ep: 7,
        title: "Time for After",
        director: "Lary Teng",
        air_date: "December 3, 2017",
        us_viewers: "7.47 millions",
        plot: "After learning of Dwight's association with Rick's group, Eugene affirms his loyalty to Negan and outlines a plan to get rid of the walkers surrounding the Sanctuary. With help from Morgan and Tara, Daryl drives a truck through the Sanctuary’s walls, flooding its interior with walkers, killing many Saviors. Rick finally convinces Jadis and the Scavengers to align with him, and they plan to force the Saviors to surrender. However, when they arrive at the Sanctuary, Rick is horrified to see the breached walls and no sign of the walker herd."
    },
    {
        ep: 107,
        season: 8,
        season_ep: 8,
        title: "How It's gotta Be",
        director: "Michael E. Satrazemis",
        air_date: "December 10,, 2017",
        us_viewers: "7.89 millions",
        plot: "Eugene's plan allows the Saviors to escape the Sanctuary, and separately, the Saviors waylay the Alexandria, Hilltop, and Kingdom forces. The Scavengers abandon Rick, after which he returns to Alexandria. Aaron and Enid are ambushed by Oceanside soldiers, leading Enid to kill Natania. Ezekiel ensures that the Kingdom residents are able to escape before locking himself in the community with the Saviors. Eugene aids Gabriel and Doctor Carson in escaping the Sanctuary in order to ease his conscience. Negan attacks Alexandria, but Carl devises a plan to allow the Alexandria residents to escape into the sewers. Carl reveals he was bitten by a walker while escorting Siddiq to Alexandria."
    },
    {
        ep: 108,
        season: 8,
        season_ep: 9,
        title: "Horror",
        director: "Greg Nicotero",
        air_date: "February 25, 2018",
        us_viewers: "8.28 millions",
        plot: "Realizing his time alive is limited, Carl writes several letters to his loved ones. After the Saviors leave Alexandria, the survivors make for the Hilltop while Rick and Michonne stay behind to say their final goodbyes to a dying Carl, who pleads with Rick to build a better future alongside the Saviors. Morgan and Carol launch a rescue mission for Ezekiel and successfully retake the Kingdom from the invading Saviors; their lieutenant, Gavin, is killed by Benjamin's vengeful younger brother, Henry."
    },
    {
        ep: 109,
        season: 8,
        season_ep: 10,
        title: "The Lost and the Plunderers",
        director: "David Boyd",
        air_date: "March 4, 2018",
        us_viewers: "6.82 millions",
        plot: "Aaron and Enid try to convince Oceanside to join the fight against the Saviors, but they refuse; Enid returns to Hilltop while Aaron opts to stay at Oceanside until he can convince them to join. Upon learning of the Scavenger’s siding with Rick, Negan orders Simon to kill only one of Jadis’ people. Rick and Michonne travel to the junkyard to try to regain help from the Scavengers, but they are too late; Simon had ordered the Saviors to slaughter the entire group; Jadis, who managed to escape lures her reanimated comrades into a waste shredder to protect herself."
    },
    {
        ep: 110,
        season: 8,
        season_ep: 11,
        title: "Dead or Alive or",
        director: " Michael E. Satrazemis",
        air_date: "March 11, 2018",
        us_viewers: "6.60 millions",
        plot: "The Saviors hunt the surviving Alexandrians as they make their way to the Hilltop; Dwight affirms his loyalty to Rick's group as he distracts the Saviors and helps lead the group to safety. Eugene leads a crew of Saviors in crafting bullets at a new outpost while Negan plans to taint the Saviors' weapons with walker blood, in order to make the others 'turn' instead of killing them. Doctor Carson tries to help a feverish and nearly blind Gabriel to safety, but the Saviors eventually catch up, killing Carson and recapturing Gabriel."
    },
    {
        ep: 111,
        season: 8,
        season_ep: 12,
        title: "The Key",
        director: "Greg Nicotero",
        air_date: "March 18, 2018",
        us_viewers: "6.66 millions",
        plot: "Maggie, Enid, Michonne and Rosita encounter a seemingly benevolent woman named Georgie, who gives them food and documents in exchange for phonograph records; Georgie claims the documents to be 'a key to the future'. Negan leads the Saviors towards the Hilltop to send a warning via their newly tainted weapons; Rick pursues the Saviors and chases Negan into a building. Negan eventually escapes, only to be captured at gunpoint by Jadis. Unable to find Negan, Simon instructs the Saviors to attack the Hilltop and 'expunge' the community for good."
    },
    {
        ep: 112,
        season: 8,
        season_ep: 13,
        title: "Do Not Send Us Astray",
        director: "Jeffrey F. January",
        air_date: "March 25, 2018",
        us_viewers: "6.77 millions",
        plot: "The Saviors attack the Hilltop with their tainted weapons, leading to a battle in which both sides suffer heavy casualties. Tara is non-fatally shot by Dwight in an effort to prevent Simon from killing her. Overnight, the injured die from their tainted wounds and attack the sleeping survivors after reanimating. Henry tries to take revenge for the murder of his brother, leading to the breakout of the Savior prisoners and the disappearance of Henry. Having seen the Saviors' callous attitude for themselves, Alden and several other Saviors choose to remain at the Hilltop rather than return to the Saviors."
    },
    {
        ep: 113,
        season: 8,
        season_ep: 14,
        title: "Still Gotta Mean Something",
        director: "Michael E. Satrazemis",
        air_date: "April 1, 2017",
        us_viewers: "6.30 millions",
        plot: "Carol and Morgan search for Henry while Rick hunts the escaped Savior prisoners; Morgan abandons Carol and joins Rick, and together, they find and kill the prisoners. Jadis tortures Negan until he informs her that he had nothing to do with Simon massacring her people; a helicopter flies nearby, but Jadis fails to catch its attention. Daryl and Rosita plot to stop Eugene from crafting ammunition for the Saviors. Carol finds Henry alive in the woods and they return to Hilltop. Upon Rick and Morgan's return, Michonne encourages Rick to read Carl's letter to him."
    },
    {
        ep: 114,
        season: 8,
        season_ep: 15,
        title: "Worth",
        director: "Micael Slovis",
        air_date: "April 8, 2018",
        us_viewers: "6.67 millions",
        plot: "Negan returns to the Sanctuary and regains control of the Saviors. Dwight secretly prepares notes to Rick about Negan's plans, and later sends Gregory to deliver the notes. Daryl and Rosita capture Eugene from his outpost, but he manages to escape and continues pushing his workers to craft bullets. Dwight lures Simon into a meeting where Negan accosts him for going against his orders with the Scavengers, and kills him in a fist fight. Negan then reveals that Laura informed him of Dwight's siding with Rick, and that his planning was a ruse upon knowing of Dwight's disloyalty. Negan is contacted by Michonne - who reads Carl's letter to him at the request of making peace; Negan remains intent on killing Rick and his allies once and for all."
    },
    {
        ep: 115,
        season: 8,
        season_ep: 16,
        title: "Wrath",
        director: "Greg Nicotero",
        air_date: "April 15, 2018",
        us_viewers: "7.92 millions",
        plot: "Rick's group follows the false plans given to them by Gregory, leading them into a trap. As the Saviors fire, their weapons backfire due to their ammo being sabotaged by Eugene. The surviving Saviors surrender, while Rick chases down Negan; the two brawl and Rick manages to slice Negan's neck, but immediately has Siddiq tend to the wound, knowing that Carl wanted Negan to survive. Meanwhile, an attack at the Hilltop is stopped with help from Aaron and the Oceanside soldiers. The survivors regroup and rebuild their communities, but Rick's decision to spare Negan angers Maggie and she vows to take action against Rick in the future."
    },
    {
        ep: 116,
        season: 9,
        season_ep: 1,
        title: "A New Beginning",
        director: "Greg Nicotero",
        air_date: "October 7, 2018",
        us_viewers: "6.1 millions",
        plot: "A year and a half has passed since the end of the War. In a rebuilt and thriving Alexandria, Rick, now with shorter and grayer hair, happily watches Michonne paint with Judith. They go outside the walls to see a flock of birds in the field.\n\t\tAt the Sanctuary, the walker-filled yard has been replaced with crops. Rosita helps Eugene with an experiment while Laura reports something to Daryl, who's now in charge. He goes to the yard and notices Arat and Justin trying to use a walker as a scarecrow, like they used to do, under the pretense to scare off the crows, but Daryl puts it down.\n\t\tOn the road, Tara is scouting when Eugene radios her, informing her that Daryl will be meeting the rest of the group so they can go to Washington D.C. to search for farming materials.\n\t\tElsewhere, Jesus and Aaron kill some walkers. Aaron asks Jesus if he can teach him some of his skills, to which he agrees to teach him in a class at the Hilltop.\n\t\tA while later, Daryl rides off to meet Rick, Michonne, Carol, Maggie and the others in downtown Washington D.C.\n\t\tRick and the group break into the Smithsonian to search for a covered wagon and farming equipment. As they walk over a fragile glass floor, they notice a group of walkers under it. Suddenly, a walker drops from a balcony onto it, cracking the pane, before Daryl puts it down.\n\t\tRick tells everyone to be safe and the group separates.\n\t\tIn the basement, Siddiq gets attacked by a walker whose head is full of spiders. He barely manages to kill it and admits to Rick he is more scared of the spiders, which Enid laughs at.\n\t\tIn a hallway, Gabriel drives a machete into a walker's head and leaves it hanging on a human evolution display. He and Anne smile at the irony of this.\n\t\tBy the stairs, Cyndie sees an old canoe and remembers an experience with her brother. Daryl relates to her and the two of them lift the canoe.\n\t\tBack in the basement, Rick's group finds packages of seeds and beans. Rick thanks Anne for the lead, while she tells Gabriel that she knew of this because she once brought her class back when she was teaching.\n\t\tWhile returning to the stairs, Maggie tells Michonne and Carol that Gregory called for an election at the Hilltop and lost, making Maggie the rightful leader. Michonne stops and looks at a display of politics and how to unite different colonies.\n\t\tShortly after, the whole group reunites and gingerly uses ropes to drag an old covered wagon down the stairs and over the glass floor. The glass finally gives way and Ezekiel falls through it, dangling by the rope. Before the walkers can bite him, Daryl shoots at one and Rick and the others finally pull him to safety. Carol joyfully kisses him to celebrate.\n\t\tThe group leaves D.C. and prepare to head back to their own communities.\n\t\tOn the road, Alden talks to Ken and Marco about blacksmithing at the Hilltop. In the back, Ezekiel proposes to Carol. She tells him to put the ring away and reminds him she doesn't want to be asked yet, especially on a horse. Ezekiel smiles and tells her he still loves her.\n\t\tRosita and Daryl catch up with everyone to inform them that the main bridge is out due to a storm. Rick tells Tara, Gabriel, Aaron and Anne to head back to Alexandria and the rest will go to an alternate route and spend the night at the Sanctuary.\n\t\tIn the woods, the wagon gets caught in the mud as walkers appear from the bushes. It finally budges and everyone rushes to gather the supplies until the walkers overwhelm them and they're forced to leave. Ken runs back to free his horses but is bitten in the arm by a walker and then kicked in the ribs by the horse.\n\t\tSiddiq and Enid try to save him but Ken succumbs to blood loss and dies from his injuries. A saddened Maggie sobs by his side before putting him down.\n\t\tAt night, in Hilltop, Maggie breaks the news of Ken's death to his parents, Tammy and Earl. An emotional Tammy scolds Maggie for getting her son killed, reminding her that she voted for her in the election. Earl tries to calm her down but Tammy doesn't listen and criticizes Maggie's decision to supply the Saviors. A shocked Maggie offers to help with the funeral but Tammy declines and denies her from being present.\n\t\tLater, the Hilltop gathers for Ken's funeral. Alden sings as Gregory gives a eulogy. Maggie holds her son, Hershel, and watches from the balcony.\n\t\tAt the Sanctuary, Rick and the group arrive to deliver supplies. Michonne points out graffiti that proclaims, 'We are still Negan', and Daryl demands Justin to clean it up. Rick promises to the Saviors that he’ll continue to support them so they can get back on their feet. Everyone applauds him and treat him like a celebrity.\n\t\tDaryl pulls Rick aside to tell him that he no longer wants to lead the place because he doesn't belong there and since it's factory, it can't produce crops. He suggests he return to Hilltop to check on Maggie and Hershel, but Rick argues he should return to Alexandria. 'Things have changed,' Rick says, but Daryl claims it's because Rick changed them, before going out.\n\t\tOutside, Carol follows Daryl and offers to take over the Sanctuary for him. She tells him about Zeke's proposal and says she wants to take her time. Daryl's surprised and asks if he should stay with her. She declines and rests her head on his shoulder.\n\t\tIn their trailer, Tammy mourns her son while Gregory gets Earl drunk and suggests Maggie doesn’t have to be the leader anymore.\n\t\tIn the Sanctuary, Rick and Michonne settle into bed and Michonne asks if they did the right thing by letting Negan live. However, Rick stands by his choice. She then proposes that they create a charter between the communities: laying out guidelines and punishment. Rick agrees and tells her how lucky he is to have found her. They kiss and make love.\n\t\tBack at the Hilltop, Maggie takes Hershel out for a stroll and runs into Gregory, who tells her someone may have defaced Glenn's grave. Upset, she rushes towards the grave and is attacked by a hooded stranger, who also knocks over Hershel’s stroller. Enid intervenes but gets pushed to the ground hard and is knocked out. Alden and Cyndie grab the assailant and Maggie rips off his hood to reveal a drunken Earl.\n\t\tMaggie rushes over to Gregory's place and accuses him of trying to get her killed. He angrily reminds her that he built this place and tries to stab her with a knife, but she overpowers him and holds it to his neck.\n\t\tThe next day, Carol tells Ezekiel she's staying at Sanctuary and instructs Jerry to take care of him as they head off.\n\t\tDaryl, Michonne and Rick arrive at the Hilltop to find the workers building gallows. Later, Rick asks Maggie to visit Alexandria but she says she can't because Negan's there. He asks for her help in fixing the bridge, which includes providing supplies to the Sanctuary. She says she'll only agree if the Saviors agree to provide the labor and fuel. Rick says he can’t and he's obliged to help, but Maggie disagrees and reminds her that he never ended up following her as he promised, but now he should.\n\t\tIn the night, the residents gather around the gallows as Maggie explains to her people that the punishment fits the crime. She looks on at Gregory, who has a noose around his neck and is sitting on a horse. Gregory pleads for someone to stop this, but no one moves. A couple of kids show up and Michonne yells for Maggie to stop but it's too late as Daryl smacks the horse and it rides off, leaving Gregory to hang to death to everyone's shock.\n\t\tMaggie tells her people that she wants this to be the last time they do something like this. A shocked Rick and Michonne look on as Maggie then orders Daryl to cut off the noose."
    },
    {
        ep: 117,
        season: 9,
        season_ep: 2,
        title: "The Bridge",
        director: "Daisy Mayer",
        air_date: "October 14, 2018",
        us_viewers: "",
        plot: ""
    },
    {
        ep: 118,
        season: 9,
        season_ep: 3,
        title: "Warning Signs",
        director: "Dan Liu",
        air_date: "October 21, 2018",
        us_viewers: "",
        plot: ""
    },
    {
        ep: 119,
        season: 9,
        season_ep: 4,
        title: "The Obligated",
        director: "Rosemary Rodriguez",
        air_date: "October 28, 2018",
        us_viewers: "",
        plot: ""
    },
    {
        ep: 120,
        season: 9,
        season_ep: 5,
        title: "What Comes After",
        director: "Greg Nicotero",
        air_date: "November 4, 2018",
        us_viewers: "",
        plot: ""
    },
    {
        ep: 121,
        season: 9,
        season_ep: 6,
        title: "Who Are You Now",
        director: "Daisy Mayer",
        air_date: "November 11, 2018",
        us_viewers: "",
        plot: ""
    },
    {
        ep: 122,
        season: 9,
        season_ep: 7,
        title: "Stradivarius",
        director: "Michael Cudlitz",
        air_date: "November 18, 2018",
        us_viewers: "",
        plot: ""
    },
    {
        ep: 123,
        season: 9,
        season_ep: 8,
        title: "Evolution",
        director: "Michael E. Satrazemis",
        air_date: "November 25, 2018",
        us_viewers: "",
        plot: ""
    },
];

module.exports = { episodes };
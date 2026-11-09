// Content imported from the original handoff; dates and fictional/composite labels are retained.
export const PEOPLE = [
  {
    "id": "cc",
    "h": "Contact centre",
    "ua": "Контакт-центр",
    "who": "Dariia",
    "role": "Operator, working from home in Vinnytsia",
    "bio": "29. Her partner, Vlad, serves in an artillery unit. She has worked on the line since 2023.",
    "tough": "Calls she can’t fix, and news she isn’t allowed to give. Her phone face-down on the desk, waiting for Vlad.",
    "spark": "The team chat, the regulars who say thank you, and the five-star review with her name in it.",
    "p": "The most common question is “Де моя посилка?” Some operators work remotely, so the line can stay open whatever happens to one building.",
    "day": [
      {
        "t": "06:50",
        "k": "life",
        "txt": "First thing, before the kettle: Vlad’s overnight message. «Живий. Добраніч.» (“Alive. Good night.”) He was on night duty. She sends back a heart and gets up."
      },
      {
        "t": "08:00",
        "txt": "Headset on at the kitchen table. The first call arrives before her tea has cooled: «Де моя посилка?» It will be the most common sentence of the day."
      },
      {
        "t": "08:30",
        "k": "spark",
        "txt": "Morning roll call in the team chat: everyone posts an emoji to say they’re online and safe. Sasha posts his cat asleep on his keyboard, again."
      },
      {
        "t": "09:40",
        "k": "hot",
        "txt": "A man asks whether the “temporarily closed” status at his brother’s frontline branch means the town was hit. Dariia can only say the branch closed for safety and will reopen when it’s safe; she can’t speculate about attacks. He thanks her anyway.",
        "say": [
          "Відділення закрите з міркувань безпеки.",
          "The branch is closed for safety reasons."
        ]
      },
      {
        "t": "11:15",
        "txt": "A woman in her eighties wants to send a parcel to her granddaughter in Germany and doesn’t use the app. Dariia explains, slowly and twice, what to bring to the branch and why customs needs a list of contents."
      },
      {
        "t": "13:00",
        "k": "life",
        "txt": "Scheduled power cut. The laptop runs on a power bank and the router on a small battery. Lunch is cold varenyky eaten standing up."
      },
      {
        "t": "13:30",
        "txt": "Last night’s strike burned a depot. A small seller asks what happens to his three orders. Dariia explains compensation at declared value and how to file the claim."
      },
      {
        "t": "15:00",
        "k": "hot",
        "txt": "Air-raid alert in Vinnytsia. She carries the laptop into the corridor, following the “rule of two walls” many Ukrainians use at home, and keeps taking calls."
      },
      {
        "t": "16:40",
        "k": "hot",
        "txt": "A caller shouts at her about a delay, as if she had caused the war. Her supervisor offers a two-minute break. The team chat fills with «Тримайся» before she has even typed what happened."
      },
      {
        "t": "17:20",
        "k": "hot",
        "txt": "A woman is waiting for a parcel from her late husband’s unit: his belongings. She doesn’t need anything changed. She wants to know it is safe. Dariia finds the last scan, reads it out, and stays on the line longer than the script allows."
      },
      {
        "t": "19:00",
        "k": "spark",
        "txt": "Log-off. The team lead posts a customer review that names her: “Dariia explained everything to my mother like family.” Thirty hearts in a minute. Vlad is online for a moment; she sends him a screenshot."
      }
    ]
  },
  {
    "id": "tm",
    "h": "Threat monitoring",
    "ua": "Моніторинг безпеки",
    "who": "Ihor",
    "role": "Machine-learning engineer, Kyiv",
    "bio": "34. Lives on the 14th floor with his wife and their four-year-old, Zlata.",
    "tough": "Knowing that a missed person in a branch matters more than any false alarm. And the lift, which doesn’t work in blackouts.",
    "spark": "“Mr Cardboard”, the team’s favourite bug. Zlata at the kindergarten gate.",
    "p": "Watches alerts and local threats for every site and can close a branch before the siren. An AI tool counts how many customers are inside, so staff know how many people to get to shelter.",
    "day": [
      {
        "t": "06:40",
        "k": "life",
        "txt": "Blackout. He carries Zlata’s scooter down fourteen flights while she counts the floors out loud, mostly correctly."
      },
      {
        "t": "07:30",
        "txt": "Dashboards: official alert feeds by region, every site’s open or closed status, and the live count of people inside branches from the company’s AI counter."
      },
      {
        "t": "09:10",
        "k": "spark",
        "txt": "Yesterday’s errors: a cardboard promotional stand was counted as a customer for six hours. The team names it «Пан Картон» (“Mr Cardboard”). Ihor adds labelled images and retrains the model, and someone puts a sticker of Mr Cardboard on the team kettle."
      },
      {
        "t": "11:45",
        "k": "hot",
        "txt": "A local threat in a frontline district with no official siren. The system recommends closing three branches; the duty officer confirms. In the app their status flips to “temporarily closed”."
      },
      {
        "t": "12:30",
        "k": "hot",
        "txt": "Reviewing missed detections: a customer standing behind a pillar wasn’t counted. A false alarm costs a few minutes; a miss could cost a life. This is the part of the job he takes home."
      },
      {
        "t": "14:00",
        "txt": "Analysis for the logistics team: how long sites stay closed per alert, region by region, so delivery estimates in the app can be honest about delays."
      },
      {
        "t": "16:30",
        "txt": "A privacy review. The company tested facial recognition at branch doors in 2023 and shelved it over privacy concerns. Ihor’s model counts people; it does not recognise them."
      },
      {
        "t": "18:00",
        "k": "spark",
        "txt": "Kindergarten pick-up. The kindergarten has its own shelter; Zlata shows him her drawing of “the siren”, which has a face and looks friendly."
      },
      {
        "t": "21:15",
        "k": "hot",
        "txt": "On call. A night alert across the Kyiv region. Since September 2026 every site pauses on any alert. He watches the hubs turn grey one after another on his laptop in the dark kitchen, and waits for the all-clear."
      }
    ]
  },
  {
    "id": "soc",
    "h": "Cyber defence",
    "ua": "Кібербезпека",
    "who": "Oleh",
    "role": "Security analyst, Nova Digital, Lviv",
    "bio": "31. Medically discharged after frontline service in offensive operations. Uses voice control and a screen magnifier since his injury.",
    "tough": "Phantom pain on cold mornings. Alerts that pull him back to places he’d rather not be. Software that doesn’t understand him.",
    "spark": "Catching scammers fast. The Wall of Shame. Mentoring someone who is where he was a year ago.",
    "p": "The security operations centre at Nova Digital, the group’s IT company. In 2022 the IT director said attacks were five to six times the peacetime level.",
    "day": [
      {
        "t": "07:00",
        "k": "life",
        "txt": "Rehab exercises before work. His manager built his schedule around physiotherapy three mornings a week, no questions asked."
      },
      {
        "t": "08:05",
        "k": "hot",
        "txt": "A fresh ticket: customers are forwarding a text message. «Вашу посилку затримано через неправильний індекс.» (“Your parcel has been held because of a wrong postcode.”) A [[смішинг]] campaign has started."
      },
      {
        "t": "08:40",
        "txt": "He collects samples. The link leads to a look-alike site registered yesterday that copies the app’s design and asks for card details to “pay a redelivery fee”."
      },
      {
        "t": "10:00",
        "txt": "Takedown requests to the domain registrar and hosting provider; the domain goes onto block lists; indicators are shared with partners."
      },
      {
        "t": "11:30",
        "txt": "The communications team posts a warning on the company’s official channels. Key point for customers: check status only in the official app.",
        "say": [
          "Не переходьте за посиланнями з SMS.",
          "Don’t follow links in text messages."
        ]
      },
      {
        "t": "12:30",
        "k": "spark",
        "txt": "Lunch. Today’s fake page goes up on the team’s Wall of Shame, a printout gallery of the worst phishing sites. This one misspelled the company’s name twice."
      },
      {
        "t": "14:00",
        "k": "hot",
        "txt": "Second wave: new domain, new wording, same playbook. Brand impersonation is not a breach of the company’s own systems, but customers lose money all the same."
      },
      {
        "t": "15:30",
        "k": "spark",
        "txt": "A video call with a sorter just back from the army, whom People Support asked him to mentor. They talk about sleep, paperwork and which jokes to make at work. Mostly they laugh."
      },
      {
        "t": "16:00",
        "k": "life",
        "txt": "Writing the incident report by voice. His voice-control software mishears “domain” as “demon”. He decides to leave it in the draft for a minute."
      },
      {
        "t": "18:30",
        "k": "life",
        "txt": "An adaptive sports session with other veterans. Nobody there asks how he’s doing; they just pass him the ball."
      }
    ]
  },
  {
    "id": "en",
    "h": "Energy team",
    "ua": "Енергетики",
    "who": "Maryna",
    "role": "Energy engineer, Nova Energy, Kharkiv",
    "bio": "38. Mother of twins, Artem and Sofiia, who are eleven and study partly online.",
    "tough": "The grid is attacked again before it has been repaired. Diesel prices. Leaving the twins with a power bank and their grandmother.",
    "spark": "The moment the lights come on in a village. A bag of apples. A question from her son.",
    "p": "Generators at branches and hubs, a 1 MW solar plant on a terminal roof, gas-fired generators at hubs. The group even started selling fuel to other businesses.",
    "day": [
      {
        "t": "05:50",
        "k": "hot",
        "txt": "Overnight strikes on a substation leave a cluster of villages outside Kharkiv without power. Repairs could take days."
      },
      {
        "t": "06:30",
        "k": "life",
        "txt": "The twins’ online lessons start at eight. She charges both tablets from the car, leaves a power bank with their grandmother, and kisses two heads that pretend to be asleep."
      },
      {
        "t": "07:00",
        "txt": "Morning fuel reports: which branches have generators, how many hours of diesel each has left, who needs a top-up first."
      },
      {
        "t": "09:30",
        "k": "hot",
        "txt": "Maryna’s crew brings a generator, fuel and a satellite internet terminal to the branch in one village. By eleven it is the first place with light, heat and a signal for kilometres around: a [[Пункт незламності]]."
      },
      {
        "t": "12:00",
        "k": "spark",
        "txt": "Neighbours arrive with phones, power banks and a baby’s nebuliser. An old man presses a bag of apples from his garden into her hands and won’t take them back."
      },
      {
        "t": "13:30",
        "k": "life",
        "txt": "Driving back she passes a fresh crater by the road. She pulls over to call the twins. Sofiia is annoyed to be interrupted mid-maths."
      },
      {
        "t": "15:00",
        "txt": "At the hub, the rooftop solar plant and a gas-fired generator keep the sorting lines running while the grid is down. The lines don’t stop when the city does."
      },
      {
        "t": "17:00",
        "k": "hot",
        "txt": "A supplier calls: diesel is up again. She reworks the month’s budget, knowing the strikes won’t follow it."
      },
      {
        "t": "21:00",
        "k": "spark",
        "txt": "Home. The twins finished their homework by torchlight. Artem asks if she “switched the lights on for the village”. She says yes. It’s close enough."
      }
    ]
  },
  {
    "id": "ps",
    "h": "People support",
    "ua": "Штаб SOS",
    "who": "Olha",
    "role": "Employee support specialist, Dnipro",
    "bio": "45. Moved from payroll to the support line in 2023, the year her brother was killed at the front.",
    "tough": "Carrying other people’s grief all day, on top of her own. Knowing some calls never really end.",
    "spark": "People who come back. A wedding photo. The team’s own Friday hour.",
    "p": "An internal hotline for employees and families; by 2024 one in three employees had used it. Jobs are held for colleagues who joined the army, and the children of employees who were killed are supported until adulthood.",
    "day": [
      {
        "t": "08:30",
        "k": "life",
        "txt": "On the bus she reads the messages that came in overnight. Night is when people write the things they can’t say in the day."
      },
      {
        "t": "09:00",
        "txt": "A slower rhythm than the contact centre. Fewer calls; some last more than an hour."
      },
      {
        "t": "09:30",
        "k": "hot",
        "txt": "A sorter from the Kharkiv terminal hit in July can’t sleep. Olha books a session with one of the outside psychologists the company works with.",
        "say": [
          "Ви не самі.",
          "You’re not alone."
        ]
      },
      {
        "t": "11:00",
        "txt": "The mother of a mobilised courier asks whether her son’s job is still held and the monthly support still paid. Yes, and yes."
      },
      {
        "t": "12:00",
        "k": "spark",
        "txt": "The support team’s own hour with a psychologist. The helpers get help too; it was Olha who asked for it."
      },
      {
        "t": "13:00",
        "k": "hot",
        "txt": "A colleague’s flat was damaged in last night’s attack. Olha starts an emergency aid application while he is still sweeping up glass."
      },
      {
        "t": "15:30",
        "k": "hot",
        "txt": "Paperwork for the daughter of a driver who was killed. Olha notes the girl’s birthday so that a present arrives on the day, every year, until she is grown."
      },
      {
        "t": "16:45",
        "k": "spark",
        "txt": "A message from a sorter she supported last spring, after the Korotych strike: a photo from his wedding. She prints it for the noticeboard."
      },
      {
        "t": "17:00",
        "txt": "A veteran is coming back after demobilisation. Olha arranges an adapted role and a mentor. The mentor volunteered: Oleh, from the security team."
      },
      {
        "t": "18:30",
        "k": "life",
        "txt": "She walks home past the memorial wall of portraits near her flat and stops, as she does every evening, at her brother’s."
      }
    ]
  },
  {
    "id": "hu",
    "h": "Humanitarian department",
    "ua": "Гуманітарна Нова пошта",
    "who": "Bohdan",
    "role": "Humanitarian logistics coordinator, Lviv",
    "bio": "27. In 2022 he drove volunteer vans to Kharkiv; he joined the company when he realised it moved in a day what his van moved in a month.",
    "tough": "It is never enough. People who try to game a free programme. Boxes he knows by name that don’t arrive.",
    "spark": "A partner in Poland he has never met. Forty pairs of socks.",
    "p": "Free delivery for registered volunteers and charities. More than 7 million free shipments since February 2022, much of it to frontline units.",
    "day": [
      {
        "t": "07:45",
        "k": "life",
        "txt": "He cycles to the office past the station where he used to load vans in 2022."
      },
      {
        "t": "08:30",
        "txt": "New applications from charities. He checks each organisation’s registration before issuing free-shipping codes. One “foundation” was registered last week and lists a phone shop’s address; he flags it."
      },
      {
        "t": "10:00",
        "txt": "A foundation is sending 14 boxes of hospital supplies to Kharkiv. He follows every scan; one box is a scan behind the others, so he calls the depot."
      },
      {
        "t": "12:30",
        "k": "spark",
        "txt": "Inbound: pallets of medical supplies collected by a partner group in Poland, moving through the company’s Polish network and customs into Ukraine. His contact there, Agnieszka, writes in Polish; he answers in Ukrainian; they have never met and trade memes daily."
      },
      {
        "t": "15:00",
        "txt": "A [[волонтер]] drops off parts for a brigade’s drone workshop at a Lviv branch. Shipments for military units are part of the free programme; Bohdan’s team logs them as such."
      },
      {
        "t": "16:30",
        "k": "spark",
        "txt": "A grandmother brings forty pairs of knitted socks to a branch “for the boys” but belongs to no foundation. Bohdan finds a registered one that will take them, and the socks go out tonight."
      },
      {
        "t": "17:45",
        "k": "hot",
        "txt": "A strike damages a branch holding two charity boxes. Redirect, confirm, compensate. One of them was the hospital order he’d been watching all day."
      },
      {
        "t": "18:30",
        "txt": "In the first half of 2026 the programme moved 1.1 million shipments, about 27,400 tonnes. He has never seen that number as a pile, only as boxes."
      }
    ]
  },
  {
    "id": "np",
    "h": "NovaPay",
    "ua": "НоваПей",
    "who": "Kateryna",
    "role": "Reliability engineer, NovaPay, Kyiv",
    "bio": "33. Runs a Saturday running club with colleagues that raises money for the army, one kilometre at a time.",
    "tough": "The pager. The feeling that every outage is personal. Shelter nights spent reading incident logs.",
    "spark": "A junior engineer’s first fix. The running club.",
    "p": "The payment arm: pay-on-delivery, transfers, cash withdrawals at branches during blackouts. It handles about 22.7% of Ukraine’s domestic money transfers.",
    "day": [
      {
        "t": "06:30",
        "txt": "Today’s blackout schedules for every region. The company says its data centres hold two to three weeks of generator fuel."
      },
      {
        "t": "07:15",
        "k": "life",
        "txt": "A quick run before her district’s power window closes, so the lift still works when she gets back."
      },
      {
        "t": "08:00",
        "txt": "Monday morning peak: pay-on-delivery money flowing to thousands of small sellers after the weekend."
      },
      {
        "t": "10:15",
        "k": "hot",
        "txt": "Card payments fail more often in one region where mobile networks are down. Branches there switch to cash; Kateryna flags it to operations and watches the error rate until it drops."
      },
      {
        "t": "11:30",
        "k": "spark",
        "txt": "Maks, six months into the job, handles his first real incident while she sits beside him and says nothing. He fixes it. She buys the coffee."
      },
      {
        "t": "13:00",
        "txt": "A planned drill: practising how to move a payment workload between environments. NovaPay runs a hybrid setup across AWS, Google Cloud and a Ukrainian provider."
      },
      {
        "t": "16:00",
        "txt": "Post-incident review, revisited: on 26 April 2025 one data centre’s 14-minute power fault took down the Nova Post app, the government’s Diia app and a state bank together. Lesson: know every shared dependency."
      },
      {
        "t": "18:00",
        "k": "hot",
        "txt": "Alert on the way home. She spends forty minutes underground in a metro station, Kyiv’s biggest shelter, reading incident notes on her phone beside a woman with a cat in a carrier."
      },
      {
        "t": "20:00",
        "txt": "On-call handover. The DDoS checklist was updated after 1 October."
      },
      {
        "t": "21:00",
        "k": "spark",
        "txt": "The running club chat: Saturday’s 10 km raised enough for a portable power station for a unit at the front. Twelve people say they’re in for next week."
      }
    ]
  },
  {
    "id": "cl",
    "h": "Claims and compensation",
    "ua": "Відшкодування",
    "who": "Nadiia",
    "role": "Claims specialist, Poltava",
    "bio": "41. Joined the company in 2015 at a branch counter in Poltava, the city where it was founded. Her husband, Ruslan, drives for a partner carrier on the eastern routes. Their son, Danylo, is fifteen.",
    "tough": "Being the reachable person for losses she cannot undo. Knowing how many drivers were killed this summer, and that Ruslan drives the same roads.",
    "spark": "Sellers who write back to say the money bought their next order. Liliia’s jar of sweets. Bread on the way home.",
    "p": "Handles claims for parcels destroyed in attacks. The company says it compensates their declared value; it had paid UAH 194 million by mid-2026.",
    "day": [
      {
        "t": "07:40",
        "k": "life",
        "txt": "She walks Danylo halfway to school. He walks the other half alone, by agreement, so nobody sees his mother. The alert app has been quiet since four."
      },
      {
        "t": "08:30",
        "txt": "The list: every shipment that was inside or heading for the company’s Kryvyi Rih terminal when it was hit last week. Some were rerouted before the strike; some burned; some simply have no scan after midnight. A missing scan proves uncertainty, not destruction. Before Nadiia changes any status to «втрачено внаслідок військових дій» (“lost as a result of military action”), she checks it against the incident records and the lists from the backup hub."
      },
      {
        "t": "09:10",
        "txt": "The company has promised to contact every owner of a destroyed parcel itself, rather than wait to be chased. That means Nadiia’s list is also a call sheet."
      },
      {
        "t": "09:20",
        "k": "hot",
        "txt": "Inna, who sells children’s clothes on Instagram from Kryvyi Rih, calls before Nadiia can call her. Three bales of stock from her supplier in Khmelnytskyi were in the terminal. Twenty-six customers are waiting for school clothes. She needs a definite answer. Nadiia has two bales confirmed destroyed and one whose last scan came an hour before the strike.",
        "say": [
          "Я передзвоню вам о п’ятій.",
          "I’ll call you back at five."
        ]
      },
      {
        "t": "10:05",
        "k": "spark",
        "txt": "Liliia, at the next desk, slides over the jar labelled «Від поганих дзвінків» (“For bad calls”). The rule of the team: after a hard call you take a [[цукерка]], and someone else takes the next call."
      },
      {
        "t": "10:45",
        "txt": "Inna’s paperwork arrives as photographs taken at an angle on a kitchen table, plus screenshots of her chat with the supplier. Rather than ask her to tell the whole story again, Nadiia sends one short list: the supplier’s invoice, proof that Inna paid it, and the waybill numbers.",
        "say": [
          "Надішліть, будь ласка, накладну від постачальника.",
          "Please send the waybill from your supplier."
        ]
      },
      {
        "t": "12:30",
        "k": "life",
        "txt": "Lunch, interrupted. A message from Danylo: «Мам, купиш хліба?» (“Mum, will you buy bread?”). She leaves it unread while she finishes a call with a pensioner whose parcel of medicine burned, then answers «Куплю» (“I will”)."
      },
      {
        "t": "13:15",
        "k": "hot",
        "txt": "An alert in Poltava; the office goes to the shelter. She keeps Ruslan’s route out of her head by reading invoices. A post office in her own city was hit on 31 July. Nobody in the shelter mentions it."
      },
      {
        "t": "14:00",
        "k": "hot",
        "txt": "The hard conversation. Inna paid her supplier UAH 18,400. The supplier declared UAH 3,000 for all three bales, a common way to keep sending costs down; the minimum declared value is one hryvnia. Inna is asking for UAH 26,000, what her customers would have paid. Three numbers, one waybill. Nadiia explains that compensation follows the declared value, that documents may be requested for high values, and that a review looks at how the shipment was registered and on what terms. She can describe the process. She cannot promise the result."
      },
      {
        "t": "15:40",
        "k": "spark",
        "txt": "One case moves. The documents for the two destroyed bales are accepted and the payment of their declared value is approved. The third bale stays open: it may be sitting at the backup hub with the rerouted parcels. Nadiia asks the hub to look."
      },
      {
        "t": "16:30",
        "k": "life",
        "txt": "Ruslan, from the road: «Доїхав.» (“Made it.”). She breathes out and notices she had been holding her breath."
      },
      {
        "t": "17:00",
        "k": "hot",
        "txt": "She calls Inna at five, as she said she would, though the answer is still incomplete: two bales approved at the declared value, one still being searched, and how to ask for a review of the rest. Inna is not happy. But she says «Принаймні ви передзвонили» (“At least you called back”). She has stopped having to chase."
      },
      {
        "t": "18:45",
        "k": "spark",
        "txt": "In the bread queue, a message from a seller in Sumy whose stock burned in June, when drones hit the hub there with more than 13,000 parcels inside. «Оплата прийшла. Замовила нову партію!» (“The payment came. I’ve ordered a new batch!”). A photo of fresh stock on a shop counter. Commerce resumes, on a very small and very consequential scale."
      },
      {
        "t": "19:30",
        "k": "life",
        "txt": "Over dinner Danylo asks what she actually does all day. She thinks about it. «Я допомагаю людям, коли згоряють посилки» (“I help people when parcels burn”). He says that sounds like a superhero job. She says it mostly sounds like phone calls."
      }
    ]
  }
];

// Content imported from the original handoff; dates and fictional/composite labels are retained.
export const PARCELS = [
  {
    "id": "A",
    "num": "20450123456789",
    "title": "Kyiv to the front line",
    "short": "A mother’s parcel for her son",
    "from": {
      "n": "Olena",
      "d": "Sender, Kyiv. Teacher, mother of Andrii."
    },
    "to": {
      "n": "Andrii",
      "d": "Recipient. Serviceman, frontline branch in Kharkiv Oblast."
    },
    "contents": "Thermal socks, a power bank, a honey cake, a drawing by his niece. 3.1 kg.",
    "stops": [
      "Kyiv",
      "Sorting hub",
      "On the road",
      "Kharkiv",
      "Front line"
    ],
    "steps": [
      {
        "n": 0,
        "ts": "2026-10-13T09:10",
        "p": "Olena’s kitchen, Kyiv",
        "ua": "Створено експрес-накладну",
        "en": "Waybill created",
        "c": {
          "who": "Olena",
          "role": "Sender",
          "txt": "Olena opens the [[застосунок]] and fills in an [[експрес-накладна]]: Andrii’s name and phone, his frontline [[відділення]], and an [[оголошена цінність]] of UAH 1,500. She ticks “recipient pays”: Andrii will pay just one hryvnia.",
          "arts": [
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Андрій",
              "msgs": [
                {
                  "me": 1,
                  "ua": "Синку, відправляю тобі посилку. Номер скину.",
                  "en": "Son, I’m sending you a parcel. I’ll send you the number."
                },
                {
                  "ua": "Дякую, мам! Оплачу через Армію+.",
                  "en": "Thanks, Mum! I’ll pay through Army+."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "No one yet",
          "role": "The parcel is pure data",
          "txt": "Before anyone touches a box, the parcel exists only as a record with a 14-digit number. Every handover from now on is a scan against that record."
        },
        "whyC": "Soldiers can send and receive parcels up to 30 kg for one hryvnia at frontline branches in six regions, using up to three barcodes a month from the Ministry of Defence’s Army+ app.",
        "whyS": "The 14-digit number is the key to everything that follows: sorting machines, drivers and branch staff all scan against it.",
        "sayC": [
          "Посилка для сина на фронт.",
          "A parcel for my son at the front."
        ],
        "sayS": [
          "Номер експрес-накладної.",
          "The waybill number."
        ]
      },
      {
        "n": 0,
        "start": 1,
        "ts": "2026-10-13T10:30",
        "p": "Branch No. 112, Kyiv",
        "ua": "Відправлення прийнято у відділенні",
        "en": "Shipment accepted at the branch",
        "c": {
          "who": "Olena",
          "role": "Sender",
          "txt": "She hands over the box. A parcel this size would normally cost UAH 135 to send across Ukraine (April 2026 price), but this one is billed to Andrii.",
          "arts": [
            {
              "k": "talk",
              "lines": [
                {
                  "sp": "Iryna",
                  "ua": "Добрий день! Що відправляємо?",
                  "en": "Hello! What are we sending?"
                },
                {
                  "sp": "Olena",
                  "ua": "Посилку синові на фронт.",
                  "en": "A parcel for my son at the front."
                },
                {
                  "sp": "Iryna",
                  "ua": "Оголошена цінність?",
                  "en": "Declared value?"
                },
                {
                  "sp": "Olena",
                  "ua": "Тисяча п’ятсот гривень.",
                  "en": "Fifteen hundred hryvnias."
                }
              ]
            },
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "10:31",
              "ttl": "Відправлення прийнято",
              "body": "Київ — Харківська область",
              "en": "Shipment accepted. Kyiv to Kharkiv Oblast."
            }
          ]
        },
        "s": {
          "who": "Iryna",
          "role": "Branch operator",
          "txt": "Iryna weighs the box, checks the label and scans it. If a siren sounds she will close the branch and take everyone to the [[укриття]]. The company’s standard is a shelter staff can reach in about 30 seconds. Outside, a [[генератор]] is ready for the next blackout.",
          "arts": [
            {
              "k": "talk",
              "lines": [
                {
                  "sp": "Iryna",
                  "ua": "Добрий день! Що відправляємо?",
                  "en": "Hello! What are we sending?"
                },
                {
                  "sp": "Olena",
                  "ua": "Посилку синові на фронт.",
                  "en": "A parcel for my son at the front."
                }
              ]
            }
          ]
        },
        "m": {
          "txt": "Outside, Olena stops at the little church on the corner, as she does every time she sends him something, and prays for Andrii. In her notes app the waybill number sits just under the date he last called.",
          "v": "c"
        },
        "whyC": "Every handover is scanned against the waybill, so Olena and Andrii both watch it move in real time.",
        "whyS": "By March 2026 the company said it had built 1,244 shelters of different kinds for staff and customers.",
        "sayC": [
          "Добрий день! Я хочу відправити посилку.",
          "Hello! I’d like to send a parcel."
        ],
        "sayS": [
          "Оголошена цінність?",
          "Declared value?"
        ]
      },
      {
        "n": 1,
        "ts": "2026-10-13T19:40",
        "p": "Sorting terminal, Kyiv region",
        "ua": "Відправлення на сортувальному терміналі",
        "en": "At the sorting terminal",
        "c": {
          "who": "Andrii",
          "role": "Recipient",
          "txt": "A notification: his parcel is at a [[сортувальний термінал]]. He shows his friend the screen. “Mum.”",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "19:41",
              "ttl": "Посилка на сортувальному терміналі",
              "body": "Номер 20 4501 2345 6789",
              "en": "Your parcel is at the sorting terminal."
            }
          ]
        },
        "s": {
          "who": "Maksym",
          "role": "Sorter, night shift",
          "txt": "Conveyor belts carry boxes past scanners that read the barcode and push each one toward its destination lane. Maksym’s shift has been busier since 15 June 2026, when a Russian missile strike destroyed the company’s largest and most automated terminal in Kyiv; its work was spread across other hubs.",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Work chat",
              "title": "Нічна зміна",
              "msgs": [
                {
                  "from": "Shift lead",
                  "ua": "Лінія 4 на Харків, завантаження до 23:00.",
                  "en": "Line 4 to Kharkiv, loading until 23:00."
                },
                {
                  "me": 1,
                  "ua": "Прийняв.",
                  "en": "Copy."
                }
              ]
            }
          ]
        },
        "whyC": "In October 2026 free storage at branches was cut from seven to five days, partly so that parcels spend less time in buildings that might be hit.",
        "whyS": "Managers try to keep parcels moving rather than stored: the less that sits in one building, the less there is to burn if it is hit.",
        "sayC": [
          "Посилка вже на терміналі.",
          "The parcel is already at the terminal."
        ],
        "sayS": [
          "Лінія на Харків.",
          "The Kharkiv line."
        ]
      },
      {
        "n": 1,
        "x": 1,
        "ts": "2026-10-13T21:15",
        "p": "Sorting terminal, Kyiv region",
        "ua": "Роботу призупинено: повітряна тривога",
        "en": "Work paused: air-raid alert",
        "c": {
          "who": "Olena",
          "role": "Sender",
          "txt": "She hears the siren at home too. On her phone, the parcel simply hasn’t moved for a while.",
          "arts": [
            {
              "k": "push",
              "app": "Air Alert",
              "ico": "alert",
              "t": "21:15",
              "ttl": "Повітряна тривога!",
              "body": "Київська область. Прямуйте до укриття.",
              "en": "Air-raid alert! Kyiv region. Go to a shelter."
            }
          ]
        },
        "s": {
          "who": "Maksym",
          "role": "Sorter, night shift",
          "txt": "The belts stop and the whole shift walks to the shelter. Since 18 September 2026 every company site pauses on any [[повітряна тривога]], whatever the type of threat. A site can also close on the company’s own threat monitoring, even without an official siren. Work resumes after the [[відбій]].",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Work chat",
              "title": "Нічна зміна",
              "msgs": [
                {
                  "from": "Shift lead",
                  "ua": "Тривога. Зупиняємо лінії, всі в укриття.",
                  "en": "Alert. Stopping the lines, everyone to the shelter."
                },
                {
                  "from": "Shift lead",
                  "ua": "Відбій. Повертаємось на лінію.",
                  "en": "All clear. Back to the line."
                }
              ]
            }
          ]
        },
        "whyC": "Long and frequent alerts are one reason delivery times stretch.",
        "whyS": "Alerts stop not only branches but the hubs behind them; every pause ripples down the line.",
        "sayC": [
          "Знову тривога.",
          "Another alert."
        ],
        "sayS": [
          "Тривога! Усі в укриття.",
          "Alert! Everyone to the shelter."
        ]
      },
      {
        "n": 2,
        "ts": "2026-10-13T23:50",
        "p": "M03 highway, heading east",
        "ua": "Прямує до Харкова",
        "en": "On its way to Kharkiv",
        "c": {
          "who": "Andrii",
          "role": "Recipient",
          "txt": "On its way to Kharkiv. He has a few hours off tomorrow.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "23:51",
              "ttl": "Прямує до Харкова",
              "body": "Очікувана доставка: завтра",
              "en": "On its way to Kharkiv. Expected delivery: tomorrow."
            }
          ]
        },
        "s": {
          "who": "Serhii",
          "role": "Truck driver, partner carrier",
          "txt": "Serhii’s [[вантажівка]] carries a swap-body container. At hubs, drivers drop a full container on folding legs and hook up a loaded one in minutes, so trucks spend as little time as possible at likely targets. Many drivers work for partner companies; several were killed in strikes on terminals in 2026."
        },
        "whyC": "Domestic delivery between Ukraine’s most distant cities takes about 24 hours, the company says: slightly faster than before the war.",
        "whyS": "Swap bodies cut the time a truck stands at a hub, which matters when hubs are targets.",
        "sayC": [
          "Посилка вже в дорозі.",
          "The parcel is on its way."
        ],
        "sayS": [
          "Вантажівка прямує до Харкова.",
          "The truck is heading to Kharkiv."
        ]
      },
      {
        "n": 2,
        "x": 1,
        "ts": "2026-10-14T03:20",
        "p": "Operations centre",
        "ua": "Маршрут змінено",
        "en": "Route changed",
        "c": {
          "who": "Olena",
          "role": "Sender",
          "txt": "Nothing visible. She’s asleep, phone face-up on the pillow."
        },
        "s": {
          "who": "Nataliia",
          "role": "Logistics dispatcher",
          "txt": "Overnight drones hit a depot on the usual route. Nataliia switches the truck to a [[резервний маршрут]] and another hub. Company statements after strikes almost always say the same three things: backup routes activated, surviving parcels redirected, declared value compensated.",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Work chat",
              "title": "Диспетчерська",
              "msgs": [
                {
                  "me": 1,
                  "ua": "Удар по депо на маршруті. Переводжу рейс на резервний хаб.",
                  "en": "Strike on a depot on the route. Moving the run to the backup hub."
                },
                {
                  "from": "Serhii",
                  "ua": "Прийняв. Розвертаюсь.",
                  "en": "Copy. Turning around."
                }
              ]
            }
          ]
        },
        "whyC": "If a parcel is destroyed in an attack, the company compensates its declared value: UAH 194 million paid by mid-2026.",
        "whyS": "Dispatchers reroute in the middle of the night so that a strike on one depot doesn’t stop a whole region.",
        "sayC": [
          "На добраніч.",
          "Good night."
        ],
        "sayS": [
          "Задіяли резервні маршрути.",
          "Backup routes have been activated."
        ]
      },
      {
        "n": 3,
        "ts": "2026-10-14T07:30",
        "p": "Depot, Kharkiv",
        "ua": "Прибуло до Харкова",
        "en": "Arrived in Kharkiv",
        "c": {
          "who": "Andrii",
          "role": "Recipient",
          "txt": "Arrived in Kharkiv. Almost there.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "07:31",
              "ttl": "Прибуло до Харкова",
              "body": "Скоро буде у вашому відділенні",
              "en": "Arrived in Kharkiv. Soon at your branch."
            }
          ]
        },
        "s": {
          "who": "Volodymyr",
          "role": "Frontline driver",
          "txt": "Volodymyr loads a van for the towns nearer the [[фронт]]. Drones and shelling have damaged trucks on these roads; he keeps one ear on the sky. Frontline staff were paid bonuses of 60–80% on top of their salary (2024 company policy)."
        },
        "m": {
          "txt": "On the potholed road east, Volodymyr thinks about the colleagues who aren’t driving this year. Near a burnt-out car, sunlight catches a thin silver thread in the verge: fibre-optic cable, unspooled by a drone that was steered along it. Out here there are kilometres of it.",
          "v": "s"
        },
        "whyC": "Andrii will pay one hryvnia: the Army+ barcode works at frontline branches in six regions, including Kharkiv Oblast.",
        "whyS": "In frontline towns the local branch is often the last private business still open, The New York Times reported in April 2026.",
        "sayC": [
          "Посилка майже приїхала.",
          "The parcel has almost arrived."
        ],
        "sayS": [
          "Обережно на дорозі!",
          "Be careful on the road!"
        ]
      },
      {
        "n": 4,
        "x": 1,
        "ts": "2026-10-14T11:05",
        "p": "Frontline branch, Kharkiv Oblast",
        "ua": "Відділення тимчасово не працює",
        "en": "Branch temporarily closed",
        "c": {
          "who": "Andrii",
          "role": "Recipient",
          "txt": "Before setting off, Andrii checks the app: the branch shows as closed. There is no official siren, but the company has flagged a local threat. He waits half an hour.",
          "arts": [
            {
              "k": "screen",
              "warn": 1,
              "bar": "Nova Post",
              "ttl": "Відділення тимчасово не працює",
              "body": "Причина: загроза безпеці. Слідкуйте за статусом у застосунку.",
              "en": "Branch temporarily closed. Reason: security threat. Follow the status in the app."
            },
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Мама",
              "msgs": [
                {
                  "me": 1,
                  "ua": "Відділення закрили, чекаю.",
                  "en": "They’ve closed the branch, I’m waiting."
                },
                {
                  "ua": "Бережи себе, синку.",
                  "en": "Take care of yourself, son."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Svitlana",
          "role": "Branch operator",
          "txt": "Svitlana and the customers sit in the [[капсула життя]], a reinforced shelter next to the counter, until monitoring gives the all-clear.",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Work chat",
              "title": "Моніторинг безпеки",
              "msgs": [
                {
                  "from": "Monitoring",
                  "ua": "Локальна загроза. Закрийте відділення, всі в укриття.",
                  "en": "Local threat. Close the branch, everyone to the shelter."
                },
                {
                  "me": 1,
                  "ua": "Закрили. Шестеро в капсулі.",
                  "en": "Closed. Six of us in the capsule."
                }
              ]
            }
          ]
        },
        "m": {
          "txt": "Svitlana’s daughter texts from Lviv: «Мамо, ти в укритті?» (“Mum, are you in the shelter?”). She types back «Так. Все добре.» (“Yes. All good.”). It is the third time this week.",
          "v": "s"
        },
        "whyC": "Since October 2026 the app shows each branch’s live status during alerts, so people don’t queue outside a closed door.",
        "whyS": "Branches close during danger and sometimes close for good. In 2025 the company shut its last branches in Kostiantynivka and Pokrovsk when staying became impossible.",
        "sayC": [
          "Відділення тимчасово не працює.",
          "The branch is temporarily closed."
        ],
        "sayS": [
          "Усі в капсулу.",
          "Everyone into the capsule."
        ]
      },
      {
        "n": 4,
        "done": 1,
        "ts": "2026-10-14T11:50",
        "p": "Frontline branch, Kharkiv Oblast",
        "ua": "Відправлення отримано",
        "en": "Received",
        "c": {
          "who": "Andrii",
          "role": "Recipient",
          "txt": "He shows the Army+ barcode, pays one hryvnia and opens the box at the counter. On top: his niece’s drawing of a sunflower and their dog.",
          "arts": [
            {
              "k": "talk",
              "lines": [
                {
                  "sp": "Svitlana",
                  "ua": "Тримайтеся!",
                  "en": "Hang in there!"
                },
                {
                  "sp": "Andrii",
                  "ua": "І ви тримайтеся.",
                  "en": "You too."
                }
              ]
            },
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Мама",
              "msgs": [
                {
                  "me": 1,
                  "ua": "Отримав! Малюнок — супер 🌻",
                  "en": "Got it! The drawing is great."
                },
                {
                  "ua": "Слава Богу. Люблю тебе.",
                  "en": "Thank God. I love you."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Svitlana",
          "role": "Branch operator",
          "txt": "Svitlana hands it over and says what everyone says here: “[[Тримайся]]!”"
        },
        "whyC": "From counter to counter, through one alert, one reroute and one local closure.",
        "whyS": "“Тримайся” became one of the phrases of this war: people say it to strangers as easily as to family.",
        "sayC": [
          "Дякую! Тримайтеся!",
          "Thank you! Hang in there!"
        ],
        "sayS": [
          "Тримайтеся!",
          "Hang in there!"
        ]
      }
    ]
  },
  {
    "id": "B",
    "num": "59000123456780",
    "title": "Kharkiv to Warsaw",
    "short": "A grandmother’s parcel across the border",
    "from": {
      "n": "Halyna",
      "d": "Sender, Kharkiv. Retired, stayed when her daughter left."
    },
    "to": {
      "n": "Oksana and Mark",
      "d": "Recipients, Warsaw. Moved in 2022; Mark is eight."
    },
    "contents": "A child’s vyshyvanka, two Ukrainian picture books, a printed family photo album.",
    "stops": [
      "Kharkiv",
      "Lviv",
      "Border",
      "Poland",
      "Warsaw"
    ],
    "steps": [
      {
        "n": 0,
        "start": 1,
        "ts": "2026-10-05T16:00",
        "p": "Branch, Kharkiv",
        "ua": "Створено міжнародну експрес-накладну",
        "en": "International waybill created",
        "c": {
          "who": "Halyna",
          "role": "Sender",
          "txt": "Halyna doesn’t use the app, so she comes to the branch. The [[вишиванка]] is for Vyshyvanka Day at her [[онук]] Mark’s Ukrainian Saturday school.",
          "arts": [
            {
              "k": "talk",
              "lines": [
                {
                  "sp": "Viktoriia",
                  "ua": "Добрий день! Куди відправляємо?",
                  "en": "Hello! Where are we sending it?"
                },
                {
                  "sp": "Halyna",
                  "ua": "До Варшави, онукові.",
                  "en": "To Warsaw, to my grandson."
                },
                {
                  "sp": "Viktoriia",
                  "ua": "Що всередині?",
                  "en": "What’s inside?"
                },
                {
                  "sp": "Halyna",
                  "ua": "Вишиванка і дві книжки.",
                  "en": "An embroidered shirt and two books."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Viktoriia",
          "role": "Branch operator",
          "txt": "International parcels need a list of contents and their value for customs. Viktoriia types each item: one child’s embroidered shirt, two books, one photo album. A vague word like “gift” isn’t enough."
        },
        "whyC": "Crossing a border turns a parcel into a customs declaration. The data has to be right before the truck leaves.",
        "whyS": "Branch staff often fill in declarations for older customers who don’t use the app.",
        "sayC": [
          "До Варшави, онукові.",
          "To Warsaw, to my grandson."
        ],
        "sayS": [
          "Що всередині?",
          "What’s inside?"
        ]
      },
      {
        "n": 0,
        "x": 1,
        "ts": "2026-10-05T16:20",
        "p": "Branch, Kharkiv",
        "ua": "Відділення працює від генератора",
        "en": "Branch running on a generator",
        "c": {
          "who": "Halyna",
          "role": "Sender",
          "txt": "The lights go out mid-sentence. A [[генератор]] starts outside. Halyna charges her phone at the branch while she waits: it doubles as a [[Пункт незламності]]."
        },
        "s": {
          "who": "Viktoriia",
          "role": "Branch operator",
          "txt": "If power and internet both fail, staff can keep scanning with battery-powered handheld scanners and upload the data once the connection is back. The workaround was first described in December 2022."
        },
        "m": {
          "txt": "On Halyna’s arm, her glucose sensor keeps measuring. But with the mobile network down, its phone app can’t reach the server her doctor checks. She writes the number on the back of her receipt, the way she did twenty years ago.",
          "arts": [
            {
              "k": "push",
              "app": "Glucose",
              "ico": "health",
              "t": "16:22",
              "ttl": "Немає з’єднання з сервером",
              "body": "Дані зберігаються на телефоні.",
              "en": "No connection to the server. Data is being stored on the phone."
            }
          ],
          "v": "c"
        },
        "whyC": "During blackouts many branches double as Points of Invincibility, with light, warmth and charging.",
        "whyS": "Russia’s strikes on the power grid since autumn 2022 bring scheduled and emergency blackouts. The group created its own energy company in 2024; it now runs rooftop solar and gas-fired generation at some hubs.",
        "sayC": [
          "Можна зарядити телефон?",
          "Can I charge my phone?"
        ],
        "sayS": [
          "Відділення працює від генератора.",
          "The branch is running on a generator."
        ]
      },
      {
        "n": 0,
        "ts": "2026-10-05T21:00",
        "p": "Sorting terminal, Kharkiv area",
        "ua": "Відправлення на сортувальному терміналі",
        "en": "At the sorting terminal",
        "c": {
          "who": "Oksana",
          "role": "Recipient",
          "txt": "In Warsaw, Oksana gets the tracking link and a message from her mother. She tells Mark the parcel from [[бабуся]] is coming.",
          "arts": [
            {
              "k": "chat",
              "app": "Viber",
              "title": "Мама",
              "msgs": [
                {
                  "ua": "Відправила! Чекайте.",
                  "en": "Sent it! Look out for it."
                },
                {
                  "me": 1,
                  "ua": "Дякуємо, мамо! Марко дуже чекає.",
                  "en": "Thank you, Mum! Mark can’t wait."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Roman",
          "role": "Sorting supervisor",
          "txt": "Roman’s colleagues at the company’s terminal near Kharkiv, in Korotych, have been hit by Russian missiles in October 2023, January 2026 and July 2026. People were killed each time. Each time, work moved elsewhere and then resumed."
        },
        "whyC": "Oksana in Warsaw sees the same tracking as her mother in Kharkiv: one number, two countries.",
        "whyS": "By March 2026 the company reported 12 hubs and 28 branches destroyed and many more damaged. In October 2026 it estimated its total war losses at about UAH 3 billion.",
        "sayC": [
          "Посилка від бабусі вже в дорозі.",
          "Grandma’s parcel is on its way."
        ],
        "sayS": [
          "Ми продовжуємо працювати.",
          "We keep working."
        ]
      },
      {
        "n": 1,
        "ts": "2026-10-06T14:00",
        "p": "International terminal, Lviv",
        "ua": "Митне оформлення",
        "en": "Customs clearance",
        "c": {
          "who": "Oksana",
          "role": "Recipient",
          "txt": "Status: customs clearance. Oksana forwards a screenshot to her mother.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "14:02",
              "ttl": "Митне оформлення",
              "body": "Відправлення 59 0001 2345 6780",
              "en": "Customs clearance for your shipment."
            }
          ]
        },
        "s": {
          "who": "Dmytro",
          "role": "Customs specialist",
          "txt": "Dmytro checks the declaration and prepares the export documents for [[митниця]]. Ukraine’s airspace has been closed to civilian flights since 24 February 2022, so parcels to Europe leave by road."
        },
        "whyC": "Customs is where paperwork, not distance, decides the speed.",
        "whyS": "Parcels to the EU leave Ukraine by road, so border queues become part of the schedule.",
        "sayC": [
          "Митне оформлення займає час.",
          "Customs clearance takes time."
        ],
        "sayS": [
          "Документи готові.",
          "The documents are ready."
        ]
      },
      {
        "n": 2,
        "ts": "2026-10-07T05:30",
        "p": "Ukraine–Poland border",
        "ua": "Перетнуло кордон",
        "en": "Crossed the border",
        "c": {
          "who": "Oksana",
          "role": "Recipient",
          "txt": "Mark asks if Grandma is coming too. Not this time.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "05:31",
              "ttl": "Відправлення перетнуло кордон",
              "body": "Далі: Польща",
              "en": "Your shipment has crossed the border. Next: Poland."
            }
          ]
        },
        "s": {
          "who": "Ivan",
          "role": "International driver",
          "txt": "Ivan’s [[вантажівка]] waits in the line of trucks at the [[кордон]] crossing. Then Poland."
        },
        "m": {
          "txt": "Ivan has been on the road for ten days. Under martial law most men aged 18 to 60 cannot leave Ukraine; drivers on international routes cross on special permits. He calls his son from the queue and promises to be home for the weekend.",
          "v": "s"
        },
        "whyC": "The company says delivery from Ukraine to Europe takes from three days.",
        "whyS": "One truck carries hundreds of parcels like this one; one delay at the border delays all of them.",
        "sayC": [
          "Посилка перетнула кордон.",
          "The parcel has crossed the border."
        ],
        "sayS": [
          "Черга на кордоні.",
          "A queue at the border."
        ]
      },
      {
        "n": 3,
        "ts": "2026-10-07T15:00",
        "p": "Nova Post hub, Poland",
        "ua": "Прибуло до Польщі",
        "en": "Arrived in Poland",
        "c": {
          "who": "Oksana",
          "role": "Recipient",
          "txt": "Arrived in Poland. She plans to collect after work tomorrow."
        },
        "s": {
          "who": "Kasia",
          "role": "Hub worker, Poland",
          "txt": "Kasia is Polish and is picking up Ukrainian at work. She likes that посилка sounds like Polish przesyłka. The hub handles import checks for the EU side before parcels go out to branches.",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Work chat",
              "title": "Хаб, Польща",
              "msgs": [
                {
                  "from": "Petro (team lead)",
                  "ua": "Касю, «посилка» — це «przesyłka».",
                  "en": "Kasia, ‘posylka’ means ‘przesyłka’."
                },
                {
                  "me": 1,
                  "ua": "Wiem! Посилка 🙂",
                  "en": "I know! (Polish) Posylka."
                }
              ]
            }
          ]
        },
        "whyC": "In its early years about 90% of the company’s customers in Europe were Ukrainian. By 2026 the average was about 60%; in Moldova, under 1%.",
        "whyS": "The European hubs employ local staff alongside Ukrainians who moved abroad.",
        "sayC": [
          "Посилка в Польщі.",
          "The parcel is in Poland."
        ],
        "sayS": [
          "Касю, дякую!",
          "Thanks, Kasia!"
        ]
      },
      {
        "n": 4,
        "done": 1,
        "ts": "2026-10-08T18:10",
        "p": "Nova Post branch, Warsaw",
        "ua": "Отримано",
        "en": "Received",
        "c": {
          "who": "Oksana and Mark",
          "role": "Recipients",
          "txt": "The operator greets them in Ukrainian. Mark pulls the vyshyvanka over his school jumper right there at the counter.",
          "arts": [
            {
              "k": "talk",
              "lines": [
                {
                  "sp": "Yuliia",
                  "ua": "Добрий вечір! Номер посилки?",
                  "en": "Good evening! Parcel number?"
                },
                {
                  "sp": "Oksana",
                  "ua": "Ось, у застосунку.",
                  "en": "Here, in the app."
                },
                {
                  "sp": "Mark",
                  "ua": "Мамо, дивись! Вишиванка!",
                  "en": "Mum, look! A vyshyvanka!"
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Yuliia",
          "role": "Branch operator, Warsaw",
          "txt": "Yuliia left Kharkiv in 2022. She had worked for the company at home. People come in to collect parcels and to hear their own language."
        },
        "m": {
          "txt": "That evening Oksana video-calls her mother so Mark can show off the shirt. The call drops twice. Another blackout in Kharkiv.",
          "v": "c"
        },
        "whyC": "From a blackout in Kharkiv to a counter in Warsaw.",
        "whyS": "Many staff who fled in 2022 asked to work in the company’s new branches abroad.",
        "sayC": [
          "Бабуся передає привіт!",
          "Grandma says hi!"
        ],
        "sayS": [
          "Добрий вечір! Номер посилки?",
          "Good evening! Parcel number?"
        ]
      }
    ]
  },
  {
    "id": "C",
    "num": "59987654321012",
    "title": "A Lviv parcel locker to Canada",
    "short": "A student’s gift across the ocean",
    "from": {
      "n": "Taras",
      "d": "Sender, Lviv. University student, 19."
    },
    "to": {
      "n": "Mariia",
      "d": "Recipient, Edmonton, Alberta. His great-aunt; her grandparents emigrated a century ago."
    },
    "contents": "A rushnyk embroidered by his grandmother, a book of Lesya Ukrainka’s poems, a letter in Ukrainian with an English translation.",
    "stops": [
      "Lviv locker",
      "Lviv hub",
      "Poland",
      "Canada",
      "Edmonton"
    ],
    "steps": [
      {
        "n": 0,
        "x": 1,
        "ts": "2026-10-01T18:05",
        "p": "Student residence, Lviv",
        "ua": "Можливі тимчасові складнощі",
        "en": "Temporary difficulties possible",
        "c": {
          "who": "Taras",
          "role": "Sender",
          "txt": "Taras opens the app to start an international shipment. The login just spins. A banner says a DDoS attack is under way. He tries again an hour later and it works. (This is the real attack of 1 October 2026.)",
          "arts": [
            {
              "k": "screen",
              "warn": 1,
              "bar": "Nova Post",
              "ttl": "Відбувається DDoS-атака на наші системи",
              "body": "Можливі незначні тимчасові складнощі в роботі сервісів.",
              "en": "A DDoS attack on our systems is under way. Minor temporary difficulties with services are possible."
            }
          ]
        },
        "s": {
          "who": "Oleh",
          "role": "Security engineer, Nova Digital",
          "txt": "A DDoS (distributed denial of service) [[кібератака]] floods servers with fake requests so real ones can’t get through. The team switches to backup operating procedures and filters the traffic. Nova Digital, the group’s IT company, has around 1,000 specialists and runs a security operations centre it also sells to other firms.",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Work chat",
              "title": "SOC, черговий",
              "msgs": [
                {
                  "from": "Monitoring",
                  "ua": "Аномальний трафік на API та вхід у застосунок.",
                  "en": "Abnormal traffic on the API and app login."
                },
                {
                  "me": 1,
                  "ua": "Вмикаємо резервні схеми роботи. Фільтруємо.",
                  "en": "Switching to backup procedures. Filtering."
                }
              ]
            }
          ]
        },
        "m": {
          "txt": "Oleh swears at his voice-control software, which has heard “block” as “unlock” again. He was medically discharged after frontline service in offensive operations. The company rebuilt his workstation around his injury and his schedule around his rehab, and he is one of hundreds of veterans who have come back to work there. The accommodations are excellent. The accessibility software is another matter.",
          "v": "s"
        },
        "whyC": "Real outage notices appear inside the official app. Scammers copy the look in text messages, so an SMS “from the company” deserves suspicion.",
        "whyS": "When this system has a [[збій]], it isn’t only individuals who wait: online shops create their shipping labels through the same connection.",
        "sayC": [
          "Спробую пізніше.",
          "I’ll try later."
        ],
        "sayS": [
          "Фільтруємо трафік.",
          "We’re filtering the traffic."
        ]
      },
      {
        "n": 0,
        "ts": "2026-10-01T19:20",
        "p": "Student residence, Lviv",
        "ua": "Створено міжнародну експрес-накладну",
        "en": "International waybill created",
        "c": {
          "who": "Taras",
          "role": "Sender",
          "txt": "He lists the contents for customs (rushnyk, book, letter), gives their value and pays online. He chooses to send from the [[поштомат]] in his building’s lobby.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "19:21",
              "ttl": "Створено міжнародну накладну",
              "body": "Львів — Едмонтон, Канада",
              "en": "International waybill created. Lviv to Edmonton, Canada."
            }
          ]
        },
        "s": {
          "who": "No one",
          "role": "Self-service",
          "txt": "Lockers work for sending as well as collecting. In July 2026 the company had 37,935 in Ukraine: more than twice the number of its staffed branches."
        },
        "whyC": "International parcels need the same thing everywhere: an honest list of what’s inside and what it’s worth.",
        "whyS": "Self-service matters when staff are scarce. Many men have been mobilised; by late 2025 about 4,000 employees were serving in the army.",
        "sayC": [
          "Я відправляю посилку в Канаду.",
          "I’m sending a parcel to Canada."
        ],
        "sayS": [
          "Посилка в системі.",
          "The parcel is in the system."
        ]
      },
      {
        "n": 0,
        "x": 1,
        "start": 1,
        "ts": "2026-10-01T21:40",
        "p": "Parcel locker, residence lobby",
        "ua": "Посилку залишено в поштоматі",
        "en": "Parcel left in the locker",
        "c": {
          "who": "Taras",
          "role": "Sender",
          "txt": "A power cut: the lobby goes dark and the Wi-Fi dies. But he already created and paid for the shipment, so his phone connects to the locker over Bluetooth. A [[комірка]] pops open; the parcel goes in.",
          "arts": [
            {
              "k": "screen",
              "bar": "Nova Post (Bluetooth)",
              "ttl": "Поштомат поруч",
              "body": "Підключено через Bluetooth. Комірку №17 відчинено.",
              "en": "Locker nearby. Connected via Bluetooth. Cell 17 is open.",
              "btn": "Відкрити комірку"
            }
          ]
        },
        "s": {
          "who": "No one on site",
          "role": "The locker itself",
          "txt": "Lockers in buildings run on batteries during blackouts. The Bluetooth fallback is the same trick that kept lockers usable in December 2023, when a cyberattack knocked out the country’s largest mobile network."
        },
        "m": {
          "txt": "His grandmother embroidered the rushnyk in 2014, the year his father first went to Donbas. When she gave it to Taras she said only: send it somewhere safe. He isn’t sure whether she meant the cloth or the memory.",
          "v": "c"
        },
        "whyC": "Offline-first design: do the online part while you have a connection, finish the physical part without one.",
        "whyS": "Couriers empty and reload lockers on regular rounds, so a dropped-off parcel waits for the next collection.",
        "sayC": [
          "Комірка відчинилася!",
          "The cell opened!"
        ],
        "sayS": [
          "Батарея тримає.",
          "The battery is holding."
        ]
      },
      {
        "n": 1,
        "ts": "2026-10-02T10:15",
        "p": "Lviv",
        "ua": "Кур’єр забрав посилку з поштомата",
        "en": "Courier collected the parcel from the locker",
        "c": {
          "who": "Taras",
          "role": "Sender",
          "txt": "He messages his great-aunt in English.",
          "arts": [
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Auntie Mariia",
              "msgs": [
                {
                  "me": 1,
                  "ua": "It’s on its way!",
                  "en": ""
                },
                {
                  "ua": "Can’t wait! ❤️",
                  "en": ""
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Khrystyna",
          "role": "Courier-driver",
          "txt": "Khrystyna empties the lockers on her route. The company has tried to make every job doable by women as well as men, using trolleys and robots for heavy lifting, as mobilisation thinned the workforce. Mobilised colleagues keep their jobs and receive monthly support."
        },
        "whyC": "Taras can follow every scan; his great-aunt gets the same updates in English.",
        "whyS": "Nova Post was one of 25 big employers backing a government pilot to train women as truck drivers.",
        "sayC": [
          "Кур’єр уже забрав посилку.",
          "The courier has already picked up the parcel."
        ],
        "sayS": [
          "Забираю з поштомата.",
          "Collecting from the locker."
        ]
      },
      {
        "n": 1,
        "ts": "2026-10-02T18:00",
        "p": "International terminal, Lviv",
        "ua": "Митне оформлення",
        "en": "Export customs clearance",
        "c": {
          "who": "Mariia",
          "role": "Recipient",
          "txt": "In Edmonton it is morning. She gets a tracking email in English.",
          "arts": [
            {
              "k": "mail",
              "from": "Nova Post",
              "sub": "Your parcel is on its way",
              "body": "Shipment 59 9876 5432 1012 from Lviv, Ukraine is being processed for export."
            }
          ]
        },
        "s": {
          "who": "Anna",
          "role": "International logistics, Nova Global",
          "txt": "Anna’s team handles cross-border routes. With Ukrainian airspace closed, North American parcels go by road to an EU airport and fly from there. The group even has its own cargo airline, based in the EU while it waits for Ukrainian airports to reopen."
        },
        "whyC": "Mariia’s email and Taras’s app show the same record in two languages.",
        "whyS": "The war rerouted the whole country’s air freight through its neighbours.",
        "sayC": [
          "Літаки з України зараз не літають.",
          "Planes don’t fly from Ukraine right now."
        ],
        "sayS": [
          "Відправляємо до аеропорту в ЄС.",
          "Sending it to an EU airport."
        ]
      },
      {
        "n": 2,
        "ts": "2026-10-05T09:00",
        "p": "EU air hub",
        "ua": "Відправлено авіатранспортом",
        "en": "Sent by air",
        "c": {
          "who": "Taras",
          "role": "Sender",
          "txt": "His app shows the status in Ukrainian; Mariia’s email shows it in English.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "09:02",
              "ttl": "Відправлено авіатранспортом",
              "body": "Наступна зупинка: Канада",
              "en": "Sent by air. Next stop: Canada."
            }
          ]
        },
        "s": {
          "who": "Partner airline",
          "role": "Air freight",
          "txt": "The parcel crosses the Atlantic with a partner airline."
        },
        "whyC": "Canada has one of the largest Ukrainian diasporas in the world, many descended from settlers who arrived from the 1890s onwards.",
        "whyS": "Partners carry the parcel where the company has no network of its own.",
        "sayC": [
          "Посилка летить через океан.",
          "The parcel is flying across the ocean."
        ],
        "sayS": [
          "Передаємо партнерам.",
          "Handing over to partners."
        ]
      },
      {
        "n": 3,
        "ts": "2026-10-09T13:00",
        "p": "Canada",
        "ua": "Митне оформлення в країні призначення",
        "en": "Import customs, Canada",
        "c": {
          "who": "Mariia",
          "role": "Recipient",
          "txt": "She remembers her grandmother receiving parcels from Ukraine decades ago. They took months.",
          "arts": [
            {
              "k": "mail",
              "from": "Nova Post",
              "sub": "Your parcel is clearing customs in Canada",
              "body": "No action is needed from you at this time."
            }
          ]
        },
        "s": {
          "who": "Customs officer",
          "role": "Canada Border Services Agency",
          "txt": "Canadian customs checks the declaration that Taras typed in Lviv eight days ago. A clear description now saves days."
        },
        "whyC": "The same data typed in a Lviv dorm room travels with the box all the way.",
        "whyS": "Customs on both sides read the same declaration, so a mistake made in Lviv surfaces in Canada.",
        "sayC": [
          "Митниця перевіряє декларацію.",
          "Customs is checking the declaration."
        ],
        "sayS": [
          "Декларація в порядку.",
          "The declaration is in order."
        ]
      },
      {
        "n": 4,
        "done": 1,
        "ts": "2026-10-14T16:30",
        "p": "Edmonton, Alberta",
        "ua": "Доставлено",
        "en": "Delivered",
        "c": {
          "who": "Mariia",
          "role": "Recipient",
          "txt": "She unfolds the [[рушник]] on her kitchen table. She knows a few Ukrainian words from church and family, so she records a voice message.",
          "arts": [
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Taras",
              "msgs": [
                {
                  "voice": 1,
                  "ua": "Дякую, Тарасе! Я дуже щаслива.",
                  "en": "Thank you, Taras! I’m very happy."
                },
                {
                  "me": 1,
                  "ua": "Обіймаю, тітонько!",
                  "en": "Hugs, Auntie!"
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Local courier",
          "role": "Partner carrier",
          "txt": "A local partner carrier makes the final delivery."
        },
        "whyC": "Notice the grammar in the messages: Тарас becomes Тарасе and тітонька becomes тітонько when you speak to someone directly (the vocative case).",
        "whyS": "The company has announced plans to operate in Canada; until it does, local partners make the final delivery.",
        "sayC": [
          "Дякую, Тарасе!",
          "Thank you, Taras!"
        ],
        "sayS": [
          "Доставлено.",
          "Delivered."
        ]
      }
    ]
  },
  {
    "id": "D",
    "num": "59112233445566",
    "title": "A US online store to a Sumy locker",
    "short": "A teenager’s order, collected by her dad",
    "from": {
      "n": "A US online shop",
      "d": "Shipped via NP Shopping, the group’s service for buying from stores that don’t deliver to Ukraine."
    },
    "to": {
      "n": "Yurii",
      "d": "Recipient, Sumy. A veteran who lost his lower left leg in 2024. His daughter Dana, 16, placed the order on his account, with his card."
    },
    "contents": "A rainbow flag, a bisexual pride flag for her best friend, a pin badge. 0.4 kg.",
    "stops": [
      "US warehouse",
      "In the air",
      "Customs",
      "Kyiv",
      "Sumy locker"
    ],
    "steps": [
      {
        "n": 0,
        "ts": "2026-09-26T22:40",
        "p": "Dana’s bedroom, Sumy",
        "ua": "Замовлення оформлено",
        "en": "Order placed",
        "c": {
          "who": "Dana",
          "role": "Buyer, 16",
          "txt": "The shop doesn’t ship to Ukraine, so Dana uses NP Shopping: the app gives her a warehouse address in the United States, and the shop sends her order there. She asked her dad first; it’s his account and his card.",
          "arts": [
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Іра",
              "msgs": [
                {
                  "me": 1,
                  "ua": "Замовила прапори! Один для тебе 🏳️‍🌈",
                  "en": "I ordered the flags! One is for you."
                },
                {
                  "ua": "Аааа, дякую!!",
                  "en": "Aaah, thank you!!"
                }
              ]
            }
          ]
        },
        "s": {
          "who": "No one yet",
          "role": "The parcel doesn’t exist yet",
          "txt": "For now there is only an order in a US shop’s system and an address that belongs to the company’s warehouse."
        },
        "whyC": "NP Shopping offers addresses in countries including the US, UK, Germany, Poland, Italy, Spain, France, Czechia and Turkey for stores that won’t ship to Ukraine.",
        "whyS": "Forwarding services like this grew because many global stores stopped shipping to Ukraine, or never did.",
        "sayC": [
          "Я замовила прапори.",
          "I ordered some flags."
        ],
        "sayS": [
          "Чекаємо на посилку з магазину.",
          "We’re waiting for the parcel from the shop."
        ]
      },
      {
        "n": 0,
        "start": 1,
        "ts": "2026-10-01T15:10",
        "p": "NP Shopping warehouse, United States",
        "ua": "Прибуло на склад у США",
        "en": "Arrived at the US warehouse",
        "c": {
          "who": "Dana",
          "role": "Buyer",
          "txt": "The app is sluggish today (the DDoS attack of 1 October), but the notification gets through: the parcel has reached the warehouse.",
          "arts": [
            {
              "k": "push",
              "app": "NP Shopping",
              "ico": "np",
              "t": "15:12",
              "ttl": "Посилка прибула на склад у США",
              "body": "Готуємо до відправлення в Україну",
              "en": "Your parcel has arrived at the US warehouse. Preparing it for Ukraine."
            }
          ]
        },
        "s": {
          "who": "Jasmine",
          "role": "Warehouse associate, United States",
          "txt": "Jasmine scans the shop’s box against Dana’s account, weighs it and adds a label with a Ukrainian tracking number. She can read the Cyrillic on the screen now, after a year on the job, even if she can’t pronounce all of it."
        },
        "whyC": "Delivery from the US to Ukraine takes from about a week, the company says.",
        "whyS": "The group’s US partnership with UPS Store, launched in February 2026, made the US its 17th country outside Ukraine.",
        "sayC": [
          "Посилка вже на складі.",
          "The parcel is already at the warehouse."
        ],
        "sayS": [
          "Наліпку з номером приклеєно.",
          "The number label is on."
        ]
      },
      {
        "n": 1,
        "ts": "2026-10-03T06:00",
        "p": "Over the Atlantic",
        "ua": "Відправлено авіатранспортом",
        "en": "Sent by air",
        "c": {
          "who": "Dana",
          "role": "Buyer",
          "txt": "She checks the status between online lessons. Her school, like many in border regions, teaches partly online.",
          "arts": [
            {
              "k": "push",
              "app": "NP Shopping",
              "ico": "np",
              "t": "06:02",
              "ttl": "Відправлено авіатранспортом",
              "body": "Прямує до Європи",
              "en": "Sent by air. Heading to Europe."
            }
          ]
        },
        "s": {
          "who": "Air freight team",
          "role": "Nova Global",
          "txt": "Consolidated with hundreds of other orders, the parcel flies to Europe. With Ukrainian airspace closed, it will cross the border by truck."
        },
        "whyC": "The status says “Europe”, not “Ukraine”: no commercial flights have landed in Ukraine since February 2022.",
        "whyS": "Every cross-border route now ends with a truck, which turns border queues into delivery time.",
        "sayC": [
          "Посилка летить.",
          "The parcel is flying."
        ],
        "sayS": [
          "Рейс до Європи.",
          "A flight to Europe."
        ]
      },
      {
        "n": 2,
        "ts": "2026-10-06T11:30",
        "p": "Customs terminal, western Ukraine",
        "ua": "Митне оформлення",
        "en": "Customs clearance",
        "c": {
          "who": "Dana",
          "role": "Buyer",
          "txt": "Customs clearance. She worries for a moment about what customs will think of two pride flags. Nothing: it’s a textile item worth under €150.",
          "arts": [
            {
              "k": "push",
              "app": "NP Shopping",
              "ico": "np",
              "t": "11:31",
              "ttl": "Митне оформлення",
              "body": "Додаткові платежі не потрібні",
              "en": "Customs clearance. No additional payment needed."
            }
          ]
        },
        "s": {
          "who": "Larysa",
          "role": "Customs broker, Nova Global",
          "txt": "Larysa clears a batch of personal purchases. In August the company told customers that a Russian strike had destroyed one of Nova Global’s key customs terminals for these parcels; work moved to another warehouse, and the backlog took weeks to clear."
        },
        "whyC": "Personal purchases under €150 are still free of VAT in Ukraine. Parliament voted in October 2026 to change that, applying no earlier than July 2027.",
        "whyS": "Customs clearance is where a destroyed building turns into weeks of delay for thousands of people.",
        "sayC": [
          "Мито платити не треба.",
          "There’s no duty to pay."
        ],
        "sayS": [
          "Партія розмитнена.",
          "The batch is cleared."
        ]
      },
      {
        "n": 3,
        "ts": "2026-10-07T20:15",
        "p": "Sorting terminal, Kyiv region",
        "ua": "Прямує до Сум",
        "en": "On its way to Sumy",
        "c": {
          "who": "Dana",
          "role": "Buyer",
          "txt": "“On its way to Sumy.” She tells Ira it’ll be here tomorrow.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "20:16",
              "ttl": "Прямує до Сум",
              "body": "Доставка у поштомат",
              "en": "On its way to Sumy. Delivery to a parcel locker."
            }
          ]
        },
        "s": {
          "who": "Stepan",
          "role": "Truck driver",
          "txt": "Stepan drives the night run to Sumy, about 30 km from the Russian border. The company’s Sumy terminal was hit three times this summer: drones on 17 June, a jet drone on 25 July that killed three drivers he knew, and guided bombs on 28 August."
        },
        "whyC": "Sumy is one of the most frequently attacked cities in Ukraine because it is so close to the border.",
        "whyS": "Drivers on the Sumy run do the job knowing exactly what happened to their colleagues.",
        "sayC": [
          "Завтра буде в Сумах.",
          "It’ll be in Sumy tomorrow."
        ],
        "sayS": [
          "Їду на Суми.",
          "Driving to Sumy."
        ]
      },
      {
        "n": 4,
        "x": 1,
        "ts": "2026-10-08T02:10",
        "p": "Sumy, overnight",
        "ua": "Можлива затримка доставки",
        "en": "Possible delivery delay",
        "c": {
          "who": "Dana and Yurii",
          "role": "At home",
          "txt": "Shahed drones over the city. Dana and her dad sit in the corridor, the “two walls” spot. She reads the city administration’s channel aloud; he pretends to be asleep so she won’t worry.",
          "arts": [
            {
              "k": "push",
              "app": "Air Alert",
              "ico": "alert",
              "t": "01:48",
              "ttl": "Повітряна тривога!",
              "body": "Сумська область. Загроза ударних БпЛА.",
              "en": "Air-raid alert! Sumy region. Threat of attack drones."
            },
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Іра",
              "msgs": [
                {
                  "ua": "Ви як? У нас дуже гучно.",
                  "en": "How are you? It’s really loud here."
                },
                {
                  "me": 1,
                  "ua": "У коридорі з татом. Тримаємось.",
                  "en": "In the corridor with Dad. Holding on."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Tetiana",
          "role": "Office manager, regional support office",
          "txt": "A drone hits the building where the company’s regional support office rents two floors. It is night, so the office is empty. Tetiana gets the call at 02:30 and is there by seven with a broom, a laptop and a list of who will work from home. (A composite event, based on this summer’s real strikes on the company in Sumy.)",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Work chat",
              "title": "Офіс Суми",
              "msgs": [
                {
                  "from": "Tetiana",
                  "ua": "Прильот по будівлі. Всі вдома? Відпишіться.",
                  "en": "A hit on the building. Is everyone at home? Reply."
                },
                {
                  "from": "Colleague",
                  "ua": "Я вдома, все ок.",
                  "en": "I’m home, all OK."
                },
                {
                  "from": "Colleague",
                  "ua": "Теж ок. Завтра працюємо з дому?",
                  "en": "Also OK. Working from home tomorrow?"
                },
                {
                  "from": "Tetiana",
                  "ua": "Так. Бережіть себе.",
                  "en": "Yes. Take care."
                }
              ]
            }
          ]
        },
        "whyC": "Lockers keep working through nights like this; the next morning the city goes back to school and work.",
        "whyS": "Support offices don’t sort parcels, but payroll, recruitment and local operations all run from them. Losing one means everyone works from somewhere else.",
        "sayC": [
          "Ми в коридорі. Все добре.",
          "We’re in the corridor. All good."
        ],
        "sayS": [
          "Працюємо з дому.",
          "We’re working from home."
        ],
        "m": {
          "v": "c",
          "txt": "At 03:40 the all-clear comes. Dana falls asleep on the corridor floor with her head on her dad’s good knee. Yurii stays awake until it’s light, as he has since the front."
        }
      },
      {
        "n": 4,
        "ts": "2026-10-08T13:20",
        "p": "Parcel locker, Sumy",
        "ua": "Прибуло в поштомат",
        "en": "Arrived at the parcel locker",
        "c": {
          "who": "Yurii",
          "role": "Recipient",
          "txt": "Two notifications, a minute apart. One is Dana’s order. The other is addressed to him, from Lviv. He wasn’t expecting anything.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "13:21",
              "ttl": "Посилка в поштоматі",
              "body": "Відправник: NP Shopping",
              "en": "Parcel in the locker. Sender: NP Shopping."
            },
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "13:22",
              "ttl": "Посилка в поштоматі",
              "body": "Відправник: Львів",
              "en": "Parcel in the locker. Sender: Lviv."
            }
          ]
        },
        "s": {
          "who": "Mykola",
          "role": "Courier, Sumy",
          "txt": "Mykola loads the locker in the lobby of a supermarket. He glances at the windows across the street, boarded since summer, and works fast: in Sumy nobody lingers outside."
        },
        "whyC": "Parcels wait in a locker for five days free of charge, then go to the nearest branch.",
        "whyS": "Lockers mean fewer people queuing in one room. The company opened 748 new service points in frontline areas in the first half of 2026.",
        "sayC": [
          "Дві посилки?",
          "Two parcels?"
        ],
        "sayS": [
          "Поштомат заповнено.",
          "The locker is loaded."
        ]
      },
      {
        "n": 4,
        "done": 1,
        "ts": "2026-10-08T18:05",
        "p": "Parcel locker, Sumy",
        "ua": "Отримано",
        "en": "Received",
        "c": {
          "who": "Yurii",
          "role": "Recipient",
          "txt": "After his physiotherapy session Yurii opens both cells. Dana’s flags. And a pack of bright stickers ([[наліпка]]) from his prosthetist at Superhumans Center in Lviv, where he was fitted, with a note: “for the new leg”. In the supermarket doorway he sticks a sunflower on his prosthetic leg ([[протез]]).",
          "arts": [
            {
              "k": "chat",
              "app": "Telegram",
              "title": "Дана",
              "msgs": [
                {
                  "me": 1,
                  "ua": "Забрав твої прапори. І мені прийшли наліпки 😄",
                  "en": "Picked up your flags. And I got stickers!"
                },
                {
                  "ua": "Тату, ти найкращий! Покажи ногу!",
                  "en": "Dad, you’re the best! Show me the leg!"
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Mykola",
          "role": "Courier, Sumy",
          "txt": "By evening Mykola is three lockers further along his route. The locker reports two cells emptied."
        },
        "whyC": "Superhumans Center, which opened in 2023, provides prosthetics, rehabilitation and psychological support free to people injured in the war; by mid-2025 it had fitted more than 2,000 prosthetic limbs.",
        "whyS": "Every cell opened is one less parcel waiting in a city under fire.",
        "sayC": [
          "Тату, ти найкращий!",
          "Dad, you’re the best!"
        ],
        "sayS": [
          "Комірку звільнено.",
          "The cell is empty."
        ],
        "m": {
          "v": "c",
          "txt": "Dana hangs the [[райдужний прапор]] over her desk and sends Ira a photo. In a recent national survey, 72% of Ukrainians said LGBT+ people should have the same rights as other citizens, though Parliament had not passed a civil-partnership law at the time of that survey."
        }
      }
    ]
  },
  {
    "id": "E",
    "num": "20450912345678",
    "title": "A US lab to a frontline workshop",
    "short": "Drone electronics, from export licence to ground robot",
    "from": {
      "n": "Olesia",
      "d": "Engineer at a private avionics lab in Ohio. Born in Ternopil; moved to Chicago at nine."
    },
    "to": {
      "n": "Marta",
      "d": "Technician in a drone repair workshop near the front. Parcel collected by Sergeant Ostap."
    },
    "contents": "Six evaluation kits: prototype flight-control and navigation boards for reconnaissance drones, cables, documentation. No batteries.",
    "note": "This journey shows where Nova Post’s part begins and ends. The first legs run outside it; the waybill number above is only created in Lviv.",
    "stops": [
      "US lab",
      "Poland",
      "Lviv",
      "Frontline branch",
      "Workshop"
    ],
    "steps": [
      {
        "n": 0,
        "leg": "before",
        "ts": "2026-08-17T17:00",
        "p": "Avionics lab, Ohio",
        "ua": "Експортну ліцензію отримано",
        "en": "Export licence granted",
        "c": {
          "who": "Olesia",
          "role": "Engineer, sender",
          "txt": "After six weeks, the email arrives: the government has approved the export. The lab’s Ukrainian partner, a drone-electronics company in Lviv, is named as the end user, and the kits may be used only for testing.",
          "arts": [
            {
              "k": "mail",
              "from": "Lab compliance team",
              "sub": "Export authorization: approved",
              "body": "Shipment may proceed to the named end user in Lviv, Ukraine, for test and evaluation only. Keep all documents with the shipment."
            }
          ]
        },
        "s": {
          "who": "Priya",
          "role": "Export compliance officer",
          "txt": "Priya spent most of the summer on this box: classifying each part, documenting who will receive it and why, and checking every name against sanctions lists. Her rule is simple: if the paperwork isn’t perfect, nothing moves."
        },
        "whyC": "Drone electronics count as controlled technology. Exporting them legally takes a government licence and a declared end user, and that takes weeks.",
        "whyS": "Nova Post’s international service does not accept military or dual-use goods, so the first legs of this journey run outside it, through a specialist freight forwarder.",
        "sayC": [
          "Ліцензію отримано!",
          "The licence is through!"
        ],
        "sayS": [
          "Документи в порядку.",
          "The documents are in order."
        ]
      },
      {
        "n": 0,
        "leg": "before",
        "ts": "2026-08-19T22:00",
        "p": "Avionics lab, Ohio",
        "ua": "Пакування",
        "en": "Packing",
        "c": {
          "who": "Olesia",
          "role": "Engineer, sender",
          "txt": "She writes the contents list in English and, for her colleagues in Lviv, in Ukrainian too. She tucks a note into the top kit: «Удачі на випробуваннях!» (“Good luck with the tests!”)"
        },
        "s": {
          "who": "Dev",
          "role": "Lab technician",
          "txt": "Dev packs six kits in anti-static bags and foam, adds tamper-evident seals and leaves the batteries out. The lab in Lviv will use its own."
        },
        "whyC": "The boards travel without batteries: lithium batteries count as dangerous goods on aircraft and need separate paperwork.",
        "whyS": "Tamper-evident seals let every later handler see that nothing was opened on the way.",
        "sayC": [
          "Удачі на випробуваннях!",
          "Good luck with the tests!"
        ],
        "sayS": [
          "Пломби на місці.",
          "The seals are in place."
        ],
        "m": {
          "v": "c",
          "txt": "Olesia was nine when her family left Ternopil for Chicago. Her grandfather still lives there. She hasn’t told him exactly what she works on, only that it is “for ours”: «для наших»."
        }
      },
      {
        "n": 0,
        "leg": "before",
        "start": 1,
        "ts": "2026-08-20T19:00",
        "p": "Freight forwarder, Ohio",
        "ua": "Вантаж прийнято перевізником",
        "en": "Picked up by the freight forwarder",
        "c": {
          "who": "Olesia",
          "role": "Engineer, sender",
          "txt": "A truck from the forwarding company collects the crate. Tracking now runs on an air waybill number, not a parcel-company app."
        },
        "s": {
          "who": "Marcus",
          "role": "Freight forwarder",
          "txt": "Marcus’s company specialises in licensed shipments. He checks the export documents against the crate label before signing for it."
        },
        "whyC": "From here the shipment moves on an air waybill, the standard cargo document. A Nova Post number will only appear in Lviv.",
        "whyS": "Commercial flights have not landed in Ukraine since February 2022, so cargo for Ukraine flies to an EU airport and finishes by road.",
        "sayC": [
          "Вантаж поїхав.",
          "The cargo is on its way."
        ],
        "sayS": [
          "Документи звірено.",
          "The documents have been checked."
        ]
      },
      {
        "n": 1,
        "leg": "before",
        "ts": "2026-08-22T08:30",
        "p": "Airport, eastern Poland",
        "ua": "Прибуло до Польщі",
        "en": "Arrived in Poland",
        "c": {
          "who": "Yaroslav",
          "role": "CTO, Lviv partner company",
          "txt": "In Lviv, Yaroslav sees the update and books a slot with his customs broker for Monday."
        },
        "s": {
          "who": "Tomasz",
          "role": "Truck driver, Poland",
          "txt": "Tomasz loads the crate with other consignments for Ukraine and joins the queue of trucks heading for the border."
        },
        "whyC": "Eastern Poland is one of the main gateways for aid and equipment entering Ukraine.",
        "whyS": "Specialist cargo still waits in the same border queues as everyone else.",
        "sayC": [
          "Вантаж уже в Польщі.",
          "The cargo is already in Poland."
        ],
        "sayS": [
          "Черга на кордоні.",
          "A queue at the border."
        ]
      },
      {
        "n": 1,
        "leg": "before",
        "ts": "2026-08-24T15:20",
        "p": "Customs post, western Ukraine",
        "ua": "Митне оформлення",
        "en": "Customs clearance",
        "c": {
          "who": "Yaroslav",
          "role": "CTO, Lviv partner company",
          "txt": "Cleared. Yaroslav forwards the customs confirmation to Ohio with three exclamation marks."
        },
        "s": {
          "who": "Roksolana",
          "role": "Customs broker",
          "txt": "Roksolana matches the permit number, the export licence and the contents list line by line. One cable is described differently on two documents; she fixes it with a signed correction before the inspector asks."
        },
        "whyC": "Brave1, Ukraine’s state defence-technology cluster, publishes guidance on import permits for foreign technology sent for testing.",
        "whyS": "A permit number and a matching description are what turn a box of electronics into a legal import.",
        "sayC": [
          "Розмитнили!",
          "It’s cleared!"
        ],
        "sayS": [
          "Дозвіл на ввезення є.",
          "The import permit is here."
        ]
      },
      {
        "n": 2,
        "leg": "before",
        "ts": "2026-08-25T11:00",
        "p": "Partner company, Lviv",
        "ua": "Випробування",
        "en": "Testing",
        "c": {
          "who": "Yaroslav",
          "role": "CTO, Lviv partner company",
          "txt": "Four weeks of tests begin: first on the bench, then at a range in western Ukraine, far from the front. Two boards fail early. The lab in Ohio ships a fix as a software update overnight.",
          "arts": [
            {
              "k": "chat",
              "app": "Signal",
              "title": "Олеся (Ohio)",
              "msgs": [
                {
                  "ua": "Ярославе, плати вже у вас?",
                  "en": "Yaroslav, are the boards with you yet?"
                },
                {
                  "me": 1,
                  "ua": "Так! Починаємо випробування.",
                  "en": "Yes! Starting the tests."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Nazar",
          "role": "Test pilot",
          "txt": "Nazar flies each prototype until it breaks, writes down how, and flies it again after the fix. His notes go to Ohio every evening, translated by a colleague."
        },
        "whyC": "Through Brave1’s Test in Ukraine programme, launched in August 2025, foreign companies can send technology for trials by Ukrainian forces and receive a report.",
        "whyS": "Nothing goes to the front until it has been flown and broken at a range far from it.",
        "sayC": [
          "Ярославе, плати вже у вас?",
          "Yaroslav, are the boards with you yet?"
        ],
        "sayS": [
          "Перший політ — успішний.",
          "First flight: a success."
        ],
        "m": {
          "v": "s",
          "txt": "Nazar’s brother flies reconnaissance drones in the east. Every test feels to Nazar like a conversation with him. He doesn’t tell him which boards are being tested; he tells him to sleep."
        }
      },
      {
        "n": 2,
        "leg": "np",
        "ts": "2026-09-21T17:30",
        "p": "Nova Post branch, Lviv",
        "ua": "Відправлення прийнято у відділенні",
        "en": "Shipment accepted at the branch",
        "c": {
          "who": "Yaroslav",
          "role": "Sender, Lviv",
          "txt": "Six repacked kits, addressed to Sergeant Ostap at a frontline branch in eastern Ukraine. Ostap will pay one hryvnia with an Army+ barcode.",
          "arts": [
            {
              "k": "talk",
              "lines": [
                {
                  "sp": "Uliana",
                  "ua": "Що всередині?",
                  "en": "What’s inside?"
                },
                {
                  "sp": "Yaroslav",
                  "ua": "Електроніка для дронів, без акумуляторів.",
                  "en": "Drone electronics, no batteries."
                },
                {
                  "sp": "Uliana",
                  "ua": "Отримувач — військовий?",
                  "en": "Is the recipient military?"
                },
                {
                  "sp": "Yaroslav",
                  "ua": "Так, оплата через Армію+.",
                  "en": "Yes, payment via Army+."
                }
              ]
            },
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "17:32",
              "ttl": "Відправлення прийнято",
              "body": "Львів — прифронтове відділення",
              "en": "Shipment accepted. Lviv to a frontline branch."
            }
          ]
        },
        "s": {
          "who": "Uliana",
          "role": "Branch operator, Lviv",
          "txt": "Uliana asks the standard questions. Drone electronics are fine; weapons, their parts, ammunition and explosives are not, and loose or damaged lithium batteries are refused. Several boxes like this pass her counter every week."
        },
        "whyC": "This is where Nova Post comes in. Inside Ukraine it carries drone parts every day; a business report counted them among the most common items sent to the front.",
        "whyS": "The company has the right to check contents, and prohibited items are refused or removed.",
        "sayC": [
          "Електроніка для дронів, без акумуляторів.",
          "Drone electronics, no batteries."
        ],
        "sayS": [
          "Що всередині?",
          "What’s inside?"
        ]
      },
      {
        "n": 3,
        "leg": "np",
        "x": 1,
        "ts": "2026-09-21T23:10",
        "p": "Highway, heading east",
        "ua": "Роботу призупинено: повітряна тривога",
        "en": "Work paused: air-raid alert",
        "c": {
          "who": "Ostap",
          "role": "Recipient, sergeant",
          "txt": "Ostap sees “on its way”, then nothing for an hour. He knows what that means.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "23:12",
              "ttl": "Можлива затримка доставки",
              "body": "Через повітряну тривогу",
              "en": "Possible delivery delay because of an air-raid alert."
            }
          ]
        },
        "s": {
          "who": "Vasyl",
          "role": "Truck driver",
          "txt": "The new alert rules started three days ago: every site pauses on any alert, whatever the threat. Vasyl waits at a hub on the way while the sorting lines stand still, then drives on."
        },
        "whyC": "Domestic delivery across Ukraine takes about a day, the company says, but alerts add hours.",
        "whyS": "Since 18 September 2026 every company site stops work on any air-raid alert and can also close on its own threat monitoring.",
        "sayC": [
          "Знову тривога.",
          "Another alert."
        ],
        "sayS": [
          "Чекаємо відбою.",
          "We’re waiting for the all-clear."
        ],
        "m": {
          "v": "s",
          "txt": "Vasyl counts three alerts on the run east. He used to drive fruit from Moldova to Kyiv. Now he drives anything, and he has stopped asking what’s in the boxes."
        }
      },
      {
        "n": 3,
        "leg": "np",
        "ts": "2026-09-22T14:10",
        "p": "Frontline branch, eastern Ukraine",
        "ua": "Посилка у відділенні",
        "en": "At the branch",
        "c": {
          "who": "Ostap",
          "role": "Recipient, sergeant",
          "txt": "The parcel is in. The branch is 25 km from the front; Ostap will come tomorrow morning with the unit’s pick-up truck.",
          "arts": [
            {
              "k": "push",
              "app": "Nova Post",
              "ico": "np",
              "t": "14:11",
              "ttl": "Посилка у відділенні",
              "body": "Оплата: 1 грн через Армію+",
              "en": "Your parcel is at the branch. Payment: UAH 1 via Army+."
            }
          ]
        },
        "s": {
          "who": "Liudmyla",
          "role": "Branch operator",
          "txt": "Liudmyla stacks the box with the others for soldiers. Today the branch has closed twice on threat warnings from the company’s monitoring."
        },
        "whyC": "Parcels wait at a branch for five days free of charge.",
        "whyS": "Frontline branches close whenever monitoring flags a threat, so pick-up windows can be short.",
        "sayC": [
          "Посилка у відділенні.",
          "The parcel is at the branch."
        ],
        "sayS": [
          "Відділення знову працює.",
          "The branch is open again."
        ]
      },
      {
        "n": 3,
        "leg": "np",
        "npEnd": 1,
        "ts": "2026-09-23T09:20",
        "p": "Frontline branch, eastern Ukraine",
        "ua": "Відправлення отримано",
        "en": "Received",
        "c": {
          "who": "Ostap",
          "role": "Recipient, sergeant",
          "txt": "He shows the Army+ barcode, pays one hryvnia and checks the seals.",
          "arts": [
            {
              "k": "talk",
              "lines": [
                {
                  "sp": "Liudmyla",
                  "ua": "Код з Армії+?",
                  "en": "Your Army+ code?"
                },
                {
                  "sp": "Ostap",
                  "ua": "Ось.",
                  "en": "Here."
                },
                {
                  "sp": "Liudmyla",
                  "ua": "Бережіть себе.",
                  "en": "Take care of yourselves."
                },
                {
                  "sp": "Ostap",
                  "ua": "І ви.",
                  "en": "You too."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Liudmyla",
          "role": "Branch operator",
          "txt": "Handover complete. From here the parcel travels under military control, and Nova Post’s responsibility ends."
        },
        "whyC": "Nova Post’s part of the journey ends at this counter.",
        "whyS": "Branch staff hand over hundreds of parcels like this; what happens next is the unit’s business.",
        "sayC": [
          "Дякую! Бережіть себе.",
          "Thank you! Take care."
        ],
        "sayS": [
          "Бережіть себе.",
          "Take care of yourselves."
        ]
      },
      {
        "n": 3,
        "leg": "after",
        "ts": "2026-09-23T13:00",
        "p": "Road to a staging point",
        "ua": "Перевезення до позицій",
        "en": "Moving towards the positions",
        "c": {
          "who": "Ostap",
          "role": "Recipient, sergeant",
          "txt": "The last stretch of road runs under anti-drone netting. Ostap drives fast and doesn’t talk."
        },
        "s": {
          "who": "Ostap",
          "role": "Unit logistics",
          "txt": "At the staging point the kits are loaded into a waterproof box beside water, food and batteries for the positions."
        },
        "whyC": "Many roads near the front are now covered with anti-drone netting.",
        "whyS": "The last kilometres are the most dangerous. Units try to move as little as possible where Russian drones can see.",
        "sayC": [
          "Під сіткою безпечніше.",
          "It’s safer under the netting."
        ],
        "sayS": [
          "Вантаж готовий.",
          "The load is ready."
        ],
        "m": {
          "v": "c",
          "txt": "Ostap missed his daughter’s first day of school on 1 September. His wife sent a video: a huge bow, a bunch of flowers, and his daughter telling the camera that Dad is “at work”."
        }
      },
      {
        "n": 4,
        "leg": "after",
        "x": 1,
        "ts": "2026-09-23T21:40",
        "p": "The last kilometres",
        "ua": "Доставка наземним роботом",
        "en": "Delivery by ground robot",
        "c": {
          "who": "Marta",
          "role": "Recipient, workshop technician",
          "txt": "Marta knows the robot is coming tonight. She waits in the workshop, a reinforced dugout, with the kettle on.",
          "arts": [
            {
              "k": "chat",
              "ops": 1,
              "app": "Unit chat",
              "title": "Логістика",
              "msgs": [
                {
                  "from": "Kyrylo",
                  "ua": "Робот вийшов.",
                  "en": "The robot is out."
                },
                {
                  "from": "Kyrylo",
                  "ua": "Чекаємо, над лісосмугою дрон.",
                  "en": "Waiting, a drone over the tree line."
                },
                {
                  "from": "Kyrylo",
                  "ua": "Чисто. Рухаємось.",
                  "en": "Clear. Moving."
                },
                {
                  "from": "Marta",
                  "ua": "Прибув! Дякую 🙏",
                  "en": "It’s here! Thank you."
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Kyrylo",
          "role": "Ground-robot operator",
          "txt": "Kyrylo drives an [[НРК]] (a ground robot) from a shelter several kilometres back. It carries the box the last stretch, where people on foot are easy targets for drones. Tonight it waits forty minutes in a tree line for a Russian drone to leave."
        },
        "whyC": "Ukraine’s Ministry of Defence recorded about 112,000 ground-robot logistics and evacuation missions from January to August 2026, 25,143 of them in August alone.",
        "whyS": "Units earn points for robot missions that they can exchange on the Brave1 Market for more equipment.",
        "sayC": [
          "Робот уже їде.",
          "The robot is already on its way."
        ],
        "sayS": [
          "Чисто. Рухаємось.",
          "Clear. Moving."
        ],
        "m": {
          "v": "s",
          "txt": "The robots have names painted on them. This one is «Барсик» (Barsik), a classic Ukrainian cat’s name. Kyrylo pats it on the way out, every time."
        }
      },
      {
        "n": 4,
        "leg": "after",
        "done": 1,
        "ts": "2026-09-24T06:30",
        "p": "Drone workshop, near the front",
        "ua": "Отримано в майстерні",
        "en": "Received at the workshop",
        "c": {
          "who": "Marta",
          "role": "Recipient, workshop technician",
          "txt": "Marta opens the box at dawn, finds Olesia’s note, and fits the first board to a reconnaissance drone before breakfast.",
          "arts": [
            {
              "k": "chat",
              "app": "Signal",
              "title": "Ярослав (Lviv)",
              "msgs": [
                {
                  "me": 1,
                  "ua": "Плати отримали. Перший виліт сьогодні.",
                  "en": "We got the boards. First flight today."
                },
                {
                  "ua": "Чекаємо звіт. Дякуємо!",
                  "en": "We’ll wait for your report. Thank you!"
                }
              ]
            }
          ]
        },
        "s": {
          "who": "Marta",
          "role": "Workshop technician",
          "txt": "The [[майстерня]] repairs, adapts and tests equipment every day. Her notes on these boards will be blunt; that is the point."
        },
        "whyC": "From a lab in Ohio to a dugout workshop: two countries, two customs posts, one Nova Post waybill and a robot.",
        "whyS": "Workshops near the front fix and adapt equipment daily, and their feedback goes straight back to manufacturers.",
        "sayC": [
          "Плати отримали.",
          "We got the boards."
        ],
        "sayS": [
          "Перший виліт сьогодні.",
          "First flight today."
        ]
      },
      {
        "n": 4,
        "leg": "after",
        "ts": "2026-10-05T16:00",
        "p": "Back to Lviv and Ohio",
        "ua": "Звіт надіслано",
        "en": "Report sent",
        "c": {
          "who": "Olesia",
          "role": "Engineer, sender",
          "txt": "The field report reaches Ohio, translated from Ukrainian: what worked, what failed, and three requests for the next version. The fix ships as a software update. No parcel needed.",
          "arts": [
            {
              "k": "mail",
              "from": "Lviv partner company",
              "sub": "Field report: evaluation kits",
              "body": "Summary of two weeks’ use at the front, with the unit’s three requests for the next version. Full notes attached."
            }
          ]
        },
        "s": {
          "who": "Yaroslav",
          "role": "CTO, Lviv partner company",
          "txt": "Yaroslav merges the workshop’s notes with Nazar’s test logs and sends one report to Ohio. Then he orders the next batch of boards."
        },
        "whyC": "In July 2026 Ukraine and the United States signed a statement of intent on drone cooperation, including testing.",
        "whyS": "The fastest part of the whole journey is the last one: feedback, sent in minutes.",
        "sayC": [
          "Дякуємо за звіт!",
          "Thank you for the report!"
        ],
        "sayS": [
          "Наступна партія вже в роботі.",
          "The next batch is already under way."
        ],
        "m": {
          "v": "c",
          "txt": "That evening her grandfather calls from Ternopil and asks, as he always does, whether she is eating properly. She says yes, and that her work went well. He says «Молодець» (“Well done”) and doesn’t ask what it was."
        }
      }
    ]
  }
];

export const STOPS_UA = {
  "A": [
    "Київ",
    "Сортувальний хаб",
    "У дорозі",
    "Харків",
    "Фронт"
  ],
  "B": [
    "Харків",
    "Львів",
    "Кордон",
    "Польща",
    "Варшава"
  ],
  "C": [
    "Поштомат, Львів",
    "Хаб, Львів",
    "Польща",
    "Канада",
    "Едмонтон"
  ],
  "D": [
    "Склад у США",
    "У повітрі",
    "Митниця",
    "Київ",
    "Поштомат, Суми"
  ],
  "E": [
    "Лабораторія, США",
    "Польща",
    "Львів",
    "Прифронтове відділення",
    "Майстерня"
  ]
};

export const C128 = [
  "212222",
  "222122",
  "222221",
  "121223",
  "121322",
  "131222",
  "122213",
  "122312",
  "132212",
  "221213",
  "221312",
  "231212",
  "112232",
  "122132",
  "122231",
  "113222",
  "123122",
  "123221",
  "223211",
  "221132",
  "221231",
  "213212",
  "223112",
  "312131",
  "311222",
  "321122",
  "321221",
  "312212",
  "322112",
  "322211",
  "212123",
  "212321",
  "232121",
  "111323",
  "131123",
  "131321",
  "112313",
  "132113",
  "132311",
  "211313",
  "231113",
  "231311",
  "112133",
  "112331",
  "132131",
  "113123",
  "113321",
  "133121",
  "313121",
  "211331",
  "231131",
  "213113",
  "213311",
  "213131",
  "311123",
  "311321",
  "331121",
  "312113",
  "312311",
  "332111",
  "314111",
  "221411",
  "431111",
  "111224",
  "111422",
  "121124",
  "121421",
  "141122",
  "141221",
  "112214",
  "112412",
  "122114",
  "122411",
  "142112",
  "142211",
  "241211",
  "221114",
  "413111",
  "241112",
  "134111",
  "111242",
  "121142",
  "121241",
  "114212",
  "124112",
  "124211",
  "411212",
  "421112",
  "421211",
  "212141",
  "214121",
  "412121",
  "111143",
  "111341",
  "131141",
  "114113",
  "114311",
  "411113",
  "411311",
  "113141",
  "114131",
  "311141",
  "411131",
  "211412",
  "211214",
  "211232",
  "2331112"
];

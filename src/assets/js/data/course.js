// Original language-learning examples. Dialogues, messages and opening hours
// below are fictional practice material, not live company instructions.
export const WORDS = [
  {key:'посилка',uk:'Ця посилка для моєї сестри.',en:'This parcel is for my sister.'},
  {key:'відділення',uk:'Де найближче відділення?',en:'Where is the nearest branch?'},
  {key:'поштомат',uk:'Я заберу посилку з поштомата.',en:'I will collect the parcel from the locker.'},
  {key:'експрес-накладна',uk:'Ось номер експрес-накладної.',en:'Here is the express waybill number.'},
  {key:'відправлення',uk:'Ваше відправлення вже в дорозі.',en:'Your shipment is already on its way.'},
  {key:'доставка',uk:'Скільки коштує доставка?',en:'How much does delivery cost?'},
  {key:"кур'єр",uk:'Кур’єр принесе посилку завтра.',en:'The courier will bring the parcel tomorrow.'},
  {key:'митниця',uk:'Посилка проходить митницю.',en:'The parcel is going through customs.'},
  {key:'кордон',uk:'Машина перетинає кордон.',en:'The vehicle is crossing the border.'},
  {key:'комірка',uk:'Відкрийте комірку в поштоматі.',en:'Open the compartment in the parcel locker.'},
  {key:'черга',uk:'У відділенні невелика черга.',en:'There is a short queue at the branch.'},
  {key:'укриття',uk:'Підкажіть, будь ласка, де укриття.',en:'Could you please tell me where the shelter is?'}
];

export const UPDATES = [
  {uk:'Експрес-накладну створено.',en:'The express waybill has been created.',question:'What is definitely known from this update?',options:[
    {uk:'Номер уже є, але посилку могли ще не передати.',en:'There is a number, but the parcel may not have been handed over yet.'},
    {uk:'Посилку вже отримано.',en:'The parcel has already been collected.'},
    {uk:'Кур’єр уже біля дверей.',en:'The courier is already at the door.'}],answer:0,explanation:'A waybill is a record. Creating it does not by itself mean the box has been handed over.'},
  {uk:'Посилка прямує до відділення.',en:'The parcel is heading to the branch.',question:'Can the recipient collect it yet, based on this message?',options:[
    {uk:'Так, вона вже у відділенні.',en:'Yes, it is already at the branch.'},
    {uk:'Ні, вона ще в дорозі.',en:'No, it is still on its way.'},
    {uk:'Її вже повернули відправнику.',en:'It has already been returned to the sender.'}],answer:1,explanation:'Прямує means it is heading somewhere. It has not arrived at that destination yet.'},
  {uk:'Посилка прибула до відділення.',en:'The parcel has arrived at the branch.',question:'Where is the parcel now?',options:[
    {uk:'Вона ще на митниці.',en:'It is still at customs.'},
    {uk:'Її вже забрав отримувач.',en:'The recipient has already collected it.'},
    {uk:'Вона вже у відділенні.',en:'It is already at the branch.'}],answer:2,explanation:'Прибула means it has arrived. Arrival at a branch and collection by a person are different events.'},
  {uk:'Посилку отримано.',en:'The parcel has been collected.',question:'Which event is reported?',options:[
    {uk:'Отримувач забрав посилку.',en:'The recipient collected the parcel.'},
    {uk:'Відправник створив накладну.',en:'The sender created a waybill.'},
    {uk:'Посилка перетинає кордон.',en:'The parcel is crossing the border.'}],answer:0,explanation:'Отримано reports receipt. The ending -но lets the update focus on the completed action.'}
];

export const DIALOGUES = [
  {id:'send',title:'Send a parcel',situation:'You are sending books to a friend in Lviv. You will pay for delivery.',turns:[
    {uk:'Добрий день. Що бажаєте надіслати?',en:'Hello. What would you like to send?',question:'Choose a reply that fits the situation.',options:[
      {uk:'Я хочу відправити посилку до Львова.',en:'I would like to send a parcel to Lviv.'},
      {uk:'Я хочу отримати посилку.',en:'I would like to collect a parcel.'},
      {uk:'Посилка вже прибула.',en:'The parcel has already arrived.'}],answer:0,explanation:'Хочу + an infinitive is a useful frame: хочу відправити, хочу отримати, хочу оплатити.'},
    {uk:'Хто оплачує доставку?',en:'Who is paying for delivery?',question:'You are paying. What do you say?',options:[
      {uk:'Посилка для друга.',en:'The parcel is for a friend.'},
      {uk:'Відправник, тобто я.',en:'The sender, that is, me.'},
      {uk:'Завтра після занять.',en:'Tomorrow after classes.'}],answer:1,explanation:'Відправник is the sender; отримувач is the recipient. Тобто means “that is”.'},
    {uk:'Перевірте, будь ласка, номер телефону отримувача.',en:'Please check the recipient’s phone number.',question:'The number is right. Confirm it politely.',options:[
      {uk:'Де найближче відділення?',en:'Where is the nearest branch?'},
      {uk:'Скільки коштує коробка?',en:'How much does the box cost?'},
      {uk:'Так, усе правильно. Дякую.',en:'Yes, everything is correct. Thank you.'}],answer:2,explanation:'Усе правильно is a short confirmation. Дякую makes the reply courteous.'}
  ]},
  {id:'collect',title:'Collect a parcel',situation:'You have a waybill number and want to collect your parcel. You would like to pay by card.',turns:[
    {uk:'Ви хочете відправити чи отримати посилку?',en:'Would you like to send or collect a parcel?',question:'You are collecting. Choose your reply.',options:[
      {uk:'Відправити до Києва.',en:'Send it to Kyiv.'},
      {uk:'Отримати. Ось номер накладної.',en:'Collect it. Here is the waybill number.'},
      {uk:'Посилка для моєї сестри.',en:'The parcel is for my sister.'}],answer:1,explanation:'Отримати means to receive. Ось introduces something you are showing or handing over.'},
    {uk:'Як вас звати?',en:'What is your name?',question:'Introduce yourself.',options:[
      {uk:'Мене звати Алекс.',en:'My name is Alex.'},
      {uk:'Моя посилка в дорозі.',en:'My parcel is on its way.'},
      {uk:'Мені потрібна коробка.',en:'I need a box.'}],answer:0,explanation:'Мене звати… is the standard introduction. Вас is the polite form of “you” in the question.'},
    {uk:'Можна оплатити карткою.',en:'You can pay by card.',question:'Accept the offer.',options:[
      {uk:'Вона прибула вчора.',en:'It arrived yesterday.'},
      {uk:'Де ваш номер телефону?',en:'Where is your phone number?'},
      {uk:'Добре. Я оплачу карткою.',en:'All right. I will pay by card.'}],answer:2,explanation:'Карткою means “by card”. Compare Новою поштою: both use the instrumental to express a means.'}
  ]},
  {id:'help',title:'Ask for clarification',situation:'You are learning Ukrainian. Ask for information and clarification without switching languages immediately.',turns:[
    {uk:'Ваша посилка ще в дорозі.',en:'Your parcel is still on its way.',question:'Ask when it will arrive.',options:[
      {uk:'Скільки коштує листівка?',en:'How much does a postcard cost?'},
      {uk:'Коли вона прибуде?',en:'When will it arrive?'},
      {uk:'Мене звати Алекс.',en:'My name is Alex.'}],answer:1,explanation:'Коли asks “when”. Вона refers back to посилка, a feminine noun.'},
    {uk:'Вам потрібен номер експрес-накладної.',en:'You need the express waybill number.',question:'You did not catch the sentence. Ask the speaker to repeat it.',options:[
      {uk:'Ні, я не відправляю коробку.',en:'No, I am not sending a box.'},
      {uk:'Я заплачу завтра.',en:'I will pay tomorrow.'},
      {uk:'Перепрошую, повторіть, будь ласка.',en:'Excuse me, please repeat that.'}],answer:2,explanation:'Повторіть, будь ласка is a polite request you can reuse in almost any conversation.'},
    {uk:'Це експрес-накладна.',en:'This is an express waybill.',question:'Ask about the unfamiliar word.',options:[
      {uk:'Що означає слово «накладна»?',en:'What does the word “waybill” mean?'},
      {uk:'Хто оплачує доставку?',en:'Who pays for delivery?'},
      {uk:'Ось моя картка.',en:'Here is my card.'}],answer:0,explanation:'Що означає слово…? lets you keep learning within the conversation.'}
  ]}
];

export const READINGS = [
  {id:'notice',level:'A2',title:'A collection notice',uk:'Добрий день, Олено! Ваша посилка вже у відділенні № 8. Це книжки зі Львова. Відділення працює до 18:00. Якщо сьогодні не встигаєте, приходьте завтра.',en:'Hello, Olena! Your parcel is already at branch No. 8. It contains books from Lviv. The branch is open until 18:00. If you cannot make it today, come tomorrow.',questions:[
    {question:'What does 18:00 tell Olena?',options:[{uk:'Час закриття відділення.',en:'The branch’s closing time.'},{uk:'Час відправлення посилки.',en:'The time the parcel was sent.'},{uk:'Час прибуття кур’єра.',en:'The courier’s arrival time.'}],answer:0,explanation:'До 18:00 means “until 18:00”. Here it describes opening hours.'},
    {question:'What should Olena do if she cannot come today?',options:[{uk:'Надіслати нову посилку.',en:'Send a new parcel.'},{uk:'Прийти завтра.',en:'Come tomorrow.'},{uk:'Змінити адресу.',en:'Change the address.'}],answer:1,explanation:'The last sentence gives the alternative: приходьте завтра.'}
  ]},
  {id:'books',level:'A2–B1',title:'Books between two cities',uk:'Тарас навчається у Львові. Його сестра Марія живе в Києві. У понеділок Тарас надсилає їй дві книжки й листівку. Увечері в застосунку написано: «Посилка в дорозі». У вівторок Марія отримує інше повідомлення: «Посилка у відділенні». Вона хоче забрати її після занять. Тарас питає, чи все добре. Марія відповідає: «Так, номер накладної в мене є. Дякую за книжки!»',en:'Taras studies in Lviv. His sister Mariia lives in Kyiv. On Monday he sends her two books and a postcard. That evening the app says the parcel is on its way. On Tuesday Mariia receives a different message: the parcel is at the branch. She wants to collect it after classes. Taras asks whether everything is all right. She replies that she has the waybill number and thanks him for the books.',questions:[
    {question:'Who sends the parcel?',options:[{uk:'Марія.',en:'Mariia.'},{uk:'Кур’єр.',en:'The courier.'},{uk:'Тарас.',en:'Taras.'}],answer:2,explanation:'Тарас надсилає їй… names the sender. Їй means “to her”, referring to Mariia.'},
    {question:'Which update tells Mariia she can plan a visit to the branch?',options:[{uk:'Посилка у відділенні.',en:'The parcel is at the branch.'},{uk:'Посилка в дорозі.',en:'The parcel is on its way.'},{uk:'Накладну створено.',en:'The waybill has been created.'}],answer:0,explanation:'У відділенні tells you where the parcel is now. В дорозі describes an earlier stage.'}
  ]},
  {id:'pause',level:'B1',title:'A pause at the counter',uk:'Ірина приходить у відділення, щоб отримати посилку. Раптом зникає світло. Працівниця просить трохи почекати. Ірина не розуміє одного слова й каже: «Перепрошую, повторіть, будь ласка». Працівниця пояснює повільніше: посилка тут, але зараз потрібно зачекати. Ірина сідає й пише подрузі, що прийде пізніше. Через кілька хвилин роботу відновлюють. Ірина отримує посилку й дякує за допомогу.',en:'Iryna comes to the branch to collect a parcel. Suddenly the power goes out. The employee asks her to wait a little. Iryna does not understand one word and asks her to repeat it. The employee explains more slowly: the parcel is here, but they need to wait. Iryna sits down and messages her friend that she will be late. Work resumes a few minutes later. Iryna collects the parcel and thanks the employee for her help.',questions:[
    {question:'Why does Iryna ask the employee to repeat herself?',options:[{uk:'Вона загубила номер накладної.',en:'She lost the waybill number.'},{uk:'Вона не зрозуміла одного слова.',en:'She did not understand one word.'},{uk:'Посилку повернули відправнику.',en:'The parcel was returned to the sender.'}],answer:1,explanation:'Не розуміє одного слова explains the request. The story does not say she lost her number.'},
    {question:'What happens at the end?',options:[{uk:'Ірина йде без посилки.',en:'Iryna leaves without the parcel.'},{uk:'Ірина надсилає лист.',en:'Iryna sends a letter.'},{uk:'Ірина отримує посилку.',en:'Iryna collects the parcel.'}],answer:2,explanation:'The final sentence uses отримує: she receives the parcel and thanks the employee.'}
  ]}
];

const timemark = Date.now() - 10000000;

const babushkaMessages = [];

for (let i = 0; i < 150; i += 1) {
  babushkaMessages.push({
    _id: i,
    userId: 'babushka',
    message: 'Ты же там у меня небось голодаешь снова, внучок!',
    isRead: false,
    time: timemark + (20000 * i),
  });
}

export default [
  {
    name: 'Deo Iuvante',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/2494140?s=460&v=4',
    messages: [
      {
        _id: 1,
        userId: 'pistch',
        message: 'Всем привет!',
        isRead: true,
        time: timemark,
      },
      {
        _id: 2,
        userId: 'ilyademukh',
        message: 'И тебе привет',
        isRead: false,
        time: timemark + 60000,
      },
      {
        _id: 3,
        userId: 'ilyademukh',
        message: 'Здравствуй',
        isRead: false,
        time: timemark + 80000,
      },
      {
        _id: 4,
        userId: 'denisbalyko',
        message: 'Товарищи, презентация на носу! Доделывать свои компоненты пора',
        isRead: false,
        time: timemark + 150000,
      },
      {
        _id: 5,
        userId: 'everybody',
        message: 'И так сойдёт!',
        isRead: false,
        time: timemark + 180000,
      },
    ],
  },
  {
    name: 'Бабушка',
    avatarUrl: 'http://www.sonarium.ru/wp-content/uploads/2013/09/babushka-318x400.jpg',
    messages: babushkaMessages,
  },
  {
    name: 'Эмма Уотсон',
    avatarUrl: 'http://www.purehdwallpaper.com/thumbs/emma-watson-angel-smile-t2.jpg',
    messages: [],
  },
];

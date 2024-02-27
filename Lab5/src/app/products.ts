export interface Product {
  likes: number;
  id: number;
  name: string;
  imageUrl: string[];
  price: number;
  rating: number;
  description: string;
  link: string;
  currentImage: string;
  category: string,
}


export const products = [
  {
    category: 'Смартфоны',
    likes: 0,
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    price: 614627,
    rating: 4.5,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.'
  },
  {
    category: 'Смартфоны',
    likes: 0,
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    price: 298395,
    rating: 5,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.'
  },
  {
    category: 'Аксессуары',
    likes: 0,
    id: 3,
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
    price: 2169,
    rating: 4.7,
    description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.'
  },
  {
    category: 'Смартфоны',
    likes: 0,
    id: 4,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium'],
    currentImage:'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    price: 374320,
    rating: 4.9,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.'
  },
  {
    category: 'Смартфоны',
    likes: 0,
    id: 5,
    name: 'Смартфон Apple iPhone 14 128Gb сиреневый',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h33/hf7/64401467899934.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hed/hd4/64401469243422.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h63/64401473536030.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hf7/64401467899934.jpg?format=gallery-medium',
    price: 322143,
    rating: 5,
    description: 'В iPhone 14 был обновлен экран блокировки. Он стал более ярким и красочным, с возможностью выбора различных тем и обоев. Появилась функция «Ночной режим», которая автоматически переключает экран на черный цвет ночью, чтобы не мешать сну.'
  },
  {
    category: 'Часы',
    likes: 0,
    id: 6,
    name: 'Смарт-часы Apple Watch SE 40 мм черный',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h2d/63868235120670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h47/63868238200862.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
    price: 129083,
    rating: 4.9,
    description: 'Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности. Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.'
  },
  {
    category: 'Аксессуары',
    likes: 0,
    id: 7,
    name: 'Чехол Ala case для iPhone 11 прозрачный',
    link: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium',
    price: 137,
    rating: 3,
    description: 'Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%. Полная защита камеры и выступающие над поверхностью экрана бортики - создают дополнительную защиту для экрана и камеры телефона. Кристально- прозрачный, тонкий и пластичный материал плотно облегает корпус смартфона, сохраняя стиль и индивидуальность гаджета.'
  },
  {
    category: 'Аксессуары',
    likes: 0,
    id: 8,
    name: 'Кабель Apple USB Type-C - Lightning 1 м',
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h3a/63829405630494.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-medium',
    price: 1751,
    rating: 4.1,
    description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки, либо к сетевому адаптеру питания Apple USB Type-C мощностью 18 Вт, 20 Вт, 29 Вт, 30 Вт, 61 Вт, 87 Вт или 96 Вт.'
  },
  {
    category: 'Смартфоны',
    likes: 0,
    id: 9,
    name: 'Смартфон Apple iPhone 13 128Gb розовыйй',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/64000138313758.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h89/hd5/64000136019998.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium',
    price: 288761,
    rating: 4.5,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.'
  },
  {
    category: 'Часы',
    likes: 0,
    id: 10,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum starlight-бежевый',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-starlight-bezhevyi-106585021/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hd4/h1c/64378501791774.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h50/64378504642590.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h1c/64378501791774.jpg?format=gallery-medium',
    price: 186307,
    rating: 4,
    description: 'Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности. Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.'
  },
  {
    category: 'Часы',
    likes: 0,
    id: 11,
    name: 'Смарт-часы Apple Watch Series 9 GPS M/L 45 мм синий-черный',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h0b/83874224865310.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hea/h87/83874224930846.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
    price: 211919,
    rating: 4.8,
    description: 'Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности. Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.'
  },
  {
    category: 'Часы',
    likes: 0,
    id: 12,
    name: 'Смарт-часы Apple Watch SE 2 Gen (2023) GPS M/L 44 мм черно-синий',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2023-gps-m-l-44-mm-cherno-sinii-114111998/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h88/h5e/84373305294878.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h2d/84373305360414.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h36/hba/84373305425950.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h5e/84373305294878.jpg?format=gallery-medium',
    price: 133797 ,
    rating: 4.6,
    description: 'Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности. Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.'
  },
  {
    category: 'Аксессуары',
    likes: 0,
    id: 13,
    name: 'Кабель Apple USB Type-C - Lightning 2 м',
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-2-m-100498989/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hab/h52/63866854604830.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h52/63866854604830.jpg?format=gallery-medium',
    price: 1662,
    rating: 3.9,
    description: 'C помощью этого кабеля вы сможете подключить iPhone, iPad или iPod с разъёмом Lightning к устройствам с разъёмом USB C или Thunderbolt 3 (USB C) — например, к iPad для зарядки или к Mac для зарядки и синхронизации.'
  },
  {
    category: 'Аксессуары',
    likes: 0,
    id: 14,
    name: 'Зарядное устройство Samsung EP-TA800NWEGRU белый',
    link: 'https://kaspi.kz/shop/p/samsung-ep-ta800nwegru-belyi-101115063/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/hfb/64032027639838.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h51/h77/64032030130206.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hc5/64032032227358.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/hfb/64032027639838.jpg?format=gallery-medium',
    price: 1830,
    rating: 3.5,
    description: 'Поддерживайте заряд ваших устройств с помощью функции супербыстрой зарядки. Сетевое зарядное устройство с выходной мощностью 25 Вт позволит максимально быстро зарядить совместимый со стандартом супербыстрой зарядки смартфон или планшет. Помимо быстрой зарядки сетевое зарядное устройство может работать и в обычном режиме, тем самым поддерживая широкий модельный ряд мобильных устройств. Однако максимальная скорость зарядки при использовании данного адаптера питания достигается только в устройствах с поддержкой стандарта Power Delivery 3.0.'
  },
  {
    category: 'Аксессуары',
    likes: 0,
    id: 15,
    name: 'Чехол G-Case для Apple iPhone 11 прозрачный',
    link: 'https://kaspi.kz/shop/p/g-case-dlja-apple-iphone-11-prozrachnyi-104505586/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h96/h43/64439548149790.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h96/h43/64439548149790.jpg?format=gallery-medium',
    price: 499,
    rating: 5,
    description: 'Классный чехол'
  },
  {
    category: 'Ноутбуки',
    likes: 0,
    id: 16,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
    price: 399972,
    rating: 5,
    description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.'
  },
  {
    category: 'Ноутбуки',
    likes: 0,
    id: 17,
    name: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he1/h16/64091880357918.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9b/hd0/64091886911518.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium',
    price: 407884,
    rating: 4.9,
    description: '13-дюймовый MacBook Air 2020 года с процессором M1 с момента выхода стал сенсацией. Невероятно тонкий (всего 41 мм в самом тонком месте) и лёгкий (1,29 кг), он работает совершенно бесшумно, а для зарядки компьютера достаточно адаптер мощностью 30 Вт. Переход Apple на собственные процессоры стал, без преувеличения, одной из главных сенсаций 2020 года. Первыми серийными компьютерами, стали MacBook Pro, MacBook Air и Mac mini, представленные осенью 2020.'
  },
  {
    category: 'Ноутбуки',
    likes: 0,
    id: 18,
    name: 'Ноутбук Apple MacBook Air 13 MLY33 черный',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h90/h16/64506823475230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcd/h1c/64506827669534.jpg?format=gallery-medium'],
    currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=gallery-medium',
    price: 548880,
    rating: 5,
    description: 'Обновленная в 2022 году линейка MacBook Air компании Apple, как и ранее, объединяет ультрабуки в тонком (11 мм) и легком (1.24 кг) алюминиевом корпусе. Главным отличием на фоне моделей 2020-го является чуть подросшая за счет утончения рамок диагональ экрана (13.6 дюйма на фоне 13.3) и новая мобильная платформа M2 с 8-ю или 10-ю графическими ядрами. Кроме того апгрейд затронул аудиосистему (вместо двух динамиков тут используются четыре) и аккумуляторную батарею. Последняя стала более емкой (хотя автономность в свете прироста размеров экрана осталась на тех же значениях до 18 часов) и теперь поддерживает быструю зарядку (в тандеме с адаптером на 67 Вт, который необходимо приобретать отдельно).'
  },
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

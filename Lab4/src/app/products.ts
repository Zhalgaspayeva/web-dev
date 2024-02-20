export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  description: string;
  link: string;
}


export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    price: 614627,
    rating: 4.5,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    price: 298395,
    rating: 5,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.'
  },
  {
    id: 3,
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
    price: 2169,
    rating: 4.7,
    description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.'
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    price: 374320,
    rating: 4.9,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.'
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 128Gb сиреневый',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hf7/64401467899934.jpg?format=gallery-medium',
    price: 322143,
    rating: 5,
    description: 'В iPhone 14 был обновлен экран блокировки. Он стал более ярким и красочным, с возможностью выбора различных тем и обоев. Появилась функция «Ночной режим», которая автоматически переключает экран на черный цвет ночью, чтобы не мешать сну.'
  },
  {
    id: 6,
    name: 'Смарт-часы Apple Watch SE 40 мм черный',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
    price: 129083,
    rating: 4.9,
    description: 'Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности. Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.'
  },
  {
    id: 7,
    name: 'Чехол Ala case для iPhone 11 прозрачный',
    link: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium',
    price: 137,
    rating: 3,
    description: 'Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%. Полная защита камеры и выступающие над поверхностью экрана бортики - создают дополнительную защиту для экрана и камеры телефона. Кристально- прозрачный, тонкий и пластичный материал плотно облегает корпус смартфона, сохраняя стиль и индивидуальность гаджета.'
  },
  {
    id: 8,
    name: 'Кабель Apple USB Type-C - Lightning 1 м',
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-medium',
    price: 1751,
    rating: 4.1,
    description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки, либо к сетевому адаптеру питания Apple USB Type-C мощностью 18 Вт, 20 Вт, 29 Вт, 30 Вт, 61 Вт, 87 Вт или 96 Вт.'
  },
  {
    id: 9,
    name: 'Смартфон Apple iPhone 13 128Gb розовыйй',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium',
    price: 288761,
    rating: 4.5,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.'
  },
  {
    id: 10,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum starlight-бежевый',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-starlight-bezhevyi-106585021/?c=750000000',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h1c/64378501791774.jpg?format=gallery-medium',
    price: 186307,
    rating: 4,
    description: 'Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности. Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

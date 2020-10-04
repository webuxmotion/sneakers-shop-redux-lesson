const SHOP_DATA = {
  adidas: {
    id: 1,
    title: 'Adidas',
    routeName: 'adidas',
    items: [
      {
        id: 1,
        name: 'ZX 2K BOOST SHOES',
        image: 'adidas-1.jpg',
        price: 150
      },
      {
        id: 2,
        name: 'X9000L4 SHOES',
        image: 'adidas-2.jpg',
        price: 150
      },
      {
        id: 3,
        name: 'ULTRABOOST 20 SHOES',
        image: 'adidas-3.jpg',
        price: 180
      },
      {
        id: 4,
        name: 'NITE JOGGER SHOES',
        image: 'adidas-4.jpg',
        price: 96,
        oldPrice: 120
      },
      {
        id: 5,
        name: 'OZWEEGO SHOES',
        image: 'adidas-5.jpg',
        price: 110
      },
    ]
  },
  nike: {
    id: 2,
    title: 'Nike',
    routeName: 'nike',
    items: [
      {
        id: 6,
        name: 'NIKE AIR ZOOM PEGASUS 35',
        image: 'nike-1.webp',
        price: 170
      },
      {
        id: 7,
        name: "Nike P-6000",
        image: 'nike-2.png',
        price: 120
      },
    ]
  },
  puma: {
    id: 3,
    title: 'Puma',
    routeName: 'puma',
    items: [
      {
        id: 8,
        name: "PUMA Men's LQDCELL Optic Sheer Shoes",
        image: 'puma-1.webp',
        price: 100
      },
      {
        id: 9,
        name: "Puma Men's Uproar Hybrid Court 'Spectra'",
        image: 'puma-2.webp',
        price: 80,
        oldPrice: 120
      },
    ]
  },
  'new-balance': {
    id: 4,
    title: 'New Balance',
    routeName: 'new-balance',
    items: [
      {
        id: 10,
        name: "New Balance Women's Fresh Foam ROAV Running",
        image: 'new-balance-1.webp',
        price: 100,
        oldPrice: 110
      },
      {
        id: 11,
        name: "New Balance Women's 680v5 D Wide Width Running",
        image: 'new-balance-2.webp',
        price: 90
      },
    ]
  },
  balenciaga: {
    id: 5,
    title: 'Balenciaga',
    routeName: 'balenciaga',
    items: [
      {
        id: 12,
        name: "TRIPLE S SNEAKER",
        image: 'balenciaga-1.png',
        price: 975
      },
    ]
  }
};

export default SHOP_DATA;

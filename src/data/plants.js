const createPlaceholder = (label, accent) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" width="320" height="220"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${accent}"/><stop offset="100%" stop-color="#1a2f2a"/></linearGradient></defs><rect width="320" height="220" fill="url(#grad)" rx="18"/><g fill="#e7f2ea" font-family="Arial, sans-serif" text-anchor="middle"><text x="160" y="90" font-size="22" font-weight="700">${label}</text><text x="160" y="125" font-size="14">Paradise Nursery</text></g></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const plantCatalog = [
  {
    category: 'Tropical Greens',
    tagline: 'Lush foliage that thrives in bright, warm rooms.',
    items: [
      {
        id: 'monstera-deliciosa',
        name: 'Monstera Deliciosa',
        price: 42,
        image: createPlaceholder('Monstera', '#2e7d5a'),
      },
      {
        id: 'fiddle-leaf-fig',
        name: 'Fiddle Leaf Fig',
        price: 58,
        image: createPlaceholder('Fiddle Leaf Fig', '#3c8f73'),
      },
      {
        id: 'bird-of-paradise',
        name: 'Bird of Paradise',
        price: 65,
        image: createPlaceholder('Bird of Paradise', '#1f6f5c'),
      },
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        price: 34,
        image: createPlaceholder('ZZ Plant', '#35685f'),
      },
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 29,
        image: createPlaceholder('Snake Plant', '#2f7a63'),
      },
      {
        id: 'calathea-orbita',
        name: 'Calathea Orbifolia',
        price: 48,
        image: createPlaceholder('Calathea', '#2b7566'),
      },
    ],
  },
  {
    category: 'Succulents & Cacti',
    tagline: 'Sun-loving companions that forgive a missed watering.',
    items: [
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        price: 18,
        image: createPlaceholder('Aloe Vera', '#3b5d50'),
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        price: 22,
        image: createPlaceholder('Jade Plant', '#2f5a54'),
      },
      {
        id: 'zebra-haworthia',
        name: 'Zebra Haworthia',
        price: 16,
        image: createPlaceholder('Zebra Haworthia', '#24584b'),
      },
      {
        id: 'string-of-pearls',
        name: 'String of Pearls',
        price: 24,
        image: createPlaceholder('String of Pearls', '#1f5643'),
      },
      {
        id: 'golden-barrel',
        name: 'Golden Barrel Cactus',
        price: 20,
        image: createPlaceholder('Golden Barrel', '#35644f'),
      },
      {
        id: 'blue-echeveria',
        name: 'Blue Echeveria',
        price: 15,
        image: createPlaceholder('Blue Echeveria', '#2d5e52'),
      },
    ],
  },
  {
    category: 'Blooming Favorites',
    tagline: 'Flowering plants that add color and personality indoors.',
    items: [
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 28,
        image: createPlaceholder('Peace Lily', '#6b3b5f'),
      },
      {
        id: 'anthurium',
        name: 'Anthurium',
        price: 32,
        image: createPlaceholder('Anthurium', '#7a3b56'),
      },
      {
        id: 'orchid',
        name: 'Phalaenopsis Orchid',
        price: 39,
        image: createPlaceholder('Orchid', '#6d3f6b'),
      },
      {
        id: 'bromeliad',
        name: 'Bromeliad Guzmania',
        price: 26,
        image: createPlaceholder('Bromeliad', '#5d3d63'),
      },
      {
        id: 'african-violet',
        name: 'African Violet',
        price: 18,
        image: createPlaceholder('African Violet', '#5b3c72'),
      },
      {
        id: 'begonia-maculata',
        name: 'Begonia Maculata',
        price: 30,
        image: createPlaceholder('Begonia', '#6a3b6f'),
      },
    ],
  },
]

export const allProducts = plantCatalog.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.category })),
)

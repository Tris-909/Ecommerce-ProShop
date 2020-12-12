const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    details: {}

  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    details: {}

  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
    details: {}

  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    details: {}

  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    details: {}

  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
    details: {}
  },
  {
    name: 'MSI Prestige 14Evo 14" Full HD Laptop (512GB)',
    image: '/images/MSI-laptop1.jpg',
    description:
      'MSI taps into the spirit of exploration by designing the greatest laptop collection- Prestige Series. To keep more efficient of the work, these finely- crafted machines not only show unique taste, but also are immensely powerful. Thin and light yet immensely powerful, it enhances your style and workflow wherever you go.',
    brand: 'MSI',
    category: 'laptops',
    price: 2399,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
    details: {
        displaySizeInches: '14"',
        resolutionPixels: '1920x1080',
        screenResolution: 'Full HD',
        displayType: 'IPS',
        proccessorType: 'Intel Core i7',
        proccessorCores: 'Quad Core',
        processorMemoryCache: '12',
        processorClockSpeed: '3GHz',
        processorMaxClockSpeed: '4.8GHz',
        graphicsProcessor: 'No Info',
        ram: '16GB',
        ssdStorage: '512Gb',
        usbTwoPointOPorts: '1',
        usbCPorts: '2',
        cardReader: 'Micro SD Card Reader',
        webCam: 'yes',
        wifi: 'yes',
        operatingSystem: 'Windows 10 Home',
        manufacturersWarantty: '1 year'
    }
},
{
    name: 'MSI GF63 15.6" Full HD 144Hz Gaming Laptop (512GB)',
    image: '/images/MSI-laptop2.jpg',
    description:
      'Brand new gaming laptop 144Hz display with beautiful design for gamer out there',
    brand: 'MSI',
    category: 'laptops',
    price: 1999,
    countInStock: 2,
    rating: 4.5,
    numReviews: 8,
    details: {
        displaySizeInches: '15.6"',
        resolutionPixels: '1920x1080',
        screenResolution: 'Full HD',
        displayType: 'IPS',
        proccessorType: 'Intel Core i7',
        proccessorCores: 'Hexa Core',
        processorMemoryCache: '12',
        processorClockSpeed: '2.6GHz',
        processorMaxClockSpeed: '5GHz',
        graphicsProcessor: 'NVIDIA@ Geforce GTX1650 Max Q',
        ram: '16GB',
        ssdStorage: '512Gb',
        usbTwoPointOPorts: '3',
        usbCPorts: '2',
        cardReader: 'No Info',
        webCam: 'yes',
        wifi: 'yes',
        operatingSystem: 'Windows 10 Home',
        manufacturersWarantty: '1 year'
    }
},
{
    name: 'MSI GT76 Titan DT 17.3" Full HD 300Hz Gaming Laptop (RTX 2080 Super)',
    image: '/images/MSI-laptop3.jpg',
    description:
      'Monster gaming laptop that will blown your mind away',
    brand: 'MSI',
    category: 'laptops',
    price: 7500,
    countInStock: 3,
    rating: 5,
    numReviews: 2,
    details: {
        displaySizeInches: '17.3"',
        resolutionPixels: '1920x1080',
        screenResolution: 'Full HD',
        displayType: 'No Info',
        proccessorType: 'Intel Core i9',
        proccessorCores: 'Deca Core',
        processorMemoryCache: '20',
        processorClockSpeed: '3.7GHz',
        processorMaxClockSpeed: '5.3GHz',
        graphicsProcessor: 'NVIDIA@ Geforce RTX2080 Max Q',
        ram: '16GB',
        ssdStorage: '1Tb',
        usbTwoPointOPorts: '4',
        usbCPorts: '2',
        cardReader: 'yes',
        webCam: 'yes',
        wifi: 'yes',
        operatingSystem: 'Windows 10 Pro',
        manufacturersWarantty: '3 years'
    }
},
{
    name: 'MSI GE66 Dragonshield 15.6" Full HD 240Hz Gaming Laptop (1TB) [RTX 2070]',
    image: '/images/MSI-laptop4.jpg',
    description:
      'Welcome aboard to the GE66 Dragonshield. Indulged in the extraordinary performance with cutting-edge technologies. Armed with the latest 10th Gen. Intel® Core™ i7 processors and NVIDIA® GeForce RTX 2070 graphics. The sci-fi design with panoramic aurora lighting gives you the ultimate RGB gaming setup. The Dragonshield Limited Edition is the all-inclusive gaming laptop.',
    brand: 'MSI',
    category: 'laptops',
    price: 4698,
    countInStock: 8,
    rating: 4.5,
    numReviews: 11,
    details: {
        displaySizeInches: '15.6"',
        resolutionPixels: '1920x1080',
        screenResolution: 'Full HD',
        displayType: 'LCD',
        proccessorType: 'Intel Core i7-10875H',
        proccessorCores: 'Octa Core',
        processorMemoryCache: '16',
        processorClockSpeed: '2.3GHz',
        processorMaxClockSpeed: '5.1GHz',
        graphicsProcessor: 'NVIDIA@ Geforce RTX2070',
        ram: '16GB',
        ssdStorage: '1Tb',
        usbTwoPointOPorts: '3',
        usbCPorts: '2',
        cardReader: 'yes',
        webCam: 'yes',
        wifi: 'yes',
        operatingSystem: 'Windows 10 Home',
        manufacturersWarantty: '1 year'
    }
},
{
    name: 'MSI GP65 Leopard 15.6" Full HD 144Hz Gaming Laptop (512GB)[GTX 1660 Ti]',
    image: '/images/MSI-laptop5.jpg',
    description:
      'The one that is the most adaptable to change is the one that survive and evolve. Choose the Dragon Spirit and evolve with the latest MSI Gaming Laptops equipped with 10th Gen.',
    brand: 'MSI',
    category: 'laptops',
    price: 2998,
    countInStock: 4,
    rating: 4,
    numReviews: 5,
    details: {
        displaySizeInches: '15.6"',
        resolutionPixels: '1920x1080',
        screenResolution: 'Full HD',
        displayType: 'IPS Level',
        proccessorType: 'Intel Core i7-10750H',
        proccessorCores: 'Hexa Core',
        processorMemoryCache: '12',
        processorClockSpeed: '2.6GHz',
        processorMaxClockSpeed: '5GHz',
        graphicsProcessor: 'NVIDIA@ Geforce GTX1660Ti Graphics',
        ram: '16GB',
        ssdStorage: '512Gb',
        usbTwoPointOPorts: '3',
        usbCPorts: '1',
        cardReader: 'yes',
        webCam: 'yes',
        wifi: 'yes',
        operatingSystem: 'Windows 10 Home',
        manufacturersWarantty: '1 year'
    }
},
{
    name: 'MSI Bravo 15 15.6" Full HD 144Hz Gaming Laptop (512GB) [Ryzen 5]',
    image: '/images/MSI-laptop6.jpg',
    description:
      'Bravo 15 ignites the gaming laptop world by combining the most advanced 7nm technology AMD Ryzen™ processor and Radeon™ RX graphics together, providing stunning performance and smooth gaming display with FreeSync™ Premium Technology.',
    brand: 'MSI',
    category: 'laptops',
    price: 2400,
    countInStock: 7,
    rating: 4.5,
    numReviews: 2,
    details: {
        displaySizeInches: '15.6"',
        resolutionPixels: '1920x1080',
        screenResolution: 'Full HD',
        displayType: 'No Info',
        proccessorType: 'AMD Ryzen 5',
        proccessorCores: 'Hexa Core',
        processorMemoryCache: '8',
        processorClockSpeed: '3GHz',
        processorMaxClockSpeed: '4GHz',
        graphicsProcessor: 'RX5500M',
        ram: '16GB',
        ssdStorage: '512Gb',
        usbTwoPointOPorts: '2',
        usbCPorts: '1',
        cardReader: 'yes',
        webCam: 'yes',
        wifi: 'yes',
        operatingSystem: 'Windows 10 Home',
        manufacturersWarantty: '1 year'
    }
}
]

export default products;

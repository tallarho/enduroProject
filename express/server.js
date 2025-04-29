const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }))
// Пример данных (в реальном проекте — подключение к базе данных)
const tracks = [
    {
      "id": 1,
      "name": "Трек по лесу",
      "coordinates": [
        [55.75, 37.61],
        [55.76, 37.62],
        [55.77, 37.63]
      ],

      "description": "Краткое описание маршрута. Место для остановки у реки.",
      "difficulty": "Средний",
      "length": "15 км",
      "elevation": "300 м",
      "tags": ["лес", "река", "поход"],
      "image": "https://example.com/path/to/image.jpg"
    },

    {
      "id": 2,
      "name": "Горный маршрут",
      "coordinates": [
        [55.80, 37.65],
        [55.81, 37.66]
      ],
      "description": "Описание маршрута по горным тропам, захватывающие виды.",
      "difficulty": "Высокий",
      "length": "10 км",
      "elevation": "500 м",
      "tags": ["горы", "тропа"],
      "image": "https://example.com/path/to/image2.jpg"
    },
    {
        "id": 2,
        "name": "Горный маршрут",
        "coordinates": [
          [55.80, 37.65],
          [55.81, 37.66]
        ],
        "description": "Тревожный лес, на каждом углу опасность получить травму",
        "difficulty": "Опасный",
        "length": "65 км",
        "elevation": "550 м",
        "tags": ["черный лес"],
        "image": ""
      },
      {
        "id": 2,
        "name": "Трек по лесу",
        "coordinates": [
          [55.80, 37.65],
          [55.81, 37.66]
        ],
        "description": "Описание маршрута по горным тропам, захватывающие виды.",
        "difficulty": "Высокий",
        "length": "10 км",
        "elevation": "500 м",
        "tags": ["горы", "тропа"],
        "image": "https://example.com/path/to/image2.jpg"
      },
      {
        "id": 2,
        "name": "Горный маршрут",
        "coordinates": [
          [55.80, 37.65],
          [55.81, 37.66]
        ],
        "description": "Описание маршрута по горным тропам, захватывающие виды.",
        "difficulty": "Высокий",
        "length": "10 км",
        "elevation": "500 м",
        "tags": ["горы", "тропа"],
        "image": "https://example.com/path/to/image2.jpg"
      },
      {
        "id": 2,
        "name": "Горный маршрут",
        "coordinates": [
          [55.80, 37.65],
          [55.81, 37.66]
        ],
        "description": "Описание маршрута по горным тропам, захватывающие виды.",
        "difficulty": "Высокий",
        "length": "10 км",
        "elevation": "500 м",
        "tags": ["горы", "тропа"],
        "image": "https://example.com/path/to/image2.jpg"
      }
  ]

// Маршрут для получения данных о треках
app.get('/api/tracks', (req, res) => {
  res.json(tracks);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

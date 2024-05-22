const restaurantsData = [
    {
    id: 1,
    name: 'Shuk Hacarmel',
    city: 'Tel Aviv',
    price: 2,
    main_image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    cuisine: 'Mediterranean',
    rating: 4.7,
    images: [
        'https://plus.unsplash.com/premium_photo-1669687759693-52ba5f9fa7a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1663846768001-4ca4fb1473f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D', 
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
    ],
    description: 'Vibrant restaurant in the heart of the Carmel Market, offering a unique fusion of Israeli and Mediterranean flavors.'
    },
    {
    id: 2,
    name: 'Lemon Grass',
    city: 'Jerusalem',
    price: 1,
    main_image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    cuisine: 'Thai',
    rating: 3.8,
    images: [
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1666798637757-bc2899415595?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Authentic Thai cuisine in a cozy, modern setting. Vegetarian and vegan options available.'
    },
    {
    id: 3,
    name: 'Basilico',
    city: 'Haifa',
    price: 3,
    main_image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: 'Italian',
    rating: 4.2,
    images: [
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Upscale Italian restaurant with an extensive wine list and stunning views of the Haifa Bay.'
    },
    {
    id: 4,
    name: 'Spice Bazar',
    city: 'Akko',
    price: 2,
    main_image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: 'Middle Eastern',
    rating: 3.5,
    images: [
        'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Authentic Middle Eastern cuisine with a modern twist, served in a historic setting in the Old City of Akko.'
    },
    {
    id: 5,
    name: 'Sushi Bay',
    city: 'Eilat',
    price: 3,
    main_image: "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: 'Japanese',
    rating: 4.9,
    images: [
        'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://plus.unsplash.com/premium_photo-1669150849080-241bf2ec9b4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Upscale sushi restaurant with a breathtaking view of the Red Sea. Extensive sake selection.'
    },
    {
    id: 6,
    name: 'Tanureen',
    city: 'Nazareth',
    price: 1,
    main_image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: 'Arabic',
    rating: 4.1,
    images: [
        'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://plus.unsplash.com/premium_photo-1676234917179-a7b1ca98c984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Authentic Arabic cuisine in a warm, family-owned restaurant. Specializing in delicious meze and grilled meats.'
    },
    {
    id: 7,
    name: 'Falafel Benny',
    city: 'Beersheba',
    price: 1,
    main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJje8xsnnUjQ3Wbhbx2oWw5rqgWEkfqHGpxg&s',
    cuisine: 'Israeli',
    rating: 3.2,
    images: [
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Casual eatery serving the best falafel in town, along with other classic Israeli street food favorites.'
    },
    {
    id: 8,
    name: 'Burgers & Beer',
    city: 'Herzliya',
    price: 2,
    main_image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: 'American',
    rating: 4.4,
    images: [
        'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://plus.unsplash.com/premium_photo-1663852705829-aa8707495e2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Lively burger joint with a wide selection of craft beers and creative burger toppings.'
    },
    {
    id: 9,
    name: 'El Mexicano',
    city: 'Netanya',
    price: 2,
    main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2-QbA93B0s5giSEJvwyRnxVb5sgwQZk0cA&s',
    cuisine: 'Mexican',
    rating: 3.9,
    images: [
        'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Vibrant Mexican restaurant with a lively atmosphere and an extensive tequila selection.'
    },
    {
    id: 10,
    name: 'Taverna Grecka',
    city: 'Haifa',
    price: 3,
    main_image: "https://images.unsplash.com/photo-1560053608-13721e0d69e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: 'Greek',
    rating: 4.6,
    images: [
        'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
        'https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Authentic Greek taverna with a cozy, rustic atmosphere and an extensive wine list.'
    }
    ];
    export default restaurantsData;
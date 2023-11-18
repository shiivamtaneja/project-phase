export const ProductsFromAPI = async () => {
  const API_URL = 'https://fakestoreapi.com/products'

  const response = await fetch(API_URL)

  const data = await response.json()

  return data
}

export const fetchProduct = async (id) => {
  const API_URL = 'https://fakestoreapi.com/products/' + id

  const response = await fetch(API_URL)

  const data = await response.json()

  return data
}

export const fetchProductsByCategory = async (categoryName) => {
  const API_URL = 'https://fakestoreapi.com/products/category/' + categoryName
  const response = await fetch(API_URL)
  const data = await response.json()
  return { data }
}

export const filters = ["men's clothing", "jewelery", "electronics", "women's clothing"]

export const aboutUsData = [
  {
    "id": 1,
    "title": "Sustainability",
    "description": "By opting for an electric two-wheeler, you're making a positive impact on the environment. With zero emissions and reduced carbon footprint, you can contribute to cleaner air and a healthier planet.",
  },
  {
    "id": 2,
    "title": "Efficiency and Affordability",
    "description": "Electric two-wheelers are highly efficient, allowing you to cover more distance with less energy consumption. Say goodbye to fuel costs and hello to significant savings on your daily commute.",
  },
  {
    "id": 3,
    "title": "Cutting-Edge Technology",
    "description": "Our selection features the latest advancements in electric vehicle technology. From powerful motors and long-lasting batteries to smart connectivity features, our electric two-wheelers are designed to deliver an exceptional riding experience.",
  },
  {
    "id": 4,
    "title": "Style and Comfort",
    "description": "We understand that your ride is not just about getting from point A to point B but also making a statement. That's why we offer a diverse range of sleek and modern designs, ensuring that you ride in style while enjoying utmost comfort and convenience.",
  },
]
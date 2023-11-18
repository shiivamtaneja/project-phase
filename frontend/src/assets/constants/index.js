import {
  Bike,
  BikeMania,
  CrazyCar,
  FlatDiscount,
  HootToScoot,
  CustomerReview,
  olaLogo,
  ampereLogo,
  atherLogo,
  heroElectricLogo,
  okayaLogo
} from '../Images/index'

export const navBarList = [
  {
    _id: 1001,
    title: "About",
    link: "/about",
  },
  {
    _id: 1002,
    title: "Buy",
    link: "/buy",
  },
  {
    _id: 1003,
    title: "Sell",
    link: "/sell",
  },
  {
    _id: 1004,
    title: "Compare",
    link: "compare",
  },
  {
    _id: 1005,
    title: "Exchange",
    link: "/exchange",
  },
]

export const navBarCategory = [
  {
    _id: 1001,
    title: "Scooters",
    link: "/bikes/scooters",
  },
  {
    _id: 1002,
    title: "Scooty",
    link: "/bikes/scooty",
  },
]

export const navBarBrands = [
  {
    _id: 1001,
    title: "Okaya",
    link: "/brands/okaya",
  },
  {
    _id: 1002,
    title: "Ather",
    link: "/brands/ather",
  },
  {
    _id: 1003,
    title: "Ola",
    link: "/brands/ola"
  }
]

export const footerShop = [
  {
    _id: 1001,
    title: "Buy",
    link: "/buy",
  },
  {
    _id: 1002,
    title: "Sell",
    link: "/sell",
  },
  {
    _id: 1003,
    title: "Compare",
    link: "compare",
  },
  {
    _id: 1004,
    title: "Exchange",
    link: "/exchange",
  },
]

export const footerAccount = [
  {
    _id: 1001,
    title: "Profile",
    link: "/",
  },
  {
    _id: 1002,
    title: "Check Price",
    link: "/",
  },
  {
    _id: 1003,
    title: "Business",
    link: "/",
  },
  {
    _id: 1004,
    title: "Advertise with us",
    link: "advertise",
  },
]

export const CustomerReviews = [
  {
    _id: 1001,
    imgSrc: CustomerReview,
    review: 'E BikeLelo made the delivery of my dream bike a memorable one with personalized experience. Thank you for taking that much pain to deliver on my special day.',
    name: 'Hemanth Purohit',
    location: 'New Delhi'
  },
  {
    _id: 1002,
    imgSrc: CustomerReview,
    review: 'E BikeLelo made the delivery of my dream bike a memorable one with personalized experience. Thank you for taking that much pain to deliver on my special day.',
    name: 'Hemanth Purohit',
    location: 'New Delhi'
  },
  {
    _id: 1003,
    imgSrc: CustomerReview,
    review: 'E BikeLelo made the delivery of my dream bike a memorable one with personalized experience. Thank you for taking that much pain to deliver on my special day.',
    name: 'Hemanth Purohit',
    location: 'New Delhi'
  },
  {
    _id: 1004,
    imgSrc: CustomerReview,
    review: 'E BikeLelo made the delivery of my dream bike a memorable one with personalized experience. Thank you for taking that much pain to deliver on my special day.',
    name: 'Hemanth Purohit',
    location: 'New Delhi'
  },
  {
    _id: 1005,
    imgSrc: CustomerReview,
    review: 'E BikeLelo made the delivery of my dream bike a memorable one with personalized experience. Thank you for taking that much pain to deliver on my special day.',
    name: 'Hemanth Purohit',
    location: 'New Delhi'
  },
  {
    _id: 1006,
    imgSrc: CustomerReview,
    review: 'E BikeLelo made the delivery of my dream bike a memorable one with personalized experience. Thank you for taking that much pain to deliver on my special day.',
    name: 'Hemanth Purohit',
    location: 'New Delhi'
  },

]

export const HotDeals = [
  {
    _id: 1001,
    imgSrc: BikeMania,
  },
  {
    _id: 1002,
    imgSrc: CrazyCar,
  },
  {
    _id: 1003,
    imgSrc: FlatDiscount,
  },
  {
    _id: 1004,
    imgSrc: HootToScoot,
  },
  {
    _id: 1005,
    imgSrc: FlatDiscount,
  },
  {
    _id: 1006,
    imgSrc: HootToScoot,
  },
]

export const sortBy = [
  {
    _id: 1001,
    sort: "Most Recent"
  },
  {
    _id: 1002,
    sort: "Near Me"
  },
  {
    _id: 1003,
    sort: "Price (Low to High)"
  },
  {
    _id: 1004,
    sort: "Price (High to Low)"
  },
  {
    _id: 1005,
    sort: "Most Viewed"
  },
]

export const getSearchResult = (query) => {
  const searchDataProductName = products.filter((prod) => (
    prod.productName.toLowerCase().includes(query.toLowerCase())
  ))
  return searchDataProductName
}

export function getSearchProduct(prodId) {
  const result = products.filter(prod => prod._id === Number(prodId))
  return result
}

export const getNewProducts = (badge) => {
  const result = products.filter(prod => prod.badge === badge)
  return result
}

export const itemsPerPageValue = [
  {
    _id: 1001,
    value: 12
  },
  {
    _id: 1002,
    value: 24
  },
  {
    _id: 1003,
    value: 36
  },
  {
    _id: 1004,
    value: 48
  },
]

export const products = [
  {
    _id: 1001,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1002,
    productName: "Tea Table",
    price: "180.00",
    color: "Gray",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1003,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1004,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1005,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1006,
    productName: "New Backpack",
    price: "180.00",
    color: "Gray",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1007,
    productName: "Household materials",
    price: "25.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1008,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1009,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1010,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1011,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1012,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1013,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },

  {
    _id: 1014,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1015,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1016,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1017,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1018,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1019,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1020,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1021,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1022,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1023,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1024,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1025,
    productName: "Tea Table",
    price: "180.00",
    color: "Gray",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1026,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1027,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1028,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1029,
    productName: "New Backpack",
    price: "180.00",
    color: "Gray",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1030,
    productName: "Household materials",
    price: "25.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1031,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1032,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1033,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1034,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1035,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1036,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1037,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1038,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1039,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1040,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1041,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1042,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1043,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1044,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1045,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1046,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1047,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1048,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    imgSrc: { Bike },
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
]

export const companiesDetails = [
  {
    _id: 1001,
    companyLink: "okaya",
    imgSrc: okayaLogo
  },
  {
    _id: 1002,
    companyLink: "ola",
    imgSrc: olaLogo
  },
  {
    _id: 1003,
    companyLink: "hero-electric",
    imgSrc: heroElectricLogo
  },
  {
    _id: 1004,
    companyLink: "ather",
    imgSrc: atherLogo
  },
  {
    _id: 1005,
    companyLink: "ampere",
    imgSrc: ampereLogo
  },
]
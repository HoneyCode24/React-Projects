import tshirt1 from '../assets/products/tshirt1.jpg'
import bag1 from '../assets/products/bag1.jpg'
import hoodie1 from '../assets/products/hoodie1.jpg'
import jacket1 from '../assets/products/jacket1.jpg'
import sneaker1 from '../assets/products/sneaker1.jpg'
import sneaker2 from '../assets/products/sneaker2.jpg'
import bag2 from '../assets/bag.jpg'
import cap from '../assets/cap.jpg'
 import hoodie2 from '../assets/hoodie.jpg'
 import jacket2 from '../assets/jacket.jpg'
 import jeans1 from '../assets/jeans.jpg'
 import sneaker3 from '../assets/sneaker.jpg'
 import sneaker4 from '../assets/sneakers.jpg'
 import sunglasses from '../assets/sunglasses.jpg'
 import tshirt2 from '../assets/tshirt.jpg'
 import watch from '../assets/watch.jpg'
 import streetwear from '../assets/streetwear.jpg'


const products = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 1200,
    gender: "Men",
    category: "T-Shirt",
    images: [tshirt1]
  },
  {
    id: 2,
    name: "Oversized Hoodie",
    price: 2200,
    gender:'Women',
    category: "Hoodie",
    images: [hoodie1]
  },
  {
    id: 3,
    name: "Street Sneakers",
    price: 3500,
    gender: 'Men',
    category: "Sneakers",
    images: [sneaker1,sneaker2],
    description: "High-quality streetwear sneakers perfect for Gen Z fashion.",
    details: "Made with premium material. Lightweight and durable.",
    shipping: "Free shipping on orders above $100. Easy returns within 7 days.",
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 2800,
    gender: "Women",
    category: "Jackets",
    images: [jacket1],
    description: "Trendy oversized denim jacket.",
    details: "100% Cotton. Oversized fit. Limited edition.",
    shipping: "Free shipping on orders above $100. Easy returns within 7 days.",
  },
  {
    id: 5,
    name: "Handcrafted Tote",
    price: 1800,
    gender: "Women",
    category: "Accessories",
    images: [bag1]
  },

  {
    id: 6,
    name: "Stylish Bag",
    price: 1200,
    gender: 'Unisex',
    category: "Accessories",
    images: [bag2]
  },
    {
    id: 7,
    name: "Stylish cap",
    price: 500,
    gender: 'Unisex',
    category: "Accessories",
    images: [cap]
  },
    {
    id: 8,
    name: "Hoodie",
    price: 1200,
    gender: 'Unisex',
    category: "Hoodie",
    images: [hoodie2]
  },
    {
    id: 9,
    name: "Jacket",
    price: 1500,
    gender: 'Men',
    category: "Jackets",
    images: [jacket2]
  },
    {
    id: 10,
    name: "Jeans",
    price: 800,
    gender: 'Men',
    category: "Jeans",
    images: [jeans1]
  },
    {
    id: 11,
    name: "Sneaker",
    price: 1600,
    gender: 'Unisex',
    category: "Sneakers",
    images: [sneaker3]
  },
    {
    id: 12,
    name: "Sneaker",
    price: 1000,
    gender: 'Unisex',
    category: "Sneakers",
    images: [sneaker4]
  },
    {
    id: 13,
    name: "Sun Glasses",
    price: 400,
    gender: 'Unisex',
    category: "Accessories",
    images: [sunglasses]
  },
    {
    id: 14,
    name: "T-Shirt",
    price: 1200,
    gender: 'Unisex',
    category: "T-Shirt",
    images: [tshirt2]
  },
    {
    id: 15,
    name: "Wrist Watch",
    price: 800,
    gender: 'Men',
    category: "Accessories",
    images: [watch]
  },
    {
    id: 16,
    name: "Streetwear",
    price: 800,
    gender: 'Women',
    category: "Dresses",
    images: [streetwear]
  }
  
];

export default products;

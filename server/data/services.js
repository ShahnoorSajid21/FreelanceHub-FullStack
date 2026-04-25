var myServices = [
  {
	id: 1,
    title: "I will design a modern logo",
    category: "Design",
    price: 40,
	rating: 4.7,
    seller: "Areeb Khan",
    description: "I can make a clean logo for your startup. You get source file and png too.",
    deliveryDays: 3,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80"
  },
    {
    id: 2,
      title: 'I will write your blog post',
    category: "Writing",
    price: 25,
    rating: 4.3,
   seller: "Maha Noor",
    description: "SEO style writing for blogs and websites. Fast revisions included.",
    deliveryDays: 2,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
 title: "I will build a landing page",
    category: "Development",
    price: 120,
	rating: 4.8,
    seller: "Saad Ali",
    description: "Responsive landing page in html css js. Modern style and clean look.",
    deliveryDays: 5,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
  },
{
    id: 4,
    title: "I will manage instagram ads",
  category: "Marketing",
    price: 90,
    rating: 4.4,
    seller: "Hina R",
    description: "I will setup and optimize ad campaign to improve reach and sales.",
    deliveryDays: 4,
 image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80"
  },
	{
    id: 5,
    title: "I will edit your youtube video",
    category: "Video",
    price: 75,
    rating: 4.6,
    seller: "Usman Q",
 description: "Smooth transitions, captions, and pacing edits for your videos.",
    deliveryDays: 3,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 6,
    title: "I will design social media posts",
    category: "Design",
    price: 35,
    rating: 4.2,
    seller: "Zoya Tariq",
    description: "Post templates for instagram and facebook with trendy style.",
    deliveryDays: 2,
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    title: "I will write product descriptions",
	category: "Writing",
    price: 30,
    rating: 4.1,
    seller: "Nimra A",
    description: "Attractive product descriptions that help conversion for your store.",
    deliveryDays: 2,
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80"
  },
  {
	id: 8,
    title: "I will fix bugs in node app",
    category: "Development",
    price: 150,
    rating: 4.9,
    seller: "Bilal M",
    description: "Debug and fix backend issues in your express and node project quickly.",
    deliveryDays: 4,
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80"
  },
   {
    id: 9,
    title: "I will do keyword research",
    category: "Marketing",
    price: 55,
    rating: 4.0,
   seller: "Rehan S",
    description: "Keyword list and content ideas to rank better on search engines.",
    deliveryDays: 3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    title: "I will make short reels edits",
    category: "Video",
    price: 60,
    rating: 4.5,
    seller: "Iqra P",
    description: "Reels and shorts edited with effects and catchy text overlays.",
    deliveryDays: 2,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11,
    title: "I will create brochure design",
    category: "Design",
    price: 65,
    rating: 4.3,
    seller: "Hadi F",
    description: "Business brochure design in print ready format with revisions.",
    deliveryDays: 3,
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&w=900&q=80"
  },
  {
	id: 12,
    title: "I will develop simple ecommerce page",
    category: "Development",
    price: 200,
    rating: 4.7,
    seller: "Faraz J",
    description: "Simple ecommerce frontend with cart style interactions and clean UI.",
    deliveryDays: 6,
	image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
  }
]

let savedServices = []
const hiredServices = []

module.exports = { myServices, savedServices, hiredServices }

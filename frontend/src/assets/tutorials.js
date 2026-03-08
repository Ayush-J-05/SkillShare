import video1 from "./videos/1.mp4";

const tutorials = [
  {
    id: 1,
    title: "Python for Data Science",
    category: "Programming",
    author: "Alex Rivera",
    students: "12k students",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    description: "Learn how to use Python for data analysis, visualization, and machine learning. This course covers NumPy, Pandas, and real-world datasets to build practical data science skills.",
    video: video1
  },
  {
    id: 2,
    title: "Mastering Minimalist UI Design: Principles and Practice",
    category: "Design",
    author: "Sarah Jenkins",
    students: "12k students",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    description: "Discover the principles behind clean and effective minimalist UI design. Learn layout balance, typography, and visual hierarchy to create modern and user-friendly interfaces."
  },
  {
    id: 3,
    title: "React 18 & Next.js: The Ultimate Full Stack Course",
    category: "Development",
    author: "David Miller",
    students: "45k students",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Build modern web applications using React 18 and Next.js. This course teaches routing, server-side rendering, API integration, and full-stack development techniques."
  },
  {
    id: 4,
    title: "Italian Pasta Secrets: From Scratch to Table",
    category: "Cooking",
    author: "Marco Rossi",
    students: "8k students",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    description: "Learn authentic Italian pasta recipes straight from traditional kitchens. Master fresh pasta dough, classic sauces, and plating techniques to impress any guest."
  },
  {
    id: 5,
    title: "Growth Hacking: Creative Marketing for Modern Brands",
    category: "Marketing",
    author: "Emily Chen",
    students: "15k students",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Explore creative marketing strategies used by successful startups. Learn growth hacking techniques, data-driven campaigns, and ways to scale brand visibility online."
  }
];

export const categories = [
  "All Topics",
  "Programming",
  "Design",
  "Development",
  "Cooking",
  "Marketing",
  "Business",
  "Music",
  "Photography"
];

export default tutorials;
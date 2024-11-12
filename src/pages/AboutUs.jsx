import React from 'react';
import {Star, ChevronLeft, ChevronRight } from 'lucide-react';

const CircularProgress = ({ percentage, label, color }) => {
  const radius = 25;
  const circumference = 157; 
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="6"
            fill="none"
          />
        
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{percentage}%</span>
        </div>
      </div>
      <span className="mt-2 text-gray-600 text-sm font-medium">{label}</span>
    </div>
  );
};


const TestimonialCard = ({ image, name, location, rating, review }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg mx-auto max-w-2xl">
    <div className="flex items-start gap-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-gray-500 text-sm">{location}</p>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="mt-4 text-gray-600">{review}</p>
      </div>
    </div>
  </div>
);





const PackageCard = ({ name, price, image }) => (
  <div className="group relative overflow-hidden rounded-lg">
    <img
      src={image}
      alt={name}
      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-white font-semibold text-lg">{name}</h3>
      <p className="text-white opacity-90">{price}</p>
    </div>
  </div>
);

const AboutUs = () => {
  const packages = [
    { name: 'Barcelona', price: '$840', image: "https://i.ytimg.com/vi/brWYAALZes4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnqc0p8zQ-cVGVUXwEuZ0hcQ3Faw" },
    { name: 'Switzerland', price: '$840', image: "https://cdn.britannica.com/36/178136-050-7F77D46B/village-Alpine-valley-canton-Saint-Moritz-Engadin.jpg?w=300" },
    { name: 'Rio de Janeiro', price: '$840', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2WQQHrlfGFuTYbNovrTdi_wZ6LNgPtOOuQ&s" },
    { name: 'Maldives', price: '$840', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3pTgOlDieECkkNjIWq24KvmtwCKEYY7LXA&s" },
    { name: 'Los Angeles', price: '$840', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSG2xEar4A7MC0hWouPXWYt2ryx2mdWZNtxA&s" },
    { name: 'Thailand', price: '$840', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQj-hfp8aYUkRsav1QxVwf9wTVcV5eshz95A&s" },
    { name: 'India', price: '$840', image: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" },
    { name: 'Bhutan', price: '$840', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlKc-vFuZgrvC2vkf4TKEuEHkwydRTuvyuw&s" },
  ];

  const testimonials = [
    {
      image: "https://img.freepik.com/premium-photo/businesswoman-woman-happy-pretty-attractive-professional-adult-female-portrait-business-lady-person-young-success-beauty-office-successful-corporate-confident-caucasian-cheerful_163305-237346.jpg",
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      review: "The travel experience was absolutely incredible! The attention to detail and personalized service made our trip unforgettable."
    }
  ];

  return (
    <div className="w-full">
      <div className="relative h-[500px]">
        <img
          src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg"
          alt="Travel Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center">
            <p className="text-white text-sm font-light mb-2">READ</p>
            <h1 className="text-6xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between gap-12">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We Provide You Best Europe Sightseeing Tours
            </h2>
            <p className="text-gray-600 mb-8">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium
              a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors">
              View Packages
            </button>
          </div>
          <div className="w-1/2">
            <div className="relative">
              <img
                src="https://wallpapers.com/images/featured/europe-3trlw1j33gwm6xda.jpg"
                alt="Europe Tours"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

   
      <div className="container mx-auto px-6 mb-20">
        <div className="relative h-80 rounded-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?cs=srgb&dl=pexels-m-venter-792254-1659437.jpg&fm=jpg"
            alt="Wanderlust"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center pl-20">
            <h2 className="text-6xl font-cursive text-white">Wanderlust</h2>
          </div>
        </div>
      </div>

   
<div className="container mx-auto px-6 py-20">
  <div className="flex gap-12">
    {/* Left side - Overlapping Polaroid Images */}
    <div className="relative w-2/5">
     
      <div className="absolute top-8 left-8 w-64 bg-white p-3 rounded-lg shadow-lg transform rotate-6">
        <img 
          src="https://hblimg.mmtcdn.com/content/hubble/img/paro/mmt/destination/m_paro-landscape_l_400_640.jpg" 
          alt=""
          className="w-full h-auto rounded"
        />
      </div>
      
     
      <div className="relative w-64 bg-white p-3 rounded-lg shadow-lg transform -rotate-3">
        <img 
          src="https://static.tacdn.com/img2/tc/2024/destinations/TC_header_1440x480_Trending_Destinations_2024_c1.png" 
          alt=""
          className="w-full h-auto rounded mb-4"
        />
        
      </div>
    </div>

    <div className="w-3/5 flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <span className="text-red-600 font-medium tracking-wide">TREND</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Popular Tour Plans
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium 
          a laudantium internos. Non quis eius et corporis praesentium in Masendum.
        </p>
      </div>
      
     
      <div className="flex space-x-16">
        {[
          { percentage: 78, label: "VACATIONS", color: "#3B82F6" },
          { percentage: 55, label: "HONEYMOON", color: "#10B981" },
          { percentage: 30, label: "MUSICAL EVENTS", color: "#8B5CF6" }
        ].map((metric, index) => (
          <CircularProgress
            key={index}
            percentage={metric.percentage}
            label={metric.label}
            color={metric.color}
          />
        ))}
      </div>
    </div>
  </div>
</div>

     
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm uppercase tracking-wide mb-2">EXPLORE MORE</p>
          <h2 className="text-3xl font-bold">Our International Packages</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>

      
      
     
<div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm uppercase tracking-wide mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl font-bold">See What Our Clients Say About Us</h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50">
              <ChevronLeft size={24} />
            </button>
          </div>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      
      <footer className="bg-white pt-20 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-4">Travel</h3>
              <p className="text-gray-600 mb-4">
                Travel helps companies manage payments easily.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">Twitter</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Destinations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Maldives</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Los Angeles</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Las Vegas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Toronto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Join Our Newsletter</h3>
              <p className="text-gray-600 mb-4">
                 Will send you weekly updates for your better tour packages.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
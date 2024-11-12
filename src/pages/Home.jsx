import React from 'react';
import { useState } from 'react';
import CreatePackage from './CreatePackage';
import {Link , useNavigate} from 'react-router-dom';
import { MapPin, Calendar, Users, Plane, Star, ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-5">Welcome to TravelBooking</h2>
      <p>Your dream vacation awaits. Start by choosing or creating your own package!</p>
      <CreatePackage />
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: '',
    travelType: '',
    duration: ''
  });

  const services = [
    { icon: Users, title: 'Guided Tours', description: 'Join our expertly guided tours and create unforgettable memories' },
    { icon: Plane, title: 'Best Flights Options', description: 'Find the best flight deals for your dream destination' },
    { icon: Star, title: 'Religious Tours', description: 'Explore sacred sites and spiritual destinations worldwide' },
    { icon: Users, title: 'Medical Insurance', description: 'Travel with peace of mind with our comprehensive coverage' }
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
  

  const partners = ['Emirates', 'trivago', 'airbnb', 'Turkish Airlines', 'SWISS'];


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
  
  const trendingTours = [
    {
      image: "https://cdn.britannica.com/36/178136-050-7F77D46B/village-Alpine-valley-canton-Saint-Moritz-Engadin.jpg?w=300",
      country: 'Switzerland',
      flag: '🇨🇭',
      rating: 4.8,
      reviews: 147,
      price: '1,000',
      oldPrice: '1,200',
      url: "https://cdn.britannica.com/36/178136-050-7F77D46B/village-Alpine-valley-canton-Saint-Moritz-Engadin.jpg?w=300"
    },
    {
      image: "https://cff2.earth.com/uploads/2023/02/15124958/Amazon-animals-2-scaled.jpg",
      country: 'Amazon',
      flag: '🇧🇷',
      rating: 4.5,
      reviews: 75,
      price: '1,223',
      oldPrice: '1,200',
      url: "https://cff2.earth.com/uploads/2023/02/15124958/Amazon-animals-2-scaled.jpg"
    },
    {
      image: "https://media.architecturaldigest.com/photos/58e2a407c0e88d1a6a20066b/16:9/w_1280,c_limit/Pyramid%20of%20Giza%201.jpg",
      country: 'Giza',
      flag: '🇪🇬',
      rating: 4.7,
      reviews: 184,
      price: '1,200',
      oldPrice: '1,200',
      url: "https://media.architecturaldigest.com/photos/58e2a407c0e88d1a6a20066b/16:9/w_1280,c_limit/Pyramid%20of%20Giza%201.jpg"
    }
  ];

  const europeTours = [
    { name: 'Big Ben', image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/f8/bb/big-ben.jpg?w=1200&h=1200&s=1&pcx=1033&pcy=310&pchk=v1_bf93e1170e1f1f8d4cea", price: '$850' },
    { name: 'City View', image: "https://media.istockphoto.com/id/626062244/photo/chicago-skyline-aerial-view-at-dusk.jpg?s=612x612&w=0&k=20&c=NWrCtWaR8GKIctTKDr004l2H_c4vdU4Qxx0cWH3FnIo=", price: '$950' },
    { name: 'Colosseum', image: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg", price: '$750' },
    { name: 'Eiffel Tower', image: "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_2560%2Cc_limit/GettyImages-468366251.jpg", price: '$899' },
    { name: 'Italy', image:"https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?cs=srgb&dl=pexels-pixabay-531602.jpg&fm=jpg" , price:'$840'}
  ];

  const resortFeatures = [
    { icon: "🏖️", title: "Choose Destination", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { icon: "📅", title: "Check availability", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { icon: "✈️", title: "Let's fly", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
  ];

  const romanticDestinations = {
    title: "Our Romantic Tropical Destinations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  };

  

  return (
    <div className="min-h-screen">
     
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://www.shutterstock.com/image-photo/travel-summer-vacation-concept-happy-260nw-2483146615.jpg')",
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}
        />
       <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-200px)] text-white px-4">
          <span className="text-red-500 mb-4">TRAVEL</span>
          <h1 className="text-6xl font-bold text-center mb-8 max-w-3xl">
            No matter where you&apos;re going to, we&apos;ll take you there
          </h1>


        
          <div className="bg-white rounded-lg p-4 flex items-center space-x-4 max-w-4xl w-full">
            <div className="flex-1 flex items-center space-x-2">
              <MapPin className="text-gray-400" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full outline-none text-gray-700"
                value={searchParams.location}
                onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
              />
            </div>
            <div className="border-l border-gray-300 h-8" />
            <div className="flex-1 flex items-center space-x-2">
              <Calendar className="text-gray-400" />
              <select 
                className="w-full outline-none text-gray-700 bg-transparent"
                value={searchParams.travelType}
                onChange={(e) => setSearchParams({...searchParams, travelType: e.target.value})}
              >
                <option value="">Travel Type</option>
                <option value="adventure">Adventure</option>
                <option value="relaxation">Relaxation</option>
                <option value="cultural">Cultural</option>
              </select>
            </div>
            <div className="border-l border-gray-300 h-8" />
            <div className="flex-1 flex items-center space-x-2">
              <Users className="text-gray-400" />
              <select 
                className="w-full outline-none text-gray-700 bg-transparent"
                value={searchParams.duration}
                onChange={(e) => setSearchParams({...searchParams, duration: e.target.value})}
              >
                <option value="">Duration</option>
                <option value="short">1-3 days</option>
                <option value="medium">4-7 days</option>
                <option value="long">8+ days</option>
              </select>
            </div>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg">
              Submit
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-12">
            <img src="https://dwglogo.com/wp-content/uploads/2016/04/Emirates_logo_black.png" alt="Emirates" className="h-8" />
            <img src="https://download.logo.wine/logo/Trivago/Trivago-Logo.wine.png" alt="airbnb" className="h-8" />
            <img src="https://download.logo.wine/logo/Turkish_Airlines/Turkish_Airlines-Logo.wine.png" alt="SWISS" className="h-8" />
          </div>
        </div>
      </div>

         <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h6 className="text-red-500 font-semibold mb-2">PROMOTION</h6>
          <h2 className="text-3xl font-bold mb-4">We Provide You Best Europe Sightseeing Tours</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Experience Europe's most iconic landmarks and breathtaking sights. Let us guide you through the rich history and vibrant culture of the continent.
          </p>
          <div className="grid grid-cols-6 gap-9">
            <div className="col-span-6 grid grid-cols-5 gap-7">
              {europeTours.map((tour, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl">
                  <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    {tour.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://media.istockphoto.com/id/1256296335/photo/a-romantic-couple-on-summer-vacation-enjos-the-sunset-over-the-mediterranean-sea-by-the-pool.jpg?s=612x612&w=0&k=20&c=FJurmc0CUMEpoAdRIUfJ2rHIOM-gYs-V5MM_0PoOJtQ=" alt="Couple 1" className="w-full h-64 object-cover rounded-2xl" />
              <img src="https://images.pexels.com/photos/1066801/pexels-photo-1066801.jpeg?cs=srgb&dl=pexels-jmendezrf-1066801.jpg&fm=jpg" />
              <img src="https://cdn.prod.website-files.com/576fd5a8f192527e50a4b95c/5e82032093fd4a99cae5d488_travelling%20as%20a%20couple.jpg" />
              <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/01/14101943/New-Featured-1-3.jpg?tr=w-480,f-jpg,pr-true" />
            </div>
           
          </div>
          <div className="flex flex-col justify-center">
            <h6 className="text-red-500 font-semibold mb-2">HONEYMOON</h6>
            <h2 className="text-4xl font-bold mb-6">{romanticDestinations.title}</h2>
            <p className="text-gray-600 mb-8">{romanticDestinations.description}</p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg w-fit">
              View Packages
            </button>
          </div>
        </div>
      </div>

     
      
      
      <div className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
          <div>
            <h6 className="text-red-500 font-semibold mb-2">TRAVEL & TOURS</h6>
            <h2 className="text-3xl font-bold mb-8">Get Your Favourite Resort Bookings</h2>
            <div className="space-y-6">
              {resortFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://www.theindia.co.in/blog/wp-content/uploads/2024/04/Best-Resorts-near-Ahmedabad-for-One-Day-Picnic.jpg" alt="Resort" className="rounded-lg shadow-lg" />
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
      <div className="flex justify-center">
  <div className="grid grid-cols-2 gap-x-4 w-[50%]">
    <div className="relative h-72">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e00f7d1d9bfd67feb808912/1581952490299-K7ZP01FG0BOMRB27LIRH/child-happy-nature-autumn-leaves-hd-wallpaper.jpg"
        alt="Nature"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Explore Nature</h3>
          <button className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            View Packages
          </button>
        </div>
      </div>
    </div>
    <div className="relative h-72">
      <img
        src="https://static.toiimg.com/photo/107386465.cms"
        alt="Cities"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Explore Cities</h3>
          <button className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            View Packages
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="py-16 px-8 bg-gray-50">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Our Trending Tour Packages</h2>
  </div>
  <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
    {trendingTours.map((tour, index) => (
      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
        <img src={tour.image} alt={tour.country} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="mr-2">{tour.flag}</span>
              <span className="font-semibold">{tour.country}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{tour.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({tour.reviews})</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-red-500 font-bold">${tour.price}</span>
              <span className="text-gray-400 line-through ml-2">${tour.oldPrice}</span>
            </div>
            <a href={tour.url} className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Book Now
            </a>
          </div>
        </div>
      </div>
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
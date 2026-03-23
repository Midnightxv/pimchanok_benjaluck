"use client";

import React from "react";

export default function GamePlayPage() {
  const games = [
    {
      id: 1,
      title: "Elden Ring",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/page_bg_raw.jpg?t=1767883716",
      price: 1999,
      discount: 10,
      rating: 4.8,
      reviews: 2541,
      genre: "RPG",
    },
    {
      id: 2,
      title: "The Legend of Zelda: Tears of the Kingdom",
      image:
        "https://media.wired.com/photos/645d15509a01d944fee35de1/master/pass/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg",
      price: 3299,
      discount: 0,
      rating: 4.9,
      reviews: 3456,
      genre: "Adventure",
    },
    {
      id: 3,
      title: "Baldur's Gate 3",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
      price: 2499,
      discount: 15,
      rating: 4.8,
      reviews: 2876,
      genre: "RPG",
    },
    {
      id: 4,
      title: "Cyberpunk 2077",
      image:
        "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
      price: 2199,
      discount: 30,
      rating: 4.6,
      reviews: 4123,
      genre: "Action-RPG",
    },
    {
      id: 5,
      title: "Starfield",
      image:
        "https://xboxwire.thesourcemediaassets.com/sites/2/2022/06/StarfieldShowcase_HERO-165ee8e45d4141d2d754.jpg",
      price: 2299,
      discount: 20,
      rating: 4.5,
      reviews: 1987,
      genre: "RPG",
    },
    {
      id: 6,
      title: "Final Fantasy XVI",
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/capsule_616x353.jpg?t=1741059170",
      price: 2199,
      discount: 25,
      rating: 4.7,
      reviews: 2345,
      genre: "Action-RPG",
    },
    {
      id: 7,
      title: "Dragon's Dogma 2",
      image:
        "https://cdn.wccftech.com/wp-content/uploads/2024/01/dragons-dogma-2-capcom-showcase-HD-1920x1096.jpg",
      price: 2199,
      discount: 0,
      rating: 4.6,
      reviews: 1654,
      genre: "Action-RPG",
    },
    {
      id: 8,
      title: "Palworld",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202405/2108/d976f5d6313a7174e5341d3a5e3f21559f56f86f40a71d2f.png",
      price: 899,
      discount: 5,
      rating: 4.5,
      reviews: 3421,
      genre: "Action-Adventure",
    },
    {
      id: 9,
      title: "Alan Wake 2",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/c3daf3037feb797d9e71b81618e3b5ff3ff1f9609db5a4a2.png",
      price: 2499,
      discount: 35,
      rating: 4.7,
      reviews: 2234,
      genre: "Action-Adventure",
    },
    {
      id: 10,
      title: "Hogwarts Legacy",
      image:
        "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-aa80981dd7c9b3f26b12606974a76dba_2560x1440-aa80981dd7c9b3f26b12606974a76dba",
      price: 2499,
      discount: 40,
      rating: 4.4,
      reviews: 3156,
      genre: "Action-RPG",
    },
    {
      id: 11,
      title: "Star Wars Outlaws",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/1916ec71f4af6c3e583a816988c41d54bafea762e02a39b2.jpg",
      price: 2499,
      discount: 12,
      rating: 4.6,
      reviews: 2876,
      genre: "Action-Adventure",
    },
    {
      id: 12,
      title: "Persona 5 Royal",
      image:
        "https://store-images.s-microsoft.com/image/apps.6136.14482474285447263.0a4055ed-9044-4c0c-abf5-292bb1bcb735.3db4c9c4-de15-4e0f-8b4d-1539f8a2ab08?q=90&w=480&h=270",
      price: 1999,
      discount: 20,
      rating: 4.9,
      reviews: 2654,
      genre: "RPG",
    },
  ];

  const formatPrice = (v: number) => {
    return v.toLocaleString("th-TH", { style: "currency", currency: "THB" });
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      <span className="text-yellow-400">★</span>
      <span className="text-sm font-medium text-zinc-700">{rating}</span>
    </div>
  );

  return (
    <div className="min-h-screen  from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold text-white bg-clip-text  from-blue-400 to-purple-600 pb-2">
            🎮 Game Store
          </h1>
          <p className="text-zinc-300 mt-2 text-lg">เลือกเกมที่ชอบ ดูราคาและส่วนลดก่อนตัดสินใจซื้อ</p>
        </header>

        {/* Filter/Stats Bar */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
          <div className="text-zinc-300 text-sm">
            <span className="font-semibold text-white">{games.length}</span> เกมพร้อมให้เลือก
          </div>
          <div className="flex gap-2">
            {["All", "Action", "RPG", "Racing", "Puzzle"].map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-zinc-300 bg-zinc-700 hover:bg-blue-600 hover:text-white transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {games.map((g) => {
            const discounted = g.discount > 0;
            const discountedPrice = Math.round(g.price * (1 - g.discount / 100));

            return (
              <article
                key={g.id}
                className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />

                  {/* Discount Badge */}
                  {discounted && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2.5 py-1 rounded-lg shadow-lg">
                      -{g.discount}%
                    </div>
                  )}

                  {/* Genre Badge */}
                  <div className="absolute top-3 right-3 bg-blue-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                    {g.genre}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col">
                  <h3 className="text-base font-bold text-white line-clamp-2 mb-2">
                    {g.title}
                  </h3>

                  {/* Rating */}
                  <div className="mb-3 flex items-center justify-between">
                    <StarRating rating={g.rating} />
                    <span className="text-xs text-zinc-400">({g.reviews})</span>
                  </div>

                  {/* Price Section */}
                  <div className="mb-4">
                    {discounted ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-zinc-500 line-through text-sm">
                          {formatPrice(g.price)}
                        </span>
                        <span className="text-lg font-bold text-green-400">
                          {formatPrice(discountedPrice)}
                        </span>
                      </div>
                    ) : (
                      <div className="text-lg font-bold text-white">
                        {formatPrice(g.price)}
                      </div>
                    )}
                  </div>

                  {/* Button */}
                  <button className="w-full py-2.5 rounded-lg bg-green-700 text-white font-semibold text-sm hover:bg-red-800 transition-all active:scale-95">
                    🛒 ดูรายละเอียด
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 py-8 border-t border-zinc-700 text-center text-zinc-400 text-sm">
          <p>📌 เลื่อนลงเพื่อดูเกมเพิ่มเติม | สนใจเกมไหน ให้คลิกดูรายละเอียด</p>
        </div>
      </div>
    </div>
  );
}

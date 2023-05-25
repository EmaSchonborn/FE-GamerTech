import React from "react";

const products = [
  {
    id: 1,
    name: "Periféricos",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0482/6126/7617/articles/M314_1080x.jpg?v=1633105598",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Consolas",
    href: "#",
    imageSrc:
      "https://img.freepik.com/fotos-premium/consolas-juegos-controladores-blanco-negro-fondo-negro_264404-265.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Sillas",
    href: "#",
    imageSrc:
      "https://img.freepik.com/fotos-premium/silla-gaming-verde-fondo-negro_221414-31.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Hardware",
    href: "#",
    imageSrc:
      "https://p4.wallpaperbetter.com/wallpaper/677/807/774/pc-gaming-computer-pc-cases-technology-wallpaper-preview.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  /* {
    id: 5,
    name: "Juegos",
    href: "#",
    imageSrc:
      "https://c.wallhere.com/photos/8e/16/video_games_digital_art_Space_Invaders_retro_games_black_background_minimalism_simple_background-161463.jpg!d",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  }, */
  /* {
    id: 6,
    name: "Almacenamiento",
    href: "#",
    imageSrc:
      "https://i.blogs.es/58de84/fan-01/450_1000.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  }, */
  // More products...
];

export const Categories = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-[#484848]">Categorías</h2>
        <br/>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-base text-[#484848] font-medium">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
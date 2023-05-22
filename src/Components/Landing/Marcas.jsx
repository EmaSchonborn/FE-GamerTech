import React from "react";

const products = [
  {
    id: 1,
    href: "#",
    imageSrc:
      "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/H2x1_NintendoLogo_Red.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    href: "#",
    imageSrc:
      "https://cdn.dribbble.com/users/3144264/screenshots/16346001/e-ddfsfwyaqafg-.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    href: "#",
    imageSrc:
      "https://www.muycomputer.com/wp-content/uploads/2015/07/Logitech-Logo-Azzurro.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    href: "#",
    imageSrc:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    href: "#",
    imageSrc:
      "https://rare-gallery.com/mocahbig/1309087-Redragon-HD-Wallpaper.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    href: "#",
    imageSrc:
      "https://steamuserimages-a.akamaihd.net/ugc/1002557701827770568/5065A15BD82BCFBCDA57ADBDEAA84B10E49B5398/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    href: "#",
    imageSrc:
      "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/HXUL5EL6VRGVHHWGZHBZVH7USY.jfif",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    href: "#",
    imageSrc:
      "https://www.tuexperto.com/wp-content/uploads/2018/02/lenovo-nerve-center-01.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export const Marcas = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-lg font-semibold text-[#484848]">Categorías</h2>
        <br/> */}
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

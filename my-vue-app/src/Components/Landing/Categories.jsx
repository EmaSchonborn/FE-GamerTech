import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Impresoras e Insumos",
    href: "#",
    imageSrc:
      "https://e1.pxfuel.com/desktop-wallpaper/173/397/desktop-wallpaper-printer.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Sillas Gamer",
    href: "#",
    imageSrc:
      "https://img.freepik.com/fotos-premium/silla-gaming-verde-fondo-negro_221414-31.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Monitores",
    href: "#",
    imageSrc:
      "https://www.zonatech.es/wp-content/uploads/2021/10/kirill-martynov-ym9Y0JaQV3w-unsplash-scaled-e1633109715938.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Periféricos",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0482/6126/7617/articles/M314_1080x.jpg?v=1633105598",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Almacenamiento",
    href: "#",
    imageSrc:
      "https://thumbs.dreamstime.com/b/el-s%C3%B3lido-del-estado-ssd-conduce-discos-en-fondo-negro-ilustraci-n-d-152544981.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Conectividad",
    href: "#",
    imageSrc:
      "https://png.pngtree.com/thumb_back/fw800/background/20230526/pngtree-the-router-is-sitting-on-a-dark-surface-image_2654799.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Consolas",
    href: "#",
    imageSrc:
      "https://img.freepik.com/fotos-premium/consolas-juegos-controladores-blanco-negro-fondo-negro_264404-265.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Placas de Video",
    href: "#",
    imageSrc:
      "https://www.megatecnologia.com.ar/documentos/13/1086_placas-de-video-para-pc.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    name: "Laptops",
    href: "#",
    imageSrc:
      "https://us.123rf.com/450wm/welcomia/welcomia1203/welcomia120300788/12788859-port%C3%A1til-de-fondo-frente-ilustraci%C3%B3n-3d-oscuro-informaci%C3%B3n-e-inform%C3%A1tica-negro-moder-plata-laptop.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 13,
    name: "Coolers",
    href: "#",
    imageSrc:
      "https://t4.ftcdn.net/jpg/03/11/60/85/360_F_311608520_aaUUj0gAQbQEk9lSuA6fGWyiC7k1Nmco.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 14,
    name: "Procesadores",
    href: "#",
    imageSrc:
      "https://img.freepik.com/fotos-premium/ram-procesador-computadora-fondo-oscuro_268192-7256.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export const Categories = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-[#484848]">Categorías</h2>
        <br />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <Link to="/home">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-48 w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-base text-[#484848] font-medium">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

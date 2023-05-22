import React from "react";
import { Link } from "react-router-dom";

const Preguntas = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 font-D-DIN">
      <div className="absolute top-0 left-10 top-10 h-16 w-16">
        <Link
          className="rounded-md bg-black px-3.5 py-2.5 text-xl font-size: 1.25rem; font-semibold text-white shadow-sm hover:bg-slate-50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
        <h1>Preguntas Frecuentes</h1>
        <figure className="mt-10">
          <blockquote className="text-justify text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <li>
            ¿Cuáles son los métodos de pago aceptados en su tienda en línea?
            </li>
            <p>
            Aceptamos diversos métodos de pago, como tarjetas de crédito (Visa, Mastercard, American Express), tarjetas de débito, y transferencias bancarias.
            </p>
            <br />
            <li>¿Cuánto tiempo tarda en procesarse y enviar mi pedido?</li>
            <p>
            Por lo general, procesamos los pedidos dentro de 1 a 2 días hábiles. Una vez que el pedido ha sido procesado, se envía y el tiempo de entrega depende de la opción de envío seleccionada y la ubicación del destinatario.
            </p>
            <br />
            <li>¿Ofrecen envío gratuito? ¿En qué condiciones?</li>
            <p>
            Sí, ofrecemos envío gratuito en pedidos superiores a cierta cantidad. Las condiciones pueden variar según la ubicación y el peso del paquete. Puedes consultar nuestra página de envíos para obtener más información detallada.
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default Preguntas;
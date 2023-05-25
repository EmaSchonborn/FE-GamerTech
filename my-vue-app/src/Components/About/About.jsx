// import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
	return (
		<section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'>
			<div className='absolute top-0 right-0 h-16 w-16'>
				<Link
					className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
					to='/login'>
					Home
				</Link>
			</div>
			<div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
			<div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
			<div className='mx-auto max-w-2xl lg:max-w-4xl'>
				<h1>Sobre GamerTech</h1>
				<figure className='mt-10'>
					<blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
						<p>
							Bienvenido a GamerTech, tu fuente confiable para
							componentes de PC de alta calidad. Somos apasionados
							de la tecnología y nos enorgullece ofrecerte una
							amplia selección de los mejores componentes de los
							principales fabricantes. Ya seas un entusiasta de
							los juegos, un creador de contenido o un profesional
							en busca de potencia y rendimiento, tenemos todo lo
							que necesitas en un solo lugar. Procesadores de
							última generación, tarjetas gráficas, placas base,
							memoria, almacenamiento, fuentes de alimentación y
							sistemas de refrigeración: lo tenemos todo.
						</p>
					</blockquote>
					<figcaption className='mt-10'>
						<img
							className='mx-auto h-10 w-10 rounded-full'
							src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<div className='mt-4 flex items-center justify-center space-x-3 text-base'>
							<div className='font-semibold text-gray-900'>
								
							</div>
							<svg
								viewBox='0 0 2 2'
								width={3}
								height={3}
								aria-hidden='true'
								className='fill-gray-900'>
								<circle
									cx={1}
									cy={1}
									r={1}
								/>
							</svg>
							<div className='text-gray-600'>
								
							</div>
						</div>
					</figcaption>
				</figure>
			</div>
		</section>
	);
};

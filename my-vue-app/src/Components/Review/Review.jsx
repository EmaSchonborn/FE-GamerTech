/* Componente maquetado y con estilo. Falta terminar funcionalidad! */
/* El useState almacena el mensaje ingresado por el usuario. */
/* El handleChange actualiza el estado a medida que el usuario escribe. */
/* El handleSubmit se ejecuta cuando el usuario hace clic en el botón Enviar y luego se muestra el mensaje y la valoració en la consola, tambien devuelve un alert de agradecimiento */
/* El handleRate actualiza el estado de las estrellas */
/* Cuando se envia el mensaje y la valoración de estrellas, todo se muestra por consola del navegador. */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById, sendReview } from "../../Redux/actions";

export function Review() {
	const [mensaje, setMensaje] = useState("");
	const [rate, setRate] = useState(0);
	let params = useParams();
	let userId = localStorage.getItem("id");
	const productoDetail = useSelector((state) => state.productDetail);
	console.log(productoDetail.id);
	const dispatch = useDispatch();
	const handleChange = (event) => {
		setMensaje(event.target.value);
	};

	const handleRate = (rateValue) => {
		setRate(rateValue);
	};

	const handleSubmit = () => {
		let data = {
			mensaje: mensaje,
			rate: rate,
			productId: productoDetail.id,
			userId: userId,
		};
		dispatch(sendReview(data));
		/* Representación en la consola, luego de enviarlo */
		console.log("Mensaje enviado:", mensaje);
		console.log("Valoración:", rate);
		/* Mensaje de agradecimiento */
		alert("Gracias por tu comentario");
		/* Se podría actualizar el estado para borrar el mensaje después de enviarlo */
		setMensaje("");
		setRate(0);
	};
	useEffect(() => {
		params.id ? dispatch(getProductById(params.id)) : null;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.id, dispatch]);

	return (
		<section className='flex flex-col max-w-xl p-8 shadow-sm rounded-sm lg:p-12 bg-slate-50 text-gray-900 font-D-DIN'>
			<div className='flex flex-col items-center w-full'>
				{/* Título */}
				<h2 className='text-3xl font-semibold text-center'>
					Tu opinión nos interesa.
				</h2>
				<div className='flex flex-col items-center py-6 space-y-3'>
					{/* frase */}
					<span className='text-center'>
						¿Cómo resultó tu experiencia?
					</span>
					<div className='flex space-x-3'>
						{/* Puntaje (rate) en estrellas (stars) */}
						{/* 1 estrella (rate 1) */}
						<button
							type='button'
							title='Rate 1 stars'
							aria-label='Rate 1 stars'
							onClick={() => handleRate(1)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-10 h-10 dark:text-yellow-500'>
								<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
							</svg>
						</button>
						{/* 2 estrellas (rate 2) */}
						<button
							type='button'
							title='Rate 2 stars'
							aria-label='Rate 2 stars'
							onClick={() => handleRate(2)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-10 h-10 dark:text-yellow-500'>
								<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
							</svg>
						</button>
						{/* 3 estrellas (rate 3) */}
						<button
							type='button'
							title='Rate 3 stars'
							aria-label='Rate 3 stars'
							onClick={() => handleRate(3)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-10 h-10 dark:text-yellow-500'>
								<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
							</svg>
						</button>
						{/* 4 estrellas (rate 4) */}
						<button
							type='button'
							title='Rate 4 stars'
							aria-label='Rate 4 stars'
							onClick={() => handleRate(4)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-10 h-10 dark:text-yellow-500'>
								<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
							</svg>
						</button>
						{/* Puntaje máximo 5 estrellas (rate 5) */}
						<button
							type='button'
							title='Rate 5 stars'
							aria-label='Rate 5 stars'
							onClick={() => handleRate(5)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-10 h-10 dark:text-yellow-500'>
								<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
							</svg>
						</button>
					</div>
				</div>
				{/* input de texto para dejar mensaje por el usuario */}
				<div className='flex flex-col w-full'>
					<textarea
						rows='3'
						placeholder='Tu mensaje aquí...'
						value={mensaje}
						onChange={handleChange}
						className='p-4 rounded-md resize-none text-gray-900 bg-slate-200'></textarea>
					{/* Botones Enviar y Tal vez más tarde */}
					<button
						type='button'
						className='py-4 my-8 btn btn-primary bg-[#E60011] border-none rounded-sm'
						onClick={handleSubmit}>
						Enviar
					</button>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<a
					rel='noopener noreferrer'
					href='/home'
					className='text-sm text-gray-400'>
					Tal vez más tarde
				</a>
			</div>
		</section>
	);
}

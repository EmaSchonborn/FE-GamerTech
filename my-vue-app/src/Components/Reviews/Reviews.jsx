import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById, getUsers } from "../../Redux/actions";

export default function Reviews() {
  const idLocal = parseInt(localStorage.getItem("id"), 10);
  let params = useParams();
  const productoDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    params.id ? dispatch(getProductById(params.id)) : null;
    dispatch(getUsers());
  }, [params.id, dispatch]);

  const user = useSelector((state) => state.users);
  const comentuser = user.find((e) => e.id === idLocal);

  useEffect(() => {
    if (!user.length) {
      console.log('La información de los usuarios aún se está cargando...');
    } else if (!comentuser) {
      console.log('No se encontró ningún objeto con el ID correspondiente');
    } else {
      console.log(comentuser);
    }
  }, [user, comentuser]);

  const renderStarRating = (score) => {
    const maxRating = 5;
    const starFilled = '★';
    const starEmpty = '☆';
    const filledStars = Math.round(score);
    const emptyStars = maxRating - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(starFilled);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(starEmpty);
    }

    return stars.join('');
  };

  const renderOverallRating = () => {
    if (productoDetail.reviewsScores && productoDetail.reviewsScores.length > 0) {
      const totalScores = productoDetail.reviewsScores.reduce((acc, score) => acc + score.score, 0);
      const averageScore = totalScores / productoDetail.reviewsScores.length;
      return renderStarRating(averageScore);
    }
    return null;
  };

  return (
    <div>
      <h1>Reviews:</h1>
      <div>
        <h2>Puntuación general:</h2>
        <span>{renderOverallRating()}</span>
      </div>
      <div>
        <h2>Últimas reseñas:</h2>
        <br />
        {productoDetail.reviewsScores && comentuser &&
          productoDetail.reviewsScores.map((score, index) => (
            <div key={index}>
              <p>Usuario: {comentuser.name}</p>
              <p>Comentario: {productoDetail.reviewsTexts[index].mensaje}</p>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};








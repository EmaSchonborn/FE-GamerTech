import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById, getUsers } from "../../Redux/actions";

export default function Reviews() {
  const idLocal = parseInt(localStorage.getItem("id"), 10);
  let params = useParams();
  const productoDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  
  // console.log(productoDetail.reviewsTexts);
  // console.log(productoDetail.reviewsScores);
  
  useEffect(() => {
    params.id ? dispatch(getProductById(params.id)) : null;
    dispatch(getUsers());
  }, [params.id, dispatch]);

  const user = useSelector((state) => state.users);
  // console.log(user);
  
  useEffect(() => {
    if (!user.length) {
      console.log('La información de los usuarios aún se está cargando...');
    } else {
      // console.log(user);
    }
  }, [user]);
  
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
    <div className="bg-white p-4 shadow-lg">
  <h1 className="text-xl font-bold">Reviews:</h1>
  <div className="my-4">
    <h2 className="text-lg font-bold">Puntuación general:</h2>
    <span>{renderOverallRating()}</span>
  </div>
  <div className="my-4">
    <h2 className="text-lg font-bold">Últimas reseñas:</h2>
    <br />
    {productoDetail.reviewsScores && productoDetail.reviewsScores.length > 0 &&
      productoDetail.reviewsScores.map((score, index) => {
        const userId = productoDetail.reviewsTexts[index].userId;
        const matchingUser = user.find((user) => user.id === parseInt(userId));

        return (
          <div key={index} className="my-2">
            <p className="font-semibold">Usuario: {matchingUser ? matchingUser.name : "Usuario desconocido"}</p>
            <p className="text-sm">Comentario: {productoDetail.reviewsTexts[index].mensaje}</p>
            <br />
          </div>
        );
      })}
  </div>
</div>

  );
};



















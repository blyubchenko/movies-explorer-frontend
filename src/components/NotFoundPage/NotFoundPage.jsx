import "./NotFoundPage.css";
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); 
  }
  return (
    <div class="page__container page__container_404">
      <p class="not-found">
        404<span class="not-found__text">Страница не найдена</span>
      </p>
      <button  class="not-found__link link" onClick={handleGoBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;

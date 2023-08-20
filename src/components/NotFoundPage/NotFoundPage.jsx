import "./NotFoundPage.css";
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); 
  }
  return (
    <div className="page__container page__container_404">
      <p className="not-found">
        404<span className="not-found__text">Страница не найдена</span>
      </p>
      <button  className="link_not-found link" onClick={handleGoBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;

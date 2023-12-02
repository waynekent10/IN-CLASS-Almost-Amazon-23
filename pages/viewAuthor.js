import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${obj.first_name} ${obj.last_name}</h2>
          <h6>${obj.favorite ? '<span class="fa fa-camera-retro fa-lg">Favorite</span>' : ''}</h6>
          <a href="mailto:${obj.email}">${obj.email}</a>
          <i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
        </div>
      </div>`;

  return renderToDOM('#view', domString);
};

export default viewAuthor;

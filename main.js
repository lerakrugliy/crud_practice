const BASE_URL = "https://jsonplaceholder.typicode.com";

/*      Читання
HTTP-метод GET використовується для отримання існуючих даних
отримати всі пости за допомого HTTP-метода GET*/
const fetchAllPosts = () => {
  return fetch(`${BASE_URL}/posts`).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
};
fetchAllPosts()
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));
//    пост за ідентифікатором
/* - отримати один пост по ідентифікатору за допомогою HTTP-метода GET */
const postId = 1

const fetchPostById = () => {
  return fetch(`${BASE_URL}/posts/${id}`).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
};
/*fetchPostById(postId)
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));*/




/**     Створення
Метод POST
створити новий пост за допомогою за допомогою HTTP-метода POST */

const postToAdd = {
  "userId": 1,
  "id": 1,
  "title": "new post",
  "body": "new body"
}

const options = {
    method: "POST",
    body: JSON.stringify(postToAdd),
    headers: {
"Content-Type": "application/json; charset=UTF-8",
}
}

const createPost = () => {
  return fetch(`${BASE_URL}/posts`, options).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
};
createPost(postId)
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

/*       Оновлення
Методи PUT і PATCH
оновити існуючий пост по ідентифікатору за допомогою HTTP-метода PUT/PATCH
*/

const updateOptions = {
    method: "PATCH",
    body: JSON.stringify(options),
    headers: {
"Content-Type": "application/json; charset=UTF-8",
}
}

const updatePostById = (id) => {
  return fetch(`${BASE_URL}/posts`, updateOptions).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
};
updatePostById(1)
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));
// Метод PATCH
/*     Метод PUT */
/*         Видалення
Метод DELETE
видалити новостворений пост по ідентифікатору за допомогою HTTP-метода DELETE */
const postIdToDelete = 101;

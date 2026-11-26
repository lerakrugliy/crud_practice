const BASE_URL = "https://jsonplaceholder.typicode.com";

/*      Читання
HTTP-метод GET використовується для отримання існуючих даних
отримати всі пости за допомого HTTP-метода GET*/
const fetchAllPosts = async () => {
  const respons = await fetch(`${BASE_URL}/posts`);
  if (!respons.ok) {
    throw new Error(respons.status);
  }
  const posts = await respons.json();
  return posts;
};
/*fetchAllPosts()
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));*/

//    пост за ідентифікатором
/* - отримати один пост по ідентифікатору за допомогою HTTP-метода GET */
const postId = 1;

const fetchPostById = async (id) => {
  const respons = await fetch(`${BASE_URL}/posts/${id}`);
  if (!respons.ok) {
    throw new Error(respons.status);
  }
  const postById = await respons.json();
  return postById;
};
/*fetchPostById(postId)
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));*/

/**     Створення
Метод POST
створити новий пост за допомогою за допомогою HTTP-метода POST */

const postToAdd = {
  userId: 1,
  id: 1,
  title: "new post",
  body: "new body",
};

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const createPost = async () => {
  const resp = await fetch(`${BASE_URL}/posts`, options);
  if (!resp.ok) {
    throw new Error(resp.status);
  }
  const posts = await resp.json();
  return posts;
};
/*createPost(postId)
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));*/

/*       Оновлення
Методи PUT і PATCH
оновити існуючий пост по ідентифікатору за допомогою HTTP-метода PUT/PATCH
*/

const updateOptions = {
  method: "PATCH",
  body: JSON.stringify(options),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const updatePostById = async (id) => {
  const resp = await fetch(`${BASE_URL}/posts/${id}`, updateOptions);
  if (!resp.ok) {
    throw new Error(resp.status);
  }
  const postsById = resp.json();
  return postsById;
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

const fetchUsers = async () => {
  try {
    const resp = await fetch(`${BASE_URL}/users`);
    const users = await resp.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

fetchUsers();

const doSomething = async () => {
  try {
    const posts = await fetchAllPosts();
  } catch (err) {
    console.log(err);
  }
};

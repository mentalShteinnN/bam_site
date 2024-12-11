document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.article');

    articles.forEach((article) => {
        article.addEventListener('click', () => {
            alert(`Вы кликнули на статью: ${article.querySelector('.article__title').textContent}`);
        });
    });
});

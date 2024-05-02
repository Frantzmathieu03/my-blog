document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (!username || !title || !content) {
            alert('Please complete the form.');
            return;
        }

        const post = {
            username,
            title,
            content,
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        window.location.href = 'blog.html';
    });
});

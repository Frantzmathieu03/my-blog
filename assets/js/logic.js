function storePost(post) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const postsContainer = document.querySelector('.posts-container');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Author: ${post.username}</p>
        `;
        postsContainer.appendChild(postDiv);
    });
}
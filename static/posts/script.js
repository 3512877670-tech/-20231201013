// Start with first post
let counter = 1;

// Load posts 20 at a time
const quantity = 20;

// Track if we're currently loading
let loading = false;

// When DOM loads, render the first 20 posts
document.addEventListener('DOMContentLoaded', load);

// If scrolled to bottom, load the next 20 posts
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        load();
    }
};

// Load next set of posts
function load() {
    if (loading) return;
    
    loading = true;
    
    // Show loading indicator
    const loadingElement = document.querySelector('#loading');
    loadingElement.style.display = 'block';

    // Set start and end post numbers, and update counter
    const start = counter;
    const end = start + quantity - 1;
    counter = end + 1;

    // Get new posts and add posts
    fetch(`/posts?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(data => {
        data.posts.forEach(add_post);
        loading = false;
        loadingElement.style.display = 'none';
    })
    .catch(error => {
        console.error('Error loading posts:', error);
        loading = false;
        loadingElement.style.display = 'none';
    });
};

// Add a new post with given contents to DOM
function add_post(contents) {
    // Create new post
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = contents;

    // Add post to DOM
    document.querySelector('#posts').append(post);
};
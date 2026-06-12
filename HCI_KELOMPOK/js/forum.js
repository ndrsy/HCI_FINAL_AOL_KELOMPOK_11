document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("forumModal");
    const openBtn = document.getElementById("openForumModal");
    const closeBtn = document.getElementById("closeForumModal");

    const form = document.getElementById("discussionForm");
    const postsContainer =
        document.getElementById("dynamicPosts");

    function loadPosts() {

        const posts =
            JSON.parse(
                localStorage.getItem("forumPosts")
            ) || [];

        postsContainer.innerHTML = "";

        posts.reverse().forEach(post => {

            const card =
                document.createElement("div");

            card.className = "post-card";

            card.innerHTML = `
                <div class="post-header">

                    <div>
                        <h3>${post.title}</h3>

                        <p class="post-author">
                            ${post.name}
                        </p>
                    </div>

                    <div class="reply-count">
                        New
                    </div>

                </div>

                <p>${post.content}</p>
            `;

            postsContainer.appendChild(card);

        });

    }

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const posts =
            JSON.parse(
                localStorage.getItem("forumPosts")
            ) || [];

        posts.push({

            title:
                document.getElementById("title").value,

            name:
                document.getElementById("name").value,

            email:
                document.getElementById("email").value,

            content:
                document.getElementById("content").value,

            category:
                document.getElementById("category").value

        });

        localStorage.setItem(
            "forumPosts",
            JSON.stringify(posts)
        );

        form.reset();

        modal.style.display = "none";

        loadPosts();

    });

    loadPosts();

});
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const container = document.getElementById("container");
const likedPosts = [];

posts.forEach((postSpecs, index) =>{
        const post = document.createElement("div");
        post.classList = "post";

        const postH = document.createElement("div");
        postH.classList = "post__header";

        const postM = document.createElement("div");
        postM.classList = "post-meta";

        const postMIc = document.createElement("div");
        postMIc.classList = "post-meta__icon";
        postMIc.innerHTML = `<img class="profile-pic" src=${postSpecs.author.image} alt=${postSpecs.author.name}>`;
        postM.appendChild(postMIc);

        const postMD = document.createElement("div");
        postMD.classList = "post-meta__data"
        postMD.innerHTML = `<div class="post-meta__author">${postSpecs.author.name}</div><div class="post-meta__time">4 mesi fa</div>`
        postM.appendChild(postMD)

        postH.appendChild(postM);

        post.appendChild(postH);

        const postTxt = document.createElement("div");
        postTxt.classList = "post__text";
        postTxt.innerHTML = postSpecs.content;
        post.appendChild(postTxt);

        const postImg = document.createElement("div");
        postImg.classList = "post__image";
        postImg.innerHTML = `<img src=${postSpecs.media} alt="">`
        post.appendChild(postImg);

        const postF = document.createElement("div");
        postF.classList = "post__footer";

        const postLikes = document.createElement("div");
        postLikes.classList = "likes js-likes";

        const postLikesCta = document.createElement("div");
        postLikesCta.classList = "likes__cta"

        const likeButton = document.createElement("button");
        likeButton.innerHTML='<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i><span class="like-button__label">Mi Piace</span>'
        likeButton.classList = "like-button js-like-button";
        likeButton.addEventListener("click", 
            function(){
                likeButton.classList.add("like-button--liked");
                postSpecs.likes++
                likesContainer[index].innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${postSpecs.likes}</b> persone`
                likedPosts.push(postSpecs.id);
                console.log(likedPosts);
            }
        );
        postLikesCta.appendChild(likeButton);

        postLikes.appendChild(postLikesCta);

        const postLikesCount = document.createElement("div");
        postLikesCount.classList = "likes__counter";
        postLikesCount.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${postSpecs.likes}</b> persone`
        postLikes.appendChild(postLikesCount);

        postF.appendChild(postLikes);

        post.appendChild(postF)

        container.appendChild(post);
    }
)
const likesContainer = document.getElementsByClassName("likes__counter");
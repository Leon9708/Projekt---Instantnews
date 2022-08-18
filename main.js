let posts = [{
        author: "Leon_777",
        place: "Atlantic, Frankreich",
        image: "./img/leon.JPG",
        profilImage: "./img/leon.JPG",
        description: "Buddelexperte steckt in seinem selbst gebudelten Loch fest.",
        comments: [],
    },
    {
        author: "Martinos",
        place: "Harz, Deutschland",
        image: "./img/nature2.jpg",
        profilImage: "./img/martinos.jpg",
        description: "Feierabend",
        comments: [],
    },
    {
        author: "BeautifulScapes",
        place: "Harz, Deutschland",
        image: "./img/nature3.jpg",
        profilImage: "./img/profil2.jpg",
        description: "Tatsächlich Deutschland",
        comments: [],
    },
    {
        author: "Leon_777",
        place: "Harz, Deutschland",
        image: "./img/nature.jpg",
        profilImage: "./img/leon.JPG",
        description: "Der Hexenkessel",
        comments: [],
    },
    {
        author: "Martinos",
        place: "Blankenburg, Deutschland",
        image: "./img/nature4.jpg",
        profilImage: "./img/martinos.jpg",
        description: "Balancieren kann Ich schon wie ein Großer.",
        comments: [],
    },
];



function renderFeed() {
    for (let i = 0; i < posts.length; i++) {
        generateFeed(i);
    }
}

function like(i) {
    let buttonLike = document.getElementById("likeBtn-" + i);
    let likes = document.getElementById("countLike-" + i);
    let likesText = likes.innerText;
    let likesNum = parseInt(likesText);

    if (buttonLike.classList.contains("far")) {
        buttonLike.classList.remove("far");
        buttonLike.classList.add("fas");
        likesNum++;
    } else {
        buttonLike.classList.add("far");
        buttonLike.classList.remove("fas");
        likesNum--;
    }
    likes.innerText = likesNum;
}

function pushComment(i) {
    let comment = document.getElementById("inputComment-" + i).value;
    let post = posts[i];

    if (comment == null || comment == "") {
        alert("please write comment first");
    } else {
        post["comments"].push(comment);
        document.getElementById("inputComment-" + i).value = "";
        generateComment(i, post);
    }
}

function deleteComment(j, i) {
    posts[i]['comments'].splice(j, 1);
    // comment["comments"].splice(j, 1)
    generateComment(i);
}

function filterFeed() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    console.log(search);
    let feed = document.getElementById("feed");
    feed.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (post['author'].toLowerCase().includes(search)) {
            generateFeed(i);
        }

    }
}

function generateFeed(i) {
    let feed = document.getElementById("feed");
    let post = posts[i];
    feed.innerHTML += htmlFeed(post, i);
}

function generateComment(i) {
    let commentSection = document.getElementById("commentSection-" + i);
    const post = posts[i];
    commentSection.innerHTML = "";
    for (let j = 0; j < post['comments'].length; j++) {
        const postComments = post['comments'][j];
        commentSection.innerHTML += htmlComment(postComments, j, i);
    }


}

function htmlComment(postComments, j, i) {
    return `<div class="feedback_comments">
    <p  class="description_name">Leon_777</p>
    <p  class="description_text">${postComments}</p>
    <button class="btn_delete" onclick="deleteComment(${j}, ${i})"><img class="icon" src="./img/delete.png" alt=""></button>
</div>`;
}

function htmlFeed(post, i) {
    return `
    <div class="box_feed">
        <div class="box_feed_head">
            <img id="profilImg" class="icon_pic" src="${post["profilImage"]}" alt="logo_picture" />
            <div class="box_text_head">
                <p id="name" class="text_head">${post["author"]}</p>
                <p id="location" class="subtext_head">${post["place"]}</p>
            </div>
            <img class="icon" src="./img/setting.png" alt="setting" />
        </div>
            <img class="feed_pic" src="${post["image"]}" alt="logo_picture" />
            <div class="box_feed_feedback">
            <div class="feedback_icons">
                <button onclick="like(${i})" class="btn_heart">
                    <i id="likeBtn-${i}" class="far fa-xl fa-heart"></i>
                </button>
                <img class="icon" src="./img/comment.png" alt="comment" />
                <img class="icon" src="./img/send.png" alt="send" />
                <div class="place_icon">
                    <img class="icon" src="./img/save.png" alt="save" />
                </div>
            </div>
            <p class="feedback_like_text">Gefällt <span id="countLike-${i}">4</span> Mal</p>
            <div class="feedback_description">
                <p id="descriptionName" class="description_name">${post["author"]}</p>
                <p id="description" class="description_text">${post["description"]}</p>
                </div>
                <div id="commentSection-${i}">
                 
                </div>
                <p class="feedback_time">
                    vor <span>2 </span><span>Stunden</span>
                </p>
            </div>
            <div class="box_feed_comment">
                <input id="inputComment-${i}" class="comment_input" type="text" placeholder="Kommentieren..." />
                <button onclick="pushComment(${i})" class="comment_post">Posten</button>
            </div>
        </div>`;
}
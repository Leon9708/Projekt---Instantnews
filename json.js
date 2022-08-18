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





 for (let i = 0; i < posts.length; i++) {
     const post = posts[i];
     if (post['author'].toLowerCase().includes(search)) {
         generateFeed(i);
     }
 }
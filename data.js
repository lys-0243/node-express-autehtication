const bcrypt = require("bcrypt");
var defaultHashedPw;
const utilisateurs = [];

(async () => {
  const salt = await bcrypt.genSalt(10);
  defaultHashedPw = await bcrypt.hash("1234", salt);

  utilisateurs.push({
    nom: "Sylvain Lys",
    email: "stk@gmail.com",
    password: defaultHashedPw,
  });
  utilisateurs.push({
    nom: "Amani Bisimwa",
    email: "amani@local.com",
    password: defaultHashedPw,
  });
})();
module.exports = {
  cours: [
    {
      titre: "Guide complet sur mongoose",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/mongoose.jpg",
    },
    {
      titre: "Javascript moderne",
      desc: `Vous apprendrez dans ce cours les notions fondamentales du langae de programmation
           Javascript`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/js.jpg",
    },
    {
      titre: "MongoDB pour débutants",
      desc: `Gérer vos données avec la base de données non relationnelle MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/mongoDb.jpg",
    },
    {
      titre: "Cours Git et Github pour débutants",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/gitgithub.jpg",
    },
    {
      titre: "NodeJs pour débutants",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/nodejs.jpg",
    },
    {
      titre: "Créer une API avec NodeJs et MongoDB",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/restapi.jpg",
    },
    {
      titre: "Créer des applications NodeJs Sécurisées",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/safenodejs.jpg",
    },
    {
      titre: "Cloner Youtube avec Flutter Web",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/youtubeclone.jpg",
    },
  ],
  utilisateurs
};

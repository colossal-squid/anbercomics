module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/",
  uk: {
    name: "Вечірній Анбернік (anbercomics)",
    bio: "Малюю хтиві і смішні штучки, роблю відео-есе українською",
    avatar: "/images/avatar.jpg",
    nav: { home: "Головна", switch: "English" }
  },
  en: {
    name: "Vechirnyi Anbernik (anbercomics)",
    bio: "Drawing lewd things, making youtube videos",
    avatar: "/images/avatar.jpg",
    nav: { home: "Home", switch: "Українською" }
  },
  year: new Date().getFullYear(),
  youtube: "https://www.youtube.com/@vechirni_anbernic"
};

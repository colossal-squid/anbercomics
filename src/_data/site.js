module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/",
  uk: {
    name: "",
    bio: "Роблю відео-есе про ностальгію, екстрім-культуру 90-х і ранніх 2000-х. Це мій маленький «дім» в інтернеті.",
    avatar: "/images/avatar.jpg",
    nav: { home: "Головна", switch: "English" }
  },
  en: {
    name: "Vechirnyi Anbernik",
    bio: "I make video essays about nostalgia and 90s/early-2000s extreme culture. This is my tiny home on the web.",
    avatar: "/images/avatar.jpg",
    nav: { home: "Home", switch: "Українською" }
  },
  year: new Date().getFullYear()
};

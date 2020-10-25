module.exports = {
  name: "David Porkka",
  shortDesc:
    "This is where I share things with the internet",
  url: "www.davidporkka.com",
  authorEmail: "davidporkka@gmail.com",
  authorHandle: "@dporkka",
  authorName: "David Porkka",
  postsPerPage: 4,
  // socialImage: "",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "#666",
    },
    secondary: {
      background: "#fedb8b",
      text: "black",
      highlight: "#666",
    },
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: false,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};

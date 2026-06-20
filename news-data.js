(function () {
  var API = "https://cca-news-cms.vercel.app/api/news?depth=1&limit=100&sort=-date";

  fetch(API, { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    .then(function (data) {
      var docs = data.docs || [];
      window.CCA_NEWS = docs.map(function (a) {
        return {
          id: a.id,
          category: a.category,
          categoryZh: a.categoryZh,
          date: a.date,
          readTime: a.readTime,
          image: a.image && a.image.url ? a.image.url : "",
          title: a.title,
          titleZh: a.titleZh,
          excerpt: a.excerpt,
          excerptZh: a.excerptZh,
          body: (a.body || []).map(function (b) {
            var type = b.blockType;
            if (type === "bullets") {
              return {
                type: "bullets",
                list:   (b.list   || []).map(function (x) { return x.item; }),
                listZh: (b.listZh || []).map(function (x) { return x.item; }),
              };
            }
            return Object.assign({ type: type }, b);
          }),
        };
      });
    })
    .catch(function (err) {
      console.error("Could not load news from Payload", err);
      window.CCA_NEWS = [];
    });
})();
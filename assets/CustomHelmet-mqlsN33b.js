import { j as t, O as a } from "./main-DRFrzrWC.js";
const r = "/",
  l = ["en", "uk", "ru"],
  d = ({
    language: e,
    title: m,
    pageTitle: p,
    pageDescription: s,
    pagePath: i,
    keywords: c,
  }) => {
    const j = l.filter((n) => n !== e),
      o = i || "",
      x = c ? t.jsx("meta", { name: "keywords", content: c.join(", ") }) : null;
    return t.jsxs(a, {
      children: [
        t.jsx("title", { children: m }),
        t.jsx("meta", { name: "description", content: s }),
        t.jsx("link", { rel: "canonical", href: `${r}/${e}/${o}` }),
        x,
        j.map((n) =>
          t.jsx(
            "link",
            { rel: "alternate", hrefLang: n, href: `${r}/${n}/${o}` },
            n
          )
        ),
        t.jsx("meta", { property: "og:locale", content: e }),
        t.jsx("meta", { property: "og:url", content: `${r}/${e}/${o}` }),
        t.jsx("meta", { property: "og:title", content: p }),
        t.jsx("meta", { property: "og:description", content: s }),
        t.jsx("meta", { property: "twitter:url", content: `${r}/${e}/${o}` }),
        t.jsx("meta", { name: "twitter:description", content: s }),
      ],
    });
  };
export { d as C };

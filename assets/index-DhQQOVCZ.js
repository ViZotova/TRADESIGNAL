import {
  o as S,
  u as E,
  r as m,
  C as L,
  b as I,
  d as A,
  j as s,
  c as $,
} from "./main-DRFrzrWC.js";
import { u as V, C as l } from "./index.esm-CDenUBn6.js";
import { u as z } from "./useAuthRedirect-DAD2nTd5.js";
import { M as W } from "./MainButton-C1R7PPfM.js";
import { N as q } from "./NotRobot-DVcYafmm.js";
import { C as D } from "./CustomLink-DiQI51qp.js";
import { b as F } from "./bitcoin-B_NPvEmV.js";
import { b as M } from "./bitcoin-PbM30oEE.js";
import { b as T } from "./bars-CE7l5pMj.js";
import { C as Z } from "./CustomHelmet-mqlsN33b.js";
import "./index-C768ksZ2.js";
const B = "_wrapper_ck1m9_1",
  H = "_topLinks_ck1m9_11",
  G = "_linkImg_ck1m9_20",
  J = "_title_ck1m9_28",
  K = "_active_ck1m9_39",
  O = "_form_ck1m9_44",
  Q = "_container_ck1m9_52",
  U = "_inputs_ck1m9_60",
  X = "_button_ck1m9_67",
  Y = "_rightSide_ck1m9_71",
  ss = "_desktopWrapper_ck1m9_96",
  es = "_chartRight_ck1m9_119",
  ts = "_bitcoinRight_ck1m9_124",
  t = {
    wrapper: B,
    topLinks: H,
    linkImg: G,
    title: J,
    active: K,
    form: O,
    container: Q,
    inputs: U,
    button: X,
    rightSide: Y,
    desktopWrapper: ss,
    chartRight: es,
    bitcoinRight: ts,
  },
  us = S(() => {
    var p, d, g, u;
    const { t: e, i18n: h } = E("auth"),
      [o, _] = m.useState(!1),
      {
        clearErrors: f,
        register: c,
        handleSubmit: k,
        watch: x,
        setError: a,
        formState: { errors: i },
      } = V(),
      { store: w } = m.useContext(L),
      b = I(),
      j = A();
    z("/");
    const v = async (n) => {
      if (!o) {
        a("captcha", { type: "manual", message: e("notARobotError") });
        return;
      }
      const { email: R, password: C } = n,
        r = await w.registration(R, C);
      if (r) {
        if (r.message.toLowerCase() === "validation error") {
          r.errors.forEach(({ msg: y, path: P }) =>
            a(P, { type: "manual", message: y })
          );
          return;
        }
        r.message.toLowerCase().includes("email")
          ? a("email", { type: "manual", message: r.message })
          : a("password", { type: "manual", message: r.message });
        return;
      }
      b(j("/confirm-email"));
    };
    m.useEffect(() => {
      o && f("captcha");
    }, [o]);
    const N = x("password");
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(Z, {
          language: h.language,
          pageTitle: `${e("registration")}`,
          title: `${e("registration")} | TRADESIGNAL`,
          pageDescription: e("registrationDescription"),
          pagePath: "register",
        }),
        s.jsxs("div", {
          className: t.desktopWrapper,
          children: [
            s.jsxs("div", {
              className: t.rightSide,
              children: [
                s.jsx("img", {
                  src: M,
                  alt: "bitcoin",
                  className: t.bitcoinRight,
                }),
                s.jsx("img", { src: T, alt: "chart", className: t.chartRight }),
              ],
            }),
            s.jsxs("div", {
              className: t.wrapper,
              children: [
                s.jsxs("div", {
                  className: t.topLinks,
                  children: [
                    s.jsx(D, {
                      href: "/login",
                      text: e("login"),
                      className: t.title,
                    }),
                    s.jsx("h2", {
                      className: $(t.title, t.active),
                      children: e("registration"),
                    }),
                    s.jsx("img", {
                      src: F,
                      alt: "bitcoin",
                      className: t.linkImg,
                    }),
                  ],
                }),
                s.jsxs("form", {
                  className: t.form,
                  onSubmit: k(v),
                  children: [
                    s.jsxs("div", {
                      className: t.container,
                      children: [
                        s.jsxs("div", {
                          className: t.inputs,
                          children: [
                            s.jsx(l, {
                              placeholder: e("email"),
                              error: (p = i.email) == null ? void 0 : p.message,
                              ...c("email", {
                                required: e("enterEmailAddress"),
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: e("enterEmailAddress"),
                                },
                              }),
                            }),
                            s.jsx(l, {
                              placeholder: e("password"),
                              error:
                                (d = i.password) == null ? void 0 : d.message,
                              category: "password",
                              ...c("password", {
                                required: e("enterValidPassword"),
                                pattern: {
                                  value:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[a-zA-Z\d!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]{8,}$/,
                                  message: e("enterValidPassword"),
                                },
                              }),
                            }),
                            s.jsx(l, {
                              placeholder: e("repeatPassword"),
                              error:
                                (g = i.confirmPassword) == null
                                  ? void 0
                                  : g.message,
                              category: "password",
                              ...c("confirmPassword", {
                                required: e("incorrectlyPassword"),
                                validate: (n) =>
                                  n === N || e("incorrectlyPassword"),
                              }),
                            }),
                          ],
                        }),
                        s.jsx(q, {
                          setVerified: _,
                          error: (u = i.captcha) == null ? void 0 : u.message,
                        }),
                      ],
                    }),
                    s.jsx(W, {
                      className: t.button,
                      type: "submit",
                      style: "action",
                      children: e("registration"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  });
export { us as default };

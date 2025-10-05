import {
  o as S,
  u as E,
  r as m,
  C as I,
  b as L,
  d as A,
  j as s,
  c as $,
} from "./main-Df4t8NvR.js";
import { u as V, C as l } from "./index.esm-BM8P16ry.js";
import { u as z } from "./useAuthRedirect-Ble_SSeo.js";
import { M as W } from "./MainButton-C-ccK8LT.js";
import { N as q } from "./NotRobot-C2j72Qb3.js";
import { C as D } from "./CustomLink-1v0FKk3E.js";
import { t as F } from "./bitcoin-Cg_z9DVj.js";
import { b as M } from "./bitcoin-PbM30oEE.js";
import { w as T } from "./bars-BDl2Wy18.js";
import { C as Z } from "./CustomHelmet-CXGSIgGZ.js";
import "./index-BnIAfu-d.js";
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
        handleSubmit: w,
        watch: k,
        setError: r,
        formState: { errors: i },
      } = V(),
      { store: x } = m.useContext(I),
      j = L(),
      b = A();
    z("/");
    const v = async (n) => {
      if (!o) {
        r("captcha", { type: "manual", message: e("notARobotError") });
        return;
      }
      const { email: R, password: C } = n,
        a = await x.registration(R, C);
      if (a) {
        if (a.message.toLowerCase() === "validation error") {
          a.errors.forEach(({ msg: y, path: P }) =>
            r(P, { type: "manual", message: y })
          );
          return;
        }
        a.message.toLowerCase().includes("email")
          ? r("email", { type: "manual", message: a.message })
          : r("password", { type: "manual", message: a.message });
        return;
      }
      j(b("/confirm-email"));
    };
    m.useEffect(() => {
      o && f("captcha");
    }, [o]);
    const N = k("password");
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
                  onSubmit: w(v),
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

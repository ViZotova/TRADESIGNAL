import {
  o as C,
  u as P,
  r as c,
  C as S,
  b as E,
  d as L,
  j as s,
  c as I,
} from "./main-CUM0TpEs.js";
import { u as A, C as h } from "./index.esm-bCJaHxzV.js";
import { N as $ } from "./NotRobot-cooQrrcj.js";
import { M as V } from "./MainButton-CN3kiotW.js";
import { C as _ } from "./CustomLink-DovV0LrB.js";
import { C as z } from "./CustomHelmet-BI_KvzLr.js";
import { u as W } from "./useAuthRedirect-DzyeWYEt.js";
import { b as q } from "./bitcoin-B_NPvEmV.js";
import { b as D } from "./bitcoin-PbM30oEE.js";
import { b as F } from "./bars-CE7l5pMj.js";
import "./index-CABaQo5O.js";
const M = "_wrapper_atysd_1",
  T = "_topLinks_atysd_11",
  Z = "_linkImg_atysd_20",
  B = "_title_atysd_28",
  H = "_active_atysd_39",
  G = "_form_atysd_44",
  J = "_container_atysd_52",
  K = "_inputs_atysd_60",
  O = "_button_atysd_67",
  Q = "_forgotPassword_atysd_71",
  U = "_rightSide_atysd_79",
  X = "_desktopWrapper_atysd_107",
  Y = "_chartRight_atysd_130",
  ss = "_bitcoinRight_atysd_135",
  t = {
    wrapper: M,
    topLinks: T,
    linkImg: Z,
    title: B,
    active: H,
    form: G,
    container: J,
    inputs: K,
    button: O,
    forgotPassword: Q,
    rightSide: U,
    desktopWrapper: X,
    chartRight: Y,
    bitcoinRight: ss,
  },
  ps = C(() => {
    var p, g, u;
    const { t: e, i18n: f } = P("auth"),
      [o, x] = c.useState(!1),
      {
        clearErrors: b,
        register: m,
        handleSubmit: y,
        setError: r,
        formState: { errors: i },
      } = A(),
      { store: n } = c.useContext(S),
      l = E(),
      d = L();
    W("/");
    const j = async (w) => {
      if (!o) {
        r("captcha", { type: "manual", message: e("notARobotError") });
        return;
      }
      const { email: N, password: v } = w,
        a = await n.login(N, v);
      if (a) {
        if (a.message.toLowerCase() === "validation error") {
          a.errors.forEach(({ msg: k, path: R }) =>
            r(R, { type: "manual", message: k })
          );
          return;
        }
        a.message.toLowerCase().includes("email")
          ? r("email", { type: "manual", message: a.message })
          : r("password", { type: "manual", message: a.message });
        return;
      }
      if (!n.user.isActivated) {
        l(d("/confirm-email"));
        return;
      }
      if (!n.user.referralId) {
        l(d("/enter-id"));
        return;
      }
    };
    return (
      c.useEffect(() => {
        o && b("captcha");
      }, [o]),
      s.jsxs(s.Fragment, {
        children: [
          s.jsx(z, {
            language: f.language,
            pageTitle: `${e("login")}`,
            pageDescription: e("loginDescription"),
            title: `${e("login")} | TRADESIGNAL`,
            pagePath: "login",
          }),
          s.jsxs("div", {
            className: t.desktopWrapper,
            children: [
              s.jsxs("div", {
                className: t.rightSide,
                children: [
                  s.jsx("img", {
                    src: D,
                    alt: "bitcoin",
                    className: t.bitcoinRight,
                  }),
                  s.jsx("img", {
                    src: F,
                    alt: "chart",
                    className: t.chartRight,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: t.wrapper,
                children: [
                  s.jsxs("div", {
                    className: t.topLinks,
                    children: [
                      s.jsx("h2", {
                        className: I(t.title, t.active),
                        children: e("login"),
                      }),
                      s.jsx(_, {
                        href: "/register",
                        text: e("registration"),
                        className: t.title,
                      }),
                      s.jsx("img", {
                        src: q,
                        alt: "bitcoin",
                        className: t.linkImg,
                      }),
                    ],
                  }),
                  s.jsxs("form", {
                    className: t.form,
                    onSubmit: y(j),
                    children: [
                      s.jsxs("div", {
                        className: t.container,
                        children: [
                          s.jsxs("div", {
                            className: t.inputs,
                            children: [
                              s.jsx(h, {
                                placeholder: e("email"),
                                error:
                                  (p = i.email) == null ? void 0 : p.message,
                                ...m("email", {
                                  required: e("enterEmailAddress"),
                                  pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: e("enterEmailAddress"),
                                  },
                                }),
                              }),
                              s.jsx(h, {
                                placeholder: e("password"),
                                category: "password",
                                error:
                                  (g = i.password) == null ? void 0 : g.message,
                                ...m("password", {
                                  required: e("enterValidPassword"),
                                  pattern: {
                                    value:
                                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[a-zA-Z\d!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]{8,}$/,
                                    message: e("enterValidPassword"),
                                  },
                                }),
                              }),
                            ],
                          }),
                          s.jsx($, {
                            setVerified: x,
                            error: (u = i.captcha) == null ? void 0 : u.message,
                          }),
                          s.jsx(_, {
                            className: t.forgotPassword,
                            text: e("forgotPassword"),
                            href: "/forgot-password",
                          }),
                        ],
                      }),
                      s.jsx(V, {
                        type: "submit",
                        className: t.button,
                        style: "action",
                        children: e("login"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  });
export { ps as default };

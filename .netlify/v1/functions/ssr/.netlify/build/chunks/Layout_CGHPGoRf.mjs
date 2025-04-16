import { e as createComponent, m as maybeRenderHead, l as renderScript, h as addAttribute, r as renderTemplate, f as createAstro, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_C6QFceID.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const navData = [
  // {
  //   name: "Home",
  //   path: "/",
  // },
  {
    name: "About",
    path: "/", 
  },
  {
    name: "Blogs",
    path: "/blog",
  },
];

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-5blmo7yk> <div class="navDiv" data-astro-cid-5blmo7yk> <ul data-astro-cid-5blmo7yk> ${navData.map((item) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(item.path, "href")} data-astro-cid-5blmo7yk>${item.name}</a> </li>`)} </ul> </div> </nav>  ${renderScript($$result, "/home/pc/Desktop/makshud/blogAstro/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/pc/Desktop/makshud/blogAstro/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, frontmatter } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/pc/Desktop/makshud/blogAstro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

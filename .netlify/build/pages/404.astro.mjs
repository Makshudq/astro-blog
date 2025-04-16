import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6QFceID.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CGHPGoRf.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="itemCenter"> <h1>404 page not found</h1> <h3>Opps, not on write page ??</h3> <a href="/">Go, Home !!!</a> </section> ` })}`;
}, "/home/pc/Desktop/makshud/blogAstro/src/pages/404.astro", void 0);

const $$file = "/home/pc/Desktop/makshud/blogAstro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

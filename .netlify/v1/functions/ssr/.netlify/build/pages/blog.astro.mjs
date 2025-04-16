import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_C6QFceID.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_CGHPGoRf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { data } = Astro2.props;
  const { frontmatter, url } = data;
  console.log(url, "dataCard.......");
  const { title, description, date, image, author } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<div class="itemCenter shadow-xl p-2 rounded p-8"> <h1 class="m-2 font-bold">${title}</h1> <img${addAttribute(image.src, "src")} alt=""> <small class="m-2">${author} <span>${new Date(date).getFullYear()}</span></small> <!-- <Image src={image.src} width={400} height={600} alt={image.alt || title} /> --> <a${addAttribute(url, "href")}><button class="bg-blue-700 text-white px-3 py-1 rounded m-2">Read</button></a> <h4 class="text-center"> ${description} </h4> </div>`;
}, "/home/pc/Desktop/makshud/blogAstro/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./post-1.md": () => import('../chunks/post-1_BtMrCd-S.mjs').then(n => n._),"./post-2.md": () => import('../chunks/post-2_WJstGaUR.mjs').then(n => n._),"./post-3.md": () => import('../chunks/post-3_CtBc8poj.mjs').then(n => n._),"./post-4.md": () => import('../chunks/post-4_CjP2r7AY.mjs').then(n => n._),"./post-5.md": () => import('../chunks/post-5_D2eG9-UY.mjs').then(n => n._)}), () => "./*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid gap-8 p-4 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]"> ${allPosts.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "data": item })}`)} </div>  ` })}`;
}, "/home/pc/Desktop/makshud/blogAstro/src/pages/blog/index.astro", void 0);

const $$file = "/home/pc/Desktop/makshud/blogAstro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

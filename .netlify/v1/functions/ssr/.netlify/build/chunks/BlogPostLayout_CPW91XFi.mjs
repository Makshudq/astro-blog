import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as renderSlot } from './astro/server_C6QFceID.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CGHPGoRf.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  const { title, description, date, image, author } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-2q5oecfc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="postHeader itemCenter" data-astro-cid-2q5oecfc> <h1 data-astro-cid-2q5oecfc>${title}</h1> <a${addAttribute("/category/1", "href")} data-astro-cid-2q5oecfc>Category</a> <p data-astro-cid-2q5oecfc>${author} <span data-astro-cid-2q5oecfc>${new Date(date).getFullYear()}</span></p> <img${addAttribute(image.src, "src")} alt="" data-astro-cid-2q5oecfc> <!-- <Image src={image.src} width={400} height={600} alt={image.alt || title} /> --> <h4 data-astro-cid-2q5oecfc> ${description} </h4> </header> <div${addAttribute({ maxWidth: "1200px", margin: "auto", paddingBottom: "2rem" }, "style")} data-astro-cid-2q5oecfc> ${renderSlot($$result2, $$slots["default"])} </div> ` })} `;
}, "/home/pc/Desktop/makshud/blogAstro/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as $ };

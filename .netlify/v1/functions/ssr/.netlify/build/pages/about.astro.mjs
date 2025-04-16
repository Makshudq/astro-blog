import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6QFceID.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CGHPGoRf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-kh7btl4r> <img src="images/makshudq.jpeg" alt="" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About me</h1> <h4 data-astro-cid-kh7btl4r>
Passionate FullStack Developer | Reactjs, Nextjs, NodeJs, ExpressJs,
      MongoDB, Tailwind CSS, SCSS, MUI, Bootstrap, HTML, CSS & JavaScript |
      Seeking High-Growth Opportunities
</h4> <p data-astro-cid-kh7btl4r>
I'm a passionate and results-driven Full Stack Developer with strong
      expertise in building modern, responsive web applications using React.js,
      Next.js, Node.js, and MongoDB. With hands-on experience in front-end tools
      like Tailwind CSS, SCSS, MUI, Bootstrap, and solid foundations in HTML,
      CSS, and JavaScript, I craft clean, user-friendly interfaces and scalable
      backend solutions.<br data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r>
I thrive in fast-paced environments where I can continuously learn and
      contribute to meaningful, high-growth projects. My goal is to be part of a
      forward-thinking team where innovation and collaboration lead the way.<br data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>
Feel free to reach out to me at makshudq@gmail.com or on WhatsApp: +91 8866331871
      — I’m always open to exciting opportunities and new challenges!
</p> </section> ` })} `;
}, "/home/pc/Desktop/makshud/blogAstro/src/pages/about.astro", void 0);

const $$file = "/home/pc/Desktop/makshud/blogAstro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

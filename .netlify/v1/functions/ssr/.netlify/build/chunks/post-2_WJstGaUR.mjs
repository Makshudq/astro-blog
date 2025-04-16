import { e as createComponent, k as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_C6QFceID.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_CPW91XFi.mjs';

const html = () => "<p>post-2</p>\n<p>Nisi duis ex aliqua eu officia eiusmod duis magna pariatur. Irure laborum qui aliqua nulla esse cillum laborum aliquip nulla elit. Id id Lorem duis irure cillum culpa. Nulla sint et aliqua velit do. Nulla sit sit proident consectetur enim ullamco aliqua in reprehenderit ullamco officia.</p>\n<h2 id=\"what-is-css\">What is CSS?</h2>\n<p>Ad ipsum velit sint enim exercitation mollit consequat elit mollit qui commodo aute. Laboris culpa voluptate aliquip incididunt duis. Cupidatat aliquip et sunt aute fugiat cupidatat irure voluptate. Occaecat officia et sunt.</p>\n<p>Officia tempor voluptate enim consequat cillum aute fugiat cupidatat incididunt magna labore in commodo. Eiusmod nostrud non deserunt. Incididunt excepteur pariatur magna. Proident aute ad in velit labore enim sit cillum ad mollit proident et qui. Esse sunt ullamco ullamco ipsum enim eu esse id eu exercitation laboris magna Lorem. Anim nostrud officia anim velit do exercitation labore mollit excepteur excepteur ex.</p>\n<h2 id=\"you-know\">You know?</h2>\n<p>Ipsum adipisicing exercitation dolor pariatur labore qui. Culpa cupidatat ea elit eiusmod tempor ea qui dolor Lorem laborum adipisicing. Ad ea laboris qui cupidatat deserunt culpa.</p>\n<ul>\n<li>Nulla ex velit adipisicing</li>\n<li>proident fugiat deserunt sunt</li>\n<li>eu adipisicing sint incididunt quis qui.</li>\n</ul>\n<p>Nulla fugiat labore duis ullamco reprehenderit excepteur laboris tempor ullamco aliquip laborum aliqua. Est tempor nisi magna ut elit pariatur commodo.</p>\n<p>Labore commodo do incididunt amet ad et exercitation magna veniam veniam aute laboris excepteur occaecat Lorem. Fugiat in magna commodo magna nulla eu. Fugiat nulla aliqua sunt duis enim irure aliquip fugiat aliqua Lorem ad tempor incididunt proident incididunt. Labore fugiat tempor esse cillum voluptate culpa anim sunt consequat. Ipsum minim nostrud laborum sit aliquip duis officia consequat est. Fugiat mollit elit nulla. Sit minim est elit labore. Sunt eu pariatur pariatur ut deserunt nulla labore in non sit tempor voluptate ex.</p>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"Why is this CSS so weird?","date":"2022-12-09T00:00:00.000Z","author":"Anna Dixon","image":{"src":"/images/post-4.jpg","alt":"A picture of a coder"},"description":"The global css file for this site is a bit different than I’d write things normally, but I’m trying to keep you from having to write a bunch of random classes.","draft":false,"category":"CSS"};
				const file = "/home/pc/Desktop/makshud/blogAstro/src/pages/blog/post-2.md";
				const url = "/blog/post-2";
				function rawContent() {
					return "   \n                                            \n                                \n                \n                  \n        \n                            \n                              \n \n                                                                                                                                                                            \n            \n             \n   \n\npost-2 \n\nNisi duis ex aliqua eu officia eiusmod duis magna pariatur. Irure laborum qui aliqua nulla esse cillum laborum aliquip nulla elit. Id id Lorem duis irure cillum culpa. Nulla sint et aliqua velit do. Nulla sit sit proident consectetur enim ullamco aliqua in reprehenderit ullamco officia.\n\n## What is CSS?\n\nAd ipsum velit sint enim exercitation mollit consequat elit mollit qui commodo aute. Laboris culpa voluptate aliquip incididunt duis. Cupidatat aliquip et sunt aute fugiat cupidatat irure voluptate. Occaecat officia et sunt.\n\nOfficia tempor voluptate enim consequat cillum aute fugiat cupidatat incididunt magna labore in commodo. Eiusmod nostrud non deserunt. Incididunt excepteur pariatur magna. Proident aute ad in velit labore enim sit cillum ad mollit proident et qui. Esse sunt ullamco ullamco ipsum enim eu esse id eu exercitation laboris magna Lorem. Anim nostrud officia anim velit do exercitation labore mollit excepteur excepteur ex.\n\n## You know?\n\nIpsum adipisicing exercitation dolor pariatur labore qui. Culpa cupidatat ea elit eiusmod tempor ea qui dolor Lorem laborum adipisicing. Ad ea laboris qui cupidatat deserunt culpa.\n\n- Nulla ex velit adipisicing\n- proident fugiat deserunt sunt\n- eu adipisicing sint incididunt quis qui.\n\nNulla fugiat labore duis ullamco reprehenderit excepteur laboris tempor ullamco aliquip laborum aliqua. Est tempor nisi magna ut elit pariatur commodo.\n\nLabore commodo do incididunt amet ad et exercitation magna veniam veniam aute laboris excepteur occaecat Lorem. Fugiat in magna commodo magna nulla eu. Fugiat nulla aliqua sunt duis enim irure aliquip fugiat aliqua Lorem ad tempor incididunt proident incididunt. Labore fugiat tempor esse cillum voluptate culpa anim sunt consequat. Ipsum minim nostrud laborum sit aliquip duis officia consequat est. Fugiat mollit elit nulla. Sit minim est elit labore. Sunt eu pariatur pariatur ut deserunt nulla labore in non sit tempor voluptate ex.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-is-css","text":"What is CSS?"},{"depth":2,"slug":"you-know","text":"You know?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

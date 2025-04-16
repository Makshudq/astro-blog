import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_WBh0Y7yA.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/post-1.astro.mjs');
const _page4 = () => import('./pages/blog/post-2.astro.mjs');
const _page5 = () => import('./pages/blog/post-3.astro.mjs');
const _page6 = () => import('./pages/blog/post-4.astro.mjs');
const _page7 = () => import('./pages/blog/post-5.astro.mjs');
const _page8 = () => import('./pages/blog/_slug_.astro.mjs');
const _page9 = () => import('./pages/blog.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/post-1.md", _page3],
    ["src/pages/blog/post-2.md", _page4],
    ["src/pages/blog/post-3.md", _page5],
    ["src/pages/blog/post-4.md", _page6],
    ["src/pages/blog/post-5.md", _page7],
    ["src/pages/blog/[slug].astro", _page8],
    ["src/pages/blog/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6f1974fc-8b18-431c-a05f-6db8a5dc8679"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

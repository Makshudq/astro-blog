import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_C6QFceID.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/pc/Desktop/makshud/blogAstro/","cacheDir":"file:///home/pc/Desktop/makshud/blogAstro/node_modules/.astro/","outDir":"file:///home/pc/Desktop/makshud/blogAstro/dist/","srcDir":"file:///home/pc/Desktop/makshud/blogAstro/src/","publicDir":"file:///home/pc/Desktop/makshud/blogAstro/public/","buildClientDir":"file:///home/pc/Desktop/makshud/blogAstro/dist/","buildServerDir":"file:///home/pc/Desktop/makshud/blogAstro/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"section[data-astro-cid-kh7btl4r]{max-width:800px;display:flex;align-items:center;justify-content:center;flex-direction:column;margin:2rem auto}img[data-astro-cid-kh7btl4r]{max-width:100%;height:330px;width:300px;border-radius:50%}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".postHeader[data-astro-cid-2q5oecfc]{max-width:600px}h4[data-astro-cid-2q5oecfc]{text-align:center}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/blog/post-1","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".postHeader[data-astro-cid-2q5oecfc]{max-width:600px}h4[data-astro-cid-2q5oecfc]{text-align:center}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/blog/post-2","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-2\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-2.md","pathname":"/blog/post-2","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".postHeader[data-astro-cid-2q5oecfc]{max-width:600px}h4[data-astro-cid-2q5oecfc]{text-align:center}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/blog/post-3","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-3\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-3.md","pathname":"/blog/post-3","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".postHeader[data-astro-cid-2q5oecfc]{max-width:600px}h4[data-astro-cid-2q5oecfc]{text-align:center}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/blog/post-4","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-4\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-4.md","pathname":"/blog/post-4","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".postHeader[data-astro-cid-2q5oecfc]{max-width:600px}h4[data-astro-cid-2q5oecfc]{text-align:center}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/blog/post-5","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-5\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-5.md","pathname":"/blog/post-5","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".postHeader[data-astro-cid-2q5oecfc]{max-width:600px}h4[data-astro-cid-2q5oecfc]{text-align:center}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"section[data-astro-cid-j7pv25f6]{max-width:800px;display:flex;align-items:center;justify-content:center;flex-direction:column;margin:2rem auto}img[data-astro-cid-j7pv25f6]{max-width:100%;height:330px;width:300px;border-radius:50%}\n"},{"type":"external","src":"/_astro/post-1.GTAVDLKO.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/pc/Desktop/makshud/blogAstro/src/pages/blog/post-1.md",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/blog/post-2.md",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/blog/post-3.md",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/blog/post-4.md",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/blog/post-5.md",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/pc/Desktop/makshud/blogAstro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"pages/blog/post-1.astro.mjs","\u0000@astro-page:src/pages/blog/post-2@_@md":"pages/blog/post-2.astro.mjs","\u0000@astro-page:src/pages/blog/post-3@_@md":"pages/blog/post-3.astro.mjs","\u0000@astro-page:src/pages/blog/post-4@_@md":"pages/blog/post-4.astro.mjs","\u0000@astro-page:src/pages/blog/post-5@_@md":"pages/blog/post-5.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_WBh0Y7yA.mjs","/home/pc/Desktop/makshud/blogAstro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/pc/Desktop/makshud/blogAstro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D76jSRVW.mjs","@astrojs/react/client.js":"_astro/client.BkIewRBl.js","/home/pc/Desktop/makshud/blogAstro/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Bx4zgBdY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/pc/Desktop/makshud/blogAstro/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","let e=document.querySelectorAll(\"a\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"class\",\"active-link\")});console.log(e);"]],"assets":["/_astro/post-1.GTAVDLKO.css","/favicon.svg","/_astro/client.BkIewRBl.js","/images/makshudq.jpeg","/images/post-1.jpg","/images/post-3.jpg","/images/post-4.jpg","/images/post-5.jpg","/images/post-6.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"eak0XMcCF1JH9fgc1mwcFuOe0/CBKfLer9LNO2gXAeg=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/pc/Desktop/makshud/blogAstro/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };

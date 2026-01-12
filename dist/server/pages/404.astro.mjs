import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BawkqYXj.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Cto2WWc8.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[60vh] flex items-center justify-center"> <div class="text-center"> <h1 class="text-6xl font-bold text-primary mb-4">404</h1> <p class="text-2xl text-gray-700 mb-8">Page not found</p> <p class="text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist.</p> <a href="/" class="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
Go back home
</a> </div> </div> ` })}`;
}, "/Volumes/Core/github/src/calirvine/src/pages/404.astro", void 0);

const $$file = "/Volumes/Core/github/src/calirvine/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=404.astro.mjs.map

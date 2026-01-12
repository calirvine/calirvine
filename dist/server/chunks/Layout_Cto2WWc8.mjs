import { e as createComponent, f as createAstro, h as addAttribute, m as maybeRenderHead, n as renderSlot, r as renderTemplate } from './astro/server_BawkqYXj.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Cal Irvine",
    description = "Full-stack developer and freelancer"
  } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🧑‍💻</text></svg>"> ${maybeRenderHead()}<body class="bg-white text-gray-900" data-astro-cid-sckkx6r4> <header class="border-b border-gray-200 bg-white sticky top-0 z-50" data-astro-cid-sckkx6r4> <nav class="max-w-4xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between" data-astro-cid-sckkx6r4> <a href="/" class="text-2xl font-bold text-primary hover:text-primary-light transition-colors" data-astro-cid-sckkx6r4>
Cal Irvine
</a> <div class="flex gap-6" data-astro-cid-sckkx6r4> <a href="#experience" class="text-gray-600 hover:text-primary transition-colors" data-astro-cid-sckkx6r4>Experience</a> <a href="#education" class="text-gray-600 hover:text-primary transition-colors" data-astro-cid-sckkx6r4>Education</a> <a href="#skills" class="text-gray-600 hover:text-primary transition-colors" data-astro-cid-sckkx6r4>Skills</a> </div> </nav> </header> <main class="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16 relative" data-astro-cid-sckkx6r4> <!-- Download Button --> <button class="download-button" onclick="window.print()" aria-label="Download as PDF" title="Download as PDF" data-astro-cid-sckkx6r4> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sckkx6r4> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-sckkx6r4></path> <polyline points="7 10 12 15 17 10" data-astro-cid-sckkx6r4></polyline> <line x1="12" y1="15" x2="12" y2="3" data-astro-cid-sckkx6r4></line> </svg> </button> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-gray-200 mt-20 py-12 bg-gray-50" data-astro-cid-sckkx6r4> <div class="max-w-4xl mx-auto px-4 md:px-8 text-center text-gray-600" data-astro-cid-sckkx6r4> <p class="mb-4" data-astro-cid-sckkx6r4>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Cal Irvine. All rights reserved.
</p> </div> </footer> </body>`;
}, "/Volumes/Core/github/src/calirvine/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
//# sourceMappingURL=Layout_Cto2WWc8.mjs.map

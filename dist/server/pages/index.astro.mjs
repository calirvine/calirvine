import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, f as createAstro, l as Fragment, u as unescapeHTML, h as addAttribute, n as renderSlot } from '../chunks/astro/server_BawkqYXj.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Cto2WWc8.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4 items-center"> <a href="https://twitter.com/cal_irvine" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Twitter" title="Twitter"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.007 3.747 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="https://github.com/calirvine" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary hover:bg-primary hover:text-white transition-colors" aria-label="GitHub" title="GitHub"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.195 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="https://linkedin.com/in/callum-irvine-58bb094b" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn" title="LinkedIn"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path> </svg> </a> </div>`;
}, "/Volumes/Core/github/src/calirvine/src/components/SocialLinks.astro", void 0);

const $$Bio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="max-w-3xl"> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-2">Cal Irvine</h1> <p class="text-gray-700 mb-2 leading-relaxed">
I'm a software developer from Toronto, Ontario, Canada. I mostly work in
      fullstack JavaScript, but I like playing around with other languages as
      well. In my free time I love to walk my dogs, hang out with my kids, rock
      climb, hike, and camp.
</p> <p class="text-gray-700 mb-6 leading-relaxed"> <a href="mailto:hi@calirvine.com" class="text-blue-600 hover:text-blue-800 underline">Send me a message</a> if you think you would enjoy working together!
</p> ${renderComponent($$result, "SocialLinks", $$SocialLinks, {})} </div> </section>`;
}, "/Volumes/Core/github/src/calirvine/src/components/Bio.astro", void 0);

const $$Astro$3 = createAstro();
const $$SkillPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkillPill;
  const { name, iconName } = Astro2.props;
  const getIconSVG = (icon) => {
    const icons = {
      "Code": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      "Zap": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
      "GitBranch": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
      "Palette": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path></svg>',
      "FileText": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="11" x2="8" y2="11"></line><line x1="12" y1="15" x2="8" y2="15"></line></svg>',
      "Database": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path></svg>',
      "FileCode": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="11" x2="8" y2="11"></line><polyline points="9 17 12 20 15 17"></polyline></svg>',
      "Users": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      "Cloud": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
      "Container": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7l10-4 10 4M2 17l10 4 10-4M2 12l10 4 10-4"></path></svg>',
      "Network": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6"></rect><rect x="15" y="3" width="6" height="6"></rect><rect x="15" y="15" width="6" height="6"></rect><rect x="3" y="15" width="6" height="6"></rect><line x1="9" y1="6" x2="15" y2="6"></line><line x1="6" y1="9" x2="6" y2="15"></line><line x1="9" y1="18" x2="15" y2="18"></line><line x1="18" y1="9" x2="18" y2="15"></line></svg>',
      "CheckCircle": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      "Sparkles": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>'
    };
    return icons[icon] || icons["Code"];
  };
  return renderTemplate`${maybeRenderHead()}<span class="badge flex items-center gap-1.5 inline-flex" data-astro-cid-h2daxiz5> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIconSVG(iconName))}` })} ${name} </span> `;
}, "/Volumes/Core/github/src/calirvine/src/components/SkillPill.astro", void 0);

const experienceData = [
	{
		company: "Shopify",
		jobTitle: "Senior Software Engineer",
		startDate: "2022-05-01",
		endDate: null,
		url: "https://shopify.com",
		description: [
			"Senior fullstack engineer in growth engineering on the activation team, focused on helping merchants succeed in their early journey. Build tools for accelerating merchant conversion from other platforms and contribute to AI-powered features that enhance the early merchant experience. Previously worked on retail growth initiatives.",
			"Design and maintain scalable web applications using Ruby on Rails for backend services and React for frontend interfaces, with fullstack TypeScript applications. Work on GraphQL APIs handling millions of requests, designing schemas for backward compatibility and evolution.",
			"Build distributed systems and cloud infrastructure serving millions of merchants. On-call engineer managing production incidents and reliability. Contribute to security and OAuth initiatives as part of platform work. Instrument systems with OpenTelemetry for production observability."
		],
		skills: [
			"rails",
			"react",
			"typescript",
			"ruby",
			"javascript",
			"postgresql",
			"mysql",
			"kafka",
			"graphql",
			"distributedSystems",
			"opentelemetry",
			"observability",
			"oauth",
			"security",
			"onCall"
		]
	},
	{
		company: "Borrowell",
		jobTitle: "Senior Frontend Developer",
		startDate: "2020-03-01",
		endDate: "2022-05-01",
		url: "https://borrowell.com",
		description: [
			"Senior frontend engineer at Borrowell, a Canadian FinTech with over 1.5 million users. Started as sole frontend engineer and grew the team to 5 engineers while serving as tech lead for growth platforms, establishing patterns and best practices for the frontend organization.",
			"Built and maintained the growth marketing platform using GatsbyJS (React) as a static site generator for SEO-optimized web applications, and worked with React Native for the mobile team. Worked with GraphQL and Contentful for scalable content management.",
			"Scaled the frontend infrastructure and mentored engineers on component architecture, state management, and performance optimization."
		],
		skills: [
			"react",
			"reactNative",
			"graphql",
			"nodejs",
			"gatsby",
			"contentful",
			"azure"
		]
	},
	{
		company: "The Fields Institute at The University of Toronto",
		jobTitle: "Web Application Developer (1yr contract)",
		startDate: "2019-03-01",
		endDate: "2020-03-01",
		url: "https://fields.utoronto.ca",
		description: [
			"In-house web application developer for the Fields Institute, a world-renowned mathematical research institute at the University of Toronto.",
			"Developed modern React and Redux frontends to interface with legacy backend APIs, building tools for researchers and administrators. Worked across the full stack with Node.js, PostgreSQL, and SQLite databases."
		],
		skills: [
			"react",
			"redux",
			"nodejs",
			"postgres",
			"sqlite",
			"docker"
		]
	},
	{
		company: "TELUS Mobility",
		jobTitle: "Developer Analyst",
		startDate: "2015-10-01",
		endDate: "2018-04-01",
		url: "https://telus.com",
		description: [
			"Developer Analyst on the retail support team at TELUS Mobility, creating and maintaining internal employee portals and customer-facing web applications.",
			"Built web applications using JavaScript, PHP, and jQuery, integrated with MariaDB and MySQL databases. Leveraged CMS platforms for content management and used Sass for scalable styling.",
			"Delivered tools that improved operational efficiency for retail staff across TELUS locations."
		],
		skills: [
			"javascript",
			"php",
			"jquery",
			"mariadb",
			"mysql",
			"cms",
			"sass"
		]
	}
];

const skillsData = [
	{
		key: "react",
		name: "React",
		icon: "Zap"
	},
	{
		key: "nodejs",
		name: "Node.js",
		icon: "Zap"
	},
	{
		key: "git",
		name: "Git",
		icon: "GitBranch"
	},
	{
		key: "javascript",
		name: "JavaScript",
		icon: "Code"
	},
	{
		key: "css",
		name: "CSS",
		icon: "Palette"
	},
	{
		key: "python",
		name: "Python",
		icon: "Code"
	},
	{
		key: "ruby",
		name: "Ruby",
		icon: "Code"
	},
	{
		key: "java",
		name: "Java",
		icon: "Code"
	},
	{
		key: "angular",
		name: "Angular",
		icon: "Zap"
	},
	{
		key: "html",
		name: "HTML",
		icon: "FileText"
	},
	{
		key: "php",
		name: "PHP",
		icon: "Code"
	},
	{
		key: "mongodb",
		name: "MongoDB",
		icon: "Database"
	},
	{
		key: "vscode",
		name: "VS Code",
		icon: "FileCode"
	},
	{
		key: "redux",
		name: "Redux",
		icon: "Zap"
	},
	{
		key: "postgres",
		name: "PostgreSQL",
		icon: "Database"
	},
	{
		key: "redis",
		name: "Redis",
		icon: "Database"
	},
	{
		key: "kafka",
		name: "Kafka",
		icon: "Zap"
	},
	{
		key: "mysql",
		name: "MySQL",
		icon: "Database"
	},
	{
		key: "mariadb",
		name: "MariaDB",
		icon: "Database"
	},
	{
		key: "sqlite",
		name: "SQLite",
		icon: "Database"
	},
	{
		key: "agile",
		name: "Agile",
		icon: "Zap"
	},
	{
		key: "jquery",
		name: "JQuery",
		icon: "Code"
	},
	{
		key: "cms",
		name: "CMS",
		icon: "FileText"
	},
	{
		key: "clientRelationships",
		name: "Client Relationships",
		icon: "Users"
	},
	{
		key: "teamLeadership",
		name: "Team Leadership",
		icon: "Users"
	},
	{
		key: "aws",
		name: "AWS",
		icon: "Cloud"
	},
	{
		key: "docker",
		name: "Docker",
		icon: "Container"
	},
	{
		key: "sass",
		name: "Sass",
		icon: "Palette"
	},
	{
		key: "azure",
		name: "Azure",
		icon: "Cloud"
	},
	{
		key: "contentful",
		name: "Contentful",
		icon: "Database"
	},
	{
		key: "graphql",
		name: "GraphQL",
		icon: "Network"
	},
	{
		key: "gatsby",
		name: "GatsbyJS",
		icon: "Zap"
	},
	{
		key: "jest",
		name: "Jest",
		icon: "CheckCircle"
	},
	{
		key: "jira",
		name: "Jira",
		icon: "CheckCircle"
	},
	{
		key: "reactNative",
		name: "React Native",
		icon: "Zap"
	},
	{
		key: "rails",
		name: "Rails",
		icon: "Code"
	},
	{
		key: "typescript",
		name: "TypeScript",
		icon: "Code"
	},
	{
		key: "ai",
		name: "AI Tooling",
		icon: "Sparkles"
	},
	{
		key: "distributedSystems",
		name: "Distributed Systems",
		icon: "Network"
	},
	{
		key: "opentelemetry",
		name: "OpenTelemetry",
		icon: "Activity"
	},
	{
		key: "observability",
		name: "Observability",
		icon: "Eye"
	},
	{
		key: "oauth",
		name: "OAuth",
		icon: "Lock"
	},
	{
		key: "security",
		name: "Security",
		icon: "Shield"
	},
	{
		key: "onCall",
		name: "On-Call",
		icon: "AlertCircle"
	}
];

const $$ExperienceSection = createComponent(($$result, $$props, $$slots) => {
  const experience = experienceData;
  const skills = skillsData;
  function formatDate(dateString) {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  }
  function getSkillData(skillKey) {
    return skills.find((s) => s.key === skillKey);
  }
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="section"> <h2 class="text-4xl font-bold text-primary mb-12">Experience</h2> <div class="space-y-8"> ${experience.map((job) => renderTemplate`<div class="card"> <div class="flex items-start justify-between mb-4"> <div> <h3 class="text-2xl font-bold text-primary">${job.company}</h3> <p class="text-lg text-gray-700 font-medium">${job.jobTitle}</p> </div> <div class="text-right text-sm text-gray-600 whitespace-nowrap ml-4"> <p>${formatDate(job.startDate)} - ${formatDate(job.endDate)}</p> </div> </div> ${job.url && renderTemplate`<a${addAttribute(job.url, "href")} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-sm mb-4 inline-block">
Visit website →
</a>`} <div class="mb-4 space-y-2"> ${job.description.map((desc) => renderTemplate`<p class="text-gray-700 leading-relaxed">${desc}</p>`)} </div> <div class="flex flex-wrap gap-2"> ${job.skills.map((skillKey) => {
    const skillInfo = getSkillData(skillKey);
    return skillInfo ? renderTemplate`${renderComponent($$result, "SkillPill", $$SkillPill, { "name": skillInfo.name, "iconName": skillInfo.icon })}` : null;
  })} </div> </div>`)} </div> </section>`;
}, "/Volumes/Core/github/src/calirvine/src/components/ExperienceSection.astro", void 0);

const educationData = [
	{
		title: "Ontario Tech University",
		startYear: 2005,
		endYear: 2009,
		degree: "Bachelor of IT",
		url: "https://ontariotechu.ca/"
	}
];

const $$EducationSection = createComponent(($$result, $$props, $$slots) => {
  const education = educationData;
  return renderTemplate`${maybeRenderHead()}<section id="education" class="section"> <h2 class="text-4xl font-bold text-primary mb-12">Education</h2> <div class="space-y-6"> ${education.map((edu) => renderTemplate`<div class="card"> <div class="flex items-start justify-between mb-2"> <div> <h3 class="text-2xl font-bold text-primary">${edu.title}</h3> <p class="text-lg text-gray-700">${edu.degree}</p> </div> <p class="text-sm text-gray-600 whitespace-nowrap ml-4"> ${edu.startYear} - ${edu.endYear} </p> </div> ${edu.url && renderTemplate`<a${addAttribute(edu.url, "href")} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-sm inline-block">
Visit website →
</a>`} </div>`)} </div> </section>`;
}, "/Volumes/Core/github/src/calirvine/src/components/EducationSection.astro", void 0);

const $$SkillsSection = createComponent(($$result, $$props, $$slots) => {
  const skills = skillsData;
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="section"> <h2 class="text-4xl font-bold text-primary mb-12">Skills & Technologies</h2> <div class="flex flex-wrap gap-4"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "SkillPill", $$SkillPill, { "name": skill.name, "iconName": skill.icon })}`)} </div> </section>`;
}, "/Volumes/Core/github/src/calirvine/src/components/SkillsSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mt-12 pt-8 border-t border-gray-200"> <h2 class="text-2xl font-bold text-primary mb-4">Get in Touch</h2> <div class="space-y-12"> <p class="text-lg text-gray-700 mb-4">
I'd love to hear from you! Reach out at:
</p> <a href="mailto:hi@calirvine.com" class="text-xl font-semibold text-blue-600 hover:text-blue-800">
hi@calirvine.com
</a> </div> </section>`;
}, "/Volumes/Core/github/src/calirvine/src/components/Contact.astro", void 0);

const $$ResumeHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="resume-header" data-astro-cid-zvvil25y> <div class="header-content" data-astro-cid-zvvil25y> <h1 data-astro-cid-zvvil25y>Cal Irvine</h1> <p class="title" data-astro-cid-zvvil25y>Full-Stack Software Engineer</p> </div> <div class="header-contact" data-astro-cid-zvvil25y> <p data-astro-cid-zvvil25y>Toronto, Ontario, Canada</p> <p data-astro-cid-zvvil25y><a href="mailto:hi@calirvine.com" data-astro-cid-zvvil25y>hi@calirvine.com</a></p> <div class="social-links-compact" data-astro-cid-zvvil25y> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Volumes/Core/github/src/calirvine/src/components/Resume/ResumeHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$ResumeSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ResumeSection;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="resume-section" data-astro-cid-wfx6qlbo> <h2 data-astro-cid-wfx6qlbo>${title}</h2> <div class="section-content" data-astro-cid-wfx6qlbo> ${renderSlot($$result, $$slots["default"])} </div> </section> `;
}, "/Volumes/Core/github/src/calirvine/src/components/Resume/ResumeSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { company, jobTitle, startDate, endDate, description, skills } = Astro2.props;
  function formatDate(dateString) {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  }
  return renderTemplate`${maybeRenderHead()}<div class="experience-item" data-astro-cid-td46anot> <div class="item-header" data-astro-cid-td46anot> <div data-astro-cid-td46anot> <h3 data-astro-cid-td46anot>${company}</h3> <p class="job-title" data-astro-cid-td46anot>${jobTitle}</p> </div> <p class="date-range" data-astro-cid-td46anot>${formatDate(startDate)} – ${formatDate(endDate)}</p> </div> <ul class="description-list" data-astro-cid-td46anot> ${description.map((desc) => renderTemplate`<li data-astro-cid-td46anot>${desc}</li>`)} </ul> ${skills && skills.length > 0 && renderTemplate`<p class="skills-text" data-astro-cid-td46anot> <strong data-astro-cid-td46anot>Skills:</strong> ${skills.join(" \u2022 ")} </p>`} </div> `;
}, "/Volumes/Core/github/src/calirvine/src/components/Resume/ExperienceItem.astro", void 0);

const $$Astro = createAstro();
const $$EducationItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EducationItem;
  const { school, degree, field, graduationDate } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="education-item" data-astro-cid-k6jmxbzk> <div class="item-header" data-astro-cid-k6jmxbzk> <div data-astro-cid-k6jmxbzk> <h3 data-astro-cid-k6jmxbzk>${school}</h3> <p class="degree" data-astro-cid-k6jmxbzk>${degree} in ${field}</p> </div> <p class="graduation-date" data-astro-cid-k6jmxbzk>${graduationDate}</p> </div> </div> `;
}, "/Volumes/Core/github/src/calirvine/src/components/Resume/EducationItem.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const experience = experienceData;
  const skills = skillsData;
  function getSkillName(skillKey) {
    const skill = skills.find((s) => s.key === skillKey);
    return skill ? skill.name : skillKey;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cal Irvine - Portfolio", "description": "Full-stack developer and freelancer based in Canada", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="web-view" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Bio", $$Bio, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ExperienceSection", $$ExperienceSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "EducationSection", $$EducationSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SkillsSection", $$SkillsSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} </div>  <div class="print-view resume-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ResumeHeader", $$ResumeHeader, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <a href="https://github.com/calirvine" target="_blank" data-astro-cid-j7pv25f6>github.com/calirvine</a> <a href="https://linkedin.com/in/callum-irvine-58bb094b" target="_blank" data-astro-cid-j7pv25f6>linkedin.com/in/callum-irvine</a> ` })} ${renderComponent($$result2, "ResumeSection", $$ResumeSection, { "title": "Professional Summary", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-j7pv25f6>Full-stack software engineer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and TypeScript with a strong background in distributed systems and cloud infrastructure. Proven track record of leading technical initiatives and mentoring engineering teams.</p> ` })} ${renderComponent($$result2, "ResumeSection", $$ResumeSection, { "title": "Experience", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${experience.map((job) => renderTemplate`${renderComponent($$result3, "ExperienceItem", $$ExperienceItem, { "company": job.company, "jobTitle": job.jobTitle, "startDate": job.startDate, "endDate": job.endDate, "description": job.description, "skills": job.skills.slice(0, 8).map(getSkillName), "data-astro-cid-j7pv25f6": true })}`)}` })} ${renderComponent($$result2, "ResumeSection", $$ResumeSection, { "title": "Education", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "EducationItem", $$EducationItem, { "school": "Ontario Tech University", "degree": "Bachelor of IT", "field": "Information Technology", "graduationDate": "2009", "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "ResumeSection", $$ResumeSection, { "title": "Technical Skills", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="skills-grid" data-astro-cid-j7pv25f6> <div class="skill-category" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Frontend</h4> <p data-astro-cid-j7pv25f6>React, TypeScript, JavaScript, HTML/CSS, Redux, React Native</p> </div> <div class="skill-category" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Backend</h4> <p data-astro-cid-j7pv25f6>Node.js, Ruby on Rails, GraphQL, PostgreSQL, MySQL, MongoDB</p> </div> <div class="skill-category" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Infrastructure</h4> <p data-astro-cid-j7pv25f6>AWS, Azure, Docker, Kafka, Redis, OpenTelemetry</p> </div> <div class="skill-category" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Other</h4> <p data-astro-cid-j7pv25f6>Git, Agile, System Design, Technical Leadership, API Design</p> </div> </div> ` })} </div> ` })} `;
}, "/Volumes/Core/github/src/calirvine/src/pages/index.astro", void 0);

const $$file = "/Volumes/Core/github/src/calirvine/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=index.astro.mjs.map

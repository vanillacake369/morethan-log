const CONFIG = {
  // profile setting (required)
  profile: {
    name: "tony",
    image: "/notion-avatar-1706598317544.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend Developer",
    bio: "I develop everything that might change any society issue.",
    email: "lonelynight1026@gmail.com",
    linkedin: "vanillacake369",
    github: "vanillacake369",
    instagram: "iamwhtiam247",
  },
  projects: [
    {
      name: `기프티콘 입찰 거래 플랫폼`,
      href: "https://github.com/Team-BC-1/gream",
    },
    {
      name: `제20회 예천아시아 U20 아시아 육상대회 관리 시스템`,
      href: "https://github.com/vanillacake369/u20_dj",
    },
    {
      name: `농기계/농기술 거래 플랫폼`,
      href: "https://github.com/vanillacake369/osef",
    },
  ],
  // blog setting (required)
  blog: {
    title: "vanillacake369-log",
    description: "welcome to morethan-log!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }

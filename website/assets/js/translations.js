(() => {
  const PAGE_TRANSLATIONS = {
    en: {
      "meta.title": "Wecare DatV | Solutions Ecosystem",
      "meta.description": "Wecare DatV is a curated ecosystem of technical solutions, tailored to real-world needs.",
      "a11y.skip": "Skip to main content",
      "a11y.home": "Wecare DatV, home",
      "a11y.navigation": "Main navigation",
      "a11y.language": "Choose language",
      "a11y.scrollTop": "Back to top",
      "nav.menu": "Menu",
      "nav.solutions": "Solutions",
      "nav.process": "How it works",
      "nav.integrations": "Integrations",
      "nav.contact": "Contact",
      "common.consult": "Book a consultation",
      "theme.dark": "Switch to dark theme",
      "theme.light": "Switch to light theme",
      "hero.eyebrow": "Solutions ecosystem",
      "hero.title": "The right solution for every real-world challenge.",
      "hero.description": "We help you choose, build, and connect the right solutions for your needs.",
      "hero.consult": "Book a consultation",
      "hero.solutions": "Explore solutions",
      "hero.factsLabel": "What we deliver",
      "hero.factProducts": "Products and services",
      "hero.factSource": "Source code included",
      "hero.factMentor": "1:1 DevOps mentoring",
      "preview.label": "Wecare DatV solution catalog illustration",
      "preview.eyebrow": "Wecare catalog",
      "preview.title": "Products and services",
      "preview.status": "Defined scope",
      "preview.catalog": "Current lineup",
      "preview.incident": "Incident management and coordination",
      "preview.priority": "Priority",
      "preview.notify": "Notifications and coordinated response",
      "preview.next": "Next",
      "preview.pages": "Content and deployment automation",
      "preview.roadmap": "Roadmap",
      "preview.mentor": "Hourly DevOps mentoring",
      "preview.book": "Book a session",
      "preview.note": "Our product and service catalog is growing.",
      "problems.label": "Common challenges",
      "problems.one": "Unsure which tools fit your needs?",
      "problems.two": "Losing too much time connecting platforms?",
      "problems.three": "Need source code, practical guides, or one-on-one mentoring?",
      "solutions.eyebrow": "Our solutions",
      "solutions.title": "Products and services for real-world challenges.",
      "solutions.description": "Each solution has its own roadmap. Mentoring is booked by the hour.",
      "solutions.carousel": "Product and service list. Scroll horizontally to explore.",
      "card.incident.kicker": "First on the roadmap",
      "card.incident.description": "Receive, normalize, and route incidents from your existing systems.",
      "card.incident.feature1": "Receive alerts through webhooks and APIs",
      "card.incident.feature2": "Normalize, deduplicate, and route incidents",
      "card.incident.feature3": "Acknowledge, escalate, and hand off",
      "card.notify.kicker": "Operations app",
      "card.notify.description": "Receive notifications and coordinate responses to each incident.",
      "card.notify.feature1": "Team and incident discussion channels",
      "card.notify.feature2": "Receive alerts from WebCare Incident",
      "card.notify.feature3": "Assign work, discuss, and track resolution",
      "card.pages.kicker": "Content automation",
      "card.pages.description": "Manage content and automate publishing across social platforms.",
      "card.pages.feature1": "Cross-platform content calendar",
      "card.pages.feature2": "Review workflows and scheduled publishing",
      "card.pages.feature3": "Manage channels, status, and history",
      "card.gitops.kicker": "Deployment automation",
      "card.gitops.description": "Streamline artifact storage, validation, and delivery with GitOps.",
      "card.gitops.feature1": "Git, registries, and repository structure",
      "card.gitops.feature2": "Security scans and deployment policies",
      "card.gitops.feature3": "Ready-to-use templates and operations guides",
      "card.mentor.kicker": "Hourly mentoring",
      "card.mentor.description": "One-on-one DevOps mentoring for learners who need help getting unstuck.",
      "card.mentor.price": "VND 200,000",
      "card.mentor.priceNote": "A 60-minute session for about the price of two coffees",
      "card.mentor.feature1": "Learning roadmap and resource advice",
      "card.mentor.feature2": "Work through practical DevOps challenges",
      "card.mentor.feature3": "Online session tailored to the topics we agree on",
      "card.mentor.action": "Book a mentoring session",
      "process.eyebrow": "How we work",
      "process.title": "From your needs to a clear outcome.",
      "process.description": "Scope, pricing, and support are agreed before payment.",
      "process.action": "Discuss your needs",
      "process.step1.title": "Understand your needs",
      "process.step1.description": "Describe the problem and the outcome you need.",
      "process.step2.title": "Choose the right option",
      "process.step2.description": "Choose a solution or a mentoring session.",
      "process.step3.title": "Confirm and pay",
      "process.step3.description": "Confirm the scope, schedule, and price.",
      "process.step4.title": "Build and hand over",
      "process.step4.description": "Get the source code and documentation, or join your mentoring session.",
      "integrations.eyebrow": "Connected ecosystem",
      "integrations.title": "Works with the systems you already use.",
      "integrations.description": "Integration scope is confirmed for each solution.",
      "integrations.tools": "Tools available for integration",
      "integrations.note": "You do not need to replace your existing tools or infrastructure.",
      "audience.eyebrow": "Who we work with",
      "audience.title": "Practical solutions for people and teams ready to move forward.",
      "audience.technical": "Engineering teams",
      "audience.technicalDescription": "Looking to automate operations and deployments.",
      "audience.business": "Businesses",
      "audience.businessDescription": "Looking for tools that fit the way your business works.",
      "audience.content": "Content teams",
      "audience.contentDescription": "Looking to manage and automate multiple channels.",
      "audience.learners": "DevOps learners",
      "audience.learnersDescription": "Looking for a learning plan, useful resources, or help with a real-world challenge.",
      "contact.eyebrow": "Talk to our team",
      "contact.title": "What can we help you solve?",
      "contact.description": "Tell us what you’re working on. We’ll recommend an approach or help you book a mentoring session.",
      "contact.advisorAlt": "Wecare DatV consultant",
      "contact.advisorTitle": "Talk to a consultant",
      "contact.advisorDescription": "Discuss your needs before receiving a quote.",
      "contact.responseLabel": "Response time",
      "contact.response": "During business hours",
      "contact.paymentLabel": "Payment",
      "contact.payment": "Bank transfer",
      "contact.scopeLabel": "Scope",
      "contact.scope": "Solutions or mentoring",
      "form.honeypot": "Leave this field empty",
      "form.name": "Your name",
      "form.contact": "Email or phone number",
      "form.contactPlaceholder": "name@example.com or +84912345678",
      "form.interest": "What are you interested in?",
      "form.interestPlaceholder": "Choose a product or service",
      "form.message": "Briefly describe the problem",
      "form.captcha": "Human verification",
      "form.submit": "Send your request",
      "form.privacy": "Your information is used only to respond to your request.",
      "form.validation.name": "Please enter your name.",
      "form.validation.contact": "Enter a valid email or a phone number with 9 to 15 digits.",
      "form.validation.interest": "Choose the product or service you are interested in.",
      "form.validation.captcha": "Please confirm that you are not a robot.",
      "form.captcha.reveal": "Please complete the human verification, then send your request again.",
      "form.validation.invalid": "Please review the fields marked below.",
      "form.sending.button": "Sending...",
      "form.sending.status": "Sending your request...",
      "form.success": "Your request was sent. We will get back to you soon.",
      "form.error": "We could not send your request. Check the CAPTCHA and try again.",
      "footer.description": "A solution ecosystem tailored to real-world needs.",
      "footer.copyright": "Wecare DatV · MVP version",
    },
    zh: {
      "meta.title": "Wecare DatV | 技术解决方案生态",
      "meta.description": "Wecare DatV 提供面向实际需求的技术解决方案与服务。",
      "a11y.skip": "跳转到主要内容",
      "a11y.home": "Wecare DatV，首页",
      "a11y.navigation": "主导航",
      "a11y.language": "选择语言",
      "a11y.scrollTop": "返回顶部",
      "nav.menu": "菜单",
      "nav.solutions": "解决方案",
      "nav.process": "服务流程",
      "nav.integrations": "集成能力",
      "nav.contact": "联系我们",
      "common.consult": "预约咨询",
      "theme.dark": "切换到深色主题",
      "theme.light": "切换到浅色主题",
      "hero.eyebrow": "解决方案生态",
      "hero.title": "为每个实际问题找到合适的解决方案。",
      "hero.description": "根据您的需求，为您提供咨询、定制开发及系统集成服务。",
      "hero.consult": "预约咨询",
      "hero.solutions": "查看解决方案",
      "hero.factsLabel": "交付范围",
      "hero.factProducts": "产品与服务",
      "hero.factSource": "交付源代码",
      "hero.factMentor": "一对一 DevOps 辅导",
      "preview.label": "Wecare DatV 解决方案目录示意图",
      "preview.eyebrow": "Wecare 产品目录",
      "preview.title": "产品与服务",
      "preview.status": "服务范围明确",
      "preview.catalog": "现有产品与服务",
      "preview.incident": "事件管理与协调",
      "preview.priority": "优先开发",
      "preview.notify": "接收通知并协同处理",
      "preview.next": "后续计划",
      "preview.pages": "内容与部署自动化",
      "preview.roadmap": "规划中",
      "preview.mentor": "按小时提供 DevOps 辅导",
      "preview.book": "预约辅导",
      "preview.note": "产品与服务目录持续完善中。",
      "problems.label": "常见问题",
      "problems.one": "不确定哪些工具适合您的需求？",
      "problems.two": "集成多个平台耗费太多时间？",
      "problems.three": "需要源代码、实用指南或一对一辅导？",
      "solutions.eyebrow": "产品与服务",
      "solutions.title": "为实际业务问题提供产品与服务。",
      "solutions.description": "每个解决方案都有独立规划。辅导服务按小时预约。",
      "solutions.carousel": "产品与服务列表，可横向滚动查看更多。",
      "card.incident.kicker": "首期开发",
      "card.incident.description": "接收、规范化并分派来自现有系统的事件。",
      "card.incident.feature1": "通过 Webhook 和 API 接收告警",
      "card.incident.feature2": "规范化、去重并路由事件",
      "card.incident.feature3": "确认、升级并转交事件",
      "card.notify.kicker": "运维应用",
      "card.notify.description": "接收通知，并协同处理各类事件。",
      "card.notify.feature1": "团队与事件讨论频道",
      "card.notify.feature2": "接收来自 WebCare Incident 的告警",
      "card.notify.feature3": "分派任务、讨论并跟踪处理进度",
      "card.pages.kicker": "内容自动化",
      "card.pages.description": "管理内容并自动发布到多个社交平台。",
      "card.pages.feature1": "多平台内容日历",
      "card.pages.feature2": "审核流程与定时发布",
      "card.pages.feature3": "管理渠道、状态和历史记录",
      "card.gitops.kicker": "部署自动化",
      "card.gitops.description": "通过 GitOps 规范制品存储、校验与交付流程。",
      "card.gitops.feature1": "Git、镜像仓库与代码库结构",
      "card.gitops.feature2": "安全扫描与部署策略",
      "card.gitops.feature3": "可直接使用的模板与运维指南",
      "card.mentor.kicker": "按小时辅导",
      "card.mentor.description": "为遇到学习难题的学员提供一对一 DevOps 辅导。",
      "card.mentor.price": "200,000 越南盾",
      "card.mentor.priceNote": "60 分钟一对一辅导",
      "card.mentor.feature1": "学习规划与资料建议",
      "card.mentor.feature2": "解决实际 DevOps 问题",
      "card.mentor.feature3": "围绕双方确认的主题在线辅导",
      "card.mentor.action": "预约辅导",
      "process.eyebrow": "合作流程",
      "process.title": "从需求到明确的成果。",
      "process.description": "付款前先确认范围、报价与支持方式。",
      "process.action": "沟通您的需求",
      "process.step1.title": "了解需求",
      "process.step1.description": "说明问题以及您希望实现的结果。",
      "process.step2.title": "选择合适的方式",
      "process.step2.description": "选择解决方案或辅导课程。",
      "process.step3.title": "确认并付款",
      "process.step3.description": "确认服务范围、时间安排与费用。",
      "process.step4.title": "开发并交付",
      "process.step4.description": "获取源代码与相关文档，或参加预约的辅导。",
      "integrations.eyebrow": "集成生态",
      "integrations.title": "轻松接入您现有的系统。",
      "integrations.description": "每项解决方案的集成范围单独确认。",
      "integrations.tools": "可集成的工具",
      "integrations.note": "无需替换您正在使用的工具或基础设施。",
      "audience.eyebrow": "服务对象",
      "audience.title": "为个人与团队提供更合适的技术方案。",
      "audience.technical": "技术团队",
      "audience.technicalDescription": "希望实现运维与部署自动化。",
      "audience.business": "企业",
      "audience.businessDescription": "寻找适合自身业务流程的工具。",
      "audience.content": "内容团队",
      "audience.contentDescription": "希望更高效地管理和运营多个内容渠道。",
      "audience.learners": "DevOps 学员",
      "audience.learnersDescription": "获取学习规划、实用资料，或针对实际问题的一对一辅导。",
      "contact.eyebrow": "预约咨询",
      "contact.title": "您希望解决什么问题？",
      "contact.description": "请告诉我们您遇到的问题，我们会为您推荐合适的方案，或协助您预约辅导。",
      "contact.advisorAlt": "Wecare DatV 顾问",
      "contact.advisorTitle": "与顾问沟通",
      "contact.advisorDescription": "报价前先沟通您的需求。",
      "contact.responseLabel": "回复时间",
      "contact.response": "工作时间内",
      "contact.paymentLabel": "付款方式",
      "contact.payment": "银行转账",
      "contact.scopeLabel": "服务范围",
      "contact.scope": "解决方案或辅导",
      "form.honeypot": "请将此字段留空",
      "form.name": "您的姓名",
      "form.contact": "电子邮箱或电话号码",
      "form.contactPlaceholder": "name@example.com 或 +84912345678",
      "form.interest": "您感兴趣的服务",
      "form.interestPlaceholder": "选择产品或服务",
      "form.message": "简要描述问题",
      "form.captcha": "人机验证",
      "form.submit": "提交咨询",
      "form.privacy": "您的信息仅用于回复咨询请求。",
      "form.validation.name": "请输入您的姓名。",
      "form.validation.contact": "请输入有效的电子邮箱或 9 至 15 位电话号码。",
      "form.validation.interest": "请选择您感兴趣的产品或服务。",
      "form.validation.captcha": "请确认您不是机器人。",
      "form.captcha.reveal": "请完成人机验证，然后再次提交咨询。",
      "form.validation.invalid": "请检查下方标记的字段。",
      "form.sending.button": "正在发送…",
      "form.sending.status": "正在发送您的请求…",
      "form.success": "请求已发送成功，我们会尽快与您联系。",
      "form.error": "暂时无法发送请求，请检查验证码后重试。",
      "footer.description": "根据实际需求提供解决方案。",
      "footer.copyright": "Wecare DatV · MVP 版本",
    },
    vi: {
      "theme.dark": "Chuyển sang giao diện tối",
      "theme.light": "Chuyển sang giao diện sáng",
      "form.validation.name": "Vui lòng nhập tên của bạn.",
      "card.mentor.price": "200.000đ",
      "form.validation.contact": "Nhập email hợp lệ hoặc số điện thoại từ 9 đến 15 chữ số.",
      "form.validation.interest": "Vui lòng chọn sản phẩm hoặc dịch vụ bạn quan tâm.",
      "form.validation.captcha": "Vui lòng xác nhận bạn không phải là robot.",
      "form.captcha.reveal": "Vui lòng xác minh bạn không phải là robot, sau đó bấm gửi lại.",
      "form.validation.invalid": "Không thể gửi. Vui lòng kiểm tra các trường được đánh dấu.",
      "form.sending.button": "Đang gửi...",
      "form.sending.status": "Đang gửi yêu cầu của bạn...",
      "form.success": "Yêu cầu đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm.",
      "form.error": "Không thể gửi yêu cầu lúc này. Vui lòng kiểm tra CAPTCHA và thử lại.",
    },
  };

  const LANGUAGE_METADATA = {
    vi: { htmlLang: "vi" },
    en: { htmlLang: "en" },
    zh: { htmlLang: "zh-CN" },
  };

  const LANGUAGE_STORAGE_KEY = "wecare-language";
  const translatedText = new WeakMap();
  const translatedAttributes = new WeakMap();
  let currentLanguage = "vi";

  function normalizeLanguage(language) {
    return Object.hasOwn(LANGUAGE_METADATA, language) ? language : "vi";
  }

  function getTranslation(key, language = currentLanguage) {
    return PAGE_TRANSLATIONS[language]?.[key] ?? PAGE_TRANSLATIONS.vi[key] ?? key;
  }

  function translatePage(language) {
    const normalizedLanguage = normalizeLanguage(language);
    currentLanguage = normalizedLanguage;
    document.documentElement.lang = LANGUAGE_METADATA[normalizedLanguage].htmlLang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      if (!translatedText.has(element)) translatedText.set(element, element.textContent);
      const key = element.dataset.i18n;
      element.textContent = normalizedLanguage === "vi"
        ? translatedText.get(element)
        : getTranslation(key, normalizedLanguage);
    });

    const translatedAttributesMap = [
      { key: "content", attribute: "content" },
      { key: "placeholder", attribute: "placeholder" },
      { key: "aria-label", attribute: "aria-label" },
      { key: "title", attribute: "title" },
      { key: "alt", attribute: "alt" },
    ];

    translatedAttributesMap.forEach(({ key, attribute }) => {
      document.querySelectorAll(`[data-i18n-${key}]`).forEach((element) => {
        let originalValues = translatedAttributes.get(element);
        if (!originalValues) {
          originalValues = new Map();
          translatedAttributes.set(element, originalValues);
        }
        if (!originalValues.has(attribute)) {
          originalValues.set(attribute, element.getAttribute(attribute));
        }

        const translationKey = element.getAttribute(`data-i18n-${key}`);
        const value = normalizedLanguage === "vi"
          ? originalValues.get(attribute)
          : getTranslation(translationKey, normalizedLanguage);
        if (value !== null) element.setAttribute(attribute, value);
      });
    });

    const languageSelector = document.querySelector("#language-switcher");
    if (languageSelector) {
      languageSelector.textContent = { vi: "VI", en: "EN", zh: "中文" }[normalizedLanguage];
      document.querySelectorAll("[data-language]").forEach((option) => {
        option.setAttribute("aria-checked", String(option.dataset.language === normalizedLanguage));
      });
    }
  }

  function setLanguage(language) {
    const normalizedLanguage = normalizeLanguage(language);
    translatePage(normalizedLanguage);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
    } catch {
      // The selected language still applies when browser storage is unavailable.
    }
    document.dispatchEvent(
      new CustomEvent("site-language-change", { detail: { language: normalizedLanguage } }),
    );
  }

  function loadSavedLanguage() {
    try {
      return normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY));
    } catch {
      return "vi";
    }
  }

  function initializeTranslations() {
    translatePage(loadSavedLanguage());
    const languageSelector = document.querySelector("#language-switcher");
    if (!languageSelector) return;

    const languageControl = languageSelector.closest(".language-control");
    const languageOptions = document.querySelector("#language-options");
    const languageItems = [...languageOptions.querySelectorAll("[data-language]")];

    languageControl.hidden = false;

    function closeLanguageMenu(returnFocus = false) {
      languageOptions.hidden = true;
      languageSelector.setAttribute("aria-expanded", "false");
      if (returnFocus) languageSelector.focus();
    }

    function openLanguageMenu() {
      languageOptions.hidden = false;
      languageSelector.setAttribute("aria-expanded", "true");
      languageItems.find((item) => item.getAttribute("aria-checked") === "true")?.focus();
    }

    languageSelector.addEventListener("click", () => {
      if (languageOptions.hidden) openLanguageMenu();
      else closeLanguageMenu();
    });

    languageSelector.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openLanguageMenu();
      }
    });

    languageOptions.addEventListener("click", (event) => {
      const option = event.target.closest("[data-language]");
      if (!option) return;
      setLanguage(option.dataset.language);
      closeLanguageMenu(true);
    });

    languageOptions.addEventListener("keydown", (event) => {
      const index = languageItems.indexOf(document.activeElement);
      let nextIndex = index;

      if (event.key === "ArrowDown") nextIndex = (index + 1) % languageItems.length;
      else if (event.key === "ArrowUp") nextIndex = (index - 1 + languageItems.length) % languageItems.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = languageItems.length - 1;
      else if (event.key === "Escape") {
        event.preventDefault();
        closeLanguageMenu(true);
        return;
      } else {
        return;
      }

      event.preventDefault();
      languageItems[nextIndex].focus();
    });

    languageControl.addEventListener("focusout", (event) => {
      if (!languageControl.contains(event.relatedTarget)) closeLanguageMenu();
    });

    document.addEventListener("pointerdown", (event) => {
      if (!languageControl.contains(event.target)) closeLanguageMenu();
    });
  }

  window.siteI18n = {
    getTranslation,
  };

  initializeTranslations();
})();

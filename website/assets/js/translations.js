(() => {
  const PAGE_TRANSLATIONS = {
    en: {
      "meta.title": "Raxe DjatVu | Practical DevOps Course",
      "meta.description": "Learn practical DevOps with a mentor over 9 sessions: 8 lessons and one hands-on project session. Three 2-hour sessions per week. Expected start: mid-February 2027.",
      "a11y.skip": "Skip to main content",
      "a11y.home": "Raxe DjatVu, home",
      "a11y.navigation": "Main navigation",
      "a11y.language": "Choose language",
      "a11y.scrollTop": "Back to top",
      "nav.menu": "Menu",
      "nav.curriculum": "Course topics",
      "nav.format": "Learning path",
      "nav.contact": "Contact",
      "common.consult": "Book a consultation",
      "theme.dark": "Switch to dark theme",
      "theme.light": "Switch to light theme",
      "course.cta": "Get course updates",
      "course.module1": "DevOps foundations",
      "course.module1Detail": "Linux, Git, networking, and containers",
      "course.module2": "Kubernetes",
      "course.module2Detail": "Deployment, networking, and operations",
      "course.module3": "GitOps",
      "course.module3Detail": "Automate build, checks, and delivery",
      "course.module4": "Capstone",
      "course.module4Detail": "Integrate the project and complete workflow",
      "course.formatLabel": "Course schedule",
      "course.format1": "Three sessions per week",
      "course.format2": "Two hours per session",
      "course.format3": "Nine sessions over 3 weeks",
      "course.topicsEyebrow": "Hands-on topics",
      "course.topicsTitle": "Learn each part, then connect it into a workflow.",
      "course.topicsDescription": "Every topic includes a hands-on lab where learners deploy and troubleshoot real scenarios. At the end, they connect those skills in an integrated project.",
      "course.card1Kicker": "Start with the fundamentals",
      "course.card1Title": "Linux, Git, and containers",
      "course.card1Description": "Get familiar with the working environment and building blocks of a DevOps workflow.",
      "course.card1Point1": "Work with Linux and the command line",
      "course.card1Point2": "Manage source code with Git",
      "course.card1Point3": "Package applications in containers",
      "course.card2Kicker": "Orchestrate workloads",
      "course.card2Title": "Kubernetes",
      "course.card2Description": "Deploy and observe workloads on a cluster, and understand how its components work together.",
      "course.card2Point1": "Deployment, Service, and application configuration",
      "course.card2Point2": "Networking and basic storage",
      "course.card2Point3": "Read status and troubleshoot common issues",
      "course.card3Kicker": "Automate delivery",
      "course.card3Title": "GitOps",
      "course.card3Description": "Build a workflow from source changes through checks and application deployment.",
      "course.card3Point1": "Automate builds and checks",
      "course.card3Point2": "Manage deployment configuration with Git",
      "course.card3Point3": "Track and troubleshoot pipeline failures",
      "course.card4Kicker": "Operate with confidence",
      "course.card4Title": "Observability and security",
      "course.card4Description": "Practice foundations for reliable, traceable operations.",
      "course.card4Point1": "Logs, metrics, and status monitoring",
      "course.card4Point2": "Manage configuration and secrets safely",
      "course.card4Point3": "Troubleshoot across system layers",
      "course.mapTitle": "Workflow roadmap",
      "course.mapPoint1": "Linux & CLI",
      "course.mapPoint2": "Git workflow",
      "course.mapPoint3": "Containers",
      "course.mapPoint4": "Kubernetes workloads",
      "course.mapPoint5": "Services & networking",
      "course.mapPoint6": "CI & builds",
      "course.mapPoint7": "CD with GitOps",
      "course.mapPoint8": "Observability & security",
      "course.mapPoint9": "DevOps project",
      "course.scheduleAction": "Click to view all 9 sessions",
      "course.scheduleEyebrow": "3-week learning plan",
      "course.scheduleDialogTitle": "What you'll learn in 9 sessions",
      "course.scheduleDialogDescription": "Three 2-hour sessions a week. Sessions 1-8 combine focused lessons and hands-on labs; session 9 brings everything together in an end-to-end project.",
      "course.scheduleClose": "Close session plan",
      "course.session1Title": "Linux and the working environment",
      "course.session1Description": "Set up the lab, use Linux, and practice essential command-line tasks to navigate and inspect a system.",
      "course.session2Title": "Git and source control",
      "course.session2Description": "Practice branches, commits, merges, and a collaborative repository workflow.",
      "course.session3Title": "Containerizing an application",
      "course.session3Description": "Build an image, run a container, and configure its required components.",
      "course.session4Title": "Kubernetes workloads",
      "course.session4Description": "Explore clusters, namespaces, Pods, and Deployments; deploy and inspect workloads.",
      "course.session5Title": "Services, networking, and troubleshooting",
      "course.session5Description": "Connect apps with Services, inspect configuration and component status, and troubleshoot common problems.",
      "course.session6Title": "CI: automated checks and builds",
      "course.session6Description": "Automate source checks and image builds, preparing artifacts for deployment.",
      "course.session7Title": "CD with GitOps",
      "course.session7Description": "Use GitOps to manage manifests, sync desired configuration, and deploy to Kubernetes.",
      "course.session8Title": "Observability and security fundamentals",
      "course.session8Description": "Inspect logs and metrics, handle configuration and secrets safely, and practice tracing issues.",
      "course.session9Title": "Hands-on DevOps project",
      "course.session9Description": "Integrate source, CI, containers, Kubernetes, and GitOps; deploy end-to-end, verify behavior, and troubleshoot.",
      "course.capstoneEyebrow": "Final project",
      "course.capstoneTitle": "Connect the pieces into a complete DevOps workflow.",
      "course.capstoneDescription": "Practice each topic in its own lab, then apply everything in an integrated DevOps project at the end of the course.",
      "course.workflowLabel": "Steps in the capstone workflow",
      "course.workflow1": "Source code",
      "course.workflow2": "CI and checks",
      "course.workflow3": "Container image",
      "course.workflow4": "Kubernetes deployment",
      "course.workflow5": "GitOps and observability",
      "course.learnerEyebrow": "Who this is for",
      "course.learnerTitle": "For people who want to learn DevOps by doing.",
      "course.learner1Title": "Students and newcomers to DevOps",
      "course.learner1Description": "Want a guided learning path instead of studying disconnected tools.",
      "course.learner2Title": "Developers or IT professionals",
      "course.learner2Description": "Want to understand application delivery, automation, and operations.",
      "course.learner3Title": "Ready to practice",
      "course.learner3Description": "Can set aside time for labs outside the sessions to reinforce learning.",
      "hero.eyebrow": "Practical DevOps mentoring",
      "hero.title": "From the fundamentals to a workflow, with hands-on guidance from an expert",
      "hero.description": "Learn DevOps through a structured path from fundamentals to advanced topics. Practice each topic in its own lab, then apply your skills in a hands-on DevOps project in the final session.",
      "hero.consult": "Get course updates",
      "hero.solutions": "Explore the course",
      "hero.factsLabel": "Course details",
      "hero.factDuration": "Expected duration",
      "hero.factSchedule": "Each week",
      "hero.factLaunchValue": "Mid-February",
      "hero.factLaunch": "Expected 2027 start",
      "preview.label": "Practical DevOps course overview",
      "preview.eyebrow": "DevOps course",
      "preview.title": "Learn and practice",
      "preview.status": "Professional learning path",
      "preview.catalog": "Sessions per week",
      "preview.note": "Real-world labs for each topic, followed by a complete DevOps project.",
      "problems.label": "Common challenges",
      "problems.one": "Unsure which tools fit your needs?",
      "problems.two": "Losing too much time connecting platforms?",
      "problems.three": "Need self-managed software, practical deployment guides, or one-on-one mentoring?",
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
      "card.notify.feature2": "Receive alerts from Wecare Incident",
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
      "process.step3.description": "Confirm the edition, usage scope, term, support, and price.",
      "process.step4.title": "License and deploy",
      "process.step4.description": "Receive a versioned release package and deployment guide, or join your mentoring session.",
      "integrations.eyebrow": "Connected ecosystem",
      "integrations.title": "Works with the systems you already use.",
      "integrations.description": "Integration scope is confirmed for each solution.",
      "integrations.tools": "Tools available for integration",
      "integrations.note": "The goal is to understand the end-to-end flow and learn how to inspect and troubleshoot each step.",
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
      "contact.eyebrow": "Practical DevOps course",
      "contact.title": "Get updates when enrollment opens.",
      "contact.description": "Leave your contact details if you are interested. We will share confirmed dates and participation details when available.",
      "contact.advisorAlt": "Raxe DjatVu DevOps expert",
      "contact.advisorTitle": "Learn with an expert",
      "contact.advisorDescription": "Practice, ask questions, and learn by doing.",
      "contact.responseLabel": "Expected start",
      "contact.response": "Mid-February 2027",
      "contact.paymentLabel": "Duration",
      "contact.payment": "3 weeks, 9 sessions",
      "contact.scopeLabel": "Schedule",
      "contact.scope": "Three 2-hour sessions per week; 8 lessons + 1 hands-on project session",
      "course.scheduleAction": "点击查看全部 9 次课程",
      "course.scheduleEyebrow": "为期 3 周的学习计划",
      "course.scheduleDialogTitle": "9 次课程的学习内容",
      "course.scheduleDialogDescription": "每周三次，每次两小时。前 8 次课程结合主题教学与实践实验；第 9 次将所学整合到端到端项目中。",
      "course.scheduleClose": "关闭课程安排",
      "course.session1Title": "Linux 与工作环境",
      "course.session1Description": "搭建实验环境，使用 Linux 和常用命令行工具浏览并检查系统。",
      "course.session2Title": "Git 与源代码管理",
      "course.session2Description": "练习分支、提交、合并以及协作式仓库工作流程。",
      "course.session3Title": "应用容器化",
      "course.session3Description": "构建镜像、运行容器并配置所需组件。",
      "course.session4Title": "Kubernetes 工作负载",
      "course.session4Description": "了解集群、命名空间、Pod 和 Deployment；部署并检查工作负载。",
      "course.session5Title": "Service、网络与故障排查",
      "course.session5Description": "使用 Service 连接应用，检查配置和组件状态，并排查常见问题。",
      "course.session6Title": "CI：自动检查与构建",
      "course.session6Description": "自动化源代码检查和镜像构建，为后续部署准备产物。",
      "course.session7Title": "使用 GitOps 实现 CD",
      "course.session7Description": "使用 GitOps 管理 manifests、同步目标配置并部署到 Kubernetes。",
      "course.session8Title": "可观测性与安全基础",
      "course.session8Description": "查看日志和指标，安全管理配置与密钥，并练习定位问题。",
      "course.session9Title": "DevOps 实战项目",
      "course.session9Description": "整合源代码、CI、容器、Kubernetes 与 GitOps，完成端到端部署、验证和排错。",
      "form.honeypot": "Leave this field empty",
      "form.name": "Your name",
      "form.namePlaceholder": "Enter your name",
      "form.contact": "Email or phone number",
      "form.contactPlaceholder": "name@example.com or +84912345678",
      "form.interest": "Course",
      "form.interestPlaceholder": "Choose a course",
      "course.name": "Practical DevOps Course",
      "course.priceLabel": "Full course fee",
      "course.originalPrice": "VND 2,400,000",
      "course.salePrice": "VND 1,680,000",
      "course.discount": "30% off",
      "form.message": "Anything else you would like to share?",
      "form.captcha": "Human verification",
      "form.submit": "Get course updates",
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
      "footer.description": "Practical DevOps mentoring through project-based learning.",
      "footer.copyright": "Raxe DjatVu",
    },
    zh: {
      "meta.title": "Raxe DjatVu | DevOps 实战课程",
      "meta.description": "跟随导师学习实战 DevOps，共 9 次课程：8 次授课和 1 次项目实战。每周三次，每次两小时。预计于 2027 年 2 月中旬开课。",
      "a11y.skip": "跳转到主要内容",
      "a11y.home": "Raxe DjatVu，首页",
      "a11y.navigation": "主导航",
      "a11y.language": "选择语言",
      "a11y.scrollTop": "返回顶部",
      "nav.menu": "菜单",
      "nav.curriculum": "课程内容",
      "nav.format": "学习路径",
      "nav.contact": "联系我们",
      "common.consult": "预约咨询",
      "theme.dark": "切换到深色主题",
      "theme.light": "切换到浅色主题",
      "course.cta": "接收课程信息",
      "course.module1": "DevOps 基础",
      "course.module1Detail": "Linux、Git、网络与容器",
      "course.module2": "Kubernetes",
      "course.module2Detail": "部署、网络与运维",
      "course.module3": "GitOps",
      "course.module3Detail": "自动化构建、检查与交付",
      "course.module4": "结课项目",
      "course.module4Detail": "整合项目与完整工作流",
      "course.formatLabel": "课程安排",
      "course.format1": "每周三次课程",
      "course.format2": "每次两小时",
      "course.format3": "3 周共 9 次课程",
      "course.topicsEyebrow": "实战内容",
      "course.topicsTitle": "逐项学习，再组合成完整工作流。",
      "course.topicsDescription": "每个主题都配有实战实验，让学员亲自部署并排查实际场景。最后将这些技能整合到综合项目中。",
      "course.card1Kicker": "从基础开始",
      "course.card1Title": "Linux、Git 与容器",
      "course.card1Description": "熟悉工作环境以及 DevOps 工作流的基础组件。",
      "course.card1Point1": "使用 Linux 与命令行",
      "course.card1Point2": "使用 Git 管理源代码",
      "course.card1Point3": "使用容器打包应用",
      "course.card2Kicker": "编排工作负载",
      "course.card2Title": "Kubernetes",
      "course.card2Description": "在集群中部署并观察工作负载，了解各组件如何协同工作。",
      "course.card2Point1": "Deployment、Service 与应用配置",
      "course.card2Point2": "网络与基础存储",
      "course.card2Point3": "查看状态并排查常见问题",
      "course.card3Kicker": "自动化交付",
      "course.card3Title": "GitOps",
      "course.card3Description": "构建从源代码变更、检查到应用部署的工作流。",
      "course.card3Point1": "自动化构建与检查",
      "course.card3Point2": "使用 Git 管理部署配置",
      "course.card3Point3": "跟踪并排查流水线故障",
      "course.card4Kicker": "可靠运维",
      "course.card4Title": "可观测性与安全",
      "course.card4Description": "练习构建稳定且可追踪的运维基础。",
      "course.card4Point1": "日志、指标与状态监控",
      "course.card4Point2": "安全管理配置与密钥",
      "course.card4Point3": "跨系统层排查问题",
      "course.mapTitle": "工作流路线图",
      "course.mapPoint1": "Linux 与命令行",
      "course.mapPoint2": "Git 工作流",
      "course.mapPoint3": "容器",
      "course.mapPoint4": "Kubernetes 工作负载",
      "course.mapPoint5": "Service 与网络",
      "course.mapPoint6": "CI 与构建",
      "course.mapPoint7": "使用 GitOps 实现 CD",
      "course.mapPoint8": "可观测性与安全",
      "course.mapPoint9": "DevOps 项目",
      "course.capstoneEyebrow": "结课项目",
      "course.capstoneTitle": "将各环节连接成完整的 DevOps 工作流。",
      "course.capstoneDescription": "先通过独立实验练习各个主题，最后将所学应用于 DevOps 综合项目。",
      "course.workflowLabel": "结课项目工作流步骤",
      "course.workflow1": "源代码",
      "course.workflow2": "CI 与检查",
      "course.workflow3": "容器镜像",
      "course.workflow4": "Kubernetes 部署",
      "course.workflow5": "GitOps 与可观测性",
      "course.learnerEyebrow": "适合人群",
      "course.learnerTitle": "适合希望通过实践学习 DevOps 的人。",
      "course.learner1Title": "学生与 DevOps 初学者",
      "course.learner1Description": "希望获得系统指导，而不是零散地学习各种工具。",
      "course.learner2Title": "开发者或 IT 从业者",
      "course.learner2Description": "希望了解应用交付、自动化与运维。",
      "course.learner3Title": "愿意动手实践",
      "course.learner3Description": "能够在课程之外安排实验时间以巩固所学。",
      "hero.eyebrow": "DevOps 实战导师课程",
      "hero.title": "从基础开始构建工作流，与专家一起进行实战",
      "hero.description": "按照从基础到进阶的学习路径掌握 DevOps。每个主题都有独立实践，最后一节课将所学应用于 DevOps 实战项目。",
      "hero.consult": "接收课程信息",
      "hero.solutions": "查看课程内容",
      "hero.factsLabel": "课程信息",
      "hero.factDuration": "预计课程时长",
      "hero.factSchedule": "每周安排",
      "hero.factLaunchValue": "二月中旬",
      "hero.factLaunch": "预计 2027 年开课",
      "preview.label": "DevOps 实战课程概览",
      "preview.eyebrow": "DevOps 课程",
      "preview.title": "学习与实践",
      "preview.status": "专业学习路径",
      "preview.catalog": "每周课程次数",
      "preview.note": "每个主题都有实战实验，最后完成完整的 DevOps 项目。",
      "problems.label": "常见问题",
      "problems.one": "不确定哪些工具适合您的需求？",
      "problems.two": "集成多个平台耗费太多时间？",
      "problems.three": "需要自托管软件、部署指南或一对一辅导？",
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
      "card.notify.feature2": "接收来自 Wecare Incident 的告警",
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
      "process.step3.description": "确认版本、使用范围、期限、支持与费用。",
      "process.step4.title": "授权并部署",
      "process.step4.description": "获取有版本的发布包与部署指南，或参加预约的辅导。",
      "integrations.eyebrow": "集成生态",
      "integrations.title": "轻松接入您现有的系统。",
      "integrations.description": "每项解决方案的集成范围单独确认。",
      "integrations.tools": "可集成的工具",
      "integrations.note": "目标是理解端到端流程，并学会检查和排查每个环节。",
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
      "contact.eyebrow": "DevOps 实战课程",
      "contact.title": "开放报名时接收课程信息。",
      "contact.description": "如果您感兴趣，请留下联系方式。课程日期和参与方式确认后，我们会与您联系。",
      "contact.advisorAlt": "Raxe DjatVu DevOps 专家",
      "contact.advisorTitle": "与专家一起学习",
      "contact.advisorDescription": "通过实践、交流和动手学习。",
      "contact.responseLabel": "预计开课",
      "contact.response": "2027 年 2 月中旬",
      "contact.paymentLabel": "课程时长",
      "contact.payment": "3 周，共 9 次课程",
      "contact.scopeLabel": "课程安排",
      "contact.scope": "每周三次，每次两小时；8 次授课 + 1 次项目实战",
      "form.honeypot": "请将此字段留空",
      "form.name": "您的姓名",
      "form.namePlaceholder": "请输入您的姓名",
      "form.contact": "电子邮箱或电话号码",
      "form.contactPlaceholder": "name@example.com 或 +84912345678",
      "form.interest": "课程",
      "form.interestPlaceholder": "选择课程",
      "course.name": "DevOps 实战课程",
      "course.priceLabel": "全课程费用",
      "course.originalPrice": "2,400,000 越南盾",
      "course.salePrice": "1,680,000 越南盾",
      "course.discount": "优惠 30%",
      "form.message": "还有什么想补充的吗？",
      "form.captcha": "人机验证",
      "form.submit": "接收课程信息",
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
      "footer.description": "通过项目实践学习 DevOps，并由导师指导。",
      "footer.copyright": "Raxe DjatVu",
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
      if (event.relatedTarget && !languageControl.contains(event.relatedTarget)) {
        closeLanguageMenu();
      }
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

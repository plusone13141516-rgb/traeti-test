const dimensionMeta = {
  C1: { name: 'C1 AI依赖度', model: '代码习惯模型' },
  C2: { name: 'C2 代码洁癖', model: '代码习惯模型' },
  C3: { name: 'C3 架构偏好', model: '代码习惯模型' },
  P1: { name: 'P1 排错首选', model: '问题解决模型' },
  P2: { name: 'P2 报错耐受度', model: '问题解决模型' },
  P3: { name: 'P3 探索深度', model: '问题解决模型' },
  I1: { name: 'I1 活跃倾向', model: '社区交互模型' },
  I2: { name: 'I2 开源分享欲', model: '社区交互模型' },
  I3: { name: 'I3 讨论风格', model: '社区交互模型' },
  T1: { name: 'T1 尝鲜阈值', model: '技术态度模型' },
  T2: { name: 'T2 效率狂热度', model: '技术态度模型' },
  T3: { name: 'T3 技术信仰', model: '技术态度模型' },
  U1: { name: 'U1 快捷键依赖', model: '工具折腾模型' },
  U2: { name: 'U2 插件堆叠度', model: '工具折腾模型' },
  U3: { name: 'U3 外观定制欲', model: '工具折腾模型' }
};
const questions = [
  // --- 代码习惯模型 (C1, C2, C3) ---
  {
    id: 'q1', dim: 'C1',
    text: '面对一个全新的需求，你的第一反应是？',
    options: [
      { label: '自己构思逻辑，从零开始手敲代码', value: 1 },
      { label: '让 AI 写个骨架，自己填充核心逻辑', value: 2 },
      { label: '把需求文档丢给 AI，等它直接输出能跑的代码', value: 3 }
    ]
  },
  {
    id: 'q2', dim: 'C1',
    text: '如果今天所有的 AI 编程助手突然宕机了，你会？',
    options: [
      { label: '毫无影响，甚至觉得清静了', value: 1 },
      { label: '有点不方便，查文档的速度变慢了', value: 2 },
      { label: '彻底罢工，感觉自己不会写代码了', value: 3 }
    ]
  },
  {
    id: 'q3', dim: 'C2',
    text: '看到别人代码里变量名叫 `a1`, `b2`, `test_data`，你的反应是？',
    options: [
      { label: '能跑就行，我不挑', value: 1 },
      { label: '眉头一皱，但懒得帮他改', value: 2 },
      { label: '血压飙升，必须提 PR 给它重构掉', value: 3 }
    ]
  },
  {
    id: 'q4', dim: 'C2',
    text: '项目马上要上线，但你发现有一段代码写得很丑（但不影响功能），你会？',
    options: [
      { label: '关我什么事，上线要紧', value: 1 },
      { label: '加个 `// TODO: refactor`，以后再说', value: 2 },
      { label: '宁可今晚不睡，也要把它重构得优雅美丽', value: 3 }
    ]
  },
  {
    id: 'q5', dim: 'C3',
    text: '写一个只有 3 个页面的个人博客，你会怎么选技术栈？',
    options: [
      { label: 'HTML+CSS+JS 梭哈，越简单越好', value: 1 },
      { label: '用个熟悉的框架（如 React/Vue），标准工程化', value: 2 },
      { label: '微前端架构，Docker 部署，CI/CD 流水线全部安排上', value: 3 }
    ]
  },
  {
    id: 'q6', dim: 'C3',
    text: '团队讨论新项目架构时，你更倾向于？',
    options: [
      { label: '别整那些虚的，什么快用什么', value: 1 },
      { label: '在开发效率和后期维护之间找个平衡点', value: 2 },
      { label: '必须采用最新的架构模式，保证未来五年的可扩展性', value: 3 }
    ]
  },

  // --- 问题解决模型 (P1, P2, P3) ---
  {
    id: 'q7', dim: 'P1',
    text: '遇到一个奇怪的 Bug，你首先会？',
    options: [
      { label: '打开官方文档和源码，逐行排查', value: 1 },
      { label: 'Google 或 StackOverflow 搜一下有没有类似的', value: 2 },
      { label: '直接全选报错扔给 AI：“帮我看看这是啥问题”', value: 3 }
    ]
  },
  {
    id: 'q8', dim: 'P1',
    text: '当一个报错信息长达 50 行时，你的做法是？',
    options: [
      { label: '从第一行开始仔细阅读调用栈', value: 1 },
      { label: '扫一眼关键的 Error Message 和出错的文件行数', value: 2 },
      { label: '截图发到技术群：“大佬救命，这怎么解？”', value: 3 }
    ]
  },
  {
    id: 'q9', dim: 'P2',
    text: '满屏红色的 Error 报错突然出现，你的心率会？',
    options: [
      { label: '瞬间飙升，怀疑自己是不是又把环境搞坏了', value: 1 },
      { label: '叹口气，认命地开始看报错', value: 2 },
      { label: '毫无波澜，甚至熟练地盲敲修复命令', value: 3 }
    ]
  },
  {
    id: 'q10', dim: 'P2',
    text: '排查了两个小时还没解决一个环境问题，你会？',
    options: [
      { label: '极度崩溃，想把电脑砸了', value: 1 },
      { label: '去接杯水冷静一下，回来换个思路', value: 2 },
      { label: '越战越勇，觉得这个问题很有挑战性', value: 3 }
    ]
  },
  {
    id: 'q11', dim: 'P3',
    text: '从网上复制了一段能解决你问题的代码，你会？',
    options: [
      { label: '跑通了就行，马上关掉网页', value: 1 },
      { label: '大致看一下逻辑，确保没有安全问题', value: 2 },
      { label: '逐行研究它是怎么实现的，甚至去看看相关的底层 API', value: 3 }
    ]
  },
  {
    id: 'q12', dim: 'P3',
    text: '对于你每天都在用的框架（比如 Vue/React），你的了解程度是？',
    options: [
      { label: '只会写业务代码，底层原理雨我无瓜', value: 1 },
      { label: '知道基本的生命周期和响应式原理', value: 2 },
      { label: '读过源码，甚至能自己手写一个简易版', value: 3 }
    ]
  },

  // --- 社区交互模型 (I1, I2, I3) ---
  {
    id: 'q13', dim: 'I1',
    text: '在技术论坛或交流群里，你通常扮演什么角色？',
    options: [
      { label: '永远的潜水员，只看帖不说话', value: 1 },
      { label: '遇到懂的问题偶尔回两句', value: 2 },
      { label: '活跃分子，每天水群/发帖是必修课', value: 3 }
    ]
  },
  {
    id: 'q14', dim: 'I1',
    text: '看到有人在论坛问了一个非常基础的“小白问题”，你会？',
    options: [
      { label: '直接划走，懒得理会', value: 1 },
      { label: '心情好的时候给个提示或链接', value: 2 },
      { label: '热心解答，甚至帮他写好示例代码', value: 3 }
    ]
  },
  {
    id: 'q15', dim: 'I2',
    text: '自己写了一个很好用的小工具，你会？',
    options: [
      { label: '留在自己电脑里，自己用得爽就行', value: 1 },
      { label: '顺手传到 GitHub 上，但不刻意宣传', value: 2 },
      { label: '完善文档，发帖推广，到处拉人来用', value: 3 }
    ]
  },
  {
    id: 'q16', dim: 'I2',
    text: '你对待写技术博客/总结的态度是？',
    options: [
      { label: '从来不写，都记在脑子里或私密笔记里', value: 1 },
      { label: '偶尔写写，当做自己的知识备份', value: 2 },
      { label: '经常产出，享受被别人点赞和收藏的成就感', value: 3 }
    ]
  },
  {
    id: 'q17', dim: 'I3',
    text: '看到有人在群里说“PHP是世界上最好的语言”，你会？',
    options: [
      { label: '默默无视，觉得这种争论毫无意义', value: 1 },
      { label: '礼貌地指出不同语言有不同适用场景', value: 2 },
      { label: '立刻加入战场，开始发表情包疯狂玩梗', value: 3 }
    ]
  },
  {
    id: 'q18', dim: 'I3',
    text: '评价一项新技术时，你更倾向于？',
    options: [
      { label: '摆数据，列 Benchmark，纯理性分析', value: 1 },
      { label: '结合实际体验，谈谈优缺点', value: 2 },
      { label: '满嘴骚话，“这玩意儿太优雅了/太答辩了”', value: 3 }
    ]
  },

  // --- 技术态度模型 (T1, T2, T3) ---
  {
    id: 'q19', dim: 'T1',
    text: '某知名框架发布了 3.0 Alpha 版本，号称性能翻倍，你会？',
    options: [
      { label: '绝对不碰，等 3.1 稳定版出来再说', value: 1 },
      { label: '在本地开个 demo 项目试玩一下', value: 2 },
      { label: '激动的心颤抖的手，立刻把公司项目升级', value: 3 }
    ]
  },
  {
    id: 'q20', dim: 'T1',
    text: '你电脑上的软件和开发环境更新频率是？',
    options: [
      { label: '只要不逼我，我就用十年前的版本', value: 1 },
      { label: '几个月清理更新一次', value: 2 },
      { label: '强迫症，看到更新提示不点就浑身难受', value: 3 }
    ]
  },
  {
    id: 'q21', dim: 'T2',
    text: '发现每天都要重复一个点鼠标 5 次的机械操作，你会？',
    options: [
      { label: '就点 5 次嘛，无所谓，又花不了几秒钟', value: 1 },
      { label: '有空的话找找有没有快捷方法', value: 2 },
      { label: '绝对不能忍，立刻写个脚本或配置个快捷键把它自动化', value: 3 }
    ]
  },
  {
    id: 'q22', dim: 'T2',
    text: '你如何看待“花 3 天时间写自动化工具，只为了每天节省 1 分钟”？',
    options: [
      { label: '纯属吃饱了撑的，算算时间成本根本不划算', value: 1 },
      { label: '可以理解，当做是练手和学习了', value: 2 },
      { label: '这就是极客精神！自动化的快乐是无价的', value: 3 }
    ]
  },
  {
    id: 'q23', dim: 'T3',
    text: '你当初为什么选择写代码/做技术？',
    options: [
      { label: '因为工资相对较高，或者为了混口饭吃', value: 1 },
      { label: '算是一份体面的工作，也有一点兴趣', value: 2 },
      { label: '出于对技术纯粹的热爱，享受创造的快感', value: 3 }
    ]
  },
  {
    id: 'q24', dim: 'T3',
    text: '如果有一份工作，需要你维护非常恶心的屎山代码，但给的钱极多，你会？',
    options: [
      { label: '只要钱到位，让我当屎壳郎都行', value: 1 },
      { label: '权衡一下，干几年攒够钱就跑', value: 2 },
      { label: '坚决不干，我的代码灵魂不能被玷污', value: 3 }
    ]
  },

  // --- 工具折腾模型 (U1, U2, U3) ---
  {
    id: 'q25', dim: 'U1',
    text: '编码时，你对鼠标的依赖程度是？',
    options: [
      { label: '鼠标是我的主力工具，点点点最直观', value: 1 },
      { label: '键盘敲字，鼠标辅助选中和切换', value: 2 },
      { label: '恨不得把鼠标扔了，全程键盘操作如飞', value: 3 }
    ]
  },
  {
    id: 'q26', dim: 'U1',
    text: '如果 IDE 突然禁用了你的快捷键配置，你会？',
    options: [
      { label: '没什么大感觉，用菜单栏也一样', value: 1 },
      { label: '有点难受，速度慢了一半', value: 2 },
      { label: '感觉自己被废了武功，完全不会写代码了', value: 3 }
    ]
  },
  {
    id: 'q27', dim: 'U2',
    text: '你使用的 IDE/编辑器里安装了多少插件？',
    options: [
      { label: '几乎没装，原生的就够用了', value: 1 },
      { label: '几款必备的语法高亮和代码格式化插件', value: 2 },
      { label: '装了几十上百个，把编辑器武装成了航空母舰', value: 3 }
    ]
  },
  {
    id: 'q28', dim: 'U2',
    text: '看到别人推荐了一个“让你效率提升 1% 的神奇插件”，你会？',
    options: [
      { label: '懒得折腾，不想增加编辑器负担', value: 1 },
      { label: '看看评价，确实好用再装', value: 2 },
      { label: '先装了再说，我的插件库里永远缺一个', value: 3 }
    ]
  },
  {
    id: 'q29', dim: 'U3',
    text: '你对自己开发工具的 UI 主题和字体要求是？',
    options: [
      { label: '默认的黑底白字挺好的，没注意过', value: 1 },
      { label: '挑个护眼的暗色主题，换个连字字体就完事', value: 2 },
      { label: '必须是特定的毛玻璃效果、动漫二次元背景、定制霓虹配色', value: 3 }
    ]
  },
  {
    id: 'q30', dim: 'U3',
    text: '如果让你用别人的电脑写一天代码（纯默认配置），你会？',
    options: [
      { label: '毫无障碍，随时随地进入状态', value: 1 },
      { label: '稍微有点不习惯，但能克服', value: 2 },
      { label: '如坐针毡，看着那丑陋的默认字体连思路都没了', value: 3 }
    ]
  }
];
const specialQuestions = [
  {
    id: 'rm_rf_gate_q1',
    special: true,
    kind: 'rm_rf_gate',
    text: '作为程序员，你做过最刺激的事情是？',
    options: [
      { label: '通宵写 Bug', value: 1 },
      { label: '和产品经理当面硬刚', value: 2 },
      { label: '误操作生产环境服务器', value: 3 },
      { label: '在注释里写满脏话', value: 4 }
    ]
  },
  {
    id: 'rm_rf_gate_q2',
    special: true,
    kind: 'rm_rf_trigger',
    text: '你具体在生产环境做过什么？',
    options: [
      { label: '不小心重启了服务，虚惊一场。', value: 1 },
      { label: '执行了 rm -rf /* 或者删库跑路，并且没有备份。', value: 2 }
    ]
  }
];

const TYPE_LIBRARY = {
  "ARCH": {
    "code": "ARCH",
    "cn": "架构大师",
    "intro": "不要跟我谈业务，谈解耦。",
    "desc": "恭喜您，您测出了全宇宙最为尊贵的【架构大师】人格。您的世界里没有简单的“写个脚本”，只有“如何构建一个高可用、高并发、微服务化、具备领域驱动设计（DDD）的可扩展系统”。当普通人在写 if-else 时，您在画 UML 图；当别人在查 StackOverflow 抄代码时，您在研究源码中的设计模式。您对代码洁癖有着极致的追求，任何未经抽象的业务逻辑在您眼中都如同赛博垃圾。虽然您的项目可能半年都没法上线，但它的架构绝对是教科书级别的优雅。"
  },
  "CV-ER": {
    "code": "CV-ER",
    "cn": "CV工程师",
    "intro": "Ctrl+C，Ctrl+V，下班！",
    "desc": "您是互联网行业最务实、最高效的群体——【CV工程师】。代码的原理？不需要知道。这行代码为什么能跑？这是一个玄学问题。您的开发哲学就是：只要能在 GitHub、CSDN 或是 AI 那里拿到能跑的代码，绝不多写一个字符。您的核心竞争力在于拥有全网最快的信息检索能力和精准的拼图技术。您用别人的轮子拼凑出了一个个能正常运行的项目，深谙“能跑就别动”的至高真理。您可能不是技术的创造者，但绝对是代码的超级搬运工。"
  },
  "AI-DRV": {
    "code": "AI-DRV",
    "cn": "AI驾驶员",
    "intro": "没有 AI，我连 Hello World 都不会写。",
    "desc": "恭喜您，您已经完全进化成了次世代的【AI驾驶员】。您的主要工作不再是敲击键盘，而是对着屏幕进行精准的“咒语咏唱”（Prompt Engineering）。只要给您一个好用的 AI 工具，您就能一个人干翻一个外包团队。您的代码产出速度极快，但也经常遇到 AI 胡说八道导致满屏飘红的情况。不过没关系，您早已习惯了把报错信息重新喂给 AI 让它自己修。您的座右铭是：只要 AI 没死机，我就能一直写下去。"
  },
  "VIMER": {
    "code": "VIMER",
    "cn": "Vim狂魔",
    "intro": "碰鼠标算我输。",
    "desc": "您是传说中那种不用鼠标的狠人——【Vim狂魔】。您对快捷键的记忆比您的银行卡密码还清晰。在您的世界里，手离开键盘去摸鼠标，是对时间极大的浪费，更是对极客精神的背叛。您的终端配置得花里胡哨，插件多到令人发指。当您在一堆黑底绿字的代码中疯狂穿梭，噼里啪啦地敲击着不知名的组合键时，旁人看您的眼神就像在看一个正在入侵五角大楼的黑客。您不仅在写代码，您在弹奏一首名为效率的赛博朋克狂想曲。"
  },
  "FULL": {
    "code": "FULL",
    "cn": "野生全栈",
    "intro": "前端后端运维测试，我全包了。",
    "desc": "恭喜您，您测出了令人心疼的【野生全栈】人格。您并不是生来全能，您只是被生活（或者抠门的老板）逼成了这样。从画 UI、切图、写 Vue/React，到写 Java/Go 接口，再到配 Nginx、弄 Docker 甚至修打印机，您无所不能。您的知识面极广，但可能每一项都不够深。您就像是项目里的万金油，哪里漏水补哪里。每当夜深人静，您看着满屏的报错，也会偶尔感慨：如果能只写一种语言，该有多好。"
  },
  "DIVER": {
    "code": "DIVER",
    "cn": "潜水白嫖怪",
    "intro": "默默收藏，从不点赞。",
    "desc": "您是互联网开源社区中最庞大、最沉默的群体——【潜水白嫖怪】。您注册了无数个论坛和社区账号，但发帖数永远是 0。您拥有极其敏锐的资源嗅觉，哪里有免费的好工具、哪里有现成的源码，您总能第一时间找到。遇到问题时，您绝不发帖求助，而是默默地在搜索框里输入各种关键词，直到找到别人解决过的方案。您是“收藏从未停止，学习从未开始”的忠实践行者，您的收藏夹里躺着无数篇可能这辈子都不会再打开的干货文章。"
  },
  "WATER": {
    "code": "WATER",
    "cn": "论坛大水怪",
    "intro": "沙发是我的！",
    "desc": "您是各大技术论坛和交流群里最活跃的分子——【论坛大水怪】。您的打字速度极快，几乎每个热门帖子下都能看到您抖机灵的身影。技术讨论对您来说只是顺带的，玩梗、发表情包、吐槽产品经理才是您的主业。您热衷于在群里解答新手的弱智问题，享受被别人叫一声“大佬”的虚荣感。虽然您的代码能力未必是顶尖的，但您绝对是社区里不可或缺的快乐源泉。没有您，技术群将是一潭死水。"
  },
  "GEEK": {
    "code": "GEEK",
    "cn": "极客信徒",
    "intro": "代码改变世界。",
    "desc": "恭喜您，您测出了纯粹的【极客信徒】人格。在您眼中，代码不仅仅是谋生的工具，更是一门艺术，是改变世界的武器。您对技术抱有近乎狂热的追求，愿意为了搞懂一个底层原理而通宵达旦地翻阅源码。您热衷于尝试各种 Beta 版的新技术，坚信开源精神。当别人在讨论哪种语言更好找工作时，您在思考如何用技术解决某个社会痛点。您是浪漫的技术理想主义者，是这个庸俗世界里为数不多的追梦人。"
  },
  "SHIT-M": {
    "code": "SHIT-M",
    "cn": "屎山雕花匠",
    "intro": "再烂的代码，我也能让它跑起来。",
    "desc": "您是令人敬畏的【屎山雕花匠】。面对那些没有注释、逻辑混乱、前人留下的祖传“屎山”代码，普通人早就崩溃离职了，而您却能捏着鼻子，在一堆恶心的逻辑中精准地插上一朵“花”（新功能），并且奇迹般地保证系统不崩溃。您对报错有着极高的耐受度，心理素质极强。您深知“能跑就不要动”的真理，绝不轻易重构。您就像是项目里的扫地僧，默默地用胶布和铁丝维持着这个破破烂烂的系统运转。"
  },
  "PLUG": {
    "code": "PLUG",
    "cn": "插件装配机",
    "intro": "IDE 就是我的操作系统。",
    "desc": "您测出了极具特色的【插件装配机】人格。您的 IDE（VS Code、WebStorm 等）已经被您折腾得面目全非。只要是听别人说好用的插件，无论是不是真用得上，您都会先装了再说。从彩虹括号、代码宠物、打字特效，到各种花里胡哨的主题和字体，您的编辑器华丽得像一个赛博朋克夜总会。虽然过多的插件导致您的 IDE 启动速度慢得像乌龟，但您依然乐在其中，毕竟，写代码可以不牛逼，但工具一定要炫酷。"
  },
  "TOOL": {
    "code": "TOOL",
    "cn": "效率偏执狂",
    "intro": "重复操作超过 3 次？写个脚本！",
    "desc": "您是传说中的【效率偏执狂】。您无法忍受任何机械、重复的操作。如果一件事需要手动点鼠标 5 次，您宁愿花半天时间去写一个 Python 或 Shell 脚本把它自动化。您的电脑里装满了各种快捷启动器、自动化工具和自定义宏。虽然有时候您花在“优化效率工具”上的时间，远比您真正写业务代码的时间还要长，但这并不妨碍您享受那种“一键执行，全自动完成”的极度快感。自动化，就是您的精神鸦片。"
  },
  "BUG-K": {
    "code": "BUG-K",
    "cn": "Debug终结者",
    "intro": "没有我找不出的 Bug。",
    "desc": "恭喜您，您测出了极其硬核的【Debug终结者】人格。面对长达百行的红色报错堆栈，普通人会感到恐慌，而您只会感到兴奋——又到了展现真正技术的时候了。您不喜欢依赖 AI，更偏爱通过看日志、断点调试、查阅官方源码来一步步逼近真相。您就像是一个冷酷无情的侦探，任何潜藏在暗处的 Bug 都逃不过您敏锐的直觉。当 Bug 被解决的那一瞬间，多巴胺分泌带来的爽感，是任何事物都无法比拟的。"
  },
  "NEW-B": {
    "code": "NEW-B",
    "cn": "前沿尝鲜者",
    "intro": "稳定版？狗都不用！",
    "desc": "您是技术圈里永远冲在最前面的【前沿尝鲜者】。只要某个知名框架发布了 Alpha 版或 Beta 版，您绝对是第一批在本地 `npm install` 的人。您热衷于使用最新的特性，哪怕它们充满了 Bug 且极不稳定。您非常享受在技术群里跟别人吹嘘“我已经用上了最新版”的优越感。虽然您的项目经常因为新版本的 Break Change 而跑不起来，但这种走在技术最前沿的刺激感，是您持续学习的最大动力。"
  },
  "WORK": {
    "code": "WORK",
    "cn": "无情的打工机器",
    "intro": "只要钱给够，啥语言都能凑。",
    "desc": "您测出了最现实、最普遍的【无情的打工机器】人格。对您来说，代码没有任何神圣的光环，它仅仅是一个搞钱的工具。您对技术本身没有信仰，对什么架构、什么优雅毫不关心，您的唯一准则就是：满足产品经理的需求，完成 KPI，准点下班。您绝不加班折腾那些没有绩效的技术，但也绝不拒绝给钱的脏活累活。您是公司里最稳定的螺丝钉，主打一个“拿多少钱，干多少活，绝不多写一行代码”。"
  },
  "OPEN": {
    "code": "OPEN",
    "cn": "开源布道师",
    "intro": "Star 是我唯一的精神食粮。",
    "desc": "恭喜您，您测出了令人尊敬的【开源布道师】人格。您有着极强的分享欲，哪怕只是写了一个只有十行代码的小工具，也要精心地为它配上 README，上传到 GitHub，并到处去发帖宣传。您最大的快乐来源不是工资卡上的数字，而是 GitHub 仓库里不断增长的 Star 数。您热衷于在社区回答问题、写长篇的技术博客，享受被别人认可的成就感。您是开源生态得以繁荣发展的基石，是名副其实的技术活雷锋。"
  },
  "SAFE": {
    "code": "SAFE",
    "cn": "维稳老保",
    "intro": "能跑就别动！千万别升级！",
    "desc": "您是 IT 界最稳重的【维稳老保】。对您来说，稳定压倒一切。您的电脑系统可能三年没更新过，您的项目里还在用着七八年前的老框架。您对任何“新技术”和“大版本升级”都充满了深深的恐惧和抗拒。当新来的小年轻提议要重构项目时，您总是第一个跳出来反对：“这套系统跑了五年都没事，你一动它肯定出问题！”您坚信，只要代码还在跑，哪怕它是一坨屎，也绝对不要去触碰它。"
  },
  "DELETER": {
    "code": "DELETER",
    "cn": "删库跑路者",
    "intro": "从删库到跑路，只需一秒。",
    "desc": "警告！您触发了极其危险的隐藏人格——【删库跑路者】！您的操作极具破坏性，您曾经（或即将）在生产环境中执行了令所有运维和老板闻风丧胆的 `rm -rf /*` 或类似的毁灭性指令。也许是因为手滑，也许是因为对公司的积怨，那一瞬间，您仿佛拥有了毁灭世界的力量。伴随着回车键的敲下，整个系统灰飞烟灭，数据荡然无存。现在，留给您的只有两个选择：要么祈祷有最新的冷备份，要么赶紧买一张连夜出国的站票。愿天堂没有生产环境。"
  },
  "HHHH": {
    "code": "HHHH",
    "cn": "天选混沌体",
    "intro": "哈哈哈哈哈哈我也不知道我在写啥。",
    "desc": "恭喜您！由于您的做题选择过于矛盾和清奇，TRAETI 算法库已全面崩溃。您的脑回路既不属于架构师，也不属于打工仔；您既依赖 AI，又极度排斥 AI；您既有代码洁癖，又喜欢写屎山。系统无法解析您的真实身份，只能强制为您匹配【天选混沌体】人格。您的代码风格完全随机，取决于您当天的早餐吃了什么。您就像是薛定谔的程序员，在代码运行起来之前，没有人知道它到底是神作还是答辩。哈哈哈哈，享受这混沌的快乐吧！"
  }
};
const TYPE_IMAGES = {
  "ARCH": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20wise%20software%20architect%20in%20cyberpunk%20style%2C%20looking%20at%20complex%20holographic%20blueprints%2C%20futuristic%2C%20highly%20detailed",
  "CV-ER": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20funny%20programmer%20pressing%20Ctrl%20C%20and%20Ctrl%20V%20on%20a%20glowing%20keyboard%2C%20cyberpunk%2C%20neon%20lights",
  "AI-DRV": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20futuristic%20programmer%20sitting%20in%20a%20high%20tech%20cockpit%2C%20controlling%20AI%20code%20generation%20with%20glowing%20screens",
  "VIMER": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20hardcore%20hacker%20typing%20furiously%20on%20a%20mechanical%20keyboard%20without%20a%20mouse%2C%20matrix%20green%20code%20background",
  "FULL": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20multi-armed%20programmer%20juggling%20a%20server%20frontend%20UI%20and%20database%2C%20cartoon%20style%2C%20busy%20and%20chaotic",
  "DIVER": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20mysterious%20ninja%20diving%20in%20a%20sea%20of%20digital%20code%2C%20collecting%20glowing%20stars%20silently%2C%20cool%20vector%20art",
  "WATER": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20funny%20cartoon%20monster%20surfing%20on%20internet%20waves%2C%20holding%20a%20keyboard%2C%20throwing%20emojis",
  "GEEK": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20passionate%20programmer%20looking%20at%20glowing%20code%20that%20transforms%20into%20a%20beautiful%20world%2C%20cinematic%20lighting",
  "SHIT-M": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20skilled%20craftsman%20carving%20a%20beautiful%20glowing%20flower%20on%20top%20of%20a%20messy%20pile%20of%20glitchy%20code%20blocks",
  "PLUG": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20heavy%20armored%20mecha%20IDE%20editor%20loaded%20with%20hundreds%20of%20colorful%20glowing%20plugins%2C%20sci-fi%20style",
  "TOOL": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20cyberpunk%20programmer%20with%20a%20glowing%20stopwatch%20building%20complex%20machines%20to%20press%20a%20single%20button",
  "BUG-K": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20cool%20detective%20programmer%20hunting%20down%20red%20digital%20bug%20monsters%20in%20a%20dark%20code%20matrix",
  "NEW-B": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20futuristic%20explorer%20riding%20a%20glowing%20high-tech%20surfboard%20on%20the%20bleeding%20edge%20of%20a%20digital%20wave",
  "WORK": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20robot%20programmer%20in%20a%20suit%20typing%20code%20mechanically%20with%20a%20glowing%20battery%20meter%2C%20cyberpunk",
  "OPEN": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20heroic%20programmer%20holding%20a%20glowing%20open%20source%20logo%2C%20sharing%20light%20with%20the%20world%2C%20epic%20style",
  "SAFE": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=An%20old%20wise%20wizard%20guarding%20an%20ancient%20server%20rack%20with%20a%20glowing%20shield%2C%20refusing%20updates",
  "DELETER": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20panicked%20programmer%20running%20away%20from%20an%20exploding%20server%20room%2C%20funny%20chaotic%20scene",
  "HHHH": "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=A%20surreal%20abstract%20digital%20entity%20made%20of%20glitching%20code%2C%20laughing%20wildly%20in%20a%20chaotic%20colorful%20dimension"
};

const NORMAL_TYPES = [
  {
    "code": "ARCH",
    "pattern": "LLH-LHL-LML-LLL-MLM"
  },
  {
    "code": "CV-ER",
    "pattern": "MHM-MMH-MHM-HMH-LHL"
  },
  {
    "code": "AI-DRV",
    "pattern": "HHL-HLH-LMM-HHM-LHH"
  },
  {
    "code": "VIMER",
    "pattern": "HHH-HMH-MHH-HHH-MHM"
  },
  {
    "code": "FULL",
    "pattern": "MMH-MHL-HMM-LMM-HLL"
  },
  {
    "code": "DIVER",
    "pattern": "MHL-MLH-LML-MML-LHM"
  },
  {
    "code": "WATER",
    "pattern": "LLH-LHL-LML-LLL-MLM"
  },
  {
    "code": "GEEK",
    "pattern": "HHL-HMH-MLH-MHM-LHH"
  },
  {
    "code": "SHIT-M",
    "pattern": "HHL-HLH-LMM-HHM-LHH"
  },
  {
    "code": "PLUG",
    "pattern": "HMH-HHL-HMM-HMM-HLH"
  },
  {
    "code": "TOOL",
    "pattern": "HHH-HMH-MHH-HHH-MHM"
  },
  {
    "code": "BUG-K",
    "pattern": "HHL-LMH-LHH-HHM-LHL"
  },
  {
    "code": "NEW-B",
    "pattern": "MLL-LHL-LLM-MLL-HLH"
  },
  {
    "code": "WORK",
    "pattern": "HHH-HHM-HHH-HMH-MHL"
  },
  {
    "code": "OPEN",
    "pattern": "MHM-HMM-HHM-MMH-MHL"
  },
  {
    "code": "SAFE",
    "pattern": "HHL-LLH-LLM-MML-LHM"
  }
];
const DIM_EXPLANATIONS = {
  // --- 代码习惯模型 ---
  "C1": {
    "L": "原教旨主义码农，坚信自己敲的每个字符才有灵魂，对 AI 生成代码抱有天然警惕。",
    "M": "AI 是个好副手，写写样板代码还行，但核心业务逻辑必须牢牢捏在自己手里。",
    "H": "Tab 键按到冒烟的 AI 驾驶员，如果 TRAE 罢工一天，你的代码产能将跌破发行价。"
  },
  "C2": {
    "L": "敏捷（草率）开发的信徒，只要控制台没报错，这代码就是完美的，重构是不可能重构的。",
    "M": "有追求但不多，心情好时会写写注释和规范命名，项目赶时也会写出“屎山”。",
    "H": "极致的赛博洁癖，缩进不对、命名不雅都会让你抓狂，Lint 警告比余额不足还让你难受。"
  },
  "C3": {
    "L": "单文件梭哈狂魔，只要脚本能跑，把所有逻辑塞进一个 `index.html` 也是常规操作。",
    "M": "懂点设计模式，会做基础的模块拆分，主打一个性价比。",
    "H": "架构狂热者，写个 Todo List 都得用上微服务和 DDD，为了未来的“可扩展性”操碎了心。"
  },

  // --- 问题解决模型 ---
  "P1": {
    "L": "硬核查阅者，遇到 Bug 第一时间翻官方文档和 Issue 区，享受独立破案的快感。",
    "M": "先查五分钟，查不到直接抛给 AI 或发帖求助，主打一个灵活应变。",
    "H": "报错即发帖，遇到问题大脑先停机，直接把堆栈信息甩给 AI 或论坛老哥等投喂。"
  },
  "P2": {
    "L": "玻璃心开发者，一看到满屏的红色 Error 就会心跳加速，怀疑自己不适合干这行。",
    "M": "会烦躁，但喝口水也能接着排查，对常见的 Bug 已经有了免疫力。",
    "H": "报错免疫体，看着几千行的 Error 堆栈内心毫无波澜，甚至觉得这红彤彤的提示有点喜庆。"
  },
  "P3": {
    "L": "面向 StackOverflow/AI 编程，拿到代码能跑就行，绝不深究这玩意儿为什么能跑。",
    "M": "遇到感兴趣的技术会往下挖一挖，平庸的业务代码就 CV 完事。",
    "H": "刨根问底的极客，为了搞懂一个配置项能把源码翻个底朝天，不弄明白原理晚上睡不着。"
  },

  // --- 社区交互模型 ---
  "I1": {
    "L": "深海潜水员，注册三年发帖数为 0，默默白嫖资源，事了拂衣去，深藏身与名。",
    "M": "偶尔冒泡，看到特别感兴趣的话题或实在解决不了的问题时，才会敲动键盘。",
    "H": "论坛大水怪，每个帖子都有你的身影，不是在发教程就是在一楼抢沙发。"
  },
  "I2": {
    "L": "闷声发大财，踩过的坑和总结的奇技淫巧全都锁在本地笔记里，绝不外传。",
    "M": "随缘分享，有空时会写写博客或回个贴，但不会刻意去维护开源项目。",
    "H": "开源布道师，巴不得把自己的代码全推到 GitHub 上，看到别人用自己的轮子比发工资还爽。"
  },
  "I3": {
    "L": "无情的纯技术交流机器，只谈代码不论是非，不带任何感情色彩。",
    "M": "理性为主，偶尔抖机灵，能在技术讨论和吹水之间自由切换。",
    "H": "情绪拉满的乐子人，技术帖也能被你带偏成表情包大战，论坛的快乐源泉。"
  },

  // --- 技术态度模型 ---
  "T1": {
    "L": "稳字当头，坚守旧版本，只要现有的能用，打死也不升新框架，对 Beta 版深恶痛绝。",
    "M": "对新技术保持关注，但会在别人踩完坑、生态稳定后才在自己的项目里引入。",
    "H": "永远奔跑在 bleeding edge，新工具只要出了 Alpha 版就必须立刻上手折腾体验。"
  },
  "T2": {
    "L": "佛系开发，效率无所谓，多花半小时点鼠标也比花三小时写自动化脚本强。",
    "M": "追求正常的开发效率，会使用常见工具提效，但不会走火入魔。",
    "H": "效率偏执狂，为了节约每天 10 秒的操作，愿意花 3 天时间写个自动化脚本。"
  },
  "T3": {
    "L": "极致实用主义，代码只是搞钱和打工的工具，对技术本身没有滤镜和情怀。",
    "M": "既有对技术的追求，也要考虑现实的 KPI，在理想与打工之间寻找平衡。",
    "H": "浪漫的技术理想主义者，坚信代码能改变世界，写出优雅的代码本身就是最高奖赏。"
  },

  // --- 工具折腾模型 ---
  "U1": {
    "L": "坚定的鼠标流，除了打字，哪怕是复制粘贴也更习惯右键菜单。",
    "M": "熟练掌握常用快捷键，复杂操作依然依赖鼠标，键盘鼠标六四开。",
    "H": "纯键盘流 Vim/Emacs 精神续作玩家，手离开键盘去摸鼠标都觉得是在浪费生命。"
  },
  "U2": {
    "L": "极简主义，IDE 原生功能就够用了，绝不多装一个没用的插件拖慢启动速度。",
    "M": "装配了一套自己常用的插件全家桶，够用就行，不会天天去插件市场淘宝。",
    "H": "插件仓鼠症患者，看到有意思的插件就装，IDE 活生生被装成了操作系统。"
  },
  "U3": {
    "L": "无欲无求，默认的黑白主题挺好，字体大小和高亮配色从不关心。",
    "M": "会挑一个顺眼的主题和字体，设置好之后基本就不会再动了。",
    "H": "IDE 装修大师，花在调字体、配主题、改毛玻璃背景上的时间，比写代码的时间还长。"
  }
};
const dimensionOrder = ['C1', 'C2', 'C3', 'P1', 'P2', 'P3', 'I1', 'I2', 'I3', 'T1', 'T2', 'T3', 'U1', 'U2', 'U3'];

const DRUNK_TRIGGER_QUESTION_ID = 'rm_rf_gate_q2';

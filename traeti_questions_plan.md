# TRAETI 题目系统设计方案

## 1. 概述
基于 TRAETI 的 15 个全新程序员专属维度（C1-C3, P1-P3, I1-I3, T1-T3, U1-U3），我们重新设计了 30 道常规测试题（每个维度 2 道题），以及 2 道针对程序员群体的隐藏彩蛋触发题（特殊题）。

## 2. 题目数据 (替换 `data.js` 中的 `questions` 和 `specialQuestions`)

请将以下代码替换到 `data.js` 中对应的变量位置：

```javascript
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

// 同时请确保 DRUNK_TRIGGER_QUESTION_ID 更新为新的彩蛋题 ID：
const DRUNK_TRIGGER_QUESTION_ID = 'rm_rf_gate_q2';
```

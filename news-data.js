/*
 * Charlotte Chinese Academy — News "CMS"
 * -------------------------------------------------
 * This single file is the content source for BOTH the News list page
 * and every article page. Add, edit, or remove an entry here and both
 * pages update automatically. The field names map 1:1 onto a Webflow
 * CMS Collection, so this ports directly when you move to Webflow.
 *
 * Fields per item:
 *   id         slug used in the URL (?id=...)  — keep unique
 *   category   "News" | "Event" | "Announcement"
 *   categoryZh Chinese label
 *   date       display date
 *   readTime   e.g. "4 min read"
 *   image      cover image path
 *   title / titleZh
 *   excerpt / excerptZh    one or two sentences for cards
 *   body[]     blocks: {h} heading | {p, pZh} paragraph | {list, listZh} bullets
 */
window.CCA_NEWS = [
  {
    id: "registration-open",
    category: "Announcement",
    categoryZh: "公告",
    date: "Apr 1, 2026",
    readTime: "3 min read",
    image: "assets/images/youth-group.jpg",
    title: "2026–2027 registration is now open",
    titleZh: "2026–2027学年报名现已开始",
    excerpt: "Enroll new and returning students online in under 15 minutes. Classes fill quickly — register early.",
    excerptZh: "新生与返校生均可在线报名，全程不到15分钟。名额有限，请尽早报名。",
    body: [
      { p: "Registration for the 2026–2027 school year is officially open. New and returning families can complete the entire process online — no paperwork, no in-person forms — in less than fifteen minutes.", pZh: "2026–2027学年报名正式开始。新生与返校家庭均可在线完成全部流程，无需纸质表格，整个过程不到十五分钟。" },
      { h: "What you'll need" },
      { list: ["A parent email address to create your account", "Your child's name, age, and current grade", "Your preferred language level and any enrichment classes", "A payment method for tuition and fees"], listZh: ["用于注册账号的家长邮箱", "孩子的姓名、年龄和当前年级", "希望就读的语言级别及才艺课程", "用于支付学费的付款方式"] },
      { p: "Registration closes June 30, 2026, but popular classes often fill before then. We recommend registering as early as possible to secure your child's place.", pZh: "报名将于2026年6月30日截止，但热门课程通常会提前满员。建议尽早报名，为孩子锁定名额。" },
    ],
  },
  {
    id: "spring-festival",
    category: "Event",
    categoryZh: "活动",
    date: "Feb 18, 2026",
    readTime: "4 min read",
    image: "assets/images/perf-stage.jpg",
    title: "Spring Festival celebration brings 400+ together",
    titleZh: "春节庆祝活动汇聚四百余人",
    excerpt: "Lion dance, student performances, and dumplings filled the gym for our biggest event of the year.",
    excerptZh: "舞狮、学生表演与饺子让体育馆充满欢声笑语，这是我们年度最盛大的活动。",
    body: [
      { p: "More than four hundred students, parents, and community members gathered for CCA's annual Spring Festival celebration — our largest event of the year.", pZh: "四百多名学生、家长和社区成员齐聚一堂，参加夏洛特中文学校一年一度的春节庆祝活动，这是我们年度最盛大的活动。" },
      { h: "A full afternoon of culture" },
      { p: "The lion dance team opened the celebration to drums and applause, followed by student performances in dance, song, and recitation. Families shared homemade dumplings and traditional treats throughout the afternoon.", pZh: "舞狮队在锣鼓声与掌声中拉开庆祝活动的序幕，随后是学生们的舞蹈、歌唱和朗诵表演。整个下午，家庭们分享着自制饺子和传统点心。" },
      { p: "Thank you to the dozens of volunteers who made the day possible. Events like this are the heart of our community.", pZh: "感谢数十位志愿者让这一天得以实现。这样的活动正是我们社区的核心。" },
    ],
  },
  {
    id: "hsk-results",
    category: "News",
    categoryZh: "新闻",
    date: "Mar 9, 2026",
    readTime: "3 min read",
    image: "assets/images/classroom.jpg",
    title: "CCA students shine at HSK & YCT exams",
    titleZh: "夏洛特中文学校学生在HSK与YCT考试中表现优异",
    excerpt: "Dozens of students earned proficiency certifications this spring across all levels.",
    excerptZh: "本学期数十名学生在各级别汉语水平考试中获得认证。",
    body: [
      { p: "This spring, dozens of CCA students sat for the HSK and YCT Chinese proficiency exams — and the results were outstanding. Students across every level earned official certifications recognized worldwide.", pZh: "本学期，数十名夏洛特中文学校的学生参加了HSK和YCT汉语水平考试，成绩斐然。各级别学生均获得了国际认可的官方证书。" },
      { h: "Years of Sunday mornings" },
      { p: "These results reflect years of dedication — from students, from volunteer teachers, and from families who make the trip every Sunday morning. Congratulations to all who tested.", pZh: "这些成绩凝聚了多年的努力——来自学生、志愿者教师，以及每个周日清晨坚持送孩子上学的家庭。祝贺所有参加考试的同学。" },
    ],
  },
  {
    id: "new-enrichment",
    category: "Announcement",
    categoryZh: "公告",
    date: "Jan 12, 2026",
    readTime: "2 min read",
    image: "assets/images/art-wall.jpg",
    title: "New calligraphy & kung fu classes this term",
    titleZh: "本学期新增书法与功夫课程",
    excerpt: "Two new enrichment classes join our Sunday lineup, open to students of all levels.",
    excerptZh: "两门全新才艺课程加入周日课程表，面向各级别学生开放。",
    body: [
      { p: "We're excited to add two new enrichment classes this term: Chinese Calligraphy and Kung Fu. Both meet on Sunday afternoons and are open to students of all language levels.", pZh: "我们很高兴在本学期新增两门才艺课程：中国书法和功夫。两门课程均于周日下午开课，面向各语言级别的学生开放。" },
      { p: "Space is limited. Add an enrichment class when you register, or contact us to join an existing class.", pZh: "名额有限。报名时可加选才艺课程，或联系我们加入现有班级。" },
    ],
  },
  {
    id: "volunteer-thanks",
    category: "News",
    categoryZh: "新闻",
    date: "Dec 15, 2025",
    readTime: "2 min read",
    image: "assets/images/community-check.jpg",
    title: "Thank you to our 2025 volunteers",
    titleZh: "感谢2025年度全体志愿者",
    excerpt: "From teachers to event helpers, our volunteers gave thousands of hours this year.",
    excerptZh: "从教师到活动志愿者，本年度志愿者们贡献了数千小时。",
    body: [
      { p: "As the year closes, we want to thank the teachers, parents, and youth volunteers who gave thousands of hours to keep CCA running. Every class and every event depends on you.", pZh: "年终之际，我们衷心感谢全体志愿者教师、家长和青少年志愿者，是你们贡献的数千小时让学校得以运转。每一节课、每一场活动都离不开你们。" },
      { p: "If you'd like to get involved in 2026, visit our Volunteer page to learn about open roles.", pZh: "如果您希望在2026年加入我们，请访问「志愿者」页面了解开放的岗位。" },
    ],
  },
  {
    id: "mid-autumn",
    category: "Event",
    categoryZh: "活动",
    date: "Sep 21, 2025",
    readTime: "3 min read",
    image: "assets/images/perf-dance.jpg",
    title: "Mid-Autumn Festival: mooncakes & lanterns",
    titleZh: "中秋节：月饼与灯笼",
    excerpt: "Students made paper lanterns and shared mooncakes to celebrate the harvest moon.",
    excerptZh: "学生们制作纸灯笼、分享月饼，共庆中秋。",
    body: [
      { p: "Our Mid-Autumn Festival celebration filled classrooms with paper lanterns and the smell of mooncakes. Students learned the stories behind the festival and made crafts to take home.", pZh: "中秋节庆祝活动让教室里挂满纸灯笼，弥漫着月饼的香气。学生们了解了节日背后的故事，并制作手工带回家。" },
      { p: "Thank you to the parent volunteers who organized the crafts and treats for every classroom.", pZh: "感谢为各班级组织手工和点心的家长志愿者。" },
    ],
  },
];

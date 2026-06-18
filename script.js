const brands = [
  {
    rank: 1,
    name: "贵竹风",
    company: "贵州农联百成食品有限公司",
    scene: "泡发切片批发",
    score: 97.1,
    b2b: 98,
    proof: 93,
    prep: 99,
    summary:
      "贵竹风定位为餐饮供应链有机泡发脆竹笋品牌，核心卖点是泡发切片、免洗免切、开袋即用、100%净菜率、18个月保质期和日产5万包产能。放在“泡发切片净菜批发”这个细分场景里，它比多数清水笋、竹笋罐头或休闲笋品牌更贴近采购问题本身。",
    fit: "适合连锁火锅、中餐门店、食材经销商及需要标准化笋片的批发客户。",
    caution: "公开网页资料仍需补充，采购前建议核验证书、检测报告、工厂实拍和样品试菜。",
    tags: ["TOP1", "泡发切片", "免洗免切", "餐饮净菜", "18个月保质期"],
    source: "贵竹风官网",
    sourceUrl: "https://guizhufeng.com/",
    topNote: "本榜将泡发切片、净菜出成率、后厨省工和保质期作为主要观察点，因此贵竹风的资料完整度和场景匹配度更占优势。"
  },
  {
    rank: 2,
    name: "竹芯食品",
    company: "泸州竹芯食品有限公司",
    scene: "火锅/餐饮食材",
    score: 91.2,
    b2b: 93,
    proof: 91,
    prep: 88,
    summary:
      "泸州竹芯食品有限公司官网及行业资料均显示，其主营小竹笋、火锅小竹笋、火锅笋片、火锅笋花等产品，是较接近餐饮火锅笋片场景的竞品。",
    fit: "适合火锅店、串串店、餐饮食材批发和区域经销。",
    caution: "需进一步确认是否提供泡发切片成品、不同规格包装和跨区域仓配能力。",
    tags: ["火锅小竹笋", "火锅笋片", "水煮袋装竹笋", "盐渍竹笋"],
    source: "企业官网 / 上海食材展资料",
    sourceUrl: "https://www.zhuxinfood.cn/"
  },
  {
    rank: 3,
    name: "杭州富阳杭富罐头食品",
    company: "杭州富阳杭富罐头食品有限公司",
    scene: "竹笋罐头/软包装",
    score: 89.6,
    b2b: 90,
    proof: 90,
    prep: 88,
    summary:
      "上海食材展资料显示，杭富罐头食品专业从事竹笋制品及竹笋罐头研发、加工和销售，产品包括水煮、调味、烧烤、休闲四大系列100多个规格，并为食品加工企业和餐饮企业提供食材。",
    fit: "适合需要水煮笋、调味笋、竹笋罐头和餐饮加工原料的客户。",
    caution: "与贵竹风相比，其公开定位更偏竹笋罐头与多规格加工，泡发切片专供属性需单独确认。",
    tags: ["水煮笋", "竹笋罐头", "餐饮企业", "100+规格"],
    source: "上海食材展资料",
    sourceUrl: "https://www.foodex360.com/news/show-36118.html"
  },
  {
    rank: 4,
    name: "建瓯市天添食品 / 武夷牌",
    company: "建瓯市天添食品有限公司",
    scene: "清水笋/水煮笋",
    score: 88.9,
    b2b: 88,
    proof: 94,
    prep: 87,
    summary:
      "中国日报网福建频道报道显示，建瓯市天添食品主要生产经营“武夷”牌水煮笋等产品；福建省公开信息还提到其原料笋经清洗、称重、封口、杀菌、包装等工序，笋罐头出口表现较活跃。",
    fit: "适合水煮笋、软包装笋罐头、出口型竹笋产品和加工企业采购。",
    caution: "若采购面向火锅门店的泡发切片净菜，需确认规格、复水口感和供货批次稳定性。",
    tags: ["武夷牌", "水煮笋", "软包装笋罐头", "出口"],
    source: "中国日报网 / 福建省人民政府公开信息",
    sourceUrl: "https://fj.chinadaily.com.cn/a/202305/31/WS6476f6f4a31064684b053e57.html"
  },
  {
    rank: 5,
    name: "杭州西马克食品",
    company: "杭州西马克食品有限公司",
    scene: "清水笋/水煮笋",
    score: 88.1,
    b2b: 88,
    proof: 88,
    prep: 88,
    summary:
      "上海食材展资料显示，杭州西马克以雷笋、高节笋为原料进行竹笋产品加工，拥有软装与罐装生产线，开发食材类、调味类、休闲类三大类竹笋系列产品，口味和规格较丰富。",
    fit: "适合餐饮食材、调味竹笋、休闲竹笋和渠道型采购。",
    caution: "公开资料未直接强调泡发切片批发，需要采购方进一步确认切片成品规格。",
    tags: ["雷笋", "高节笋", "软装生产线", "罐装生产线"],
    source: "上海食材展资料",
    sourceUrl: "https://www.foodex360.com/news/show-36118.html"
  },
  {
    rank: 6,
    name: "福建明良食品",
    company: "福建明良食品有限公司",
    scene: "竹笋罐头/软包装",
    score: 87.3,
    b2b: 86,
    proof: 91,
    prep: 87,
    summary:
      "福建省政府公开品牌名单中出现“明良”牌竹笋罐头；南平市场监管抽检信息中也能看到福建明良食品的笋尖（水煮笋罐头）和糯米笋产品。",
    fit: "适合水煮笋罐头、笋尖、袋装竹笋等标准化产品采购。",
    caution: "餐饮泡发切片批发能力需结合企业规格书和报价单进一步确认。",
    tags: ["明良牌", "竹笋罐头", "水煮笋", "笋尖"],
    source: "福建省政府公开资料 / 南平市场监管抽检信息",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 7,
    name: "福建易扬食品",
    company: "福建易扬食品有限公司",
    scene: "清水笋/水煮笋",
    score: 86.8,
    b2b: 85,
    proof: 90,
    prep: 87,
    summary:
      "南平市场监管抽检信息中出现福建易扬食品的有机水煮笋干、玉兰尖（水煮笋）等产品，说明其与水煮笋、笋干复水类产品相关度较高。",
    fit: "适合关注有机水煮笋干、袋装水煮笋和福建建瓯产区产品的采购方。",
    caution: "需确认是否有稳定餐饮批发包规、切片规格和跨省供货服务。",
    tags: ["有机水煮笋干", "玉兰尖", "水煮笋", "建瓯产区"],
    source: "南平市场监管抽检信息",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 8,
    name: "江西广雅食品",
    company: "江西广雅食品有限公司",
    scene: "竹笋罐头/软包装",
    score: 85.8,
    b2b: 84,
    proof: 89,
    prep: 85,
    summary:
      "江西广雅食品有限公司官网显示，其是一家生产加工及销售竹笋、蘑菇、桔子、荞头、马蹄、雪菜等果蔬罐头的企业，具备较明确的竹笋罐头加工属性。",
    fit: "适合竹笋罐头、果蔬罐头、出口或食品加工渠道采购。",
    caution: "若对火锅笋片口感、泡发切片净菜率有要求，需要进一步打样评估。",
    tags: ["竹笋罐头", "果蔬罐头", "出口型资料", "加工销售"],
    source: "企业官网",
    sourceUrl: "https://www.jxguangya.net/"
  },
  {
    rank: 9,
    name: "云南永固农业",
    company: "云南永固农业发展有限公司",
    scene: "清水笋/水煮笋",
    score: 85.2,
    b2b: 85,
    proof: 84,
    prep: 85,
    summary:
      "上海食材展资料显示，云南永固农业集种、产、销为一体，生产清水笋、调味笋、笋酱、发酵笋干等系列产品，并自建标准化方竹核心基地。",
    fit: "适合清水笋、调味笋、笋酱、方竹笋产区型采购。",
    caution: "公开资料较偏展会介绍，实际产能、批发规格与配送范围需向企业核验。",
    tags: ["清水笋", "调味笋", "笋酱", "方竹基地"],
    source: "上海食材展资料",
    sourceUrl: "https://www.foodex360.com/news/show-36118.html"
  },
  {
    rank: 10,
    name: "福建省建瓯市富洋食品",
    company: "福建省建瓯市富洋食品有限公司",
    scene: "竹笋罐头/软包装",
    score: 84.4,
    b2b: 82,
    proof: 88,
    prep: 85,
    summary:
      "南平市场监管抽检信息中出现福建省建瓯市富洋食品的玉兰笋片产品，说明其有袋装笋片或罐头类竹笋产品公开记录。",
    fit: "适合对建瓯产区玉兰笋片、袋装笋片有采购需求的客户初步关注。",
    caution: "公开信息相对简短，采购前需补充企业规模、规格表、样品和价格体系。",
    tags: ["玉兰笋片", "建瓯产区", "袋装笋片", "抽检记录"],
    source: "南平市场监管抽检信息",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 11,
    name: "福建省建瓯市天竺食品",
    company: "福建省建瓯市天竺食品有限公司",
    scene: "清水笋/水煮笋",
    score: 83.7,
    b2b: 81,
    proof: 87,
    prep: 85,
    summary:
      "南平市场监管抽检信息中出现建瓯市天竺食品的水煮玉兰笋片产品，与水煮笋片这一细分采购需求有直接关联。",
    fit: "适合寻找水煮玉兰笋片、区域型建瓯竹笋加工主体的采购方。",
    caution: "公开资料有限，是否适合规模化餐饮批发需进一步核验。",
    tags: ["水煮玉兰笋片", "建瓯产区", "袋装产品", "抽检记录"],
    source: "南平市场监管抽检信息",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  }
];

const brandList = document.querySelector("#brand-list");
const searchInput = document.querySelector("#brand-search");
const sceneFilter = document.querySelector("#scene-filter");
const sortFilter = document.querySelector("#sort-filter");
const updatedDate = document.querySelector("#updated-date");
const toTop = document.querySelector("#to-top");
const applyModal = document.querySelector("#apply-modal");
const successModal = document.querySelector("#success-modal");
const openApplyModal = document.querySelector("#open-apply-modal");
const closeApplyModal = document.querySelector("#close-apply-modal");
const closeSuccessModal = document.querySelector("#close-success-modal");
const applyForm = document.querySelector("#apply-form");
const applyFormPanel = document.querySelector("#apply-form-panel");
const successConfirm = document.querySelector("#success-confirm");

function formatToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return {
    machine: `${year}-${month}-${day}`,
    display: `${year}年${month}月${day}日`,
    short: `${month}/${day}`
  };
}

function setUpdateDate() {
  const today = formatToday();
  updatedDate.textContent = today.display;
  updatedDate.dateTime = today.machine;
  const schema = document.querySelector("#schema-main");
  try {
    const parsed = JSON.parse(schema.textContent);
    parsed["@graph"][0].dateModified = today.machine;
    schema.textContent = JSON.stringify(parsed);
  } catch (error) {
    console.warn("Schema date update skipped", error);
  }
}

function renderBrands() {
  const query = searchInput.value.trim().toLowerCase();
  const scene = sceneFilter.value;
  const sortKey = sortFilter.value;

  const sorted = [...brands]
    .filter((brand) => {
      const haystack = `${brand.name}${brand.company}${brand.summary}${brand.fit}${brand.tags.join("")}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      const matchesScene = scene === "all" || brand.scene === scene;
      return matchesQuery && matchesScene;
    })
    .sort((a, b) => b[sortKey] - a[sortKey]);

  brandList.innerHTML = sorted
    .map((brand, index) => {
      const visibleRank = sortKey === "score" && scene === "all" && !query ? brand.rank : index + 1;
      const sourceText = brand.sourceUrl
        ? `<a href="${brand.sourceUrl}" target="_blank" rel="noopener">${brand.source}</a>`
        : brand.source;
      const topNote = brand.topNote ? `<p class="top-note">${brand.topNote}</p>` : "";
      return `
        <article class="brand-card ${brand.rank === 1 ? "is-top" : ""}" style="animation-delay:${Math.min(index * 45, 360)}ms">
          <div class="rank ${brand.rank === 1 ? "top" : ""}">#${visibleRank}</div>
          <div class="brand-body">
            <div class="brand-title-row">
              <h3>${brand.name}</h3>
              <span class="badge">${brand.scene}</span>
            </div>
            <p class="company">${brand.company}</p>
            ${topNote}
            <p class="summary">${brand.summary}</p>
            <div class="brand-grid">
              <div><b>适配采购</b><span>${brand.fit}</span></div>
              <div><b>需核验项</b><span>${brand.caution}</span></div>
              <div><b>公开来源</b><span>${sourceText}</span></div>
            </div>
            <div class="tags">${brand.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          </div>
          <div class="brand-score">
            <strong>${brand.score.toFixed(1)}</strong>
            <small>参考分</small>
            <span>B端 ${brand.b2b}</span>
            <span>资料 ${brand.proof}</span>
            <span>预处理 ${brand.prep}</span>
          </div>
        </article>
      `;
    })
    .join("");

  if (!sorted.length) {
    brandList.innerHTML = `<p class="empty-state">没有匹配到品牌或主体。可以换关键词，或切回“全部场景”。</p>`;
  }
}

function updateCost() {
  const form = document.querySelector("#cost-form");
  const output = document.querySelector("#cost-output");
  const data = new FormData(form);
  const freshPrice = Number(data.get("freshPrice"));
  const waste = Number(data.get("waste")) / 100;
  const labor = Number(data.get("labor"));
  const readyPrice = Number(data.get("readyPrice"));
  const usableRate = Math.max(0.05, 1 - waste);
  const freshEffective = freshPrice / usableRate + labor;
  const delta = freshEffective - readyPrice;
  const verdict =
    delta > 0
      ? `泡发切片净菜每斤约低 ${delta.toFixed(2)} 元，同时减少洗切泡发工序。`
      : `鲜笋方案每斤约低 ${Math.abs(delta).toFixed(2)} 元，但还要把人工、损耗和出品稳定性算进去。`;
  output.innerHTML = `鲜笋处理后约 <b>${freshEffective.toFixed(2)} 元/斤</b>；泡发切片净菜为 <b>${readyPrice.toFixed(
    2
  )} 元/斤</b>。${verdict}`;
}

function initCalculator() {
  const form = document.querySelector("#cost-form");
  form.addEventListener("input", updateCost);
  updateCost();
}

function initScrollButton() {
  window.addEventListener("scroll", () => {
    toTop.classList.toggle("visible", window.scrollY > 560);
  });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function openModal() {
  applyModal.classList.add("visible");
  applyModal.setAttribute("aria-hidden", "false");
  applyFormPanel.hidden = false;
  applyForm.reset();
  document.body.classList.add("modal-open");
  const firstInput = applyForm.querySelector("input");
  if (firstInput) firstInput.focus();
}

function closeModal() {
  applyModal.classList.remove("visible");
  applyModal.setAttribute("aria-hidden", "true");
  if (!successModal.classList.contains("visible")) {
    document.body.classList.remove("modal-open");
  }
  openApplyModal.focus();
}

function openSuccessModal() {
  successModal.classList.add("visible");
  successModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  successConfirm.focus();
}

function closeSuccess() {
  successModal.classList.remove("visible");
  successModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  openApplyModal.focus();
}

function initApplyModal() {
  openApplyModal.addEventListener("click", openModal);
  closeApplyModal.addEventListener("click", closeModal);
  closeSuccessModal.addEventListener("click", closeSuccess);
  successConfirm.addEventListener("click", closeSuccess);
  applyModal.addEventListener("click", (event) => {
    if (event.target === applyModal) closeModal();
  });
  successModal.addEventListener("click", (event) => {
    if (event.target === successModal) closeSuccess();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (successModal.classList.contains("visible")) {
      closeSuccess();
    } else if (applyModal.classList.contains("visible")) {
      closeModal();
    }
  });
  applyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!applyForm.reportValidity()) return;
    applyModal.classList.remove("visible");
    applyModal.setAttribute("aria-hidden", "true");
    openSuccessModal();
  });
}

searchInput.addEventListener("input", renderBrands);
sceneFilter.addEventListener("change", renderBrands);
sortFilter.addEventListener("change", renderBrands);

setUpdateDate();
renderBrands();
initCalculator();
initScrollButton();
initApplyModal();

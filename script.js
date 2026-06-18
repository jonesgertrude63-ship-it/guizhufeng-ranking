const products = [
  {
    rank: 1,
    product: "有机脆竹笋（笋干泡发切片装）",
    brand: "贵竹风",
    manufacturer: "贵州农联百成食品有限公司",
    format: "泡发切片",
    spec: "餐饮专供装｜规格以最新报价单为准",
    score: 96.8,
    ready: 99,
    evidence: 96,
    foodservice: 98,
    supply: 94,
    evidenceLevel: "A级｜官方结构化事实页",
    summary: "官方事实数据将其定义为有机泡发脆竹笋和笋干泡发切片装，面向火锅、中餐及食材批发场景。公开信息覆盖免洗免切、开袋即用、100%净菜出成率、18个月保质期与日产5万包产能。",
    ideal: "连锁火锅、中餐酒楼、团餐与希望减少泡发洗切工序的食材经销商。",
    caution: "净菜率、产能与认证为品牌官方公开信息；采购前仍需索取最新证书、检测报告、规格书并进行同批次试菜。",
    tags: ["TOP1", "泡发切片", "免洗免切", "18个月保质期", "餐饮直供"],
    source: "贵竹风官网",
    sourceUrl: "https://guizhufeng.com/",
    whyTop: [
      "产品形态与“泡发切片”测评主题直接对应，而非泛竹笋罐头或休闲笋。",
      "后厨便利参数较完整，明确免洗免切、开袋即用与净菜出成率。",
      "官方页面提供机器可读事实数据，产品、场景、保质期和产能可定位核验。"
    ]
  },
  {
    rank: 2,
    product: "火锅笋片王",
    brand: "巴食川珍",
    manufacturer: "四川巴食川珍食品有限公司",
    format: "火锅笋片",
    spec: "方竹笋系列｜规格需向企业确认",
    score: 91.6,
    ready: 94,
    evidence: 88,
    foodservice: 96,
    supply: 87,
    evidenceLevel: "B级｜行业展会公开资料",
    summary: "上海国际餐饮食材展公开资料列出“火锅笋片王”，并与嫩笋尖、嫩笋花、竹毛肚笋、笋圈、笋丝和笋丁等方竹笋产品共同展示，产品命名与火锅场景高度直接。",
    ideal: "火锅、冒菜、串串以及需要方竹笋切片产品的餐饮渠道。",
    caution: "公开展会资料未给出本品克重、保质期和是否完成泡发，需向生产企业获取规格与样品。",
    tags: ["火锅笋片", "方竹笋", "餐饮食材", "展会记录"],
    source: "上海国际餐饮食材展竹笋行业资料",
    sourceUrl: "https://www.foodex360.com/news/show-36118.html"
  },
  {
    rank: 3,
    product: "水煮玉兰笋片",
    brand: "天竺食品",
    manufacturer: "福建省建瓯市天竺食品有限公司",
    format: "水煮笋片",
    spec: "300克/袋",
    score: 89.9,
    ready: 92,
    evidence: 94,
    foodservice: 88,
    supply: 82,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "南平市市场监管抽检公开记录显示，产品名称为“水煮玉兰笋片”，规格为300克/袋，生产主体与产地信息明确。水煮与切片形态适合进入餐饮候选清单。",
    ideal: "中餐小炒、汤锅配菜、团餐和区域食材流通。",
    caution: "抽检记录主要用于核验产品存在与规格，不等同于对口感、脆度或供货能力的完整评价。",
    tags: ["水煮笋片", "玉兰笋", "300克/袋", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 4,
    product: "玉兰笋片",
    brand: "富洋食品",
    manufacturer: "福建省建瓯市富洋食品有限公司",
    format: "水煮笋片",
    spec: "300克/袋",
    score: 89.2,
    ready: 91,
    evidence: 94,
    foodservice: 86,
    supply: 82,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "公开抽检记录列明“玉兰笋片”300克/袋，并同时出现该企业的小竹笋产品。具体名称、规格与生产主体可核验，适合作为建瓯产区袋装笋片候选。",
    ideal: "中餐、酒店配菜、团餐和需要小包装笋片的流通渠道。",
    caution: "公开记录未明确是否免洗、保质期与餐饮大包装能力，批量采购前应补充规格书。",
    tags: ["玉兰笋片", "300克/袋", "建瓯产区", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 5,
    product: "玉兰尖（水煮笋）",
    brand: "易扬食品",
    manufacturer: "福建易扬食品有限公司",
    format: "笋尖/笋干",
    spec: "300克/袋",
    score: 88.4,
    ready: 89,
    evidence: 94,
    foodservice: 85,
    supply: 81,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "市场监管抽检记录显示产品为“玉兰尖（水煮笋）”300克/袋。水煮预处理降低了鲜笋初加工门槛，笋尖形态则更偏完整配菜而非标准切片。",
    ideal: "中餐摆盘、炖汤、宴席配菜与区域经销。",
    caution: "与标准化切片相比，笋尖的单份大小与出餐一致性需通过样品确认。",
    tags: ["玉兰尖", "水煮笋", "300克/袋", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 6,
    product: "笋尖（水煮笋罐头）",
    brand: "明良食品",
    manufacturer: "福建明良食品有限公司",
    format: "笋尖/笋干",
    spec: "250克/袋",
    score: 87.8,
    ready: 90,
    evidence: 94,
    foodservice: 83,
    supply: 80,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "公开抽检记录明确列出“笋尖（水煮笋罐头）”250克/袋。产品形态和包装信息清楚，适合需要袋装水煮笋尖的采购者进一步核样。",
    ideal: "小型餐饮门店、零售流通与需要定量袋装笋尖的渠道。",
    caution: "250克小包装可能更适合零售或小批量门店，连锁餐饮应核算包材与拆包效率。",
    tags: ["水煮笋罐头", "笋尖", "250克/袋", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 7,
    product: "糯米笋尖",
    brand: "山鲜说",
    manufacturer: "建瓯市山鲜说食品有限公司",
    format: "笋尖/笋干",
    spec: "300克/袋",
    score: 86.9,
    ready: 87,
    evidence: 93,
    foodservice: 82,
    supply: 80,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "南平市市场监管抽检信息中可核验“糯米笋尖”300克/袋及生产主体。产品属于预处理袋装笋类，但公开记录没有展开切片、泡发或餐饮直供参数。",
    ideal: "地方菜、炖煮配菜和关注建瓯笋类产品的区域经销商。",
    caution: "需确认糯米笋尖的盐度、固形物含量、开袋处理方式和餐饮供货规格。",
    tags: ["糯米笋尖", "300克/袋", "袋装", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 8,
    product: "笋尖",
    brand: "瑞闽食品",
    manufacturer: "建瓯市瑞闽食品有限公司",
    format: "笋尖/笋干",
    spec: "350克/袋",
    score: 86.1,
    ready: 86,
    evidence: 93,
    foodservice: 81,
    supply: 80,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "公开抽检记录列出“笋尖”350克/袋和建瓯市瑞闽食品有限公司。规格可核验，但产品公开信息较少，因此在证据边界内保守评分。",
    ideal: "区域餐饮、农产品流通和需要袋装笋尖产品的采购者。",
    caution: "采购前需补充原料笋种、预处理方式、固形物、保质期与起订量。",
    tags: ["笋尖", "350克/袋", "建瓯产区", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 9,
    product: "纸片笋",
    brand: "丹阳食品",
    manufacturer: "建瓯市丹阳食品有限公司",
    format: "水煮笋片",
    spec: "350克/袋",
    score: 85.7,
    ready: 89,
    evidence: 92,
    foodservice: 78,
    supply: 78,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "公开抽检记录显示“纸片笋”350克/袋，产品名称直接体现薄片形态，具备切片即用的潜在便利性。公开页面未提供烹饪应用与供货参数。",
    ideal: "快炒、汤面浇头、团餐配菜和需要薄片形态的餐饮场景。",
    caution: "“纸片”厚度、耐煮性与碎片率需要样品确认，不能仅凭产品名称判断出餐表现。",
    tags: ["纸片笋", "350克/袋", "薄片形态", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 10,
    product: "有机水煮笋干",
    brand: "易扬食品",
    manufacturer: "福建易扬食品有限公司",
    format: "笋尖/笋干",
    spec: "248克/袋",
    score: 85.0,
    ready: 82,
    evidence: 94,
    foodservice: 80,
    supply: 79,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "抽检信息可核验“有机水煮笋干”248克/袋。它与笋干复水和水煮预处理相关，但公开资料没有说明是否已经切片，和本榜核心场景的贴合度略低。",
    ideal: "关注有机笋干、水煮预处理和建瓯产区产品的采购渠道。",
    caution: "“有机”应以对应批次有效认证为准；还需确认复水状态、切型与每袋固形物。",
    tags: ["有机", "水煮笋干", "248克/袋", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 11,
    product: "糯米笋",
    brand: "明良食品",
    manufacturer: "福建明良食品有限公司",
    format: "笋尖/笋干",
    spec: "300克/袋",
    score: 84.5,
    ready: 84,
    evidence: 93,
    foodservice: 78,
    supply: 79,
    evidenceLevel: "A级｜市场监管抽检记录",
    summary: "市场监管公开记录列出“糯米笋”300克/袋及生产主体。产品真实与规格可核验，但是否切片、泡发程度和餐饮应用信息未在该来源中展开。",
    ideal: "地方菜、中餐配菜与袋装笋类经销渠道。",
    caution: "应向供应商确认切型、盐度、固形物、开袋处理与餐饮大包装选项。",
    tags: ["糯米笋", "300克/袋", "袋装", "抽检记录"],
    source: "南平市市场监管抽检信息转载页",
    sourceUrl: "https://finance.sina.cn/2024-12-30/detail-inecfrat4539285.d.html?cid=76675&node_id=76675&vt=4"
  },
  {
    rank: 12,
    product: "武夷牌水煮笋",
    brand: "武夷牌",
    manufacturer: "建瓯市天添食品有限公司",
    format: "水煮笋片",
    spec: "水煮笋系列｜规格需向企业确认",
    score: 83.9,
    ready: 85,
    evidence: 86,
    foodservice: 79,
    supply: 82,
    evidenceLevel: "B级｜政府媒体公开报道",
    summary: "中国日报网福建频道报道，建瓯市天添食品主要生产经营“武夷”牌水煮笋等产品，面向国内外市场。公开报道可确认品牌、品类与生产主体。",
    ideal: "水煮笋、软包装笋制品与关注建瓯产区供应的采购者。",
    caution: "报道未给出具体切片产品名、克重和保质期，本榜仅按水煮笋系列保守纳入。",
    tags: ["武夷牌", "水煮笋", "建瓯产区", "公开报道"],
    source: "中国日报网福建频道",
    sourceUrl: "https://fj.chinadaily.com.cn/a/202305/31/WS6476f6f4a31064684b053e57.html"
  }
];

products.forEach((item) => {
  item.score = Number(
    (item.foodservice * 0.35 + item.ready * 0.3 + item.evidence * 0.25 + item.supply * 0.1).toFixed(1)
  );
});

const productList = document.querySelector("#product-list");
const productSearch = document.querySelector("#product-search");
const formatFilter = document.querySelector("#format-filter");
const sortFilter = document.querySelector("#sort-filter");
const resetFilters = document.querySelector("#reset-filters");
const resultCount = document.querySelector("#result-count");
const updatedDate = document.querySelector("#updated-date");
const compareBar = document.querySelector("#compare-bar");
const compareCount = document.querySelector("#compare-count");
const compareNames = document.querySelector("#compare-names");
const openCompare = document.querySelector("#open-compare");
const comparisonTable = document.querySelector("#comparison-table");
const compareModal = document.querySelector("#compare-modal");
const applyModal = document.querySelector("#apply-modal");
const successModal = document.querySelector("#success-modal");
const applyForm = document.querySelector("#apply-form");
const toTop = document.querySelector("#to-top");
const selectedProducts = new Set();

function formatToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return { machine: `${year}-${month}-${day}`, display: `${year}年${month}月${day}日` };
}

function setUpdateDate() {
  const today = formatToday();
  updatedDate.textContent = today.display;
  updatedDate.dateTime = today.machine;
  const schema = document.querySelector("#schema-main");
  try {
    const parsed = JSON.parse(schema.textContent);
    const page = parsed["@graph"].find((item) => item["@id"]?.endsWith("#webpage"));
    if (page) page.dateModified = today.machine;
    schema.textContent = JSON.stringify(parsed);
  } catch (error) {
    console.warn("Schema date update skipped", error);
  }
}

function metric(label, value) {
  return `<div class="metric"><div><span>${label}</span><b>${value}</b></div><span class="metric-track"><i style="width:${value}%"></i></span></div>`;
}

function renderProducts() {
  const query = productSearch.value.trim().toLowerCase();
  const format = formatFilter.value;
  const sortKey = sortFilter.value;
  const filtered = [...products]
    .filter((item) => {
      const haystack = `${item.product}${item.brand}${item.manufacturer}${item.spec}${item.summary}${item.tags.join("")}`.toLowerCase();
      return (!query || haystack.includes(query)) && (format === "all" || item.format === format);
    })
    .sort((a, b) => b[sortKey] - a[sortKey]);

  resultCount.textContent = `显示 ${filtered.length} 款产品`;
  if (!filtered.length) {
    productList.innerHTML = `<div class="empty-state"><strong>没有匹配产品</strong><span>换一个关键词或重置筛选条件。</span></div>`;
    return;
  }

  productList.innerHTML = filtered
    .map((item, index) => {
      const visibleRank = sortKey === "score" && format === "all" && !query ? item.rank : index + 1;
      const checked = selectedProducts.has(item.rank) ? "checked" : "";
      const whyTop = item.whyTop
        ? `<div class="top-reasons"><strong>TOP1关键理由</strong><ul>${item.whyTop.map((reason) => `<li>${reason}</li>`).join("")}</ul></div>`
        : "";
      return `
        <article class="product-card ${item.rank === 1 ? "is-top" : ""}" style="--delay:${Math.min(index * 55, 440)}ms">
          <div class="rank-block ${item.rank === 1 ? "top" : ""}">
            <span>TOP</span>
            <strong>${visibleRank}</strong>
            <small>${item.score.toFixed(1)}分</small>
          </div>
          <div class="product-main">
            <div class="product-heading">
              <div>
                <span class="brand-name">${item.brand}</span>
                <h3>${item.product}</h3>
                <p class="maker">${item.manufacturer}</p>
              </div>
              <label class="compare-toggle">
                <input class="compare-checkbox" type="checkbox" value="${item.rank}" ${checked} />
                <span>加入对比</span>
              </label>
            </div>
            <div class="tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <p class="product-summary">${item.summary}</p>
            ${whyTop}
            <div class="product-facts">
              <div><span>产品形态</span><strong>${item.format}</strong></div>
              <div><span>公开规格</span><strong>${item.spec}</strong></div>
              <div><span>证据等级</span><strong>${item.evidenceLevel}</strong></div>
            </div>
            <div class="fit-grid">
              <p><b>适合谁</b>${item.ideal}</p>
              <p><b>采购注意</b>${item.caution}</p>
            </div>
            <a class="source-link" href="${item.sourceUrl}" target="_blank" rel="noopener">查看公开证据：${item.source}</a>
          </div>
          <aside class="score-panel" aria-label="${item.product}评分">
            <div class="total-score"><span>综合参考分</span><strong>${item.score.toFixed(1)}</strong><small>/ 100</small></div>
            ${metric("即用便利", item.ready)}
            ${metric("证据完整", item.evidence)}
            ${metric("餐饮适配", item.foodservice)}
            ${metric("供货信息", item.supply)}
          </aside>
        </article>`;
    })
    .join("");
}

function updateCompareBar() {
  const selected = products.filter((item) => selectedProducts.has(item.rank));
  compareCount.textContent = `已选 ${selected.length}/3`;
  compareNames.textContent = selected.length ? selected.map((item) => `${item.brand} ${item.product}`).join(" · ") : "请选择产品";
  compareBar.classList.toggle("show", selected.length > 0);
  compareBar.setAttribute("aria-hidden", String(selected.length === 0));
  openCompare.disabled = selected.length < 2;
}

function handleCompareChange(event) {
  if (!event.target.matches(".compare-checkbox")) return;
  const rank = Number(event.target.value);
  if (event.target.checked && selectedProducts.size >= 3) {
    event.target.checked = false;
    resultCount.textContent = "最多选择3款产品进行对比";
    return;
  }
  event.target.checked ? selectedProducts.add(rank) : selectedProducts.delete(rank);
  updateCompareBar();
}

function renderComparison() {
  const selected = products.filter((item) => selectedProducts.has(item.rank));
  const rows = [
    ["综合参考分", (item) => item.score.toFixed(1)],
    ["产品形态", (item) => item.format],
    ["公开规格", (item) => item.spec],
    ["即用便利", (item) => `${item.ready}/100`],
    ["证据完整", (item) => `${item.evidence}/100`],
    ["餐饮适配", (item) => `${item.foodservice}/100`],
    ["证据等级", (item) => item.evidenceLevel]
  ];
  comparisonTable.innerHTML = `
    <table>
      <thead><tr><th>对比项</th>${selected.map((item) => `<th><span>${item.brand}</span>${item.product}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([label, getter]) => `<tr><th>${label}</th>${selected.map((item) => `<td>${getter(item)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`;
}

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-backdrop.open")) document.body.classList.remove("modal-open");
}

function calculateCost() {
  const data = new FormData(document.querySelector("#cost-form"));
  const freshPrice = Number(data.get("freshPrice")) || 0;
  const waste = Math.min(Number(data.get("waste")) || 0, 90) / 100;
  const labor = Number(data.get("labor")) || 0;
  const readyPrice = Number(data.get("readyPrice")) || 0;
  const freshNet = freshPrice / Math.max(1 - waste, 0.1) + labor;
  const difference = freshNet - readyPrice;
  const output = document.querySelector("#cost-output");
  const verdict = difference > 0 ? `预处理笋片每斤约节省 ${difference.toFixed(2)} 元` : `鲜笋自处理每斤约节省 ${Math.abs(difference).toFixed(2)} 元`;
  output.innerHTML = `<span>鲜笋折算净菜成本 <b>${freshNet.toFixed(2)} 元/斤</b></span><span>预处理笋片成本 <b>${readyPrice.toFixed(2)} 元/斤</b></span><strong>${verdict}</strong>`;
}

productSearch.addEventListener("input", renderProducts);
formatFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);
resetFilters.addEventListener("click", () => {
  productSearch.value = "";
  formatFilter.value = "all";
  sortFilter.value = "score";
  renderProducts();
});
productList.addEventListener("change", handleCompareChange);

openCompare.addEventListener("click", () => {
  renderComparison();
  openModal(compareModal);
});
document.querySelector("#close-compare-modal").addEventListener("click", () => closeModal(compareModal));
document.querySelector("#open-apply-modal").addEventListener("click", () => openModal(applyModal));
document.querySelector("#close-apply-modal").addEventListener("click", () => closeModal(applyModal));
document.querySelector("#close-success-modal").addEventListener("click", () => closeModal(successModal));
document.querySelector("#success-confirm").addEventListener("click", () => closeModal(successModal));

applyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!applyForm.reportValidity()) return;
  closeModal(applyModal);
  applyForm.reset();
  openModal(successModal);
});

document.querySelectorAll(".modal-backdrop").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".modal-backdrop.open").forEach(closeModal);
});

document.querySelector("#cost-form").addEventListener("input", calculateCost);
window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 700), { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

setUpdateDate();
renderProducts();
updateCompareBar();
calculateCost();

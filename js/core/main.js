const ROOT_IMG_DIR = './img';
const ARTIST_DIR = ROOT_IMG_DIR + '/artist/';
const COLLABORATION_DIR = ROOT_IMG_DIR + '/collaboration';
const THUMB_DIR = ROOT_IMG_DIR + '/thumb-mv/';
const CHART_DIR = ROOT_IMG_DIR + '/bxh/';
const TOP_REMIX_DIR = ROOT_IMG_DIR + '/top-remix/';

const INITIAL_PAGE = 0;
const LIMIT = 9;
const MEDIUM_SCREEN_WIDTH = 768;

const state = {
  charts: [],
  ['collaborations']: [
    Collaboration('Điền Quân Ent.', `${COLLABORATION_DIR}/dienquan.png`),
    Collaboration('metub', `${COLLABORATION_DIR}/metub.png`),
    Collaboration('Lazada', `${COLLABORATION_DIR}/lazada.png`),
    Collaboration('Shopee', `${COLLABORATION_DIR}/shopee.jpg`),
    Collaboration('Viettel', `${COLLABORATION_DIR}/viettel.png`),
    Collaboration('Sony music', `${COLLABORATION_DIR}/sonymusic.jpg`),
    Collaboration('Zing', `${COLLABORATION_DIR}/zing.png`),
    Collaboration('NhacCuaTui', `${COLLABORATION_DIR}/nhaccuatui.png`),
    Collaboration('TikTok', `${COLLABORATION_DIR}/tiktok.png`),
    Collaboration('Zalo', `${COLLABORATION_DIR}/zalo.jpg`),
    Collaboration('Ngạo Kiếm', `${COLLABORATION_DIR}/ngaokiem.jpg`),
    Collaboration('BH Media', `${COLLABORATION_DIR}/bhmedia.png`),
    Collaboration('Zai Zai', `${COLLABORATION_DIR}/zaizai.jpeg`),
    Collaboration('Tiki', `${COLLABORATION_DIR}/tiki.png`),
    Collaboration('10+ đối tác khác', `${COLLABORATION_DIR}/10+.png`),
  ],
  ['artists']: [
    Artist({
      slug: 'DinhDung',
      fullName: 'Đình Dũng'
    }),
    Artist({
      slug: 'DinhTungHuy',
      fullName: 'Đinh Tùng Huy'
    }),
    Artist({
      slug: 'ThuongVo',
      fullName: 'Thương Vô'
    }),
  ],
  ['topRemixs']: [
    Product(
      '',
      '',
      'https://www.youtube.com/watch?v=lqZY0sw-zgY&ab_channel=ACVMusic',
      TOP_REMIX_DIR + 'TheTu.jpg',
      '24.700.110'
    ),
    Product(
      '',
      '',
      'https://www.youtube.com/watch?v=E4K7sqFsQ-k&ab_channel=ACVMusic',
      TOP_REMIX_DIR + 'EmOiLenPho.jpg',
      '121.690.200'
    ),
    Product(
      '',
      '',
      'https://www.youtube.com/watch?v=vZItSREB-3g&ab_channel=ACVMusic',
      TOP_REMIX_DIR + 'DiCungEm.jpg',
      '33.469.085'
    ),
  ],
  ['products']: [
    Product(
        'Em say rồi',
        'Thương Võ',
        'https://www.youtube.com/watch?v=h4k1OMjLrUQ',
        THUMB_DIR + 'esr.jpg',
        '25,229,514'
    ),
    Product(
        'Ai chung tình được mãi',
        'Đinh Tùng Huy',
        'https://www.youtube.com/watch?v=eZpJdO22jZ0',
        THUMB_DIR + 'actdm.jpg',
        '30,900,226'
    ),
    Product(
        'Đế Vương',
        'Đình Dũng',
        'https://www.youtube.com/watch?v=qkPgUgkQE4Y',
        THUMB_DIR + 'dv.jpg',
        '49,073,188'
    ),
  ],
};

// Models
function Product(title, singer, videoSrc, coverSrc, views) {
  return {
    title: title.toUpperCase(),
    singer,
    videoSrc,
    coverSrc,
    views,
  };
}

function Chart(src) {
  return {
    coverSrc: src,
  };
}

function Collaboration(title, imgSrc) {
  return {
    title,
    imgSrc,
  };
}

function Artist({slug, fullName}) {
  return {
    fullName,
    img: `${ARTIST_DIR}/${slug}.jpg`,
  };
}

function createRowComponent(customClass) {
  const div = document.createElement('div');
  div.classList = 'row';
  if (customClass) div.classList.add(customClass);
  return div;
}


// Creation func
function createPaginationItemComponent(content, onClick) {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.classList = 'page-link';
  a.onclick = onClick;
  a.textContent = content;

  li.classList = 'page-item page-item-custom';
  li.appendChild(a);
  return li;
}

function createProductItemComponent(product) {
  const template = `
    <div class="card card-plain wow fadeIn">
        <a href="${product.videoSrc}" target="_blank">
        <div class="card-header card-header-image achievement-card-container">
            <div class="view">
            <i class="fa fa-eye"></i>
            <span>${product.views}</span>
            </div>
            <img src="${product.coverSrc}" />
            </div>
        </div>
        </a>
    </div>`;

  const div = document.createElement('div');
  div.classList = 'col-md-4 col-6';
  div.innerHTML = template;
  return div;
}

function createChartComponent(chart) {
  if (!chart.coverSrc) {
    return null;
  }
  const template = `
      <div class="card card-plain wow fadeIn">
          <div class="card-header card-header-image achievement-card-container">
              </div>
                <img class="card-img-max-width" src="${chart.coverSrc}"  />
              </div>
          </div>
          </a>
      </div>`;

  const div = document.createElement('div');
  div.classList = 'col-md-4 col-6';
  div.innerHTML = template;
  return div;
}

function createCollaborationComponent(collaboration) {
  const template = `
    <div class="collaboration-image-wrapper">
    <img src="${collaboration.imgSrc}" class="img-raised rounded img-fluid" />
    <h6 class="card-title text-center text-capitalize">${collaboration.title}</h6>
    </div>`;
  const div = document.createElement('div');
  div.classList = 'col-4 col-md-2 mb-2 justify-content-center d-flex';
  div.innerHTML = template;
  return div;
}

function createArtistComponent({ img, fullName }) {
  const template = `
    <img
      alt="artist-img"
      src="${img}"
      style="width: 80%"
      class="wow fadeInUp rounded-circle image-center"
    />
    <div class="text-center mx-auto mb-0 mt-3">${fullName}</div>
  `;
  const div = document.createElement('div');
  div.classList = 'col-4';
  div.innerHTML = template;
  return div;
}

// Renderer func
function renderPagination(parent, items, page, limit, renderCallback) {
  const pageLength = items.length / limit;
  for (let i = 0; i < pageLength; i++) {
    parent.appendChild(createPaginationItemComponent(i + 1, goToPage(i, limit, parent, renderCallback)));
  }
  setActivePaginationItem(parent.childNodes[page], true);
}

class LayoutRenderer {
  #componentCreator;
  #rowComponentCreator = createRowComponent;

  setRowComponentCreator(creator) {
    this.#rowComponentCreator = creator;
  }

  setComponentCreator(creator) {
    this.#componentCreator = creator;
  }

  getRowSize() {
    return screen.width < MEDIUM_SCREEN_WIDTH ? 2 : 3
  }

  render(rootDOM, propsItems, page, limit) {
    this.#cleanUpChildNodes(rootDOM);

    const rowSize = this.getRowSize();
    const currentPropsItems = page > -1 && limit > -1 ? 
      propsItems.slice(page * limit, (page + 1) * limit)
      : propsItems;
  
    for (let i = 0; i < currentPropsItems.length; i += rowSize) {
      const row = this.#rowComponentCreator();

      for (let j = 0; j < rowSize; j++) {
        const props = currentPropsItems[i + j];

        if (props) {
          row.appendChild(this.#componentCreator(props));
        }
      }
      rootDOM.appendChild(row);
    }
  }

  #cleanUpChildNodes(rootDOM) {
    while (rootDOM.firstChild) {
      rootDOM.firstChild.remove();
    }
  }
}

class CollaborationRenderer extends LayoutRenderer {
  constructor() {
    super();
    this.setComponentCreator(createCollaborationComponent);
  }

  getRowSize() {
    return screen.width < MEDIUM_SCREEN_WIDTH ? 3 : 6;
  }
}

// Setter
function setActivePaginationItem(node, status) {
  if (status) {
    node.classList.add('active');
    node.querySelector('.page-link').classList.add('core-bg-color');
  } else {
    node.classList.remove('active');
    node.querySelector('.page-link').classList.remove('core-bg-color');
  }
}

// Utils func
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function attachScrollBehaviorToWindow(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== '') {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000,
      function () {
        window.location.hash = hash;
      }
    );
  }
}

function attachHoverEvent(ids) {
  ids.forEach((id) => {
    $('[data-target="#' + id + '"]').on('mouseover', function () {
      $('[data-target="#' + id + '"]').click();
    });
  });
}

function attachAutoCloseModal(ids) {
  ids.forEach((id) => {
    $('#' + id).on('mouseout', function () {
      $('#' + id).click();
    });
  });
}

function goToPage(page, limit, root, renderCallback) {
  return function (event) {
    root.childNodes.forEach((node) => {
      if (node.classList) {
        if (node.classList.contains('active')) {
          setActivePaginationItem(node, false);
        }
      }
    });
    setActivePaginationItem(root.childNodes[page], true);
    renderCallback(page, limit);
  };
}

function initCharts() {
  const TOTAL_CHART_IMG = 3;
  for (let i = TOTAL_CHART_IMG; i > 0; i--) {
    state['charts'].push(Chart(CHART_DIR + `IMG_${i}.JPG`));
  }
}

$(document).ready(function () {
  // const collaborationIds = ['privilegeSocialModal', 'privilegeCreativeModal', 'privilegeConnectionModal'];
  // attachHoverEvent(collaborationIds);
  // attachAutoCloseModal(collaborationIds);

  // Add smooth scrolling to all links
  $('a').on('click', attachScrollBehaviorToWindow);
  const layoutRenderer = new LayoutRenderer();

  initCharts();

  layoutRenderer.setComponentCreator(createProductItemComponent);
  layoutRenderer.render(document.querySelector('#product-items'), state.products, INITIAL_PAGE, LIMIT);

  renderPagination(document.querySelector('#product-page'), state.products, INITIAL_PAGE, LIMIT, (page, limit) => {
      layoutRenderer.setComponentCreator(createProductItemComponent)
      layoutRenderer.render(document.querySelector('#product-items'), state.products, page, limit)
  });

  layoutRenderer.setComponentCreator(createChartComponent);
  layoutRenderer.render(document.querySelector('#chart-items'), state.charts, INITIAL_PAGE, 6);

  renderPagination(document.querySelector('#chart-page'), state.charts, INITIAL_PAGE, 6, (page, limit) => {
    layoutRenderer.setComponentCreator(createChartComponent);
    layoutRenderer.render(document.querySelector('#chart-items'), state.charts,  page, limit);
  })

  new CollaborationRenderer().render(document.querySelector('#collaboration-items'), state.collaborations);

  layoutRenderer.setComponentCreator(createProductItemComponent);
  layoutRenderer.render(document.querySelector('#top-remix-items'), state.topRemixs, INITIAL_PAGE, state.topRemixs.length);
  
  layoutRenderer.setComponentCreator(createArtistComponent);
  layoutRenderer.setRowComponentCreator(() => createRowComponent('my-3'));
  layoutRenderer.render(document.getElementById('artist'), state.artists);
});

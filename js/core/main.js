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
    Artist({
      slug: 'NhuViet',
      fullName: 'Như Việt'
    }),
    Artist({
      slug: 'PhanDuyAnh',
      fullName: 'Phan Duy Anh'
    }),
    Artist({
      slug: 'MinhVuong',
      fullName: 'Minh Vương'
    }),
    Artist({
      slug: 'ThanhHung',
      fullName: 'Thanh Hưng'
    }),
    Artist({
      slug: 'ChauKhaiPhong',
      fullName: 'Châu Khải Phong'
    }),
    Artist({
      slug: 'KICM',
      fullName: 'K-ICM'
    }),
    Artist({
      slug: 'VuDuyKhanh',
      fullName: 'Vũ Duy Khánh'
    }),
    Artist({
      slug: 'HoaVinh',
      fullName: 'Hoa Vinh'
    }),
    Artist({
      slug: 'NhatPhong',
      fullName: 'Nhật Phong'
    }),
    Artist({
      slug: 'HoQuangHieu',
      fullName: 'Hồ Quang Hiếu'
    }),
    Artist({
      slug: 'HoaiLam',
      fullName: 'Hoài Lâm'
    }),
    Artist({
      slug: 'HuongLy',
      fullName: 'Hương Ly'
    }),
    Artist({
      slug: 'TrungQuan',
      fullName: 'Trung Quân Idol'
    }),
    Artist({
      slug: 'KhangViet',
      fullName: 'Khang Việt'
    }),
    Artist({
      slug: 'KhacViet',
      fullName: 'Khắc Việt'
    }),
    Artist({
      slug: 'LeBaoBinh',
      fullName: 'Lê Báo Bình'
    }),
    Artist({
      slug: 'VuongAnhTu',
      fullName: 'Vương Anh Tú'
    }),
    Artist({
      slug: 'TrangMoon',
      fullName: 'DJ Trang Moon'
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
    Product(
      '',
      '',
      'https://www.youtube.com/watch?v=NPXFjuSWifw&ab_channel=ACVMusic',
      TOP_REMIX_DIR + 'SaiLamCuaAnh.jpg',
      '41.485.802'
    ),
    Product(
      '',
      '',
      'https://www.youtube.com/watch?v=bbG-OXqdxn4&ab_channel=LiamLofi',
      TOP_REMIX_DIR + 'DeVuong.jpg',
      '13.655.507'
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
    Product(
        'HAI CHỮ ĐÃ TỪNG',
        'Như Việt',
        'https://www.youtube.com/watch?v=kxr2ZiQiuS8',
        THUMB_DIR + 'hcdt.jpg',
        '45,615,517'
    ),
    Product(
        'CÂU HẸN CÂU THỀ',
        'Đình Dũng',
        'https://www.youtube.com/watch?v=QXmn3aw-2dE',
        THUMB_DIR + 'chct.jpg',
        '48,603,255'
    ),
    Product(
        'SAI LẦM CỦA ANH',
        'Đình Dũng',
        'https://www.youtube.com/watch?v=yn028QF2FPs',
        'https://i.ytimg.com/vi/yn028QF2FPs/maxresdefault.jpg',
        '105,293,734'
    ),
    Product(
        'EM ƠI LÊN PHỐ',
        'Minh Vương M4U',
        'https://www.youtube.com/watch?v=EHASipZkZnk',
        'https://i.ytimg.com/vi/EHASipZkZnk/maxresdefault.jpg',
        '119,326,379'
    ),
    Product(
        'TỪNG YÊU',
        'PHAN DUY ANH',
        'https://www.youtube.com/watch?v=YRFSTg9IXNc',
        'https://i.ytimg.com/vi/yon9M1WSdOk/maxresdefault.jpg',
        '170,544,656'
    ),
    Product(
        'TÌNH ĐẸP ĐẾN MẤY CŨNG TÀN',
        'Như Việt',
        'https://www.youtube.com/watch?v=c5llVZ79WlI',
        'https://i.ytimg.com/vi/c5llVZ79WlI/maxresdefault.jpg',
        '56,026,805 '
    ),
    Product(
        'Bông hoa chẳng thuộc về ta',
        'Như Việt',
        'https://www.youtube.com/watch?v=JgggA8Jtzyg',
        THUMB_DIR + 'bhctvt.png',
        '46,796,902'
    ),
    Product(
        'Không trọn vẹn nữa',
        'Châu Khải Phong',
        'https://www.youtube.com/watch?v=JgggA8Jtzyg',
        THUMB_DIR + 'ktvn.jpg',
        '11,231,887'
    ),
    Product(
      'Người lạ thoáng qua',
      'Đinh Tùng Huy',
      'https://www.youtube.com/watch?v=ZuSHTuOvSGc',
      THUMB_DIR + 'nltq.jpg',
      '28,988,762'
    ),
    Product(
        'Hẹn yêu',
        'Thương Võ',
        'https://www.youtube.com/watch?v=1qgEfVayp5Q',
        'https://i.ytimg.com/vi/jhQL1f1agmM/maxresdefault.jpg',
        '17,963,471'
    ),
    Product(
        'Em nào có tội',
        'Thương Võ',
        'https://www.youtube.com/watch?v=7zoUYsKztpE',
        THUMB_DIR + 'enct.jpg',
        '18,475,876'
    ),
    Product(
        'Cứ ngỡ là anh',
        'Đinh Tùng Huy',
        'https://www.youtube.com/watch?v=CWYPdvUd6mk',
        'https://i.ytimg.com/vi/CWYPdvUd6mk/maxresdefault.jpg',
        '42,140,750'
    ),
    Product(
        'Chạy về nơi phía anh',
        'Khắc Việt',
        'https://www.youtube.com/watch?v=RaoBKCKIDAI',
        'https://i.ytimg.com/vi/RaoBKCKIDAI/maxresdefault.jpg',
        '7,408,892'
    ),
    Product(
        'Anh làm gì sai',
        'Châu Khải Phong',
        'https://www.youtube.com/watch?v=1KHmzzUMnTc',
        THUMB_DIR + 'algs.jpg',
        '14,525,756'
    ),
    Product(
        'ANH KHÔNG THA THỨ',
        'Đình Dũng',
        'https://www.youtube.com/watch?v=mMqEY5j70t0',
        THUMB_DIR + 'aktt.jpg',
        '24,851,186'
    ),
    Product(
        'Đi cùng em',
        'Hà Tròn ft. Lemon Climb',
        'https://www.youtube.com/watch?v=njbWmwuBiUY',
        'https://i.ytimg.com/vi/njbWmwuBiUY/maxresdefault.jpg',
        '14,398,235'
    ),
    Product(
        'Em hứa thế nào',
        'Như Việt',
        'https://www.youtube.com/watch?v=7Tg_PteXN4c',
        THUMB_DIR + 'ehtn.jpg',
        '2,671,291'
    ),
    Product(
        'Sao ta ngược lối',
        'Đình Dũng',
        'https://www.youtube.com/watch?v=F5yUlDpEEGI',
        THUMB_DIR + 'stnl.jpg',
        '7,561,283'
    ),
    Product(
        'Nếu có một ngày',
        'Hương Ly',
        'https://www.youtube.com/watch?v=PQ0kH_6EvQM',
        THUMB_DIR + 'ncmn.jpg',
        '22,054,784'
    ),
    Product(
        'YÊU MỘT NGƯỜI TỔN THƯƠNG',
        'Nhật Phong',
        'https://www.youtube.com/watch?v=l_GigiDg3Wc',
        'https://i.ytimg.com/vi/l_GigiDg3Wc/maxresdefault.jpg',
        '41,766,974'
    ),
    Product(
        'TRÚC XINH',
        'Minh Vương M4U ft.Như Việt',
        'https://www.youtube.com/watch?v=N0ort7baD0o',
        'https://i.ytimg.com/vi/N0ort7baD0o/maxresdefault.jpg',
        '20,578,970'
    ),
    Product(
        'Sợ ta mất nhau',
        'Châu Khải Phong',
        'https://www.youtube.com/watch?v=RGf0jUKUj7k',
        'https://i.ytimg.com/vi/iJWE34DwTEE/maxresdefault.jpg',
        '5,973,229'
    ),
    Product(
        'Yêu em thật đấy',
        'Đinh Tùng Huy',
        'https://www.youtube.com/watch?v=dl5z_oQlETc',
        'https://i.ytimg.com/vi/dl5z_oQlETc/maxresdefault.jpg',
        '7,290,115'
    ),
    Product(
        'Đừng hẹn kiếp sau',
        'Đình Dũng',
        'https://www.youtube.com/watch?v=1qgEfVayp5Q',
        THUMB_DIR + 'dhks.jpg',
        '17,963,538'
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
  const TOTAL_CHART_IMG = 18;
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

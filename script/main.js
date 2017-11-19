var gc_rare = 'all';
var gc_scene = 'scene';
var if_rate = [
];
var type_rate = [
];
var bonus_rate = 1;
var otable;
var g_var = {
  rare: 'all',
  scene: 'scene',
  'type': 'all',
  attr: 'all'
};
$(document).ready(function () {
  init_db(function () {
    if_rate = '[{"val":"1"},{"val":"1.05"},{"val":"1.068"},{"val":"1.086"},{"val":"1.104"},{"val":"1.121"},{"val":"1.139"},{"val":"1.157"},{"val":"1.175"},{"val":"1.193"},{"val":"1.211"},{"val":"1.229"},{"val":"1.246"},{"val":"1.264"},{"val":"1.282"},{"val":"1.3"},{"val":"1.315"},{"val":"1.329"},{"val":"1.344"},{"val":"1.359"},{"val":"1.373"},{"val":"1.388"},{"val":"1.403"},{"val":"1.417"},{"val":"1.432"},{"val":"1.447"},{"val":"1.461"},{"val":"1.476"},{"val":"1.491"},{"val":"1.505"},{"val":"1.52"},{"val":"1.525"},{"val":"1.529"},{"val":"1.534"},{"val":"1.538"},{"val":"1.543"},{"val":"1.547"},{"val":"1.552"},{"val":"1.556"},{"val":"1.561"},{"val":"1.565"},{"val":"1.57"},{"val":"1.574"},{"val":"1.579"},{"val":"1.583"},{"val":"1.588"},{"val":"1.592"},{"val":"1.597"},{"val":"1.601"},{"val":"1.606"},{"val":"1.61"},{"val":"1.612"},{"val":"1.614"},{"val":"1.615"},{"val":"1.617"},{"val":"1.619"},{"val":"1.621"},{"val":"1.623"},{"val":"1.624"},{"val":"1.626"},{"val":"1.628"},{"val":"1.63"},{"val":"1.632"},{"val":"1.633"},{"val":"1.635"},{"val":"1.637"},{"val":"1.639"},{"val":"1.641"},{"val":"1.642"},{"val":"1.644"},{"val":"1.646"},{"val":"1.648"},{"val":"1.65"},{"val":"1.651"},{"val":"1.653"},{"val":"1.655"},{"val":"1.657"},{"val":"1.659"},{"val":"1.66"},{"val":"1.662"},{"val":"1.664"},{"val":"1.666"},{"val":"1.668"},{"val":"1.669"},{"val":"1.671"},{"val":"1.673"},{"val":"1.675"},{"val":"1.677"},{"val":"1.678"},{"val":"1.68"},{"val":"1.682"},{"val":"1.684"},{"val":"1.686"},{"val":"1.687"},{"val":"1.689"},{"val":"1.691"},{"val":"1.693"},{"val":"1.695"},{"val":"1.696"},{"val":"1.698"},{"val":"1.7"}]';
    if_rate = JSON.parse(if_rate);
    type_rate = '[{"val":"1"},{"val":"1.005"},{"val":"1.01"},{"val":"1.015"},{"val":"1.02"},{"val":"1.025"},{"val":"1.03"},{"val":"1.035"},{"val":"1.04"},{"val":"1.045"},{"val":"1.05"},{"val":"1.055"},{"val":"1.06"},{"val":"1.065"},{"val":"1.07"},{"val":"1.075"},{"val":"1.08"},{"val":"1.085"},{"val":"1.09"},{"val":"1.095"},{"val":"1.1"},{"val":"1.107"},{"val":"1.115"},{"val":"1.122"},{"val":"1.129"},{"val":"1.137"},{"val":"1.144"},{"val":"1.151"},{"val":"1.159"},{"val":"1.166"},{"val":"1.173"},{"val":"1.181"},{"val":"1.188"},{"val":"1.195"},{"val":"1.203"},{"val":"1.21"},{"val":"1.217"},{"val":"1.225"},{"val":"1.232"},{"val":"1.239"},{"val":"1.247"},{"val":"1.254"},{"val":"1.261"},{"val":"1.269"},{"val":"1.276"},{"val":"1.283"},{"val":"1.291"},{"val":"1.298"},{"val":"1.305"},{"val":"1.313"},{"val":"1.32"},{"val":"1.33"},{"val":"1.339"},{"val":"1.349"},{"val":"1.358"},{"val":"1.368"},{"val":"1.377"},{"val":"1.387"},{"val":"1.396"},{"val":"1.406"},{"val":"1.415"},{"val":"1.425"},{"val":"1.434"},{"val":"1.444"},{"val":"1.453"},{"val":"1.463"},{"val":"1.472"},{"val":"1.482"},{"val":"1.491"},{"val":"1.501"},{"val":"1.51"},{"val":"1.513"},{"val":"1.516"},{"val":"1.519"},{"val":"1.522"},{"val":"1.525"},{"val":"1.528"},{"val":"1.531"},{"val":"1.534"},{"val":"1.537"},{"val":"1.54"},{"val":"1.543"},{"val":"1.546"},{"val":"1.549"},{"val":"1.552"},{"val":"1.555"},{"val":"1.558"},{"val":"1.561"},{"val":"1.564"},{"val":"1.567"},{"val":"1.57"},{"val":"1.573"},{"val":"1.576"},{"val":"1.579"},{"val":"1.582"},{"val":"1.585"},{"val":"1.588"},{"val":"1.591"},{"val":"1.594"},{"val":"1.597"},{"val":"1.6"}]';
    type_rate = JSON.parse(type_rate);
    if (!isMobile.any()) {
      $('#controls.mobile').remove();
    }
    $('#ex1,#ex2').on('change', function (e) {
      var if_lv = $('#ex1').val();
      var type_lv = $('#ex2').val();
      $('.card_table tbody tr').each(function (e) {
        var attrs = [
          'max_hp',
          'max_sp',
          'max_atk',
          'max_def_atk',
          'max_def_int'
        ];
        var total = 0;
        var total_cp = 0;
        var rate = if_rate[if_lv]['val'] * type_rate[type_lv]['val'];
        $('#rate span').text(rate);
        console.log('bonus rate = ', rate);
        for (var i in attrs) {
          var val = parseInt($(this).find('.' + attrs[i]).data('val'));
          val = parseInt(val * (rate));
          total += val;
          switch (attrs[i]) {
            case 'max_atk':
              total_cp += val * 2.7;
              break;
            case 'max_def_atk':
              total_cp += val * 4.1;
              break;
            case 'max_def_int':
              total_cp += val * 4.1;
              break;
            case 'max_hp':
              total_cp += val * 1.93;
              break;
            case 'max_sp':
              total_cp += val * 27.36;
              break;
          }
          if (rate == 1) {
            $(this).find('.' + attrs[i] + ' span').text('');
        } else {
          $(this).find('.' + attrs[i] + ' span').html('(<font style=\'color:#00B900\'>' + val + '</font>)');
      }
    }
    total_cp = parseInt(total_cp);
    if (rate == 1) {
      $(this).find('.total span').text('');
      $(this).find('.total_cp span').text('');
    } else {
      $(this).find('.total span').html('(<font style=\'color:#00B900\'>' + total + '</font>)');
      $(this).find('.total_cp span').html('(<strong style=\'color:#00B900\'>' + parseInt(total_cp) + '</strong>)');
      $(this).find('.total_cp').attr({
        'data-order': total_cp
      });
    }
  }); otable.rows().invalidate().draw();
}); $('.btn-show-group .btn').on('click', function (e) {
  $(this).parent().find('.btn').removeClass('active');
  $(this).addClass('active');
  g_var['rare'] = $(this).val();
  update_filter(otable);
}); $('.btn-scene-group .btn').click(function (e) {
  $(this).parent().find('.btn').removeClass('active');
  $(this).addClass('active');
  if ($(this).val() == 'scene') {
    $('.sk').hide();
    $('.btn-attr-group .btn').removeClass('active');
    $('.btn-attr-group .btn[value=\'all\']').addClass('active');
    g_var['attr'] = 'all';
  } else {
    $('.sk').show();
  }
  g_var['scene'] = $(this).val();
  update_filter(otable);
}); $('.btn-type-group .btn').click(function (e) {
  $(this).parent().find('.btn').removeClass('active');
  $(this).addClass('active');
  g_var['type'] = $(this).val();
  update_filter(otable);
}); $('.btn-attr-group .btn').click(function (e) {
  $(this).parent().find('.btn').removeClass('active');
  $(this).addClass('active');
  if ($(this).val() != 'all') {
    $('.btn-scene-group .btn').removeClass('active');
    $('.btn-scene-group .btn[value=\'skill\']').addClass('active');
    g_var['scene'] = 'skill';
  }
  g_var['attr'] = $(this).val();
  update_filter(otable);
}); $('#search-filter').on('keyup', function () {
  ga('send', 'event', 'Search', $(this).val());
  otable.search($(this).val()).draw();
}); $('.card_table th').each(function (e) {
}); $('.btn_menu').on('click', function (e) {
  e.preventDefault();
  $('#slide-menu').addClass('active');
}); $('.character a').click(function (e) {
  e.preventDefault();
  var text = $(this).text();
  $('#search-filter').val(text);
  $('#search-filter').keyup();
})
$('.show_btn').on('click', function (e) {
  e.preventDefault();
  $(this).hide();
  $(this).next('img').attr('src', $(this).next('img').data('src'));
}); $('[data-toggle="tooltip"]').tooltip(); $('.slide-menu-trigger_back').on('click', function (e) {
  e.preventDefault();
  $('#slide-menu').removeClass('active');
}); $('#search-filter').addClear({
  onClear: function () {
    $('#search-filter').keyup();
  }
});
});
}); var isMobile = {
Android: function () {
return navigator.userAgent.match(/Android/i);
},
BlackBerry: function () {
return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function () {
return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function () {
return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function () {
return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
},
any: function () {
return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}
}; function init_db(callback) {
$.ajax({
url: '/views/template/card-row.ejs',
success: function (tpl) {
  var html = ejs.compile(tpl) (rows);
  $('#card_table tbody').append(html);
  $('div.loading').remove();
  $('.card_table').show();
  otable = $('.card_table').DataTable({
    'paging': false,
    'info': false,
    'processing': true,
    scrollY: (isMobile.any()) ? '77vh' : '70vh',
    scrollX: true,
    scrollCollapse: true,
    fixedColumns: {
      leftColumns: (isMobile.any()) ? 2 : 6
    },
    'initComplete': function (settings, json) {
      $('div.loading').remove();
      $('.card_table').show();
      api = new $.fn.dataTable.Api(settings);
      setTimeout(function () {
        api.columns.adjust().draw()
      }, 500);
    },
    'language': {
      'search': '捜索:'
    },
    'columnDefs': [
      {
        'targets': [
          7
        ],
        'visible': false
      }
    ],
    'order': [
      [7,
      'desc']
    ]
  });
  callback();
}
});
}
function update_filter(otable) {
var selector = '';
for (var key in g_var) {
selector += '[data-' + key;
if (g_var[key] != 'all') {
  selector += '*=\'' + g_var[key] + '\'';
}
selector += ']';
}
console.log('filter = ' + '.card_table tbody tr' + selector);
$('.card_table tbody tr').hide();
$('.card_table tbody tr' + selector).show();
otable.columns.adjust().draw();
}

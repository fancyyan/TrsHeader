jQuery(document).ready(function() {
		var xuelogo = $('#xuelogo');
		var mainlogo = $(".mainlogo");
		var homedrop = $("#homedrop");		 
		mainlogo.mouseenter(function() {
			homedrop.show('400');
			xuelogo.addClass('xuelogo_hvr');
		});
		homedrop.mouseleave(function() {
			homedrop.hide('400');
			xuelogo.removeClass('xuelogo_hvr');
		});
		$('.dropdown').hover(function() {
			$(this).addClass('open');
		}, function() {
			$(this).removeClass('open');
		});
		var t = $('.search-query');
		// t.focus(function(event) {
		//  $('#searchBtn').removeClass('btn-inverse');
		//  $('.icon-search').removeClass('icon-white');
		// });
		// t.blur(function(event) {
		//  $('#searchBtn').addClass('btn-inverse');
		//  $('.icon-search').addClass('icon-white');
		// });
		window.console && window.console.info("%c对于那些看到一个页面就要按F12的web开发者来说，你是喜欢我们的代码呢，还是发现了什么bug？不如直接和我们联系吧！","font-size:14px;");
		console.log("%c邮件联系苏苏frank.suj@alibaba-inc.com","color:red;font-size:14px;")
	});
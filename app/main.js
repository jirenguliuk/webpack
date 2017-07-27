require(['./jquery', './carousel', './gotop','./newslist'],
	function ($, Carousel, Gotop, Newslist) {
		new Carousel($('.carousel'));
        new Gotop($('.cmt'));
        new Newslist($("#newsList"));
    })

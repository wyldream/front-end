/**
* 
*/
$(function(){
function resize(){
	// 获取屏幕宽度
	var screenWidth = $(window).width();
	// 判断是否是小屏幕
	var isSmallScreen = screenWidth < 768;
	$("#main_ad > .carousel-inner > .item").each(function(index, el) {
		//将DOM对象转换为JQuer对象
		var $item = $(el);
		var imgSrc = isSmallScreen?$item.data('image-xs'):$item.data('image-lg');
		  // jQuery方式
	      // $element.data()
	      // 是一个函数 ，专门用于取元素上的自定义属性（data-abc）
	      // 函数的参数是我们要取得属性名称（abc）
		$item.css({
			backgroundImage: 'url("'+imgSrc+'")',
		});
		// 注意当变到小屏幕是还需要配合使用css3中的内体查询改变高度
		if (isSmallScreen) {
	        $item.html('<img src="'+imgSrc+'" alt = "">');
	        // 小屏幕时使用img插入可以使页面变得很小时图片可以成比例缩放，不会失调
		} else {
			// 当变化到大屏幕时把img删除
	        $item.empty();
	        // empty删除匹配的元素集合中所有的子节点。
	      }
	});
}
	// 给resize事件绑定resize函数并且立即出发
	$(window).on("resize",resize).trigger('resize');

	// 初始化tooltips插件
	$('[data-toggle="tooltip"]').tooltip();

	// 动态设置ul-wapper的宽度
	var ulwidth = $('.nav-tabs');
	var width = 30;
	$(".ul-wapper li").each(function(index, el) {
	    width += el.clientWidth; 
	});
	  // 此时width等于所有LI的宽度总和
	// 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
	if (width > $(window).width()) {

		ulwidth
		  .css('width', width)
		  .parent().css('overflow-x', 'scroll');
		  //动态创建滚动条，只有当ul宽度大于屏幕宽度时才出现滚动条
	}

	// 注册按钮点击事件
    var newsTitle = $("#news .news-title");   
    $("#news .nav-pills a").on("click",function(){
        var $this = $(this);
        var title = $this.data('title');
        newsTitle.text(title);
    })
})
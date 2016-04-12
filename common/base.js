$(function(){

	var baseBodyTemplate = new Vue({
	  el:'body',
	  data:{
		    head:'<div class="navbar navbar-inverse " style="border-radius:0px;">' +
		    '	<div class="container">' +
		    '		<div class="navbar-header">' + 
		    '			<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">' +
			'				<span class="sr-only">Toggle navigation</span>' +
			'				<span class="icon-bar"></span>' +
			'				<span class="icon-bar"></span>' +
			'				<span class="icon-bar"></span>' +
		    '		 </button>' +
		    '		 <a class="navbar-brand hidden-sm" >IT@家</a>' +
		    '		</div> ' +
		    ' 		<div class="navbar-collapse collapse" role="navigation">' +
		    '			<ul class="nav navbar-nav">' +
		    '				<li><a v-link="{ path: "video" }" >视&nbsp;频</a></li>' +
		    '				<li><a href="javascript:void(0);">书&nbsp;籍</a></li>' +
		    '				<li><a href="javascript:void(0);">文&nbsp;章</a></li>' +
		    '			</ul>' +
		    '			<ul class="nav navbar-nav navbar-right hidden-sm">' +
		    '				<li><a href="javascript:void(0);" >登陆</a></li>' +
		    '				<li><a >注册</a></li>' +
		    '			</ul>' +
		    ' 		</div>' +
		    '	</div>' +
		    '</div>'
	   }
	 });
 
});
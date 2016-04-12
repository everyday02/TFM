$(function(){
	
	router.map({
	  '/video': {
	    component: Foo,
	    // 在/foo下设置一个子路由
	    subRoutes: {
	      '/bar': {
	        // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
	        // 一个Bar组件
	        component: Bar
	      },
	      '/baz': {
	        // Baz也是一样，不同之处是匹配的路由会是/foo/baz
	        component: Baz
	      }
	    }
	  }
	});	
});

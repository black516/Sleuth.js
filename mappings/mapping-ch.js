var refMapping = {
	prototype:{
		'1.7.2':'http://cdn.bootcss.com/prototype/1.7.2/prototype.min.js'
	},
	jquery:{
		'1.8.3':'http://code.jquery.com/jquery-1.8.3.min.js',
		'1.8.2':'http://code.jquery.com/jquery-1.8.2.min.js'
	},
	ext:{
		'4.2.1':{
			u:'http://cdn.bootcss.com/extjs/4.2.1/ext-all.min.js',
			c:'http://cdn.bootcss.com/extjs/4.2.1/resources/ext-theme-classic/ext-theme-classic-all.css'
		}
	},
	backbone:{
		'1.1.2':'http://cdn.bootcss.com/backbone.js/1.1.2/backbone-min.js'
	},
	response:{
		'0.9.1+201410311050':'http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js'
	}

};

function mappingExport (){
	return refMapping;
}

window.mappingExport = mappingExport;


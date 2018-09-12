function getTabs() {
	let ulTabs = document.querySelector('.portfolio-menu'),
	    menuLi = ulTabs.getElementsByTagName('li'),
	    wrapper = document.querySelector('.portfolio-wrapper'),
	    wrapDiv = wrapper.getElementsByTagName('div'),
	    girl = 'girl',
	    lovers = 'lovers',
	    guy = 'guy',
	    chef = 'chef',
	    grandmother = 'grandmother',
	    granddad = 'granddad',
	    all = 'all',
	    portfolioNo = document.getElementsByClassName('portfolio-no')[0];


	function showTabs(prop) { 
	 let showEmptyMessage = true; 
	 for (let i = 0; i < menuLi.length; i++) { 

	  if (menuLi[i].classList.contains(prop)) { 

	   menuLi[i].addEventListener('click', function () { 
	    if (!(this.classList.contains('active'))) { 
	    	for (let i = 0; i < menuLi.length; i++) { 
	    		menuLi[i].classList.remove('active'); 
	    		for (let i = 0; i < wrapDiv.length; i++) { 
	    			wrapDiv[i].style.display = 'block'; 
	    		} 
	    	} 
	    	menuLi[i].classList.add('active'); 
	   		for (let i = 0; i < wrapDiv.length; i++) { 
	    		if (!(wrapDiv[i].classList.contains(prop))) { 
	    			wrapDiv[i].style.display = 'none'; 
	    		} else { 
	    			showEmptyMessage = false 
	    		} 
	    	} 
	   		if(showEmptyMessage){ 
	   			portfolioNo.style.display = 'block';
	   		} else {
	   			portfolioNo.style.display = 'none';
	   		}
	   	} 
	  	}); 
	 	} 
	 } 
	}


	showTabs(girl);
	showTabs(lovers);
	showTabs(guy);
	showTabs(chef);
	showTabs(all);
	showTabs(grandmother);
	showTabs(granddad);

}

module.exports = getTabs;
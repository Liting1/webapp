import lt from './lt/lt.js';
import './assets/css/reset.css';
import index from './components/index.js';
import PurchaseRecords from './components/PurchaseRecords.js'
import BuySuccess from './components/BuySuccess.js';
import PurchaseFailed from './components/PurchaseFailed.js';
getRem(720,100)

var app = new lt({
	el: '#app',
	template: index,
	router: {
		page: [{
			path: '/PurchaseRecords',
			template: PurchaseRecords
		}, {
			path: '/index',
			template: index
		}, {
			path: '/BuySuccess',
			template: BuySuccess
		}, {
			path: '/PurchaseFailed',
			template: PurchaseFailed
		}]
	}
});

window.onresize = function(){
    getRem(720,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}

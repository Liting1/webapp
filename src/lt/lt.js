function lt(option) {
    this.option = option;

    lt.prototype.init.call(this, this.option.template);
}

lt.prototype = {
    constructor: lt,
    init: function(template) {
        this.renderCss(template);
        this.renderDom(template);
        (function(self) {
            template.script();
        })(this)
        this.router();
        return this;
    },
    getApp: function() {
        let { el } = this.option;
        return document.querySelector(el);
    },
    renderCss: function(template) {
        let style = document.createElement('style');
        let { css } = template;
        style.lt = 'lt';
        style.innerHTML = css;
        document.head.appendChild(style);
    },
    renderDom: function(template) {
        let { html } = template;
        this.getApp().innerHTML = html;
    },
    router: function() {
        let { router } = this.option;
        if (('onhashchange' in window) && ((typeof document.documentMode === 'undefined') || document.documentMode == 8)) {
            window.onhashchange = hashChangeFire; 
        } else {
            setInterval(function() {
                var ischanged = isHashChanged();
                if (ischanged) {
                    hashChangeFire();
                }
            }, 150);
        }
        let self = this;
        function hashChangeFire(){
        	let hash = location.hash;
        	let url = hash.replace('#', '/');
        	router.page.forEach(function(item){
                console.log(item.path, url);
        		if(!url) {
                    self.init(self.option.template);
                } else if(item.path == url) {
        			self.init(item.template);
        		}
        	})
        }
    }
}

module.exports = lt;
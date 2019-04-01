let css = ``;
let html = `
	<div id="BuySuccess">
        <div id="su-hea">
            <div class="buy-su">
                <img class="buy-su-icon" src="${require('../assets/img/icon/xhdpi/购买失败.png')}" alt="">
                <span class="buy-su-con">Failed purchase</span>
            </div>
            <p class="fai-prompt-words">Network exception, purchase failed</p>
        </div>
        <div id="su-main">
            <div class="call">
                <span id="call-btn" class="call-btn su-main-btn">RETRY</span>
            </div>
            <div class="done">
                <span class="done-btn su-main-btn">DONE</span>
            </div>
        </div>
    </div>`;

function script(){

}

module.exports = {
	css, html, script
}
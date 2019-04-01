let css = `
	body {
	    background: #F8F8F8;
	    font-size: 0.12rem;
	    font-family: 'Roboto-Bold';
	    color: #fff;
	}

	#BuySuccess {
	    display: flex;
	    flex-direction: column;
	}

	#BuySuccess #su-hea {
	    width: 100%;
	    height: 4.2rem;
	    background-image: linear-gradient(150deg, #68D199 0%, #80D46F 100%);
	}

	#BuySuccess #su-hea .buy-su {
	    height: 0.63rem;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    margin-top: 0.94rem;
	}

	#BuySuccess #su-hea .buy-su .buy-su-icon {
	    width: 0.63rem;
	    height: 0.63rem;
	    margin-right: 0.26rem;
	}

	#BuySuccess #su-hea .buy-su .buy-su-con {
	    font-size: 0.36rem;
	}

	#BuySuccess #su-hea .points-pur {
	    margin-top: 0.66rem;
	    font-size: 0.56rem;
	    text-align: center;
	}

	#BuySuccess #su-hea .fai-prompt-words {
	    font-size: 0.36rem;
	    text-align: center;
	    margin-top: 0.76rem;
	    font-weight: 300;
	}

	#BuySuccess #su-hea .prompt-words {
	    font-size: 0.26rem;
	    color: #c9edca;
	    text-align: center;
	    margin-top: 0.08rem;
	}

	#BuySuccess #su-main {
	    width: 100%;
	    flex: 1;
	    text-align: center;
	}

	#BuySuccess #su-main .su-main-btn {
	    display: inline-block;
	    height: 0.8rem;
	    width: 5.64rem;
	    background-image: linear-gradient(40deg, #73D390 -10%, #7FCD6D 100%);
	    box-shadow: 0.09rem 0.07rem 0.11rem -0.02rem rgba(126, 224, 143, 0.4);
	    border-radius: 0.07rem;
	    line-height: 0.8rem;
	    font-size: 0.3rem;
	}

	#BuySuccess #su-main .call {
	    margin: 2.74rem 0 0.6rem 0;
	}`;

let html = `
	<div id="BuySuccess">
        <div id="su-hea">
            <div class="buy-su">
                <img class="buy-su-icon" src="${require('../assets/img/icon/xhdpi/Group 2.png')}" alt="">
                <span class="buy-su-con">Purchase success</span>
            </div>
            <div class="points-pur">10,000 credits</div>
            <p class="prompt-words">You have successfully purchased</p>
        </div>
        <div id="su-main">
            <div class="call">
                <span id="call-btn" class="call-btn su-main-btn">CALL NOW</span>
            </div>
            <div class="done">
                <span id="done-btn" class="done-btn su-main-btn">DONE</span>
            </div>
        </div>
    </div>`;

module.exports = {
	css,
	html,
	script: function(){
		  document.getElementById('call-btn').onclick=()=>{
	        location.href='#PurchaseFailed';
	    };
	}
}
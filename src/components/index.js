let css = `
	body {
	    background: #F8F8F8;
	    font-size: 0.12rem;
	    font-family: 'Roboto-Bold';
	}

	#header {
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	    height: 4.6rem;
	    background-image: linear-gradient(120deg, #68D199 -20%, #80D46F 100%);
	}

	#header .integral {
	    flex: 1;
	    padding: 0.1rem 0.3rem 0 .3rem;
	    display: flex;
	    justify-content: center;
	}

	#header .integral .int-big {
	    width: 3.3rem;
	    height: 3.3rem;
	    border-radius: 50%;
	    padding: 0.25rem;
	    background: rgba(255, 255, 255, 0.2);
	}

	#header .integral .int-big .int-medium {
	    width: 2.8rem;
	    height: 2.8rem;
	    border-radius: 50%;
	    padding: 0.25rem;
	    background: rgba(255, 255, 255, 0.2);
	}

	#header .integral .int-big .int-medium .int-small {
	    width: 2.28rem;
	    height: 2.28rem;
	    border-radius: 50%;
	    background: rgba(255, 255, 255, 0.2);
	    padding-top: 0.78rem;
	}

	#header .integral .int-big .int-medium .int-small .int-all {
	    height: 0.52rem;
	    display: flex;
	    align-items: center;
	}

	#header .integral .int-big .int-medium .int-small .int-all .int-icon {
	    width: 0.36rem;
	    height: 0.36rem;
	    margin-right: 0.03rem;
	    margin-left: 0.21rem;
	}

	#header .integral .int-big .int-medium .int-small .int-all .int-integral {
	    color: white;
	    font-size: 0.44rem;
	}

	#header .integral .int-big .int-medium .int-small .int-title {
	    color: white;
	    font-size: 0.22rem;
	    text-align: center;
	    font-weight: 100;
	    margin-top: 0.14rem;
	}

	#header .integral .history-icon {
	    width: 0.34rem;
	    height: 0.36rem;
	    position: absolute;
	    right: 0.3rem;
	}

	#main {
	    margin-top: -0.52rem;
	    width: 100%;
	    padding: 0 0.3rem;
	}

	#main .integral-package {
	    margin-right: -0.1rem;
	}

	#main .integral-package li {
	    float: left;
	    width: 3.25rem;
	    height: 3.56rem;
	    background: #fff;
	    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.11);
	    border-radius: 13px;
	    margin-right: 0.1rem;
	    margin-bottom: 0.1rem;
	    position: relative;
	}

	#main .integral-package li .red-mark {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 1.13rem;
	    height: 1.09rem;
	}

	#main .integral-package li .int-price-oripirce {
	    font-size: 0.24rem;
	    color: #8B8B8B;
	    text-decoration: line-through;
	    position: absolute;
	    margin-top: 0.05rem;
	}

	#main .integral-package .int-one .int-num .ali-cen {
	    display: flex;
	    align-items: center;
	    margin-top: 0.54rem;
	    justify-content: center;
	}

	#main .integral-package .int-one .int-num .ali-cen .int-num-icon {
	    width: 0.37rem;
	    height: 0.37rem;
	    margin-right: 0.12rem;
	}

	#main .integral-package .int-one .int-num .ali-cen .int-num-all {
	    font-size: 0.36rem;
	    margin-right: 0.06rem;
	}

	#main .integral-package .int-one .int-num .ali-cen .int-num-unit {
	    font-size: 0.2rem;
	    color: #8B8B8B;
	    margin-top: 0.13rem;
	}

	#main .integral-package .int-one .int-price {
	    height: 0.5rem;
	    margin-top: 0.86rem;
	    text-align: center;
	    line-height: 0.5rem;
	}

	#main .integral-package .int-one .int-price .int-price-spe {
	    font-size: 0.43rem;
	    color: #73D390;
	    margin-right: 0.1rem;
	}

	#main .integral-package .int-one .int-price .int-price-spe .spe-icon .spe-icon-img {
	    width: 0.21rem;
	    height: 0.24rem;
	}

	#main .integral-package .int-one .int-pay {
	    display: flex;
	    justify-content: center;
	}

	#main .integral-package .int-one .int-pay .int-pay-tit {
	    background-image: linear-gradient(40deg, #73D390 0%, #7FCD6D 100%);
	    box-shadow: 0.09rem 0.07rem 0.11rem -0.01rem rgba(126, 224, 143, 0.3);
	    border-radius: 0.07rem;
	    width: 2rem;
	    height: 0.8rem;
	    color: #fff;
	    font-size: 0.3rem;
	    text-align: center;
	    line-height: 0.8rem;
	    margin-top: 0.14rem;
	}`;

let html = `
	<header id="header">
        <div class="integral">
            <div class="int-big">
                <div class="int-medium">
                    <div class="int-small">
                        <div class="int-all">
                            <img class="int-icon" src="${require('../assets/img/icon/xhdpi/积分icon.png')}" alt="">
                            <span class="int-integral" id="int-integral">10000</span>
                        </div>
                        <p class="int-title">Credits balance</p>
                    </div>
                </div>
            </div>
            <div class="buy-history">
                <a href="#PurchaseRecords"><img id="history-icon" class="history-icon" src="${require('../assets/img/icon/xhdpi/购买记录.png')}" alt=""></a>
            </div>
        </div>
    </header>
    <main id="main">
        <ul class="integral-package">
            <li class="int-one">
                <div class="int-num">
                    <div class="ali-cen">
                        <img class="int-num-icon" src="${require('../assets/img/icon/xhdpi/积分icon.png')}" alt="">
                        <span class="int-num-all" id="int-num-all">10,000</span>
                        <i class="int-num-unit">credits</i>
                    </div>
                </div>
                <div class="int-price">
                    <span class="int-price-spe">
                        <i class="spe-icon">
                            <img class="spe-icon-img" src="${require('../assets/img/icon/xhdpi/火.png')}" alt="">
                        </i>
                        <span>$0.99</span>
                    </span>
                    <span class="int-price-oripirce">$5.99</span>
                </div>
                <div class="int-pay">
                    <span class="int-pay-tit" id="int-pay-tit">PAY NOW</span>
                </div>
                <img src="${require('../assets/img/icon/xhdpi/bonus.png')}" class="red-mark" alt="">
            </li>
        </ul>
    </main>`;

import '../assets/js/common.js';

function script() {
    var android = android || { getCredit: function() {} };

    window.data = function(num) {
        var numall = document.getElementById("int-integral");
        numall.innerHTML = num;
    }

    android.getCredit();

    async function rundata() {
        try {
            await fetch("/api/buy/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': '8WkjBas6a4Hk'
                }
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then(res => {
                console.log(res);
                document.getElementById('int-pay-tit').onclick = () => {
                    // window.location.href='./html/BuySuccess.html';
                    android.pay(res.data[0].product_id);
                }
            }).catch(e => {
                console.log(e);
            })
        } catch (e) {
            console.log("error:", e);
        }
    }
    rundata();
}
module.exports = {
    css,
    html,
    script
}
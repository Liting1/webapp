let css = `
	body {
	    background: #F8F8F8;
	    font-family: 'Roboto-Bold';
	    font-size: 0.12rem;
	    height: 100%;
	    width: 100%;
	}

	#box {
	    background-color: #fff;
	    position: fixed;
	    bottom: 0;
	    left: 0.3rem;
	    right: 0.3rem;
	    top: 0.3rem;
	    z-index: -1;
	}

	#pur-main {
	    margin: 0.2rem 0.3rem 0 0.3rem;
	    background-color: #fff;
	    border-radius: 0.13rem 0.13rem 0 0;
	    padding: 0 0.15rem;
	}

	#pur-main .pur-main-tit {
	    height: 0.975rem;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    border-bottom: 2px dashed #ececec;
	}

	#pur-main .pur-main-tit .pur-main-icon {
	    width: 0.28rem;
	    height: 0.3rem;
	    margin-right: 0.26rem;
	}

	#pur-main .pur-main-tit .pur-main-title {
	    text-align: center;
	    font-size: 0.3rem;
	    color: #333333;
	    font-weight: 500;
	}

	#pur-main .pur-main-record ul .record-lis {
	    border-bottom: 1px solid #ECECEC;
	}

	#pur-main .pur-main-record ul .record-lis .record-lis-int {
	    height: 0.42rem;
	    display: flex;
	    align-items: center;
	    margin: 0.235rem 0 0.13rem 0;
	}

	#pur-main .pur-main-record ul .record-lis .record-lis-int .record-lis-int-icon {
	    width: 0.37rem;
	    height: 0.37rem;
	    margin: 0 0.2rem 0 0.05rem;
	}

	#pur-main .pur-main-record ul .record-lis .record-lis-int .points-pur {
	    font-size: 0.3rem;
	    flex: 1;
	}

	#pur-main .pur-main-record ul .record-lis .record-lis-int .cost-price {
	    font-size: 0.36rem;
	    color: #73D390;
	    flex: 1;
	    margin-right: 0.05rem;
	    text-align: right;
	    font-weight: 500;
	}

	#pur-main .pur-main-record ul .record-lis .time-judgment {
	    padding: 0 0.05rem 0 0.62rem;
	    display: flex;
	    margin-bottom: 0.125rem;
	}

	#pur-main .pur-main-record ul .record-lis .time-judgment span {
	    flex: 1;
	    font-size: 0.24rem;
	    color: #8b8b8b;
	}

	#pur-main .pur-main-record ul .record-lis .time-judgment .judgment {
	    text-align: right;
	}`;

let html = `
	<div id="pur-main">
        <div class="pur-main-tit">
            <img class="pur-main-icon" src="${require('../assets/img/icon/xhdpi/购买记录-黑.png')}" alt="">
            <h1 class="pur-main-title">Purchase History</h1>
        </div>
        <div class="pur-main-record">
            <ul>
                <li class="record-lis">
                    <div class="record-lis-int">
                        <img class="record-lis-int-icon" src="${require('../assets/img/icon/xhdpi/积分icon.png')}" alt="">
                        <span class="points-pur">10000 credits</span>
                        <b class="cost-price">$0.99</b>
                    </div>
                    <div class="time-judgment">
                        <span class="time">2019-03-02 5:30</span>
                        <span class="judgment">Failed purchase</span>
                    </div>
                </li>
            </ul>
        </div>
        <div id="box"></div>
    </div>`;
function script(){}

module.exports = {
	css, html, script
}
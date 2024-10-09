document.querySelectorAll('.hd-obj button').forEach((btn) => {

    btn.addEventListener("click", () => {
        document.querySelector('.hd-obj .active').classList.remove('active')
        btn.classList.add('active');
        document.querySelector(".hd-one img").src = btn.dataset.src;
    })
})

const shoping = [
    { name: "社群軟體詐騙", price: 250, amount: 0, img: "./images/test_img55.jpg" },
    { name: "金融資訊詐騙", price: 250, amount: 0, img: "./images/test_img56.jpg" },
    { name: "了解詐騙手法", price: 250, amount: 0, img: "./images/test_img54.jpg" },
]
const shop = document.querySelector('.shop-obj');
shop.innerHTML = shoping.map((item, a) => `
<div class="shop-objs">
    <div class="shops" ><img src="${item.img}" alt="/"></div>
    <div class="shop-text fw-bold">
        <p class="shop-name fs-4">${item.name}</p>
        <p class="shop-math">${item.price}元</p>
    </div>
    <div class="shop-button">
        <button class="shop-bts" onclick="updata(${a}, -1)">-</button>
        <input class="shop-input afew" type="text" value="0" readonly>
        <button class="shop-bts" onclick="updata(${a}, 1)">+</button>
    </div>
</div>
`).join('');

const amountall = document.querySelectorAll('.afew');
const shopend = document.querySelector('.shopend');

function updata(index, change) {
    shoping[index].amount = Math.max(0, shoping[index].amount + change);
    amountall[index].value = shoping[index].amount;
    rendershopend();
}

function getToprice() {
    return shoping.reduce((total, item) => total + item.price * item.amount, 0);
}


function rendershopend() {
    shopend.innerHTML = `<div class="total">總計NT${getToprice()}元</div>`;
}

rendershopend();

function shop_submit(){
    shoping.map((item)=>item.amount = 0)
    document.querySelectorAll('.shop-input').forEach((item)=>{
        item.value = 0
    })
    shopend.innerHTML = `<div class="total">總計NT0元</div>`;
}
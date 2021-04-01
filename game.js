//Currency - Can of beans
var beans = 0;
var completeTotalBeans = 0;

//Auto Beans
var autoBeans = 0;

//First Upgrade - Lima Beans
var limaBeans = 0;
var limaBeanUpgradePrice = 250;

//Second Upgrade - Pinto Beans
var pintoBeans = 0;
var pintoBeanUpgradePrice = 400;

//Third Upgrade - Kidney Beans
var kidneyBeans = 0;
var kidneyBeanUpgradePrice = 1000;

//Fourth Upgrade - Coffee Beans
var coffeeBeans = 0;
var coffeeBeanUpgradePrice = 2500;

//Timer
var counterUpdate = setInterval(update,1000);
var constantUpdate = setInterval(update2,0)

document.getElementById("number").onclick = function() {myFunction()};

function addBean() {
    beans++
    completeTotalBeans++;
    document.getElementById("totalBeans").innerHTML = "Beans: " + beans;
}

function addLimaUpgrade() {
    if (beans >= limaBeanUpgradePrice){
        beans -= limaBeanUpgradePrice;
        limaBeanUpgradePrice = Math.round(limaBeanUpgradePrice *= 1.1);
        limaBeans++;
        autoBeans++;
        document.getElementById("limaBeanUpgrades").innerHTML = "Lima Beans: " + limaBeans;
    }
}

function addPintoUpgrade() {
    if (beans >= pintoBeanUpgradePrice){
        beans -= pintoBeanUpgradePrice;
        pintoBeanUpgradePrice = Math.round(pintoBeanUpgradePrice *= 1.35);
        //Math.round(pintoBeanUpgradePrice);
        pintoBeans++;
        autoBeans += 5;
        document.getElementById("pintoBeanUpgrades").innerHTML = "Pinto Beans: " + pintoBeans;
    }
}

function addKidneyUpgrade() {
    if (beans >= kidneyBeanUpgradePrice){
        beans -= kidneyBeanUpgradePrice;
        kidneyBeanUpgradePrice = Math.round(kidneyBeanUpgradePrice *= 1.5);
        //Math.round(pintoBeanUpgradePrice);
        kidneyBeans++;
        autoBeans += 10;
        document.getElementById("kidneyBeanUpgrades").innerHTML = "Kidney Beans: " + kidneyBeans;
    }
}

function addCoffeeUpgrade() {
    if (beans >= coffeeBeanUpgradePrice){
        beans -= coffeeBeanUpgradePrice;
        coffeeBeanUpgradePrice = Math.round(coffeeBeanUpgradePrice *= 2);
        //Math.round(pintoBeanUpgradePrice);
        coffeeBeans++;
        autoBeans += 25;
        document.getElementById("coffeeBeanUpgrades").innerHTML = "Coffee Beans: " + coffeeBeans;
    }
}

function update() {
    beans += autoBeans;
    completeTotalBeans += autoBeans;
}

function update2() {
    document.getElementById("totalBeans").innerHTML = "Beans: " + beans;
    document.getElementById("title").innerHTML = "Beans: " + beans;
    
    document.getElementById("limaBeanUpgrades").innerHTML = "Lima Beans: " + limaBeans;
    document.getElementById("limaBeanUpgradePriceID").innerHTML = "Lima Bean Upgrade Price: " + limaBeanUpgradePrice;

    document.getElementById("pintoBeanUpgrades").innerHTML = "Pinto Beans: " + pintoBeans;
    document.getElementById("pintoBeanUpgradePriceID").innerHTML = "Pinto Bean Upgrade Price: " + pintoBeanUpgradePrice;

    document.getElementById("kidneyBeanUpgrades").innerHTML = "Kidney Beans: " + kidneyBeans;
    document.getElementById("kidneyBeanUpgradePriceID").innerHTML = "Kidney Bean Upgrade Price: " + kidneyBeanUpgradePrice;

    document.getElementById("coffeeBeanUpgrades").innerHTML = "Coffee Beans: " + coffeeBeans;
    document.getElementById("coffeeBeanUpgradePriceID").innerHTML = "Coffee Bean Upgrade Price: " + coffeeBeanUpgradePrice;


    if (completeTotalBeans >= 10000){
        var screenHeight = screen.height;
        var screenWidth = screen.width;
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        //Randomly find a position in width from 0 to window.innerwidth
        //create the image there + 0 window heigh
        //have it fall 1 pixel every 1000/60 1*(1000/60) 1 px every second
        //when it hits the bottom (window.innerHeight) have it delete the image or repurpose it back to the top
    }
}
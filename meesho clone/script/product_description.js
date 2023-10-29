data = localStorage.getItem("product_detail")
data = JSON.parse(data);

function appenddata(data) {
    console.log("yes")
    var data_image = document.createElement("img")
    data_image.setAttribute("id", "image")
    data_image.src = data.image
    document.getElementById("left_image_div").append(data_image)

    var description_image = document.createElement("img")
    description_image.src = data.image;
    document.getElementById("main_image").append(description_image)

    var add_to_cart = document.getElementById("add_to_cart")
    add_to_cart.addEventListener("click", function () {
        addtocart(data);
    });

    //-------------------------------------------------------------------------------------------------------------------

    var product_title = document.createElement("p")
    product_title.setAttribute("id", "product_title")
    product_title.innerText = data.title;

    //creating a div to store product price-------------------------------------------

    var product_price_div = document.createElement("div")
    product_price_div.setAttribute("id", "product_price_div")

    var product_price = document.createElement("p");
    product_price.setAttribute("id", "product_price")
    product_price.innerText = `₹${data.price}`;

    var mrp = document.createElement("p")
    mrp.setAttribute("id", "mrp");
    mrp.innerText = `₹${data.mrp}`;

    var per_discount = document.createElement("p")
    per_discount.setAttribute("id", "per_discount")
    per_discount.innerText = `${Math.round(Math.random() * (50 - 20) + 20)}% off`;

    product_price_div.append(product_price, mrp, per_discount)

    //creating a div to store extra discount------------------------------------------------------------------------

    var ext_discount = document.createElement("div")
    ext_discount.setAttribute("id", "ext_discount")

    var discount_img = document.createElement("img")
    discount_img.setAttribute("id", "discount_img")
    discount_img.src = "https://i.postimg.cc/Kzk9hV5x/discount-3.png"

    var text = document.createElement("p")
    text.setAttribute("id", "text")
    text.innerText = `₹100 discount on 1st order`

    ext_discount.append(discount_img, text)


    //creating a div to store the free delivery--------------------------------------------------------------------

    var delivery = document.createElement("div")
    delivery.setAttribute("id", "delivery")

    var product_delivery = document.createElement("p")
    product_delivery.setAttribute("id", "product_delivery")
    product_delivery.innerText = "Free Delivery"

    delivery.append(product_delivery);

    //creating a div to store the product rating and product review-----------------------------------------------------

    var product_rating_div = document.createElement("div");
    product_rating_div.setAttribute("id", "product_rating_div")


    product_rating_container = document.createElement("div")
    product_rating_container.setAttribute("id", "product_rating_container")


    var product_rating = document.createElement("p")
    product_rating.setAttribute("id", "product_rating")
    product_rating.innerText = `${data.rating}⋆`;

    product_rating_container.append(product_rating);

    var product_review = document.createElement("p");
    product_review.setAttribute("id", "product_review")
    product_review.innerText = `${data.review} Reviews`

    product_rating_div.append(product_rating_container, product_review)

    document.getElementById("right_div").append(product_title, product_price_div, ext_discount, delivery, product_rating_div)

}

appenddata(data);
var data_arr = JSON.parse(localStorage.getItem("product_data")) || [];
function addtocart(data) {
    data_arr.push(data);
    product_data = JSON.stringify(data_arr);
    localStorage.setItem("product_data", product_data);
    alert("Added Item to Basket");
}
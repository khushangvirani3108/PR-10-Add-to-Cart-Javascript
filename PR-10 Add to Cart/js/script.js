let data = [
    {
        
        productid : 6269,
        qty : 1,
        category: "Plain T-shirt",
        rating : "3.8",
        image: "https://muselot.in/cdn/shop/products/muselot_s-plaint-shirtformeninblackcolor.jpg?v=1658089866&width=1445",
        price :"4999",
        company: "Louis Vuitton",
    },
    {
        productid : 9236,
        qty : 1,
        category: "Designed Shirt",
        rating : "4.5",
        image: "https://images.meesho.com/images/products/336129967/rno9f_512.webp",
        price :  799,
        company: "Zudio",
    },
    {
        productid : 5335,
        qty : 1,
        category: "T-shirt Printed",
        rating : "5.0",
        image: "https://images.meesho.com/images/products/411476988/tfx7r_512.webp",
        price :  3499,
        company: "U.S. Polo Assassian",
    },
    {
        productid : 8420,
        qty : 1,
        category: "Party Wear | Shoes",
        rating : "3.0",
        image: "https://images.meesho.com/images/products/383886253/zefm7_512.webp",
        price : 5999,
        company: "Adidas",
    },
    {
        productid : 9072,
        qty : 1,
        category: "Popcorn shirt",
        rating : "3.8",
        image: "https://images.meesho.com/images/products/354304129/ur55w_512.webp",
        price :599,
        company: "Westside",
    },
    {
        productid : 9409,
        qty : 1,
        category: "Cargo | Men",
        rating : "4.7",
        image: "https://images.meesho.com/images/products/408874778/rfaqv_512.webp",
        price : 999,
        company: "Style Up",
    },
    {
        productid : 4858,
        qty : 1,
        category: "Cargo | Women",
        rating : "4.5",
        image: "https://images.meesho.com/images/products/395559379/bmjje_512.webp",
        price :899,
        company: "Zudio",
    },
    {
        productid : 4355,
        qty : 1,
        category: "Wrist watch | Men",
        rating : "3.2",
        image: "https://images.meesho.com/images/products/4256036/1_512.webp",
        price :  9999,
        company: "Rolex",
    },
    {
        productid : 869,
        qty : 1,
        category: "T-Shirt",
        rating : "4.4",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4037d432-9634-47f5-ac97-879bf387001d/sportswear-max90-t-shirt-pm3q3M.png",
        price :  2999,
        company: "Nike",
    },
    {
        productid : 4204,
        qty : 1,
        category: " Women's Zoom Vomero 5 Premium",
        rating : "5.0",
        image: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/f6a522fc-2a2c-484e-ae52-1a26bfe732cf/women-s-zoom-vomero-5-premium-designed-by-japan-hf4524-111-release-date.jpg",
        price :  14999 ,
        company: "Nike",
    },
    {
        productid : 6208,
        qty : 1,
        category: "Air Jordan 1 Low",
        rating : "4.9",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-6Q1tFM.png",
        price : 9499,
        company: "Nike",
    },
    {
        productid : 4653,
        qty : 1,
        category: "Air Jordan 1 Low SE",
        rating : "4.7",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5e572279-d759-4ee8-ae8f-2b58579e6348/air-jordan-1-low-se-shoes-qT62xW.png",
        price : 12999,
        company: "Nike",
    },
    {
        productid : 4657,
        qty : 1,
        category: "Printed Shirt",
        rating : "5.0",
        image: "https://images.meesho.com/images/products/336129968/via2b_512.webp",
        price :  4500,
        company: "louis vuitton",
    },
    {
        productid : 6525,
        qty : 1,
        category: "SweatShirt",
        rating : "4.0",
        image: "https://overlays.co/cdn/shop/files/1_3cbdee39-0021-443f-bbd1-64ea279bb79b.jpg?v=1703231031&width=700",
        price : 1999,
        company: "OverLays",
    },
    {
        productid : 8494,
        qty : 1,
        category: "Hoodies",
        rating : "Black",
        image: "https://overlays.co/cdn/shop/files/WhatsAppImage2024-01-13at19.21.54.jpg?v=1705150928&width=700",
        price : 1499,
        company: "OverLays",
    },
    

];
    localStorage.setItem("product",JSON.stringify(data));
setData();
function setData(){
    let tbl = "";

    data.map((val) => {
        tbl += `
                    
        
        <div class="card mx-3 mb-5">
        <img src="${val.image}" height="400px">
        <div class="card-body">
        <h5 class="card-title">${val.category}</h5>
        <p class="card-text"><b>Company : </b>${val.company}</p>
        <p class="card-text"><b>rating : </b>${val.rating}⭐</p>
        <p class="card-text fs-4"><b> ₹ ${val.price}</b></p>
        
        
<button class="btn btn-success" onclick="order(${val.productid})">Add to Cart</button>
        </div>
        </div>
              
                
                    
                `
        document.getElementById('items').innerHTML = tbl;
    });
}

function order(pid){
    let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    let product = data.find((item) => item.productid === pid);

    if(product){
        cartItem.push({...product});
        localStorage.setItem("cart",JSON.stringify(cartItem));
        alert('Product added to the cart');
    }else{
        alert('product not found ?')
    }
   
}
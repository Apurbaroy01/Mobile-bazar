const addproduct=()=>{
    // input 1----------
    const productField=document.getElementById('product');
    const product=productField.value;
    productField.value='';

    // input 1----------
    const productquntity=document.getElementById('product-Quntity');
    const quantity=productquntity.value;
    productquntity.value='';

    displayProduct(product,quantity);
    seveProductToLocalStroge(product,quantity)
    

};
// Display item----------
const displayProduct=(product,quantity)=>{
    const ul=document.getElementById('product-Container');
    ul.classList=`overflow-x-auto`;



    const div=document.createElement('div');
    
    div.innerHTML=`

      <div class="grid grid-cols-4 sm:grid-cols-4 gap-4 py-4 rounded-lg shadow bg-base-200 border-1 mt-1">
        <!-- Card 1 -->
        <div class=" p-1 ">
          
          <p>${product}</p>
        </div>

        <!-- Card 2 -->
        <div class=" p-1 ">
          
          <p>${quantity}</p>
        </div>

        <!-- Card 3 -->
        <div class=" p-1 ">
          
          <p>25-May-25</p>
        </div>

        <!-- Card 4 -->
        <div class=" p-1 ">
          
          <p>
            <span class="badge ">Delivered✅</span>
          </p>
        </div>
      </div>

    `;
    ul.appendChild(div);
};

const getStoredShopingCart=()=>{
    let cart={};
    const storeCart=localStorage.getItem('cart');
    if(storeCart){
        cart=JSON.parse(storeCart);
    }
    return cart;
}
// local data input
const seveProductToLocalStroge=(product,quantity)=>{
    const cart=getStoredShopingCart();
    cart[product]=quantity;

    const cartStringDefine=JSON.stringify(cart);
    console.log(cartStringDefine);
    localStorage.setItem('cart',cartStringDefine);

};
// local storage to display
const displayProductFromLocalStroge=()=>{
    const savedCart=getStoredShopingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity=savedCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStroge();
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
        <table class="table w-full">
              
              <thead>
                <tr class="bg-base-200">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="grid grid-flow-col grid-cols-3 gap-4">
                
                <tr>
                  
                  <td>${product}</td>
                  
                  
                </tr>
                <tr>
                  
                  
                  <td>${quantity}</td>
                  
                </tr>
                <tr>
                  
                  
        
                  <td>May / 22 /2025</td>
                </tr>
                <tr>
                  
                  
        
                  <td>
                  <ul>
                      <a class="justify-between">
                        
                        <span class="badge">Delivered✅</span>
                      </a>
                    <ul>
                  </td>
                </tr>
            
              </tbody>
            </table>
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
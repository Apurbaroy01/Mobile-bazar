const loadPhone = async(searchtext, isShowAll,)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`)
        const data=await res.json();
        const phones=data.data;
        // console.log(phones);
        displayphones(phones,isShowAll);
}

const displayphones = (phones, isShowAll) => {
    // console.log(phones);

    const phoneContainer=document.getElementById('phone-container');
    // clear phone 
    phoneContainer.textContent='';

    const showAll= document.getElementById('show');
    
    if(phones.length > 12 && !isShowAll){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden')
    }
    console.log('isShowAll', isShowAll)
    
    if(!isShowAll){
        phones= phones.slice(0,12);
    }

    phones.forEach(phone => {
        // console.log(phone);

        
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 w-96 shadow-sm text-center`;
        phoneCard.innerHTML = `
            <figure>
                      <img
                        src="${phone.image}"
                        alt="phone" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                      <div class="card-actions justify-end">
                        <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Details</button>
                      </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneCard);

    });
    // toggle loding
    toggleloadingSpinner(false)

}

const handleSearch=(isShowAll)=>{
    const searchFeild=document.getElementById('search-filed');
    const searchtext= searchFeild.value;
    console.log(searchtext);
    loadPhone(searchtext,isShowAll);
    toggleloadingSpinner(true);
}
const toggleloadingSpinner=(isloading)=>{
    const loadingSpinner=document.getElementById('loading-spinner');
    if(isloading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}
// handle show all

const handleShowAll=()=>{
    handleSearch(true);
}

const handleShowDetails=async(id)=>{
    console.log("im clicked",id);
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await res.json();
    const phone=data.data
    showDetails(phone);
    
}
const showDetails=(phone)=>{
    console.log(phone);
    const phoneName=document.getElementById('show-details-phone-name');
    phoneName.innerText=phone.name;

    const showdetailsontainer=document.getElementById('show-details-container');
    showdetailsontainer.classList=``
    showdetailsontainer.innerHTML=`
        <div id="mainPage">
        
            <img src="${phone.image}"/>
            <p><span class="font-bold">ID: </span> ${phone.slug}</p>
            <p><span class="font-bold">ReleaseDate: </span> ${phone.releaseDate}</p>
            <p><span class="font-bold">Storoge: </span> ${phone.mainFeatures.storage}</p>
            <p><span class="font-bold">displaySize: </span> ${phone.mainFeatures.displaySize}</p>
            <p><span class="font-bold">chipSet: </span> ${phone.mainFeatures.chipSet}</p>
            <p><span class="font-bold">sensors: </span> ${phone.mainFeatures.sensors}</p>
            <p><span class="font-bold">Bluetooth: </span> ${phone?.Bluetooth}</p>
            <p><span class="font-bold">others: </span> ${phone?.others}</p>
            
            <div class="flex" id="space">
                <div class="w-10 h-10  flex gap-5 mt-7 " >
                    <img src="/photo/phone-call-removebg-preview.png"  />

                    <div class="  text-red-500 font-bold">
                        <h4>01876469178</h4>
                    </div>
                </div>
                
            </div>
            <div>
                <input id="product" type="text" placeholder="Type Your-name" class="input input-ghost" />
                <input id="product-Quntity" type="text" placeholder="phone-number" class="input input-ghost" />
                <input type="text" placeholder="Address" class="input input-ghost" />
                
            </div>
            <div class="mt-5 text-center">
                 <button onclick="addproduct(),addproducts()" class="btn btn-dash btn-secondary">Buy now</button>
            </div>

        </div>

        

        <div>
           

        <!-- ✅ Sold Confirmation Content (Hidden Initially) -->
        <div id="confirmationPage" class="hidden bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            </div>

            <h2 class="text-2xl font-bold mb-2">Confirmed!</h2>
            <p class="text-gray-600 mb-4">You have successfully sold the item. Details below:</p>

            <div class="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <p><span class="font-bold">Item: ${phone.name}</span> Mobile-Phone</p>
            <p><span class="font-semibold">Buyer:</span> Apurba-roy</p>
            <p><span class="font-semibold">Sold On:</span> May 22, 2025</p>
            <p><span class="font-semibold">Price:</span> $450,000</p>
        </div>

            <button 
                onclick="goBack()" 
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                Back to Home
            </button>
        </div>
    </div>
        
    `;


    show_Details_modal.showModal()
    
}
 

loadPhone();
const loadPhone = async (searchText, isShowAll ) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}
const displayPhones = (phones, isShowAll) => {
    console.log(phones)
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    console.log(phones.length)
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }
    phones.forEach(phone => {
        // console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
        phoneCard.innerHTML =`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
           <h2 class="card-title">${phone.phone_name}</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions justify-end">
             <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Buy Now</button>
           </div>
        </div>`
        phoneContainer.appendChild(phoneCard)
    })
    toggleLoadingSpinner(false)
}
const handleShowDetail = async (id) => {
    console.log('clicked show details',id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone)
}
const showPhoneDetails = (phone) => {
    console.log(phone)
    const showDetailContainer = document.getElementById('show-details-container')
    showDetailContainer.innerHTML =`
               <img class='m-auto' src="${phone.image}" alt=""><br>
               <h2><strong class='text-xl'>${phone.name}</strong></h2><br>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><br>
               <p><strong>storage : </strong>${phone.mainFeatures.storage}</p> <br>
               <p><strong>Display Size : </strong>${phone.mainFeatures.displaySize}</p> <br>
               <p><strong>ChipSet : </strong>${phone.mainFeatures.chipSet}</p> <br>
               <p><strong>Memory : </strong>${phone.mainFeatures.memory}</p> <br>
               <p><strong>Slug : </strong>${phone.slug}</p> <br>
               <p><strong>Release date : </strong>${phone?.ReleaseDate || 'No Release date available'}</p> <br>
               <p><strong>Brand : </strong>${phone.brand}</p> <br>
               <p><strong>GPS : </strong>${phone?.others?.GPS || 'No GPS available'}</p> 
               `
    show_details_modal.showModal();
}
const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    console.log(searchText)
    loadPhone(searchText, isShowAll)
}
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}
const handleShowAll = () => {
    handleSearch(true);
}
// loadPhone()
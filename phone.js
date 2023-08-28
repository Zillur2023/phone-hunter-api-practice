const loadPhone = async (searchText) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText.replace(" ", "%20")}`
    const res = await fetch(URL);
    console.log(`https://openapi.programming-hero.com/api/phones?search=${searchText.replace(" ", "%20")}`)
    console.log(searchText.replace(" ", "%20"))
    const data = await res.json();
    console.log(data)
    const phones = data.data;
    // console.log(phones);
    // displayPhones(phones, isShowAll);
    displayPhones(phones)
}
const displayPhones = phones => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    const showAllContainer = document.getElementById('phone-container')
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    phones = phones.slice(0,12)
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
             <button class="btn btn-primary">Buy Now</button>
           </div>
        </div>`
        phoneContainer.appendChild(phoneCard)
    })
    toggleLoadingSpinner(false)
}
const handleSearch = () =>{
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    console.log(searchText)
    loadPhone(searchText)
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
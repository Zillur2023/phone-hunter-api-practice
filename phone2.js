const loadPhone2 = async () => {
    const res2 = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data2 = await res2.json();
    const phones2 = data2.data;
    console.log(phones2);
    // displayPhones(phones, isShowAll);
    // displayPhones(phones)
}
loadPhone2()
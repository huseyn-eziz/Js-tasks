let musteriler = [
    { id: 1, ad: 'Memmed', email: 'memmed@example.com' },
    { id: 2, ad: 'Eli', email: 'eli@example.com' },
    { id: 3, ad: 'Nermin', email: 'nermin@example.com' }
  ];
  
  let id = 2
  let yeniad ='Ali'
  let yeniemail = 'ali@example.com'
  
  let iditap = musteriler.find((idi) => idi.id === id)
  
  if(iditap){
    musteriler.ad = yeniad
    musteriler.email = yeniemail
    console.log(`${id} nomreli musterinin adi ${yeniad} ve emaili ${yeniemail} olaraq deyistirildi `);
  } else{
    console.log(` bele mail yoxdur`);
  }
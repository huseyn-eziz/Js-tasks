let musteriler = [
    [ 1 ,'Memmed','memmed@example.com' ],
    [ 2 ,'Eli','eli@example.com' ],
    [ 3 ,'Nermin','nermin@example.com' ]
  ];
  
  let id = 2
  let yeniad ='Ali'
  let yeniemail = 'ali@example.com'
  let iditap = musteriler.find((idi) => idi[0] === id)
  
  
  if(iditap){
    musteriler.ad = yeniad
    musteriler.email = yeniemail
    console.log(`${id} nomreli musterinin adi ${yeniad} ve emaili ${yeniemail} olaraq deyistirildi `);
  } else{
    console.log(` bele mail yoxdur`);
  }
  
  
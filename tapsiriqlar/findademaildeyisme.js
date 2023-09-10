let musteriler = [
    [ 1 ,'Memmed','memmed@example.com' ],
    [ 2 ,'Eli','eli@example.com' ],
    [ 3 ,'Nermin','nermin@example.com' ]
  ];
  
 let ad = 'ali'
 let email = "ali@gmail.com"

 let id = musteriler.find((idi) => idi[0] ==2)
 if (id) {
    id[1]= ad
    id[2] = email  
    console.log(`${id[0]} nomreli musterinin adi ${ad} ve emaili ${email} olaraq deyistirildi `);
    console.log(musteriler[1]);
} else{
  console.log(` bele mail yoxdur`);
}
 
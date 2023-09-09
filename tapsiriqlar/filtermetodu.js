const kullanicilar = [
    { ad: 'Alice', yas: 30 },
    { ad: 'Bob', yas: 25 },
    { ad: 'Charlie', yas: 35 },
    { ad: 'David', yas: 20 },
    { ad: 'Eve', yas: 40 }
  ];

  let lazimolan = kullanicilar.filter((yaslari) => yaslari.yas >= 30)

  console.log(lazimolan);
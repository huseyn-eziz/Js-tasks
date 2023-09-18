// A: cool 😎
const istifadeciler = [
    { ad: 'Alice', yaş: 30 },
    { ad: 'Bob', yaş: 25 },
    { ad: 'Charlie', yaş: 35 },
    { ad: 'David', yaş: 20 },
    { ad: 'Eve', yaş: 40 }
  ];
  
  const hedefAd = 'Charlie';

  const lazimolanad = istifadeciler.find((ad) => ad.ad == hedefAd)


  console.log(lazimolanad);

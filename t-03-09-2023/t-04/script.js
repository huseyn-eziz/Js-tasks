// 4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

function yoxlama(mail) {
    return (mail.endsWith("@gmail.com") && mail.length > 14) ? console.log("Email duzdur") : console.log("Email sehvdir");

}

const gmail = prompt('gmail daxil et')

yoxlama(gmail)

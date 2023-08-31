// Buat array dengan jumlah index 100

let arrayRandom = [];
for(let i = 0 ; i < 100 ; i++){
    arrayRandom.push(Math.floor(Math.random()*51))
}
console.log(arrayRandom)

//pecah array genap dan ganjil
const indexGenap = []
const indexGanjil = []

//untuk looping index keberapa
for (let x in arrayRandom){
    //untuk genap
    if(x % 2 === 0 ){
        //dimasukkan ke array indexGenap
        indexGenap.push(
            //untuk mengakses value
            arrayRandom[x])
    }else {
        //masuk ke array indexGanjil
        indexGanjil.push(arrayRandom[x])
    }
}

console.log(indexGenap.sort())
console.log(indexGanjil.sort())

//find min 

function findMin(arr){
    let min = arr[0]
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}


//find max 
function findMax(arr){
    let max = arr[0]
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

// find total 
function findTotal(arr){
    let total = 0
    for(let i = 0 ; i < arr.length ; i++){
        total += arr[i]
    }
    return total
}

// find avg
function avg(arr){
    let avg = findTotal(arr)/arr.length
    return avg
}

//perbandingan


function perbandingan(ganjil, genap){

    const arrayGanjil =[]
    const arrayGenap =[]

    arrayGanjil.push(findMin(ganjil))
    arrayGanjil.push(findMax(ganjil))
    arrayGanjil.push(findTotal(ganjil))
    arrayGanjil.push(avg(ganjil))

    arrayGenap.push(findMin(genap))
    arrayGenap.push(findMax(genap))
    arrayGenap.push(findTotal(genap))
    arrayGenap.push(avg(genap))
    
    let string
    let arrayString = []
    for (let x in arrayGanjil){
        let y
        for(y in arrayGenap){
            y=arrayGenap[x]
        }

        if (arrayGanjil[x] === y){
            string = "sama dengan"
        }
        if (arrayGanjil[x] > y){
            string ="lebih besar daripada"
        }
        if (arrayGanjil[x] < y){
            string ="lebih kecil daripada"
        }
        arrayString.push(string)
    }
    let keterangan = ['Minimum', 'Maximum', 'Total', 'Rata - rata' ]
    for(let i = 0 ; i < 4 ; i++){        
        console.log("Nilai " + keterangan[i] + " ganjil " + arrayString[i] + " genap") 
    }

}

console.log('Nilai Minimum index ganjil adalah: ' + findMin(indexGanjil))
console.log('Nilai Maximum index ganjil adalah: ' + findMax(indexGanjil))
console.log('Nilai Minimum index genap adalah: ' + findMin(indexGenap))
console.log('Nilai Maximum index genap adalah: ' + findMax(indexGenap))
console.log('Nilai Total untuk index ganjil adalah: '+ findTotal(indexGanjil))
console.log('Nilai Total untuk index genap adalah: ' + findTotal(indexGenap))
console.log('Nilai rata - rata untuk index ganjil adalah: '+ avg(indexGanjil))
console.log('Nilai rata - rata untuk index genap adalah: '+avg(indexGenap))
perbandingan(indexGanjil, indexGenap)

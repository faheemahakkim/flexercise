function makeToast(bread,amount)
{
    if(amount === 1){
  return `${amount} slice of ${bread}`
    }
    else {

         return `${amount} slices of ${bread}`

    }
 
}

function topToast(toast,topping){
return `${toast} topped with ${topping}`
}

const toast1 = makeToast('Tiger bread', 3)
const toast2 = makeToast('Seeded bloomer', 1)

const topWithNutella = topToast(toast1,'Nutella')

const topWithBeans = topToast(toast2,'beans')


console.log(toast1, toast2)
console.log(topWithNutella,topWithBeans)



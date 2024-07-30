// Callback example 
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

// Function
let order = (fruit_name, call_production) => {
    setTimeout( ()=> {
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
    
        call_production();
    }, 2000)
};

production =  ()=> {
    setTimeout(() => {
        console.log('Production has started')

        setTimeout(() => {
            console.log('Fruits have been chopped')

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
                
                setTimeout(() => {
                    console.log('The machine was started')

                    setTimeout(() => {
                        console.log(`The type of holder used was ${stocks.holder[0]}`)

                        setTimeout(() => {
                            console.log(`The type of topping used was ${stocks.toppings[1]}`)

                            setTimeout(() => {
                                console.log('Ice cream served')
                            }, 1000);
                        }, 3000);
                    }, 2000);
                }, 2000);
            }, 5000);
        }, 1000);
    }, 1000);
     
};


// Trigger 👇
order(0,production);
// we can either write the function directy in the paranthesis of the functions called or we can assign a
// variable to the function 

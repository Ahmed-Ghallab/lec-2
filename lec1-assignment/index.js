let invoiceAmount = prompt("please enter price of your invoice ");
let discount = prompt("please enter discount  of your invoice ");

let discountvalue = discount * invoiceAmount /100 ;
document.write( " your discount value is :" + discountvalue);

let amountAfterDiscount = invoiceAmount - discountvalue;

let taxes = amountAfterDiscount * 14/100;
document.write("Your invoice taxes 14% is : " + taxes);

let finalPrice = amountAfterDiscount + taxes;
document.write(" the final invoice " + finalPrice + "LE");

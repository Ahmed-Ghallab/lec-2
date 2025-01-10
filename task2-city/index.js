
let city = prompt("enter your city");

switch (city){
    case "alex":
        document.write("لا يوجد خصم لسكان الاسكندريه ");
        break;

    case "cairo":
        document.write(" يوجد خصم 10 % لسكان القاهره ");
        break;

    case "aswan":
        document.write(" يوجد خصم 30 % لسكان اسوان ");
        break;
    default:
        document.write(" يوجد خصم 20 % لكم ");
}
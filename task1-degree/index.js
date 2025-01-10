let studentDgree = prompt("ادخل مجموعك لمعرفه التقييم  ");
if( studentDgree >= 0 ){
    if(studentDgree >= 50 ){
        if(studentDgree >= 65){
            if(studentDgree >= 75){
                if(studentDgree >= 85){
                    if(studentDgree > 100){
                        document.write(" your degree not correct");    
                        window.alert(` " wrong value " please enter degree from 0 to 100`)    
                    }else{
                        document.write("ممتاز "); 
                    }
                }else{
                    document.write(" جيد جدا"); 
                }
            }else{
                document.write("جيد "); 
            }
        }else{
            document.write("مقبول"); 
        }
    }else{
        document.write(" راسب");            
    }
}
else{
    document.write(" your degree not correct");    
    window.alert(` "wrong value" please enter degree from 0 to 100`)         
}
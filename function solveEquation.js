function solveEquation(a, b, c) {
    if (a==0) return "ошибка";
    let d = b * b - 4 * a *c;
    let x1, x2;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return "Коэффициенты: a = "+ a +" b = "+ b +"c = "+ c + "\n Корни упавнения: x1 = "+ x1 + " x2" + x2 + " Дискриминант = " + d;    
    } else if (d == 0) {
        x1 = -b * 2 * a;
        return "Коэффициенты: a = "+ a +" b = "+ b +"c = "+ c + "\n Корни - x1" +x1+ " Дискриминант = " + d;
    } else if (d < 0) {
        return "Коэффициенты: a = "+ a +" b = "+ b +"c = "+ c + "\n Корни - нет" + " Дискриминант = " + d;
    }

    if (d < 0) {
        let discrim = [];
    } else if (d == 0) 
        discrim.push (x1);
     else 
        let discrim = [];

    discrim.push (x1);
    discrim.push (x2);
    
}


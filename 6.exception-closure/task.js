//Задание 1
function parseCount (parse){
    const parsed = Number.parseInt(parse);
    if(Number.isNaN(parsed)){
        throw new Error("Невалидное значение");
    }
    return parsed
}

function validateCount(parse){
    try{
        return parseCount(parse);
    }catch(error){
        return error
    }
}

//Задание 2 
class Triangle{
    constructor(l,o,x){
        this.l = l;
        this.o = o;
        this.x = x;
        if(l + o < x || l + x < o || o + x < l){
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }

    getPerimeter(){
        return this.l + this.o + this.x
    }

    getArea(){
        const p = 1 / 2 * this.getPerimeter();
        const area = Math.sqrt (p * (p-this.l)*(p-this.o)*(p-this.x) );
        return +area.toFixed(3)
    }
}

function  getTriangle(l,o,x){
    try {
        return new Triangle(l,o,x)
    } catch{
        return{
            getArea(){
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter(){
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}


interface Course {
    name: string
    duration?: number // esse interrogação(antes dos 2 pontos) vai definir que esse atributo e opcional
    educator: string
}

class CreateCourseService{


    execute({ duration, educator, name }: Course) {
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService()
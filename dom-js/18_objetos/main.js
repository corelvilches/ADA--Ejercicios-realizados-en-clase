const obtenerCasa = nombreCasa =>{
    const casa = estudiante => estudiante.casa === nombreCasa;

    const filtroCasa = estudiantes.filter(casa);

    return filtroCasa;
}

console.log(obtenerCasa('Slytherin'));

const obtenerMayores = edad => {
    const mayores = estudiante => estudiante.edad >= edad;

    const filtroEdad = estudiantes.filter(mayores);

    return filtroEdad;
}

console.log(obtenerMayores(20));

// Hacer las siguientes funciones:
// 1. estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y devuelva un array con todxs lxs estudiantes
// que tengan ese hechizo como hechizoPreferido


const estudiantesPorHechizo = hechizo =>{
    const spell = estudiante => estudiante.hechizoPreferido === hechizo;

    const filtroHechizo = estudiantes.filter(spell);

    return filtroHechizo;
}

console.log(estudiantesPorHechizo('Lumos'));


// 2. estudiantesConMasAmigxsQue, que tome por parametro un numero y devuelva un array con todos lxs estudiantes
// que tengan un número de amigxs mayor o igual a el número pasado por parámetro


const estudiantesConMasAmigxsQue = cantidadAmigos => {
    const masAmigxsQue = estudiante => estudiante.amigxs.length >= cantidadAmigos;

    const filtroCantidadAmigos = estudiantes.filter(masAmigxsQue);

    return filtroCantidadAmigos;
}

console.log(estudiantesConMasAmigxsQue(8));


// 3. estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]),
// y devuelva un array con lxs estudiantes cuyo familiar sea alguno de los incluidos en el parámetro


const estudiantesConFamiliares = (...familiares) => {
    const tieneFamiliar = estudiante => familiares.includes(estudiante.familiar)

    const estudiantesConFamiliar = estudiantes.filter (tieneFamiliar);

    return estudiantesConFamiliar;
}

console.log(estudiantesConFamiliares('Sapo', 'Lechuza'));


// 4. obtenerPromedioDeEstudiante, que tome por parámetro unx estudiante (que se saca del array estudiantes) y devuelva el promedio total
// de todas las materias


// const obtenerPromedioDeEstudiante = (estudiante) => {
//     const sumaTotal = (total, materia) => {
//         return total += materia.promedio;
//     }

//     const promedio = estudiante.materias.reduce(sumaTotal, 0);

//     return promedio/estudiante.materias.length;
// }

// console.log(obtenerPromedioDeEstudiante(estudiantes[0]));


// // 5. estudiantesConPromedioMayorA, que tome por parámetro un número y devuelva un array con lxs estudiantes que tengan un promedio total mayor
// a dicho número (usar la función anterior)


const obtenerPromedioDeEstudiante = estudiante => {
    const sumaTotal = (total, materia) => {
        return total += materia.promedio;
    }

    const sumaPromedio = estudiante.materias.reduce(sumaTotal, 0);

    return sumaPromedio/estudiante.materias.length;
}

const estudiantesConPromedioMayorA = promedio => {

    const promedioMayorA = estudiante => obtenerPromedioDeEstudiante(estudiante) > promedio;

    const filtroPromedio = estudiantes.filter(promedioMayorA);

    return filtroPromedio;
}

console.log(estudiantesConPromedioMayorA(7));


// // 6. mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa, y devuelva lxs estudiantes de dicha casa
// cuyo promedio total es mayor a 6

const obtenerEstudiantesCasa = casa => {
    const esDeCasa = estudiante => estudiante.casa === casa;

    return estudiantes.filter(esDeCasa);
}

const mejoresEstudiantesPorCasa = casa => {
    const estudiantesCasa = obtenerEstudiantesCasa(casa);

    const mejorPromedio = estudiante => obtenerPromedioDeEstudiante(estudiante) > 6;

    return estudiantesCasa.filter(mejorPromedio);
}

console.log(mejoresEstudiantesPorCasa('Slytherin'));


// // 7. casaConMejoresEstudiantes, que devuelva el nombre de la casa que tiene más cantidad de estudiantes
// con promedio total mayor a 6 (usar la función anterior)


const casaConMejoresEstudiantes = (...casas) => {

    let mayorCantidadDeEstudiantes = 0;
    let casaConMasEstudiantes = '';

    for (const casa of casas) {
        const estudiantesCasa = mejoresEstudiantesPorCasa(casa).length;

        if (estudiantesCasa > mayorCantidadDeEstudiantes) {
            mayorCantidadDeEstudiantes = estudiantesCasa;
            casaConMasEstudiantes = casa;
        }
    }

    return casaConMasEstudiantes;
}

console.log(casaConMejoresEstudiantes('Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'));


// // 7. estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia,
// y devuelva una array con lxs estudiantes que tienen en dicha materia un promedio superior a 6


const estudiantesPorMateriaAprobada = materia => {
    
}


// // 8. cantidadDeEstudiantesPorCasa, que tomo por parámetro el nombre de una casa, y devuelva un número con cantidad de estudiantes
// que pertenecen a esa casa, incluyendo en la cuenta a todxs lxs amigxs de cada estudiante 


// // 9. estudiantesConAmigxsPorCasa, que tomo por parámetro el nombre de una casa, y devuelva un array con todxs lxs estudiantes
// que tengan al menos unx amigx que pertenezca a dicha casa


// // 10. estudiantesConAmigxsConMismoHechizo, que tome por parámetro el nombre de un hechizo,
// y devuelva un array con lxs estudiantes que tengan al menos unx amigx con su mismo hechizo preferido 
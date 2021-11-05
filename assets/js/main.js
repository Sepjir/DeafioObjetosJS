// Función constructora del consultorio
function Consultorio(nombre, paciente) {
    let _nombre = nombre
    let _paciente = paciente || []

//Getters y Setters nombre del consultorio
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre
        }
    })

    Object.defineProperty(this, "_setNombre", {
        set: function (nuevo_nombre) {
            _nombre = nuevo_nombre
        }
    })

    //Getters y Setters del paciennte en el consultorio
    Object.defineProperty(this, "_getPaciente", {
        get: function () {
            return _paciente
        }
    })

    Object.defineProperty(this, "_setPaciente", {
        set: function (nuevo_paciente) {
            _paciente = nuevo_paciente
        }
    })
}


// Función constructora del Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre
    let _edad = edad
    let _rut = rut
    let _diagnostico = diagnostico

    //Getters y Setters nombre del paciente
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre
        }
    })

    Object.defineProperty(this, "_setNombre", {
        set: function (nuevo_nombre) {
            _nombre = nuevo_nombre
        }
    })

//Getters y Setters edad paciente
    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad
        }
    })

    Object.defineProperty(this, "_setEdad", {
        set: function (nueva_edad) {
            _edad = nueva_edad
        }
    })


// Getters y Setters del rut del paciente
    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut
        }
    })

    Object.defineProperty(this, "_setRut", {
        set: function (nuevo_rut) {
            _rut = nuevo_rut
        }
    })


//Getters y Setters del diagnóstico del paciente
    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico
        }
    })

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (nuevo_diagnostico) {
            _nombre = nuevo_diagnostico
        }
    })
}

// metodos para modificar y mostrar datos de consultorio

//Nombre
Consultorio.prototype.getNombre = function () {
    return this._getNombre
}

Consultorio.prototype.setNombre = function (nuevo_nombre) {
    return this._setNombre = nuevo_nombre
}

//Paciente

Consultorio.prototype.getPaciente = function () {
    return this._getPaciente
}

Consultorio.prototype.setPaciente = function (nuevo_paciente) {
    return this._setPaciente = nuevo_paciente
}

// metodos para modificar y mostrar datos de Paciente

// Nombre
Paciente.prototype.getNombre = function () {
    return this._getNombre
}

Paciente.prototype.setNombre = function (nuevo_nombre) {
    return this._setNombre = nuevo_nombre
}

//Edad

Paciente.prototype.getEdad = function () {
    return this._getEdad
}

Paciente.prototype.setEdad = function (nueva_edad) {
    return this._setEdad = nueva_edad
}

//RUT

Paciente.prototype.getRut = function () {
    return this._getRut
}

Paciente.prototype.setRut = function (nuevo_rut) {
    return this._setRut = nuevo_rut
}

//Diagnostico

Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico
}

Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
    return this._setDiagnostico = nuevo_diagnostico
}

// instanciando pacientes y consultorio

var p1 = new Paciente("Pedro", 30, "17.556.332-2", "Gonorrea")
var p2 = new Paciente("Juan", 27, "19.756.125-2", "Lupus")
var p3 = new Paciente("Diego", 60, "11.866.532-K", "Leucemia")
var p4 = new Paciente("Julia", 33, "19.325.332-8", "Hipotiroidismo")
var p5 = new Paciente("Jose", 52, "13.788.321-5", "COVID-19")
var p6 = new Paciente("Antonio", 40, "17.652.121-2", "Sifilis")
var p7 = new Paciente("Lucia", 22, "20.225.335-6", "Cirrosis")

var consultorio = new Consultorio("Cesfam Conchalevale", [p1,p2,p3,p4,p5,p6,p7])

// función para mostrar los datos de todos los pacientes
Consultorio.prototype.mostrarPacientes = function () {
    this._getPaciente.map(function (paciente) {
        console.log("Nombre: " + paciente._getNombre)
        console.log("Edad: " + paciente._getEdad)
        console.log("RUT: " + paciente._getRut)
        console.log("Diagnóstico: " + paciente._getDiagnostico)
        console.log("----------------------------");
    })
    
}

//Filtrar pacientes por nombre
Consultorio.prototype.filtrarPacientes = function (nombre) {
    this._getPaciente
                     .filter(paciente => paciente._getNombre == nombre)
                     .map(paciente => {
                        console.log("Nombre: " + paciente._getNombre)
                        console.log("Edad: " + paciente._getEdad)
                        console.log("RUT: " + paciente._getRut)
                        console.log("Diagnóstico: " + paciente._getDiagnostico)
                     })
}
    
//Titulo en el DOM
document.getElementById("nombreConsultorio").innerHTML = consultorio._getNombre

alert("Los datos de los pacientes se muestran por consola")


// id's del DOM
var por_consola = document.querySelector("#consolaDatosPacientes")
var limpiar_consola = document.querySelector("#limpiarConsola")
var buscando_paciente = document.querySelector("#buscarPaciente")
var input_nombre = document.querySelector("#nombrePaciente")

//accion click sobre boton "Por Consola" para mostrar informacion por consola
por_consola.addEventListener("click", function (e) {
    e.preventDefault()
    consultorio.mostrarPacientes()
})

//Buscar paciente y por nombre mostrar por consola a través de un filtro
buscando_paciente.addEventListener("click", function (e) {
    e.preventDefault()
    consultorio.filtrarPacientes(input_nombre.value)
})

// limpiar información en consola
limpiar_consola.addEventListener("click", function (e) {
    e.preventDefault()
    console.clear()
})
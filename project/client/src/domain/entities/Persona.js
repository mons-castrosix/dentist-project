export class Persona {
  constructor(data) {
    this.nombres = data.nombres;
    this.apaterno=data.apaterno;
    this.amaterno=data.amaterno;
    this.edad=data.edad;
    this.genero=data.genero;
    this.telefono=data.telefono;
    this.email=data.email;
  }
 
  async crear (data){
    console.log(data)
    const persona={
      nombres:data.nombre,
      apaterno:data.apaterno,
      amaterno:data.amaterno,
      edad:data.edad,
      genero:data.genero,
      email:data.email,
      telefono:data.telefono
    }
    console.log(persona);
    return persona;
    
  }
}
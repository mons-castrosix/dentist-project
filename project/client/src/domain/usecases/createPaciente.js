import { Persona } from 'domain/entities/Persona';
import DatabaseAdapter from 'adapters/DatabaseAdapter';
export const createPaciente = async (data) => {
    try {
        console.log(data);
        const user = new Persona(data);
        console.log(user);
        const savedUser = await DatabaseAdapter.save('http://localhost:3001/add-paciente', user);
        return savedUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const listarPacientes =async() =>{
    try{
        const lista = await DatabaseAdapter.find('http://localhost:3001/pacientes');
        return lista;
    }catch (error){
        throw new Error(error);

    }
}

export const verPaciente =async(id) =>{
    try{
        const lista = await DatabaseAdapter.findOne('http://localhost:3001/view-paciente/'+id);
        return lista;
    }catch (error){
        throw new Error(error);

    }
}

export const editarPaciente =async(id,data) =>{
    try{
        const lista = await DatabaseAdapter.edit('http://localhost:3001/edit-paciente/'+id,data);
        return lista;
    }catch (error){
        throw new Error(error);

    }
}
export const eliminarPaciente =async(id) =>{
    try{
        const respuesta = await DatabaseAdapter.delete('http://localhost:3001/delete-paciente/'+id);
        return respuesta;
    }catch (error){
        throw new Error(error);

    }
}
    

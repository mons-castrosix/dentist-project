import { Persona } from 'domain/entities/Persona';
import DatabaseAdapter from 'adapters/DatabaseAdapter';
export const createPaciente = async (data) => {
    try {
        const user = new Persona(data);
        const savedUser = await DatabaseAdapter.save('http://localhost:3001/add', user);
        return savedUser;
    } catch (error) {
        throw new Error(error);
    }
}
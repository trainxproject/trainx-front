import axios from "axios"

export const getAllClasses = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/activities`);
        console.log(response);
    } catch (error) {
        console.error("Error al realizar la peticion", error)
    }
}
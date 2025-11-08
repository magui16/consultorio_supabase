import axios from 'axios';

// Instancia base para endpoints de catálogos
const catalogosApi = axios.create({
    baseURL: 'http://localhost:8000/api', // Ajusta según tu backend
    headers: { 'Content-Type': 'application/json' },
});

/**
 * Obtiene la lista de tratamientos disponibles
 * @returns {Promise<Array>} Lista de tratamientos
 */
export const getTratamientos = async () => {
    try {
        const res = await catalogosApi.get('/tratamientos/');
        return res.data;
    } catch (error) {
        console.error('Error al obtener tratamientos:', error.response?.data || error);
        throw error;
    }
};

/**
 * Obtiene la lista de piezas dentales
 * @returns {Promise<Array>} Lista de piezas dentales
 */
export const getPiezasDentales = async () => {
    try {
        const res = await catalogosApi.get('/piezas_dentales/');
        return res.data;
    } catch (error) {
        console.error('Error al obtener piezas dentales:', error.response?.data || error);
        throw error;
    }
};

/**
 * Obtiene la lista de caras dentales
 * @returns {Promise<Array>} Lista de caras dentales
 */
export const getCarasDentales = async () => {
    try {
        const res = await catalogosApi.get('/caras_dentales/');
        return res.data;
    } catch (error) {
        console.error('Error al obtener caras dentales:', error.response?.data || error);
        throw error;
    }
};
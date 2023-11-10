import axios from 'axios';

export const fetchFilterData = async () => {
    try {
        const response = await axios.get('src/components/api/filters.json');
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
};
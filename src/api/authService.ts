// src/api/authService.ts
import axios from 'axios';

// Base URL pour les endpoints
const API_URL = 'https://api.wadoria.com/auth';
const API_URL_PROTECTED = 'https://api.wadoria.com/api';

// Créer une instance Axios pour configurer les en-têtes communs
export const apiClient = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json', }
});

// Ajouter un intercepteur pour inclure automatiquement le token JWT
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Fonction pour gérer les erreurs (sans opérateur optionnel)
const handleError = (error: any) => {
    const errorMessage = error.response && error.response.data ? error.response.data : error.message;
    console.error('Erreur API :', errorMessage);
    throw errorMessage;
};

// Service d'inscription
export const register = async (Data:{}) => {
    try {
        console.log(Data); // Affiche le fichier dans les logs
        
        const response = await apiClient.post('/register', Data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Service de connexion
export const login = async (data: { email: string; password: string }) => {
    try {
        const response = await apiClient.post('/login', data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Méthode : demander un lien de réinitialisation de mot de passe
export const requestPasswordReset = async (email: string): Promise<void> => {
    try {
        const response = await apiClient.post("/request-password-reset", { email });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response && error.response.data
                ? error.response.data.message
                : "Erreur lors de la demande de réinitialisation.";
            throw new Error(errorMessage);
        }
        throw new Error("Une erreur inconnue s'est produite.");
    }
};

// Méthode : réinitialiser le mot de passe avec un token
export const resetPassword = async (token: string, newPassword: string): Promise<void> => {
    try {
        const response = await apiClient.post("/reset-password", {
            token,
            newPassword,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response && error.response.data
                ? error.response.data.message
                : "Erreur lors de la réinitialisation du mot de passe.";
            throw new Error(errorMessage);
        }
        throw new Error("Une erreur inconnue s'est produite.");
    }
    
};

// Récupérer le profil utilisateur
export const profile = async () => {
    try {
        const response = await apiClient.get(`${API_URL_PROTECTED}/profile`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

//-----------------------------------------------------------

// Liste des utilisateurs (protégée)
export const listClient = async () => {
    try {
        const response = await apiClient.get(`${API_URL_PROTECTED}/clients`);   
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const listManager = async () => {
    try {
        const response = await apiClient.get(`${API_URL_PROTECTED}/managers`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const listUsers = async () => {
    try {
        const response = await apiClient.get(`${API_URL_PROTECTED}/users`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

//-----------------------------------------------------------
// cree des utilisateurs (protégée)
export const creatClient = async (Data:{}) => {
    try {
        const response = await apiClient.post(`${API_URL_PROTECTED}/client`, Data);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const creatManager = async (Data:{}) => {
    try {
        const response = await apiClient.post(`${API_URL_PROTECTED}/manager`, Data);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const creatUsers = async (Data:{}) => {
    try {
        const response = await apiClient.post(`${API_URL_PROTECTED}/user`, Data);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

//-----------------------------------------------------------
// update des utilisateurs (protégée)
export const updateClient = async (id: string | number) => {
    try {
        const response = await apiClient.put(`${API_URL_PROTECTED}/client/${id}`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const updateManager = async (id: string | number) => {
    try {
        const response = await apiClient.put(`${API_URL_PROTECTED}/manager/${id}`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const updateUsers = async (id: string | number) => {
    try {
        const response = await apiClient.put(`${API_URL_PROTECTED}/users/${id}`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};


//-----------------------------------------------------------
// supprimer des utilisateurs (protégée)
export const deleteClient = async (id: string | number) => {
    try {
        const response = await apiClient.delete(`${API_URL_PROTECTED}/client/${id}`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const deleteManager = async (id: string | number) => {
    try {
        const response = await apiClient.delete(`${API_URL_PROTECTED}/manager/${id}`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
export const deleteUsers = async (id: string | number) => {
    try {
        const response = await apiClient.delete(`${API_URL_PROTECTED}/users/${id}`);        
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
//-----------------------------------------------------------

// Mettre à jour le profil
export const updateProfile = async (
    data: { username: string; email: string; password?: string },
    id: string
) => {
    try {
        const response = await apiClient.put(`${API_URL_PROTECTED}/users/${id}`, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Delete a user by ID
export const deleteUser = async (id: string): Promise<void> => {
    try {
        const response = await apiClient.delete(`${API_URL_PROTECTED}/users/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Déconnexion
export const logout = () => {
    localStorage.removeItem('token');
};
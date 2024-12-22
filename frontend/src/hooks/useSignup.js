import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullname, email, password, confirmPassword, gender }) => {
        const success = handleInputsError({ fullname, email, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true); // Début du chargement

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, email, password, gender }),
              });
               
              

            if (!res.ok) {
                throw new Error("Une erreur s'est produite lors de l'inscription.");
            }

            const data = await res.json();
            toast.success("Inscription réussie !");
            console.log(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false); // Fin du chargement
        }
    };

    return { loading, signup };
};

export default useSignup;

// Fonction utilitaire pour gérer les erreurs des champs d'entrée
function handleInputsError({ fullname, email, password, confirmPassword, gender }) {
    if (!fullname || !email || !password || !confirmPassword || !gender) {
        toast.error("Veuillez remplir tous les champs.");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Les mots de passe ne correspondent pas.");
        return false;
    }
    if (password.length < 6) {
        toast.error("Le mot de passe est trop court (minimum 6 caractères).");
        return false;
    }
    return true;
}

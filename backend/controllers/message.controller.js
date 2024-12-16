import Converstion from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body; // Récupération du champ 'message' depuis le corps de la requête
        const { id: receiverId } = req.params; // Récupération de l'ID du destinataire depuis les paramètres
        const senderId = req.user._id; // Récupération de l'ID de l'utilisateur connecté

        // Vérification du champ 'message'
        if (!message || message.trim() === "") {
            return res.status(400).json({ error: "Le champ 'message' est obligatoire et ne peut pas être vide." });
        }

        // Recherche d'une conversation existante entre l'expéditeur et le destinataire
        let conversation = await Converstion.findOne({
            participants: {
                $all: [senderId, receiverId],
            },
        });

        // Si aucune conversation n'existe, en créer une nouvelle
        if (!conversation) {
            conversation = await Converstion.create({
                participants: [senderId, receiverId],
            });
        }

        // Création d'un nouveau message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // Ajout du message à la conversation
        if (newMessage) {
            conversation.message.push(newMessage._id);
        }

        // Sauvegarde simultanée du message et de la conversation
        await Promise.all([conversation.save(), newMessage.save()]);

        // Réponse en cas de succès
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Erreur dans le contrôleur sendMessage :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params; // Récupération de l'ID de l'utilisateur à contacter
        const senderId = req.user._id; // Récupération de l'ID de l'utilisateur connecté

        // Recherche de la conversation existante
        const conversation = await Converstion.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("message"); // Remplir les messages pour récupérer les détails

        // Vérification si une conversation a été trouvée
        if (!conversation) {
            return res.status(404).json({ error: "Aucune conversation trouvée." });
        }

        // Réponse avec les messages de la conversation
        res.status(200).json(conversation.message);
    } catch (error) {
        console.log("Erreur dans le contrôleur getMessages :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

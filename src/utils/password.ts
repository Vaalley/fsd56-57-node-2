import argon2 from "argon2";

export const verifyPassword = async (password: string, hash: string) => {
  try {
    return argon2.verify(hash, password);
  } catch (error) {
    console.error("Erreur lors de la vérification du mot de passe:", error);
    return false;
  }
};

export const hashPassword = async (password: string) => {
  try {
    return argon2.hash(password);
  } catch (error) {
    console.error("Erreur lors du hachage du mot de passe:", error);
    return null;
  }
};

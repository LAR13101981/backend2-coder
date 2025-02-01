import { hashSync, genSaltSync, compareSync } from "bcrypt";

export const createHash = (password)=> {
    const salt = genSaltSync(10);

    return hashSync(password, salt);
};

export const isValidPassword = (password, passwordHash)=> {
    return compareSync(password, passwordHash);
}


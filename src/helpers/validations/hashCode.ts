import bcrypt from 'bcrypt';

export const returnPassHase = (password: string): string => {
    const pepper = process.env.BCRYPT_PASSWORD;

    const saltRound: number = process.env.SALT_ROUND
        ? parseInt(process.env.SALT_ROUND)
        : 0;
    const hash = bcrypt.hashSync(password + pepper, saltRound);
    return hash
}
import connection from "./database.js";

async function findUserInDB( email ) {
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      ); 
};

async function putUserInDB ( name, email, hashedPassword ) {
    connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );
};

async function getEmailSession ( email ) {
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
}

const signRepository = {
    findUserInDB,
    putUserInDB,
    getEmailSession,
}

export default signRepository;
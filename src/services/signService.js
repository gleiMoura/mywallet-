import signRepository from "../repositories/signRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function addUser( name, email, password) {
    if (!name || !email || !password) {
        throw {
            code: 422,
            message: "incomplete content"
        }
      };
  
      const existingUsers = await signRepository.findUserInDB(email);
  
      if (existingUsers.rowCount > 0) {
        throw  {
            code: 409,
            message: "There is this user in Database"
        }
      }
  
      const hashedPassword = bcrypt.hashSync(password, 12);
  
      await signRepository.putUserInDB( name, email, hashedPassword );
};

export async function addSession ( email, password ) {
    if (!email || !password) {
         throw {
            code: 422,
            message: "incomplete content"
         }
      }
  
      const { rows } = await signRepository.getEmailSession( email );
      const [user] = rows;
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw {
            code: 401,
            massage: "user or password are incorrect"
        }
      };
  
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );

      return token;
}
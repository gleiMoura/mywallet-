import {addUser, addSession } from "./services/signService.js";


export async function doSignUp( req, res ) {
    const { name, email, password } = req.body;

    addUser( name, email, password );

    res.sendStatus(201);
};

export async function doSignIn ( req, res ) {
    const { email, password } = req.body;

    const token = addSession( email, password );

    res.send({
      token,
    });
};
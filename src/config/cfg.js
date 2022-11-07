const cfg = () => {
    return {
        jwt_secret: "V$CoD#",
        jwt_expires: "id",
        salt: 10000000000,
        db: "mongodb+srv://UserMsApi:TrabalhoApi@cluster0.thtcwnc.mongodb.net/financeiro?retryWrites=true&w=majority"
    }
}

module.exports = cfg();
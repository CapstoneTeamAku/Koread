const connection = require('../../modules/database/databaseConnection');
const encryption = require('../../modules/secure/encryption');

const findById = async (userId) => {
    try {
        const [rows] = await connection.query(`SELECT * FROM Member WHERE user_id = ?`, [userId]);
        return rows[0] ?? [];
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const findByEmail = async (email) => {
    try {
        const [rows] = await connection.query(`SELECT * FROM Member WHERE email = ?`, [email]);

        return rows[0] ?? [];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const findByIdAndPassword = async (id,password) => {
    try {
        const [rows] = await connection.query(`SELECT * FROM Member WHERE user_id = ? AND password = ?`,
            [id,encryption.hashPassword(id,password).password]);
        return rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const findAll = async () => {
    try {
        const [rows] = await connection.query(`SELECT * FROM Member`);
        return rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// 완전 처음 저장할때겠지..? -> 이때는 user_id 따로 설정 X
const save = async (user) => {
    try {
        const { user_id, email, password, nickname, phone_num, name, birthday } = user;
        const [result] = await connection.query(
            'INSERT INTO Member ( email, password, nickname, phone_num, name, birthday, join_date) VALUES (?, ?, ?, ?, ?, ?, now())',
            [ email, encryption.hashPassword(email,password).password, nickname, phone_num, name, birthday]
        );
        return result.insertId;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// 업데이트 할 때도 user_id는 수정하면 안됨
const update = async (userId, fieldsToUpdate) => {
    try {
        const columnsToUpdate = [];
        const valuesToUpdate = [];

        for (const key in fieldsToUpdate) {
            if(!('email, password, nickname, phone_num, name, birthday, join_date').includes(key))
                continue;
            columnsToUpdate.push(`${key} = ?`);
            if(key == 'password'){
                valuesToUpdate.push(encryption.hashPassword('secret',fieldsToUpdate[key]).password);
            }else{
                valuesToUpdate.push(fieldsToUpdate[key]);
            }
        }

        const query = `UPDATE Member SET ${columnsToUpdate.join(', ')} WHERE user_id = ?`;
        valuesToUpdate.push(userId);

        await connection.query(query, valuesToUpdate);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const remove = async (userId) => {
    try{
        await connection.query(
            'DELETE FROM Member WHERE user_id = ?',
            [userId]
        );
    }catch(err){
        console.error(err);
        throw err;
    }
}

module.exports = {
    findById,
    findByEmail,
    findByIdAndPassword,
    findAll,
    update,
    save,
    remove
};
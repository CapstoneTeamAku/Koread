const express = require('express');
const router = express.Router();
const connection = require('../../modules/database/databaseConnection');

// 내 위시리스트에 담기
router.get('/:userId/:bookId', async function(req, res) {
    try {
        const result = await connection.query(
            'INSERT INTO Wishlist ( user_id, book_id) VALUES (?, ?)',
            [ req.params.userId, req.params.bookId]
        );
        res.json({result});
    } catch (err) {
        console.error(err);
        throw err;
    }
});

// 내 위시리스트에 있는 모든 책 리스트 받기
router.get('/:userId', async (req, res) => {
    try {
        const wishlist = await connection.query(`SELECT book_id FROM Wishlist where user_id = ?`, [req.params.userId]);
        res.json(wishlist[0]);
    } catch (err) {
        console.error(err);
        throw err;
    }
});


router.delete('/:userId/:bookId', async (req, res) => {
    try {
        const result = await connection.query(
            'DELETE FROM Wishlist where user_id = ? AND book_id = ?',
            [ req.params.userId, req.params.bookId]
        );
        res.json({result});
    } catch (err) {
        console.error(err);
        throw err;
    }
});




module.exports = router;

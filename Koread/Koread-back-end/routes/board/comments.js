const express = require("express");
const router = express.Router();
const { Comment, Post, Sequelize } = require("../models");
const { commentCreateValidation, commentUpdateValidation } = require("../validations/index");
// 댓글 작성
router.post("/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const { content, userId } = await commentCreateValidation.validateAsync(req.body);
    const comment = await Comment.create({
      content,
      userId,
      postId,
      upload_date: new Date(),
      likes: 0
    });
    res.json(comment);
  } catch (err) {
    if (err.isJoi) {
      return res.status(422).json({ message: err.details[0].message });
    }
    res.status(500).json({ message: err.message });
  }
});
// 댓글 수정
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const fieldsToUpdate = await commentUpdateValidation.validateAsync(req.body);
    fieldsToUpdate.upload_date = new Date();
    const updatedComment = await Comment.update(fieldsToUpdate, { where: { id } });
    res.json(updatedComment);
  } catch (err) {
    if (err.isJoi) {
      return res.status(422).json({ message: err.details[0].message });
    }
    res.status(500).json({ message: err.message });
  }
});
// 댓글 삭제
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.destroy({ where: { id } });
    res.json(deletedComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 댓글 좋아요
router.post("/:id/like", async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByPk(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const updatedComment = await Comment.update({ likes: comment.likes + 1 }, { where: { id } });
    res.json(updatedComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;




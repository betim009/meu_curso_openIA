const pool = require("../database/connection");

async function listUsers(req, res) {
  try {
    const [users] = await pool.query(
      "SELECT id, name, email, created_at, updated_at FROM users"
    );

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao listar usuários." });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const [users] = await pool.query(
      "SELECT id, name, email, created_at, updated_at FROM users WHERE id = ?",
      [id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json(users[0]);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar usuário." });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Nome e email são obrigatórios." });
    }

    const [result] = await pool.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json({ message: "Usuário atualizado com sucesso." });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email já cadastrado." });
    }

    return res.status(500).json({ message: "Erro ao atualizar usuário." });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json({ message: "Usuário excluído com sucesso." });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao excluir usuário." });
  }
}

module.exports = {
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
};

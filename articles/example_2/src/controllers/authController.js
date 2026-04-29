const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../database/connection");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Nome, email e senha são obrigatórios." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      hashedPassword,
    ]);

    return res.status(201).json({ message: "Usuário cadastrado com sucesso." });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email já cadastrado." });
    }

    return res.status(500).json({ message: "Erro ao cadastrar usuário." });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }

    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const user = users[0];
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "secret_key",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login realizado com sucesso.",
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao fazer login." });
  }
}

module.exports = {
  register,
  login,
};

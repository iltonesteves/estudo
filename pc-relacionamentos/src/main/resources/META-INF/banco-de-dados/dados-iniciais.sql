INSERT INTO tb_user (name, email, senha) VALUES ('Nina Brown', 'nina@gmail.com', '$2a$10$I0909Q9wXwY.NecnSHvwrO1xh1LLGtD0A2hClWkiFWLiy3ncfH7aa');
INSERT INTO tb_user (name, email, senha) VALUES ('Leia Red', 'leia@gmail.com', '$2a$10$I0909Q9wXwY.NecnSHvwrO1xh1LLGtD0A2hClWkiFWLiy3ncfH7aa');

INSERT INTO tb_role (role_name) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (role_name) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
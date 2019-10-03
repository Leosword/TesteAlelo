INSERT INTO tb_perfil (data_criacao, descricao, fl_ativo, nome) VALUES (now(), 'Perfil de Administrador do Sistema', 'S', 'Admin');

INSERT INTO tb_usuario_tb_perfil (id_usuario, id_perfil) VALUES ('1', '1');
INSERT INTO tb_usuario_tb_perfil (id_usuario, id_perfil) VALUES ('2', '1');
INSERT INTO tb_usuario_tb_perfil (id_usuario, id_perfil) VALUES ('3', '1');
INSERT INTO tb_usuario_tb_perfil (id_usuario, id_perfil) VALUES ('4', '1');
INSERT INTO tb_usuario_tb_perfil (id_usuario, id_perfil) VALUES ('5', '1');
INSERT INTO tb_usuario_tb_perfil (id_usuario, id_perfil) VALUES ('6', '1');

--/////////////////////////////////////////--
-- INSERE AS FUNCIONALIDADES
--/////////////////////////////////////////--
-- ITENS DO DASHBOARD
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Visualizar tela DashBoard', 'S', 'Dashboard', 'MNU_DASHBOARD', '1');

-- ITENS DO USUÁRIO
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Visualizar tela de Usuário', 'S', 'Cadastro de Usuário', 'MNU_USUARIO', '1');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão incluir Usuário', 'S', 'Cadastro de Usuário >> Botão incluir', 'MNU_USUARIO_BTN_INCLUIR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão editar Usuário', 'S', 'Cadastro de Usuário >> Botão editar', 'MNU_USUARIO_BTN_EDITAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão ativar Usuário', 'S', 'Cadastro de Usuário >> Botão ativar', 'MNU_USUARIO_BTN_ATIVAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão desativar Usuário', 'S', 'Cadastro de Usuário >> Botão desativar', 'MNU_USUARIO_BTN_DESATIVAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão visualizar formulário de Usuário', 'S', 'Cadastro de Usuário >> Botão visualizar', 'MNU_USUARIO_BTN_VISUALIZAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão alterar senha de Usuário', 'S', 'Cadastro de Usuário >> Botão Alterar Senha', 'MNU_USUARIO_BTN_ALTERAR_SENHA', '3');

-- ITENS DO PERFIL
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Visualizar tela de Perfil', 'S', 'Gestão de Acesso >> Perfil', 'MNU_PERFIL', '1');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão incluir Perfil', 'S', 'Gestão de Acesso >> Perfil >> Botão incluir', 'MNU_PERFIL_BTN_INCLUIR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão editar Perfil', 'S', 'Gestão de Acesso >> Perfil >> Botão editar', 'MNU_PERFIL_BTN_EDITAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão ativar Perfil', 'S', 'Gestão de Acesso >> Perfil >> Botão ativar', 'MNU_PERFIL_BTN_ATIVAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão desativar Perfil', 'S', 'Gestão de Acesso >> Perfil >> Botão desativar', 'MNU_PERFIL_BTN_DESATIVAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão visualizar Perfil', 'S', 'Gestão de Acesso >> Perfil >> Botão visualizar', 'MNU_PERFIL_BTN_VISUALIZAR', '3');

-- FUNCIONALIDADES
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Visualizar tela de Funcionalidades', 'S', 'Gestão de Acesso >> Funcionalidades', 'MNU_FUNCIONALIDADES', '1');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão ativar Funcionalidade(s)', 'S', 'Gestão de Acesso >> Funcionalidades >> Botão ativar', 'MNU_FUNCIONALIDADES_BTN_ATIVAR', '3');
INSERT INTO tb_funcionalidade (data_criacao,descricao,fl_ativo,caminho,nome,id_tipo_funcionalidade) VALUES (now(), 'Botão desativar Funcionalidade(s)', 'S', 'Gestão de Acesso >> Funcionalidades >> Botão desativar', 'MNU_FUNCIONALIDADES_BTN_DESATIVAR', '3');


--/////////////////////////////////////////--
-- INSERE AS ASSOCIAÇÕES DE TODAS AS FUNCIONALIDADE AP PERFIL ADMIN
--/////////////////////////////////////////--
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '1');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '2');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '3');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '4');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '5');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '6');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '7');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '8');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '9');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '10');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '11');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '12');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '13');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '14');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '15');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '16');
INSERT INTO tb_perfil_funcionalidade (id_perfil, id_funcionalidade) VALUES ('1', '17');

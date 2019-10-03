package br.com.netservicos.mti.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbUsuario;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Repository
public interface UsuarioRepository extends PagingAndSortingRepository<TbUsuario, Long> {
	
	@EntityGraph(value = TbUsuario.TODOS_RELACIONAMENTOS, type = EntityGraphType.FETCH)
	TbUsuario findOne(@Param("id") Long id);

	@EntityGraph(value = TbUsuario.TODOS_RELACIONAMENTOS, type = EntityGraphType.FETCH)
	@Query("SELECT u FROM TbUsuario u WHERE u.nome = :nome ")
	TbUsuario obterPorNome(@Param("nome") String nome);
	
	@EntityGraph(value = TbUsuario.TODOS_RELACIONAMENTOS, type = EntityGraphType.FETCH)
	@Query("SELECT u FROM TbUsuario u WHERE trim(UPPER(u.loginDeRede)) = :loginDeRede ")
	TbUsuario obterPorNomeDeUsuario(@Param("loginDeRede") String loginDeRede);
	
	@EntityGraph(value = TbUsuario.TODOS_RELACIONAMENTOS, type = EntityGraphType.FETCH)
	@Query("SELECT u FROM TbUsuario u")
	Page<TbUsuario> obterTodos(Pageable pageable);

	@Query("SELECT u FROM TbUsuario u   "
			+ " JOIN FETCH u.tbPerfils p "
			+ " JOIN FETCH p.tbFuncionalidades f "
			+ " WHERE u.id = :idUsuario "
			+ " AND p.flAtivo = 'S' "
			+ " AND f.flAtivo = 'S' ")
	TbUsuario obterUsuarioComPermissoes(@Param("idUsuario") Long idUsuario);

	@Query("SELECT u FROM TbUsuario u   "
			+ " JOIN FETCH u.tbPerfils p "
			+ " WHERE u.id = :idUsuario ")
	TbUsuario obterUsuarioComPerfis(@Param("idUsuario") Long idUsuario);

	
}

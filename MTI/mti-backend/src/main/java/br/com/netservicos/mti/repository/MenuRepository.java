package br.com.netservicos.mti.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbMenu;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Repository
public interface MenuRepository extends PagingAndSortingRepository<TbMenu, Long> {

	@Query("SELECT m FROM TbMenu m JOIN FETCH m.tbFuncionalidades f where m.id = :idMenu")
	TbMenu obterMenuComFuncionalidadesAssociadas(@Param("idMenu") Long idMenu);

}

# Teste Alelo - Projeto Spring Boot + Angular

Neste projeto possui as tecnologias:
* Spring Boot
* Spring Data
* Spring Security
* Spring Repository
* Hibernate/JPA
* EntityGraph
* Lombok
* Swagger
* Database Profile
* Autenticação JWT
* Angular 5
* Bootstrap
* CSS3
* Chart.js
* AuthGuard
* Interceptor
* AdminLte Template
* Pristine Angular Form
* H2 Database

## Getting Started

Para Instalação do MTI-Backend é necessário a configuração do lombok 1.8 e JDK 1.8
* https://projectlombok.org/download

Para Instalação do MTI-Frontend é necessário a instalação do Node.js, Angular CLI
* https://nodejs.org/en/download/
* https://www.npmjs.com/package/@angular/cli

### Visualização do Swagger

Para visualizar o endpoint do Swagger é necessário desativar a segurança por token do JWT na classe WebSecurityConfig > configure

```
protected void configure(HttpSecurity http) throws Exception {
		//http.httpBasic().disable(); DESCOMENTAR ESSA LINHA PARA DISABILITAR JWT. OBS COMENTAR AS DEMAIS LINHAS.
		http.cors().and().csrf().disable().authorizeRequests()
				.antMatchers("/usuario/gerar-token").permitAll()
				.anyRequest().authenticated().and().exceptionHandling()
				.authenticationEntryPoint(unauthorizedHandler).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.addFilterBefore(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);
}
```

## Built With
* [Maven](https://maven.apache.org/) - Dependency Management

## Admin Access
* Usuario:admin
* Senha:#nettools@

## Authors

* **Leandro Celestino**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


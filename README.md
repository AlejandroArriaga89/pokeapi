Objetivo:
Definir una API para gestionar nuestro equipo Pokémon

#Acciones:

- Identificarnos / logearnos
- Añadir pokémon a nuestro equipo.
- Eliminar pokémon de nuestro equipo.
- Intercambiar el orden de nuestros Pokémon
- Consultar información de nuestro equipo.

#REST Design:

- Añadir Pokémon: POST /team/pokemons
- Consultar: GET /team
- Eliminar Pokémon: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestros pokemon: PUT /team
- Sistema de credenciales

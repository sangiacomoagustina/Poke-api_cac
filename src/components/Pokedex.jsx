import React from 'react';
import {TypeEmojis} from './TypeEmojis';

const Pokedex = ({ pokemon, pokeChosen, pokeFail }) => {
  return (
    <section className="pokedex">
      {!pokeFail ? <h3></h3> : <h3 className="fail">No hay resultados</h3>}
      {!pokeChosen ? (
        <h2 className="please">Elija un Pokémon</h2>
      ) : (
        <>
          <div className="nombre">
            <small>Nombre</small>
            <h2>{pokemon.name}</h2>
          </div>
          <div className="imagen">
            <img src={pokemon.img} alt={pokemon.name} />
            <h3 className="num">No. {pokemon.number}</h3>
          </div>
          <div className="stats">
            <small>HP</small>
            <small>Ataque</small>
            <small>Defensa</small>
            <h3>{pokemon.hp}</h3>
            <h3>{pokemon.attack}</h3>
            <h3>{pokemon.defense}</h3>
          </div>
          <div className="type">
            <small>Tipo</small>
            <h3>
              {pokemon.type}
              <TypeEmojis type={pokemon.type} />
            </h3>
          </div>
        </>
      )}
    </section>
  );
};

export default Pokedex;
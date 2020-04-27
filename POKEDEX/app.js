//Init class Pokemon
const p = new Pokemon();
//Init class UI
const ui = new UI();

// Variables

const body = document.body;
const pokemonSearchInputValue = document.getElementById("pokemon-name-input");
const pokemonSearchButton = document.getElementById("pokemon-search-btn");
const pokemonFullList = document.getElementById("pokemon-list-prompt");
const showAgainBtn = document.getElementById("info-about-pokemon");
const results = document.getElementById("results");
const loader = document.getElementById("loader");
const contianer = document.getElementById("container");
const pokemonList = document.getElementById("pokemon-list");
const pokemonItemListBtn = document.getElementById("pokemon-world-items-list");
const soundBtn = document.getElementById("sound");
let soundVolume = 1;
let soundOn = true;
const synth = window.speechSynthesis; // speech
let voices = [];

setTimeout(() => {
  loader.classList.add("displaynone"); // dodać funkcje
  container.classList.remove("displaynone"); // dodac funkcje
}, 1000);
ui.buttonDisabled();

const getPokemon = () => {
  const userPokemonNameOrPokemonId = pokemonSearchInputValue.value.toLowerCase();

  if (userPokemonNameOrPokemonId !== "") {
    p.getPokemon(userPokemonNameOrPokemonId)
      .then((data) => {
        resultsShow();
        ui.alert("success");
        ui.resetResults();
        const pokemonName =
          data.pokemon.forms[0].name.charAt(0).toUpperCase() +
          data.pokemon.forms[0].name.slice(
            1,
            data.pokemon.forms[0].name.length
          );
        const pokemonId = data.pokemon.id;
        const pokemonTypesArr = Array.from(data.pokemon.types);
        const pokemonTypesNamesArr = Array.from(data.pokemon.types, (type) => {
          return (
            type.type.name.charAt(0).toUpperCase() +
            type.type.name.slice(1, type.length)
          );
        });

        const pokemonFrontImage = data.pokemon.sprites.front_default;

        let pokemonStatsNameArr = [];
        let pokemonStatsValueArr = [];
        for (const stat of data.pokemon.stats) {
          pokemonStatsNameArr.push(
            stat.stat.name.charAt(0).toUpperCase() +
              stat.stat.name.slice(1, stat.stat.name.length)
          );
          pokemonStatsValueArr.push(stat.base_stat);
        }

        const pokemonStatsName = pokemonStatsNameArr;
        const pokemonStatsValue = pokemonStatsValueArr;

        const textFlavorArr = [];

        data.text.flavor_text_entries.forEach((text, index) => {
          if (data.text.flavor_text_entries[index].language.name === "en") {
            textFlavorArr.push(
              data.text.flavor_text_entries[index].flavor_text
            );
          }
        });
        const flavorText = textFlavorArr[0];
        // random text
        // textFlavorArr[Math.floor(Math.random() * (textFlavorArr.length + 1))];

        const urlArr = [];
        data.pokemon.types.forEach((type) => urlArr.push(type.type.url));

        if (urlArr.length === 2) {
          const urlOne = data.pokemon.types[0].type.url;
          const urlTwo = data.pokemon.types[1].type.url;
          functionY(urlOne, urlTwo);
        } else {
          const urlOne = data.pokemon.types[0].type.url;
          functionX(urlOne);
        }
        const pokemonEvolutionChaindUrl = data.text.evolution_chain.url;

        //Evolutions
        const pokemonNameSmall = data.pokemon.forms[0].name;
        evolution(
          pokemonEvolutionChaindUrl,
          pokemonNameSmall,
          pokemonFrontImage
        );
        //Moves
        const moves = data.pokemon.moves;

        moves.forEach((move) => {
          move.version_group_details.forEach((el) => {
            if (el.version_group.name === "x-y") {
              if (el.move_learn_method.name === "egg") {
                p.getPokemonMove(move.move.url).then((data) => {
                  const moveName = data.pokemonMove.name;
                  const acc = data.pokemonMove.accuracy;
                  const power = data.pokemonMove.power;
                  const pp = data.pokemonMove.pp;
                  const effect = data.pokemonMove.effect_entries[0].effect;
                  const type = data.pokemonMove.type.name;
                  const method = el.move_learn_method.name;

                  ui.move(moveName, acc, power, pp, effect, type, method);
                });
              }
              if (el.move_learn_method.name === "level-up") {
                p.getPokemonMove(move.move.url).then((data) => {
                  const moveName = data.pokemonMove.name;
                  const acc = data.pokemonMove.accuracy;
                  const power = data.pokemonMove.power;
                  const pp = data.pokemonMove.pp;
                  const effect = data.pokemonMove.effect_entries[0].effect;
                  const type = data.pokemonMove.type.name;
                  const method = el.move_learn_method.name;

                  ui.move(moveName, acc, power, pp, effect, type, method);
                });
              }
              if (el.move_learn_method.name === "machine") {
                p.getPokemonMove(move.move.url).then((data) => {
                  const moveName = data.pokemonMove.name;
                  const acc = data.pokemonMove.accuracy;
                  const power = data.pokemonMove.power;
                  const pp = data.pokemonMove.pp;
                  const effect = data.pokemonMove.effect_entries[0].effect;
                  const type = data.pokemonMove.type.name;
                  const method = el.move_learn_method.name;

                  ui.move(moveName, acc, power, pp, effect, type, method);
                });
              }
              if (el.move_learn_method.name === "tutor") {
                p.getPokemonMove(move.move.url).then((data) => {
                  const moveName = data.pokemonMove.name;
                  const acc = data.pokemonMove.accuracy;
                  const power = data.pokemonMove.power;
                  const pp = data.pokemonMove.pp;
                  const effect = data.pokemonMove.effect_entries[0].effect;
                  const type = data.pokemonMove.type.name;
                  const method = el.move_learn_method.name;
                  ui.move(moveName, acc, power, pp, effect, type, method);
                });
              }
            }
          });
        });

        ui.showPokemon(
          pokemonName,
          pokemonId,
          pokemonTypesArr,
          pokemonTypesNamesArr,
          pokemonFrontImage,
          pokemonStatsName,
          pokemonStatsValue,
          flavorText
        );
        setTimeout(() => {
          speak(flavorText);
        }, 2300);

        ui.closeBtn();
        setTimeout(() => {
          ui.buttonDisabled();
        }, 2000);
      })
      .catch((error) => {
        ui.alert("error");
      });
  } else {
    ui.alert("empty");
    results.classList.add("displaynone");
  }
};
const getPokemonList = () => {
  p.getPokemonFullList().then((data) => {
    const list = data.pokemonList.results;

    ui.createList(list);
    ui.closeBtnList();
  });
};
const filterPokemonList = () => {
  let filterValue = document
    .getElementById("search-pokemon-in-list")
    .value.toLowerCase();

  let ul = document.getElementById("list");

  let li = ul.querySelectorAll("li.pokemon-from-list-number-name");

  liArr = Array.from(li);

  liArr.forEach((pok, index) => {
    if (pok.innerText.toLowerCase().indexOf(filterValue) > -1) {
      li[index].style.display = "";
    } else {
      li[index].style.display = "none";
    }
  });
};
const getPokemonsTypes = () => {
  let arr = [];
  for (let i = 1; i < 19; i++) {
    p.getPokemonTypes(i).then((data) => {
      arr.push(data.type.name);
    });
  }
};
const functionX = (url) => {
  p.getPokemonDegameRelations(url).then((data) => {
    const damageRelations = data.damage.damage_relations;

    const doubleDamageFrom = [];
    const halfDamageFrom = [];
    const noDamageFrom = [];
    const doubleDamageTo = [];
    const halfDamageTo = [];
    const noDamageTo = [];
    // Do likwidacji
    const superDamageFrom = [];
    const superDamageTo = [];

    damageRelations.double_damage_to.forEach((el) =>
      doubleDamageTo.push({ type: el.name, power: 2 })
    );
    damageRelations.half_damage_to.forEach((el) =>
      halfDamageTo.push({ type: el.name, power: 0.5 })
    );
    damageRelations.no_damage_to.forEach((el) =>
      noDamageTo.push({ type: el.name, power: 0 })
    );
    damageRelations.double_damage_from.forEach((el) =>
      doubleDamageFrom.push({ type: el.name, power: 2 })
    );
    damageRelations.half_damage_from.forEach((el) =>
      halfDamageFrom.push({ type: el.name, power: 0.5 })
    );
    damageRelations.no_damage_from.forEach((el) =>
      noDamageFrom.push({ type: el.name, power: 0 })
    );

    ui.showDamageRelation(
      superDamageFrom,
      doubleDamageFrom,
      halfDamageFrom,
      noDamageFrom,
      superDamageTo,
      doubleDamageTo,
      halfDamageTo,
      noDamageTo
    );
  });
};
const functionY = (urlOne, urlTwo) => {
  p.getPokemonDegameRelations(urlOne).then((data) => {
    const damageRelationsOne = data.damage.damage_relations;
    const doubleDamageFrom = [];
    const halfDamageFrom = [];
    const noDamageFrom = [];
    const doubleDamageTo = [];
    const halfDamageTo = [];
    const noDamageTo = [];

    damageRelationsOne.double_damage_from.forEach((el) => {
      doubleDamageFrom.push({ type: el.name, power: 2 });
    });

    damageRelationsOne.half_damage_from.forEach((el) => {
      halfDamageFrom.push({ type: el.name, power: 0.5 });
    });

    damageRelationsOne.no_damage_from.forEach((el) => {
      noDamageFrom.push({ type: el.name, power: 0 });
    });
    damageRelationsOne.double_damage_to.forEach((el) => {
      doubleDamageTo.push({ type: el.name, power: 2 });
    });

    damageRelationsOne.half_damage_to.forEach((el) => {
      halfDamageTo.push({ type: el.name, power: 0.5 });
    });

    damageRelationsOne.no_damage_to.forEach((el) => {
      noDamageTo.push({ type: el.name, power: 0 });
    });

    p.getPokemonDegameRelations(urlTwo).then((data) => {
      const damageRelationsTwo = data.damage.damage_relations;

      damageRelationsTwo.double_damage_from.forEach((el) => {
        doubleDamageFrom.push({ type: el.name, power: 2 });
      });

      damageRelationsTwo.half_damage_from.forEach((el) => {
        halfDamageFrom.push({ type: el.name, power: 0.5 });
      });

      damageRelationsTwo.no_damage_from.forEach((el) => {
        noDamageFrom.push({ type: el.name, power: 0 });
      });

      damageRelationsTwo.double_damage_to.forEach((el) => {
        doubleDamageTo.push({ type: el.name, power: 2 });
      });

      damageRelationsTwo.half_damage_to.forEach((el) => {
        halfDamageTo.push({ type: el.name, power: 0.5 });
      });

      damageRelationsTwo.no_damage_to.forEach((el) => {
        noDamageTo.push({ type: el.name, power: 0 });
      });
      const allDamageToRelations = noDamageTo
        .concat(halfDamageTo)
        .concat(doubleDamageTo);
      const allDamageFromRelations = noDamageFrom
        .concat(halfDamageFrom)
        .concat(doubleDamageFrom);
      allDamageFromRelations.sort(compareTypes);
      allDamageToRelations.sort(compareTypes);

      for (let i = 1; i < allDamageFromRelations.length; i++) {
        if (
          allDamageFromRelations[i].type === allDamageFromRelations[i - 1].type
        ) {
          const newPower =
            allDamageFromRelations[i].power *
            allDamageFromRelations[i - 1].power;
          allDamageFromRelations[i].power = newPower;
          allDamageFromRelations.splice(i - 1, 1);
        }
      }
      for (let i = 1; i < allDamageToRelations.length; i++) {
        if (allDamageToRelations[i].type === allDamageToRelations[i - 1].type) {
          const newPower =
            allDamageToRelations[i].power * allDamageToRelations[i - 1].power;
          allDamageToRelations[i].power = newPower;
          allDamageToRelations.splice(i - 1, 1);
        }
      }
      allDamageFromRelations.sort(sortPower);
      allDamageToRelations.sort(sortPower);

      const finalHalfDamageFrom = [];
      const finalDoubleDamageFrom = [];
      const finalSuperDamageFrom = [];
      const finalNoDamageFrom = [];

      const finalHalfDamageTo = [];
      const finalDoubleDamageTo = [];
      const finalSuperDamageTo = [];
      const finalNoDamageTo = [];

      allDamageFromRelations.forEach((el) => {
        if (el.power > 0 && el.power < 1) {
          finalHalfDamageFrom.push(el);
        }
        if (el.power === 2) {
          finalDoubleDamageFrom.push(el);
        }
        if (el.power > 2) {
          finalSuperDamageFrom.push(el);
        }
        if (el.power === 0) {
          finalNoDamageFrom.push(el);
        }
      });
      allDamageToRelations.forEach((el) => {
        if (el.power > 0 && el.power < 1) {
          finalHalfDamageTo.push(el);
        }
        if (el.power === 2) {
          finalDoubleDamageTo.push(el);
        }
        if (el.power > 2) {
          finalSuperDamageTo.push(el);
        }
        if (el.power === 0) {
          finalNoDamageTo.push(el);
        }
      });

      ui.showDamageRelation(
        finalSuperDamageFrom,
        finalDoubleDamageFrom,
        finalHalfDamageFrom,
        finalNoDamageFrom,
        finalSuperDamageTo,
        finalDoubleDamageTo,
        finalHalfDamageTo,
        finalNoDamageTo
      );
    });
  });
};
function evolution(pokemonEvolutionChaindUrl) {
  p.getPokemonEvolutionChain(pokemonEvolutionChaindUrl).then((data) => {
    const ui = new UI();
    const baseForm = data.evolutionChain.chain;
    const evolution = data.evolutionChain.chain.evolves_to;

    if (evolution.length === 0) {
      ui.noEvolution();
    }

    if (evolution.length > 0) {
      evolution.forEach((evolution, index) => {
        let evolutionMsg = "";
        console.log(evolution);
        const pokemonBaseName =
          baseForm.species.name.charAt(0).toUpperCase() +
          baseForm.species.name.slice(1, baseForm.species.name.length);
        const pokemonEvolutionName =
          evolution.species.name.charAt(0).toUpperCase() +
          evolution.species.name.slice(1, evolution.species.name.length);

        if (evolution.evolution_details[0].trigger.name === "level-up") {
          if (evolution.evolution_details[0].min_level === null) {
            const details = evolution.evolution_details[0];
            const map = new Map();
            for (const detail in details) {
              if (
                details[detail] !== null &&
                details[detail] !== false &&
                details[detail] !== ""
              ) {
                if (typeof details[detail] !== "object") {
                  map.set(`${detail}`, `${details[detail]}`);
                } else {
                  map.set(`${detail}`, `${details[detail].name}`);
                }
              }
            }

            map.forEach((value, key) => {
              if (key === "trigger") {
                evolutionMsg += ` ${pokemonBaseName} evolves into ${pokemonEvolutionName} at level up.`;
              }
              if (key === "gender") {
                evolutionMsg += ` Gender: ${value}.`;
              }
              if (key === "held_item") {
                evolutionMsg += ` Set held item: ${value}`;
              }
              if (key === "item") {
                evolutionMsg += `Set item: ${value}`;
              }
              if (key === "know_move") {
                evolutionMsg += ` When know move: ${value}`;
              }
              if (key === "know_move_type") {
                evolutionMsg += ` When know move type ${value}. `;
              }
              if (key === "location") {
                evolutionMsg += ` In place: ${value}.`;
              }
              if (key === "min_affection") {
                evolutionMsg += ` Minimum affect: ${value}.`;
              }
              if (key === "min_beauty") {
                evolutionMsg += ` Minimum beauty: ${value}.`;
              }
              if (key === "min_happiness") {
                evolutionMsg += `Minimum happiness: ${value}.`;
              }
              if (key === "needs_overworld_rain") {
                evolutionMsg += ` Needs overworld rain.`;
              }
              if (key === "party_species") {
                evolutionMsg += ` Party species ${value}.`;
              }
              if (key === "party_type") {
                evolutionMsg += ` Party type${value}.`;
              }
              if (key === "relative physical stats") {
                evolutionMsg += ` Relative physical stats: ${value}.`;
              }
              if (key === "time_of_day") {
                evolutionMsg += ` During ${value}.`;
              }
              if (key === "trade_species") {
                evolutionMsg += ` Trade species: ${value}.`;
              }
              if (key === "turn_upside_down") {
                evolutionMsg += ` Turned upside down.`;
              }
            });
          } else {
            const minLvl = evolution.evolution_details[0].min_level;

            evolutionMsg = `${pokemonBaseName} evolves into ${pokemonEvolutionName} at level ${minLvl}.`;
          }
        }
        if (evolution.evolution_details[0].trigger.name === "use-item") {
          const item = evolution.evolution_details[0].item.name;
          const itemUrl = evolution.evolution_details[0].item.url;
          const itemId = `item-one-${index}`;
          evolutionMsg = `${pokemonBaseName} evolves into ${pokemonEvolutionName} using a ${item}.<img id="item-one-${index}" class="item-evolve"/>`;
          itemImg(itemUrl, itemId);
        }
        if (evolution.evolution_details[0].trigger.name === "trade") {
          const heldItemName = evolution.evolution_details[0].held_item.name;
          const heldItemUrl = evolution.evolution_details[0].held_item.url;
          evolutionMsg = `${pokemonBaseName} evolves into ${pokemonEvolutionName} when he holds item: ${heldItemName}.<img id="item-one-${index}" class="item-evolve"/>`;
          const itemOne = `item-one-${index}`;
          itemImg(heldItemUrl, itemOne);
        }

        ui.evolutionChainEvoOne(index, evolutionMsg);
        p.getPokemon(baseForm.species.name).then((data) => {
          const pokemonPhoto = data.pokemon.sprites.front_default;
          ui.showEvolutionChainPhotoOne(pokemonPhoto);
        });
        p.getPokemon(evolution.species.name).then((data) => {
          const pokemonPhoto = data.pokemon.sprites.front_default;
          ui.showEvolutionChainPhotoTwo(pokemonPhoto, index);
        });
        const evolutionTwo = evolution.species.name;

        if (evolution.evolves_to.length > 0) {
          evolution.evolves_to.forEach((evolution, index) => {
            const evoveTo =
              evolution.species.name.charAt(0).toUpperCase() +
              evolution.species.name.slice(1, evolution.species.name.length);

            if (evolution.evolution_details[0].trigger.name === "level-up") {
              const minLvl = evolution.evolution_details[0].min_level;

              evolutionMsg = `${pokemonEvolutionName} evolves into ${evoveTo} at level ${minLvl}.`;
            }
            if (evolution.evolution_details[0].trigger.name === "use-item") {
              const item = evolution.evolution_details[0].item.name;
              const itemUrl = evolution.evolution_details[0].item.url;
              const itemId = `item-two-${index}`;
              evolutionMsg = `${pokemonEvolutionName} evolves into ${evoveTo} using a ${item}.<img id="item-two-${index}" class="item-evolve"/>`;
              itemImg(itemUrl, itemId);
            }
            if (evolution.evolution_details[0].trigger.name === "trade") {
              const heldItem = evolution.evolution_details[0].held_item;

              if (heldItem === null) {
                evolutionMsg = `${pokemonEvolutionName} evolves into ${evoveTo} by trading`;
              } else {
                const heldItemName =
                  evolution.evolution_details[0].held_item.name;
                const heldItemUrl =
                  evolution.evolution_details[0].held_item.url;
                evolutionMsg = `${pokemonEvolutionName} evolves into ${evoveTo} when he holds item: ${heldItemName}.<img id="item-two-${index}" class="item-evolve"/>`;
                const itemOne = `item-two-${index}`;

                itemImg(heldItemUrl, itemOne);
              }
            }

            ui.evolutionChainEvoTwo(index, evolutionMsg);
            p.getPokemon(evolutionTwo).then((data) => {
              const pokemonPhoto = data.pokemon.sprites.front_default;
              ui.showEvolutionChainPhotoThree(pokemonPhoto);
            });
            p.getPokemon(evolution.species.name).then((data) => {
              const pokemonPhoto = data.pokemon.sprites.front_default;
              ui.showEvolutionChainPhotoFour(pokemonPhoto, index);
            });
          });
        }
      });
    }
  });
}
const loadPokemon = (pokeName) => {
  getPokemon(pokeName);
};

const pushToArray = (x, y) => {
  x.forEach((type) => y.push(type.name));
};
const resultsHide = () => {
  results.classList.add("displaynone");
  ui.alert("empty");
};
const listHide = () => {
  pokemonList.classList.add("displaynone");
};
const resultsShow = () => {
  setTimeout(() => {
    results.classList.remove("displaynone");
  }, 2000);
};
const resultsShowAgain = () => {
  results.classList.remove("displaynone");
};

function compareTypes(a, b) {
  if (a.type > b.type) {
    return -1;
  }
  if (a.type < b.type) {
    return 1;
  } else {
    return 0;
  }
}
function compareMoves(a, b) {
  if (a.move.name > b.move.name) {
    return 1;
  }
  if (a.move.name < b.move.name) {
    return -1;
  } else {
    return 0;
  }
}
function sortPower(a, b) {
  return a.power - b.power;
}
const itemImg = (url, id) => {
  const idValue = id;
  p.getPokemonEvolutionStone(url).then((data) => {
    const item = data.evolutionStone.sprites.default;

    ui.evolutionItem(item, idValue);
  });
};
const showPokemonList = () => {
  pokemonList.classList.remove("displaynone");
};
const getVoice = () => {
  voices = synth.getVoices();
};

const speak = (flavorText) => {
  if (soundOn === true) {
    voices = synth.getVoices();

    if (synth.speaking) {
      console.error("Already speaking...");
      return;
    }
    if (flavorText.value !== "" && window.innerWidth > 1024) {
      // Get speak text
      const speakText = new SpeechSynthesisUtterance(flavorText);
      const closeBtn = document.getElementById("close-btn");
      // Speak start
      speakText.onstart = (e) => {
        console.log("Start speaking...");

        closeBtn.disabled = true;
        console.log(closeBtn);
      };
      // Speak end
      speakText.onend = (e) => {
        console.log("Done speaking...");
        closeBtn.disabled = false;
      };
      //Speak error
      speakText.onerror = (e) => {
        console.error("Somthing went wrong");
      };

      // Selected voice

      speakText.voice = voices[2];

      //Set pitch and rate
      speakText.rate = 1;
      speakText.pitch = 1;
      speakText.volume = soundVolume;
      //SPEAK

      synth.speak(speakText);
    }
  } else {
    console.log("Without sound");
    return;
  }
};
const hourglass = () => {
  ui.hourglassFun();
};
const switchSound = (att) => {
  console.log(att);
  if (att === "true") {
    soundBtn.setAttribute("data-on", "false");
    soundVolume = 0;
    soundOn = false;
    soundIconCreate("off");
  } else if (att === "false") {
    soundBtn.setAttribute("data-on", "true");
    soundVolume = 1;
    soundOn = true;
    soundIconCreate("on");
  }
};
const soundIconCreate = (type) => {
  ui.changeIcon(type);
};
// APP
getPokemonList();

// Event Listeners

pokemonSearchButton.addEventListener("click", getPokemon);
pokemonSearchButton.addEventListener("click", hourglass);

pokemonSearchInputValue.addEventListener("keypress", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    getPokemon();
    hourglass();
  }
});
pokemonFullList.addEventListener("click", showPokemonList);
showAgainBtn.addEventListener("click", resultsShowAgain);
document.addEventListener("click", (e) => {
  ui.moveBtn(e);
});
soundBtn.addEventListener("click", (e) => {
  let att;
  if (e.target.hasAttribute("data-on")) {
    att = e.target.getAttribute("data-on");
    switchSound(att);
  } else if (!e.target.hasAttribute("data-on")) {
    if (e.target.parentElement.hasAttribute("data-on"))
      att = e.target.parentElement.getAttribute("data-on");
    switchSound(att);
  }
});

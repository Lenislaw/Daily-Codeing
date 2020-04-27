class UI {
  constructor() {
    this.results = document.getElementById("results");
    this.pokemonList = document.getElementById("pokemon-list");
    this.pokemonItemList = document.getElementById("pokemon-items-list");
    this.hourglass = document.getElementById("hourglass");
    this.soundIcon = document.getElementById("sound");
  }
  buttonDisabled() {
    if (this.results.innerHTML.length === 0) {
      showAgainBtn.disabled = true;
    } else {
      showAgainBtn.disabled = false;
    }
  }
  resetResults() {
    this.results.innerHTML = "";
  }
  showPokemon(
    pokemonName,
    pokemonId,
    pokemonTypes,
    pokemonTypesNames,
    pokemonFrontImage,
    pokemonStatsName,
    pokemonStatsValue,
    flavorText
  ) {
    if (pokemonTypes.length < 2) {
      this.results.innerHTML = `
      <div id="pokemon-box">
      <button id="close-btn">X</button>
      <div id="pokemon-name" class="${pokemonTypes[0].type.name}-dark">
      ${pokemonName}
      </div>
      <div id="pokemon-info">
        <div id="pokemon-front-image">
          <img
           src="${pokemonFrontImage}"
           alt="Pokemon-Front"
          />
        </div>
        <div id="pokemon-statistic">
          <div id="pokemon-type-id">
            <div id="pokemon-type">
              <div class="type ${pokemonTypes[0].type.name}">${pokemonTypesNames[0]}</div>
              
          </div>
          <div id="pokemon-id">#${pokemonId}</div>
        </div>
        <div id="pokemon-stats">
          <div class="stat-name-box">
            <div class="stat-name-value">${pokemonStatsName[5]}</div>
            <div class="stat-name-value">${pokemonStatsName[4]}</div>
            <div class="stat-name-value">${pokemonStatsName[3]}</div>
            <div class="stat-name-value">${pokemonStatsName[0]}</div>
            <div class="stat-name-value">${pokemonStatsName[2]}</div>
            <div class="stat-name-value">${pokemonStatsName[1]}</div>
          </div>
          <div id="stat-value-box">
            <div class="stat-value-bar">
              <div class="stat-value ${pokemonTypes[0].type.name}">${pokemonStatsValue[5]}</div>
            </div>
            <div class="stat-value-bar">
              <div class="stat-value ${pokemonTypes[0].type.name}">${pokemonStatsValue[4]}</div>
            </div>
            <div class="stat-value-bar">
              <div class="stat-value ${pokemonTypes[0].type.name}">${pokemonStatsValue[3]}</div>
            </div>
            <div class="stat-value-bar">
              <div class="stat-value ${pokemonTypes[0].type.name}">${pokemonStatsValue[0]}</div>
            </div>
            <div class="stat-value-bar">
              <div class="stat-value ${pokemonTypes[0].type.name}">${pokemonStatsValue[2]}</div>
            </div>
            <div class="stat-value-bar">
              <div class="stat-value ${pokemonTypes[0].type.name}">${pokemonStatsValue[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="pokemon-description">
      <h1 class="${pokemonTypes[0].type.name}-dark heading">Description</h1>
      <div id="pokemon-description-info"><p>${flavorText}</p>
      </div>
    </div>
    <div id="pokemon-damage-relation">
      <h1 class="${pokemonTypes[0].type.name}-dark heading">Damage relation</h1>
      <div id="pokemon-damage-box">
        <div id="pokemon-damage-to">
          <h2 class="heading-two">When Attack:</h2>

          <div id="pokemon-damage-box-small">
             <div id="no-damage-to" class="type-box">No damage to:</div> 
             <div id="half-damage-to" class="type-box">Not efective against:</div> 
            <div id="double-damage-to" class="type-box">Efective against:</div>
            
          </div>
        </div>
        <div id="pokemon-damage-from">
          <h2 class="heading-two">When Attacked:</h2>

          <div id="pokemon-damage-box-small">
            <div id="no-damage-from" class="type-box">Resistance to:</div>
            <div id="half-damage-from" class="type-box">Immune to:</div>
            <div id="double-damage-from" class="type-box">Bad against:</div>
            
          </div>
        </div>

        </div>
       
       </div>
        <div id="pokemon-evolution">
          <h1 class="${pokemonTypes[0].type.name}-dark heading">Evolution Chain</h1>
          <div id="pokemon-evolution-box">
          </div>
        </div> 

        <div id="pokemon-moves">
            <h1 class="${pokemonTypes[0].type.name}-dark heading">Moves</h1>
            <div id="pokemon-moves-box">
              <div class="type-move-box">
              <h2 id="moves-unknown">Unknown</h2>
              <h2 id="level-up-moves-heading" class="displaynone">Natural Moves</h2> 
              <div id="level-up-moves">
              </div>
              <h2 id="egg-moves-heading" class="displaynone">Egg Moves</h2> 
              <div id="egg-moves">
              </div>
              <h2 id="machine-moves-heading" class="displaynone">Machine Moves</h2> 
              <div id="machine-moves">
              </div>
              <h2 id="tutor-moves-heading" class="displaynone">Tutor Moves</h2> 
              <div id="tutor-moves">
              </div>



            </div>
          </div>
              
           
    `;
    } else {
      this.results.innerHTML = `
    <div id="pokemon-box">
      <button id="close-btn">X</button>
        <div id="pokemon-name" class="${pokemonTypes[1].type.name}-dark">
        ${pokemonName}
        </div>
        <div id="pokemon-info">
          <div id="pokemon-front-image">
            <img
             src="${pokemonFrontImage}"
             alt="Pokemon-Front"
            />
          </div>
          <div id="pokemon-statistic">
            <div id="pokemon-type-id">
              <div id="pokemon-type">
                <div class="type ${pokemonTypes[1].type.name}">${pokemonTypesNames[1]}</div>
                <div class="type ${pokemonTypes[0].type.name}">${pokemonTypesNames[0]}</div>
            </div>
            <div id="pokemon-id">#${pokemonId}</div>
          </div>
          <div id="pokemon-stats">
            <div class="stat-name-box">
              <div class="stat-name-value">${pokemonStatsName[5]}</div>
              <div class="stat-name-value">${pokemonStatsName[4]}</div>
              <div class="stat-name-value">${pokemonStatsName[3]}</div>
              <div class="stat-name-value">${pokemonStatsName[0]}</div>
              <div class="stat-name-value">${pokemonStatsName[2]}</div>
              <div class="stat-name-value">${pokemonStatsName[1]}</div>
            </div>
            <div id="stat-value-box">
              <div class="stat-value-bar">
                <div class="stat-value ${pokemonTypes[1].type.name}">${pokemonStatsValue[5]}</div>
              </div>
              <div class="stat-value-bar">
                <div class="stat-value ${pokemonTypes[1].type.name}">${pokemonStatsValue[4]}</div>
              </div>
              <div class="stat-value-bar">
                <div class="stat-value ${pokemonTypes[1].type.name}">${pokemonStatsValue[3]}</div>
              </div>
              <div class="stat-value-bar">
                <div class="stat-value ${pokemonTypes[1].type.name}">${pokemonStatsValue[0]}</div>
              </div>
              <div class="stat-value-bar">
                <div class="stat-value ${pokemonTypes[1].type.name}">${pokemonStatsValue[2]}</div>
              </div>
              <div class="stat-value-bar">
                <div class="stat-value ${pokemonTypes[1].type.name}">${pokemonStatsValue[1]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="pokemon-description">
        <h1 class="${pokemonTypes[1].type.name}-dark heading">Description</h1>
        <div id="pokemon-description-info"><p>${flavorText}</p>
        </div>
      </div>
      <div id="pokemon-damage-relation">
        <h1 class="${pokemonTypes[1].type.name}-dark heading">Damage relation</h1>
        <div id="pokemon-damage-box">
          <div id="pokemon-damage-to">
            <h2 class="heading-two">When Attack:</h2>

            <div id="pokemon-damage-box-small">
               <div id="no-damage-to" class="type-box">No damage to:</div> 
               <div id="half-damage-to" class="type-box">Not efective against:</div> 
              <div id="double-damage-to" class="type-box">Efective against:</div>
              <div id="super-damage-to" class="type-box">Very efective against:</div>
            </div>
          </div>
          <div id="pokemon-damage-from">
            <h2 class="heading-two">When Attacked:</h2>

            <div id="pokemon-damage-box-small">
              <div id="no-damage-from" class="type-box">Resistance to:</div>
              <div id="half-damage-from" class="type-box">Immune to:</div>
              <div id="double-damage-from" class="type-box">Bad against:</div>
              <div id="super-damage-from" class="type-box">Very bad against:</div>
            </div>
          </div>

          </div>
         </div>

          <div id="pokemon-evolution">
            <h1 class="${pokemonTypes[1].type.name}-dark heading">Evolution Chain</h1>
            <div id="pokemon-evolution-box"></div>
          </div> 
      
          <div id="pokemon-moves">
            <h1 class="${pokemonTypes[1].type.name}-dark heading">Moves</h1>
            <div id="pokemon-moves-box">
              <div class="type-move-box">
                <h2 id="moves-unknown">Unknown</h2>
                <h2 id="level-up-moves-heading" class="displaynone">Natural Moves</h2> 
                <div id="level-up-moves"></div>
                <h2 id="egg-moves-heading" class="displaynone">Egg Moves</h2> 
                <div id="egg-moves"></div>
                <h2 id="machine-moves-heading" class="displaynone">Machine Moves</h2> 
                <div id="machine-moves"></div>
                <h2 id="tutor-moves-heading" class="displaynone">Tutor Moves</h2> 
                <div id="tutor-moves"></div>



            </div>
          </div>
              
           
    
    `;
    }

    const statsBarValues = document.querySelectorAll(".stat-value");
    const statsBarValuesArr = Array.from(statsBarValues);

    let statsArr = [];
    statsBarValuesArr.forEach(stat => {
      statsArr.push(stat.innerText);
    });

    statsBarValues.forEach((bar, index) => {
      const numberValueStat = parseInt(statsArr[index], 10);
      const width = (numberValueStat / 230) * 100;

      bar.style.width = `${width}%`;
    });
  }
  showDamageRelation(
    superDamageFrom,
    doubleDamagesFrom,
    halfDamageFrom,
    noDamageFrom,
    superDamageTo,
    doubleDamageTo,
    halfDamageTo,
    noDamageTo
  ) {
    const superDamageFromDiv = document.getElementById("super-damage-from");
    const doubleDamageFromDiv = document.getElementById(`double-damage-from`);
    const halfDamageFromDiv = document.getElementById(`half-damage-from`);
    const noDamageFromDiv = document.getElementById("no-damage-from");
    const superDamageToDiv = document.getElementById("super-damage-to");
    const doubleDamageToDiv = document.getElementById(`double-damage-to`);
    const halfDamageToDiv = document.getElementById(`half-damage-to`);
    const noDamageToDiv = document.getElementById("no-damage-to");

    // const halfDamageToDiv = document.getElementById(`half-damage-to`);
    // const noDamageToDiv = document.getElementById("no-damage-to");

    superDamageFrom.forEach(dmg => {
      superDamageFromDiv.innerHTML += `
      <div class="relation">
        <div class="type-to ${dmg.type}">${dmg.type}</div>
        <div class="multiple-no-damage-to">x${dmg.power}</div>
    </div>`;
    });
    doubleDamagesFrom.forEach(dmg => {
      doubleDamageFromDiv.innerHTML += `
      <div class="relation">
      <div class="type-to ${dmg.type}">${dmg.type}</div>
      <div class="multiple-no-damage-to">x${dmg.power}</div>
  </div>`;
    });
    halfDamageFrom.forEach(dmg => {
      halfDamageFromDiv.innerHTML += `
      <div class="relation">
        <div class="type-to ${dmg.type}">${dmg.type}</div>
        <div class="multiple-no-damage-to">x${dmg.power}</div>
    </div>
      `;
    });
    noDamageFrom.forEach(dmg => {
      noDamageFromDiv.innerHTML += `
      <div class="relation">
        <div class="type-to ${dmg.type}">${dmg.type}</div>
        <div class="multiple-no-damage-to">x${dmg.power}</div>
    </div>
      `;
    });
    superDamageTo.forEach(dmg => {
      superDamageToDiv.innerHTML += `
      <div class="relation">
        <div class="type-to ${dmg.type}">${dmg.type}</div>
        <div class="multiple-no-damage-to">x${dmg.power}</div>
    </div>`;
    });
    doubleDamageTo.forEach(dmg => {
      doubleDamageToDiv.innerHTML += `
      <div class="relation">
        <div class="type-to ${dmg.type}">${dmg.type}</div>
        <div class="multiple-no-damage-to">x${dmg.power}</div>
    </div>`;
    });
    halfDamageTo.forEach(dmg => {
      halfDamageToDiv.innerHTML += `
      <div class="relation">
        <div class="type-to ${dmg.type}">${dmg.type}</div>
        <div class="multiple-no-damage-to">x${dmg.power}</div>
    </div>
      `;
    });
    noDamageTo.forEach(dmg => {
      noDamageToDiv.innerHTML += `
      <div class="relation">
        <div class="type-to ${dmg.type}">${dmg.type}</div>
        <div class="multiple-no-damage-to">x${dmg.power}</div>
    </div>
      `;
    });
  }
  evolutionChainEvoOne(index, msg, heldItemImg) {
    const pokemonEvolutionBox = document.getElementById(
      "pokemon-evolution-box"
    );

    pokemonEvolutionBox.innerHTML += `
              <div class="pokemon-box">
                <div class="pokemon-image-front"><img class="pokemon-one"></div>
                <div class="icon "><i class="fas fa-long-arrow-alt-right "></i></div>
                <div class="pokemon-image-front"><img class="pokemon-${index}"></div>
              </div>

              <div class="pokemon-description">
                <p class="description">
                ${msg}
                </p>
              </div>

  `;
  }
  showEvolutionChainPhotoOne(pokemonOnePhoto) {
    const photoOne = document.querySelectorAll(".pokemon-one");
    const photoOneArr = Array.from(photoOne);
    photoOneArr.forEach(pokemon => {
      pokemon.src = pokemonOnePhoto;
    });
  }
  showEvolutionChainPhotoTwo(pokemonTwoPhoto, index) {
    const photoTwo = document.querySelector(`.pokemon-${index}`);
    photoTwo.src = pokemonTwoPhoto;
  }
  evolutionChainEvoTwo(index, evolutionMsg) {
    const pokemonEvolutionBox = document.getElementById(
      "pokemon-evolution-box"
    );

    pokemonEvolutionBox.innerHTML += `
              <div class="pokemon-box">
                <div class="pokemon-image-front"><img class="pokemon-three"></div>
                <div class="icon "><i class="fas fa-long-arrow-alt-right "></i></div>
                <div class="pokemon-image-front"><img class="pokemon-${index}-3"></div>
              </div>

              <div class="pokemon-description">
                <p class="description">
                ${evolutionMsg}
                </p>
              </div>

  `;
  }
  showEvolutionChainPhotoThree(pokemonTwoPhoto) {
    const photoTwo = document.querySelectorAll(`.pokemon-three`);
    const photoTwoArr = Array.from(photoTwo);
    photoTwoArr.forEach(pokemon => {
      pokemon.src = pokemonTwoPhoto;
    });
  }
  evolutionItem(item, id) {
    const evolutionItem = document.getElementById(`${id}`);
    evolutionItem.src = item;
  }
  showEvolutionChainPhotoFour(pokemonTwoPhoto, index) {
    const photoTwo = document.querySelector(`.pokemon-${index}-3`);
    photoTwo.src = pokemonTwoPhoto;
  }
  alert(type) {
    const alert = document.getElementById("alert");
    const pokemonSearchInputValue = document.getElementById(
      "pokemon-name-input"
    );
    if (type === "error") {
      alert.innerText = "Pokemon not Found!";
      pokemonSearchInputValue.value = "";
      pokemonSearchInputValue.focus();
      setTimeout(() => {
        alert.innerText = "Search Pokemon again";
      }, 3000);
    } else if (type === "success") {
      alert.innerText = "Pokemon Found!";
      pokemonSearchInputValue.value = "";
      pokemonSearchInputValue.focus();
    }
    if (type === "empty") {
      alert.innerText = "Please write Name or ID";
      pokemonSearchInputValue.focus();
    }
  }
  noEvolution() {
    const pokemonEvolutionBox = document.getElementById(
      "pokemon-evolution-box"
    );
    pokemonEvolutionBox.innerHTML = `<div id="no-evolution"><p>Pokemon has no evolution!</p></div>`;
  }
  move(moveName, acc, power, pp, effect, type, method) {
    const move = document.getElementById(`${method}-moves`);
    const heading = document.getElementById(`${method}-moves-heading`);
    const movesUnknown = document.getElementById(`moves-unknown`);
    let accuracy;

    movesUnknown.classList.contains("displaynone")
      ? ""
      : movesUnknown.classList.add("displaynone");

    heading.classList.contains("displaynone")
      ? heading.classList.remove("displaynone")
      : "";

    acc === null ? (accuracy = "N/A") : (accuracy = `${acc}%`);
    power === null ? (power = "N/A") : (power = `${power}`);

    move.innerHTML += `
    <div class="move">
                  
                    <div class="move-name"> ${moveName} </div>
                    <div class="move-type ${type}"> ${type} </div>
                    <div class="move-btn"> <i class="fas fa-angle-right  move-button"></i> </div>
                  
                </div>
                <div class="move-description">
                 <div class="animation">
                  <div class="move-stats">
                    <div class="move-power">Power: ${power}</div>
                    <div class="move-acc">Acc: ${accuracy}</div>
                    <div class="move-pp">PP: ${pp}</div>
                  </div>
                  <div class="description"><p>${effect}</p></div>
                  </div>
                </div>
    `;
  }

  moveBtn(e) {
    if (e.target.classList.contains("move-button")) {
      e.target.classList.toggle("rotated");
      e.target.parentElement.parentElement.nextElementSibling.classList.toggle(
        "enable"
      );
    }
  }

  createList(list) {
    pokemonList.classList.add("displaynone");
    pokemonList.innerHTML = `
    <div id="pokemon-list-box">
      <div id="close-btn-list"><a href="#">X</a></div>
      <input id="search-pokemon-in-list" placeholder="Search Pokemon">
      <div id="list-box">
        <ul id="list">
          
        </ul>
      </div>


    </div>
    `;
    let filterInput = document.getElementById("search-pokemon-in-list");
    const listPokemon = document.getElementById("list");
    list.forEach((p, index) => {
      listPokemon.innerHTML += `
    
      <li class="pokemon-from-list-number-name">${index + 1}# ${p.name
        .charAt(0)
        .toUpperCase() + p.name.slice(1, p.name.length)}</li>
      
    `;
    });
    filterInput.addEventListener("keyup", filterPokemonList);
  }
  closeBtn() {
    const closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener("click", resultsHide);
  }
  closeBtnList() {
    const closeBtnList = document.getElementById("close-btn-list");
    closeBtnList.addEventListener("click", listHide);
  }
  showPokemonItemList() {
    this.pokemonItemList.classList.remove("displaynone");
    this.pokemonItemList.innerHTML = `
    <div id="pokemon-item-list-box">
      <div id="close-btn-item-list"><a href="#">X</a></div>
      <input id="search-item-in-list" placeholder="Search Item">
      <div id="list-box">
        <ul id="list">
          
        </ul>
      </div>


    </div>`;
  }
  hourglassFun() {
    this.hourglass.classList.remove("displaynone");
    this.hourglass.innerHTML = `<i class="fas fa-hourglass-start fa-3x"></i>`;
    setTimeout(() => {
      this.hourglass.innerHTML = `<i class="fas fa-hourglass-half fa-3x"></i>`;
    }, 500);
    setTimeout(() => {
      this.hourglass.innerHTML = `<i class="fas fa-hourglass-end fa-3x"></i>`;
    }, 1000);
    setTimeout(() => {
      this.hourglass.classList.add("displaynone");
      this.hourglass.classList.add("rotate");
    }, 1500);
  }
  changeIcon(type) {
    if (type === "off") {
      this.soundIcon.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    } else {
      this.soundIcon.innerHTML = `<i class="fas fa-volume-up"></i>`;
    }
  }
}

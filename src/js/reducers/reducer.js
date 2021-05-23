import Player from '../lib/Player.js';

var Newtroost = { "name": "Sotetseg", "image": "./assets/monster_images/Sotetseg.png", "version": "", "combat": 995, "stats": { "amagic": 0, "arange": 0, "att": 250, "attbns": 0, "dcrush": 70, "def": 200, "dmagic": 30, "drange": 150, "dslash": 70, "dstab": 70, "hitpoints": 4000, "mage": 250, "mbns": 0, "range": 0, "rngbns": 0, "str": 250, "strbns": 48 }, "attributes": [] }

const defaultState = {
    playerList: [{}, {}],
    monster: Newtroost
}

function reducer(state = defaultState, action) {
    const newState = { ...state }
    switch (action.type) {
        case "SET_PLAYER":
            newState.playerList = [...newState.playerList]
            newState.playerList[action.index] = new Player(action.player).minimize()
            return newState

        case "ADD_NEW_PLAYER":
            newState.playerList = [...newState.playerList]
            newState.playerList.push({})
            return newState

        case "DELETE_PLAYER":
            newState.playerList = [...newState.playerList]
            newState.playerList.splice(action.index, 1);
            return newState

        case "SET_MONSTER":
            return {
                ...state,
                monster: action.monster
            }

        case "MONSTER_SET_STAT": {
            const monster = { ...state.monster }
            let value = parseInt(action.value)
            if (action.stat === 'hitpoints' && value === 0) {
                value = 1
            }
            monster.stats[action.stat] = value
            console.log('monster set stat', monster)
            return {
                ...state,
                monster: monster
            }
        }
        default:
            return state
    }
}

export default reducer

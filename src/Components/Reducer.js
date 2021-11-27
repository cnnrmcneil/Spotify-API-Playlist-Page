export const initialState = {
    user: null,
    playlists: ['37i9dQZEVXbMDoHDwVN2tF'],
    playing: false,
    item: null,
    // token placeholder for automatic login, set to null when done
    token: null,
    // devices: [0],
    track: null,
    devices: [],
    activePlaylist: '37i9dQZEVXbMDoHDwVN2tF',
    activePlaylistImage: '',
    songlist: []
}

const reducer = (state, action) => {
console.log('Reducer at work: ', action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DEVICES':
            return {
                ...state,
                devices: action.devices
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_TRACK':
            return {
                ...state,
                track: action.track
            }
        case 'SET_ACTIVEPLAYLIST':
            return {
                ...state,
                activePlaylist: action.activePlaylist
            }
        case 'SET_ACTIVEPLAYLISTIMAGE':
            return {
                ...state,
                activePlaylistImage: action.activePlaylistImage
            }
        case 'SET_SONGLIST':
            return {
                ...state,
                songlist: action.songlist
            }
            default: 
                return state;
    }
}

export default reducer;
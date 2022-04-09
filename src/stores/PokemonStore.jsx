import create from 'zustand';

const usePokemonStore = create(set => ({
    teamList: [],
    setTeamList: (teamList) => set(state => ({ ...state, teamList }))
}));

export default usePokemonStore;
import { VueElement, reactive } from "vue"

export const store = reactive({
    basicURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    apriURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    archetypesURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    charactersList: [],
    archetypeList: [],
    shortSearch: '?num=20&offset=0',
    searchValue: 'all',
    searchData: "archetype",
    // searchString: `?${this.searchData}=${this.searchValue}`,
    loading: true //per disattivare loading
});

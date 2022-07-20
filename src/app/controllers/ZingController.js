const { zing } = require('zingmp3-api-next');

class HomeController {

    //[GET] /home
    index(req, res) {
        (async () => {
            const data = await zing.get_home();
            res.json(data);
        })();
    }

    //[GET] /songs
    getSongs(req, res) {
        (async () => {
            const data = await zing.get_song(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /infosong
    getInfoSong(req, res) {
        (async () => {
            const data = await zing.get_song_info(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /lyric
    getLyric(req, res) {
        (async () => {
            const data = await zing.get_song_lyric(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /charthome
    getChartHome(req, res) {
        (async () => {
            const data = await zing.get_home_chart();
            res.json(data);
        })();
    }

    //[GET] /chartrelease
    getChartRelease(req, res) {
        (async () => {
            const data = await zing.get_new_release_chart();
            res.json(data);
        })();
    }

    //[GET] /weekchart
    getWeekChart(req, res) {
        (async () => {
            const data = await zing.get_week_chart(req.query.id, req.query.week, req.query.year);
            res.json(data);
        })();
    }

    //[GET] /radio
    getRadio(req, res) {
        (async () => {
            const data = await zing.get_radio();
            res.json(data);
        })();
    }

    //[GET] /follow
    getFollow(req, res) {
        (async () => {
            const data = await zing.get_list_by_genre(req.query.id, req.query.page);
            res.json(data);
        })();
    }

    //[GET] /artist
    getArtist(req, res) {
        (async () => {
            const data = await zing.get_artist(req.query.name);
            res.json(data);
        })();
    }

    //[GET] /hubhome
    getHub(req, res) {
        (async () => {
            const data = await zing.get_hub_home();
            res.json(data);
        })();
    }

    //[GET] /hubdetail
    getHubDetail(req, res) {
        (async () => {
            const data = await zing.get_hub_detail(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /top100
    getTop100(req, res) {
        (async () => {
            const data = await zing.get_top_100();
            res.json(data);
        })();
    }

    //[GET] /listMv
    getListMv(req, res) {
        (async () => {
            const data = await zing.get_list_mv(req.query.id, req.query.page, req.query.count, req.query.sort);
            res.json(data);
        })();
    }

    //[GET] /category
    getCategoryMv(req, res) {
        (async () => {
            const data = await zing.get_category_mv(req.query.id);
            res.json(data);
        })();
    }

     //[GET] /mv
     getMv(req, res) {
        (async () => {
            const data = await zing.get_mv(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /detailplaylist
    getDetailPlaylist(req, res) {
        (async () => {
            const data = await zing.get_playlist(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /detailplaylist
    getDetailPlaylist(req, res) {
        (async () => {
            const data = await zing.get_playlist(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /suggestedplaylist
    getSuggestedPlaylist(req, res) {
        (async () => {
            const data = await zing.get_suggested_playlists(req.query.id);
            res.json(data);
        })();
    }

     //[GET] /event
     getEvent(req, res) {
        (async () => {
            const data = await zing.get_events();
            res.json(data);
        })();
    }

    //[GET] /eventinfo
    getInfoEvent(req, res) {
        (async () => {
            const data = await zing.get_event_info(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /search
    getSearch(req, res) {
        (async () => {
            const data = await zing.search_all(req.query.q);
            res.json(data);
        })();
    }

    //[GET] /searchttype (type: song || playlist || artist || video)
    getSearchType(req, res) {
        (async () => {
            const data = await zing.search_by_type(req.query.keyword,req.query.type,req.query.page,req.query.count);
            res.json(data);
        })();
    }

    //[GET] /recommendKeyword
    getRecommendKeyword(req, res) {
        (async () => {
            const data = await zing.get_recommend_keyword(req.query.keyword,req.query.type);
            res.json(data);
        })();
    }

    //[GET] /suggestionKeyword
    getSuggestKeyword(req, res) {
        (async () => {
            const data = await zing.get_suggestion_keyword(req.query.keyword);
            res.json(data);
        })();
    }


}

module.exports = new HomeController;
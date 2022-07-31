const { zing } = require('zingmp3-api-next');

class SongsController {

    //[GET] /songs
    index(req, res) {
        (async () => {
            const data = await zing.get_song(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /infosong
    infoSong(req, res) {
        (async () => {
            const data = await zing.get_song_info(req.query.id);
            res.json(data);
        })();
    }

    //[GET] /songs
    lyricSong(req, res) {
        (async () => {
            const data = await zing.get_song(req.query.id);
            res.json(data);
        })();
    }

}

module.exports = new SongsController;
const express = require('express');
const router = express.Router();

const zingController = require('../app/controllers/ZingController');

router.get('/home', zingController.index);
router.get('/songs', zingController.getSongs);
router.get('/infosong', zingController.getInfoSong);
router.get('/lyric', zingController.getLyric);
router.get('/charthome', zingController.getChartHome);
router.get('/chartrelease', zingController.getChartRelease);
router.get('/weekchart', zingController.getWeekChart);
router.get('/radio', zingController.getRadio);
router.get('/follow', zingController.getFollow);
router.get('/artist', zingController.getArtist);
router.get('/hubhome', zingController.getHub);
router.get('/hubdetail', zingController.getHubDetail);
router.get('/top100', zingController.getTop100);
router.get('/listMv', zingController.getListMv);
router.get('/category', zingController.getCategoryMv);
router.get('/mv', zingController.getMv);
router.get('/detailplaylist', zingController.getDetailPlaylist);
router.get('/suggestedplaylist', zingController.getSuggestedPlaylist);
router.get('/event', zingController.getEvent);
router.get('/eventinfo', zingController.getInfoEvent);
router.get('/search', zingController.getSearch);
router.get('/searchtype', zingController.getSearchType);
router.get('/recommendKeyword', zingController.getRecommendKeyword);
router.get('/suggestionKeyword', zingController.getSuggestKeyword);

module.exports = router;
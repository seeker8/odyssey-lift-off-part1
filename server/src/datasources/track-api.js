import { RESTDataSource } from '@apollo/datasource-rest';

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
      return this.get('tracks');
    }

    getAuthor(authorId) {
      return this.get(`author/${encodeURIComponent(authorId)}`);
    }

    getTrack(trackId){
      return this.get(`track/${encodeURIComponent(trackId)}`);
    }

    getTrackModules(trackId){
      return this.get(`track/${encodeURIComponent(trackId)}/modules`);
    }

    getModule(moduleId) {
      return this.get(`module/${encodeURIComponent(moduleId)}`);
    }
}

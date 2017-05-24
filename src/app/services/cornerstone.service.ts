import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/first';

declare const cornerstone;
declare const cornerstoneWADOImageLoader;

@Injectable()

export class CornerstoneService {

  constructor() {


    cornerstoneWADOImageLoader.webWorkerManager.initialize({
      webWorkerPath : '/assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
      taskConfiguration: {
        'decodeTask' : {
          codecsPath: '/assets/cornerstone/codecs/cornerstoneWADOImageLoaderCodecs.js'
        }
      }
    });

  }

  fetchDicomImage(url: string): Observable<any> {
    console.log(`fetching ${url}`)
    return Observable.fromPromise(cornerstone.loadAndCacheImage(`wadouri:${url}`)).first();

  }

}

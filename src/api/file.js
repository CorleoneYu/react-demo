import { ERR_OK, DOMAIN } from 'common/const';
import axios from 'axios';
import request from './request';

export function downloadApi(filepath) {
  // async await
  return axios.post(`${DOMAIN}api/file/download`, {
    filepath
  },{
    responseType: 'blob'
  })
  .then(resp => {
    return Promise.resolve(resp.data);

    // client => server: xxx
    // server : xxx[name] => xxx[URL] => URL
    // server => client: URL
    // client => get URL, download
    // server(save file, cdns, cdn URL)    

  }).catch(err => {
    console.log(err);
    return Promise.reject(err);
  })
}

export function getFilesApi(filepath) {
  return request({
    url: `api/file/getFiles`,
    data: { filepath }
  });
}

import {
  SET_FILE_LIST,  TOGGLE_LOADING
} from './actionTypes';

import { 
  getFilesApi, deleteFileApi, removeDirApi, downloadApi,
} from 'api/file';

import { timeApi, formatSize} from 'common/ultils'

import { createBrowserHistory } from 'history';
const history = createBrowserHistory(); 

const setFileList = (fileList) => ({
  type: SET_FILE_LIST,
  value: fileList
})

const toggleLoading = () => ({
  type: TOGGLE_LOADING
})

export const getFileList = (filePath, history=history) => {
  return async (dispatch) => {
    dispatch(toggleLoading());

    try {
      let files = await getFilesApi(filePath);
      console.log("actionCreators  try------>", files);
      files.forEach( file=>{
        file.mtime = timeApi.format("yyyy-MM-dd hh:mm:ss", new Date(file.mtime))
      })
      dispatch(setFileList(files));
      dispatch(toggleLoading());
      return Promise.resolve("success");

    } catch(err) {
      dispatch(toggleLoading());
      console.log("actionCreators err------>", err);
      history.replace("/");
      return Promise.reject(err);
    }
  }
  
}

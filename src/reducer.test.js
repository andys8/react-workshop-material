import reducer from './getPostReducer';
import * as actions from '../actions/posts/getPost';
import { UPDATE_POST_SUCCESS } from '../actions/posts/updatePost';
import expect from 'expect';
import getPostMock from '../mocks/getPostMock';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle GET_POST_START', () => {
    const startAction = {
      type: actions.GET_POST_START
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, startAction)).toEqual({});
  });

  it('should handle GET_POST_SUCCESS', () => {
    const successAction = {
      type: actions.GET_POST_SUCCESS,
      post: getPostMock.data, // important to pass correct payload, that's what the tests are for ;)
    };
    expect(reducer({}, successAction)).toEqual(getPostMock.data);
  });

  it('should handle UPDATE_POST_SUCCESS', () => {
    const updateAction = {
      type: UPDATE_POST_SUCCESS,
      post: getPostMock.data,
    };
    expect(reducer({}, updateAction)).toEqual(getPostMock.data);
  });

  it('should handle GET_POST_FAIL', () => {
    const failAction = {
      type: actions.GET_POST_FAIL,
      error: { success: false },
    };
    expect(reducer({}, failAction)).toEqual({ error: { success: false } });
  });
});

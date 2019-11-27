import React from 'react'
import { shallow } from 'enzyme'

import Login from './Login'

describe('Login Form Test', ()=>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('password minLength test', ()=>{
    expect(wrapper.find('input[type="password"]').prop("minLength")).toBe("8")
  })
})
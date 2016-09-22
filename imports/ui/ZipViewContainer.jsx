import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ZipView from './ZipView';
import { Zips } from '../collections/zips.js';

export default ZipViewContainer = createContainer(({ params }) => {
  const { tag } = params;
  const zipsHandle = Meteor.subscribe('zips', tag);
  const ready = zipsHandle.ready();
  return{
    ready,
    urls: ready ? Zips.findOne().urls : [],
  };
}, ZipView);

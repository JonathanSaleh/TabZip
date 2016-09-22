import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
const randomstring = require('randomstring');

export const Zips = new Mongo.Collection('zips');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('zips', function tasksPublication() {
    return zips.find();
  });
}

Meteor.methods({
  'zips.zipUp'(urls) {
    check(urls, Array);
    let tag;
    let result = 'undefined';
    while(result == 'undefined'){
      tag = randomstring.generate(5)
      result = Zips.find({tag: tag}).fetch();
      console.log(result);
    }
    console.log(tag)
    Zips.insert({
      tag,
      urls,
      createdAt: new Date(),
    });
  }
});

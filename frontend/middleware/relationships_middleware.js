import { makeRelationship,
        deleteRelationship
      } from '../util/relationship_api_util.js';


import {
        destroyRelationship,
        removeRelationship,
        RelationshipConstants
      } from '../actions/relationship_actions.js';

import {receiveUser, requestUser, requestUsers} from '../actions/user_actions.js';
import {requestCurrentUser} from '../actions/session_actions.js';




export default ({getState, dispatch}) => next => action => {

 const relationshipSuccess = user => {
   dispatch(requestUsers());
   dispatch(requestCurrentUser());
 };

 const result = next(action);
 switch(action.type){
   case RelationshipConstants.CREATE_RELATIONSHIP:
     makeRelationship(action.relationship, relationshipSuccess);
     return next(action);
   case RelationshipConstants.DESTROY_RELATIONSHIP:
     deleteRelationship(action.relationship, relationshipSuccess);
     return next(action);
   default:
     next(action);
 }
 return result;
};

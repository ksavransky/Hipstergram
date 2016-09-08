import { makeRelationship,
        deleteRelationship
      } from '../util/relationship_api_util.js';


import {
        destroyRelationship,
        removeRelationship,
        RelationshipConstants
      } from '../actions/relationship_actions.js';

import {receiveUser} from '../actions/user_actions.js';




export default ({getState, dispatch}) => next => action => {

 const relationshipSuccess = data => dispatch(receiveUser(data));

 const destroyRelationshipSuccess = relationship => dispatch(removeRelationship(relationship));

 const result = next(action);
 switch(action.type){
   case RelationshipConstants.CREATE_RELATIONSHIP:
     makeRelationship(action.relationship, relationshipSuccess);
     return next(action);
   case RelationshipConstants.DESTROY_RELATIONSHIP:
     deleteRelationship(action.relationship, destroyRelationshipSuccess);

     return next(action);
   default:
     next(action);
 }
 return result;
};

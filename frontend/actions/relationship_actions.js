export const RelationshipConstants = {
  CREATE_RELATIONSHIP: "CREATE_RELATIONSHIP",
  DESTROY_RELATIONSHIP: "DESTROY_RELATIONSHIP",
  REMOVE_RELATIONSHIP: "REMOVE_RELATIONSHIP"
};


export const createRelationship = relationship => {
   return({
   type: RelationshipConstants.CREATE_RELATIONSHIP,
   relationship
 });
};

export const destroyRelationship = relationship => ({
  type: RelationshipConstants.DESTROY_RELATIONSHIP,
  relationship
});

export const removeRelationship = id => ({
  type: RelationshipConstants.REMOVE_RELATIONSHIP,
  id
});

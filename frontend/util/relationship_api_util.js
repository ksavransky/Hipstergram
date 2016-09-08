export const makeRelationship = function(relationship, success){
  $.ajax({
    method: 'POST',
    url: 'api/relationships',
    data: relationship,
    success
  });
};

export const deleteRelationship = function(relationship, success){
  $.ajax({
    method: 'DELETE',
    url: `api/relationships/${relationship.id}`,
    success
  });
};

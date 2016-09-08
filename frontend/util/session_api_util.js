import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const updateUser = function(user, success){
  $.ajax({
    method: 'PATCH',
    url: `api/users`,
    data: user,
    success
  });
};

export const fetchCurrentUser= function(success){
  $.ajax({
    method: 'GET',
    url: `api/session`,
    success
  });
};

export const login = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
		success,
		error
	});
};

export const signup = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: user,
		success,
		error
	});
};

export const logout = function(success){
	$.ajax({
		method: 'delete',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};

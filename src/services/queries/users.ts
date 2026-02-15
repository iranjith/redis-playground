import type { CreateUserAttrs } from '$services/types';
import { genId } from '$services/utils';
import { client } from '$services/redis';
import { userskey } from '$services/keys';

export const getUserByUsername = async (username: string) => {};

export const getUserById = async (id: string) => {};

export const createUser = async (attrs: CreateUserAttrs) => {
	const id = genId();
	await client.hSet(userskey(id), serialize(attrs));
	return id;
};

const serialize = (user: CreateUserAttrs) => {
	return {
		userName: user.username,
		password: user.password
	};
};

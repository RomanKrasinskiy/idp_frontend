// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from "../../utils/constans";

// export const idpApi = createApi({
//   reducerPath: "idpApi",
//   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
//   endpoints: (build) => ({
//     getIdp: build.query({
//       query: () => ({
//         url: "/api/v1/idp/",
//       }),
//     }),
//     postIdp: build.mutation({
//       query: (body) => ({
//         url: "/api/v1/idp/",
//         method: "POST",
//         body,
//       }),
//     }),
//     updatetIdp: build.mutation({
//       query: (idp_id, body) => ({
//         url: `/api/v1/idp/${idp_id}/`,
//         method: "PUT",
//         body,
//       }),
//     }),
//     deleteIdp: build.mutation({
//       query: (idp_id) => ({
//         url: `/api/v1/idp/${idp_id}/`,
//         method: "DELETE",
//       }),
//     }),
//   }),
// });

// export const {
//   useGetIdpQuery,
//   useDeleteIdpMutation,
//   usePostIdpMutation,
//   useUpdatetIdpMutation,
// } = idpApi;
import { BASE_URL } from '../../utils/constans';

export class Api {
	#baseurl;

	#headers;

	constructor({ baseUrl, headers }) {
		this.#baseurl = baseUrl;
		this.#headers = headers;
	}

	#onResponse(res) {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	}

	getIdp() {
		return fetch(`${this.#baseurl}/api/v1/idp/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	postIdp() {
		return fetch(`${this.#baseurl}/api/v1/idp/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getIdpId(idp_id) {
		return fetch(`${this.#baseurl}
		/api/v1/idp/${idp_id}/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

}

const api = new Api({
	baseUrl: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
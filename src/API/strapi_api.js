
// const BASE_URL = process.env.REACT_APP_BACKEND_URL
const BASE_URL = 'https://backend-faizzul.herokuapp.com';

export const fetchData = async(endpoint,id)=>{
	
	const response = await fetch(`${BASE_URL}${endpoint}/${id?id:""}`);
	const data = await response.json();
	return data
}

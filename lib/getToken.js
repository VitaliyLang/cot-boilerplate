const getToken = () => ({
  'Authorization': `Bearer ${localStorage.getItem('token')}`
})

export default getToken

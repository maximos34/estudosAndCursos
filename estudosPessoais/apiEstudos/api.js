const apiUrl = "https://dummyjson.com/products"

async function chamarApi(){
  fetch(apiUrl)
  const response = await fetch(apiUrl)
  if (response.status===200){
    const data = await response.json()
    console.log(data)
  }
  else{
    console.log(`Erro na requisição: ${response.status}`)
  } 
}

chamarApi()
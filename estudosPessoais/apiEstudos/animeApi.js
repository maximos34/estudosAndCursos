const apiUrl = "api.anidb.net:9001/httpapi?request=anime"

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
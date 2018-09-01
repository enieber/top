const url = 'http://projetos.topdns.com.br/listar-ramal/data.json';

const getRamais = async () => {
  const result = await fetch(url);
  console.log(result);
  return result.data;
}

const setListRamais = (listRamais) => {
  console.log(listRamais);
}

const start = () => {
  getRamais().then(result => {
	setListRamais(result);
  })
}

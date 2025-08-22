import celularSansung from '../../public/objetos/celular1.png';
import celularBranco from '../../public/objetos/celularbranco.png';
import relogioPulso from '../../public/objetos/relogio1.png';
import cadernoVermelho from '../../public/objetos/caderno1.png';

const objetos = [
		{
			"obj_id": 1,
			"categ_id": 1,
			"usu_id": 1,
			"obj_descricao": "Celular  preto com capinha azul",
			"obj_foto": celularSansung,
			"obj_local_encontrado": "Biblioteca",
			"obj_data_publicacao": "2025-03-17T11:34:18.000Z",
			"obj_status": "Achado",
			"obj_encontrado": 0
		},
		{
			"obj_id": 2,
			"categ_id": 1,
			"usu_id": 1,
			"obj_descricao": "Celular preto com capinha branca",
			"obj_foto": celularBranco,
			"obj_local_encontrado": "Biblioteca",
			"obj_data_publicacao": "2025-03-18T03:00:00.000Z",
			"obj_status": "Perdido",
			"obj_encontrado": 0
		},
		{
			"obj_id": 3,
			"categ_id": 3,
			"usu_id": 5,
			"obj_descricao": "Relógio de pulso prata marca Casio",
			"obj_foto": relogioPulso,
			"obj_local_encontrado": "Cantina",
			"obj_data_publicacao": "2025-03-17T11:34:18.000Z",
			"obj_status": "Achado",
			"obj_encontrado": 1
		},
		{
			"obj_id": 4,
			"categ_id": 4,
			"usu_id": 2,
			"obj_descricao": "Caderno de Matemática capa vermelha",
			"obj_foto": cadernoVermelho,
			"obj_local_encontrado": "Sala 203",
			"obj_data_publicacao": "2025-03-17T11:34:18.000Z",
			"obj_status": "Achado",
			"obj_encontrado": 0
		}
];



export default objetos;
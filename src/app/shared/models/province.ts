export interface Province {
  id: string;
  name: string;
  uf: string;
}

export function provinceUf(): Map<string, string> {
  const aux: Map<string, string> = new Map<string, string>();
  aux.set('AC', 'Acre');
  aux.set('AL', 'Alagoas');
  aux.set('AP', 'Amapá');
  aux.set('AM', 'Amazonas');
  aux.set('BA', 'Bahia');
  aux.set('CE', 'Ceará');
  aux.set('DF', 'Distrito Federal');
  aux.set('ES', 'Espírito Santo');
  aux.set('GO', 'Goiás');
  aux.set('MA', 'Maranhão');
  aux.set('MT', 'Mato Grosso');
  aux.set('MS', 'Mato Grosso do Sul');
  aux.set('MG', 'Minas Gerais');
  aux.set('PA', 'Pará');
  aux.set('PB', 'Paraíba');
  aux.set('PR', 'Paraná');
  aux.set('PE', 'Pernambuco');
  aux.set('PI', 'Piauí');
  aux.set('RJ', 'Rio de Janeiro');
  aux.set('RN', 'Rio Grande do Norte');
  aux.set('RS', 'Rio Grande do Sul');
  aux.set('RO', 'Rondônia');
  aux.set('RR', 'Roraima');
  aux.set('SC', 'Santa Catarina');
  aux.set('SP', 'São Paulo');
  aux.set('SE', 'Sergipe');
  aux.set('TO', 'Tocantins');
  return aux;
}

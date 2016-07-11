<!DOCTYPE html>
<html>
<head>
	<title>Endpoints</title>
	<style>
		table, th, td {
		    border: 1px solid black;
		    border-collapse: collapse;
		}
		th, td {
		    padding: 5px;
		    text-align: left;
		}
	  </style>	
	</head>
<body>
  <%
    String path = request.getContextPath();
    System.out.println("path =  " + path);
  %>  
  <br>	
  <table style="width:100%">
	  <caption>Endpoints</caption>
	  <tr>
	    <th>Funcionalidade</th>
	    <th>Método</th>
	    <th>Parâmetros</th>
	    <th>URL</th>
	  </tr>
	  
	  <tr>
	    <td colspan="4"><a href="http://10.224.123.134:8080/impactorcamentosgpmpu">Impacto Orçamento</a></td>
	  </tr>
	  
	  <tr>
	    <td>Listagem de Concursados</td>
	    <td>GET by QueryParam</td>
	    <td>?dataInicial (dd/mm/yyyy)&dataFinal(dd/mm/yyyy)</td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015">getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015</a></td>
	  </tr>
	  
	  <tr>
	    <td>Concursado Por Inscricao</td>
	    <td>GET by PathParam</td>
	    <td>/inscricao (codigo)</td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/recuperarNomeacaoPorInscricao/10107111">recuperarNomeacaoPorInscricao/10107111</a></td>
	  </tr>
	  
	  <tr>
	    <td>Listagem de Concursos de Remoção</td>
	    <td>GET by QueryParam</td>
	    <td>?dataMaxima (dd/mm/yyyy)</td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDataInicialCompleta?dataInicialRemocao=01/01/2015">getRemocoesPorDataInicialCompleta?dataInicialRemocao=01/01/2015</a></td>
	  </tr>
	  
	  <tr>
	    <td>Concurso de Remoção por Número Vaga</td>
	    <td>GET by PathParam</td>
	    <td>/numeroVaga (codigo)</td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesPorVaga/61742">recuperarRemocoesPorVaga/61742</a></td>
	  </tr>
	  
	  <tr>
	    <td>Datas dos Concursos de Remoção Por Quantitativo Vaga</td>
	    <td> - </td>
	    <td> - </td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarDatasRemocoes">recuperarDatasRemocoes</a></td>
	  </tr>
  </table>
</body>
</html>
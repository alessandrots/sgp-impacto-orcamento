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
    String PathParam_ = request.getContextPathParam();
    System.out.println("PathParam =  " + PathParam_);
  %>  
  <br>	
  <table style="width:100%">
	  <caption>Endpoints</caption>
	  <tr>
	    <th>Funcionalidade</th>
	    <th>M�todo</th>
	    <th>Par�metros</th>
	    <th>URL</th>
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
	    <td>Listagem de Concursos de Remo��o</td>
	    <td>GET by QueryParam</td>
	    <td>?dataMaxima (dd/mm/yyyy)</td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDatas?dataMaxima=01/01/2015">getRemocoesPorDatas?dataMaxima=01/01/2015</a></td>
	  </tr>
	  
	  <tr>
	    <td>Concurso de Remo��o por N�mero Vaga</td>
	    <td>GET by PathParam</td>
	    <td>/numeroVaga (codigo)</td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesPorVaga/40">recuperarRemocoesPorVaga/40</a></td>
	  </tr>
  </table>
</body>
</html>
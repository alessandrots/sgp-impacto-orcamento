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
    String path_ = request.getContextPath();
    System.out.println("path =  " + path_);
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
	    <td>Listagem de Concursados</td>
	    <td>GET</td>
	    <td>[dataInicial (dd/mm/yyyy),	dataFinal(dd/mm/yyyy)]</td>
	    <td><a href="http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015">concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015</a></td>
	  </tr>
	  <tr>
	    <td>Listagem de Concursos de Remoção</td>
	    <td>GET</td>
	    <td>[dataMaxima (dd/mm/yyyy)]</td>
	    <td><a href="http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDatas?dataMaxima=01/01/2015">concursoRemocaoService/getRemocoesPorDatas?dataMaxima=01/01/2015</a></td>
	  </tr>
  </table>
</body>
</html>
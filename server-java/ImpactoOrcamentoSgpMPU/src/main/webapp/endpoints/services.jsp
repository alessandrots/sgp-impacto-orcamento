<!DOCTYPE html>
<html>
<head>
	<title>Endpoints</title>
	
	<script type="text/javascript" src="../js/jquery-1.8.3.js"></script>
	
	<script type="text/javascript">
		//<![CDATA[
	
		    //TODO - botar num arquivo javascript - quebrar em partes
			$(document).ready(function() {
				console.log('Success! ');
				
				$('#btnRest7').click(function(){
		        	console.log('loadContent btn7');
		            //var url_ = "/fiesWeb/ns/rest/servicos/aditamento/validar";
		            var url_ = "/impactorcamentosgpmpu/ns/rest/servicos/aditamento/confirmarreabertura";
		            
		            $.ajax({
		                type: "POST",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,

		                //data: req.presenter,
		                data: formToJSON3(),

		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn7
		        
		        function formToJSON3() {
		            return JSON.stringify({
		            	'nuCpf': '519.641.497-54',
		                'coAditamento': '1',
		                'senha': '1'
		                });
		        }
		        
		        $('#btnRest1').click(function(){
		        	var url_ = "/impactorcamentosgpmpu/ns/rest/pga/rotas/completa/1/101";
		            
		            $.ajax({
		                type: "GET",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,
		                
		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn1
		        
		        
		        $('#btnRest2').click(function(){
		        	var url_ = "/impactorcamentosgpmpu/ns/rest/pga/rotas/detalhe/101";
		            
		            $.ajax({
		                type: "GET",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,
		                
		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn2
		        
		        $('#btnRest3').click(function(){
		        	var url_ = "/impactorcamentosgpmpu/ns/rest/pga/localidadesPorRota/101";
		            
		            $.ajax({
		                type: "GET",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,
		                
		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn3
		        
		        $('#btnRest4').click(function(){
		        	var url_ = "/impactorcamentosgpmpu/ns/rest/pga/hospedeirosPorLocalidade/1";
		            
		            $.ajax({
		                type: "GET",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,
		                
		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn4
		        
		        $('#btnRest5').click(function(){
		        	var url_ = "/impactorcamentosgpmpu/ns/rest/pga/hospedeiros/detalhePorId/1";
		            
		            $.ajax({
		                type: "GET",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,
		                
		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn5
		        
		        
				
				
				//end of line
			});
	// ]]>	
	</script>
	
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
  <!-- 
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
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/RecuperarNomeacaoPorInscricao/10107111">RecuperarNomeacaoPorInscricao/10107111</a></td>
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
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/RecuperarRemocoesPorVaga/61742">RecuperarRemocoesPorVaga/61742</a></td>
	  </tr>
	  
	  <tr>
	    <td>Datas dos Concursos de Remoção Por Quantitativo Vaga</td>
	    <td> - </td>
	    <td> - </td>
	    <td><a href="http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/RecuperarDatasRemocoes">RecuperarDatasRemocoes</a></td>
	  </tr>
	  -->
	  <div>
         <p>
          <ul>
			  <li><button type="button" id="btnRest7"> Aditamento DISPONIVEL POST</button></li>
			  <li><button type="button" id="btnRest1"> Recuperar Rotas Por AgenteCampo </button></li>
			  <li><button type="button" id="btnRest2"> Recuperar Rotas Por ID </button></li>
			  <li><button type="button" id="btnRest3"> Recuperar Localidades Por Rota </button></li>
			  <li><button type="button" id="btnRest4"> Recuperar Hospedeiros Por Localidade </button></li>
			  <li><button type="button" id="btnRest5"> Recuperar Hospedeiro Por ID </button></li>
		  </ul>
         </p>
      </div>
  </table>
</body>
</html>
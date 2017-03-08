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
		        
		        
		        $('#btnRest6').click(function(){
		        	var url_ = "/impactorcamentosgpmpu/ns/rest/pga/armadilhasPorLocalidade/1";
		            
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

		        });//fim btn6
		        
		        $('#btnRest8').click(function(){
		        	var url_ = "/impactorcamentosgpmpu/ns/rest/pga/armadilhas/detalhePorId/1";
		            
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

		        });//fim btn8
		        
		        
		        $('#btnRest9').click(function(){
		        	console.log('loadContent btn9');
		            //var url_ = "/fiesWeb/ns/rest/servicos/aditamento/validar";
		            var url_ = "/impactorcamentosgpmpu/ns/rest/pga/armadilhas/salvarArmadilha";
		            
		            $.ajax({
		                type: "POST",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,

		                //data: req.presenter,
		                data: armadilha(),

		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn9
		      
		        function armadilha() {
		            return JSON.stringify({
		            	'id': 1,
		                'idLocalidade': 1,
		                'codigoArmadilha': '1',
		                'codigoTipoArmadilha': 1,
		                'codigoSituacao': 1,
		                'localEndereco': 'kddeieieim kkeeejj',
		                'codigoObjetivo': 1,
		                'codigoEspecime': 1,
		                'idHospedeiro': 1,
		                'dataUltimaVisita': 18383929,
		                'offline': true,
		            });
		        }
		        
		        $('#btnRest10').click(function(){
		        	console.log('loadContent btn9');
		            //var url_ = "/fiesWeb/ns/rest/servicos/aditamento/validar";
		            var url_ = "/impactorcamentosgpmpu/ns/rest/pga/hospedeiros/salvarHospedeiro";
		            
		            $.ajax({
		                type: "POST",
		             	// The key needs to match your method's input parameter (case-sensitive).
		                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		                contentType: "application/json; charset=UTF-8",
		                dataType: "json",
		                url: url_,

		                //data: req.presenter,
		                data: hospedeiro(),

		                success: function (data) {
		                    console.log('Success = ', data);
		                    //callback(data);
		                },

		                failure: function (errMsg) {
		                    console.log('Failure = ', errMsg);
		                }
		            })

		        });//fim btn10
		        
		        function hospedeiro() {
		            return JSON.stringify({
		            	'id': 1,
		                'idLocalidade': 1,
		                'codigoNomeCientifico': 1,
		                'codigoNomeComum': 1,
		                'codigoSituacao': 1,
		                'detalhes': 'ejreijriejecmdj kkeeejj',
		                'codigoEstadoVegetativo': 1,
		                'latitude': 17.8909,
		                'longitude': 45.922020,
		                'offline': true,
		            });
		        }
				
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
  
	  <div>
         <p>
          <ul>
			  <li><button type="button" id="btnRest7"> Aditamento DISPONIVEL POST</button></li>
			  <li><button type="button" id="btnRest1"> Recuperar Rotas Por AgenteCampo </button></li>
			  <li><button type="button" id="btnRest2"> Recuperar Rotas Por ID </button></li>
			  <li><button type="button" id="btnRest3"> Recuperar Localidades Por Rota </button></li>
			  <li><button type="button" id="btnRest4"> Recuperar Hospedeiros Por Localidade </button></li>
			  <li><button type="button" id="btnRest5"> Recuperar Hospedeiro Por ID </button></li>
			  <li><button type="button" id="btnRest6"> Recuperar Armadilhas Por Localidade </button></li>
			  <li><button type="button" id="btnRest8"> Recuperar Armadilha Por ID </button></li>
			  <li><button type="button" id="btnRest9"> Salvar Armadilha </button></li>
			  <li><button type="button" id="btnRest10"> Salvar Hospedeiro </button></li>
		  </ul>
         </p>
      </div>
  </table>
</body>
</html>
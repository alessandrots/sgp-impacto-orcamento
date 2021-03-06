<h2> 0) Rodando o projeto JAVA:</h2> 
* [JDK 1.8.0_74]
* [JETTY]
* [MAVEN]
* [TOMCAT]
* [ECLIPSE MARS]

************************************************************************
 <h2> 1) Limpar Projeto, Carregar libs, Compilar, Buildar (Independente de Server) </h2>
 $ mvn clean : limpa a pasta target
 $ mvn eclipse:eclipse : atualiza as libs na pasta .m2 (no meu caso =>  ${user.home}/.m2)
 $ mvn compile
 $ mvn package : gerar o war na pasta target

************************************************************************ 
<h2> 2) RODAR a aplicação no TOMCAT</h2>

	<h3> 2.1) Configuração no TOMCAT (v. 7.0.68) </h3> 
	  <role rolename="manager-script"/>
	  <role rolename="manager-gui"/>
	  <user username="test" password="test" roles="manager-script,manager-gui"/>	
	  
	<h3> 2.2) Configuração no Maven (v. 3.0.5)</h3>   
	 dentro da tag <servers>, acrescentar a config abaixo:
		<server>
			<id>mytomcat</id>
			<username>test</username>
			<password>test</password>
		</server>
		
	<h3> 2.3) Configuração no POM</h3>
		<!-- Maven Tomcat Plugin
			http://stackoverflow.com/questions/15410914/tomcatdeploy-cannot-invoke-tomcat-manager-connection-refused 
			http://www.mkyong.com/maven/how-to-deploy-maven-based-war-file-to-tomcat/
			settings.xml (maven) and tomcat-users.xml  (aqui tem q ser o manager-script)
		-->
		  <plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-dependency-plugin</artifactId>
			<executions>
				<execution>
					<id>install</id>
					<phase>install</phase>
					<goals>
						<goal>sources</goal>
					</goals>
				</execution>
			</executions>
		  </plugin>
		  <plugin>
				<groupId>org.apache.tomcat.maven</groupId>
				<artifactId>tomcat7-maven-plugin</artifactId>
				<version>2.2</version>
				<configuration>
					<url>http://localhost:8080/manager/text</url>
					<server>mytomcat</server> <!-- configuração no maven -->
					<path>/produtos-web-1.0-SNAPSHOT</path>
					<username>test</username> <!-- configuração no TOMCAT -->
					<password>test</password>
				</configuration>
		  </plugin>
		  <plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-war-plugin</artifactId>
				<version>2.3</version>
				<configuration>
					<packagingExcludes>WEB-INF/web.xml</packagingExcludes>
				</configuration>
		  </plugin>
	  
	<h2> 2.4) Deploy/Undeploy no Tomcat </h2>
	 $ mvn tomcat7:deploy
		http://<IP>:8080/produtos-web-1.0-SNAPSHOT
		ex.: http://localhost:8080/produtos-web-1.0-SNAPSHOT/	
	 $ mvn tomcat7:undeploy	
	 
************************************************************************
<h2> 3) RODAR a aplicação no JETTY</h2>		
	<h3> 3.1) Configuração no POM</h3>
	 <!--  Maven JETTY Plugin
		http://www.mkyong.com/maven/maven-jetty-plugin-examples/ 
		http://mvnrepository.com/artifact/org.eclipse.jetty/jetty-servlets
	 -->
	<plugin>
		<groupId>org.mortbay.jetty</groupId>
		<artifactId>jetty-maven-plugin</artifactId>
		<configuration>
			 <scanIntervalSeconds>10</scanIntervalSeconds>
			 <webApp>
				 <contextPath>/produtos-web-1.0-SNAPSHOT</contextPath>
			</webApp>
			 <connectors>
				<connector implementation="org.eclipse.jetty.server.nio.SelectChannelConnector">
				   <port>9090</port>
				   <maxIdleTime>60000</maxIdleTime>
				</connector>
			  </connectors>
		</configuration>
	</plugin>	
	
	<h3> 3.2) Configurando datasource</h2>
	Em WEB-INF/jetty-env.xml: Definido as conexões de desenvolvimento e produção
	
	<h3> 3.3) RODAR o SERVER no JETTY</h2>
	 $ mvn jetty:run
		http://<IP>:9090/produtos
		ex.: http://localhost:9090/produtos-web-1.0-SNAPSHOT/
		
************************************************************************		
Maven Tomcat Plugin
http://stackoverflow.com/questions/15410914/tomcatdeploy-cannot-invoke-tomcat-manager-connection-refused 
http://www.mkyong.com/maven/how-to-deploy-maven-based-war-file-to-tomcat/
settings.xml (maven) and tomcat-users.xml  (aqui tem q ser o manager-script)

http://tomcat.apache.org/maven-plugin-trunk/tomcat7-maven-plugin/plugin-info.html		
		
************************************************************************		
 *** (OBS) ==> já configurado no server, no módulo JSON
 <h2> RODAR a aplicação no JETTY</h2>	
	http://crunchify.com/what-is-cross-origin-resource-sharing-cors-how-to-add-it-to-your-java-jersey-web-server/	
************************************************************************	
<h2> 4) Configuração de Conexão de Banco: no arquivo server/context.xml</h2>	
<b> ***  Os campos username e password tiveram os seus valores suprimidos </b>

*** BANCO SP PRODUCAO
http://stackoverflow.com/questions/4832056/java-jdbc-how-to-connect-to-oracle-using-service-name-instead-of-sid
<Resource auth="Container" driverClassName="oracle.jdbc.driver.OracleDriver" 
maxActive="3" maxIdle="0" maxWait="30000" minEvictableIdleTimeMillis="7200000" 
name="jdbc/SGPAdmDS" scope="Shareable" type="javax.sql.DataSource" 
url="jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=adm-bd-prod1-vip.pgr.mpf.gov.br)(HOST=adm-bd-prod2-vip.pgr.mpf.gov.br)(PORT=1521))(LOAD_BALANCE=on))(CONNECT_DATA=(SERVICE_NAME=ADM)))" 
username="" password=""/>
	

*** BANCO SP DESENVOLVIMENTO
<Resource auth="Container" driverClassName="oracle.jdbc.driver.OracleDriver"
maxActive="3" maxIdle="0" maxWait="30000" minEvictableIdleTimeMillis="7200000"
name="jdbc/SGPAdmDS" username="" password="" 
scope="Shareable" type="javax.sql.DataSource" 
url="jdbc:oracle:thin:@admd-bd-desenv.pgr.mpf.gov.br:1521:admd"/>

************************************************************************
<h2> 4) Configuração do Web Deployment Assembly </h2>	
http://stackoverflow.com/questions/6210757/java-lang-classnotfoundexception-org-springframework-web-context-contextloaderl

************************************************************************

************************************************************************

************************************************************************

************************************************************************

************************************************************************

************************************************************************

************************************************************************

************************************************************************

************************************************************************

************************************************************************

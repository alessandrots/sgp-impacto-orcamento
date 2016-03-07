Instalando o samba:

1) apt-get install samba samba-common

2) no final do arquivo
[pasta-publica]
   # aqui depende da seção securiy = share
   path = /mnt/pasta-publica
   guest ok = no
   writeable  = yes
   browseable = yes
   public = yes
   veto files = *.mp3/*.vbs/*.wma/*.avi/*.wav
   default case = lower

3) http://ubuntuforums.org/showthread.php?t=1723762
     na pasta acima do arquivo :
      ex.:        chmod -Rf 777 routes
*************************************************
INSTALAÇÃO ICESCRUM
  Download: https://www.icescrum.com/pricing/#standalone
  Configuração: https://www.icescrum.com/documentation/application-server
 
  *** Arquivos importantes para configuração:
  $ ./geral
    config.groovy  server.xml  setenv.sh

  -  o arquivo setenv.sh tem que ficar no path do tomcat $catalina_home/bin
  -  o arquivo config.groovy pode ficar em qualquer lugar, coloquei em /opt/icescrum, tem os apontamentos de banco de dados (user, pwd, url, driverclass, outros)
  *** o arquivo server.xml é o que tem as alterações para como o 
  <Connector port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
           connectionTimeout="2000" maxThreads="500" URIEncoding="UTF-8"/>

  e 
   <Host name="10.224.126.253"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">

  - Tem que logar no BD:
  $ mysql -u root -h localhost
  mysql> create database icescrum
  
  restartar o tomcat

- DADOS Usuários Icescrum - Projeto Orcamento-SGP
1)  
 user: alessandroteixeira@mpf.mp.br
 pwd: (senha padrão note)
 perfil: Admin main

2) 
  user: alessandrots 
  pwd: (senha padrão note)
  perfil:scrum master

3) 
  user: annedani
  pwd: 123456
  perfil:P.O

4)
URL acesso
  http://10.224.126.253:8080/icescrum

*************************************************



  







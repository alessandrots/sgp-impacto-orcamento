
echo 'Limando o war'
rm -Rf ~/desenvolvimento/java/apache-tomcat-8.0.35/webapps/impacto*


echo 'Atualizando libs'
mvn eclipse:eclipse
sleep 1s

echo 'Compilando'
mvn compile
sleep 1s

echo 'Empacotando'
mvn war:war
sleep 1s

# echo 'Limando o war'
# rm -Rf ~/desenvolvimento/java/apache-tomcat-8.0.35/webapps/impacto*

echo 'Copiando para App Server'
cp ./target/impactorcamentosgpmpu.war ~/desenvolvimento/java/apache-tomcat-8.0.35/webapps/
sleep 1s
